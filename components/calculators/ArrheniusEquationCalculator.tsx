'use client';

import React, { useState } from 'react';

type SolveMode = 'k' | 'Ea' | 'T' | 'k2';

const ArrheniusEquationCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('k');
  const [activationEnergy, setActivationEnergy] = useState<string>('');
  const [preExponentialFactor, setPreExponentialFactor] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('298');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [temperature2, setTemperature2] = useState<string>('');
  const [rateConstant1, setRateConstant1] = useState<string>('');
  const [rateConstant2, setRateConstant2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const R = 8.314; // J/(mol·K)

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (solveMode === 'k') {
        // Calculate k from Ea, A, and T
        // k = A * e^(-Ea/RT)
        const Ea = parseFloat(activationEnergy) * 1000; // Convert kJ to J
        const A = parseFloat(preExponentialFactor);
        const T = parseFloat(temperature);

        if (Ea <= 0 || A <= 0 || T <= 0) {
          setError('All values must be positive');
          return;
        }

        const k = A * Math.exp(-Ea / (R * T));
        setResult(k);

      } else if (solveMode === 'Ea') {
        // Calculate Ea from k, A, and T
        // Ea = -RT * ln(k/A)
        const k = parseFloat(rateConstant);
        const A = parseFloat(preExponentialFactor);
        const T = parseFloat(temperature);

        if (k <= 0 || A <= 0 || T <= 0) {
          setError('All values must be positive');
          return;
        }

        if (k > A) {
          setError('Rate constant cannot exceed pre-exponential factor');
          return;
        }

        const Ea = -R * T * Math.log(k / A);
        setResult(Ea / 1000); // Convert J to kJ

      } else if (solveMode === 'T') {
        // Calculate T from k, A, and Ea
        // T = -Ea / (R * ln(k/A))
        const k = parseFloat(rateConstant);
        const A = parseFloat(preExponentialFactor);
        const Ea = parseFloat(activationEnergy) * 1000;

        if (k <= 0 || A <= 0 || Ea <= 0) {
          setError('All values must be positive');
          return;
        }

        if (k > A) {
          setError('Rate constant cannot exceed pre-exponential factor');
          return;
        }

        const T = -Ea / (R * Math.log(k / A));
        
        if (T < 0) {
          setError('Calculated temperature is negative - check your values');
          return;
        }

        setResult(T);

      } else if (solveMode === 'k2') {
        // Calculate k2 using two-point form
        // ln(k2/k1) = -(Ea/R) * (1/T2 - 1/T1)
        const k1 = parseFloat(rateConstant1);
        const T1 = parseFloat(temperature);
        const T2 = parseFloat(temperature2);
        const Ea = parseFloat(activationEnergy) * 1000;

        if (k1 <= 0 || T1 <= 0 || T2 <= 0 || Ea <= 0) {
          setError('All values must be positive');
          return;
        }

        if (T1 === T2) {
          setError('Temperatures must be different');
          return;
        }

        const lnK2overK1 = -(Ea / R) * (1/T2 - 1/T1);
        const k2 = k1 * Math.exp(lnK2overK1);
        setResult(k2);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setActivationEnergy('');
    setPreExponentialFactor('');
    setTemperature('298');
    setRateConstant('');
    setTemperature2('');
    setRateConstant1('');
    setRateConstant2('');
    setResult(null);
    setError('');
  };

  const setExample = (example: string) => {
    if (example === 'decomposition') {
      setSolveMode('k');
      setActivationEnergy('100');
      setPreExponentialFactor('1e13');
      setTemperature('500');
    } else if (example === 'enzyme') {
      setSolveMode('k');
      setActivationEnergy('50');
      setPreExponentialFactor('1e10');
      setTemperature('310');
    } else if (example === 'two-point') {
      setSolveMode('k2');
      setActivationEnergy('75');
      setRateConstant1('0.001');
      setTemperature('298');
      setTemperature2('323');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Arrhenius Equation Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Arrhenius Equation:</strong> k = A·e^(-Ea/RT)
          <br />
          Relates rate constant to temperature and activation energy
          <br />
          Higher temperature or lower activation energy → faster reaction
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { mode: 'k' as SolveMode, label: 'Rate Constant (k)' },
            { mode: 'Ea' as SolveMode, label: 'Activation Energy (Ea)' },
            { mode: 'T' as SolveMode, label: 'Temperature (T)' },
            { mode: 'k2' as SolveMode, label: 'k at T₂' },
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
          Example Reactions
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setExample('decomposition')}
            className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
          >
            Gas Decomposition
          </button>
          <button
            onClick={() => setExample('enzyme')}
            className="py-2 px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 text-sm font-medium transition-colors"
          >
            Enzyme Reaction
          </button>
          <button
            onClick={() => setExample('two-point')}
            className="py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 text-sm font-medium transition-colors"
          >
            Two-Point Method
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {solveMode !== 'Ea' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Activation Energy (Ea)
            </label>
            <input
              type="number"
              value={activationEnergy}
              onChange={(e) => setActivationEnergy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter activation energy"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">kJ/mol</p>
          </div>
        )}

        {(solveMode === 'k' || solveMode === 'Ea') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pre-Exponential Factor (A)
            </label>
            <input
              type="text"
              value={preExponentialFactor}
              onChange={(e) => setPreExponentialFactor(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="e.g., 1e13"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Same units as k (use scientific notation, e.g., 1e13)
            </p>
          </div>
        )}

        {solveMode !== 'T' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (T{solveMode === 'k2' ? '₁' : ''})
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter temperature"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K (Kelvin)</p>
          </div>
        )}

        {(solveMode === 'Ea' || solveMode === 'T' || solveMode === 'k2') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Rate Constant (k{solveMode === 'k2' ? '₁' : ''})
            </label>
            <input
              type="text"
              value={solveMode === 'k2' ? rateConstant1 : rateConstant}
              onChange={(e) => solveMode === 'k2' ? setRateConstant1(e.target.value) : setRateConstant(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter rate constant"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Units depend on reaction order (s⁻¹, M⁻¹s⁻¹, etc.)
            </p>
          </div>
        )}

        {solveMode === 'k2' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature 2 (T₂)
            </label>
            <input
              type="number"
              value={temperature2}
              onChange={(e) => setTemperature2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter second temperature"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">K (Kelvin)</p>
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
              {solveMode === 'k' && 'Rate Constant (k):'}
              {solveMode === 'Ea' && 'Activation Energy (Ea):'}
              {solveMode === 'T' && 'Temperature (T):'}
              {solveMode === 'k2' && 'Rate Constant at T₂ (k₂):'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result < 0.001 || result > 10000 ? result.toExponential(4) : result.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {solveMode === 'k' && 'Units depend on reaction order'}
              {solveMode === 'Ea' && 'kJ/mol'}
              {solveMode === 'T' && `K (${(result - 273.15).toFixed(2)}°C)`}
              {solveMode === 'k2' && 'Same units as k₁'}
            </p>
          </div>

          {solveMode === 'k2' && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Rate Change:</h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                k₂/k₁ = {(result / parseFloat(rateConstant1)).toFixed(2)}
                <br />
                {result > parseFloat(rateConstant1) 
                  ? `Reaction is ${(result / parseFloat(rateConstant1)).toFixed(2)}× faster at ${temperature2} K`
                  : `Reaction is ${(parseFloat(rateConstant1) / result).toFixed(2)}× slower at ${temperature2} K`
                }
              </p>
            </div>
          )}

          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Interpretation:</h4>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              {solveMode === 'k' && `At ${temperature} K, the reaction proceeds with rate constant ${result.toExponential(4)}.`}
              {solveMode === 'Ea' && `The reaction requires ${result.toFixed(2)} kJ/mol of energy to overcome the activation barrier.`}
              {solveMode === 'T' && `The reaction achieves the specified rate constant at ${result.toFixed(2)} K (${(result - 273.15).toFixed(2)}°C).`}
              {solveMode === 'k2' && `Increasing temperature from ${temperature} K to ${temperature2} K changes the rate constant from ${rateConstant1} to ${result.toExponential(4)}.`}
            </p>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Higher temperature increases rate constant (faster reaction)</li>
              <li>• Lower activation energy increases rate constant (easier reaction)</li>
              <li>• R = 8.314 J/(mol·K) is the universal gas constant</li>
              <li>• Temperature must be in Kelvin (K = °C + 273.15)</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Arrhenius Equation Forms:</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <div>
            <strong>Exponential Form:</strong>
            <p className="font-mono ml-4">k = A·e^(-Ea/RT)</p>
          </div>
          <div>
            <strong>Logarithmic Form:</strong>
            <p className="font-mono ml-4">ln(k) = ln(A) - Ea/(RT)</p>
          </div>
          <div>
            <strong>Two-Point Form:</strong>
            <p className="font-mono ml-4">ln(k₂/k₁) = -(Ea/R)·(1/T₂ - 1/T₁)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrheniusEquationCalculator;
