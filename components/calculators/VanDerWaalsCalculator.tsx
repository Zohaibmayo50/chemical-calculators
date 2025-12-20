'use client';

import React, { useState } from 'react';

type SolveMode = 'P' | 'V' | 'n' | 'T';

const VanDerWaalsCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('P');
  const [pressure, setPressure] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [moles, setMoles] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [aConstant, setAConstant] = useState<string>('');
  const [bConstant, setBConstant] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [idealGasP, setIdealGasP] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 0.08206; // L·atm/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);
    setIdealGasP(null);

    try {
      const P = parseFloat(pressure);
      const V = parseFloat(volume);
      const n = parseFloat(moles);
      const T = parseFloat(temperature);
      const a = parseFloat(aConstant);
      const b = parseFloat(bConstant);

      if (!aConstant || !bConstant) {
        setError('Please enter van der Waals constants a and b');
        return;
      }

      if (a < 0 || b < 0) {
        setError('Constants a and b must be non-negative');
        return;
      }

      // Van der Waals equation: [P + a(n/V)²](V - nb) = nRT

      if (solveMode === 'P') {
        if (!volume || !moles || !temperature) {
          setError('Please enter V, n, and T');
          return;
        }
        if (V <= 0 || n <= 0 || T <= 0) {
          setError('V, n, and T must be positive');
          return;
        }
        if (V <= n * b) {
          setError('Volume must be greater than nb (excluded volume)');
          return;
        }
        // P = [nRT/(V-nb)] - a(n/V)²
        const calculated = (n * R * T) / (V - n * b) - a * Math.pow(n / V, 2);
        setResult(calculated);
        // Compare with ideal gas
        const idealP = (n * R * T) / V;
        setIdealGasP(idealP);
      } else if (solveMode === 'V') {
        if (!pressure || !moles || !temperature) {
          setError('Please enter P, n, and T');
          return;
        }
        if (P <= 0 || n <= 0 || T <= 0) {
          setError('P, n, and T must be positive');
          return;
        }
        // Cubic equation - use numerical approximation
        // Start with ideal gas estimate
        let V_guess = (n * R * T) / P;
        for (let i = 0; i < 100; i++) {
          const P_calc = (n * R * T) / (V_guess - n * b) - a * Math.pow(n / V_guess, 2);
          const error_P = P_calc - P;
          if (Math.abs(error_P) < 0.0001) break;
          // Numerical derivative
          const dV = 0.0001;
          const P_calc2 = (n * R * T) / (V_guess + dV - n * b) - a * Math.pow(n / (V_guess + dV), 2);
          const dP_dV = (P_calc2 - P_calc) / dV;
          V_guess = V_guess - error_P / dP_dV;
        }
        setResult(V_guess);
        const idealV = (n * R * T) / P;
        setIdealGasP(idealV);
      } else if (solveMode === 'n') {
        if (!pressure || !volume || !temperature) {
          setError('Please enter P, V, and T');
          return;
        }
        if (P <= 0 || V <= 0 || T <= 0) {
          setError('P, V, and T must be positive');
          return;
        }
        // Numerical solution
        let n_guess = (P * V) / (R * T);
        for (let i = 0; i < 100; i++) {
          if (V <= n_guess * b) {
            n_guess *= 0.9;
            continue;
          }
          const P_calc = (n_guess * R * T) / (V - n_guess * b) - a * Math.pow(n_guess / V, 2);
          const error_P = P_calc - P;
          if (Math.abs(error_P) < 0.0001) break;
          const dn = 0.0001;
          const P_calc2 = ((n_guess + dn) * R * T) / (V - (n_guess + dn) * b) - a * Math.pow((n_guess + dn) / V, 2);
          const dP_dn = (P_calc2 - P_calc) / dn;
          n_guess = n_guess - error_P / dP_dn;
        }
        setResult(n_guess);
        const idealN = (P * V) / (R * T);
        setIdealGasP(idealN);
      } else if (solveMode === 'T') {
        if (!pressure || !volume || !moles) {
          setError('Please enter P, V, and n');
          return;
        }
        if (P <= 0 || V <= 0 || n <= 0) {
          setError('P, V, and n must be positive');
          return;
        }
        if (V <= n * b) {
          setError('Volume must be greater than nb');
          return;
        }
        // T = [P + a(n/V)²](V - nb)/(nR)
        const calculated = (P + a * Math.pow(n / V, 2)) * (V - n * b) / (n * R);
        setResult(calculated);
        const idealT = (P * V) / (n * R);
        setIdealGasP(idealT);
      }
    } catch (err) {
      setError('Calculation error - check your inputs');
    }
  };

  const handleClear = () => {
    setPressure('');
    setVolume('');
    setMoles('');
    setTemperature('');
    setAConstant('');
    setBConstant('');
    setResult(null);
    setIdealGasP(null);
    setError('');
  };

  const setGasConstants = (gas: string) => {
    const constants: { [key: string]: { a: string; b: string } } = {
      'He': { a: '0.0346', b: '0.0238' },
      'H2': { a: '0.2452', b: '0.0265' },
      'N2': { a: '1.370', b: '0.0387' },
      'O2': { a: '1.382', b: '0.0319' },
      'CO2': { a: '3.658', b: '0.0429' },
      'H2O': { a: '5.537', b: '0.0305' },
    };
    if (constants[gas]) {
      setAConstant(constants[gas].a);
      setBConstant(constants[gas].b);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Van der Waals Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Van der Waals Equation:</strong> [P + a(n/V)²](V - nb) = nRT
          <br />
          Accounts for molecular size (b) and intermolecular attractions (a)
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { mode: 'P' as SolveMode, label: 'Pressure' },
            { mode: 'V' as SolveMode, label: 'Volume' },
            { mode: 'n' as SolveMode, label: 'Moles' },
            { mode: 'T' as SolveMode, label: 'Temperature' },
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
          Select Gas (Quick Fill Constants)
        </label>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {['He', 'H2', 'N2', 'O2', 'CO2', 'H2O'].map((gas) => (
            <button
              key={gas}
              onClick={() => setGasConstants(gas)}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-sm font-medium transition-colors"
            >
              {gas}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Constant a
          </label>
          <input
            type="number"
            value={aConstant}
            onChange={(e) => setAConstant(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter a"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">L²·atm/mol²</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Constant b
          </label>
          <input
            type="number"
            value={bConstant}
            onChange={(e) => setBConstant(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter b"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">L/mol</p>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pressure (P) {solveMode === 'P' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            disabled={solveMode === 'P'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter pressure"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">atm</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Volume (V) {solveMode === 'V' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            disabled={solveMode === 'V'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter volume"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">L</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Moles (n) {solveMode === 'n' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={moles}
            onChange={(e) => setMoles(e.target.value)}
            disabled={solveMode === 'n'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter moles"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">mol</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (T) {solveMode === 'T' && <span className="text-tertiary-600">← Solving for this</span>}
          </label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            disabled={solveMode === 'T'}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent
                     disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
            placeholder="Enter temperature"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K</p>
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
              Van der Waals Result:
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {solveMode === 'P' && 'atm'}
              {solveMode === 'V' && 'L'}
              {solveMode === 'n' && 'mol'}
              {solveMode === 'T' && 'K'}
            </p>
          </div>

          {idealGasP !== null && (
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Comparison with Ideal Gas:</h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {idealGasP.toFixed(4)} {solveMode === 'P' && 'atm'}{solveMode === 'V' && 'L'}{solveMode === 'n' && 'mol'}{solveMode === 'T' && 'K'}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                Difference: {Math.abs(result - idealGasP).toFixed(4)} ({((Math.abs(result - idealGasP) / idealGasP) * 100).toFixed(2)}%)
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real vs Ideal:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Constant <strong>a</strong>: Accounts for intermolecular attractions (higher a = stronger attractions)</li>
              <li>• Constant <strong>b</strong>: Accounts for molecular volume (higher b = larger molecules)</li>
              <li>• Real gases deviate from ideal behavior at high P and low T</li>
              <li>• Van der Waals equation is more accurate for real gases</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Van der Waals Constants:</h4>
        <div className="grid md:grid-cols-3 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• He: a=0.0346, b=0.0238</div>
          <div>• H₂: a=0.2452, b=0.0265</div>
          <div>• N₂: a=1.370, b=0.0387</div>
          <div>• O₂: a=1.382, b=0.0319</div>
          <div>• CO₂: a=3.658, b=0.0429</div>
          <div>• H₂O: a=5.537, b=0.0305</div>
        </div>
      </div>
    </div>
  );
};

export default VanDerWaalsCalculator;
