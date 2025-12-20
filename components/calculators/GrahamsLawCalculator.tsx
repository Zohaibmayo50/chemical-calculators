'use client';

import React, { useState } from 'react';

type SolveMode = 'rate1' | 'rate2' | 'M1' | 'M2';

const GrahamsLawCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('rate1');
  const [rate1, setRate1] = useState<string>('');
  const [rate2, setRate2] = useState<string>('');
  const [M1, setM1] = useState<string>('');
  const [M2, setM2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const r1 = parseFloat(rate1);
      const r2 = parseFloat(rate2);
      const m1 = parseFloat(M1);
      const m2 = parseFloat(M2);

      // Graham's Law: rate1/rate2 = √(M2/M1)

      if (solveMode === 'rate1') {
        if (!rate2 || !M1 || !M2) {
          setError('Please enter rate₂, M₁, and M₂');
          return;
        }
        if (r2 <= 0 || m1 <= 0 || m2 <= 0) {
          setError('All values must be positive');
          return;
        }
        // rate1 = rate2 × √(M2/M1)
        const calculated = r2 * Math.sqrt(m2 / m1);
        setResult(calculated);
      } else if (solveMode === 'rate2') {
        if (!rate1 || !M1 || !M2) {
          setError('Please enter rate₁, M₁, and M₂');
          return;
        }
        if (r1 <= 0 || m1 <= 0 || m2 <= 0) {
          setError('All values must be positive');
          return;
        }
        // rate2 = rate1 / √(M2/M1)
        const calculated = r1 / Math.sqrt(m2 / m1);
        setResult(calculated);
      } else if (solveMode === 'M1') {
        if (!rate1 || !rate2 || !M2) {
          setError('Please enter rate₁, rate₂, and M₂');
          return;
        }
        if (r1 <= 0 || r2 <= 0 || m2 <= 0) {
          setError('All values must be positive');
          return;
        }
        // M1 = M2 × (rate2/rate1)²
        const calculated = m2 * Math.pow(r2 / r1, 2);
        setResult(calculated);
      } else if (solveMode === 'M2') {
        if (!rate1 || !rate2 || !M1) {
          setError('Please enter rate₁, rate₂, and M₁');
          return;
        }
        if (r1 <= 0 || r2 <= 0 || m1 <= 0) {
          setError('All values must be positive');
          return;
        }
        // M2 = M1 × (rate1/rate2)²
        const calculated = m1 * Math.pow(r1 / r2, 2);
        setResult(calculated);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setRate1('');
    setRate2('');
    setM1('');
    setM2('');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Graham&apos;s Law Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Graham&apos;s Law:</strong> rate₁/rate₂ = √(M₂/M₁)
          <br />
          The rate of diffusion or effusion is inversely proportional to the square root of molar mass
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { mode: 'rate1' as SolveMode, label: 'Rate₁' },
            { mode: 'rate2' as SolveMode, label: 'Rate₂' },
            { mode: 'M1' as SolveMode, label: 'M₁' },
            { mode: 'M2' as SolveMode, label: 'M₂' },
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

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Rate of Gas 1 (rate₁) {solveMode === 'rate1' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={rate1}
            onChange={(e) => setRate1(e.target.value)}
            disabled={solveMode === 'rate1'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter rate₁"
            step="any"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Rate of Gas 2 (rate₂) {solveMode === 'rate2' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={rate2}
            onChange={(e) => setRate2(e.target.value)}
            disabled={solveMode === 'rate2'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter rate₂"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Same units as rate₁</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molar Mass of Gas 1 (M₁) {solveMode === 'M1' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={M1}
            onChange={(e) => setM1(e.target.value)}
            disabled={solveMode === 'M1'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter M₁"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">g/mol</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molar Mass of Gas 2 (M₂) {solveMode === 'M2' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={M2}
            onChange={(e) => setM2(e.target.value)}
            disabled={solveMode === 'M2'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter M₂"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">g/mol</p>
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
              {solveMode === 'rate1' && 'Rate₁:'}
              {solveMode === 'rate2' && 'Rate₂:'}
              {solveMode === 'M1' && 'Molar Mass₁ (M₁):'}
              {solveMode === 'M2' && 'Molar Mass₂ (M₂):'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {(solveMode === 'rate1' || solveMode === 'rate2') && 'Units match input rates'}
              {(solveMode === 'M1' || solveMode === 'M2') && 'g/mol'}
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Lighter gases diffuse/effuse faster than heavier gases</li>
              <li>• Rate is inversely proportional to √(molar mass)</li>
              <li>• Applies to diffusion (through medium) and effusion (through small hole)</li>
              <li>• Valid for ideal gases at the same temperature and pressure</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Gas Molar Masses:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• H₂: 2.02 g/mol</div>
          <div>• He: 4.00 g/mol</div>
          <div>• N₂: 28.01 g/mol</div>
          <div>• O₂: 32.00 g/mol</div>
          <div>• CO₂: 44.01 g/mol</div>
          <div>• Ar: 39.95 g/mol</div>
        </div>
      </div>
    </div>
  );
};

export default GrahamsLawCalculator;
