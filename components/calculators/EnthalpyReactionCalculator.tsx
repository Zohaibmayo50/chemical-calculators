'use client';

import React, { useState } from 'react';

const EnthalpyReactionCalculator: React.FC = () => {
  const [method, setMethod] = useState<'formation' | 'bonds'>('formation');
  
  // Formation enthalpies
  const [reactant1Hf, setReactant1Hf] = useState<string>('');
  const [reactant1Coeff, setReactant1Coeff] = useState<string>('1');
  const [reactant2Hf, setReactant2Hf] = useState<string>('');
  const [reactant2Coeff, setReactant2Coeff] = useState<string>('');
  const [product1Hf, setProduct1Hf] = useState<string>('');
  const [product1Coeff, setProduct1Coeff] = useState<string>('1');
  const [product2Hf, setProduct2Hf] = useState<string>('');
  const [product2Coeff, setProduct2Coeff] = useState<string>('');
  
  // Bond energies
  const [bondsBroken, setBondsBroken] = useState<string>('');
  const [bondsFormed, setBondsFormed] = useState<string>('');
  
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    if (method === 'formation') {
      // ΔH°rxn = ΣnΔH°f(products) - ΣmΔH°f(reactants)
      const r1Hf = parseFloat(reactant1Hf);
      const r1Coeff = parseFloat(reactant1Coeff);
      const p1Hf = parseFloat(product1Hf);
      const p1Coeff = parseFloat(product1Coeff);

      if (isNaN(r1Hf) || isNaN(r1Coeff) || isNaN(p1Hf) || isNaN(p1Coeff)) {
        setError('Please enter valid values for at least one reactant and product');
        return;
      }

      let sumReactants = r1Hf * r1Coeff;
      let sumProducts = p1Hf * p1Coeff;

      // Add second reactant if provided
      if (reactant2Hf !== '' && reactant2Coeff !== '') {
        const r2Hf = parseFloat(reactant2Hf);
        const r2Coeff = parseFloat(reactant2Coeff);
        if (!isNaN(r2Hf) && !isNaN(r2Coeff)) {
          sumReactants += r2Hf * r2Coeff;
        }
      }

      // Add second product if provided
      if (product2Hf !== '' && product2Coeff !== '') {
        const p2Hf = parseFloat(product2Hf);
        const p2Coeff = parseFloat(product2Coeff);
        if (!isNaN(p2Hf) && !isNaN(p2Coeff)) {
          sumProducts += p2Hf * p2Coeff;
        }
      }

      const deltaH = sumProducts - sumReactants;
      setResult(deltaH);

    } else if (method === 'bonds') {
      // ΔH°rxn = Σ(bonds broken) - Σ(bonds formed)
      const broken = parseFloat(bondsBroken);
      const formed = parseFloat(bondsFormed);

      if (isNaN(broken) || isNaN(formed)) {
        setError('Please enter total energy for bonds broken and formed');
        return;
      }

      if (broken < 0 || formed < 0) {
        setError('Bond energies must be positive');
        return;
      }

      const deltaH = broken - formed;
      setResult(deltaH);
    }
  };

  const handleClear = () => {
    setReactant1Hf('');
    setReactant1Coeff('1');
    setReactant2Hf('');
    setReactant2Coeff('');
    setProduct1Hf('');
    setProduct1Coeff('1');
    setProduct2Hf('');
    setProduct2Coeff('');
    setBondsBroken('');
    setBondsFormed('');
    setResult(null);
    setError('');
  };

  const getReactionType = (deltaH: number): string => {
    if (deltaH < 0) return 'Exothermic (releases heat)';
    if (deltaH > 0) return 'Endothermic (absorbs heat)';
    return 'Thermoneutral (no heat change)';
  };

  const getReactionColor = (deltaH: number): string => {
    if (deltaH < 0) return 'text-red-600 dark:text-red-400';
    if (deltaH > 0) return 'text-blue-600 dark:text-blue-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Enthalpy of Reaction Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Enthalpy of Reaction (ΔH°<sub>rxn</sub>):</strong> Heat change during a chemical reaction at constant pressure.
          <br />
          Negative ΔH = exothermic (heat released), Positive ΔH = endothermic (heat absorbed).
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Method:
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              setMethod('formation');
              handleClear();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              method === 'formation'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Formation Enthalpies
          </button>
          <button
            onClick={() => {
              setMethod('bonds');
              handleClear();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              method === 'bonds'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Bond Energies
          </button>
        </div>
      </div>

      {method === 'formation' && (
        <div className="space-y-6 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm font-mono text-purple-800 dark:text-purple-200">
              ΔH°<sub>rxn</sub> = Σn·ΔH°<sub>f</sub>(products) - Σm·ΔH°<sub>f</sub>(reactants)
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Reactants</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coefficient 1
                </label>
                <input
                  type="number"
                  step="any"
                  value={reactant1Coeff}
                  onChange={(e) => setReactant1Coeff(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ΔH°<sub>f</sub> (kJ/mol)
                </label>
                <input
                  type="number"
                  step="any"
                  value={reactant1Hf}
                  onChange={(e) => setReactant1Hf(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coefficient 2 (optional)
                </label>
                <input
                  type="number"
                  step="any"
                  value={reactant2Coeff}
                  onChange={(e) => setReactant2Coeff(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ΔH°<sub>f</sub> (kJ/mol)
                </label>
                <input
                  type="number"
                  step="any"
                  value={reactant2Hf}
                  onChange={(e) => setReactant2Hf(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="0.0"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Products</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coefficient 1
                </label>
                <input
                  type="number"
                  step="any"
                  value={product1Coeff}
                  onChange={(e) => setProduct1Coeff(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ΔH°<sub>f</sub> (kJ/mol)
                </label>
                <input
                  type="number"
                  step="any"
                  value={product1Hf}
                  onChange={(e) => setProduct1Hf(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="0.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coefficient 2 (optional)
                </label>
                <input
                  type="number"
                  step="any"
                  value={product2Coeff}
                  onChange={(e) => setProduct2Coeff(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  ΔH°<sub>f</sub> (kJ/mol)
                </label>
                <input
                  type="number"
                  step="any"
                  value={product2Hf}
                  onChange={(e) => setProduct2Hf(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="0.0"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {method === 'bonds' && (
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm font-mono text-purple-800 dark:text-purple-200">
              ΔH°<sub>rxn</sub> = Σ(Bonds Broken) - Σ(Bonds Formed)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Total Energy of Bonds Broken (kJ/mol)
            </label>
            <input
              type="number"
              step="any"
              value={bondsBroken}
              onChange={(e) => setBondsBroken(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Breaking bonds requires energy (always positive)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Total Energy of Bonds Formed (kJ/mol)
            </label>
            <input
              type="number"
              step="any"
              value={bondsFormed}
              onChange={(e) => setBondsFormed(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Forming bonds releases energy (always positive)
            </p>
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate
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

      {result !== null && (
        <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Result:
          </h3>
          <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-4">
            ΔH°<sub>rxn</sub> = {result.toFixed(2)} kJ/mol
          </p>

          <div className="mt-4 space-y-2">
            <p className={`text-lg font-semibold ${getReactionColor(result)}`}>
              {getReactionType(result)}
            </p>
            
            <div className="text-sm text-gray-700 dark:text-gray-300">
              <ul className="list-disc list-inside space-y-1 ml-2">
                {result < 0 && (
                  <>
                    <li>Heat is released to surroundings</li>
                    <li>Products have lower energy than reactants</li>
                    <li>Temperature increases during reaction</li>
                    <li>Example: Combustion, neutralization</li>
                  </>
                )}
                {result > 0 && (
                  <>
                    <li>Heat is absorbed from surroundings</li>
                    <li>Products have higher energy than reactants</li>
                    <li>Temperature decreases during reaction</li>
                    <li>Example: Photosynthesis, decomposition</li>
                  </>
                )}
                {result === 0 && (
                  <li>No net heat change - products and reactants have equal enthalpy</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• ΔH°<sub>f</sub> for elements in standard state = 0 kJ/mol</li>
          <li>• Exothermic: ΔH &lt; 0 (negative), Endothermic: ΔH &gt; 0 (positive)</li>
          <li>• Standard conditions: 25°C (298 K) and 1 atm</li>
          <li>• Bond breaking requires energy, bond forming releases energy</li>
        </ul>
      </div>
    </div>
  );
};

export default EnthalpyReactionCalculator;
