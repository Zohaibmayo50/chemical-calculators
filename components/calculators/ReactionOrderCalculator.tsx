'use client';

import React, { useState } from 'react';

type ReactionOrder = '0' | '1' | '2';

const ReactionOrderCalculator: React.FC = () => {
  const [order, setOrder] = useState<ReactionOrder>('1');
  const [initialConc, setInitialConc] = useState<string>('');
  const [finalConc, setFinalConc] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'k' | 'time' | 'concentration'>('k');
  const [result, setResult] = useState<{
    value: number;
    halfLife?: number;
    interpretation: string;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (solveFor === 'k') {
        // Calculate rate constant
        const C0 = parseFloat(initialConc);
        const Ct = parseFloat(finalConc);
        const t = parseFloat(time);

        if (C0 <= 0 || Ct <= 0 || t <= 0) {
          setError('All values must be positive');
          return;
        }

        if (Ct >= C0) {
          setError('Final concentration must be less than initial concentration');
          return;
        }

        let k = 0;
        let halfLife = 0;
        let interpretation = '';

        if (order === '0') {
          // Zero order: [A]t = [A]0 - kt
          // k = ([A]0 - [A]t) / t
          k = (C0 - Ct) / t;
          halfLife = C0 / (2 * k);
          interpretation = `Rate = k (constant rate, independent of concentration)`;
        } else if (order === '1') {
          // First order: ln[A]t = ln[A]0 - kt
          // k = (ln[A]0 - ln[A]t) / t
          k = (Math.log(C0) - Math.log(Ct)) / t;
          halfLife = Math.log(2) / k;
          interpretation = `Rate = k[A] (rate proportional to concentration)`;
        } else if (order === '2') {
          // Second order: 1/[A]t = 1/[A]0 + kt
          // k = (1/[A]t - 1/[A]0) / t
          k = (1/Ct - 1/C0) / t;
          halfLife = 1 / (k * C0);
          interpretation = `Rate = k[A]² (rate proportional to concentration squared)`;
        }

        setResult({
          value: k,
          halfLife,
          interpretation,
        });
      } else if (solveFor === 'time') {
        // Calculate time required
        const C0 = parseFloat(initialConc);
        const Ct = parseFloat(finalConc);
        const k = parseFloat(rateConstant);

        if (C0 <= 0 || Ct <= 0 || k <= 0) {
          setError('All values must be positive');
          return;
        }

        if (Ct >= C0) {
          setError('Final concentration must be less than initial concentration');
          return;
        }

        let t = 0;
        let halfLife = 0;
        let interpretation = '';

        if (order === '0') {
          t = (C0 - Ct) / k;
          halfLife = C0 / (2 * k);
          interpretation = `Time for concentration to decrease from ${C0} to ${Ct} M`;
        } else if (order === '1') {
          t = (Math.log(C0) - Math.log(Ct)) / k;
          halfLife = Math.log(2) / k;
          interpretation = `Time for concentration to decrease from ${C0} to ${Ct} M`;
        } else if (order === '2') {
          t = (1/Ct - 1/C0) / k;
          halfLife = 1 / (k * C0);
          interpretation = `Time for concentration to decrease from ${C0} to ${Ct} M`;
        }

        setResult({
          value: t,
          halfLife,
          interpretation,
        });
      } else if (solveFor === 'concentration') {
        // Calculate final concentration
        const C0 = parseFloat(initialConc);
        const t = parseFloat(time);
        const k = parseFloat(rateConstant);

        if (C0 <= 0 || t <= 0 || k <= 0) {
          setError('All values must be positive');
          return;
        }

        let Ct = 0;
        let halfLife = 0;
        let interpretation = '';

        if (order === '0') {
          Ct = C0 - k * t;
          if (Ct < 0) {
            setError('Concentration cannot be negative - reaction would be complete before this time');
            return;
          }
          halfLife = C0 / (2 * k);
          interpretation = `Concentration after ${t} time units`;
        } else if (order === '1') {
          Ct = C0 * Math.exp(-k * t);
          halfLife = Math.log(2) / k;
          interpretation = `Concentration after ${t} time units`;
        } else if (order === '2') {
          Ct = 1 / (1/C0 + k * t);
          halfLife = 1 / (k * C0);
          interpretation = `Concentration after ${t} time units`;
        }

        setResult({
          value: Ct,
          halfLife,
          interpretation,
        });
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setInitialConc('');
    setFinalConc('');
    setTime('');
    setRateConstant('');
    setResult(null);
    setError('');
  };

  const setExample = (example: string) => {
    if (example === 'first-order') {
      setOrder('1');
      setInitialConc('1.0');
      setFinalConc('0.5');
      setTime('10');
      setSolveFor('k');
    } else if (example === 'second-order') {
      setOrder('2');
      setInitialConc('2.0');
      setFinalConc('1.0');
      setTime('5');
      setSolveFor('k');
    } else if (example === 'zero-order') {
      setOrder('0');
      setInitialConc('1.0');
      setFinalConc('0.6');
      setTime('8');
      setSolveFor('k');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Reaction Order Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Reaction Order:</strong> Determines how reaction rate depends on concentration
          <br />
          Zero order: Rate = k | First order: Rate = k[A] | Second order: Rate = k[A]²
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Reaction Order
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { order: '0' as ReactionOrder, label: 'Zero Order' },
            { order: '1' as ReactionOrder, label: 'First Order' },
            { order: '2' as ReactionOrder, label: 'Second Order' },
          ].map(({ order: ord, label }) => (
            <button
              key={ord}
              onClick={() => setOrder(ord)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                order === ord
                  ? 'bg-tertiary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: 'k' as const, label: 'Rate Constant (k)' },
            { value: 'time' as const, label: 'Time (t)' },
            { value: 'concentration' as const, label: 'Concentration [A]' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setSolveFor(value)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                solveFor === value
                  ? 'bg-secondary-600 text-white'
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
          Example Reactions
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setExample('first-order')}
            className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
          >
            First Order
          </button>
          <button
            onClick={() => setExample('second-order')}
            className="py-2 px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 text-sm font-medium transition-colors"
          >
            Second Order
          </button>
          <button
            onClick={() => setExample('zero-order')}
            className="py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 text-sm font-medium transition-colors"
          >
            Zero Order
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Initial Concentration [A]₀
          </label>
          <input
            type="number"
            value={initialConc}
            onChange={(e) => setInitialConc(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter initial concentration"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">M (mol/L)</p>
        </div>

        {solveFor !== 'concentration' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Concentration [A]
            </label>
            <input
              type="number"
              value={finalConc}
              onChange={(e) => setFinalConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter final concentration"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">M (mol/L)</p>
          </div>
        )}

        {solveFor !== 'time' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time (t)
            </label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter time"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">seconds, minutes, hours, etc.</p>
          </div>
        )}

        {solveFor !== 'k' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate Constant (k)
            </label>
            <input
              type="number"
              value={rateConstant}
              onChange={(e) => setRateConstant(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter rate constant"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {order === '0' && 'M/time (e.g., M/s)'}
              {order === '1' && '1/time (e.g., s⁻¹)'}
              {order === '2' && '1/(M·time) (e.g., M⁻¹s⁻¹)'}
            </p>
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
              {solveFor === 'k' && 'Rate Constant (k):'}
              {solveFor === 'time' && 'Time Required (t):'}
              {solveFor === 'concentration' && 'Final Concentration [A]:'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.value < 0.001 || result.value > 10000 ? result.value.toExponential(4) : result.value.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {solveFor === 'k' && order === '0' && 'M/time'}
              {solveFor === 'k' && order === '1' && 'time⁻¹'}
              {solveFor === 'k' && order === '2' && 'M⁻¹time⁻¹'}
              {solveFor === 'time' && 'time units'}
              {solveFor === 'concentration' && 'M'}
            </p>
          </div>

          {result.halfLife !== undefined && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Half-Life (t₁/₂):</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                {result.halfLife < 0.001 || result.halfLife > 10000 
                  ? result.halfLife.toExponential(4) 
                  : result.halfLife.toFixed(4)} time units
              </p>
              {order === '0' && (
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  For zero order: t₁/₂ = [A]₀/(2k) - depends on initial concentration
                </p>
              )}
              {order === '1' && (
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  For first order: t₁/₂ = ln(2)/k = 0.693/k - constant, independent of concentration
                </p>
              )}
              {order === '2' && (
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                  For second order: t₁/₂ = 1/(k[A]₀) - inversely proportional to initial concentration
                </p>
              )}
            </div>
          )}

          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Rate Law:</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">{result.interpretation}</p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Integrated Rate Law:</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {order === '0' && <p className="font-mono">[A] = [A]₀ - kt</p>}
              {order === '1' && <p className="font-mono">ln[A] = ln[A]₀ - kt</p>}
              {order === '2' && <p className="font-mono">1/[A] = 1/[A]₀ + kt</p>}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reaction Order Summary:</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-600">
              <tr>
                <th className="px-3 py-2 text-left text-gray-900 dark:text-white">Order</th>
                <th className="px-3 py-2 text-left text-gray-900 dark:text-white">Rate Law</th>
                <th className="px-3 py-2 text-left text-gray-900 dark:text-white">Integrated Form</th>
                <th className="px-3 py-2 text-left text-gray-900 dark:text-white">Half-Life</th>
                <th className="px-3 py-2 text-left text-gray-900 dark:text-white">k Units</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="px-3 py-2">0</td>
                <td className="px-3 py-2 font-mono">Rate = k</td>
                <td className="px-3 py-2 font-mono">[A] = [A]₀ - kt</td>
                <td className="px-3 py-2 font-mono">[A]₀/(2k)</td>
                <td className="px-3 py-2">M/s</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2 font-mono">Rate = k[A]</td>
                <td className="px-3 py-2 font-mono">ln[A] = ln[A]₀ - kt</td>
                <td className="px-3 py-2 font-mono">ln(2)/k</td>
                <td className="px-3 py-2">s⁻¹</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2 font-mono">Rate = k[A]²</td>
                <td className="px-3 py-2 font-mono">1/[A] = 1/[A]₀ + kt</td>
                <td className="px-3 py-2 font-mono">1/(k[A]₀)</td>
                <td className="px-3 py-2">M⁻¹s⁻¹</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReactionOrderCalculator;
