'use client';

import { useState } from 'react';

export default function DilutionCalculator() {
  const [m1, setM1] = useState<string>('');
  const [v1, setV1] = useState<string>('');
  const [m2, setM2] = useState<string>('');
  const [v2, setV2] = useState<string>('');
  const [solving, setSolving] = useState<'v2' | 'm2'>('v2');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    const M1 = parseFloat(m1);
    const V1 = parseFloat(v1);
    const M2 = parseFloat(m2);
    const V2 = parseFloat(v2);

    if (solving === 'v2') {
      if (isNaN(M1) || isNaN(V1) || isNaN(M2)) {
        setError('Please enter valid numbers for M₁, V₁, and M₂');
        return;
      }
      if (M1 <= 0 || V1 <= 0 || M2 <= 0) {
        setError('All values must be positive');
        return;
      }
      if (M2 > M1) {
        setError('Final concentration (M₂) cannot be greater than initial concentration (M₁)');
        return;
      }
      
      const calculatedV2 = (M1 * V1) / M2;
      setResult(calculatedV2);
    } else {
      if (isNaN(M1) || isNaN(V1) || isNaN(V2)) {
        setError('Please enter valid numbers for M₁, V₁, and V₂');
        return;
      }
      if (M1 <= 0 || V1 <= 0 || V2 <= 0) {
        setError('All values must be positive');
        return;
      }
      if (V2 < V1) {
        setError('Final volume (V₂) must be greater than initial volume (V₁)');
        return;
      }
      
      const calculatedM2 = (M1 * V1) / V2;
      setResult(calculatedM2);
    }
  };

  const clearFields = () => {
    setM1('');
    setV1('');
    setM2('');
    setV2('');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Solving For Toggle */}
        <div className="flex items-center justify-center gap-4 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <button
            onClick={() => setSolving('v2')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              solving === 'v2'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Find V₂
          </button>
          <button
            onClick={() => setSolving('m2')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              solving === 'm2'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Find M₂
          </button>
        </div>

        {/* Input Fields */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* M1 Input */}
          <div>
            <label htmlFor="m1" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Initial Concentration (M₁)
            </label>
            <input
              type="number"
              id="m1"
              value={m1}
              onChange={(e) => setM1(e.target.value)}
              placeholder="e.g., 5.0"
              step="any"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mol/L (M)</p>
          </div>

          {/* V1 Input */}
          <div>
            <label htmlFor="v1" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Initial Volume (V₁)
            </label>
            <input
              type="number"
              id="v1"
              value={v1}
              onChange={(e) => setV1(e.target.value)}
              placeholder="e.g., 10"
              step="any"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mL or L (consistent)</p>
          </div>

          {/* M2 Input (disabled when solving for M2) */}
          <div>
            <label htmlFor="m2" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Final Concentration (M₂) {solving === 'm2' && <span className="text-primary-600">← Solving</span>}
            </label>
            <input
              type="number"
              id="m2"
              value={m2}
              onChange={(e) => setM2(e.target.value)}
              placeholder={solving === 'm2' ? 'Will be calculated' : 'e.g., 1.0'}
              step="any"
              disabled={solving === 'm2'}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mol/L (M)</p>
          </div>

          {/* V2 Input (disabled when solving for V2) */}
          <div>
            <label htmlFor="v2" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Final Volume (V₂) {solving === 'v2' && <span className="text-primary-600">← Solving</span>}
            </label>
            <input
              type="number"
              id="v2"
              value={v2}
              onChange={(e) => setV2(e.target.value)}
              placeholder={solving === 'v2' ? 'Will be calculated' : 'e.g., 50'}
              step="any"
              disabled={solving === 'v2'}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mL or L (match V₁)</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
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
        {result !== null && (
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600 animate-zoom-in">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                {solving === 'v2' ? 'Final Volume (V₂)' : 'Final Concentration (M₂)'}
              </p>
              <p className="text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                {result.toFixed(4)}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {solving === 'v2' ? 'Same unit as V₁' : 'mol/L (M)'}
              </p>
              
              {solving === 'v2' && parseFloat(v1) > 0 && (
                <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Volume to add:</span> {(result - parseFloat(v1)).toFixed(4)} (same unit)
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quick Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-sm text-blue-900 dark:text-blue-300">
            <span className="font-semibold">Dilution Principle:</span> M₁V₁ = M₂V₂ (moles of solute remain constant)
          </p>
        </div>
      </div>
    </div>
  );
}
