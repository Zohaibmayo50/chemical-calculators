'use client';

import React, { useState } from 'react';

type SolveMode = 'volume' | 'mass' | 'moles';

const GasStoichiometryCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('volume');
  const [gasVolume, setGasVolume] = useState<string>('');
  const [gasMass, setGasMass] = useState<string>('');
  const [gasMoles, setGasMoles] = useState<string>('');
  const [molarMass, setMolarMass] = useState<string>('');
  const [pressure, setPressure] = useState<string>('1');
  const [temperature, setTemperature] = useState<string>('273');
  const [stoichCoeff, setStoichCoeff] = useState<string>('1');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 0.0821; // L·atm/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const P = parseFloat(pressure);
      const T = parseFloat(temperature);
      const coeff = parseFloat(stoichCoeff);
      const M = parseFloat(molarMass);

      if (P <= 0 || T <= 0 || coeff <= 0) {
        setError('Pressure, temperature, and coefficient must be positive');
        return;
      }

      // PV = nRT
      // n = PV/RT

      if (solveMode === 'volume') {
        // Given moles or mass, find volume
        let n = 0;
        
        if (gasMoles) {
          n = parseFloat(gasMoles);
          if (n <= 0) {
            setError('Moles must be positive');
            return;
          }
        } else if (gasMass && molarMass) {
          const mass = parseFloat(gasMass);
          if (mass <= 0 || M <= 0) {
            setError('Mass and molar mass must be positive');
            return;
          }
          n = mass / M;
        } else {
          setError('Enter either moles or (mass + molar mass)');
          return;
        }

        // Adjust for stoichiometric coefficient
        const actualMoles = n * coeff;
        
        // V = nRT/P
        const volume = (actualMoles * R * T) / P;
        setResult(volume);
      } else if (solveMode === 'mass') {
        // Given volume, find mass
        if (!gasVolume || !molarMass) {
          setError('Enter volume and molar mass');
          return;
        }

        const V = parseFloat(gasVolume);
        if (V <= 0 || M <= 0) {
          setError('Volume and molar mass must be positive');
          return;
        }

        // n = PV/RT
        const n = (P * V) / (R * T);
        const actualMoles = n / coeff;
        const mass = actualMoles * M;
        setResult(mass);
      } else if (solveMode === 'moles') {
        // Given volume, find moles
        if (!gasVolume) {
          setError('Enter gas volume');
          return;
        }

        const V = parseFloat(gasVolume);
        if (V <= 0) {
          setError('Volume must be positive');
          return;
        }

        // n = PV/RT
        const n = (P * V) / (R * T);
        const actualMoles = n / coeff;
        setResult(actualMoles);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setGasVolume('');
    setGasMass('');
    setGasMoles('');
    setMolarMass('');
    setPressure('1');
    setTemperature('273');
    setStoichCoeff('1');
    setResult(null);
    setError('');
  };

  const setGas = (gas: string) => {
    const molarMasses: { [key: string]: string } = {
      'H2': '2.02',
      'O2': '32.00',
      'N2': '28.01',
      'CO2': '44.01',
      'NH3': '17.03',
      'CH4': '16.04',
    };
    if (molarMasses[gas]) {
      setMolarMass(molarMasses[gas]);
    }
  };

  const setSTPConditions = () => {
    setPressure('1');
    setTemperature('273');
  };

  const setRoomConditions = () => {
    setPressure('1');
    setTemperature('298');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Gas Stoichiometry Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Ideal Gas Law:</strong> PV = nRT
          <br />
          Combine gas laws with stoichiometry to calculate volume, mass, or moles
          <br />
          At STP (0°C, 1 atm): 1 mol gas = 22.4 L
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { mode: 'volume' as SolveMode, label: 'Volume (L)' },
            { mode: 'mass' as SolveMode, label: 'Mass (g)' },
            { mode: 'moles' as SolveMode, label: 'Moles (mol)' },
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
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Quick Settings
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button
            onClick={setSTPConditions}
            className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
          >
            STP (0°C, 1 atm)
          </button>
          <button
            onClick={setRoomConditions}
            className="py-2 px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 text-sm font-medium transition-colors"
          >
            Room (25°C, 1 atm)
          </button>
        </div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Gas (Molar Mass)
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {['H2', 'O2', 'N2', 'CO2', 'NH3', 'CH4'].map((gas) => (
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
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pressure (P)
            </label>
            <input
              type="number"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter pressure"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">atm</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (T)
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter temperature"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K (Kelvin)</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Stoichiometric Coefficient
          </label>
          <input
            type="number"
            value={stoichCoeff}
            onChange={(e) => setStoichCoeff(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter coefficient"
            step="1"
            min="1"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">From balanced equation (e.g., 2 in 2H₂ + O₂ → 2H₂O)</p>
        </div>

        {(solveMode === 'mass' || solveMode === 'moles') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gas Volume (V) <span className="text-gray-500">(Given)</span>
            </label>
            <input
              type="number"
              value={gasVolume}
              onChange={(e) => setGasVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter volume"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Liters (L)</p>
          </div>
        )}

        {solveMode === 'volume' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Moles of Gas (Optional)
              </label>
              <input
                type="number"
                value={gasMoles}
                onChange={(e) => setGasMoles(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Enter moles"
                step="any"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">mol - OR enter mass + molar mass below</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mass of Gas (Optional)
                </label>
                <input
                  type="number"
                  value={gasMass}
                  onChange={(e) => setGasMass(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="Enter mass"
                  step="any"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">grams (g)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Molar Mass
                </label>
                <input
                  type="number"
                  value={molarMass}
                  onChange={(e) => setMolarMass(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="Enter molar mass"
                  step="any"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">g/mol</p>
              </div>
            </div>
          </>
        )}

        {(solveMode === 'mass' || solveMode === 'moles') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molar Mass
            </label>
            <input
              type="number"
              value={molarMass}
              onChange={(e) => setMolarMass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter molar mass"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">g/mol</p>
          </div>
        )}
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
              {solveMode === 'volume' && 'Gas Volume:'}
              {solveMode === 'mass' && 'Gas Mass:'}
              {solveMode === 'moles' && 'Moles of Gas:'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.toFixed(3)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {solveMode === 'volume' && 'L (Liters)'}
              {solveMode === 'mass' && 'g (grams)'}
              {solveMode === 'moles' && 'mol'}
            </p>
          </div>

          {solveMode === 'volume' && parseFloat(temperature) === 273 && parseFloat(pressure) === 1 && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                At STP: {(result / 22.4).toFixed(3)} moles × 22.4 L/mol = {result.toFixed(3)} L
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• PV = nRT relates pressure, volume, moles, and temperature</li>
              <li>• At STP (273 K, 1 atm): 1 mol = 22.4 L</li>
              <li>• Use stoichiometric ratios from balanced equations</li>
              <li>• R = 0.0821 L·atm/(mol·K)</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Gas Molar Masses (g/mol):</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• H₂: 2.02</div>
          <div>• O₂: 32.00</div>
          <div>• N₂: 28.01</div>
          <div>• CO₂: 44.01</div>
          <div>• NH₃: 17.03</div>
          <div>• CH₄: 16.04</div>
        </div>
      </div>
    </div>
  );
};

export default GasStoichiometryCalculator;
