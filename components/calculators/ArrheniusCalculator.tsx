'use client';

import React, { useState } from 'react';

type SolveFor = 'k' | 'Ea' | 'T' | 'A';

const ArrheniusCalculator: React.FC = () => {
  const [solveFor, setSolveFor] = useState<SolveFor>('k');
  const [k, setK] = useState<string>('');
  const [A, setA] = useState<string>('');
  const [Ea, setEa] = useState<string>('');
  const [T, setT] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 8.314; // J/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const kNum = parseFloat(k);
      const ANum = parseFloat(A);
      const EaNum = parseFloat(Ea);
      const TNum = parseFloat(T);

      if (solveFor === 'k') {
        if (!A || !Ea || !T) {
          setError('Please enter A, Ea, and T to calculate k');
          return;
        }
        if (ANum <= 0 || EaNum < 0 || TNum <= 0) {
          setError('A, Ea, and T must be positive values');
          return;
        }
        // k = A * e^(-Ea/RT)
        const calculated = ANum * Math.exp(-(EaNum * 1000) / (R * TNum));
        setResult(calculated);
      } else if (solveFor === 'Ea') {
        if (!k || !A || !T) {
          setError('Please enter k, A, and T to calculate Ea');
          return;
        }
        if (kNum <= 0 || ANum <= 0 || TNum <= 0) {
          setError('k, A, and T must be positive values');
          return;
        }
        if (kNum > ANum) {
          setError('Rate constant k cannot exceed frequency factor A');
          return;
        }
        // Ea = -RT * ln(k/A)
        const calculated = -(R * TNum * Math.log(kNum / ANum)) / 1000;
        setResult(calculated);
      } else if (solveFor === 'T') {
        if (!k || !A || !Ea) {
          setError('Please enter k, A, and Ea to calculate T');
          return;
        }
        if (kNum <= 0 || ANum <= 0 || EaNum < 0) {
          setError('k, A, and Ea must be positive values');
          return;
        }
        if (kNum > ANum) {
          setError('Rate constant k cannot exceed frequency factor A');
          return;
        }
        // T = -Ea / (R * ln(k/A))
        const calculated = -(EaNum * 1000) / (R * Math.log(kNum / ANum));
        setResult(calculated);
      } else if (solveFor === 'A') {
        if (!k || !Ea || !T) {
          setError('Please enter k, Ea, and T to calculate A');
          return;
        }
        if (kNum <= 0 || EaNum < 0 || TNum <= 0) {
          setError('k, Ea, and T must be positive values');
          return;
        }
        // A = k / e^(-Ea/RT)
        const calculated = kNum / Math.exp(-(EaNum * 1000) / (R * TNum));
        setResult(calculated);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setK('');
    setA('');
    setEa('');
    setT('');
    setResult(null);
    setError('');
  };

  const getResultLabel = () => {
    switch (solveFor) {
      case 'k': return 'Rate Constant (k)';
      case 'Ea': return 'Activation Energy (Ea)';
      case 'T': return 'Temperature (T)';
      case 'A': return 'Frequency Factor (A)';
    }
  };

  const getResultUnit = () => {
    switch (solveFor) {
      case 'k': return 'varies with order';
      case 'Ea': return 'kJ/mol';
      case 'T': return 'K';
      case 'A': return 'same as k';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Arrhenius Equation Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Arrhenius Equation:</strong> k = A·e<sup>-Ea/RT</sup>
          <br />
          Relates rate constant to temperature and activation energy
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() => setSolveFor('k')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'k'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            k (Rate Constant)
          </button>
          <button
            onClick={() => setSolveFor('Ea')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'Ea'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Ea (Activation)
          </button>
          <button
            onClick={() => setSolveFor('T')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'T'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            T (Temperature)
          </button>
          <button
            onClick={() => setSolveFor('A')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'A'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            A (Frequency)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {solveFor !== 'k' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate Constant (k)
            </label>
            <input
              type="number"
              value={k}
              onChange={(e) => setK(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter k"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Units vary with reaction order</p>
          </div>
        )}

        {solveFor !== 'A' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Frequency Factor (A)
            </label>
            <input
              type="number"
              value={A}
              onChange={(e) => setA(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter A"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Same units as k</p>
          </div>
        )}

        {solveFor !== 'Ea' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Activation Energy (Ea)
            </label>
            <input
              type="number"
              value={Ea}
              onChange={(e) => setEa(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter Ea"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">kJ/mol</p>
          </div>
        )}

        {solveFor !== 'T' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (T)
            </label>
            <input
              type="number"
              value={T}
              onChange={(e) => setT(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter T"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kelvin (K)</p>
          </div>
        )}
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
              {getResultLabel()}:
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {solveFor === 'k' || solveFor === 'A' ? result.toExponential(4) : result.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {getResultUnit()}
            </p>
          </div>

          {solveFor === 'T' && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Temperature in Celsius:</strong> {(result - 273.15).toFixed(2)}°C
              </p>
            </div>
          )}

          {solveFor === 'Ea' && (
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Low Ea (&lt;50 kJ/mol): Fast reaction, weak temperature dependence</li>
                <li>• Medium Ea (50-150 kJ/mol): Moderate temperature sensitivity</li>
                <li>• High Ea (&gt;150 kJ/mol): Slow reaction, strong temperature dependence</li>
              </ul>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• R = 8.314 J/(mol·K) - Universal gas constant</li>
          <li>• Temperature must be in Kelvin: K = °C + 273.15</li>
          <li>• Higher Ea means greater temperature sensitivity</li>
          <li>• k increases exponentially with temperature</li>
          <li>• A is the pre-exponential or frequency factor</li>
        </ul>
      </div>
    </div>
  );
};

export default ArrheniusCalculator;
