'use client';

import React, { useState } from 'react';

interface Element {
  symbol: string;
  count: number;
}

const PercentCompositionCalculator: React.FC = () => {
  const [formula, setFormula] = useState<string>('');
  const [elements, setElements] = useState<Element[]>([]);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Atomic masses (amu)
  const atomicMasses: { [key: string]: number } = {
    H: 1.008, He: 4.003, Li: 6.941, Be: 9.012, B: 10.81, C: 12.01, N: 14.01, O: 16.00,
    F: 19.00, Ne: 20.18, Na: 22.99, Mg: 24.31, Al: 26.98, Si: 28.09, P: 30.97, S: 32.07,
    Cl: 35.45, Ar: 39.95, K: 39.10, Ca: 40.08, Sc: 44.96, Ti: 47.87, V: 50.94, Cr: 52.00,
    Mn: 54.94, Fe: 55.85, Co: 58.93, Ni: 58.69, Cu: 63.55, Zn: 65.38, Ga: 69.72, Ge: 72.63,
    As: 74.92, Se: 78.97, Br: 79.90, Kr: 83.80, Rb: 85.47, Sr: 87.62, Y: 88.91, Zr: 91.22,
    Nb: 92.91, Mo: 95.95, Tc: 98.00, Ru: 101.1, Rh: 102.9, Pd: 106.4, Ag: 107.9, Cd: 112.4,
    In: 114.8, Sn: 118.7, Sb: 121.8, Te: 127.6, I: 126.9, Xe: 131.3, Cs: 132.9, Ba: 137.3,
  };

  const commonCompounds = [
    { name: 'Water', formula: 'H2O' },
    { name: 'Carbon Dioxide', formula: 'CO2' },
    { name: 'Glucose', formula: 'C6H12O6' },
    { name: 'Sulfuric Acid', formula: 'H2SO4' },
    { name: 'Ammonia', formula: 'NH3' },
    { name: 'Methane', formula: 'CH4' },
    { name: 'Ethanol', formula: 'C2H6O' },
    { name: 'Sodium Chloride', formula: 'NaCl' },
    { name: 'Calcium Carbonate', formula: 'CaCO3' },
  ];

  const parseFormula = (formulaStr: string): Element[] => {
    const elementList: Element[] = [];
    // Simple regex: capital letter, optional lowercase, optional number
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(formulaStr)) !== null) {
      const symbol = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      
      if (symbol && count > 0) {
        // Check if element already exists
        const existing = elementList.find(e => e.symbol === symbol);
        if (existing) {
          existing.count += count;
        } else {
          elementList.push({ symbol, count });
        }
      }
    }

    return elementList;
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (!formula.trim()) {
        throw new Error('Please enter a chemical formula');
      }

      // Parse formula
      const parsedElements = parseFormula(formula);
      
      if (parsedElements.length === 0) {
        throw new Error('Invalid chemical formula');
      }

      // Calculate molar mass and individual masses
      let molarMass = 0;
      const elementData: any[] = [];

      for (const elem of parsedElements) {
        const atomicMass = atomicMasses[elem.symbol];
        if (!atomicMass) {
          throw new Error(`Unknown element: ${elem.symbol}`);
        }

        const totalMass = atomicMass * elem.count;
        molarMass += totalMass;

        elementData.push({
          symbol: elem.symbol,
          count: elem.count,
          atomicMass,
          totalMass,
        });
      }

      // Calculate percentages
      const compositionData = elementData.map(elem => ({
        ...elem,
        percent: (elem.totalMass / molarMass) * 100,
      }));

      // Sort by percentage (highest first)
      compositionData.sort((a, b) => b.percent - a.percent);

      setElements(parsedElements);
      setResult({
        formula: formula,
        molarMass,
        composition: compositionData,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (compound: typeof commonCompounds[0]) => {
    setFormula(compound.formula);
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setFormula('');
    setElements([]);
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            % = (mass of element / molar mass) × 100
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate the mass percent composition of elements in a chemical compound.
          </p>
        </div>

        {/* Common Compounds */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Common Compounds:
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {commonCompounds.map((compound, index) => (
              <button
                key={index}
                onClick={() => fillExample(compound)}
                className="p-2 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="font-mono text-sm text-gray-900 dark:text-white">
                  {compound.formula}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {compound.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Chemical Formula
          </label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white text-lg font-mono"
            placeholder="e.g., H2SO4, C6H12O6, Ca(OH)2"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Enter formula using element symbols and numbers (e.g., H2O, CO2, NaCl)
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate Composition
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Formula: <span className="font-mono text-xl">{result.formula}</span>
              </h4>
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">Molar Mass:</p>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {result.molarMass.toFixed(2)} g/mol
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900 dark:text-white">Percent Composition:</h5>
              
              {result.composition.map((elem: any, index: number) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                        {elem.symbol}
                      </span>
                      <div className="text-sm">
                        <div className="text-gray-600 dark:text-gray-400">
                          {elem.count} atom{elem.count > 1 ? 's' : ''}
                        </div>
                        <div className="text-gray-500 dark:text-gray-500 text-xs">
                          {elem.atomicMass.toFixed(2)} amu each
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
                        {elem.percent.toFixed(2)}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {elem.totalMass.toFixed(2)} g/mol
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${elem.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-1">
                  Total: {result.composition.reduce((sum: number, e: any) => sum + e.percent, 0).toFixed(2)}%
                </p>
                <p className="text-xs text-green-700 dark:text-green-300">
                  Percentages should sum to 100% (within rounding error)
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Percent Composition
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Percent composition</strong> tells you the percentage by mass of each element in a compound. 
              It's calculated by dividing the total mass of each element by the molar mass of the compound.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Step 1:</strong> Find molar mass of compound (sum of all atomic masses)</li>
              <li><strong>Step 2:</strong> Calculate mass contribution of each element</li>
              <li><strong>Step 3:</strong> Divide element mass by total molar mass, multiply by 100</li>
              <li><strong>Check:</strong> All percentages should add up to 100%</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Applications:</strong> Percent composition is used in empirical formula determination, 
                stoichiometry calculations, and analyzing the purity of compounds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentCompositionCalculator;
