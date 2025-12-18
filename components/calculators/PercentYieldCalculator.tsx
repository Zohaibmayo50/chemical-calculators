'use client';

import { useState } from 'react';

export default function PercentYieldCalculator() {
  const [actualYield, setActualYield] = useState<string>('');
  const [theoreticalYield, setTheoreticalYield] = useState<string>('');
  const [percentYield, setPercentYield] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculatePercentYield = () => {
    setError('');
    setPercentYield(null);

    const actual = parseFloat(actualYield);
    const theoretical = parseFloat(theoreticalYield);

    if (isNaN(actual) || isNaN(theoretical)) {
      setError('Please enter valid numbers for both fields');
      return;
    }

    if (actual < 0 || theoretical <= 0) {
      setError('Yields must be non-negative and theoretical yield must be positive');
      return;
    }

    if (actual > theoretical) {
      setError('Actual yield cannot exceed theoretical yield');
      return;
    }

    const result = (actual / theoretical) * 100;
    setPercentYield(result);
  };

  const clearFields = () => {
    setActualYield('');
    setTheoreticalYield('');
    setPercentYield(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Actual Yield Input */}
        <div>
          <label htmlFor="actualYield" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Actual Yield
          </label>
          <input
            type="number"
            id="actualYield"
            value={actualYield}
            onChange={(e) => setActualYield(e.target.value)}
            placeholder="Enter actual yield"
            step="any"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            aria-label="Actual yield obtained from reaction"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Unit: g (or any consistent unit)</p>
        </div>

        {/* Theoretical Yield Input */}
        <div>
          <label htmlFor="theoreticalYield" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Theoretical Yield
          </label>
          <input
            type="number"
            id="theoreticalYield"
            value={theoreticalYield}
            onChange={(e) => setTheoreticalYield(e.target.value)}
            placeholder="Enter theoretical yield"
            step="any"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            aria-label="Theoretical yield calculated from stoichiometry"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Unit: g (same as actual yield)</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculatePercentYield}
            className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg animate-fade-in">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700 dark:text-red-300 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Result */}
        {percentYield !== null && (
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600 animate-zoom-in">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Percent Yield</p>
              <p className="text-4xl font-bold text-primary-700 dark:text-primary-400 mb-1">
                {percentYield.toFixed(2)}%
              </p>
              <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This reaction achieved a <strong>{percentYield.toFixed(2)}%</strong> yield
                </p>
                {percentYield >= 90 && (
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2 font-medium">Excellent yield!</p>
                )}
                {percentYield >= 70 && percentYield < 90 && (
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2 font-medium">Good yield</p>
                )}
                {percentYield < 70 && (
                  <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-medium">Consider optimizing reaction conditions</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
