'use client';

import React, { useState } from 'react';

const HalfLifeCalculator: React.FC = () => {
  const [reactionOrder, setReactionOrder] = useState<'zero' | 'first' | 'second'>('first');
  const [initialConcentration, setInitialConcentration] = useState<string>('');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [halfLife, setHalfLife] = useState<string>('');
  const [finalConcentration, setFinalConcentration] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'halfLife' | 'concentration' | 'rateConstant'>('halfLife');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    const C0 = parseFloat(initialConcentration);
    const k = parseFloat(rateConstant);
    const t_half = parseFloat(halfLife);
    const Ct = parseFloat(finalConcentration);
    const t = parseFloat(time);

    if (solveFor === 'halfLife') {
      if (isNaN(k)) {
        setError('Please enter a valid rate constant');
        return;
      }
      if (k <= 0) {
        setError('Rate constant must be positive');
        return;
      }

      let t_half_result: number;
      
      switch (reactionOrder) {
        case 'zero':
          if (isNaN(C0)) {
            setError('Please enter initial concentration for zero-order reaction');
            return;
          }
          if (C0 <= 0) {
            setError('Initial concentration must be positive');
            return;
          }
          // t₁/₂ = [A]₀ / (2k)
          t_half_result = C0 / (2 * k);
          break;

        case 'first':
          // t₁/₂ = ln(2) / k = 0.693 / k
          t_half_result = Math.LN2 / k;
          break;

        case 'second':
          if (isNaN(C0)) {
            setError('Please enter initial concentration for second-order reaction');
            return;
          }
          if (C0 <= 0) {
            setError('Initial concentration must be positive');
            return;
          }
          // t₁/₂ = 1 / (k[A]₀)
          t_half_result = 1 / (k * C0);
          break;
      }
      
      setResult(t_half_result);

    } else if (solveFor === 'concentration') {
      if (isNaN(C0) || isNaN(t)) {
        setError('Please enter initial concentration and time');
        return;
      }
      if (C0 <= 0 || t < 0) {
        setError('Concentration must be positive and time non-negative');
        return;
      }
      if (isNaN(k)) {
        setError('Please enter rate constant');
        return;
      }
      if (k <= 0) {
        setError('Rate constant must be positive');
        return;
      }

      let Ct_result: number;

      switch (reactionOrder) {
        case 'zero':
          // [A]ₜ = [A]₀ - kt
          Ct_result = C0 - k * t;
          if (Ct_result < 0) {
            setError('Concentration cannot be negative. Reaction is complete before this time.');
            return;
          }
          break;

        case 'first':
          // [A]ₜ = [A]₀ × e^(-kt)
          Ct_result = C0 * Math.exp(-k * t);
          break;

        case 'second':
          // [A]ₜ = [A]₀ / (1 + kt[A]₀)
          Ct_result = C0 / (1 + k * t * C0);
          break;
      }

      setResult(Ct_result);

    } else if (solveFor === 'rateConstant') {
      if (isNaN(C0)) {
        setError('Please enter initial concentration');
        return;
      }
      if (C0 <= 0) {
        setError('Initial concentration must be positive');
        return;
      }

      let k_result: number;

      if (reactionOrder === 'first') {
        // For first-order, can use half-life
        if (!isNaN(t_half) && t_half > 0) {
          // k = ln(2) / t₁/₂
          k_result = Math.LN2 / t_half;
          setResult(k_result);
          return;
        }
      }

      // Otherwise use concentration and time
      if (isNaN(Ct) || isNaN(t)) {
        setError('Please enter final concentration and time');
        return;
      }
      if (Ct < 0 || t <= 0) {
        setError('Concentration must be non-negative and time must be positive');
        return;
      }
      if (Ct > C0) {
        setError('Final concentration cannot exceed initial concentration');
        return;
      }

      switch (reactionOrder) {
        case 'zero':
          // k = ([A]₀ - [A]ₜ) / t
          k_result = (C0 - Ct) / t;
          break;

        case 'first':
          // k = ln([A]₀ / [A]ₜ) / t
          if (Ct === 0) {
            setError('Final concentration cannot be zero for first-order calculation');
            return;
          }
          k_result = Math.log(C0 / Ct) / t;
          break;

        case 'second':
          // k = (1/[A]ₜ - 1/[A]₀) / t
          if (Ct === 0) {
            setError('Final concentration cannot be zero for second-order calculation');
            return;
          }
          k_result = (1 / Ct - 1 / C0) / t;
          break;
      }

      setResult(k_result);
    }
  };

  const handleClear = () => {
    setInitialConcentration('');
    setRateConstant('');
    setHalfLife('');
    setFinalConcentration('');
    setTime('');
    setResult(null);
    setError('');
  };

  const getNumberOfHalfLives = (t: number, t_half: number): number => {
    return t / t_half;
  };

  const getRemainingPercent = (n: number, order: string): number => {
    if (order === 'first') {
      return Math.pow(0.5, n) * 100;
    }
    return 0; // More complex for zero and second order
  };

  const getRateConstantUnits = (order: string): string => {
    switch (order) {
      case 'zero':
        return 'M/s (or mol/(L·s))';
      case 'first':
        return 's⁻¹ (or 1/time)';
      case 'second':
        return 'M⁻¹s⁻¹ (or L/(mol·s))';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Half-Life Calculator
      </h2>

      {/* Info Box */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Half-Life:</strong> The time required for the concentration of a reactant to decrease to half its initial value.
          <br />
          The formula varies with reaction order.
        </p>
      </div>

      {/* Reaction Order Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Reaction Order:
        </label>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => {
              setReactionOrder('zero');
              handleClear();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              reactionOrder === 'zero'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Zero Order
          </button>
          <button
            onClick={() => {
              setReactionOrder('first');
              handleClear();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              reactionOrder === 'first'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            First Order
          </button>
          <button
            onClick={() => {
              setReactionOrder('second');
              handleClear();
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              reactionOrder === 'second'
                ? 'bg-tertiary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Second Order
          </button>
        </div>
      </div>

      {/* Solve For Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For:
        </label>
        <select
          value={solveFor}
          onChange={(e) => {
            setSolveFor(e.target.value as 'halfLife' | 'concentration' | 'rateConstant');
            handleClear();
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
        >
          <option value="halfLife">Half-Life (t₁/₂)</option>
          <option value="concentration">Concentration at time t</option>
          <option value="rateConstant">Rate Constant (k)</option>
        </select>
      </div>

      {/* Formula Display */}
      <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg">
        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          {reactionOrder === 'zero' && 'Zero Order: Rate = k'}
          {reactionOrder === 'first' && 'First Order: Rate = k[A]'}
          {reactionOrder === 'second' && 'Second Order: Rate = k[A]²'}
        </p>
        <p className="text-xs text-gray-700 dark:text-gray-300 font-mono">
          {reactionOrder === 'zero' && 't₁/₂ = [A]₀/(2k)   |   [A]ₜ = [A]₀ - kt'}
          {reactionOrder === 'first' && 't₁/₂ = ln(2)/k = 0.693/k   |   [A]ₜ = [A]₀e^(-kt)'}
          {reactionOrder === 'second' && 't₁/₂ = 1/(k[A]₀)   |   [A]ₜ = [A]₀/(1 + kt[A]₀)'}
        </p>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {(solveFor === 'halfLife' || solveFor === 'concentration' || solveFor === 'rateConstant') && 
         (reactionOrder === 'zero' || reactionOrder === 'second' || solveFor !== 'halfLife') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Concentration [A]₀
            </label>
            <input
              type="number"
              step="any"
              value={initialConcentration}
              onChange={(e) => setInitialConcentration(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">M (mol/L)</p>
          </div>
        )}

        {solveFor !== 'rateConstant' && (
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
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {getRateConstantUnits(reactionOrder)}
            </p>
          </div>
        )}

        {solveFor === 'concentration' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time (t)
            </label>
            <input
              type="number"
              step="any"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">seconds (or consistent time unit)</p>
          </div>
        )}

        {solveFor === 'rateConstant' && (
          <>
            {reactionOrder === 'first' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Half-Life (t₁/₂) <span className="text-xs">(optional for 1st order)</span>
                </label>
                <input
                  type="number"
                  step="any"
                  value={halfLife}
                  onChange={(e) => setHalfLife(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                  placeholder="0.00"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">seconds</p>
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Final Concentration [A]ₜ
              </label>
              <input
                type="number"
                step="any"
                value={finalConcentration}
                onChange={(e) => setFinalConcentration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.00"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">M (mol/L)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time (t)
              </label>
              <input
                type="number"
                step="any"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="0.00"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">seconds</p>
            </div>
          </>
        )}
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
            {solveFor === 'halfLife' && `t₁/₂ = ${result.toExponential(4)} s`}
            {solveFor === 'concentration' && `[A]ₜ = ${result.toExponential(4)} M`}
            {solveFor === 'rateConstant' && `k = ${result.toExponential(4)} ${getRateConstantUnits(reactionOrder)}`}
          </p>

          {/* Additional Information */}
          {solveFor === 'halfLife' && reactionOrder === 'first' && (
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-1">First-Order Characteristics:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Half-life is constant (independent of concentration)</li>
                <li>After {result.toFixed(2)} s: 50% remains</li>
                <li>After {(result * 2).toFixed(2)} s: 25% remains</li>
                <li>After {(result * 3).toFixed(2)} s: 12.5% remains</li>
              </ul>
            </div>
          )}

          {solveFor === 'concentration' && (
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-1">Concentration Analysis:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  Percent remaining: {((result / parseFloat(initialConcentration)) * 100).toFixed(2)}%
                </li>
                <li>
                  Percent reacted: {(100 - (result / parseFloat(initialConcentration)) * 100).toFixed(2)}%
                </li>
                {reactionOrder === 'first' && parseFloat(rateConstant) > 0 && (
                  <li>
                    Number of half-lives elapsed: {(parseFloat(time) * parseFloat(rateConstant) / Math.LN2).toFixed(2)}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Educational Notes */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Differences:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• <strong>Zero Order:</strong> t₁/₂ depends on [A]₀ (decreases as reaction proceeds)</li>
          <li>• <strong>First Order:</strong> t₁/₂ is constant (independent of concentration)</li>
          <li>• <strong>Second Order:</strong> t₁/₂ depends on [A]₀ (increases as reaction proceeds)</li>
          <li>• Radioactive decay is always first-order</li>
        </ul>
      </div>
    </div>
  );
};

export default HalfLifeCalculator;
