'use client';

import React, { useState } from 'react';

type CalculationMode = 'amount' | 'halfLife' | 'time' | 'decayConstant';

const RadioactiveDecayCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('amount');
  const [initialAmount, setInitialAmount] = useState<string>('100');
  const [finalAmount, setFinalAmount] = useState<string>('');
  const [halfLife, setHalfLife] = useState<string>('');
  const [halfLifeUnit, setHalfLifeUnit] = useState<string>('years');
  const [time, setTime] = useState<string>('');
  const [timeUnit, setTimeUnit] = useState<string>('years');
  const [decayConstant, setDecayConstant] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const commonIsotopes = [
    { name: 'Carbon-14', halfLife: 5730, unit: 'years', symbol: '¹⁴C' },
    { name: 'Uranium-238', halfLife: 4.468e9, unit: 'years', symbol: '²³⁸U' },
    { name: 'Uranium-235', halfLife: 7.04e8, unit: 'years', symbol: '²³⁵U' },
    { name: 'Plutonium-239', halfLife: 24110, unit: 'years', symbol: '²³⁹Pu' },
    { name: 'Radium-226', halfLife: 1600, unit: 'years', symbol: '²²⁶Ra' },
    { name: 'Iodine-131', halfLife: 8.02, unit: 'days', symbol: '¹³¹I' },
    { name: 'Cobalt-60', halfLife: 5.27, unit: 'years', symbol: '⁶⁰Co' },
    { name: 'Technetium-99m', halfLife: 6.01, unit: 'hours', symbol: '⁹⁹ᵐTc' },
  ];

  const examples = [
    {
      name: 'Carbon-14 Dating',
      mode: 'time' as CalculationMode,
      initialAmount: '100',
      finalAmount: '25',
      halfLife: '5730',
      halfLifeUnit: 'years',
      description: 'Archaeological dating',
    },
    {
      name: 'Medical Isotope',
      mode: 'amount' as CalculationMode,
      initialAmount: '10',
      halfLife: '6.01',
      halfLifeUnit: 'hours',
      time: '24',
      timeUnit: 'hours',
      description: 'Tc-99m decay',
    },
    {
      name: 'Nuclear Waste',
      mode: 'amount' as CalculationMode,
      initialAmount: '1000',
      halfLife: '24110',
      halfLifeUnit: 'years',
      time: '10000',
      timeUnit: 'years',
      description: 'Pu-239 storage',
    },
  ];

  const timeConversions: { [key: string]: number } = {
    'seconds': 1,
    'minutes': 60,
    'hours': 3600,
    'days': 86400,
    'years': 31557600, // 365.25 days
  };

  const convertToSeconds = (value: number, unit: string): number => {
    return value * timeConversions[unit];
  };

  const convertFromSeconds = (seconds: number, unit: string): number => {
    return seconds / timeConversions[unit];
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (mode === 'amount') {
        // Calculate remaining amount: N(t) = N₀ * e^(-λt)
        const N0 = parseFloat(initialAmount);
        const t1_2_value = parseFloat(halfLife);
        const t_value = parseFloat(time);

        if (isNaN(N0) || N0 <= 0) throw new Error('Please enter a valid positive initial amount');
        if (isNaN(t1_2_value) || t1_2_value <= 0) throw new Error('Please enter a valid positive half-life');
        if (isNaN(t_value) || t_value < 0) throw new Error('Please enter a valid time');

        // Convert to seconds
        const t1_2_seconds = convertToSeconds(t1_2_value, halfLifeUnit);
        const t_seconds = convertToSeconds(t_value, timeUnit);

        // Calculate decay constant: λ = ln(2) / t₁/₂
        const lambda = Math.LN2 / t1_2_seconds;

        // Calculate remaining amount
        const Nt = N0 * Math.exp(-lambda * t_seconds);

        // Calculate number of half-lives
        const numHalfLives = t_seconds / t1_2_seconds;

        // Calculate percent remaining
        const percentRemaining = (Nt / N0) * 100;

        // Calculate percent decayed
        const percentDecayed = 100 - percentRemaining;

        // Calculate amount decayed
        const amountDecayed = N0 - Nt;

        setResult({
          finalAmount: Nt,
          amountDecayed,
          percentRemaining,
          percentDecayed,
          numHalfLives,
          lambda: lambda,
          lambda_per_year: lambda * timeConversions['years'],
        });
      } else if (mode === 'halfLife') {
        // Calculate half-life from decay constant or from amounts
        const lambda_value = parseFloat(decayConstant);
        
        if (!isNaN(lambda_value) && lambda_value > 0) {
          // From decay constant
          const t1_2_seconds = Math.LN2 / lambda_value;
          
          setResult({
            halfLife_seconds: t1_2_seconds,
            halfLife_minutes: convertFromSeconds(t1_2_seconds, 'minutes'),
            halfLife_hours: convertFromSeconds(t1_2_seconds, 'hours'),
            halfLife_days: convertFromSeconds(t1_2_seconds, 'days'),
            halfLife_years: convertFromSeconds(t1_2_seconds, 'years'),
          });
        } else {
          // From amounts and time
          const N0 = parseFloat(initialAmount);
          const Nt = parseFloat(finalAmount);
          const t_value = parseFloat(time);

          if (isNaN(N0) || N0 <= 0) throw new Error('Please enter valid initial amount');
          if (isNaN(Nt) || Nt <= 0 || Nt >= N0) throw new Error('Final amount must be positive and less than initial amount');
          if (isNaN(t_value) || t_value <= 0) throw new Error('Please enter valid time');

          const t_seconds = convertToSeconds(t_value, timeUnit);
          
          // N(t) = N₀ * e^(-λt)
          // ln(N(t)/N₀) = -λt
          // λ = -ln(N(t)/N₀) / t
          const lambda = -Math.log(Nt / N0) / t_seconds;
          const t1_2_seconds = Math.LN2 / lambda;

          setResult({
            halfLife_seconds: t1_2_seconds,
            halfLife_minutes: convertFromSeconds(t1_2_seconds, 'minutes'),
            halfLife_hours: convertFromSeconds(t1_2_seconds, 'hours'),
            halfLife_days: convertFromSeconds(t1_2_seconds, 'days'),
            halfLife_years: convertFromSeconds(t1_2_seconds, 'years'),
            lambda: lambda,
          });
        }
      } else if (mode === 'time') {
        // Calculate time required for decay
        const N0 = parseFloat(initialAmount);
        const Nt = parseFloat(finalAmount);
        const t1_2_value = parseFloat(halfLife);

        if (isNaN(N0) || N0 <= 0) throw new Error('Please enter valid initial amount');
        if (isNaN(Nt) || Nt <= 0 || Nt >= N0) throw new Error('Final amount must be positive and less than initial amount');
        if (isNaN(t1_2_value) || t1_2_value <= 0) throw new Error('Please enter valid half-life');

        const t1_2_seconds = convertToSeconds(t1_2_value, halfLifeUnit);
        const lambda = Math.LN2 / t1_2_seconds;

        // t = -ln(N(t)/N₀) / λ
        const t_seconds = -Math.log(Nt / N0) / lambda;
        const numHalfLives = t_seconds / t1_2_seconds;

        setResult({
          time_seconds: t_seconds,
          time_minutes: convertFromSeconds(t_seconds, 'minutes'),
          time_hours: convertFromSeconds(t_seconds, 'hours'),
          time_days: convertFromSeconds(t_seconds, 'days'),
          time_years: convertFromSeconds(t_seconds, 'years'),
          numHalfLives,
        });
      } else if (mode === 'decayConstant') {
        // Calculate decay constant from half-life
        const t1_2_value = parseFloat(halfLife);

        if (isNaN(t1_2_value) || t1_2_value <= 0) throw new Error('Please enter valid half-life');

        const t1_2_seconds = convertToSeconds(t1_2_value, halfLifeUnit);
        const lambda = Math.LN2 / t1_2_seconds;

        setResult({
          lambda: lambda,
          lambda_per_second: lambda,
          lambda_per_minute: lambda * 60,
          lambda_per_hour: lambda * 3600,
          lambda_per_day: lambda * 86400,
          lambda_per_year: lambda * timeConversions['years'],
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    setInitialAmount(example.initialAmount);
    setFinalAmount(example.finalAmount || '');
    setHalfLife(example.halfLife || '');
    setHalfLifeUnit(example.halfLifeUnit || 'years');
    setTime(example.time || '');
    setTimeUnit(example.timeUnit || 'years');
    setError('');
    setResult(null);
  };

  const selectIsotope = (isotope: typeof commonIsotopes[0]) => {
    setHalfLife(isotope.halfLife.toString());
    setHalfLifeUnit(isotope.unit);
  };

  const clearFields = () => {
    setInitialAmount('100');
    setFinalAmount('');
    setHalfLife('');
    setTime('');
    setDecayConstant('');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            N(t) = N₀e<sup>-λt</sup>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate radioactive decay using first-order kinetics and half-life relationships.
          </p>
        </div>

        {/* Calculation Mode */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Calculate:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => setMode('amount')}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                mode === 'amount'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Amount
            </button>
            <button
              onClick={() => setMode('time')}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                mode === 'time'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Time
            </button>
            <button
              onClick={() => setMode('halfLife')}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                mode === 'halfLife'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Half-Life
            </button>
            <button
              onClick={() => setMode('decayConstant')}
              className={`px-3 py-2 rounded-lg font-medium transition-all text-sm ${
                mode === 'decayConstant'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              λ Constant
            </button>
          </div>
        </div>

        {/* Common Isotopes */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Common Isotopes:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {commonIsotopes.map((isotope, index) => (
              <button
                key={index}
                onClick={() => selectIsotope(isotope)}
                className="text-left p-2 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {isotope.symbol}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  t½ = {isotope.halfLife < 1 ? isotope.halfLife.toFixed(2) : isotope.halfLife.toExponential(2)} {isotope.unit}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Example Problems */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Problems:
          </h4>
          <div className="grid md:grid-cols-3 gap-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => fillExample(example)}
                className="text-left p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900 dark:text-white text-sm">
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
          {(mode === 'amount' || mode === 'time' || mode === 'halfLife') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Initial Amount (N₀)
              </label>
              <input
                type="number"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="100"
                step="any"
              />
            </div>
          )}

          {(mode === 'time' || mode === 'halfLife') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Final Amount (N)
              </label>
              <input
                type="number"
                value={finalAmount}
                onChange={(e) => setFinalAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="25"
                step="any"
              />
            </div>
          )}

          {(mode === 'amount' || mode === 'time' || mode === 'decayConstant') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Half-Life (t<sub>½</sub>)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={halfLife}
                  onChange={(e) => setHalfLife(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="5730"
                  step="any"
                />
                <select
                  value={halfLifeUnit}
                  onChange={(e) => setHalfLifeUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="seconds">sec</option>
                  <option value="minutes">min</option>
                  <option value="hours">hrs</option>
                  <option value="days">days</option>
                  <option value="years">yrs</option>
                </select>
              </div>
            </div>
          )}

          {(mode === 'amount' || mode === 'halfLife') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Elapsed (t)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="11460"
                  step="any"
                />
                <select
                  value={timeUnit}
                  onChange={(e) => setTimeUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="seconds">sec</option>
                  <option value="minutes">min</option>
                  <option value="hours">hrs</option>
                  <option value="days">days</option>
                  <option value="years">yrs</option>
                </select>
              </div>
            </div>
          )}

          {mode === 'halfLife' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Decay Constant (λ) [optional]
              </label>
              <input
                type="number"
                value={decayConstant}
                onChange={(e) => setDecayConstant(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="1.21e-4 /year"
                step="any"
              />
            </div>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            
            {mode === 'amount' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Remaining Amount:</p>
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {result.finalAmount.toFixed(4)} units
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {result.percentRemaining.toFixed(2)}% remaining
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Amount Decayed:</p>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {result.amountDecayed.toFixed(4)} units
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {result.percentDecayed.toFixed(2)}% decayed
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Number of Half-Lives: <span className="text-lg">{result.numHalfLives.toFixed(3)}</span>
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
                    Decay constant λ = {result.lambda.toExponential(4)} s⁻¹
                  </p>
                </div>
              </div>
            )}

            {mode === 'time' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Time Required:</p>
                  <div className="space-y-1 font-mono text-sm">
                    {result.time_years >= 1 && <div><strong>t =</strong> {result.time_years.toExponential(3)} years</div>}
                    {result.time_days >= 1 && result.time_days < 10000 && <div><strong>t =</strong> {result.time_days.toFixed(2)} days</div>}
                    {result.time_hours >= 1 && result.time_hours < 1000 && <div><strong>t =</strong> {result.time_hours.toFixed(2)} hours</div>}
                    {result.time_minutes < 1000 && <div><strong>t =</strong> {result.time_minutes.toFixed(2)} minutes</div>}
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    Number of Half-Lives: <span className="text-lg">{result.numHalfLives.toFixed(3)}</span>
                  </p>
                </div>
              </div>
            )}

            {mode === 'halfLife' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Half-Life:</p>
                  <div className="space-y-1 font-mono text-sm">
                    {result.halfLife_years >= 1 && <div><strong>t½ =</strong> {result.halfLife_years.toExponential(3)} years</div>}
                    {result.halfLife_days >= 1 && result.halfLife_days < 10000 && <div><strong>t½ =</strong> {result.halfLife_days.toFixed(2)} days</div>}
                    {result.halfLife_hours >= 1 && result.halfLife_hours < 1000 && <div><strong>t½ =</strong> {result.halfLife_hours.toFixed(2)} hours</div>}
                    {result.halfLife_minutes < 1000 && <div><strong>t½ =</strong> {result.halfLife_minutes.toFixed(2)} minutes</div>}
                  </div>
                </div>
                {result.lambda && (
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                    <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                      Decay Constant: λ = {result.lambda.toExponential(4)} s⁻¹
                    </p>
                  </div>
                )}
              </div>
            )}

            {mode === 'decayConstant' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Decay Constant (λ):</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>λ =</strong> {result.lambda_per_second.toExponential(4)} s⁻¹</div>
                    {result.lambda_per_year < 1 && <div><strong>λ =</strong> {result.lambda_per_year.toExponential(4)} yr⁻¹</div>}
                    {result.lambda_per_year >= 1 && <div><strong>λ =</strong> {result.lambda_per_year.toFixed(6)} yr⁻¹</div>}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Radioactive Decay
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>First-Order Kinetics:</strong> Radioactive decay follows first-order kinetics, meaning the rate 
              of decay is proportional to the amount of substance present.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>N(t) = N₀e<sup>-λt</sup>:</strong> Exponential decay equation</li>
              <li><strong>λ = ln(2)/t<sub>½</sub>:</strong> Decay constant from half-life</li>
              <li><strong>t<sub>½</sub>:</strong> Time for half the sample to decay (constant)</li>
              <li>After each half-life, 50% of the remaining sample decays</li>
            </ul>
            <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded">
              <p className="text-xs">
                <strong>Key Insight:</strong> After n half-lives, (1/2)<sup>n</sup> of the original sample remains. 
                After 1 half-life: 50%, after 2: 25%, after 3: 12.5%, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioactiveDecayCalculator;
