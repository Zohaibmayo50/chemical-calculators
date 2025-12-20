'use client';

import React, { useState } from 'react';

type CalculationMode = 'activityCoeff' | 'ionicStrength' | 'activity';

interface Electrolyte {
  name: string;
  formula: string;
  cationCharge: number;
  anionCharge: number;
  type: string;
}

const electrolytes: Electrolyte[] = [
  { name: 'Sodium Chloride', formula: 'NaCl', cationCharge: 1, anionCharge: -1, type: '1:1' },
  { name: 'Potassium Nitrate', formula: 'KNO₃', cationCharge: 1, anionCharge: -1, type: '1:1' },
  { name: 'Calcium Chloride', formula: 'CaCl₂', cationCharge: 2, anionCharge: -1, type: '2:1' },
  { name: 'Magnesium Sulfate', formula: 'MgSO₄', cationCharge: 2, anionCharge: -2, type: '2:2' },
  { name: 'Aluminum Chloride', formula: 'AlCl₃', cationCharge: 3, anionCharge: -1, type: '3:1' },
  { name: 'Iron(III) Sulfate', formula: 'Fe₂(SO₄)₃', cationCharge: 3, anionCharge: -2, type: '3:2' },
];

const ActivityCoefficientCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('activityCoeff');
  const [concentration, setConcentration] = useState<string>('');
  const [ionCharge, setIonCharge] = useState<string>('');
  const [ionicStrength, setIonicStrength] = useState<string>('');
  const [activityCoeff, setActivityCoeff] = useState<string>('');
  const [activity, setActivity] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('25');
  const [ionSize, setIonSize] = useState<string>('3');
  const [useExtended, setUseExtended] = useState<boolean>(false);
  const [selectedElectrolyte, setSelectedElectrolyte] = useState<string>('');

  const calculate = () => {
    const T = parseFloat(temperature) + 273.15; // Convert to Kelvin
    const conc = parseFloat(concentration);
    const z = parseFloat(ionCharge);
    const a = parseFloat(ionSize) * 1e-10; // Convert Å to m
    
    // Debye-Hückel parameters
    // At 25°C: A ≈ 0.509 (mol/kg)^(-1/2), B ≈ 0.328 (mol/kg)^(-1/2) Å^(-1)
    const A = 0.509 * Math.sqrt(T / 298.15);
    const B = 0.328 * Math.sqrt(T / 298.15);

    if (mode === 'activityCoeff') {
      const I = parseFloat(ionicStrength);
      if (isNaN(I) || isNaN(z)) return;

      let logGamma: number;
      
      if (useExtended && !isNaN(a)) {
        // Extended Debye-Hückel equation
        logGamma = -(A * z * z * Math.sqrt(I)) / (1 + B * (a * 1e10) * Math.sqrt(I));
      } else {
        // Debye-Hückel limiting law
        logGamma = -A * z * z * Math.sqrt(I);
      }
      
      const gamma = Math.pow(10, logGamma);
      setActivityCoeff(gamma.toFixed(4));
      
      // Calculate activity if concentration is known
      if (!isNaN(conc)) {
        const act = conc * gamma;
        setActivity(act.toFixed(4));
      }
    } else if (mode === 'ionicStrength') {
      // Calculate ionic strength from concentration
      if (isNaN(conc) || isNaN(z)) return;
      
      // For single ion: I = 0.5 * c * z²
      // For full electrolyte, need stoichiometry
      const I = 0.5 * conc * z * z;
      setIonicStrength(I.toFixed(4));
    } else if (mode === 'activity') {
      // Calculate activity from concentration and activity coefficient
      const gamma = parseFloat(activityCoeff);
      if (isNaN(conc) || isNaN(gamma)) return;
      
      const act = conc * gamma;
      setActivity(act.toFixed(4));
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Dilute NaCl solution
      setMode('activityCoeff');
      setIonicStrength('0.01');
      setIonCharge('1');
      setTemperature('25');
      setUseExtended(false);
    } else if (example === 2) {
      // Calculate ionic strength for 0.1 M CaCl₂
      setMode('ionicStrength');
      setConcentration('0.1');
      setIonCharge('2');
      setTemperature('25');
    } else if (example === 3) {
      // Extended equation for moderate concentration
      setMode('activityCoeff');
      setIonicStrength('0.1');
      setIonCharge('2');
      setIonSize('4');
      setTemperature('25');
      setUseExtended(true);
    }
  };

  const selectElectrolyte = (electrolyte: Electrolyte) => {
    setSelectedElectrolyte(electrolyte.name);
    if (mode === 'ionicStrength') {
      // For electrolytes, ionic strength calculation is more complex
      const conc = parseFloat(concentration);
      if (!isNaN(conc)) {
        // Example: for CaCl₂ → Ca²⁺ + 2Cl⁻
        // I = 0.5 * (c_Ca * 4 + 2*c_Cl * 1)
        // = 0.5 * c * (z_+² * ν_+ + z_-² * ν_-)
        let I: number;
        if (electrolyte.type === '1:1') {
          I = conc;
        } else if (electrolyte.type === '2:1') {
          I = 3 * conc; // 0.5 * c * (4*1 + 1*2)
        } else if (electrolyte.type === '2:2') {
          I = 4 * conc; // 0.5 * c * (4*1 + 4*1)
        } else if (electrolyte.type === '3:1') {
          I = 6 * conc; // 0.5 * c * (9*1 + 1*3)
        } else if (electrolyte.type === '3:2') {
          I = 15 * conc / 2; // More complex stoichiometry
        } else {
          I = conc;
        }
        setIonicStrength(I.toFixed(4));
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      {/* Mode Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setMode('activityCoeff')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'activityCoeff'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">Activity Coefficient</div>
            <div className="text-sm opacity-75">Calculate γ from I</div>
          </button>
          <button
            onClick={() => setMode('ionicStrength')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'ionicStrength'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">Ionic Strength</div>
            <div className="text-sm opacity-75">Calculate I from c</div>
          </button>
          <button
            onClick={() => setMode('activity')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'activity'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Activity</div>
            <div className="text-sm opacity-75">a = γ × c</div>
          </button>
        </div>
      </div>

      {/* Electrolyte Selection */}
      {mode === 'ionicStrength' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select Electrolyte (optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {electrolytes.map((elec) => (
              <button
                key={elec.name}
                onClick={() => selectElectrolyte(elec)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedElectrolyte === elec.name
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                <div className="font-semibold text-sm">{elec.formula}</div>
                <div className="text-xs opacity-75">{elec.type} electrolyte</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Extended Equation Toggle */}
      {mode === 'activityCoeff' && (
        <div className="mb-6">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={useExtended}
              onChange={(e) => setUseExtended(e.target.checked)}
              className="w-5 h-5 text-primary-600 rounded focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Use Extended Debye-Hückel Equation (for I &gt; 0.01 M)
            </span>
          </label>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {(mode === 'activityCoeff' || mode === 'activity') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Concentration (c) in mol/L
            </label>
            <input
              type="number"
              step="0.01"
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.1"
            />
          </div>
        )}

        {(mode === 'activityCoeff' || mode === 'ionicStrength') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ion Charge (z)
            </label>
            <input
              type="number"
              step="1"
              value={ionCharge}
              onChange={(e) => setIonCharge(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 1, 2, or 3"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use absolute value (e.g., 2 for Ca²⁺ or SO₄²⁻)
            </p>
          </div>
        )}

        {(mode === 'activityCoeff' || (mode === 'ionicStrength' && selectedElectrolyte)) && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ionic Strength (I) in mol/L
            </label>
            <input
              type="number"
              step="0.01"
              value={ionicStrength}
              onChange={(e) => setIonicStrength(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.01"
              readOnly={mode === 'ionicStrength'}
            />
          </div>
        )}

        {mode === 'activity' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Activity Coefficient (γ)
            </label>
            <input
              type="number"
              step="0.001"
              value={activityCoeff}
              onChange={(e) => setActivityCoeff(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.9"
            />
          </div>
        )}

        {mode === 'ionicStrength' && !selectedElectrolyte && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Concentration (c) in mol/L
            </label>
            <input
              type="number"
              step="0.01"
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.1"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (°C)
          </label>
          <input
            type="number"
            step="1"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="25"
          />
        </div>

        {useExtended && mode === 'activityCoeff' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ion Size Parameter (å) in Ångströms
            </label>
            <input
              type="number"
              step="0.5"
              value={ionSize}
              onChange={(e) => setIonSize(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="3-9"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Typical: 3-9 Å (larger for hydrated ions)
            </p>
          </div>
        )}
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
      >
        Calculate
      </button>

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => fillExample(1)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Dilute Solution</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">I = 0.01 M, z = 1</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Ionic Strength</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">0.1 M CaCl₂</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Extended Equation</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">I = 0.1 M, z = 2</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(activityCoeff || ionicStrength || activity) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ionicStrength && mode !== 'activityCoeff' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ionic Strength</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  I = {ionicStrength} M
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  I = ½Σc<sub>i</sub>z<sub>i</sub>²
                </div>
              </div>
            )}

            {activityCoeff && mode !== 'activity' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activity Coefficient</div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  γ = {activityCoeff}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(activityCoeff) < 1 ? 'Non-ideal (γ < 1)' : parseFloat(activityCoeff) === 1 ? 'Ideal (γ = 1)' : 'Non-ideal (γ > 1)'}
                </div>
              </div>
            )}

            {activity && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Activity</div>
                <div className="text-2xl font-bold text-tertiary-600 dark:text-tertiary-400">
                  a = {activity} M
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Effective concentration
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Debye-Hückel Equation:</p>
              {useExtended ? (
                <>
                  <p className="font-mono mb-2">log γ = -Az²√I / (1 + Bå√I)</p>
                  <p className="text-xs">Extended equation valid for I up to ~0.1 M</p>
                </>
              ) : (
                <>
                  <p className="font-mono mb-2">log γ = -Az²√I</p>
                  <p className="text-xs">Limiting law valid for I &lt; 0.01 M</p>
                </>
              )}
              <p className="text-xs mt-2">
                At {temperature}°C: A ≈ {(0.509 * Math.sqrt((parseFloat(temperature) + 273.15) / 298.15)).toFixed(3)} (mol/kg)⁻¹/²
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
          Understanding Activity Coefficients
        </h3>
        <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
          <p>
            <strong>Activity vs Concentration:</strong> In non-ideal solutions, ions don't behave as if they're at their 
            analytical concentration due to ionic interactions. Activity (a = γc) is the "effective concentration" that 
            properly describes thermodynamic behavior.
          </p>
          <p>
            <strong>Activity Coefficient (γ):</strong> Quantifies deviation from ideality. γ = 1 means ideal behavior, 
            γ &lt; 1 (common in ionic solutions) means attractive interactions reduce effective concentration, γ &gt; 1 
            (rare, seen at high concentrations) means repulsive interactions dominate.
          </p>
          <p>
            <strong>Ionic Strength:</strong> I = ½Σc<sub>i</sub>z<sub>i</sub>² measures total ionic environment. Higher 
            charge ions contribute more heavily (z² dependence). High I → stronger ion-ion interactions → larger deviation 
            from ideality.
          </p>
          <p>
            <strong>Debye-Hückel Theory:</strong> Models ionic atmosphere around each ion. Limiting law (log γ = -Az²√I) 
            works for dilute solutions (I &lt; 0.01 M). Extended equation includes ion size parameter å for moderate 
            concentrations (I up to ~0.1 M).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCoefficientCalculator;
