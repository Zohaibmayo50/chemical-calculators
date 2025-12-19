'use client';

import React, { useState } from 'react';

const HendersonHassalbalchCalculator: React.FC = () => {
  const [pKa, setPKa] = useState<string>('');
  const [baseConc, setBaseConc] = useState<string>('');
  const [acidConc, setAcidConc] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'pH' | 'pKa' | 'base' | 'acid'>('pH');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateValue = () => {
    setError('');
    setResult(null);

    const pKaNum = parseFloat(pKa);
    const baseNum = parseFloat(baseConc);
    const acidNum = parseFloat(acidConc);

    // Validation based on what we're solving for
    if (solveFor === 'pH') {
      if (isNaN(pKaNum) || isNaN(baseNum) || isNaN(acidNum)) {
        setError('Please enter valid values for pKa, base concentration, and acid concentration');
        return;
      }
      if (baseNum <= 0 || acidNum <= 0) {
        setError('Concentrations must be positive');
        return;
      }
      if (baseNum === 0 && acidNum === 0) {
        setError('At least one concentration must be non-zero');
        return;
      }
      // pH = pKa + log([A-]/[HA])
      const pH = pKaNum + Math.log10(baseNum / acidNum);
      setResult(pH);
    } else if (solveFor === 'pKa') {
      if (isNaN(parseFloat(pKa)) || isNaN(baseNum) || isNaN(acidNum)) {
        // Need pH as input
        const pHNum = parseFloat(pKa); // Using pKa input field for pH when solving for pKa
        if (isNaN(pHNum) || isNaN(baseNum) || isNaN(acidNum)) {
          setError('Please enter valid values for pH, base concentration, and acid concentration');
          return;
        }
        if (baseNum <= 0 || acidNum <= 0) {
          setError('Concentrations must be positive');
          return;
        }
        // pKa = pH - log([A-]/[HA])
        const pKaValue = pHNum - Math.log10(baseNum / acidNum);
        setResult(pKaValue);
      }
    } else if (solveFor === 'base') {
      if (isNaN(parseFloat(pKa)) || isNaN(acidNum)) {
        // Need pH as first input
        const pHNum = parseFloat(pKa); // Using pKa field for pH
        if (isNaN(pHNum) || isNaN(parseFloat(baseConc)) || isNaN(acidNum)) {
          setError('Please enter valid values for pH, pKa, and acid concentration');
          return;
        }
        if (acidNum <= 0) {
          setError('Acid concentration must be positive');
          return;
        }
        const pKaValue = parseFloat(baseConc); // Using base field for pKa
        // [A-] = [HA] * 10^(pH - pKa)
        const baseValue = acidNum * Math.pow(10, pHNum - pKaValue);
        setResult(baseValue);
      }
    } else if (solveFor === 'acid') {
      if (isNaN(parseFloat(pKa)) || isNaN(baseNum)) {
        // Need pH as first input
        const pHNum = parseFloat(pKa); // Using pKa field for pH
        if (isNaN(pHNum) || isNaN(parseFloat(baseConc)) || isNaN(baseNum)) {
          setError('Please enter valid values for pH, pKa, and base concentration');
          return;
        }
        if (baseNum <= 0) {
          setError('Base concentration must be positive');
          return;
        }
        const pKaValue = parseFloat(baseConc); // Using base field for pKa
        // [HA] = [A-] / 10^(pH - pKa)
        const acidValue = baseNum / Math.pow(10, pHNum - pKaValue);
        setResult(acidValue);
      }
    }

    // Simpler approach - let me redesign:
    // Always have: pH, pKa, [A-], [HA] as separate inputs
    // Based on solveFor, one will be calculated from the other three
  };

  // Simplified calculation approach
  const calculate = () => {
    setError('');
    setResult(null);

    const val1 = parseFloat(pKa);
    const val2 = parseFloat(baseConc);
    const val3 = parseFloat(acidConc);

    if (solveFor === 'pH') {
      if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        setError('Please enter valid values for pKa, [A⁻], and [HA]');
        return;
      }
      if (val2 <= 0 || val3 <= 0) {
        setError('Concentrations must be positive');
        return;
      }
      // pH = pKa + log([A-]/[HA])
      const pH = val1 + Math.log10(val2 / val3);
      setResult(pH);
    } else if (solveFor === 'pKa') {
      if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        setError('Please enter valid values for pH, [A⁻], and [HA]');
        return;
      }
      if (val2 <= 0 || val3 <= 0) {
        setError('Concentrations must be positive');
        return;
      }
      // pKa = pH - log([A-]/[HA])
      const pKaCalc = val1 - Math.log10(val2 / val3);
      setResult(pKaCalc);
    } else if (solveFor === 'base') {
      if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        setError('Please enter valid values for pH, pKa, and [HA]');
        return;
      }
      if (val3 <= 0) {
        setError('Acid concentration must be positive');
        return;
      }
      // [A-] = [HA] * 10^(pH - pKa)
      const baseCalc = val3 * Math.pow(10, val1 - val2);
      setResult(baseCalc);
    } else if (solveFor === 'acid') {
      if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        setError('Please enter valid values for pH, pKa, and [A⁻]');
        return;
      }
      if (val3 <= 0) {
        setError('Base concentration must be positive');
        return;
      }
      // [HA] = [A-] / 10^(pH - pKa)
      const acidCalc = val3 / Math.pow(10, val1 - val2);
      setResult(acidCalc);
    }
  };

  const handleClear = () => {
    setPKa('');
    setBaseConc('');
    setAcidConc('');
    setResult(null);
    setError('');
  };

  const getInputLabels = () => {
    switch (solveFor) {
      case 'pH':
        return { label1: 'pKa', label2: '[A⁻] (M)', label3: '[HA] (M)' };
      case 'pKa':
        return { label1: 'pH', label2: '[A⁻] (M)', label3: '[HA] (M)' };
      case 'base':
        return { label1: 'pH', label2: 'pKa', label3: '[HA] (M)' };
      case 'acid':
        return { label1: 'pH', label2: 'pKa', label3: '[A⁻] (M)' };
    }
  };

  const labels = getInputLabels();

  const getBufferRegion = (pH: number, pKa: number): string => {
    const diff = Math.abs(pH - pKa);
    if (diff <= 1) {
      return 'Effective buffer region (pH within ±1 of pKa)';
    } else if (diff <= 2) {
      return 'Acceptable buffer range (pH within ±2 of pKa)';
    } else {
      return 'Outside optimal buffer range (pH differs from pKa by more than 2 units)';
    }
  };

  const getBufferColor = (pH: number, pKa: number): string => {
    const diff = Math.abs(pH - pKa);
    if (diff <= 1) return 'text-green-600 dark:text-green-400';
    if (diff <= 2) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Henderson-Hasselbalch Calculator
      </h2>

      {/* Info Box */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Henderson-Hasselbalch Equation:</strong> pH = pKa + log([A⁻]/[HA])
          <br />
          Used to calculate the pH of buffer solutions and understand acid-base equilibria.
        </p>
      </div>

      {/* Solve For Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For:
        </label>
        <select
          value={solveFor}
          onChange={(e) => {
            setSolveFor(e.target.value as 'pH' | 'pKa' | 'base' | 'acid');
            handleClear();
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
        >
          <option value="pH">pH (most common)</option>
          <option value="pKa">pKa (acid dissociation constant)</option>
          <option value="base">[A⁻] (conjugate base concentration)</option>
          <option value="acid">[HA] (weak acid concentration)</option>
        </select>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {labels.label1}
          </label>
          <input
            type="number"
            step="any"
            value={pKa}
            onChange={(e) => setPKa(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {labels.label2}
          </label>
          <input
            type="number"
            step="any"
            value={baseConc}
            onChange={(e) => setBaseConc(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {labels.label3}
          </label>
          <input
            type="number"
            step="any"
            value={acidConc}
            onChange={(e) => setAcidConc(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="0.00"
          />
        </div>
      </div>

      {/* Buttons */}
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

      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {/* Result */}
      {result !== null && (
        <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Result:
          </h3>
          <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-4">
            {solveFor === 'pH' && `pH = ${result.toFixed(3)}`}
            {solveFor === 'pKa' && `pKa = ${result.toFixed(3)}`}
            {solveFor === 'base' && `[A⁻] = ${result.toFixed(6)} M`}
            {solveFor === 'acid' && `[HA] = ${result.toFixed(6)} M`}
          </p>

          {/* Buffer Region Information (only for pH calculations) */}
          {solveFor === 'pH' && (
            <div className="mt-4 space-y-2">
              <p className={`text-sm font-semibold ${getBufferColor(result, parseFloat(pKa))}`}>
                {getBufferRegion(result, parseFloat(pKa))}
              </p>
              
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-1">Buffer Analysis:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  {Math.abs(result - parseFloat(pKa)) <= 0.1 && (
                    <li>pH ≈ pKa: Equal concentrations of acid and conjugate base (optimal buffer)</li>
                  )}
                  {result > parseFloat(pKa) && (
                    <li>pH &gt; pKa: More conjugate base than acid ([A⁻] &gt; [HA])</li>
                  )}
                  {result < parseFloat(pKa) && (
                    <li>pH &lt; pKa: More acid than conjugate base ([HA] &gt; [A⁻])</li>
                  )}
                  <li>
                    Ratio [A⁻]/[HA] = {(parseFloat(baseConc) / parseFloat(acidConc)).toFixed(3)}
                  </li>
                  {result < 7 && <li className="text-blue-600 dark:text-blue-400">Acidic solution</li>}
                  {result === 7 && <li className="text-green-600 dark:text-green-400">Neutral solution</li>}
                  {result > 7 && <li className="text-purple-600 dark:text-purple-400">Basic solution</li>}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Educational Notes */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Buffer solutions resist pH changes when small amounts of acid or base are added</li>
          <li>• Most effective buffering occurs within pH = pKa ± 1</li>
          <li>• When pH = pKa, [A⁻] = [HA] (optimal buffer composition)</li>
          <li>• Common buffers: acetate (pKa 4.76), phosphate (pKa 7.21), Tris (pKa 8.06)</li>
        </ul>
      </div>
    </div>
  );
};

export default HendersonHassalbalchCalculator;
