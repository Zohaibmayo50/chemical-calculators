'use client';

import { useState } from 'react';

export default function MolalityCalculator() {
  const [moles, setMoles] = useState<string>('');
  const [solventMass, setSolventMass] = useState<string>('');
  const [molality, setMolality] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateMolality = () => {
    setError('');
    setMolality(null);

    const n = parseFloat(moles);
    const kg = parseFloat(solventMass);

    if (isNaN(n) || isNaN(kg)) {
      setError('Please enter valid numbers for both fields');
      return;
    }

    if (n < 0 || kg <= 0) {
      setError('Moles must be non-negative and solvent mass must be positive');
      return;
    }

    const result = n / kg;
    setMolality(result);
  };

  const clearFields = () => {
    setMoles('');
    setSolventMass('');
    setMolality(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Moles Input */}
        <div>
          <label htmlFor="moles" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Moles of Solute (n)
          </label>
          <input
            type="number"
            id="moles"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            placeholder="Enter moles"
            step="any"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            aria-label="Moles of solute"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Unit: mol</p>
        </div>

        {/* Solvent Mass Input */}
        <div>
          <label htmlFor="solventMass" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Mass of Solvent (kg)
          </label>
          <input
            type="number"
            id="solventMass"
            value={solventMass}
            onChange={(e) => setSolventMass(e.target.value)}
            placeholder="Enter solvent mass in kilograms"
            step="any"
            className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            aria-label="Mass of solvent in kilograms"
          />
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Unit: kg (kilograms)</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculateMolality}
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
        {molality !== null && (
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600 animate-zoom-in">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Molality</p>
              <p className="text-4xl font-bold text-primary-700 dark:text-primary-400 mb-1">
                {molality.toFixed(4)}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">mol/kg (m)</p>
              <div className="mt-4 pt-4 border-t border-primary-200 dark:border-primary-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This solution has a molality of <strong>{molality.toFixed(4)} m</strong>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
