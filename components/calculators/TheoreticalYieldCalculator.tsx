'use client';

import { useState } from 'react';

export default function TheoreticalYieldCalculator() {
  const [limitingReagentMoles, setLimitingReagentMoles] = useState<string>('');
  const [limitingCoefficient, setLimitingCoefficient] = useState<string>('1');
  const [productCoefficient, setProductCoefficient] = useState<string>('1');
  const [productMolarMass, setProductMolarMass] = useState<string>('');
  const [molesOfProduct, setMolesOfProduct] = useState<number | null>(null);
  const [massOfProduct, setMassOfProduct] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setMolesOfProduct(null);
    setMassOfProduct(null);

    const nLimiting = parseFloat(limitingReagentMoles);
    const coeffLimiting = parseFloat(limitingCoefficient);
    const coeffProduct = parseFloat(productCoefficient);
    const molarMass = parseFloat(productMolarMass);

    if (isNaN(nLimiting) || isNaN(coeffLimiting) || isNaN(coeffProduct) || isNaN(molarMass)) {
      setError('Please enter valid numbers for all fields');
      return;
    }

    if (nLimiting <= 0 || coeffLimiting <= 0 || coeffProduct <= 0 || molarMass <= 0) {
      setError('All values must be positive');
      return;
    }

    // Calculate moles of product using stoichiometry
    const nProduct = (nLimiting / coeffLimiting) * coeffProduct;
    
    // Calculate mass of product
    const massProduct = nProduct * molarMass;

    setMolesOfProduct(nProduct);
    setMassOfProduct(massProduct);
  };

  const clearFields = () => {
    setLimitingReagentMoles('');
    setLimitingCoefficient('1');
    setProductCoefficient('1');
    setProductMolarMass('');
    setMolesOfProduct(null);
    setMassOfProduct(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Reaction Display */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border border-primary-200 dark:border-primary-700">
          <p className="text-center text-xl font-mono font-bold text-gray-900 dark:text-white">
            <span className="text-primary-600 dark:text-primary-400">{limitingCoefficient || '1'}</span> Limiting Reagent → <span className="text-accent-600 dark:text-accent-400">{productCoefficient || '1'}</span> Product
          </p>
        </div>

        {/* Stoichiometric Coefficients */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Stoichiometric Coefficients (from balanced equation)</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="limitingCoefficient" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Limiting Reagent Coefficient
              </label>
              <input
                type="number"
                id="limitingCoefficient"
                value={limitingCoefficient}
                onChange={(e) => setLimitingCoefficient(e.target.value)}
                placeholder="e.g., 2"
                step="1"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="productCoefficient" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Product Coefficient
              </label>
              <input
                type="number"
                id="productCoefficient"
                value={productCoefficient}
                onChange={(e) => setProductCoefficient(e.target.value)}
                placeholder="e.g., 2"
                step="1"
                min="1"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label htmlFor="limitingReagentMoles" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Moles of Limiting Reagent
            </label>
            <input
              type="number"
              id="limitingReagentMoles"
              value={limitingReagentMoles}
              onChange={(e) => setLimitingReagentMoles(e.target.value)}
              placeholder="e.g., 2.5"
              step="any"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: mol</p>
          </div>

          <div>
            <label htmlFor="productMolarMass" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Product Molar Mass
            </label>
            <input
              type="number"
              id="productMolarMass"
              value={productMolarMass}
              onChange={(e) => setProductMolarMass(e.target.value)}
              placeholder="e.g., 18.015"
              step="any"
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unit: g/mol</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculate}
            className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Calculate Yield
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

        {/* Results */}
        {molesOfProduct !== null && massOfProduct !== null && (
          <div className="space-y-4 animate-zoom-in">
            {/* Moles Result */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Theoretical Yield (moles)</p>
                <p className="text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2">
                  {molesOfProduct.toFixed(4)}
                </p>
                <p className="text-gray-600 dark:text-gray-400">mol of product</p>
              </div>
            </div>

            {/* Mass Result */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Theoretical Yield (mass)</p>
                <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {massOfProduct.toFixed(3)}
                </p>
                <p className="text-gray-600 dark:text-gray-400">grams of product</p>
              </div>
            </div>

            {/* Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <span className="font-semibold">Note:</span> This is the maximum amount of product that can form under perfect conditions. Actual yield is typically lower due to side reactions, incomplete reactions, and losses during purification.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
