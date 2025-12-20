'use client';

import React, { useState } from 'react';

type SolveMode = 'vrms' | 'T' | 'M';

const KineticMolecularTheoryCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('vrms');
  const [vrms, setVrms] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [molarMass, setMolarMass] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [kineticEnergy, setKineticEnergy] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 8.314; // J/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);
    setKineticEnergy(null);

    try {
      const v = parseFloat(vrms);
      const T = parseFloat(temperature);
      const M = parseFloat(molarMass);

      // v_rms = √(3RT/M)
      // M must be in kg/mol for the equation

      if (solveMode === 'vrms') {
        if (!temperature || !molarMass) {
          setError('Please enter temperature and molar mass');
          return;
        }
        if (T <= 0 || M <= 0) {
          setError('Temperature and molar mass must be positive');
          return;
        }
        // Convert M from g/mol to kg/mol
        const M_kg = M / 1000;
        const calculated = Math.sqrt((3 * R * T) / M_kg);
        setResult(calculated);
        
        // Calculate kinetic energy per molecule: KE = (3/2)kT
        const k_B = 1.381e-23; // Boltzmann constant J/K
        const KE = (3/2) * k_B * T;
        setKineticEnergy(KE);
      } else if (solveMode === 'T') {
        if (!vrms || !molarMass) {
          setError('Please enter v_rms and molar mass');
          return;
        }
        if (v <= 0 || M <= 0) {
          setError('Velocity and molar mass must be positive');
          return;
        }
        // T = (M * v²)/(3R)
        const M_kg = M / 1000;
        const calculated = (M_kg * v * v) / (3 * R);
        setResult(calculated);
        
        const k_B = 1.381e-23;
        const KE = (3/2) * k_B * calculated;
        setKineticEnergy(KE);
      } else if (solveMode === 'M') {
        if (!vrms || !temperature) {
          setError('Please enter v_rms and temperature');
          return;
        }
        if (v <= 0 || T <= 0) {
          setError('Velocity and temperature must be positive');
          return;
        }
        // M = (3RT)/v²
        const M_kg = (3 * R * T) / (v * v);
        const calculated = M_kg * 1000; // Convert back to g/mol
        setResult(calculated);
        
        const k_B = 1.381e-23;
        const KE = (3/2) * k_B * T;
        setKineticEnergy(KE);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setVrms('');
    setTemperature('');
    setMolarMass('');
    setResult(null);
    setKineticEnergy(null);
    setError('');
  };

  const setGas = (gas: string) => {
    const molarMasses: { [key: string]: string } = {
      'H2': '2.02',
      'He': '4.00',
      'N2': '28.01',
      'O2': '32.00',
      'CO2': '44.01',
      'Ar': '39.95',
    };
    if (molarMasses[gas]) {
      setMolarMass(molarMasses[gas]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Kinetic Molecular Theory Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Root-Mean-Square Velocity:</strong> v<sub>rms</sub> = √(3RT/M)
          <br />
          Calculate molecular velocities and kinetic energies from temperature
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { mode: 'vrms' as SolveMode, label: 'v_rms' },
            { mode: 'T' as SolveMode, label: 'Temperature' },
            { mode: 'M' as SolveMode, label: 'Molar Mass' },
          ].map(({ mode, label }) => (
            <button
              key={mode}
              onClick={() => setSolveMode(mode)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                solveMode === mode
                  ? 'bg-tertiary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Gas (Quick Fill Molar Mass)
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {['H2', 'He', 'N2', 'O2', 'CO2', 'Ar'].map((gas) => (
            <button
              key={gas}
              onClick={() => setGas(gas)}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-sm font-medium transition-colors"
            >
              {gas}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Root-Mean-Square Velocity (v<sub>rms</sub>) {solveMode === 'vrms' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={vrms}
            onChange={(e) => setVrms(e.target.value)}
            disabled={solveMode === 'vrms'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter v_rms"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">m/s</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (T) {solveMode === 'T' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            disabled={solveMode === 'T'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter temperature"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molar Mass (M) {solveMode === 'M' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={molarMass}
            onChange={(e) => setMolarMass(e.target.value)}
            disabled={solveMode === 'M'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter molar mass"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">g/mol</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 
                   transition-colors duration-200"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {result !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {solveMode === 'vrms' && 'Root-Mean-Square Velocity:'}
              {solveMode === 'T' && 'Temperature:'}
              {solveMode === 'M' && 'Molar Mass:'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {solveMode === 'vrms' && 'm/s'}
              {solveMode === 'T' && 'K'}
              {solveMode === 'M' && 'g/mol'}
            </p>
          </div>

          {kineticEnergy !== null && (
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Average Kinetic Energy per Molecule:
              </h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {kineticEnergy.toExponential(3)} J
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                KE = (3/2)k<sub>B</sub>T where k<sub>B</sub> = 1.381×10⁻²³ J/K
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Lighter molecules move faster at the same temperature</li>
              <li>• Higher temperature means higher molecular velocities</li>
              <li>• All gases have the same average KE at the same temperature</li>
              <li>• v<sub>rms</sub> is slightly higher than average velocity</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Gas Molar Masses:</h4>
        <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• H₂: 2.02 g/mol</div>
          <div>• He: 4.00 g/mol</div>
          <div>• N₂: 28.01 g/mol</div>
          <div>• O₂: 32.00 g/mol</div>
          <div>• CO₂: 44.01 g/mol</div>
          <div>• Ar: 39.95 g/mol</div>
        </div>
      </div>
    </div>
  );
};

export default KineticMolecularTheoryCalculator;
