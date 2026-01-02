'use client';

import { useState } from 'react';

interface Ion {
  symbol: string;
  charge: number;
  name: string;
}

interface Result {
  formula: string;
  cationCount: number;
  anionCount: number;
  name: string;
}

// Common ions database
const cations: Ion[] = [
  { symbol: 'H', charge: 1, name: 'Hydrogen' },
  { symbol: 'Li', charge: 1, name: 'Lithium' },
  { symbol: 'Na', charge: 1, name: 'Sodium' },
  { symbol: 'K', charge: 1, name: 'Potassium' },
  { symbol: 'Ag', charge: 1, name: 'Silver' },
  { symbol: 'Mg', charge: 2, name: 'Magnesium' },
  { symbol: 'Ca', charge: 2, name: 'Calcium' },
  { symbol: 'Ba', charge: 2, name: 'Barium' },
  { symbol: 'Zn', charge: 2, name: 'Zinc' },
  { symbol: 'Cu', charge: 2, name: 'Copper(II)' },
  { symbol: 'Fe', charge: 2, name: 'Iron(II)' },
  { symbol: 'Fe', charge: 3, name: 'Iron(III)' },
  { symbol: 'Al', charge: 3, name: 'Aluminum' },
  { symbol: 'NH4', charge: 1, name: 'Ammonium' }
];

const anions: Ion[] = [
  { symbol: 'F', charge: -1, name: 'Fluoride' },
  { symbol: 'Cl', charge: -1, name: 'Chloride' },
  { symbol: 'Br', charge: -1, name: 'Bromide' },
  { symbol: 'I', charge: -1, name: 'Iodide' },
  { symbol: 'O', charge: -2, name: 'Oxide' },
  { symbol: 'S', charge: -2, name: 'Sulfide' },
  { symbol: 'N', charge: -3, name: 'Nitride' },
  { symbol: 'OH', charge: -1, name: 'Hydroxide' },
  { symbol: 'NO3', charge: -1, name: 'Nitrate' },
  { symbol: 'SO4', charge: -2, name: 'Sulfate' },
  { symbol: 'CO3', charge: -2, name: 'Carbonate' },
  { symbol: 'PO4', charge: -3, name: 'Phosphate' }
];

export default function IonicFormulaCalculator() {
  const [cationSymbol, setCationSymbol] = useState('');
  const [cationCharge, setCationCharge] = useState('');
  const [anionSymbol, setAnionSymbol] = useState('');
  const [anionCharge, setAnionCharge] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const calculate = () => {
    if (!cationSymbol.trim() || !anionSymbol.trim()) {
      alert('Please enter both cation and anion symbols');
      return;
    }

    const catCharge = parseInt(cationCharge);
    const anCharge = parseInt(anionCharge);

    if (isNaN(catCharge) || catCharge <= 0) {
      alert('Cation charge must be a positive number');
      return;
    }

    if (isNaN(anCharge) || anCharge >= 0) {
      alert('Anion charge must be a negative number');
      return;
    }

    // Cross-multiply to get subscripts
    let cationCount = Math.abs(anCharge);
    let anionCount = catCharge;

    // Simplify by GCD
    const divisor = gcd(cationCount, anionCount);
    cationCount /= divisor;
    anionCount /= divisor;

    // Build formula
    let formula = cationSymbol.trim();
    if (cationCount > 1) formula += cationCount;
    
    const anion = anionSymbol.trim();
    // Use parentheses for polyatomic anions if count > 1
    if (anionCount > 1 && anion.length > 1) {
      formula += `(${anion})${anionCount}`;
    } else {
      formula += anion;
      if (anionCount > 1) formula += anionCount;
    }

    // Find names if available
    const cationName = cations.find(c => 
      c.symbol === cationSymbol.trim() && c.charge === catCharge
    )?.name || cationSymbol.trim();

    const anionName = anions.find(a => 
      a.symbol === anionSymbol.trim() && a.charge === anCharge
    )?.name || anionSymbol.trim();

    setResult({
      formula,
      cationCount,
      anionCount,
      name: `${cationName} ${anionName}`
    });
  };

  const reset = () => {
    setCationSymbol('');
    setCationCharge('');
    setAnionSymbol('');
    setAnionCharge('');
    setResult(null);
  };

  const selectCation = (ion: Ion) => {
    setCationSymbol(ion.symbol);
    setCationCharge(ion.charge.toString());
  };

  const selectAnion = (ion: Ion) => {
    setAnionSymbol(ion.symbol);
    setAnionCharge(ion.charge.toString());
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
          🧬
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Ionic Formula Calculator
        </h2>
      </div>

      <div className="space-y-4">
        {/* Cation Input */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-xl p-6 border border-red-200 dark:border-red-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Cation (Positive Ion)</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Symbol
              </label>
              <input
                type="text"
                value={cationSymbol}
                onChange={(e) => setCationSymbol(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-colors"
                placeholder="e.g., Na, Ca, Fe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Charge
              </label>
              <input
                type="number"
                value={cationCharge}
                onChange={(e) => setCationCharge(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 dark:focus:ring-red-400 focus:border-transparent transition-colors"
                placeholder="+1, +2, +3"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {cations.slice(0, 8).map((ion, index) => (
              <button
                key={index}
                onClick={() => selectCation(ion)}
                className="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-900 dark:text-red-300 rounded-lg text-sm hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
              >
                {ion.symbol}<sup>+{ion.charge}</sup>
              </button>
            ))}
          </div>
        </div>

        {/* Anion Input */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Anion (Negative Ion)</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Symbol
              </label>
              <input
                type="text"
                value={anionSymbol}
                onChange={(e) => setAnionSymbol(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="e.g., Cl, O, SO4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Charge
              </label>
              <input
                type="number"
                value={anionCharge}
                onChange={(e) => setAnionCharge(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="-1, -2, -3"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {anions.slice(0, 8).map((ion, index) => (
              <button
                key={index}
                onClick={() => selectAnion(ion)}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-300 rounded-lg text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                {ion.symbol}<sup>{ion.charge}</sup>
              </button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Calculate Formula
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Chemical Formula:</span>
                <span className="text-3xl font-bold text-green-600 dark:text-green-400 font-mono">
                  {result.formula}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Compound Name:</span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {result.name}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Ratio:</span>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {result.cationCount}:{result.anionCount}
                </span>
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
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Quick Reference</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>• <strong>NaCl:</strong> Na<sup>+</sup> + Cl<sup>-</sup> → 1:1 ratio</li>
            <li>• <strong>CaCl₂:</strong> Ca<sup>2+</sup> + Cl<sup>-</sup> → 1:2 ratio</li>
            <li>• <strong>Al₂O₃:</strong> Al<sup>3+</sup> + O<sup>2-</sup> → 2:3 ratio</li>
            <li>• Cross-multiply charges to get subscripts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
