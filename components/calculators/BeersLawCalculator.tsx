'use client';

import React, { useState } from 'react';

const BeersLawCalculator: React.FC = () => {
  const [absorbance, setAbsorbance] = useState<string>('');
  const [molarAbsorptivity, setMolarAbsorptivity] = useState<string>('');
  const [pathLength, setPathLength] = useState<string>('');
  const [concentration, setConcentration] = useState<string>('');
  const [solveFor, setSolveFor] = useState<'absorbance' | 'molarAbsorptivity' | 'pathLength' | 'concentration'>('concentration');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    const A = parseFloat(absorbance);
    const epsilon = parseFloat(molarAbsorptivity);
    const b = parseFloat(pathLength);
    const c = parseFloat(concentration);

    switch (solveFor) {
      case 'concentration':
        // c = A / (ε × b)
        if (isNaN(A) || isNaN(epsilon) || isNaN(b)) {
          setError('Please enter valid values for absorbance, molar absorptivity, and path length');
          return;
        }
        if (epsilon <= 0 || b <= 0) {
          setError('Molar absorptivity and path length must be positive');
          return;
        }
        if (A < 0) {
          setError('Absorbance cannot be negative');
          return;
        }
        const concResult = A / (epsilon * b);
        setResult(concResult);
        break;

      case 'absorbance':
        // A = ε × b × c
        if (isNaN(epsilon) || isNaN(b) || isNaN(c)) {
          setError('Please enter valid values for molar absorptivity, path length, and concentration');
          return;
        }
        if (epsilon <= 0 || b <= 0 || c < 0) {
          setError('All values must be positive (concentration ≥ 0)');
          return;
        }
        const absResult = epsilon * b * c;
        setResult(absResult);
        break;

      case 'molarAbsorptivity':
        // ε = A / (b × c)
        if (isNaN(A) || isNaN(b) || isNaN(c)) {
          setError('Please enter valid values for absorbance, path length, and concentration');
          return;
        }
        if (b <= 0 || c <= 0) {
          setError('Path length and concentration must be positive');
          return;
        }
        if (A < 0) {
          setError('Absorbance cannot be negative');
          return;
        }
        const epsilonResult = A / (b * c);
        setResult(epsilonResult);
        break;

      case 'pathLength':
        // b = A / (ε × c)
        if (isNaN(A) || isNaN(epsilon) || isNaN(c)) {
          setError('Please enter valid values for absorbance, molar absorptivity, and concentration');
          return;
        }
        if (epsilon <= 0 || c <= 0) {
          setError('Molar absorptivity and concentration must be positive');
          return;
        }
        if (A < 0) {
          setError('Absorbance cannot be negative');
          return;
        }
        const pathResult = A / (epsilon * c);
        setResult(pathResult);
        break;
    }
  };

  const handleClear = () => {
    setAbsorbance('');
    setMolarAbsorptivity('');
    setPathLength('');
    setConcentration('');
    setResult(null);
    setError('');
  };

  const getInputLabels = () => {
    return {
      absorbance: solveFor !== 'absorbance',
      molarAbsorptivity: solveFor !== 'molarAbsorptivity',
      pathLength: solveFor !== 'pathLength',
      concentration: solveFor !== 'concentration',
    };
  };

  const labels = getInputLabels();

  const getTransmittancePercent = (A: number): number => {
    // T = 10^(-A)
    // %T = T × 100
    return Math.pow(10, -A) * 100;
  };

  const getAbsorbanceRange = (A: number): string => {
    if (A < 0.1) return 'Very low absorbance - sample may be too dilute';
    if (A >= 0.1 && A <= 1.0) return 'Optimal range for accurate measurements';
    if (A > 1.0 && A <= 2.0) return 'High absorbance - acceptable but less accurate';
    return 'Very high absorbance - sample may need dilution';
  };

  const getAbsorbanceColor = (A: number): string => {
    if (A < 0.1) return 'text-yellow-600 dark:text-yellow-400';
    if (A >= 0.1 && A <= 1.0) return 'text-green-600 dark:text-green-400';
    if (A > 1.0 && A <= 2.0) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Beer&apos;s Law Calculator
      </h2>

      {/* Info Box */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Beer&apos;s Law (Beer-Lambert Law):</strong> A = εbc
          <br />
          Relates the absorption of light to the properties of the material through which light travels.
        </p>
      </div>

      {/* Solve For Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Solve For:
        </label>
        <select
          value={solveFor}
          onChange={(e) => {
            setSolveFor(e.target.value as 'absorbance' | 'molarAbsorptivity' | 'pathLength' | 'concentration');
            handleClear();
          }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
        >
          <option value="concentration">Concentration (c) - most common</option>
          <option value="absorbance">Absorbance (A)</option>
          <option value="molarAbsorptivity">Molar Absorptivity (ε)</option>
          <option value="pathLength">Path Length (b)</option>
        </select>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {labels.absorbance && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Absorbance (A)
            </label>
            <input
              type="number"
              step="any"
              value={absorbance}
              onChange={(e) => setAbsorbance(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Unitless (optimal: 0.1-1.0)
            </p>
          </div>
        )}

        {labels.molarAbsorptivity && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molar Absorptivity (ε)
            </label>
            <input
              type="number"
              step="any"
              value={molarAbsorptivity}
              onChange={(e) => setMolarAbsorptivity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              L/(mol·cm) or M⁻¹cm⁻¹
            </p>
          </div>
        )}

        {labels.pathLength && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Path Length (b)
            </label>
            <input
              type="number"
              step="any"
              value={pathLength}
              onChange={(e) => setPathLength(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="1.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              cm (typical: 1.0 cm cuvette)
            </p>
          </div>
        )}

        {labels.concentration && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Concentration (c)
            </label>
            <input
              type="number"
              step="any"
              value={concentration}
              onChange={(e) => setConcentration(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="0.00"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              M (mol/L) or mmol/L
            </p>
          </div>
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
            {solveFor === 'concentration' && `c = ${result.toExponential(4)} M`}
            {solveFor === 'absorbance' && `A = ${result.toFixed(4)}`}
            {solveFor === 'molarAbsorptivity' && `ε = ${result.toFixed(2)} L/(mol·cm)`}
            {solveFor === 'pathLength' && `b = ${result.toFixed(4)} cm`}
          </p>

          {/* Additional Information for Absorbance */}
          {solveFor === 'absorbance' && (
            <div className="mt-4 space-y-2">
              <p className={`text-sm font-semibold ${getAbsorbanceColor(result)}`}>
                {getAbsorbanceRange(result)}
              </p>
              
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <p className="font-semibold mb-1">Additional Information:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Transmittance: {getTransmittancePercent(result).toFixed(2)}%</li>
                  <li>
                    {result >= 0.1 && result <= 1.0 && 'Optimal range for Beer\'s Law linearity'}
                    {result < 0.1 && 'Consider using a longer path length or higher concentration'}
                    {result > 1.0 && result <= 2.0 && 'Acceptable but deviation from linearity may occur'}
                    {result > 2.0 && 'Dilute sample recommended for accurate measurements'}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Additional Information for Concentration */}
          {solveFor === 'concentration' && (
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <p className="font-semibold mb-1">Concentration in other units:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>mmol/L: {(result * 1000).toExponential(4)}</li>
                <li>μmol/L: {(result * 1e6).toExponential(4)}</li>
                {parseFloat(absorbance) >= 0 && (
                  <li>Transmittance: {getTransmittancePercent(parseFloat(absorbance)).toFixed(2)}%</li>
                )}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Educational Notes */}
      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Notes:</h4>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Beer&apos;s Law is valid only for dilute solutions and monochromatic light</li>
          <li>• Optimal absorbance range: 0.1 - 1.0 for accurate measurements</li>
          <li>• Molar absorptivity (ε) is a constant for a given substance at a specific wavelength</li>
          <li>• Standard cuvette path length is 1.0 cm</li>
          <li>• Transmittance (T) = 10^(-A), where %T = T × 100</li>
        </ul>
      </div>
    </div>
  );
};

export default BeersLawCalculator;
