'use client';

import { useState } from 'react';

interface OxidationResult {
  compound: string;
  elements: {
    symbol: string;
    count: number;
    oxidationState: number;
  }[];
  verification: string;
}

export default function OxidationStateCalculator() {
  const [compound, setCompound] = useState('');
  const [charge, setCharge] = useState('0');
  const [result, setResult] = useState<OxidationResult | null>(null);

  // Common oxidation states
  const commonOxidationStates: { [key: string]: number } = {
    'H': 1,    // +1 (except in metal hydrides)
    'O': -2,   // -2 (except in peroxides)
    'F': -1,   // Always -1
    'Cl': -1,  // Usually -1
    'Br': -1,  // Usually -1
    'I': -1,   // Usually -1
    'Na': 1,   // Always +1
    'K': 1,    // Always +1
    'Li': 1,   // Always +1
    'Ca': 2,   // Always +2
    'Mg': 2,   // Always +2
    'Al': 3,   // Always +3
    'Zn': 2    // Always +2
  };

  const parseFormula = (formula: string): { [key: string]: number } => {
    const elements: { [key: string]: number } = {};
    // Simple parser for basic formulas like H2O, H2SO4, etc.
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      elements[element] = (elements[element] || 0) + count;
    }

    return elements;
  };

  const calculate = () => {
    if (!compound.trim()) {
      alert('Please enter a chemical formula');
      return;
    }

    const totalCharge = parseInt(charge);
    if (isNaN(totalCharge)) {
      alert('Please enter a valid charge (0 for neutral compounds)');
      return;
    }

    try {
      const elements = parseFormula(compound.trim());
      const elementList = Object.keys(elements);

      if (elementList.length === 0) {
        alert('Invalid formula format');
        return;
      }

      // Find the unknown oxidation state
      let knownSum = 0;
      let unknownElement: string | null = null;
      let unknownCount = 0;

      for (const element of elementList) {
        if (commonOxidationStates[element] !== undefined) {
          knownSum += commonOxidationStates[element] * elements[element];
        } else {
          if (unknownElement !== null) {
            alert('Cannot solve for multiple unknown oxidation states');
            return;
          }
          unknownElement = element;
          unknownCount = elements[element];
        }
      }

      // Calculate unknown oxidation state
      let unknownOxidationState = 0;
      if (unknownElement) {
        unknownOxidationState = (totalCharge - knownSum) / unknownCount;
      }

      // Build result
      const resultElements = elementList.map(element => ({
        symbol: element,
        count: elements[element],
        oxidationState: element === unknownElement 
          ? unknownOxidationState 
          : commonOxidationStates[element]
      }));

      // Verification
      const sum = resultElements.reduce((acc, el) => 
        acc + (el.oxidationState * el.count), 0
      );

      setResult({
        compound: compound.trim(),
        elements: resultElements,
        verification: `Sum of oxidation states: ${sum} (Expected: ${totalCharge})`
      });

    } catch (error) {
      alert('Error parsing formula. Please use format like H2SO4');
    }
  };

  const reset = () => {
    setCompound('');
    setCharge('0');
    setResult(null);
  };

  const formatOxidationState = (state: number): string => {
    if (state > 0) return `+${state}`;
    if (state < 0) return `${state}`;
    return '0';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
          🔢
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Oxidation State Calculator
        </h2>
      </div>

      <div className="space-y-4">
        {/* Compound Input */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border border-primary-200 dark:border-primary-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Chemical Formula
          </label>
          <input
            type="text"
            value={compound}
            onChange={(e) => setCompound(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculate()}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors text-lg font-mono"
            placeholder="e.g., H2SO4, KMnO4, Fe2O3"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Enter formula with capital letters for elements
          </p>
        </div>

        {/* Charge Input */}
        <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/30 dark:to-primary-900/30 rounded-xl p-6 border border-accent-200 dark:border-accent-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Total Charge
          </label>
          <input
            type="number"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculate()}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400 focus:border-transparent transition-colors text-lg"
            placeholder="0 for neutral, +1, -1, etc."
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            0 for neutral compounds, positive or negative for ions
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Calculate Oxidation States
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Oxidation States for {result.compound}
            </h3>
            <div className="space-y-3">
              {result.elements.map((element, index) => (
                <div key={index} className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {element.symbol}
                    {element.count > 1 && <sub>{element.count}</sub>}:
                  </span>
                  <span className={`text-2xl font-bold ${
                    element.oxidationState > 0 
                      ? 'text-red-600 dark:text-red-400' 
                      : element.oxidationState < 0 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {formatOxidationState(element.oxidationState)}
                  </span>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t-2 border-green-300 dark:border-green-600">
                <p className="text-sm text-green-700 dark:text-green-300 font-semibold">
                  ✓ {result.verification}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {result && (
          <button
            onClick={reset}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          >
            Reset Calculator
          </button>
        )}

        {/* Quick Reference */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Common Rules</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>• <strong>Free elements:</strong> Oxidation state = 0</li>
            <li>• <strong>Monatomic ions:</strong> Oxidation state = charge</li>
            <li>• <strong>H:</strong> Usually +1 (except metal hydrides: -1)</li>
            <li>• <strong>O:</strong> Usually -2 (except peroxides: -1)</li>
            <li>• <strong>Sum rule:</strong> Σ(oxidation states) = total charge</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
