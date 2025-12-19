'use client';

import React, { useState } from 'react';

export default function OsmoticPressureCalculator() {
  const [molarity, setMolarity] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('298.15');
  const [vanTHoffFactor, setVanTHoffFactor] = useState<string>('1');
  const [osmoticPressure, setOsmoticPressure] = useState<number | null>(null);

  const R = 0.08206; // L·atm/(mol·K)

  const calculateOsmoticPressure = () => {
    const M = parseFloat(molarity);
    const T = parseFloat(temperature);
    const i = parseFloat(vanTHoffFactor);

    if (isNaN(M) || isNaN(T) || isNaN(i)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (M < 0 || T <= 0 || i <= 0) {
      alert('Molarity must be non-negative, temperature and van\'t Hoff factor must be positive.');
      return;
    }

    // π = iMRT
    const pi = i * M * R * T;
    setOsmoticPressure(pi);
  };

  const clearFields = () => {
    setMolarity('');
    setTemperature('298.15');
    setVanTHoffFactor('1');
    setOsmoticPressure(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molarity (M)
          </label>
          <input
            type="number"
            step="0.001"
            value={molarity}
            onChange={(e) => setMolarity(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.1"
          />
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Van&apos;t Hoff Factor (i)
          </label>
          <input
            type="number"
            step="0.1"
            value={vanTHoffFactor}
            onChange={(e) => setVanTHoffFactor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="1 for non-electrolytes"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            i = 1 for non-electrolytes, 2 for NaCl, 3 for CaCl₂, etc.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateOsmoticPressure}
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

        {osmoticPressure !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-primary-200 dark:border-primary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Osmotic Pressure (π):</span>{' '}
                <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                  {osmoticPressure.toFixed(4)} atm
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">In other units:</span>
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                <li>{(osmoticPressure * 101.325).toFixed(2)} kPa</li>
                <li>{(osmoticPressure * 760).toFixed(1)} mmHg (torr)</li>
                <li>{(osmoticPressure * 1.01325).toFixed(4)} bar</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: π = iMRT
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                R = 0.08206 L·atm/(mol·K)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
