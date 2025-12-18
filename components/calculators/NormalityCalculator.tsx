'use client';

import { useState } from 'react';

export default function NormalityCalculator() {
  const [molarity, setMolarity] = useState<string>('');
  const [equivalents, setEquivalents] = useState<string>('');
  const [normality, setNormality] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<'calculate-N' | 'calculate-M'>('calculate-N');

  const calculateNormality = () => {
    const M = parseFloat(molarity);
    const n = parseFloat(equivalents);

    if (isNaN(M) || isNaN(n)) {
      alert('Please enter valid numbers for molarity and equivalents');
      return;
    }

    if (M <= 0 || n <= 0) {
      alert('Molarity and equivalents must be positive values');
      return;
    }

    const N = M * n;
    setNormality(N);
  };

  const calculateMolarity = () => {
    const N = parseFloat(molarity); // Using molarity field for normality input
    const n = parseFloat(equivalents);

    if (isNaN(N) || isNaN(n)) {
      alert('Please enter valid numbers for normality and equivalents');
      return;
    }

    if (N <= 0 || n <= 0) {
      alert('Normality and equivalents must be positive values');
      return;
    }

    const M = N / n;
    setNormality(M);
  };

  const handleCalculate = () => {
    if (calculationType === 'calculate-N') {
      calculateNormality();
    } else {
      calculateMolarity();
    }
  };

  const reset = () => {
    setMolarity('');
    setEquivalents('');
    setNormality(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Normality Calculator</h2>

      {/* Calculation Type Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to calculate?
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => { setCalculationType('calculate-N'); reset(); }}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationType === 'calculate-N'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Normality (N)
          </button>
          <button
            onClick={() => { setCalculationType('calculate-M'); reset(); }}
            className={`flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationType === 'calculate-M'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Molarity (M)
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {calculationType === 'calculate-N' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molarity (M)
              </label>
              <input
                type="number"
                value={molarity}
                onChange={(e) => setMolarity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter molarity (mol/L)"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Equivalents per Mole (n)
              </label>
              <input
                type="number"
                value={equivalents}
                onChange={(e) => setEquivalents(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter equivalents (e.g., 2 for H₂SO₄)"
                step="1"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                For acids: number of H⁺ ions | For bases: number of OH⁻ ions
              </p>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Normality (N)
              </label>
              <input
                type="number"
                value={molarity}
                onChange={(e) => setMolarity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter normality (eq/L)"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Equivalents per Mole (n)
              </label>
              <input
                type="number"
                value={equivalents}
                onChange={(e) => setEquivalents(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter equivalents (e.g., 2 for H₂SO₄)"
                step="1"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                For acids: number of H⁺ ions | For bases: number of OH⁻ ions
              </p>
            </div>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Result */}
      {normality !== null && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">Result:</h3>
          {calculationType === 'calculate-N' ? (
            <p className="text-2xl font-bold text-green-800 dark:text-green-200">
              Normality = {normality.toFixed(4)} N (eq/L)
            </p>
          ) : (
            <p className="text-2xl font-bold text-green-800 dark:text-green-200">
              Molarity = {normality.toFixed(4)} M (mol/L)
            </p>
          )}
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Common Equivalents:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-blue-800 dark:text-blue-400">
          <div><strong>HCl:</strong> 1 equivalent</div>
          <div><strong>H₂SO₄:</strong> 2 equivalents</div>
          <div><strong>H₃PO₄:</strong> 3 equivalents</div>
          <div><strong>NaOH:</strong> 1 equivalent</div>
          <div><strong>Ca(OH)₂:</strong> 2 equivalents</div>
          <div><strong>Al(OH)₃:</strong> 3 equivalents</div>
        </div>
      </div>
    </div>
  );
}
