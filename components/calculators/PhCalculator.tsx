'use client';

import { useState } from 'react';

export default function PhCalculator() {
  const [concentration, setConcentration] = useState<string>('');
  const [pH, setPH] = useState<number | null>(null);
  const [pOH, setPOH] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculatePH = () => {
    setError('');
    setPH(null);
    setPOH(null);

    const h = parseFloat(concentration);

    if (isNaN(h)) {
      setError('Please enter a valid number');
      return;
    }

    if (h <= 0) {
      setError('H⁺ concentration must be positive');
      return;
    }

    const phValue = -Math.log10(h);
    const pohValue = 14 - phValue;
    
    setPH(phValue);
    setPOH(pohValue);
  };

  const clearFields = () => {
    setConcentration('');
    setPH(null);
    setPOH(null);
    setError('');
  };

  const getAcidityLevel = (phValue: number) => {
    if (phValue < 3) return { text: 'Strongly Acidic', color: 'text-red-600 dark:text-red-400' };
    if (phValue < 7) return { text: 'Acidic', color: 'text-orange-600 dark:text-orange-400' };
    if (phValue === 7) return { text: 'Neutral', color: 'text-green-600 dark:text-green-400' };
    if (phValue < 11) return { text: 'Basic', color: 'text-blue-600 dark:text-blue-400' };
    return { text: 'Strongly Basic', color: 'text-purple-600 dark:text-purple-400' };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* H+ Concentration Input */}
        <div>
          <label htmlFor="concentration" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            H⁺ Concentration
          </label>
          <input
            type="number"
            id="concentration"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            placeholder="Enter H⁺ concentration"
            step="any"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            aria-label="Hydrogen ion concentration in mol/L"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Unit: mol/L (M)</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Use scientific notation for very small values (e.g., 1e-5 for 0.00001)</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculatePH}
            className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Calculate pH
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
        {pH !== null && (
          <div className="space-y-4 animate-zoom-in">
            {/* pH Result */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">pH</p>
                <p className="text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                  {pH.toFixed(2)}
                </p>
                <p className={`text-lg font-semibold ${getAcidityLevel(pH).color}`}>
                  {getAcidityLevel(pH).text}
                </p>
              </div>
            </div>

            {/* pOH Result */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">pOH</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">{pOH?.toFixed(2)}</span>
              </div>
            </div>

            {/* pH Scale Visual */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">pH Scale Position</p>
              <div className="relative h-8 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 rounded-lg">
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-gray-900 dark:bg-white"
                  style={{ left: `${(pH / 14) * 100}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                    {pH.toFixed(2)}
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-600 dark:text-gray-400">
                <span>0 (Acidic)</span>
                <span>7 (Neutral)</span>
                <span>14 (Basic)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
