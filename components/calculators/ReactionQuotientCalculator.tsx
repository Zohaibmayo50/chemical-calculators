'use client';

import React, { useState } from 'react';

const ReactionQuotientCalculator: React.FC = () => {
  const [products, setProducts] = useState<{ concentration: string; coefficient: string }[]>([
    { concentration: '', coefficient: '1' },
  ]);
  const [reactants, setReactants] = useState<{ concentration: string; coefficient: string }[]>([
    { concentration: '', coefficient: '1' },
  ]);
  const [K, setK] = useState<string>('');
  const [Q, setQ] = useState<number | null>(null);
  const [direction, setDirection] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addProduct = () => {
    setProducts([...products, { concentration: '', coefficient: '1' }]);
  };

  const addReactant = () => {
    setReactants([...reactants, { concentration: '', coefficient: '1' }]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const removeReactant = (index: number) => {
    if (reactants.length > 1) {
      setReactants(reactants.filter((_, i) => i !== index));
    }
  };

  const calculate = () => {
    setError('');
    setQ(null);
    setDirection('');

    try {
      // Validate all inputs
      for (const product of products) {
        if (!product.concentration || !product.coefficient) {
          setError('Please fill in all product concentrations and coefficients');
          return;
        }
      }
      for (const reactant of reactants) {
        if (!reactant.concentration || !reactant.coefficient) {
          setError('Please fill in all reactant concentrations and coefficients');
          return;
        }
      }

      // Calculate Q = [products] / [reactants]
      let productTerm = 1;
      for (const product of products) {
        const conc = parseFloat(product.concentration);
        const coeff = parseFloat(product.coefficient);
        if (conc < 0 || coeff <= 0) {
          setError('Concentrations must be non-negative and coefficients must be positive');
          return;
        }
        productTerm *= Math.pow(conc, coeff);
      }

      let reactantTerm = 1;
      for (const reactant of reactants) {
        const conc = parseFloat(reactant.concentration);
        const coeff = parseFloat(reactant.coefficient);
        if (conc < 0 || coeff <= 0) {
          setError('Concentrations must be non-negative and coefficients must be positive');
          return;
        }
        if (conc === 0) {
          setError('Reactant concentrations cannot be zero (division by zero)');
          return;
        }
        reactantTerm *= Math.pow(conc, coeff);
      }

      const calculatedQ = productTerm / reactantTerm;
      setQ(calculatedQ);

      // Determine reaction direction if K is provided
      if (K) {
        const KNum = parseFloat(K);
        if (KNum <= 0) {
          setError('Equilibrium constant K must be positive');
          return;
        }

        if (Math.abs(calculatedQ - KNum) / KNum < 0.01) {
          setDirection('at equilibrium (Q ≈ K)');
        } else if (calculatedQ < KNum) {
          setDirection('forward (Q < K) - more products will form');
        } else {
          setDirection('reverse (Q > K) - more reactants will form');
        }
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setProducts([{ concentration: '', coefficient: '1' }]);
    setReactants([{ concentration: '', coefficient: '1' }]);
    setK('');
    setQ(null);
    setDirection('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Reaction Quotient Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Reaction Quotient (Q):</strong> Q = [products]ⁿ / [reactants]ᵐ
          <br />
          Compare Q to K to predict reaction direction
        </p>
      </div>

      <div className="space-y-6 mb-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Products
            </label>
            <button
              onClick={addProduct}
              className="text-sm px-3 py-1 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors"
            >
              + Add Product
            </button>
          </div>
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 mb-2">
              <input
                type="number"
                value={product.concentration}
                onChange={(e) => {
                  const newProducts = [...products];
                  newProducts[index].concentration = e.target.value;
                  setProducts(newProducts);
                }}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder={`Product ${index + 1} concentration (M)`}
                step="any"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={product.coefficient}
                  onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[index].coefficient = e.target.value;
                    setProducts(newProducts);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="Coeff"
                  min="1"
                />
                {products.length > 1 && (
                  <button
                    onClick={() => removeProduct(index)}
                    className="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Reactants
            </label>
            <button
              onClick={addReactant}
              className="text-sm px-3 py-1 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors"
            >
              + Add Reactant
            </button>
          </div>
          {reactants.map((reactant, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 mb-2">
              <input
                type="number"
                value={reactant.concentration}
                onChange={(e) => {
                  const newReactants = [...reactants];
                  newReactants[index].concentration = e.target.value;
                  setReactants(newReactants);
                }}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder={`Reactant ${index + 1} concentration (M)`}
                step="any"
              />
              <div className="flex gap-2">
                <input
                  type="number"
                  value={reactant.coefficient}
                  onChange={(e) => {
                    const newReactants = [...reactants];
                    newReactants[index].coefficient = e.target.value;
                    setReactants(newReactants);
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="Coeff"
                  min="1"
                />
                {reactants.length > 1 && (
                  <button
                    onClick={() => removeReactant(index)}
                    className="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Equilibrium Constant (K) - Optional
          </label>
          <input
            type="number"
            value={K}
            onChange={(e) => setK(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter K to determine reaction direction"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter K to compare with Q and determine which direction the reaction will proceed
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate Q
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 
                   transition-colors duration-200"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {Q !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Reaction Quotient (Q):
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {Q.toExponential(4)}
            </p>
          </div>

          {direction && (
            <div className={`p-6 rounded-lg ${
              direction.includes('forward') 
                ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500' 
                : direction.includes('reverse')
                ? 'bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500'
                : 'bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500'
            }`}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reaction Direction:</h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 capitalize">{direction}</p>
              {K && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  K = {parseFloat(K).toExponential(4)}
                </p>
              )}
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Q &lt; K: Reaction proceeds forward (→) to form more products</li>
              <li>• Q = K: System is at equilibrium (no net change)</li>
              <li>• Q &gt; K: Reaction proceeds reverse (←) to form more reactants</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Use molar concentrations (M) for aqueous species</li>
          <li>• Pure solids and liquids are not included in Q</li>
          <li>• For gases, can use partial pressures instead (Qp)</li>
          <li>• Coefficients are the exponents from balanced equation</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactionQuotientCalculator;
