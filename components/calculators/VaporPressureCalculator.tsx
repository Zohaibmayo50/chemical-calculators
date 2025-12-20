'use client';

import React, { useState } from 'react';

type SolveFor = 'P2' | 'P1' | 'T2' | 'T1' | 'Hvap';

const VaporPressureCalculator: React.FC = () => {
  const [solveFor, setSolveFor] = useState<SolveFor>('P2');
  const [P1, setP1] = useState<string>('');
  const [P2, setP2] = useState<string>('');
  const [T1, setT1] = useState<string>('');
  const [T2, setT2] = useState<string>('');
  const [Hvap, setHvap] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 8.314; // J/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const P1Num = parseFloat(P1);
      const P2Num = parseFloat(P2);
      const T1Num = parseFloat(T1);
      const T2Num = parseFloat(T2);
      const HvapNum = parseFloat(Hvap);

      if (solveFor === 'P2') {
        if (!P1 || !T1 || !T2 || !Hvap) {
          setError('Please enter P₁, T₁, T₂, and ΔHvap');
          return;
        }
        if (P1Num <= 0 || T1Num <= 0 || T2Num <= 0 || HvapNum <= 0) {
          setError('All values must be positive');
          return;
        }
        // ln(P2/P1) = -(ΔHvap/R)(1/T2 - 1/T1)
        const exponent = -(HvapNum * 1000 / R) * (1 / T2Num - 1 / T1Num);
        const calculated = P1Num * Math.exp(exponent);
        setResult(calculated);
      } else if (solveFor === 'P1') {
        if (!P2 || !T1 || !T2 || !Hvap) {
          setError('Please enter P₂, T₁, T₂, and ΔHvap');
          return;
        }
        if (P2Num <= 0 || T1Num <= 0 || T2Num <= 0 || HvapNum <= 0) {
          setError('All values must be positive');
          return;
        }
        const exponent = -(HvapNum * 1000 / R) * (1 / T2Num - 1 / T1Num);
        const calculated = P2Num / Math.exp(exponent);
        setResult(calculated);
      } else if (solveFor === 'T2') {
        if (!P1 || !P2 || !T1 || !Hvap) {
          setError('Please enter P₁, P₂, T₁, and ΔHvap');
          return;
        }
        if (P1Num <= 0 || P2Num <= 0 || T1Num <= 0 || HvapNum <= 0) {
          setError('All values must be positive');
          return;
        }
        // 1/T2 = 1/T1 + (R/ΔHvap)·ln(P2/P1)
        const calculated = 1 / (1 / T1Num + (R / (HvapNum * 1000)) * Math.log(P2Num / P1Num));
        setResult(calculated);
      } else if (solveFor === 'T1') {
        if (!P1 || !P2 || !T2 || !Hvap) {
          setError('Please enter P₁, P₂, T₂, and ΔHvap');
          return;
        }
        if (P1Num <= 0 || P2Num <= 0 || T2Num <= 0 || HvapNum <= 0) {
          setError('All values must be positive');
          return;
        }
        const calculated = 1 / (1 / T2Num - (R / (HvapNum * 1000)) * Math.log(P2Num / P1Num));
        setResult(calculated);
      } else if (solveFor === 'Hvap') {
        if (!P1 || !P2 || !T1 || !T2) {
          setError('Please enter P₁, P₂, T₁, and T₂');
          return;
        }
        if (P1Num <= 0 || P2Num <= 0 || T1Num <= 0 || T2Num <= 0) {
          setError('All values must be positive');
          return;
        }
        if (P1Num === P2Num) {
          setError('P₁ and P₂ must be different');
          return;
        }
        // ΔHvap = -R·ln(P2/P1) / (1/T2 - 1/T1)
        const calculated = -(R * Math.log(P2Num / P1Num) / (1 / T2Num - 1 / T1Num)) / 1000;
        setResult(calculated);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setP1('');
    setP2('');
    setT1('');
    setT2('');
    setHvap('');
    setResult(null);
    setError('');
  };

  const getResultLabel = () => {
    switch (solveFor) {
      case 'P2': return 'Vapor Pressure at T₂ (P₂)';
      case 'P1': return 'Vapor Pressure at T₁ (P₁)';
      case 'T2': return 'Temperature 2 (T₂)';
      case 'T1': return 'Temperature 1 (T₁)';
      case 'Hvap': return 'Heat of Vaporization (ΔHvap)';
    }
  };

  const getResultUnit = () => {
    switch (solveFor) {
      case 'P2':
      case 'P1': return 'same as input (atm, mmHg, kPa)';
      case 'T2':
      case 'T1': return 'K';
      case 'Hvap': return 'kJ/mol';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Vapor Pressure Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Clausius-Clapeyron Equation:</strong> ln(P₂/P₁) = -(ΔHvap/R)(1/T₂ - 1/T₁)
          <br />
          Relates vapor pressure to temperature and enthalpy of vaporization
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For:
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <button
            onClick={() => setSolveFor('P2')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'P2'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            P₂
          </button>
          <button
            onClick={() => setSolveFor('P1')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'P1'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            P₁
          </button>
          <button
            onClick={() => setSolveFor('T2')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'T2'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            T₂
          </button>
          <button
            onClick={() => setSolveFor('T1')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'T1'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            T₁
          </button>
          <button
            onClick={() => setSolveFor('Hvap')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              solveFor === 'Hvap'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            ΔHvap
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {solveFor !== 'P1' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Vapor Pressure 1 (P₁)
            </label>
            <input
              type="number"
              value={P1}
              onChange={(e) => setP1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter P₁"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">atm, mmHg, kPa (must match P₂)</p>
          </div>
        )}

        {solveFor !== 'P2' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Vapor Pressure 2 (P₂)
            </label>
            <input
              type="number"
              value={P2}
              onChange={(e) => setP2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter P₂"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Same units as P₁</p>
          </div>
        )}

        {solveFor !== 'T1' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature 1 (T₁)
            </label>
            <input
              type="number"
              value={T1}
              onChange={(e) => setT1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter T₁"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kelvin (K)</p>
          </div>
        )}

        {solveFor !== 'T2' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature 2 (T₂)
            </label>
            <input
              type="number"
              value={T2}
              onChange={(e) => setT2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter T₂"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kelvin (K)</p>
          </div>
        )}

        {solveFor !== 'Hvap' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Heat of Vaporization (ΔHvap)
            </label>
            <input
              type="number"
              value={Hvap}
              onChange={(e) => setHvap(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter ΔHvap"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">kJ/mol</p>
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
              {result.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {getResultUnit()}
            </p>
          </div>

          {(solveFor === 'T1' || solveFor === 'T2') && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Temperature in Celsius:</strong> {(result - 273.15).toFixed(2)}°C
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common ΔHvap Values:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• Water: 40.7 kJ/mol</div>
          <div>• Ethanol: 38.6 kJ/mol</div>
          <div>• Benzene: 30.7 kJ/mol</div>
          <div>• Acetone: 29.1 kJ/mol</div>
        </div>
      </div>
    </div>
  );
};

export default VaporPressureCalculator;
