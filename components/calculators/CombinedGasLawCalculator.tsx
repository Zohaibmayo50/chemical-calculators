'use client';

import React, { useState } from 'react';

export default function CombinedGasLawCalculator() {
  const [p1, setP1] = useState<string>('');
  const [v1, setV1] = useState<string>('');
  const [t1, setT1] = useState<string>('');
  const [p2, setP2] = useState<string>('');
  const [v2, setV2] = useState<string>('');
  const [t2, setT2] = useState<string>('');
  const [solveFor, setSolveFor] = useState<string>('P2');
  const [result, setResult] = useState<number | null>(null);

  const calculateGasLaw = () => {
    const P1 = parseFloat(p1);
    const V1 = parseFloat(v1);
    const T1 = parseFloat(t1);
    const P2 = parseFloat(p2);
    const V2 = parseFloat(v2);
    const T2 = parseFloat(t2);

    // Combined Gas Law: P1V1/T1 = P2V2/T2

    let calculatedValue: number;

    switch (solveFor) {
      case 'P2':
        if (isNaN(P1) || isNaN(V1) || isNaN(T1) || isNaN(V2) || isNaN(T2)) {
          alert('Please enter P1, V1, T1, V2, and T2 to solve for P2.');
          return;
        }
        if (T1 <= 0 || T2 <= 0 || V2 <= 0) {
          alert('Temperature and volume must be positive.');
          return;
        }
        calculatedValue = (P1 * V1 * T2) / (T1 * V2);
        break;

      case 'V2':
        if (isNaN(P1) || isNaN(V1) || isNaN(T1) || isNaN(P2) || isNaN(T2)) {
          alert('Please enter P1, V1, T1, P2, and T2 to solve for V2.');
          return;
        }
        if (T1 <= 0 || T2 <= 0 || P2 <= 0) {
          alert('Temperature and pressure must be positive.');
          return;
        }
        calculatedValue = (P1 * V1 * T2) / (P2 * T1);
        break;

      case 'T2':
        if (isNaN(P1) || isNaN(V1) || isNaN(T1) || isNaN(P2) || isNaN(V2)) {
          alert('Please enter P1, V1, T1, P2, and V2 to solve for T2.');
          return;
        }
        if (T1 <= 0 || V1 <= 0 || P1 <= 0) {
          alert('Temperature, pressure, and volume must be positive.');
          return;
        }
        calculatedValue = (P2 * V2 * T1) / (P1 * V1);
        break;

      case 'P1':
        if (isNaN(V1) || isNaN(T1) || isNaN(P2) || isNaN(V2) || isNaN(T2)) {
          alert('Please enter V1, T1, P2, V2, and T2 to solve for P1.');
          return;
        }
        if (T1 <= 0 || T2 <= 0 || V1 <= 0) {
          alert('Temperature and volume must be positive.');
          return;
        }
        calculatedValue = (P2 * V2 * T1) / (T2 * V1);
        break;

      case 'V1':
        if (isNaN(P1) || isNaN(T1) || isNaN(P2) || isNaN(V2) || isNaN(T2)) {
          alert('Please enter P1, T1, P2, V2, and T2 to solve for V1.');
          return;
        }
        if (T1 <= 0 || T2 <= 0 || P1 <= 0) {
          alert('Temperature and pressure must be positive.');
          return;
        }
        calculatedValue = (P2 * V2 * T1) / (P1 * T2);
        break;

      case 'T1':
        if (isNaN(P1) || isNaN(V1) || isNaN(P2) || isNaN(V2) || isNaN(T2)) {
          alert('Please enter P1, V1, P2, V2, and T2 to solve for T1.');
          return;
        }
        if (T2 <= 0 || V1 <= 0 || P1 <= 0) {
          alert('Temperature, pressure, and volume must be positive.');
          return;
        }
        calculatedValue = (P1 * V1 * T2) / (P2 * V2);
        break;

      default:
        return;
    }

    setResult(calculatedValue);
  };

  const clearFields = () => {
    setP1('');
    setV1('');
    setT1('');
    setP2('');
    setV2('');
    setT2('');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Combined Gas Law:</strong> P₁V₁/T₁ = P₂V₂/T₂<br/>
            <span className="text-xs">Leave the unknown value empty and select it from the dropdown below.</span>
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Solve For:
          </label>
          <select
            value={solveFor}
            onChange={(e) => setSolveFor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
          >
            <option value="P2">P₂ (Final Pressure)</option>
            <option value="V2">V₂ (Final Volume)</option>
            <option value="T2">T₂ (Final Temperature)</option>
            <option value="P1">P₁ (Initial Pressure)</option>
            <option value="V1">V₁ (Initial Volume)</option>
            <option value="T1">T₁ (Initial Temperature)</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Pressure (P₁) (atm)
            </label>
            <input
              type="number"
              step="any"
              value={p1}
              onChange={(e) => setP1(e.target.value)}
              disabled={solveFor === 'P1'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'P1' ? 'Solving for this' : 'e.g., 1.0'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Volume (V₁) (L)
            </label>
            <input
              type="number"
              step="any"
              value={v1}
              onChange={(e) => setV1(e.target.value)}
              disabled={solveFor === 'V1'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'V1' ? 'Solving for this' : 'e.g., 2.0'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Temperature (T₁) (K)
            </label>
            <input
              type="number"
              step="any"
              value={t1}
              onChange={(e) => setT1(e.target.value)}
              disabled={solveFor === 'T1'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'T1' ? 'Solving for this' : 'e.g., 273'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Pressure (P₂) (atm)
            </label>
            <input
              type="number"
              step="any"
              value={p2}
              onChange={(e) => setP2(e.target.value)}
              disabled={solveFor === 'P2'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'P2' ? 'Solving for this' : 'e.g., 2.0'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Volume (V₂) (L)
            </label>
            <input
              type="number"
              step="any"
              value={v2}
              onChange={(e) => setV2(e.target.value)}
              disabled={solveFor === 'V2'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'V2' ? 'Solving for this' : 'e.g., 1.0'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Temperature (T₂) (K)
            </label>
            <input
              type="number"
              step="any"
              value={t2}
              onChange={(e) => setT2(e.target.value)}
              disabled={solveFor === 'T2'}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all disabled:bg-gray-100 dark:disabled:bg-gray-600"
              placeholder={solveFor === 'T2' ? 'Solving for this' : 'e.g., 546'}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateGasLaw}
            className="flex-1 bg-accent-600 hover:bg-accent-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-accent-200 dark:border-accent-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{solveFor === 'P1' ? 'P₁' : solveFor === 'V1' ? 'V₁' : solveFor === 'T1' ? 'T₁' : solveFor === 'P2' ? 'P₂' : solveFor === 'V2' ? 'V₂' : 'T₂'}:</span>{' '}
                <span className="text-accent-600 dark:text-accent-400 font-bold text-xl">
                  {result.toFixed(4)} {solveFor.includes('P') ? 'atm' : solveFor.includes('V') ? 'L' : 'K'}
                </span>
              </p>
              
              {solveFor.includes('T') && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  = {(result - 273.15).toFixed(2)} °C
                </p>
              )}

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: P₁V₁/T₁ = P₂V₂/T₂
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
