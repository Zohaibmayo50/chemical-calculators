'use client';

import React, { useState } from 'react';

const EntropyCalculator: React.FC = () => {
  const [reactants, setReactants] = useState<{ name: string; coefficient: string; entropy: string }[]>([
    { name: 'Reactant 1', coefficient: '1', entropy: '' },
  ]);
  const [products, setProducts] = useState<{ name: string; coefficient: string; entropy: string }[]>([
    { name: 'Product 1', coefficient: '1', entropy: '' },
  ]);
  const [temperature, setTemperature] = useState<string>('');
  const [deltaS, setDeltaS] = useState<number | null>(null);
  const [spontaneity, setSpontaneity] = useState<string>('');
  const [error, setError] = useState<string>('');

  const addReactant = () => {
    setReactants([...reactants, { name: `Reactant ${reactants.length + 1}`, coefficient: '1', entropy: '' }]);
  };

  const removeReactant = (index: number) => {
    if (reactants.length > 1) {
      setReactants(reactants.filter((_, i) => i !== index));
    }
  };

  const updateReactant = (index: number, field: 'name' | 'coefficient' | 'entropy', value: string) => {
    const newReactants = [...reactants];
    newReactants[index][field] = value;
    setReactants(newReactants);
  };

  const addProduct = () => {
    setProducts([...products, { name: `Product ${products.length + 1}`, coefficient: '1', entropy: '' }]);
  };

  const removeProduct = (index: number) => {
    if (products.length > 1) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  const updateProduct = (index: number, field: 'name' | 'coefficient' | 'entropy', value: string) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const calculate = () => {
    setError('');
    setDeltaS(null);
    setSpontaneity('');

    try {
      let sumProducts = 0;
      let sumReactants = 0;

      // Calculate sum of products
      for (const product of products) {
        if (!product.entropy || !product.coefficient) {
          setError('Please fill in all product entropy values and coefficients');
          return;
        }
        const coeff = parseFloat(product.coefficient);
        const s = parseFloat(product.entropy);
        if (coeff <= 0) {
          setError('Coefficients must be positive');
          return;
        }
        sumProducts += coeff * s;
      }

      // Calculate sum of reactants
      for (const reactant of reactants) {
        if (!reactant.entropy || !reactant.coefficient) {
          setError('Please fill in all reactant entropy values and coefficients');
          return;
        }
        const coeff = parseFloat(reactant.coefficient);
        const s = parseFloat(reactant.entropy);
        if (coeff <= 0) {
          setError('Coefficients must be positive');
          return;
        }
        sumReactants += coeff * s;
      }

      // ΔS = Σ(S°_products) - Σ(S°_reactants)
      const deltaSValue = sumProducts - sumReactants;
      setDeltaS(deltaSValue);

      // Determine spontaneity context
      if (deltaSValue > 0) {
        setSpontaneity('Entropy increases (ΔS > 0). Favors spontaneity.');
      } else if (deltaSValue < 0) {
        setSpontaneity('Entropy decreases (ΔS < 0). Disfavors spontaneity.');
      } else {
        setSpontaneity('No entropy change (ΔS = 0).');
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setReactants([{ name: 'Reactant 1', coefficient: '1', entropy: '' }]);
    setProducts([{ name: 'Product 1', coefficient: '1', entropy: '' }]);
    setTemperature('');
    setDeltaS(null);
    setSpontaneity('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Entropy Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Entropy Change:</strong> ΔS° = Σ(S°<sub>products</sub>) - Σ(S°<sub>reactants</sub>)
          <br />
          Measures the change in disorder or randomness in a chemical reaction
        </p>
      </div>

      <div className="mb-6">
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

        <div className="space-y-3">
          {reactants.map((reactant, index) => (
            <div key={index} className="grid grid-cols-7 gap-2">
              <input
                type="text"
                value={reactant.name}
                onChange={(e) => updateReactant(index, 'name', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Name"
              />
              <input
                type="number"
                value={reactant.coefficient}
                onChange={(e) => updateReactant(index, 'coefficient', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Coefficient"
                step="any"
              />
              <input
                type="number"
                value={reactant.entropy}
                onChange={(e) => updateReactant(index, 'entropy', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="S° (J/(mol·K))"
                step="any"
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
          ))}
        </div>
      </div>

      <div className="mb-6">
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

        <div className="space-y-3">
          {products.map((product, index) => (
            <div key={index} className="grid grid-cols-7 gap-2">
              <input
                type="text"
                value={product.name}
                onChange={(e) => updateProduct(index, 'name', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Name"
              />
              <input
                type="number"
                value={product.coefficient}
                onChange={(e) => updateProduct(index, 'coefficient', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Coefficient"
                step="any"
              />
              <input
                type="number"
                value={product.entropy}
                onChange={(e) => updateProduct(index, 'entropy', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="S° (J/(mol·K))"
                step="any"
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
          ))}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate ΔS°
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

      {deltaS !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Entropy Change (ΔS°):
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {deltaS.toFixed(2)} J/(mol·K)
            </p>
            <p className={`text-sm font-semibold ${deltaS > 0 ? 'text-green-600 dark:text-green-400' : deltaS < 0 ? 'text-orange-600 dark:text-orange-400' : 'text-gray-600 dark:text-gray-400'}`}>
              {spontaneity}
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• ΔS° &gt; 0: Entropy increases (more disorder), favors product formation</li>
              <li>• ΔS° &lt; 0: Entropy decreases (more order), disfavors product formation</li>
              <li>• ΔS° = 0: No change in disorder</li>
              <li>• Spontaneity also depends on ΔH and temperature (ΔG = ΔH - TΔS)</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Standard Molar Entropies (S° at 25°C):</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• H₂(g): 130.7 J/(mol·K)</div>
          <div>• O₂(g): 205.2 J/(mol·K)</div>
          <div>• N₂(g): 191.6 J/(mol·K)</div>
          <div>• CO₂(g): 213.8 J/(mol·K)</div>
          <div>• H₂O(l): 69.9 J/(mol·K)</div>
          <div>• H₂O(g): 188.8 J/(mol·K)</div>
        </div>
      </div>
    </div>
  );
};

export default EntropyCalculator;
