'use client';

import React, { useState } from 'react';

type CalculationMode = 'energy' | 'wavelength' | 'frequency';

const BohrModelCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('wavelength');
  const [n1, setN1] = useState<string>('2');
  const [n2, setN2] = useState<string>('3');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Physical constants
  const R_H = 1.097e7; // Rydberg constant for hydrogen (m⁻¹)
  const h = 6.62607015e-34; // Planck's constant (J·s)
  const c = 2.99792458e8; // Speed of light (m/s)
  const E_0 = -2.178e-18; // Ground state energy of hydrogen (J)
  const eV_to_J = 1.602176634e-19; // Conversion factor

  const seriesData = [
    { name: 'Lyman', n1: 1, region: 'Ultraviolet', color: 'purple' },
    { name: 'Balmer', n1: 2, region: 'Visible', color: 'blue' },
    { name: 'Paschen', n1: 3, region: 'Infrared', color: 'red' },
    { name: 'Brackett', n1: 4, region: 'Infrared', color: 'orange' },
    { name: 'Pfund', n1: 5, region: 'Infrared', color: 'yellow' },
  ];

  const examples = [
    {
      name: 'Balmer Alpha (Hα)',
      n1: '2',
      n2: '3',
      description: 'Red line at 656 nm',
    },
    {
      name: 'Balmer Beta (Hβ)',
      n1: '2',
      n2: '4',
      description: 'Blue-green at 486 nm',
    },
    {
      name: 'Lyman Alpha',
      n1: '1',
      n2: '2',
      description: 'UV at 121 nm',
    },
    {
      name: 'Paschen Alpha',
      n1: '3',
      n2: '4',
      description: 'IR at 1875 nm',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const n_lower = parseInt(n1);
      const n_upper = parseInt(n2);

      if (isNaN(n_lower) || n_lower < 1) {
        throw new Error('Lower energy level must be a positive integer');
      }
      if (isNaN(n_upper) || n_upper < 1) {
        throw new Error('Upper energy level must be a positive integer');
      }
      if (n_upper <= n_lower) {
        throw new Error('Upper level must be greater than lower level');
      }

      // Calculate energies using E_n = E_0 / n²
      const E_lower = E_0 / (n_lower * n_lower);
      const E_upper = E_0 / (n_upper * n_upper);

      // Energy of transition (always positive for emission)
      const deltaE = E_upper - E_lower; // Negative for emission
      const deltaE_abs = Math.abs(deltaE);

      // Convert to eV
      const deltaE_eV = deltaE_abs / eV_to_J;

      // Calculate wavelength using Rydberg equation
      // 1/λ = R_H * (1/n₁² - 1/n₂²)
      const lambda_inv = R_H * (1/(n_lower*n_lower) - 1/(n_upper*n_upper));
      const lambda_m = 1 / lambda_inv;
      const lambda_nm = lambda_m * 1e9;

      // Calculate frequency
      const freq = c / lambda_m;
      const freq_THz = freq / 1e12;

      // Determine series
      let series = 'Unknown';
      let region = 'Unknown';
      let seriesColor = 'gray';
      
      for (const s of seriesData) {
        if (s.n1 === n_lower) {
          series = s.name;
          region = s.region;
          seriesColor = s.color;
          break;
        }
      }

      // Determine visible color for Balmer series
      let visibleColor = '';
      if (n_lower === 2 && lambda_nm >= 380 && lambda_nm <= 750) {
        if (lambda_nm >= 620 && lambda_nm <= 750) visibleColor = 'Red';
        else if (lambda_nm >= 590 && lambda_nm < 620) visibleColor = 'Orange';
        else if (lambda_nm >= 570 && lambda_nm < 590) visibleColor = 'Yellow';
        else if (lambda_nm >= 495 && lambda_nm < 570) visibleColor = 'Green';
        else if (lambda_nm >= 450 && lambda_nm < 495) visibleColor = 'Blue';
        else if (lambda_nm >= 380 && lambda_nm < 450) visibleColor = 'Violet';
      }

      setResult({
        n_lower,
        n_upper,
        E_lower,
        E_upper,
        E_lower_eV: E_lower / eV_to_J,
        E_upper_eV: E_upper / eV_to_J,
        deltaE_J: deltaE_abs,
        deltaE_eV,
        lambda_m,
        lambda_nm,
        lambda_angstrom: lambda_m * 1e10,
        frequency_Hz: freq,
        frequency_THz: freq_THz,
        series,
        region,
        seriesColor,
        visibleColor,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setN1(example.n1);
    setN2(example.n2);
    setError('');
    setResult(null);
  };

  const selectSeries = (seriesN1: number) => {
    setN1(seriesN1.toString());
    if (parseInt(n2) <= seriesN1) {
      setN2((seriesN1 + 1).toString());
    }
  };

  const clearFields = () => {
    setN1('2');
    setN2('3');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            E<sub>n</sub> = -13.6 eV/n²
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate energy levels and spectral lines for hydrogen atom using the Bohr model.
          </p>
        </div>

        {/* Spectral Series Selector */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Spectral Series (sets lower level n₁):
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {seriesData.map((series, index) => (
              <button
                key={index}
                onClick={() => selectSeries(series.n1)}
                className={`p-3 rounded-lg hover:shadow-md transition-shadow text-left border-2 ${
                  parseInt(n1) === series.n1 
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30' 
                    : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700'
                }`}
              >
                <div className="font-bold text-sm text-gray-900 dark:text-white">
                  {series.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  n₁ = {series.n1}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {series.region}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Example Transitions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Famous Transitions:
          </h4>
          <div className="grid md:grid-cols-4 gap-2">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Lower Energy Level (n₁)
            </label>
            <input
              type="number"
              value={n1}
              onChange={(e) => setN1(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="2"
              min="1"
              step="1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Final state after emission (lower energy)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upper Energy Level (n₂)
            </label>
            <input
              type="number"
              value={n2}
              onChange={(e) => setN2(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="3"
              min="1"
              step="1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Initial state before emission (higher energy)
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate Transition
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
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Transition: n = {result.n_upper} → n = {result.n_lower}
            </h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Energy Levels:</p>
                <div className="space-y-1 text-sm font-mono">
                  <div>E<sub>{result.n_lower}</sub> = {result.E_lower_eV.toFixed(4)} eV</div>
                  <div>E<sub>{result.n_upper}</sub> = {result.E_upper_eV.toFixed(4)} eV</div>
                  <div className="font-bold border-t border-gray-300 dark:border-gray-600 pt-1 mt-1">
                    ΔE = {result.deltaE_eV.toFixed(4)} eV = {result.deltaE_J.toExponential(4)} J
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Emitted Photon:</p>
                <div className="space-y-1 text-sm font-mono">
                  <div><strong>λ =</strong> {result.lambda_nm.toFixed(2)} nm</div>
                  <div><strong>λ =</strong> {result.lambda_angstrom.toFixed(2)} Å</div>
                  <div><strong>f =</strong> {result.frequency_THz.toFixed(2)} THz</div>
                </div>
              </div>

              <div className={`p-4 rounded-lg border-l-4 bg-${result.seriesColor}-50 dark:bg-${result.seriesColor}-900/20 border-${result.seriesColor}-500`}>
                <p className="font-semibold text-lg mb-1">{result.series} Series</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Region:</strong> {result.region}
                </p>
                {result.visibleColor && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <strong>Visible Color:</strong> {result.visibleColor}
                  </p>
                )}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="text-xs text-blue-900 dark:text-blue-100">
                  <strong>Emission:</strong> Electron drops from n = {result.n_upper} to n = {result.n_lower}, 
                  releasing a photon with wavelength {result.lambda_nm.toFixed(1)} nm in the {result.region.toLowerCase()} region.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding the Bohr Model
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Bohr Model (1913):</strong> Electrons orbit the nucleus in discrete energy levels. 
              Energy is quantized: only certain orbits are allowed.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>E<sub>n</sub> = -13.6 eV/n²:</strong> Energy of level n (negative = bound state)</li>
              <li><strong>ΔE = E<sub>upper</sub> - E<sub>lower</sub>:</strong> Energy released/absorbed</li>
              <li><strong>1/λ = R<sub>H</sub>(1/n₁² - 1/n₂²):</strong> Rydberg equation for wavelength</li>
              <li><strong>Ground state:</strong> n = 1 (lowest energy, most stable)</li>
            </ul>
            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <p className="text-xs">
                <strong>Spectral Lines:</strong> Each transition produces a unique wavelength, creating the 
                characteristic line spectrum of hydrogen. The Balmer series (n₁=2) produces visible light!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BohrModelCalculator;
