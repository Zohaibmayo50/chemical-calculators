'use client';

import React, { useState } from 'react';

const LimitingReactantCalculator: React.FC = () => {
  const [reactant1Name, setReactant1Name] = useState<string>('');
  const [reactant1Coeff, setReactant1Coeff] = useState<string>('1');
  const [reactant1Moles, setReactant1Moles] = useState<string>('');
  
  const [reactant2Name, setReactant2Name] = useState<string>('');
  const [reactant2Coeff, setReactant2Coeff] = useState<string>('1');
  const [reactant2Moles, setReactant2Moles] = useState<string>('');

  const [productName, setProductName] = useState<string>('');
  const [productCoeff, setProductCoeff] = useState<string>('1');

  const [limitingReactant, setLimitingReactant] = useState<string>('');
  const [excessReactant, setExcessReactant] = useState<string>('');
  const [excessAmount, setExcessAmount] = useState<number>(0);
  const [theoreticalYield, setTheoreticalYield] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setLimitingReactant('');
    setExcessReactant('');
    setExcessAmount(0);
    setTheoreticalYield(0);

    try {
      const r1Coeff = parseFloat(reactant1Coeff);
      const r1Moles = parseFloat(reactant1Moles);
      const r2Coeff = parseFloat(reactant2Coeff);
      const r2Moles = parseFloat(reactant2Moles);
      const pCoeff = parseFloat(productCoeff);

      if (!reactant1Name || !reactant2Name || !productName) {
        setError('Please enter names for all reactants and product');
        return;
      }

      if (!r1Coeff || !r1Moles || !r2Coeff || !r2Moles || !pCoeff) {
        setError('Please enter all coefficients and moles');
        return;
      }

      if (r1Coeff <= 0 || r1Moles <= 0 || r2Coeff <= 0 || r2Moles <= 0 || pCoeff <= 0) {
        setError('All values must be positive');
        return;
      }

      // Calculate moles of product each reactant can produce
      const molesFromR1 = (r1Moles / r1Coeff) * pCoeff;
      const molesFromR2 = (r2Moles / r2Coeff) * pCoeff;

      // Determine limiting reactant (produces less product)
      if (molesFromR1 < molesFromR2) {
        setLimitingReactant(reactant1Name);
        setExcessReactant(reactant2Name);
        setTheoreticalYield(molesFromR1);
        
        // Calculate excess reactant remaining
        const r2Used = (r1Moles / r1Coeff) * r2Coeff;
        const r2Remaining = r2Moles - r2Used;
        setExcessAmount(r2Remaining);
      } else {
        setLimitingReactant(reactant2Name);
        setExcessReactant(reactant1Name);
        setTheoreticalYield(molesFromR2);
        
        // Calculate excess reactant remaining
        const r1Used = (r2Moles / r2Coeff) * r1Coeff;
        const r1Remaining = r1Moles - r1Used;
        setExcessAmount(r1Remaining);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setReactant1Name('');
    setReactant1Coeff('1');
    setReactant1Moles('');
    setReactant2Name('');
    setReactant2Coeff('1');
    setReactant2Moles('');
    setProductName('');
    setProductCoeff('1');
    setLimitingReactant('');
    setExcessReactant('');
    setExcessAmount(0);
    setTheoreticalYield(0);
    setError('');
  };

  const loadExample = (example: 'water' | 'ammonia') => {
    if (example === 'water') {
      setReactant1Name('H₂');
      setReactant1Coeff('2');
      setReactant1Moles('3');
      setReactant2Name('O₂');
      setReactant2Coeff('1');
      setReactant2Moles('1');
      setProductName('H₂O');
      setProductCoeff('2');
    } else if (example === 'ammonia') {
      setReactant1Name('N₂');
      setReactant1Coeff('1');
      setReactant1Moles('2');
      setReactant2Name('H₂');
      setReactant2Coeff('3');
      setReactant2Moles('5');
      setProductName('NH₃');
      setProductCoeff('2');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Limiting Reactant Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Limiting Reactant:</strong> The reactant that is completely consumed first, 
          limiting the amount of product formed
          <br />
          Enter coefficients and moles for your balanced equation
        </p>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Load Example Reaction
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { key: 'water', label: '2H₂ + O₂ → 2H₂O' },
            { key: 'ammonia', label: 'N₂ + 3H₂ → 2NH₃' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => loadExample(key as 'water' | 'ammonia')}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-sm font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 mb-6">
        <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
          <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Reactant 1</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name/Formula
              </label>
              <input
                type="text"
                value={reactant1Name}
                onChange={(e) => setReactant1Name(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="e.g., H₂"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Coefficient
              </label>
              <input
                type="number"
                value={reactant1Coeff}
                onChange={(e) => setReactant1Coeff(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                step="any"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Moles Available
              </label>
              <input
                type="number"
                value={reactant1Moles}
                onChange={(e) => setReactant1Moles(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Enter moles"
                step="any"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Reactant 2</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name/Formula
              </label>
              <input
                type="text"
                value={reactant2Name}
                onChange={(e) => setReactant2Name(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="e.g., O₂"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Coefficient
              </label>
              <input
                type="number"
                value={reactant2Coeff}
                onChange={(e) => setReactant2Coeff(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                step="any"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Moles Available
              </label>
              <input
                type="number"
                value={reactant2Moles}
                onChange={(e) => setReactant2Moles(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Enter moles"
                step="any"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Product</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name/Formula
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="e.g., H₂O"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Coefficient
              </label>
              <input
                type="number"
                value={productCoeff}
                onChange={(e) => setProductCoeff(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                step="any"
              />
            </div>
          </div>
        </div>
      </div>

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

      {limitingReactant && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-red-300 dark:border-red-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Limiting Reactant:
            </h3>
            <p className="text-4xl font-bold text-red-600 dark:text-red-400">
              {limitingReactant}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This reactant will be completely consumed first
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Excess Reactant:
              </h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {excessReactant}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Amount remaining: <strong>{excessAmount.toFixed(3)} mol</strong>
              </p>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Theoretical Yield:
              </h4>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {theoreticalYield.toFixed(3)} mol
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                of {productName}
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Summary:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• <strong>{limitingReactant}</strong> is the limiting reactant (completely consumed)</li>
              <li>• <strong>{excessReactant}</strong> is in excess (some remains unreacted)</li>
              <li>• Maximum yield: <strong>{theoreticalYield.toFixed(3)} mol</strong> of {productName}</li>
              <li>• Excess {excessReactant} remaining: <strong>{excessAmount.toFixed(3)} mol</strong></li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How It Works:</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p>1. Calculate moles of product each reactant can produce</p>
          <p>2. The reactant that produces less product is limiting</p>
          <p>3. Theoretical yield = moles from limiting reactant</p>
          <p>4. Excess = initial moles - moles consumed by limiting reactant</p>
        </div>
      </div>
    </div>
  );
};

export default LimitingReactantCalculator;
