'use client';

import React, { useState } from 'react';

export default function EquilibriumConstantCalculator() {
  const [productConcentrations, setProductConcentrations] = useState<string>('');
  const [reactantConcentrations, setReactantConcentrations] = useState<string>('');
  const [kc, setKc] = useState<number | null>(null);
  const [equilibriumPosition, setEquilibriumPosition] = useState<string>('');

  const calculateEquilibriumConstant = () => {
    const products = parseFloat(productConcentrations);
    const reactants = parseFloat(reactantConcentrations);

    if (isNaN(products) || isNaN(reactants)) {
      alert('Please enter valid values for both fields.');
      return;
    }

    if (products < 0 || reactants <= 0) {
      alert('Concentrations must be non-negative. Reactant concentrations must be positive.');
      return;
    }

    // K = [products] / [reactants]
    const K = products / reactants;
    setKc(K);

    // Determine equilibrium position
    let position = '';
    if (K > 1000) {
      position = 'Strongly favors products (forward reaction)';
    } else if (K > 10) {
      position = 'Favors products';
    } else if (K >= 0.1) {
      position = 'Significant amounts of both reactants and products';
    } else if (K >= 0.001) {
      position = 'Favors reactants';
    } else {
      position = 'Strongly favors reactants (reverse reaction)';
    }
    setEquilibriumPosition(position);
  };

  const clearFields = () => {
    setProductConcentrations('');
    setReactantConcentrations('');
    setKc(null);
    setEquilibriumPosition('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>For reaction:</strong> aA + bB ⇌ cC + dD<br/>
            K<sub>c</sub> = ([C]<sup>c</sup> × [D]<sup>d</sup>) / ([A]<sup>a</sup> × [B]<sup>b</sup>)
          </p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
            Enter the product of all product concentrations raised to their coefficients divided by 
            the product of all reactant concentrations raised to their coefficients.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Product Term ([C]<sup>c</sup> × [D]<sup>d</sup>)
          </label>
          <input
            type="number"
            step="any"
            value={productConcentrations}
            onChange={(e) => setProductConcentrations(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.04 (for [0.2]² if 2C formed)"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Product of product concentrations with stoichiometric coefficients as exponents
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reactant Term ([A]<sup>a</sup> × [B]<sup>b</sup>)
          </label>
          <input
            type="number"
            step="any"
            value={reactantConcentrations}
            onChange={(e) => setReactantConcentrations(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.01 (for [0.1]² if 2A consumed)"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Product of reactant concentrations with stoichiometric coefficients as exponents
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateEquilibriumConstant}
            className="flex-1 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
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

        {kc !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-secondary-200 dark:border-secondary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Equilibrium Constant (K<sub>c</sub>):</span>{' '}
                <span className="text-secondary-600 dark:text-secondary-400 font-bold text-xl">
                  {kc < 0.001 || kc > 1000 ? kc.toExponential(3) : kc.toFixed(4)}
                </span>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Equilibrium Position:</span>{' '}
                <span className="text-secondary-600 dark:text-secondary-400 font-semibold">
                  {equilibriumPosition}
                </span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• K &gt; 1: Products favored at equilibrium</li>
                  <li>• K = 1: Equal amounts of reactants and products</li>
                  <li>• K &lt; 1: Reactants favored at equilibrium</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: K<sub>c</sub> = [products] / [reactants]
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
