'use client';

import { useState } from 'react';

interface ElementData {
  element: string;
  mass: string;
}

export default function EmpiricalFormulaCalculator() {
  const [elements, setElements] = useState<ElementData[]>([
    { element: '', mass: '' },
    { element: '', mass: '' },
  ]);
  const [empiricalFormula, setEmpiricalFormula] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Common atomic masses
  const atomicMasses: { [key: string]: number } = {
    'H': 1.008, 'C': 12.011, 'N': 14.007, 'O': 15.999,
    'S': 32.065, 'P': 30.974, 'Cl': 35.453, 'Br': 79.904,
    'F': 18.998, 'I': 126.904, 'Na': 22.990, 'K': 39.098,
    'Ca': 40.078, 'Mg': 24.305, 'Fe': 55.845, 'Cu': 63.546,
    'Zn': 65.38, 'Ag': 107.868, 'Al': 26.982, 'Si': 28.085,
  };

  const addElement = () => {
    setElements([...elements, { element: '', mass: '' }]);
  };

  const removeElement = (index: number) => {
    if (elements.length > 2) {
      const newElements = elements.filter((_, i) => i !== index);
      setElements(newElements);
    }
  };

  const updateElement = (index: number, field: 'element' | 'mass', value: string) => {
    const newElements = [...elements];
    newElements[index][field] = value;
    setElements(newElements);
  };

  const calculateEmpiricalFormula = () => {
    setError('');
    setEmpiricalFormula('');

    // Validate inputs
    const validElements = elements.filter(e => e.element.trim() !== '' && e.mass.trim() !== '');
    
    if (validElements.length < 2) {
      setError('Please enter at least 2 elements with their masses');
      return;
    }

    // Calculate moles for each element
    const moleData: { element: string; moles: number }[] = [];
    
    for (const elem of validElements) {
      const symbol = elem.element.trim();
      const mass = parseFloat(elem.mass);

      if (isNaN(mass) || mass <= 0) {
        setError(`Invalid mass for element ${symbol}`);
        return;
      }

      const atomicMass = atomicMasses[symbol];
      if (!atomicMass) {
        setError(`Unknown element: ${symbol}. Use standard symbols like C, H, O, N, etc.`);
        return;
      }

      moleData.push({
        element: symbol,
        moles: mass / atomicMass,
      });
    }

    // Find smallest number of moles
    const minMoles = Math.min(...moleData.map(d => d.moles));

    // Divide all by smallest to get ratios
    const ratios = moleData.map(d => ({
      element: d.element,
      ratio: d.moles / minMoles,
    }));

    // Round to nearest whole number (with tolerance for common fractions)
    const subscripts = ratios.map(r => {
      let ratio = r.ratio;
      
      // Check for common fractions
      const roundedRatio = Math.round(ratio);
      const diff = Math.abs(ratio - roundedRatio);
      
      if (diff < 0.1) {
        return { element: r.element, subscript: roundedRatio };
      }
      
      // Check for 0.5 (multiply all by 2)
      if (Math.abs(ratio - Math.floor(ratio) - 0.5) < 0.1) {
        // Multiply all ratios by 2
        return { element: r.element, subscript: Math.round(ratio * 2), multiplier: 2 };
      }
      
      // Check for 0.33 or 0.67 (multiply all by 3)
      if (Math.abs(ratio - Math.floor(ratio) - 0.33) < 0.1 || Math.abs(ratio - Math.floor(ratio) - 0.67) < 0.1) {
        return { element: r.element, subscript: Math.round(ratio * 3), multiplier: 3 };
      }
      
      return { element: r.element, subscript: Math.round(ratio) };
    });

    // Check if we need to multiply all subscripts
    const needsMultiplier = subscripts.some(s => s.multiplier);
    if (needsMultiplier) {
      const multiplier = Math.max(...subscripts.map(s => s.multiplier || 1));
      subscripts.forEach(s => {
        if (!s.multiplier) {
          s.subscript = Math.round(s.subscript * multiplier);
        }
      });
    }

    // Build formula string
    let formula = '';
    subscripts.forEach(s => {
      formula += s.element;
      if (s.subscript > 1) {
        formula += s.subscript;
      }
    });

    setEmpiricalFormula(formula);
  };

  const clearFields = () => {
    setElements([
      { element: '', mass: '' },
      { element: '', mass: '' },
    ]);
    setEmpiricalFormula('');
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-primary-200 dark:border-primary-700">
      <div className="space-y-6">
        {/* Instructions */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-sm text-blue-900 dark:text-blue-300">
            <span className="font-semibold">Enter element symbols</span> (C, H, O, N, etc.) and their masses or percentages
          </p>
        </div>

        {/* Elements Input */}
        <div className="space-y-3">
          {elements.map((elem, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={elem.element}
                  onChange={(e) => updateElement(index, 'element', e.target.value.toUpperCase())}
                  placeholder="Element (e.g., C)"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  value={elem.mass}
                  onChange={(e) => updateElement(index, 'mass', e.target.value)}
                  placeholder="Mass/% (g)"
                  step="any"
                  className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white text-lg transition-colors"
                />
              </div>
              {elements.length > 2 && (
                <button
                  onClick={() => removeElement(index)}
                  className="px-4 py-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                  aria-label="Remove element"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Element Button */}
        <button
          onClick={addElement}
          className="w-full px-4 py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-lg hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          + Add Another Element
        </button>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculateEmpiricalFormula}
            className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-lg"
          >
            Calculate Formula
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg animate-fade-in">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-red-700 dark:text-red-300 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Result */}
        {empiricalFormula && (
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-300 dark:border-primary-600 animate-zoom-in">
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Empirical Formula</p>
              <p className="text-5xl font-bold text-primary-700 dark:text-primary-400 mb-2 font-mono">
                {empiricalFormula}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Simplest whole-number ratio of atoms
              </p>
            </div>
          </div>
        )}

        {/* Common Elements Reference */}
        <details className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
            Common Element Symbols
          </summary>
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2 text-sm">
            {Object.entries(atomicMasses).map(([symbol, mass]) => (
              <div key={symbol} className="bg-white dark:bg-gray-800 p-2 rounded border border-gray-200 dark:border-gray-600">
                <span className="font-bold text-primary-600 dark:text-primary-400">{symbol}</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">({mass.toFixed(2)})</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
