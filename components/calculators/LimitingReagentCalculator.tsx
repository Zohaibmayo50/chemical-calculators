'use client';

import { useState } from 'react';

export default function LimitingReagentCalculator() {
  const [molesA, setMolesA] = useState<string>('');
  const [molesB, setMolesB] = useState<string>('');
  const [ratioA, setRatioA] = useState<string>('1');
  const [ratioB, setRatioB] = useState<string>('1');
  const [limitingReagent, setLimitingReagent] = useState<string | null>(null);
  const [excessAmount, setExcessAmount] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setLimitingReagent(null);
    setExcessAmount(null);

    const nA = parseFloat(molesA);
    const nB = parseFloat(molesB);
    const rA = parseFloat(ratioA);
    const rB = parseFloat(ratioB);

    if (isNaN(nA) || isNaN(nB) || isNaN(rA) || isNaN(rB)) {
      setError('Please enter valid numbers for all fields');
      return;
    }

    if (nA <= 0 || nB <= 0) {
      setError('Moles must be positive values');
      return;
    }

    if (rA <= 0 || rB <= 0) {
      setError('Stoichiometric coefficients must be positive');
      return;
    }

    // Calculate moles per stoichiometric coefficient
    const ratioPerCoefficientA = nA / rA;
    const ratioPerCoefficientB = nB / rB;

    if (ratioPerCoefficientA < ratioPerCoefficientB) {
      setLimitingReagent('A');
      // Calculate excess moles of B
      const molesOfBUsed = (nA / rA) * rB;
      setExcessAmount(nB - molesOfBUsed);
    } else if (ratioPerCoefficientB < ratioPerCoefficientA) {
      setLimitingReagent('B');
      // Calculate excess moles of A
      const molesOfAUsed = (nB / rB) * rA;
      setExcessAmount(nA - molesOfAUsed);
    } else {
      setLimitingReagent('Neither (Exact stoichiometric amounts)');
      setExcessAmount(0);
    }
  };

  const clearFields = () => {
    setMolesA('');
    setMolesB('');
    setRatioA('1');
    setRatioB('1');
    setLimitingReagent(null);
    setExcessAmount(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Reaction Equation Display */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border border-primary-200 dark:border-primary-700">
          <p className="text-center text-xl font-mono font-bold text-gray-900 dark:text-white">
            <span className="text-primary-600 dark:text-primary-400">{ratioA || '1'}</span>A + <span className="text-accent-600 dark:text-accent-400">{ratioB || '1'}</span>B → Products
          </p>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
            General balanced equation
          </p>
        </div>

        {/* Stoichiometric Coefficients */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Stoichiometric Coefficients (from balanced equation)</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ratioA" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Coefficient for Reactant A
              </label>
              <input
                type="number"
                id="ratioA"
                value={ratioA}
                onChange={(e) => setRatioA(e.target.value)}
                placeholder="e.g., 2"
                step="1"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="ratioB" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Coefficient for Reactant B
              </label>
              <input
                type="number"
                id="ratioB"
                value={ratioB}
                onChange={(e) => setRatioB(e.target.value)}
                placeholder="e.g., 1"
                step="1"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Available Moles */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Available Amounts</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="molesA" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Moles of Reactant A
              </label>
              <input
                type="number"
                id="molesA"
                value={molesA}
                onChange={(e) => setMolesA(e.target.value)}
                placeholder="e.g., 3.0"
                step="any"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mol</p>
            </div>
            <div>
              <label htmlFor="molesB" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Moles of Reactant B
              </label>
              <input
                type="number"
                id="molesB"
                value={molesB}
                onChange={(e) => setMolesB(e.target.value)}
                placeholder="e.g., 5.0"
                step="any"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
              />
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mol</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Find Limiting Reagent
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
        {limitingReagent !== null && (
          <div className="space-y-4 animate-zoom-in">
            {/* Limiting Reagent Result */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Limiting Reagent</p>
                <p className="text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                  Reactant {limitingReagent}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  This reactant will be completely consumed first
                </p>
              </div>
            </div>

            {/* Excess Amount */}
            {excessAmount !== null && excessAmount > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Excess Reactant Remaining</span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{excessAmount.toFixed(4)} mol</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Of the reactant in excess (Reactant {limitingReagent === 'A' ? 'B' : 'A'})
                </p>
              </div>
            )}

            {/* Explanation */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <span className="font-semibold">How it works:</span> The limiting reagent is determined by comparing the mole ratio of each reactant to its stoichiometric coefficient. The reactant with the smallest ratio runs out first.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
