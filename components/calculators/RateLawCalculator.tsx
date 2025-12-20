'use client';

import React, { useState } from 'react';

const RateLawCalculator: React.FC = () => {
  const [reactantAConc1, setReactantAConc1] = useState<string>('');
  const [reactantAConc2, setReactantAConc2] = useState<string>('');
  const [reactantBConc1, setReactantBConc1] = useState<string>('');
  const [reactantBConc2, setReactantBConc2] = useState<string>('');
  const [rate1, setRate1] = useState<string>('');
  const [rate2, setRate2] = useState<string>('');
  const [orderA, setOrderA] = useState<string>('');
  const [orderB, setOrderB] = useState<string>('');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'order' | 'rateConstant' | 'rate'>('order');
  const [result, setResult] = useState<{ orderA?: number; orderB?: number; k?: number; rate?: number; overallOrder?: number } | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    if (solveFor === 'order') {
      // Determine reaction orders from experimental data
      const A1 = parseFloat(reactantAConc1);
      const A2 = parseFloat(reactantAConc2);
      const B1 = parseFloat(reactantBConc1);
      const B2 = parseFloat(reactantBConc2);
      const r1 = parseFloat(rate1);
      const r2 = parseFloat(rate2);

      if (isNaN(A1) || isNaN(A2) || isNaN(B1) || isNaN(B2) || isNaN(r1) || isNaN(r2)) {
        setError('Please enter all experimental data');
        return;
      }

      if (A1 <= 0 || A2 <= 0 || B1 <= 0 || B2 <= 0 || r1 <= 0 || r2 <= 0) {
        setError('All values must be positive');
        return;
      }

      // Method: Compare two experiments
      // If [B] is constant: r2/r1 = ([A]2/[A]1)^m → m = log(r2/r1) / log([A]2/[A]1)
      // If [A] is constant: r2/r1 = ([B]2/[B]1)^n → n = log(r2/r1) / log([B]2/[B]1)

      let m: number, n: number;

      if (Math.abs(B1 - B2) < 0.0001) {
        // [B] is constant, determine order with respect to A
        m = Math.log(r2 / r1) / Math.log(A2 / A1);
        n = 0; // Not determined
        setError('Note: Only order with respect to A can be determined (B is constant)');
      } else if (Math.abs(A1 - A2) < 0.0001) {
        // [A] is constant, determine order with respect to B
        m = 0; // Not determined
        n = Math.log(r2 / r1) / Math.log(B2 / B1);
        setError('Note: Only order with respect to B can be determined (A is constant)');
      } else {
        // Both vary - need additional experiments, but calculate assuming independent effects
        m = Math.log(r2 / r1) / Math.log(A2 / A1);
        n = 0;
        setError('Warning: To determine both orders, need experiments where only one concentration varies');
      }

      setResult({ 
        orderA: Math.round(m * 100) / 100, 
        orderB: Math.round(n * 100) / 100,
        overallOrder: Math.round((m + n) * 100) / 100
      });

    } else if (solveFor === 'rateConstant') {
      const A = parseFloat(reactantAConc1);
      const B = parseFloat(reactantBConc1);
      const rate = parseFloat(rate1);
      const m = parseFloat(orderA);
      const n = parseFloat(orderB);

      if (isNaN(A) || isNaN(B) || isNaN(rate) || isNaN(m) || isNaN(n)) {
        setError('Please enter concentrations, rate, and orders');
        return;
      }

      if (A <= 0 || B <= 0 || rate <= 0) {
        setError('Concentrations and rate must be positive');
        return;
      }

      // Rate = k[A]^m[B]^n → k = Rate / ([A]^m × [B]^n)
      const k = rate / (Math.pow(A, m) * Math.pow(B, n));
      setResult({ k, overallOrder: m + n });

    } else if (solveFor === 'rate') {
      const A = parseFloat(reactantAConc1);
      const B = parseFloat(reactantBConc1);
      const k = parseFloat(rateConstant);
      const m = parseFloat(orderA);
      const n = parseFloat(orderB);

      if (isNaN(A) || isNaN(B) || isNaN(k) || isNaN(m) || isNaN(n)) {
        setError('Please enter concentrations, rate constant, and orders');
        return;
      }

      if (A < 0 || B < 0 || k <= 0) {
        setError('Concentrations must be non-negative and k must be positive');
        return;
      }

      // Rate = k[A]^m[B]^n
      const rate = k * Math.pow(A, m) * Math.pow(B, n);
      setResult({ rate, overallOrder: m + n });
    }
  };

  const handleClear = () => {
    setReactantAConc1('');
    setReactantAConc2('');
    setReactantBConc1('');
    setReactantBConc2('');
    setRate1('');
    setRate2('');
    setOrderA('');
    setOrderB('');
    setRateConstant('');
    setResult(null);
    setError('');
  };

  const getRateConstantUnits = (order: number): string => {
    if (order === 0) return 'M/s';
    if (order === 1) return 's⁻¹';
    if (order === 2) return 'M⁻¹s⁻¹';
    if (order === 3) return 'M⁻²s⁻¹';
    return `M^(1-${order})s⁻¹`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Rate Law Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Rate Law:</strong> Rate = k[A]<sup>m</sup>[B]<sup>n</sup>
          <br />
          Determine reaction orders, rate constant, or reaction rate from experimental data.
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculate:
        </label>
        <select
          value={solveFor}
          onChange={(e) => {
            setSolveFor(e.target.value as 'order' | 'rateConstant' | 'rate');
            handleClear();
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
        >
          <option value="order">Reaction Orders (m, n)</option>
          <option value="rateConstant">Rate Constant (k)</option>
          <option value="rate">Reaction Rate</option>
        </select>
      </div>

      {solveFor === 'order' && (
        <div className="space-y-4 mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Enter data from two experiments (keep one concentration constant):
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [A]₁ (M)
              </label>
              <input
                type="number"
                step="any"
                value={reactantAConc1}
                onChange={(e) => setReactantAConc1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [B]₁ (M)
              </label>
              <input
                type="number"
                step="any"
                value={reactantBConc1}
                onChange={(e) => setReactantBConc1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rate₁ (M/s)
              </label>
              <input
                type="number"
                step="any"
                value={rate1}
                onChange={(e) => setRate1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.001"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [A]₂ (M)
              </label>
              <input
                type="number"
                step="any"
                value={reactantAConc2}
                onChange={(e) => setReactantAConc2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [B]₂ (M)
              </label>
              <input
                type="number"
                step="any"
                value={reactantBConc2}
                onChange={(e) => setReactantBConc2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rate₂ (M/s)
              </label>
              <input
                type="number"
                step="any"
                value={rate2}
                onChange={(e) => setRate2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.004"
              />
            </div>
          </div>
        </div>
      )}

      {solveFor === 'rateConstant' && (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              [A] (M)
            </label>
            <input
              type="number"
              step="any"
              value={reactantAConc1}
              onChange={(e) => setReactantAConc1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              [B] (M)
            </label>
            <input
              type="number"
              step="any"
              value={reactantBConc1}
              onChange={(e) => setReactantBConc1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate (M/s)
            </label>
            <input
              type="number"
              step="any"
              value={rate1}
              onChange={(e) => setRate1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.001"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Order m (with respect to A)
            </label>
            <input
              type="number"
              step="any"
              value={orderA}
              onChange={(e) => setOrderA(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Order n (with respect to B)
            </label>
            <input
              type="number"
              step="any"
              value={orderB}
              onChange={(e) => setOrderB(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="1"
            />
          </div>
        </div>
      )}

      {solveFor === 'rate' && (
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              [A] (M)
            </label>
            <input
              type="number"
              step="any"
              value={reactantAConc1}
              onChange={(e) => setReactantAConc1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              [B] (M)
            </label>
            <input
              type="number"
              step="any"
              value={reactantBConc1}
              onChange={(e) => setReactantBConc1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate Constant (k)
            </label>
            <input
              type="number"
              step="any"
              value={rateConstant}
              onChange={(e) => setRateConstant(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Order m (with respect to A)
            </label>
            <input
              type="number"
              step="any"
              value={orderA}
              onChange={(e) => setOrderA(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Order n (with respect to B)
            </label>
            <input
              type="number"
              step="any"
              value={orderB}
              onChange={(e) => setOrderB(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="1"
            />
          </div>
        </div>
      )}

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

      {result && (
        <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Result:
          </h3>
          {solveFor === 'order' && (
            <>
              <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
                m = {result.orderA?.toFixed(2)}, n = {result.orderB?.toFixed(2)}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Overall Order = {result.overallOrder?.toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Rate Law: Rate = k[A]<sup>{result.orderA?.toFixed(2)}</sup>[B]<sup>{result.orderB?.toFixed(2)}</sup>
              </p>
            </>
          )}
          {solveFor === 'rateConstant' && (
            <>
              <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
                k = {result.k?.toExponential(4)}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Units: {getRateConstantUnits(result.overallOrder || 0)}
              </p>
            </>
          )}
          {solveFor === 'rate' && (
            <>
              <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
                Rate = {result.rate?.toExponential(4)} M/s
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overall Order = {result.overallOrder}
              </p>
            </>
          )}
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Reaction order must be determined experimentally</li>
          <li>• Overall order = sum of individual orders (m + n)</li>
          <li>• Units of k depend on overall reaction order</li>
          <li>• Keep one concentration constant to determine individual orders</li>
        </ul>
      </div>
    </div>
  );
};

export default RateLawCalculator;
