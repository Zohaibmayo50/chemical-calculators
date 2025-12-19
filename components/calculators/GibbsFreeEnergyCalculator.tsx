'use client';

import React, { useState } from 'react';

export default function GibbsFreeEnergyCalculator() {
  const [enthalpy, setEnthalpy] = useState<string>('');
  const [entropy, setEntropy] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('298.15');
  const [gibbsEnergy, setGibbsEnergy] = useState<number | null>(null);
  const [spontaneity, setSpontaneity] = useState<string>('');

  const calculateGibbsEnergy = () => {
    const H = parseFloat(enthalpy);
    const S = parseFloat(entropy);
    const T = parseFloat(temperature);

    if (isNaN(H) || isNaN(S) || isNaN(T)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (T <= 0) {
      alert('Temperature must be positive.');
      return;
    }

    // ΔG = ΔH - TΔS (convert S from J/(mol·K) to kJ/(mol·K) by dividing by 1000)
    const G = H - (T * S / 1000);
    setGibbsEnergy(G);

    // Determine spontaneity
    let spontaneityText = '';
    if (G < 0) {
      spontaneityText = 'Spontaneous (thermodynamically favorable)';
    } else if (G > 0) {
      spontaneityText = 'Non-spontaneous (thermodynamically unfavorable)';
    } else {
      spontaneityText = 'At equilibrium';
    }
    setSpontaneity(spontaneityText);
  };

  const clearFields = () => {
    setEnthalpy('');
    setEntropy('');
    setTemperature('298.15');
    setGibbsEnergy(null);
    setSpontaneity('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enthalpy Change (ΔH) (kJ/mol)
          </label>
          <input
            type="number"
            step="any"
            value={enthalpy}
            onChange={(e) => setEnthalpy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., -92.3"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Negative for exothermic, positive for endothermic
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Entropy Change (ΔS) (J/(mol·K))
          </label>
          <input
            type="number"
            step="any"
            value={entropy}
            onChange={(e) => setEntropy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 186.8"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Positive for increasing disorder
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (K)
          </label>
          <input
            type="number"
            step="0.01"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="298.15"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Standard temperature: 298.15 K (25°C)
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateGibbsEnergy}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </div>

        {gibbsEnergy !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-primary-200 dark:border-primary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Gibbs Free Energy (ΔG):</span>{' '}
                <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                  {gibbsEnergy.toFixed(2)} kJ/mol
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Spontaneity:</span>{' '}
                <span className={`font-bold ${gibbsEnergy < 0 ? 'text-green-600 dark:text-green-400' : gibbsEnergy > 0 ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                  {spontaneity}
                </span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• ΔG &lt; 0: Reaction is spontaneous</li>
                  <li>• ΔG = 0: System is at equilibrium</li>
                  <li>• ΔG &gt; 0: Reaction is non-spontaneous</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: ΔG = ΔH - TΔS
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
