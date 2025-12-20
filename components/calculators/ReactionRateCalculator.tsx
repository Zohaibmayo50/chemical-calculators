'use client';

import React, { useState } from 'react';

type CalculationMode = 'average' | 'instantaneous' | 'concentration';

const ReactionRateCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('average');
  const [initialConc, setInitialConc] = useState<string>('');
  const [finalConc, setFinalConc] = useState<string>('');
  const [initialTime, setInitialTime] = useState<string>('');
  const [finalTime, setFinalTime] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [timeUnits, setTimeUnits] = useState<string>('s');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const examples = [
    {
      name: 'Average Rate: Decomposition',
      mode: 'average' as CalculationMode,
      initialConc: '1.00',
      finalConc: '0.40',
      initialTime: '0',
      finalTime: '10',
      description: 'Calculate average rate over 10 seconds',
    },
    {
      name: 'Concentration Change',
      mode: 'concentration' as CalculationMode,
      initialConc: '2.00',
      rate: '0.15',
      time: '5.0',
      description: 'Find concentration after 5 seconds',
    },
    {
      name: 'Fast Reaction Rate',
      mode: 'average' as CalculationMode,
      initialConc: '0.50',
      finalConc: '0.10',
      initialTime: '0',
      finalTime: '2',
      description: 'High rate reaction',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (mode === 'average') {
        const C1 = parseFloat(initialConc);
        const C2 = parseFloat(finalConc);
        const t1 = parseFloat(initialTime);
        const t2 = parseFloat(finalTime);

        if (isNaN(C1) || C1 < 0) throw new Error('Initial concentration must be non-negative');
        if (isNaN(C2) || C2 < 0) throw new Error('Final concentration must be non-negative');
        if (isNaN(t1) || t1 < 0) throw new Error('Initial time must be non-negative');
        if (isNaN(t2) || t2 <= t1) throw new Error('Final time must be greater than initial time');

        // Average rate = -Δ[A]/Δt = -(C2 - C1)/(t2 - t1)
        const deltaC = C2 - C1;
        const deltaT = t2 - t1;
        const avgRate = -deltaC / deltaT;
        const percentChange = ((C2 - C1) / C1) * 100;

        setResult({
          mode: 'average',
          rate: avgRate,
          deltaC: Math.abs(deltaC),
          deltaT,
          percentChange,
          initialConc: C1,
          finalConc: C2,
          initialTime: t1,
          finalTime: t2,
          timeUnits,
        });
      } else if (mode === 'instantaneous') {
        // For instantaneous rate, user provides the rate directly at a specific time
        const r = parseFloat(rate);
        const t = parseFloat(initialTime);

        if (isNaN(r) || r < 0) throw new Error('Rate must be non-negative');
        if (isNaN(t) || t < 0) throw new Error('Time must be non-negative');

        setResult({
          mode: 'instantaneous',
          rate: r,
          time: t,
          timeUnits,
        });
      } else if (mode === 'concentration') {
        const C1 = parseFloat(initialConc);
        const r = parseFloat(rate);
        const t = parseFloat(finalTime);

        if (isNaN(C1) || C1 < 0) throw new Error('Initial concentration must be non-negative');
        if (isNaN(r) || r < 0) throw new Error('Rate must be non-negative');
        if (isNaN(t) || t < 0) throw new Error('Time must be non-negative');

        // Using simple linear approximation: [A] = [A]₀ - rate × t
        // This assumes constant (average) rate
        const finalConcentration = C1 - r * t;
        
        if (finalConcentration < 0) {
          throw new Error('Calculated concentration is negative. Reaction may have gone to completion.');
        }

        const percentReacted = ((C1 - finalConcentration) / C1) * 100;

        setResult({
          mode: 'concentration',
          finalConc: finalConcentration,
          initialConc: C1,
          rate: r,
          time: t,
          percentReacted,
          timeUnits,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    setInitialConc(example.initialConc || '');
    setFinalConc(example.finalConc || '');
    setInitialTime(example.initialTime || '0');
    setFinalTime(example.time || example.finalTime || '');
    setRate(example.rate || '');
    setError('');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Reaction Rate Calculations
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Calculate average rate, instantaneous rate, or concentration changes over time.
          </p>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
            <p className="font-mono text-center text-lg">
              Average Rate = -Δ[A]/Δt = -([A]₂ - [A]₁)/(t₂ - t₁)
            </p>
            <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
              Rate is positive (by convention, negative of concentration decrease)
            </p>
          </div>
        </div>

        {/* Calculation Mode Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Select Calculation Type:
          </h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setMode('average')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                mode === 'average'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Average Rate
              <div className="text-xs mt-1 font-normal opacity-90">
                From Δ[A]/Δt
              </div>
            </button>
            <button
              onClick={() => setMode('instantaneous')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                mode === 'instantaneous'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Instantaneous
              <div className="text-xs mt-1 font-normal opacity-90">
                At specific time
              </div>
            </button>
            <button
              onClick={() => setMode('concentration')}
              className={`p-4 rounded-lg font-semibold transition-all ${
                mode === 'concentration'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Find [A]
              <div className="text-xs mt-1 font-normal opacity-90">
                From rate & time
              </div>
            </button>
          </div>
        </div>

        {/* Time Units Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Time Units:
          </h4>
          <div className="grid grid-cols-5 gap-2">
            {['s', 'min', 'h', 'day', 'year'].map((unit) => (
              <button
                key={unit}
                onClick={() => setTimeUnits(unit)}
                className={`p-2 rounded-lg text-sm transition-all ${
                  timeUnits === unit
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
              >
                {unit}
              </button>
            ))}
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
                <div className="font-semibold text-sm text-gray-900 dark:text-white">
                  {example.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {example.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          {mode === 'average' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Initial Concentration [A]₁ (M)
                </label>
                <input
                  type="number"
                  step="any"
                  value={initialConc}
                  onChange={(e) => setInitialConc(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 1.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Final Concentration [A]₂ (M)
                </label>
                <input
                  type="number"
                  step="any"
                  value={finalConc}
                  onChange={(e) => setFinalConc(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 0.40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Initial Time t₁ ({timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={initialTime}
                  onChange={(e) => setInitialTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Final Time t₂ ({timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={finalTime}
                  onChange={(e) => setFinalTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 10"
                />
              </div>
            </>
          )}

          {mode === 'instantaneous' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Instantaneous Rate (M/{timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 0.050"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time ({timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={initialTime}
                  onChange={(e) => setInitialTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 5.0"
                />
              </div>
            </>
          )}

          {mode === 'concentration' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Initial Concentration [A]₀ (M)
                </label>
                <input
                  type="number"
                  step="any"
                  value={initialConc}
                  onChange={(e) => setInitialConc(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 2.00"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Average Rate (M/{timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 0.15"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time Elapsed ({timeUnits})
                </label>
                <input
                  type="number"
                  step="any"
                  value={finalTime}
                  onChange={(e) => setFinalTime(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., 5.0"
                />
              </div>
            </>
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
              Results
            </h4>

            {result.mode === 'average' && (
              <>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Average Rate of Reaction:
                  </div>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {result.rate.toFixed(6)} M/{result.timeUnits}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Rate of disappearance of reactant
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <div className="text-sm text-blue-700 dark:text-blue-300 mb-1">
                      Concentration Change:
                    </div>
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {result.deltaC.toFixed(4)} M
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      |[A]₂ - [A]₁| = |{result.finalConc} - {result.initialConc}|
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="text-sm text-green-700 dark:text-green-300 mb-1">
                      Time Interval:
                    </div>
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">
                      {result.deltaT.toFixed(2)} {result.timeUnits}
                    </div>
                    <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Δt = t₂ - t₁ = {result.finalTime} - {result.initialTime}
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
                  <div className="text-sm text-purple-700 dark:text-purple-300 mb-1">
                    Percent Change:
                  </div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {result.percentChange.toFixed(2)}%
                  </div>
                  <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-3 mt-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(Math.abs(result.percentChange), 100)}%` }}
                    ></div>
                  </div>
                </div>
              </>
            )}

            {result.mode === 'instantaneous' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Instantaneous Rate at t = {result.time} {result.timeUnits}:
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {result.rate.toFixed(6)} M/{result.timeUnits}
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded mt-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Instantaneous rate is the slope of the tangent line to the concentration vs. time curve 
                    at a specific moment. It represents the exact rate at that instant.
                  </p>
                </div>
              </div>
            )}

            {result.mode === 'concentration' && (
              <>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Final Concentration [A]:
                  </div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {result.finalConc.toFixed(4)} M
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    After {result.time} {result.timeUnits}
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                  <div className="text-sm text-orange-700 dark:text-orange-300 mb-1">
                    Amount Reacted:
                  </div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    {result.percentReacted.toFixed(2)}% consumed
                  </div>
                  <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                    {(result.initialConc - result.finalConc).toFixed(4)} M reacted
                  </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Calculation:
                  </div>
                  <div className="font-mono text-sm text-gray-900 dark:text-white space-y-1">
                    <p>[A] = [A]₀ - rate × t</p>
                    <p>[A] = {result.initialConc} M - {result.rate} M/{result.timeUnits} × {result.time} {result.timeUnits}</p>
                    <p>[A] = {result.finalConc.toFixed(4)} M</p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Reaction Rates
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Average Rate:</p>
              <p className="text-blue-800 dark:text-blue-200">
                The rate of change in concentration over a time interval. Calculated as the slope of a secant 
                line on the concentration vs. time graph: <strong>Rate = -Δ[A]/Δt</strong>
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Instantaneous Rate:</p>
              <p className="text-green-800 dark:text-green-200">
                The rate at a specific moment in time. Calculated as the slope of the tangent line to the 
                concentration vs. time curve: <strong>Rate = -d[A]/dt</strong> (requires calculus or graphical analysis)
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Sign Convention:</p>
              <p className="text-purple-800 dark:text-purple-200">
                Rates are <strong>always positive</strong>. For reactants (decreasing concentration), we use a 
                negative sign: Rate = -Δ[Reactant]/Δt. For products (increasing), Rate = +Δ[Product]/Δt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactionRateCalculator;
