'use client';

import React, { useState } from 'react';

type SolveMode = 'pH' | 'ratio' | 'pKa';

const BufferSolutionCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('pH');
  const [pH, setPH] = useState<string>('');
  const [pKa, setPKa] = useState<string>('');
  const [ratio, setRatio] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const ph = parseFloat(pH);
      const pka = parseFloat(pKa);
      const r = parseFloat(ratio);

      // Henderson-Hasselbalch: pH = pKa + log([A-]/[HA])

      if (solveMode === 'pH') {
        if (!pKa || !ratio) {
          setError('Please enter pKa and [A-]/[HA] ratio');
          return;
        }
        if (r <= 0) {
          setError('Ratio must be positive');
          return;
        }
        const calculated = pka + Math.log10(r);
        setResult(calculated);
      } else if (solveMode === 'ratio') {
        if (!pH || !pKa) {
          setError('Please enter pH and pKa');
          return;
        }
        // ratio = 10^(pH - pKa)
        const calculated = Math.pow(10, ph - pka);
        setResult(calculated);
      } else if (solveMode === 'pKa') {
        if (!pH || !ratio) {
          setError('Please enter pH and [A-]/[HA] ratio');
          return;
        }
        if (r <= 0) {
          setError('Ratio must be positive');
          return;
        }
        // pKa = pH - log(ratio)
        const calculated = ph - Math.log10(r);
        setResult(calculated);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setPH('');
    setPKa('');
    setRatio('');
    setResult(null);
    setError('');
  };

  const setBufferSystem = (system: string) => {
    const systems: { [key: string]: string } = {
      'acetic': '4.76',
      'phosphate1': '2.15',
      'phosphate2': '7.20',
      'phosphate3': '12.35',
      'carbonic': '6.35',
      'ammonium': '9.25',
      'tris': '8.06',
    };
    if (systems[system]) {
      setPKa(systems[system]);
    }
  };

  const getBufferCapacity = () => {
    if (result !== null && solveMode === 'pH') {
      const r = parseFloat(ratio);
      if (r >= 0.1 && r <= 10) {
        return 'Good buffering capacity (ratio within 0.1-10)';
      } else {
        return 'Poor buffering capacity (ratio outside 0.1-10)';
      }
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Buffer Solution Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Henderson-Hasselbalch Equation:</strong> pH = pKa + log([A⁻]/[HA])
          <br />
          Calculate buffer pH or the ratio of conjugate base to weak acid
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { mode: 'pH' as SolveMode, label: 'pH' },
            { mode: 'ratio' as SolveMode, label: '[A⁻]/[HA] Ratio' },
            { mode: 'pKa' as SolveMode, label: 'pKa' },
          ].map(({ mode, label }) => (
            <button
              key={mode}
              onClick={() => setSolveMode(mode)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                solveMode === mode
                  ? 'bg-tertiary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Common Buffer Systems (Quick Fill pKa)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { key: 'acetic', label: 'Acetic Acid' },
            { key: 'phosphate2', label: 'Phosphate (pH 7)' },
            { key: 'carbonic', label: 'Carbonic Acid' },
            { key: 'ammonium', label: 'Ammonium' },
            { key: 'tris', label: 'Tris' },
            { key: 'phosphate1', label: 'Phosphate (pH 2)' },
            { key: 'phosphate3', label: 'Phosphate (pH 12)' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setBufferSystem(key)}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-xs font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            pH {solveMode === 'pH' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={pH}
            onChange={(e) => setPH(e.target.value)}
            disabled={solveMode === 'pH'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter pH"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            pKa {solveMode === 'pKa' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={pKa}
            onChange={(e) => setPKa(e.target.value)}
            disabled={solveMode === 'pKa'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter pKa"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            [A⁻]/[HA] Ratio {solveMode === 'ratio' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={ratio}
            onChange={(e) => setRatio(e.target.value)}
            disabled={solveMode === 'ratio'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter ratio"
            step="0.01"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Ratio of conjugate base to weak acid concentrations
          </p>
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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {solveMode === 'pH' && 'Buffer pH:'}
              {solveMode === 'ratio' && '[A⁻]/[HA] Ratio:'}
              {solveMode === 'pKa' && 'pKa:'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400">
              {result.toFixed(3)}
            </p>
          </div>

          {getBufferCapacity() && (
            <div className={`p-4 rounded-lg ${
              getBufferCapacity()?.includes('Good') 
                ? 'bg-green-50 dark:bg-green-900/30' 
                : 'bg-yellow-50 dark:bg-yellow-900/30'
            }`}>
              <p className={`text-sm font-medium ${
                getBufferCapacity()?.includes('Good')
                  ? 'text-green-800 dark:text-green-200'
                  : 'text-yellow-800 dark:text-yellow-200'
              }`}>
                {getBufferCapacity()}
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Best buffering occurs when pH = pKa (ratio = 1)</li>
              <li>• Effective buffer range: pKa ± 1</li>
              <li>• Buffer capacity decreases as ratio moves away from 1</li>
              <li>• Higher total concentration = better buffer capacity</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Buffer Systems pKa Values:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• Acetic acid/Acetate: 4.76</div>
          <div>• Phosphate (H₃PO₄/H₂PO₄⁻): 2.15</div>
          <div>• Phosphate (H₂PO₄⁻/HPO₄²⁻): 7.20</div>
          <div>• Phosphate (HPO₄²⁻/PO₄³⁻): 12.35</div>
          <div>• Carbonic acid/Bicarbonate: 6.35</div>
          <div>• Ammonium/Ammonia: 9.25</div>
          <div>• Tris: 8.06</div>
        </div>
      </div>
    </div>
  );
};

export default BufferSolutionCalculator;
