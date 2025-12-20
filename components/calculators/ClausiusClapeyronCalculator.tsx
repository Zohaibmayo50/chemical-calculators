'use client';

import React, { useState } from 'react';

type CalculationMode = 'vaporPressure' | 'heatVaporization' | 'boilingPoint';

interface CommonSubstance {
  name: string;
  formula: string;
  normalBP: number; // °C at 1 atm
  heatVap: number; // kJ/mol
}

const commonSubstances: CommonSubstance[] = [
  { name: 'Water', formula: 'H₂O', normalBP: 100, heatVap: 40.7 },
  { name: 'Ethanol', formula: 'C₂H₅OH', normalBP: 78.4, heatVap: 38.6 },
  { name: 'Methanol', formula: 'CH₃OH', normalBP: 64.7, heatVap: 35.3 },
  { name: 'Acetone', formula: 'CH₃COCH₃', normalBP: 56.2, heatVap: 29.1 },
  { name: 'Benzene', formula: 'C₆H₆', normalBP: 80.1, heatVap: 30.8 },
  { name: 'Chloroform', formula: 'CHCl₃', normalBP: 61.2, heatVap: 29.2 },
  { name: 'Diethyl ether', formula: '(C₂H₅)₂O', normalBP: 34.6, heatVap: 26.0 },
  { name: 'Mercury', formula: 'Hg', normalBP: 357, heatVap: 59.1 },
];

const ClausiusClapeyronCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('vaporPressure');
  const [pressure1, setPressure1] = useState<string>('');
  const [pressure2, setPressure2] = useState<string>('');
  const [temp1, setTemp1] = useState<string>('');
  const [temp2, setTemp2] = useState<string>('');
  const [heatVap, setHeatVap] = useState<string>('');
  const [selectedSubstance, setSelectedSubstance] = useState<string>('');

  // Gas constant
  const R = 8.314; // J/(mol·K)

  const celsiusToKelvin = (celsius: number): number => celsius + 273.15;
  const kelvinToCelsius = (kelvin: number): number => kelvin - 273.15;

  const calculate = () => {
    if (mode === 'vaporPressure') {
      const P1 = parseFloat(pressure1);
      const T1 = celsiusToKelvin(parseFloat(temp1));
      const T2 = celsiusToKelvin(parseFloat(temp2));
      const deltaHvap = parseFloat(heatVap) * 1000; // Convert kJ/mol to J/mol

      if (isNaN(P1) || isNaN(T1) || isNaN(T2) || isNaN(deltaHvap)) return;

      // ln(P2/P1) = -(ΔHvap/R) × (1/T2 - 1/T1)
      const lnRatio = -(deltaHvap / R) * ((1 / T2) - (1 / T1));
      const P2 = P1 * Math.exp(lnRatio);

      setPressure2(P2.toFixed(4));
    } else if (mode === 'heatVaporization') {
      const P1 = parseFloat(pressure1);
      const P2 = parseFloat(pressure2);
      const T1 = celsiusToKelvin(parseFloat(temp1));
      const T2 = celsiusToKelvin(parseFloat(temp2));

      if (isNaN(P1) || isNaN(P2) || isNaN(T1) || isNaN(T2)) return;

      // ΔHvap = -R × ln(P2/P1) / (1/T2 - 1/T1)
      const deltaHvap = (-R * Math.log(P2 / P1)) / ((1 / T2) - (1 / T1));
      const deltaHvapKJ = deltaHvap / 1000; // Convert to kJ/mol

      setHeatVap(deltaHvapKJ.toFixed(2));
    } else if (mode === 'boilingPoint') {
      const P1 = parseFloat(pressure1);
      const P2 = parseFloat(pressure2);
      const T1 = celsiusToKelvin(parseFloat(temp1));
      const deltaHvap = parseFloat(heatVap) * 1000; // Convert kJ/mol to J/mol

      if (isNaN(P1) || isNaN(P2) || isNaN(T1) || isNaN(deltaHvap)) return;

      // 1/T2 = 1/T1 + (R/ΔHvap) × ln(P2/P1)
      const invT2 = (1 / T1) + (R / deltaHvap) * Math.log(P2 / P1);
      const T2 = 1 / invT2;
      const T2Celsius = kelvinToCelsius(T2);

      setTemp2(T2Celsius.toFixed(2));
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Water vapor pressure at different temperature
      setMode('vaporPressure');
      selectSubstance(commonSubstances[0]); // Water
      setPressure1('1.00');
      setTemp1('100');
      setTemp2('120');
    } else if (example === 2) {
      // Calculate ΔHvap from two points
      setMode('heatVaporization');
      selectSubstance(commonSubstances[1]); // Ethanol
      setPressure1('1.00');
      setTemp1('78.4');
      setPressure2('0.50');
      setTemp2('64.0');
    } else if (example === 3) {
      // Find boiling point at different pressure
      setMode('boilingPoint');
      selectSubstance(commonSubstances[0]); // Water
      setPressure1('1.00');
      setTemp1('100');
      setPressure2('0.50');
    }
  };

  const selectSubstance = (substance: CommonSubstance) => {
    setSelectedSubstance(substance.name);
    setHeatVap(substance.heatVap.toString());
    // Optionally set normal boiling point
    if (mode === 'vaporPressure' || mode === 'boilingPoint') {
      setTemp1(substance.normalBP.toString());
      setPressure1('1.00');
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
            onClick={() => setMode('vaporPressure')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'vaporPressure'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">Vapor Pressure</div>
            <div className="text-sm opacity-75">Find P₂ at T₂</div>
          </button>
          <button
            onClick={() => setMode('heatVaporization')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'heatVaporization'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">ΔH<sub>vap</sub></div>
            <div className="text-sm opacity-75">Calculate heat of vaporization</div>
          </button>
          <button
            onClick={() => setMode('boilingPoint')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'boilingPoint'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Boiling Point</div>
            <div className="text-sm opacity-75">Find T₂ at P₂</div>
          </button>
        </div>
      </div>

      {/* Common Substances Database */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Common Substances (Quick Select)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {commonSubstances.map((substance) => (
            <button
              key={substance.name}
              onClick={() => selectSubstance(substance)}
              className={`p-3 rounded-lg border transition-all text-sm ${
                selectedSubstance === substance.name
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold">{substance.formula}</div>
              <div className="text-xs opacity-75">{substance.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pressure 1 (P₁) in atm
          </label>
          <input
            type="number"
            step="0.001"
            value={pressure1}
            onChange={(e) => setPressure1(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="e.g., 1.00"
          />
        </div>

        {mode !== 'vaporPressure' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pressure 2 (P₂) in atm
            </label>
            <input
              type="number"
              step="0.001"
              value={pressure2}
              onChange={(e) => setPressure2(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.50"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature 1 (T₁) in °C
          </label>
          <input
            type="number"
            step="0.1"
            value={temp1}
            onChange={(e) => setTemp1(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="e.g., 100"
          />
        </div>

        {mode !== 'boilingPoint' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature 2 (T₂) in °C
            </label>
            <input
              type="number"
              step="0.1"
              value={temp2}
              onChange={(e) => setTemp2(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 120"
            />
          </div>
        )}

        {mode !== 'heatVaporization' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Heat of Vaporization (ΔH<sub>vap</sub>) in kJ/mol
            </label>
            <input
              type="number"
              step="0.1"
              value={heatVap}
              onChange={(e) => setHeatVap(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 40.7"
            />
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
            <div className="font-semibold text-sm">Water Vapor Pressure</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">P at 120°C from 100°C</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Ethanol ΔH<sub>vap</sub></div>
            <div className="text-xs text-gray-600 dark:text-gray-400">From two P-T points</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Water BP at 0.5 atm</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Boiling point at altitude</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(pressure2 || temp2 || heatVap) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mode === 'vaporPressure' && pressure2 && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Vapor Pressure at T₂</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {pressure2} atm
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  at {temp2}°C
                </div>
              </div>
            )}

            {mode === 'heatVaporization' && heatVap && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Heat of Vaporization</div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  {heatVap} kJ/mol
                </div>
              </div>
            )}

            {mode === 'boilingPoint' && temp2 && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Boiling Point at P₂</div>
                <div className="text-2xl font-bold text-tertiary-600 dark:text-tertiary-400">
                  {temp2}°C
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  = {(parseFloat(temp2) + 273.15).toFixed(2)} K
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Clausius-Clapeyron Equation:</p>
              <p className="font-mono text-xs">ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁)</p>
              <p className="mt-2 text-xs">
                This equation describes how vapor pressure changes with temperature for a substance undergoing 
                a phase transition.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Understanding the Clausius-Clapeyron Equation
        </h3>
        <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <p>
            <strong>Phase Equilibrium:</strong> The equation relates vapor pressure to temperature for liquid-vapor equilibrium.
          </p>
          <p>
            <strong>Formula:</strong> ln(P₂/P₁) = -(ΔH<sub>vap</sub>/R) × (1/T₂ - 1/T₁), where R = 8.314 J/(mol·K)
          </p>
          <p>
            <strong>Key Insight:</strong> Higher temperatures increase vapor pressure exponentially. Substances with higher 
            ΔH<sub>vap</sub> show stronger temperature dependence.
          </p>
          <p>
            <strong>Applications:</strong> Predict boiling points at different altitudes, design distillation processes, 
            understand meteorology, and optimize refrigeration systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClausiusClapeyronCalculator;
