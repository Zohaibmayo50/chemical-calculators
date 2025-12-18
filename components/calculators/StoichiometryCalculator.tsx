'use client';

import { useState } from 'react';

interface Reactant {
  formula: string;
  coefficient: number;
  moles: number;
  mass: number;
  molarMass: number;
}

interface Product {
  formula: string;
  coefficient: number;
  moles: number;
  mass: number;
  molarMass: number;
}

export default function StoichiometryCalculator() {
  const [equation, setEquation] = useState('2H₂ + O₂ → 2H₂O');
  const [reactants, setReactants] = useState<Reactant[]>([
    { formula: 'H₂', coefficient: 2, moles: 0, mass: 0, molarMass: 2.016 },
    { formula: 'O₂', coefficient: 1, moles: 0, mass: 0, molarMass: 32.00 }
  ]);
  const [products, setProducts] = useState<Product[]>([
    { formula: 'H₂O', coefficient: 2, moles: 0, mass: 0, molarMass: 18.015 }
  ]);
  const [limitingReagent, setLimitingReagent] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const parseEquation = (eq: string) => {
    // Simple equation parser - in a real implementation, this would be more sophisticated
    const parts = eq.split('→').map(part => part.trim());
    if (parts.length !== 2) return;

    const reactantPart = parts[0];
    const productPart = parts[1];

    // Parse reactants
    const reactantMatches = reactantPart.match(/(\d*)\s*([A-Za-z0-9]+)/g);
    if (reactantMatches) {
      const newReactants = reactantMatches.map(match => {
        const coeffMatch = match.match(/^(\d*)/);
        const formulaMatch = match.match(/([A-Za-z0-9]+)$/);
        const coefficient = coeffMatch && coeffMatch[1] ? parseInt(coeffMatch[1]) : 1;
        const formula = formulaMatch ? formulaMatch[1] : match;
        return {
          formula,
          coefficient,
          moles: 0,
          mass: 0,
          molarMass: getMolarMass(formula)
        };
      });
      setReactants(newReactants);
    }

    // Parse products
    const productMatches = productPart.match(/(\d*)\s*([A-Za-z0-9]+)/g);
    if (productMatches) {
      const newProducts = productMatches.map(match => {
        const coeffMatch = match.match(/^(\d*)/);
        const formulaMatch = match.match(/([A-Za-z0-9]+)$/);
        const coefficient = coeffMatch && coeffMatch[1] ? parseInt(coeffMatch[1]) : 1;
        const formula = formulaMatch ? formulaMatch[1] : match;
        return {
          formula,
          coefficient,
          moles: 0,
          mass: 0,
          molarMass: getMolarMass(formula)
        };
      });
      setProducts(newProducts);
    }
  };

  const getMolarMass = (formula: string): number => {
    // Simple molar mass calculator - in reality, this would parse the formula properly
    const molarMasses: { [key: string]: number } = {
      'H': 1.008, 'H₂': 2.016, 'O': 16.00, 'O₂': 32.00, 'H₂O': 18.015,
      'C': 12.01, 'N': 14.01, 'Na': 22.99, 'Cl': 35.45, 'NaCl': 58.44
    };
    return molarMasses[formula] || 0;
  };

  const calculateStoichiometry = () => {
    // Find limiting reagent
    let limitingIndex = 0;
    let minRatio = Infinity;

    reactants.forEach((reactant, index) => {
      if (reactant.moles > 0) {
        const ratio = reactant.moles / reactant.coefficient;
        if (ratio < minRatio) {
          minRatio = ratio;
          limitingIndex = index;
        }
      }
    });

    setLimitingReagent(reactants[limitingIndex].formula);

    // Calculate product amounts based on limiting reagent
    const limitingMoles = reactants[limitingIndex].moles;
    const limitingCoeff = reactants[limitingIndex].coefficient;

    const newProducts = products.map(product => {
      const moleRatio = product.coefficient / limitingCoeff;
      const productMoles = limitingMoles * moleRatio;
      const productMass = productMoles * product.molarMass;

      return {
        ...product,
        moles: productMoles,
        mass: productMass
      };
    });

    setProducts(newProducts);

    setResult(`Based on ${limitingMoles.toFixed(3)} moles of ${reactants[limitingIndex].formula} (limiting reagent), you can produce ${newProducts[0].moles.toFixed(3)} moles (${newProducts[0].mass.toFixed(2)}g) of ${newProducts[0].formula}.`);
  };

  const updateReactant = (index: number, field: keyof Reactant, value: number) => {
    const newReactants = [...reactants];
    newReactants[index] = { ...newReactants[index], [field]: value };

    // Auto-calculate moles from mass or vice versa
    if (field === 'mass' && newReactants[index].molarMass > 0) {
      newReactants[index].moles = value / newReactants[index].molarMass;
    } else if (field === 'moles' && newReactants[index].molarMass > 0) {
      newReactants[index].mass = value * newReactants[index].molarMass;
    }

    setReactants(newReactants);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stoichiometry Calculator</h2>

        {/* Chemical Equation Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Chemical Equation
          </label>
          <input
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 2H₂ + O₂ → 2H₂O"
          />
          <button
            onClick={() => parseEquation(equation)}
            className="mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Parse Equation
          </button>
        </div>

        {/* Reactants Input */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Reactants</h3>
          {reactants.map((reactant, index) => (
            <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Formula
                </label>
                <input
                  type="text"
                  value={reactant.formula}
                  onChange={(e) => {
                    const newReactants = [...reactants];
                    newReactants[index].formula = e.target.value;
                    newReactants[index].molarMass = getMolarMass(e.target.value);
                    setReactants(newReactants);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mass (g)
                </label>
                <input
                  type="number"
                  value={reactant.mass || ''}
                  onChange={(e) => updateReactant(index, 'mass', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Moles
                </label>
                <input
                  type="number"
                  value={reactant.moles || ''}
                  onChange={(e) => updateReactant(index, 'moles', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Molar Mass
                </label>
                <input
                  type="number"
                  value={reactant.molarMass || ''}
                  onChange={(e) => updateReactant(index, 'molarMass', parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-600 dark:text-white"
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Calculate Button */}
        <div className="mb-6">
          <button
            onClick={calculateStoichiometry}
            className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Calculate Stoichiometry
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Results</h3>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium">{result}</p>
              {limitingReagent && (
                <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                  Limiting reagent: <strong>{limitingReagent}</strong>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Products Display */}
        {products.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Products</h3>
            {products.map((product, index) => (
              <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Formula
                  </label>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-white">
                    {product.formula}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mass (g)
                  </label>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-white">
                    {product.mass.toFixed(3)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Moles
                  </label>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-white">
                    {product.moles.toFixed(3)}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Molar Mass
                  </label>
                  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-900 dark:text-white">
                    {product.molarMass.toFixed(3)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}