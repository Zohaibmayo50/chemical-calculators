'use client';

import React, { useState } from 'react';

export default function MichaelisMentenCalculator() {
  const [substrateConcentration, setSubstrateConcentration] = useState<string>('');
  const [vmax, setVmax] = useState<string>('');
  const [km, setKm] = useState<string>('');
  const [velocity, setVelocity] = useState<number | null>(null);
  const [percentVmax, setPercentVmax] = useState<number | null>(null);

  const calculateVelocity = () => {
    const S = parseFloat(substrateConcentration);
    const Vmax = parseFloat(vmax);
    const Km = parseFloat(km);

    if (isNaN(S) || isNaN(Vmax) || isNaN(Km)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (S < 0 || Vmax <= 0 || Km <= 0) {
      alert('Substrate concentration must be non-negative, Vmax and Km must be positive.');
      return;
    }

    // Michaelis-Menten equation: v = (Vmax × [S]) / (Km + [S])
    const v = (Vmax * S) / (Km + S);
    const percent = (v / Vmax) * 100;

    setVelocity(v);
    setPercentVmax(percent);
  };

  const clearFields = () => {
    setSubstrateConcentration('');
    setVmax('');
    setKm('');
    setVelocity(null);
    setPercentVmax(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Substrate Concentration [S] (mM or µM)
          </label>
          <input
            type="number"
            step="any"
            value={substrateConcentration}
            onChange={(e) => setSubstrateConcentration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Maximum Velocity (V<sub>max</sub>) (same units/time)
          </label>
          <input
            type="number"
            step="any"
            value={vmax}
            onChange={(e) => setVmax(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Michaelis Constant (K<sub>m</sub>) (same units as [S])
          </label>
          <input
            type="number"
            step="any"
            value={km}
            onChange={(e) => setKm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 5"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            K<sub>m</sub> = substrate concentration at ½V<sub>max</sub>
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateVelocity}
            className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
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

        {velocity !== null && percentVmax !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Reaction Velocity (v):</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold text-xl">
                  {velocity.toFixed(4)}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">% of V<sub>max</sub>:</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                  {percentVmax.toFixed(2)}%
                </span>
              </p>
              <div className="mt-4 bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                <div 
                  className="bg-tertiary-600 h-full transition-all duration-500"
                  style={{ width: `${Math.min(percentVmax, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: v = (V<sub>max</sub> × [S]) / (K<sub>m</sub> + [S])
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
