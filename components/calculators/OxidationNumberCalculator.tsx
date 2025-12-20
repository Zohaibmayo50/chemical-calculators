'use client';

import React, { useState } from 'react';

interface Element {
  symbol: string;
  count: number;
  oxidationState: number;
}

const OxidationNumberCalculator: React.FC = () => {
  const [formula, setFormula] = useState<string>('');
  const [charge, setCharge] = useState<string>('0');
  const [knownElement, setKnownElement] = useState<string>('');
  const [knownOxState, setKnownOxState] = useState<string>('');
  const [result, setResult] = useState<Element[] | null>(null);
  const [error, setError] = useState<string>('');

  const commonOxidationStates: { [key: string]: number } = {
    'H': 1,
    'O': -2,
    'F': -1,
    'Cl': -1,
    'Br': -1,
    'I': -1,
    'Na': 1,
    'K': 1,
    'Li': 1,
    'Ca': 2,
    'Mg': 2,
    'Ba': 2,
    'Al': 3,
    'Zn': 2,
  };

  const parseFormula = (formula: string): Element[] | null => {
    const elements: Element[] = [];
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(formula)) !== null) {
      const symbol = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      elements.push({ symbol, count, oxidationState: 0 });
    }

    return elements.length > 0 ? elements : null;
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (!formula) {
        setError('Enter a chemical formula');
        return;
      }

      const elements = parseFormula(formula.replace(/\s/g, ''));
      if (!elements) {
        setError('Invalid formula format. Use capital letters for elements (e.g., H2SO4)');
        return;
      }

      const moleculeCharge = parseFloat(charge);
      let knownOxidationStates: { [key: string]: number } = { ...commonOxidationStates };

      // Add user-specified oxidation state
      if (knownElement && knownOxState) {
        knownOxidationStates[knownElement] = parseFloat(knownOxState);
      }

      // Assign known oxidation states
      let totalKnownOx = 0;
      let unknownElements: Element[] = [];

      elements.forEach(element => {
        if (knownOxidationStates[element.symbol] !== undefined) {
          element.oxidationState = knownOxidationStates[element.symbol];
          totalKnownOx += element.oxidationState * element.count;
        } else {
          unknownElements.push(element);
        }
      });

      // Calculate unknown oxidation state
      if (unknownElements.length === 1) {
        const unknown = unknownElements[0];
        const requiredTotal = moleculeCharge - totalKnownOx;
        unknown.oxidationState = requiredTotal / unknown.count;
      } else if (unknownElements.length === 0) {
        // Verify the charge
        const calculatedCharge = elements.reduce((sum, el) => sum + el.oxidationState * el.count, 0);
        if (Math.abs(calculatedCharge - moleculeCharge) > 0.01) {
          setError(`Charge mismatch: calculated ${calculatedCharge}, expected ${moleculeCharge}`);
          return;
        }
      } else {
        setError('Cannot determine oxidation states: too many unknowns. Specify one element\'s oxidation state.');
        return;
      }

      setResult(elements);
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setFormula('');
    setCharge('0');
    setKnownElement('');
    setKnownOxState('');
    setResult(null);
    setError('');
  };

  const setExample = (example: string) => {
    if (example === 'h2so4') {
      setFormula('H2SO4');
      setCharge('0');
      setKnownElement('');
      setKnownOxState('');
    } else if (example === 'kmno4') {
      setFormula('KMnO4');
      setCharge('0');
      setKnownElement('');
      setKnownOxState('');
    } else if (example === 'cr2o7') {
      setFormula('Cr2O7');
      setCharge('-2');
      setKnownElement('');
      setKnownOxState('');
    } else if (example === 'nh4') {
      setFormula('NH4');
      setCharge('1');
      setKnownElement('');
      setKnownOxState('');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Oxidation Number Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Oxidation Number:</strong> The charge an atom would have if all bonds were ionic
          <br />
          Sum of oxidation numbers in neutral compound = 0
          <br />
          Sum of oxidation numbers in ion = ion charge
        </p>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Example Compounds
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() => setExample('h2so4')}
            className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
          >
            H₂SO₄
          </button>
          <button
            onClick={() => setExample('kmno4')}
            className="py-2 px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 text-sm font-medium transition-colors"
          >
            KMnO₄
          </button>
          <button
            onClick={() => setExample('cr2o7')}
            className="py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 text-sm font-medium transition-colors"
          >
            Cr₂O₇²⁻
          </button>
          <button
            onClick={() => setExample('nh4')}
            className="py-2 px-3 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 text-sm font-medium transition-colors"
          >
            NH₄⁺
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Chemical Formula
          </label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="e.g., H2SO4, KMnO4, Cr2O7"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Use capital letters for elements, numbers for subscripts (H2O, not h2o)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Overall Charge
          </label>
          <input
            type="number"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter charge"
            step="1"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            0 for neutral molecules, positive/negative for ions (e.g., -2 for SO₄²⁻)
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Optional: Specify Known Oxidation State
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Element Symbol
              </label>
              <input
                type="text"
                value={knownElement}
                onChange={(e) => setKnownElement(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="e.g., S, Mn, Cr"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Oxidation State
              </label>
              <input
                type="number"
                value={knownOxState}
                onChange={(e) => setKnownOxState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="e.g., +6, -2"
                step="1"
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

      {result !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Oxidation Numbers:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {result.map((element, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-700"
                >
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {element.symbol}
                    {element.count > 1 && <sub className="text-lg">{element.count}</sub>}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Oxidation State:</p>
                  <p className={`text-3xl font-bold ${
                    element.oxidationState > 0 
                      ? 'text-red-600 dark:text-red-400' 
                      : element.oxidationState < 0 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {element.oxidationState > 0 ? '+' : ''}{element.oxidationState.toFixed(0)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Verification:</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Sum of oxidation numbers: {' '}
              {result.reduce((sum, el) => sum + el.oxidationState * el.count, 0).toFixed(0)}
              {' = '}
              {charge} (charge) ✓
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Formula Breakdown:</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {result.map((element, index) => (
                <p key={index}>
                  • {element.symbol}: {element.oxidationState > 0 ? '+' : ''}{element.oxidationState} 
                  {element.count > 1 && ` × ${element.count} atoms = ${(element.oxidationState * element.count) > 0 ? '+' : ''}${element.oxidationState * element.count}`}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Oxidation State Rules:</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <p>• <strong>Alkali metals (Li, Na, K):</strong> Always +1</p>
          <p>• <strong>Alkaline earth metals (Mg, Ca, Ba):</strong> Always +2</p>
          <p>• <strong>Hydrogen:</strong> Usually +1 (except in metal hydrides: -1)</p>
          <p>• <strong>Oxygen:</strong> Usually -2 (except in peroxides: -1, and OF₂: +2)</p>
          <p>• <strong>Halogens (F, Cl, Br, I):</strong> Usually -1 when in compounds</p>
          <p>• <strong>Free elements:</strong> Always 0</p>
          <p>• <strong>Monatomic ions:</strong> Equal to ion charge</p>
        </div>
      </div>
    </div>
  );
};

export default OxidationNumberCalculator;
