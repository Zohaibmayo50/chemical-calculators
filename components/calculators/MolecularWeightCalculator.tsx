'use client';

import React, { useState } from 'react';

interface Element {
  symbol: string;
  atomicMass: number;
}

const MolecularWeightCalculator: React.FC = () => {
  const [formula, setFormula] = useState<string>('');
  const [result, setResult] = useState<{ mw: number; breakdown: { element: string; count: number; mass: number }[] } | null>(null);
  const [error, setError] = useState<string>('');

  const elements: Record<string, number> = {
    H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00,
    F: 19.00, Ne: 20.18, Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97, S: 32.07,
    Cl: 35.45, Ar: 39.95, K: 39.10, Ca: 40.08, Sc: 44.96, Ti: 47.87, V: 50.94, Cr: 52.00,
    Mn: 54.94, Fe: 55.85, Co: 58.93, Ni: 58.69, Cu: 63.55, Zn: 65.39, Ga: 69.72, Ge: 72.64,
    As: 74.92, Se: 78.96, Br: 79.90, Kr: 83.80, Rb: 85.47, Sr: 87.62, Y: 88.91, Zr: 91.22,
    Nb: 92.91, Mo: 95.94, Tc: 98.00, Ru: 101.1, Rh: 102.9, Pd: 106.4, Ag: 107.9, Cd: 112.4,
    In: 114.8, Sn: 118.7, Sb: 121.8, Te: 127.6, I: 126.9, Xe: 131.3, Cs: 132.9, Ba: 137.3,
    La: 138.9, Ce: 140.1, Pr: 140.9, Nd: 144.2, Pm: 145.0, Sm: 150.4, Eu: 152.0, Gd: 157.3,
    Tb: 158.9, Dy: 162.5, Ho: 164.9, Er: 167.3, Tm: 168.9, Yb: 173.0, Lu: 175.0, Hf: 178.5,
    Ta: 180.9, W: 183.8, Re: 186.2, Os: 190.2, Ir: 192.2, Pt: 195.1, Au: 197.0, Hg: 200.6,
    Tl: 204.4, Pb: 207.2, Bi: 209.0, Po: 209.0, At: 210.0, Rn: 222.0, Fr: 223.0, Ra: 226.0,
    Ac: 227.0, Th: 232.0, Pa: 231.0, U: 238.0, Np: 237.0, Pu: 244.0, Am: 243.0, Cm: 247.0
  };

  const parseFormula = (formula: string): { element: string; count: number }[] => {
    const result: { element: string; count: number }[] = [];
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      
      if (!elements[element]) {
        throw new Error(`Unknown element: ${element}`);
      }
      
      const existing = result.find(r => r.element === element);
      if (existing) {
        existing.count += count;
      } else {
        result.push({ element, count });
      }
    }

    return result;
  };

  const calculate = () => {
    setError('');
    setResult(null);

    if (!formula.trim()) {
      setError('Please enter a chemical formula');
      return;
    }

    try {
      const parsed = parseFormula(formula.trim());
      
      if (parsed.length === 0) {
        setError('Invalid formula format');
        return;
      }

      const breakdown = parsed.map(({ element, count }) => ({
        element,
        count,
        mass: elements[element] * count
      }));

      const mw = breakdown.reduce((sum, item) => sum + item.mass, 0);

      setResult({ mw, breakdown });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error parsing formula');
    }
  };

  const handleClear = () => {
    setFormula('');
    setResult(null);
    setError('');
  };

  const exampleFormulas = [
    { name: 'Water', formula: 'H2O' },
    { name: 'Glucose', formula: 'C6H12O6' },
    { name: 'Sulfuric Acid', formula: 'H2SO4' },
    { name: 'Caffeine', formula: 'C8H10N4O2' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Molecular Weight Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Molecular Weight (MW):</strong> Sum of atomic masses of all atoms in a molecule.
          <br />
          Enter chemical formula (e.g., H2O, C6H12O6, Ca(OH)2)
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Chemical Formula
        </label>
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && calculate()}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg
                   focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
          placeholder="H2O"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Use capital letters for elements (H, C, O, etc.) and numbers for subscripts
        </p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Quick Examples:
        </p>
        <div className="flex flex-wrap gap-2">
          {exampleFormulas.map(({ name, formula: f }) => (
            <button
              key={f}
              onClick={() => {
                setFormula(f);
                setError('');
                setResult(null);
              }}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                       rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {name} ({f})
            </button>
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

      {result && (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Molecular Weight:
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.mw.toFixed(3)} g/mol
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Formula: {formula}
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Composition Breakdown:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Element</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Atoms</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">Mass (g/mol)</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white">%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {result.breakdown.map(({ element, count, mass }) => (
                    <tr key={element}>
                      <td className="px-4 py-2 text-gray-900 dark:text-white font-medium">{element}</td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{count}</td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">{mass.toFixed(3)}</td>
                      <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                        {((mass / result.mw) * 100).toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-100 dark:bg-gray-600">
                  <tr>
                    <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">Total</td>
                    <td className="px-4 py-2"></td>
                    <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">
                      {result.mw.toFixed(3)}
                    </td>
                    <td className="px-4 py-2 font-semibold text-gray-900 dark:text-white">100%</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Useful Conversions:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• 1 mole = {result.mw.toFixed(3)} grams</li>
              <li>• 1 gram = {(1 / result.mw).toExponential(4)} moles</li>
              <li>• 10 grams = {(10 / result.mw).toFixed(4)} moles</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Molecular weight = molar mass (g/mol)</li>
          <li>• Based on standard atomic weights (C-12 scale)</li>
          <li>• Use for converting between mass and moles</li>
          <li>• Essential for stoichiometry calculations</li>
        </ul>
      </div>
    </div>
  );
};

export default MolecularWeightCalculator;
