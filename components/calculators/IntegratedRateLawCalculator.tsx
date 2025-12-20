'use client';

import React, { useState } from 'react';

type ReactionOrder = 'zero' | 'first' | 'second';

const IntegratedRateLawCalculator: React.FC = () => {
  const [order, setOrder] = useState<ReactionOrder>('first');
  const [initialConcentration, setInitialConcentration] = useState<string>('');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [finalConcentration, setFinalConcentration] = useState<string>('');
  const [calculateFor, setCalculateFor] = useState<'concentration' | 'time' | 'rateConstant'>('concentration');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const examples = [
    {
      name: 'Zero Order: Enzyme Catalysis',
      order: 'zero' as ReactionOrder,
      initial: '2.0',
      k: '0.5',
      t: '2.0',
      description: 'Calculate [A] at t=2.0 s for zero-order reaction',
    },
    {
      name: 'First Order: Radioactive Decay',
      order: 'first' as ReactionOrder,
      initial: '1.0',
      k: '0.693',
      t: '1.0',
      description: 'Half-life scenario: k=ln(2)=0.693',
    },
    {
      name: 'Second Order: Dimerization',
      order: 'second' as ReactionOrder,
      initial: '0.5',
      k: '2.0',
      t: '1.5',
      description: 'Typical second-order reaction',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const A0 = parseFloat(initialConcentration);
      const k = parseFloat(rateConstant);
      const t = parseFloat(time);
      const At = parseFloat(finalConcentration);

      // Validate required inputs based on calculation mode
      if (calculateFor === 'concentration') {
        if (isNaN(A0) || A0 <= 0) throw new Error('Initial concentration must be positive');
        if (isNaN(k) || k <= 0) throw new Error('Rate constant must be positive');
        if (isNaN(t) || t < 0) throw new Error('Time must be non-negative');
      } else if (calculateFor === 'time') {
        if (isNaN(A0) || A0 <= 0) throw new Error('Initial concentration must be positive');
        if (isNaN(At) || At <= 0) throw new Error('Final concentration must be positive');
        if (isNaN(k) || k <= 0) throw new Error('Rate constant must be positive');
        if (At > A0) throw new Error('Final concentration cannot exceed initial concentration');
      } else if (calculateFor === 'rateConstant') {
        if (isNaN(A0) || A0 <= 0) throw new Error('Initial concentration must be positive');
        if (isNaN(At) || At <= 0) throw new Error('Final concentration must be positive');
        if (isNaN(t) || t <= 0) throw new Error('Time must be positive');
        if (At > A0) throw new Error('Final concentration cannot exceed initial concentration');
      }

      let calculatedValue: number;
      let halfLife: number | null = null;
      let percentRemaining: number | null = null;

      // Perform calculation based on order and mode
      if (calculateFor === 'concentration') {
        if (order === 'zero') {
          // [A] = [A]₀ - kt
          calculatedValue = A0 - k * t;
          if (calculatedValue < 0) {
            throw new Error('Reaction has gone to completion (negative concentration)');
          }
          // Half-life for zero order: t½ = [A]₀/(2k)
          halfLife = A0 / (2 * k);
        } else if (order === 'first') {
          // [A] = [A]₀ e^(-kt)
          calculatedValue = A0 * Math.exp(-k * t);
          // Half-life for first order: t½ = ln(2)/k
          halfLife = Math.log(2) / k;
        } else {
          // 1/[A] = 1/[A]₀ + kt
          calculatedValue = 1 / (1 / A0 + k * t);
          // Half-life for second order: t½ = 1/(k[A]₀)
          halfLife = 1 / (k * A0);
        }
        percentRemaining = (calculatedValue / A0) * 100;
      } else if (calculateFor === 'time') {
        if (order === 'zero') {
          // t = ([A]₀ - [A]) / k
          calculatedValue = (A0 - At) / k;
          halfLife = A0 / (2 * k);
        } else if (order === 'first') {
          // t = ln([A]₀/[A]) / k
          calculatedValue = Math.log(A0 / At) / k;
          halfLife = Math.log(2) / k;
        } else {
          // t = (1/[A] - 1/[A]₀) / k
          calculatedValue = (1 / At - 1 / A0) / k;
          halfLife = 1 / (k * A0);
        }
        percentRemaining = (At / A0) * 100;
      } else {
        // Calculate rate constant
        if (order === 'zero') {
          // k = ([A]₀ - [A]) / t
          calculatedValue = (A0 - At) / t;
          halfLife = A0 / (2 * calculatedValue);
        } else if (order === 'first') {
          // k = ln([A]₀/[A]) / t
          calculatedValue = Math.log(A0 / At) / t;
          halfLife = Math.log(2) / calculatedValue;
        } else {
          // k = (1/[A] - 1/[A]₀) / t
          calculatedValue = (1 / At - 1 / A0) / t;
          halfLife = 1 / (calculatedValue * A0);
        }
        percentRemaining = (At / A0) * 100;
      }

      setResult({
        order,
        calculatedValue,
        halfLife,
        percentRemaining,
        calculateFor,
        inputs: { A0, k, t, At },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setOrder(example.order);
    setInitialConcentration(example.initial);
    setRateConstant(example.k);
    setTime(example.t);
    setFinalConcentration('');
    setCalculateFor('concentration');
    setError('');
    setResult(null);
  };

  const getEquation = () => {
    if (order === 'zero') {
      return '[A] = [A]₀ - kt';
    } else if (order === 'first') {
      return 'ln[A] = ln[A]₀ - kt  or  [A] = [A]₀e^(-kt)';
    } else {
      return '1/[A] = 1/[A]₀ + kt';
    }
  };

  const getHalfLifeEquation = () => {
    if (order === 'zero') {
      return 't½ = [A]₀/(2k)';
    } else if (order === 'first') {
      return 't½ = ln(2)/k = 0.693/k';
    } else {
      return 't½ = 1/(k[A]₀)';
    }
  };

  const getUnits = () => {
    if (order === 'zero') {
      return 'M/s or M/min';
    } else if (order === 'first') {
      return 's⁻¹ or min⁻¹';
    } else {
      return 'M⁻¹s⁻¹ or M⁻¹min⁻¹';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Integrated Rate Laws
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Calculate concentration, time, or rate constant for zero, first, and second order reactions.
          </p>
        </div>

        {/* Reaction Order Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Select Reaction Order:
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setOrder('zero')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                order === 'zero'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Zero Order
              <div className="text-xs mt-1 font-normal opacity-90">
                [A] = [A]₀ - kt
              </div>
            </button>
            <button
              onClick={() => setOrder('first')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                order === 'first'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              First Order
              <div className="text-xs mt-1 font-normal opacity-90">
                [A] = [A]₀e^(-kt)
              </div>
            </button>
            <button
              onClick={() => setOrder('second')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                order === 'second'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Second Order
              <div className="text-xs mt-1 font-normal opacity-90">
                1/[A] = 1/[A]₀ + kt
              </div>
            </button>
          </div>
        </div>

        {/* Calculate For Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Calculate:
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setCalculateFor('concentration')}
              className={`p-3 rounded-lg transition-all ${
                calculateFor === 'concentration'
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              [A] at time t
            </button>
            <button
              onClick={() => setCalculateFor('time')}
              className={`p-3 rounded-lg transition-all ${
                calculateFor === 'time'
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Time (t)
            </button>
            <button
              onClick={() => setCalculateFor('rateConstant')}
              className={`p-3 rounded-lg transition-all ${
                calculateFor === 'rateConstant'
                  ? 'bg-tertiary-500 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Rate Constant (k)
            </button>
          </div>
        </div>

        {/* Examples */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Problems:
          </h4>
          <div className="grid md:grid-cols-3 gap-3">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => fillExample(example)}
                className="p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow text-left"
              >
                <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                  {example.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {example.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Concentration [A]₀ (M)
            </label>
            <input
              type="number"
              step="any"
              value={initialConcentration}
              onChange={(e) => setInitialConcentration(e.target.value)}
              disabled={calculateFor === 'rateConstant' && false}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
              placeholder="e.g., 2.0"
            />
          </div>

          {calculateFor !== 'rateConstant' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rate Constant k ({getUnits()})
              </label>
              <input
                type="number"
                step="any"
                value={rateConstant}
                onChange={(e) => setRateConstant(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.5"
              />
            </div>
          )}

          {calculateFor !== 'time' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time (s or min)
              </label>
              <input
                type="number"
                step="any"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 2.0"
              />
            </div>
          )}

          {calculateFor !== 'concentration' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Final Concentration [A] (M)
              </label>
              <input
                type="number"
                step="any"
                value={finalConcentration}
                onChange={(e) => setFinalConcentration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1.0"
              />
            </div>
          )}
        </div>

        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Calculate
        </button>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
              Results for {result.order.charAt(0).toUpperCase() + result.order.slice(1)} Order Reaction
            </h4>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {calculateFor === 'concentration' && 'Final Concentration:'}
                {calculateFor === 'time' && 'Time Required:'}
                {calculateFor === 'rateConstant' && 'Rate Constant:'}
              </div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {calculateFor === 'concentration' && `${result.calculatedValue.toFixed(4)} M`}
                {calculateFor === 'time' && `${result.calculatedValue.toFixed(4)} s`}
                {calculateFor === 'rateConstant' && `${result.calculatedValue.toFixed(4)} ${getUnits()}`}
              </div>
            </div>

            {result.percentRemaining !== null && calculateFor !== 'rateConstant' && (
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <div className="text-sm text-blue-700 dark:text-blue-300 mb-1">
                  Percent Remaining:
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {result.percentRemaining.toFixed(2)}%
                </div>
                <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-3 mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(result.percentRemaining, 100)}%` }}
                  ></div>
                </div>
              </div>
            )}

            {result.halfLife !== null && (
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <div className="text-sm text-green-700 dark:text-green-300 mb-1">
                  Half-Life ({getHalfLifeEquation()}):
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {result.halfLife.toFixed(4)} s
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                  {order === 'zero' && '(Depends on initial concentration)'}
                  {order === 'first' && '(Independent of concentration)'}
                  {order === 'second' && '(Depends on initial concentration)'}
                </div>
              </div>
            )}

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Integrated Rate Law:
              </div>
              <div className="font-mono text-lg text-gray-900 dark:text-white">
                {getEquation()}
              </div>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Integrated Rate Laws
          </h4>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Zero Order:</p>
              <p className="text-blue-800 dark:text-blue-200">
                Concentration decreases <strong>linearly</strong> with time. Common in surface-catalyzed reactions 
                and enzyme kinetics when substrate is saturated. Half-life <strong>decreases</strong> as reaction proceeds.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">First Order:</p>
              <p className="text-green-800 dark:text-green-200">
                Concentration decreases <strong>exponentially</strong> with time. Common in radioactive decay and 
                many decomposition reactions. Half-life is <strong>constant</strong> (independent of concentration).
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Second Order:</p>
              <p className="text-purple-800 dark:text-purple-200">
                1/[A] increases <strong>linearly</strong> with time. Common in gas-phase reactions and dimerizations. 
                Half-life <strong>increases</strong> as reaction proceeds (takes longer when concentration is lower).
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Graphical Analysis:</p>
              <ul className="list-disc list-inside space-y-1 text-yellow-800 dark:text-yellow-200">
                <li><strong>Zero order:</strong> Plot [A] vs t → straight line (slope = -k)</li>
                <li><strong>First order:</strong> Plot ln[A] vs t → straight line (slope = -k)</li>
                <li><strong>Second order:</strong> Plot 1/[A] vs t → straight line (slope = k)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedRateLawCalculator;
