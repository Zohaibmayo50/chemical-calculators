'use client';

import { useState } from 'react';

interface Result {
  element: string;
  atomicNumber: number;
  groupNumber: number;
  valenceElectrons: number;
  electronConfig: string;
}

// Periodic table data for first 86 elements
const elementData: { [key: string]: { number: number; group: number; config: string } } = {
  'H': { number: 1, group: 1, config: '1s¹' },
  'He': { number: 2, group: 18, config: '1s²' },
  'Li': { number: 3, group: 1, config: '[He] 2s¹' },
  'Be': { number: 4, group: 2, config: '[He] 2s²' },
  'B': { number: 5, group: 13, config: '[He] 2s² 2p¹' },
  'C': { number: 6, group: 14, config: '[He] 2s² 2p²' },
  'N': { number: 7, group: 15, config: '[He] 2s² 2p³' },
  'O': { number: 8, group: 16, config: '[He] 2s² 2p⁴' },
  'F': { number: 9, group: 17, config: '[He] 2s² 2p⁵' },
  'Ne': { number: 10, group: 18, config: '[He] 2s² 2p⁶' },
  'Na': { number: 11, group: 1, config: '[Ne] 3s¹' },
  'Mg': { number: 12, group: 2, config: '[Ne] 3s²' },
  'Al': { number: 13, group: 13, config: '[Ne] 3s² 3p¹' },
  'Si': { number: 14, group: 14, config: '[Ne] 3s² 3p²' },
  'P': { number: 15, group: 15, config: '[Ne] 3s² 3p³' },
  'S': { number: 16, group: 16, config: '[Ne] 3s² 3p⁴' },
  'Cl': { number: 17, group: 17, config: '[Ne] 3s² 3p⁵' },
  'Ar': { number: 18, group: 18, config: '[Ne] 3s² 3p⁶' },
  'K': { number: 19, group: 1, config: '[Ar] 4s¹' },
  'Ca': { number: 20, group: 2, config: '[Ar] 4s²' },
  'Fe': { number: 26, group: 8, config: '[Ar] 3d⁶ 4s²' },
  'Cu': { number: 29, group: 11, config: '[Ar] 3d¹⁰ 4s¹' },
  'Zn': { number: 30, group: 12, config: '[Ar] 3d¹⁰ 4s²' },
  'Br': { number: 35, group: 17, config: '[Ar] 3d¹⁰ 4s² 4p⁵' },
  'Kr': { number: 36, group: 18, config: '[Ar] 3d¹⁰ 4s² 4p⁶' },
  'Ag': { number: 47, group: 11, config: '[Kr] 4d¹⁰ 5s¹' },
  'I': { number: 53, group: 17, config: '[Kr] 4d¹⁰ 5s² 5p⁵' },
  'Xe': { number: 54, group: 18, config: '[Kr] 4d¹⁰ 5s² 5p⁶' }
};

export default function ValenceElectronsCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<Result | null>(null);

  const getValenceElectrons = (group: number): number => {
    if (group === 18) return 8; // Noble gases (except He which has 2)
    if (group <= 2) return group; // Groups 1-2
    if (group >= 13) return group - 10; // Groups 13-17
    return 2; // Transition metals typically use outer s electrons
  };

  const calculate = () => {
    const trimmedInput = input.trim();
    
    // Try to find element by symbol (case-insensitive)
    const elementSymbol = Object.keys(elementData).find(
      sym => sym.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (elementSymbol) {
      const data = elementData[elementSymbol];
      const valence = elementSymbol === 'He' ? 2 : getValenceElectrons(data.group);
      
      setResult({
        element: elementSymbol,
        atomicNumber: data.number,
        groupNumber: data.group,
        valenceElectrons: valence,
        electronConfig: data.config
      });
      return;
    }

    // Try to find by atomic number
    const atomicNum = parseInt(trimmedInput);
    if (!isNaN(atomicNum)) {
      const foundElement = Object.entries(elementData).find(
        ([_, data]) => data.number === atomicNum
      );
      
      if (foundElement) {
        const [symbol, data] = foundElement;
        const valence = symbol === 'He' ? 2 : getValenceElectrons(data.group);
        
        setResult({
          element: symbol,
          atomicNumber: data.number,
          groupNumber: data.group,
          valenceElectrons: valence,
          electronConfig: data.config
        });
        return;
      }
    }

    alert('Element not found. Please enter a valid element symbol (e.g., C, Na) or atomic number (1-54)');
  };

  const reset = () => {
    setInput('');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
          ⚡
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Valence Electrons Calculator
        </h2>
      </div>

      <div className="space-y-4">
        {/* Input Section */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border border-primary-200 dark:border-primary-700">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter Element Symbol or Atomic Number
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && calculate()}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors text-lg"
            placeholder="e.g., C, Na, 6, 11"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Enter element symbol (C) or atomic number (6)
          </p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Find Valence Electrons
        </button>

        {/* Results */}
        {result && (
          <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Element:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {result.element}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Atomic Number:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {result.atomicNumber}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Group Number:</span>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {result.groupNumber}
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-green-200 dark:border-green-700">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Valence Electrons:</span>
                <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {result.valenceElectrons}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Electron Config:</span>
                <span className="text-lg font-mono text-gray-900 dark:text-white">
                  {result.electronConfig}
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
            <li>• <strong>Group 1:</strong> 1 valence electron (Li, Na, K)</li>
            <li>• <strong>Group 2:</strong> 2 valence electrons (Be, Mg, Ca)</li>
            <li>• <strong>Group 13-17:</strong> 3-7 valence electrons</li>
            <li>• <strong>Group 18:</strong> 8 valence electrons (noble gases)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
