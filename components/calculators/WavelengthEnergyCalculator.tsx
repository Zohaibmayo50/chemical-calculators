'use client';

import React, { useState } from 'react';

type CalculationMode = 'energy' | 'wavelength' | 'frequency';

const WavelengthEnergyCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('energy');
  const [wavelength, setWavelength] = useState<string>('500');
  const [wavelengthUnit, setWavelengthUnit] = useState<string>('nm');
  const [frequency, setFrequency] = useState<string>('');
  const [frequencyUnit, setFrequencyUnit] = useState<string>('Hz');
  const [energy, setEnergy] = useState<string>('');
  const [energyUnit, setEnergyUnit] = useState<string>('J');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Physical constants
  const h = 6.62607015e-34; // Planck's constant (J·s)
  const c = 2.99792458e8; // Speed of light (m/s)

  const examples = [
    {
      name: 'Visible Light (Green)',
      mode: 'energy' as CalculationMode,
      wavelength: '500',
      wavelengthUnit: 'nm',
      description: 'Middle of visible spectrum',
    },
    {
      name: 'UV Light',
      mode: 'energy' as CalculationMode,
      wavelength: '200',
      wavelengthUnit: 'nm',
      description: 'Ultraviolet radiation',
    },
    {
      name: 'Infrared',
      mode: 'frequency' as CalculationMode,
      wavelength: '1000',
      wavelengthUnit: 'nm',
      description: 'IR spectroscopy region',
    },
  ];

  const wavelengthConversions: { [key: string]: number } = {
    'm': 1,
    'cm': 1e-2,
    'mm': 1e-3,
    'μm': 1e-6,
    'nm': 1e-9,
    'pm': 1e-12,
    'Å': 1e-10,
  };

  const frequencyConversions: { [key: string]: number } = {
    'Hz': 1,
    'kHz': 1e3,
    'MHz': 1e6,
    'GHz': 1e9,
    'THz': 1e12,
  };

  const energyConversions: { [key: string]: number } = {
    'J': 1,
    'kJ': 1e3,
    'eV': 1.602176634e-19,
    'kJ/mol': 1e3 / 6.02214076e23,
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      if (mode === 'energy') {
        // Calculate energy from wavelength
        const λ_value = parseFloat(wavelength);
        if (isNaN(λ_value) || λ_value <= 0) {
          throw new Error('Please enter a valid positive wavelength');
        }

        // Convert to meters
        const λ_m = λ_value * wavelengthConversions[wavelengthUnit];

        // Calculate frequency: f = c / λ
        const f = c / λ_m;

        // Calculate energy: E = hf
        const E_J = h * f;

        // Convert to different units
        const E_eV = E_J / energyConversions['eV'];
        const E_kJ_mol = E_J / energyConversions['kJ/mol'];

        // Determine region of EM spectrum
        let region = '';
        if (λ_m < 10e-9) region = 'Gamma rays';
        else if (λ_m < 400e-9) region = 'X-rays / UV';
        else if (λ_m < 700e-9) region = 'Visible light';
        else if (λ_m < 1e-3) region = 'Infrared';
        else if (λ_m < 1) region = 'Microwave';
        else region = 'Radio waves';

        // Get color for visible light
        let color = '';
        if (λ_m >= 380e-9 && λ_m < 450e-9) color = 'Violet';
        else if (λ_m < 495e-9) color = 'Blue';
        else if (λ_m < 570e-9) color = 'Green';
        else if (λ_m < 590e-9) color = 'Yellow';
        else if (λ_m < 620e-9) color = 'Orange';
        else if (λ_m < 750e-9) color = 'Red';

        setResult({
          energy_J: E_J,
          energy_eV: E_eV,
          energy_kJ_mol: E_kJ_mol,
          frequency_Hz: f,
          frequency_THz: f / 1e12,
          wavelength_m: λ_m,
          wavelength_nm: λ_m * 1e9,
          region,
          color,
        });
      } else if (mode === 'wavelength') {
        // Calculate wavelength from frequency
        const f_value = parseFloat(frequency);
        if (isNaN(f_value) || f_value <= 0) {
          throw new Error('Please enter a valid positive frequency');
        }

        // Convert to Hz
        const f_Hz = f_value * frequencyConversions[frequencyUnit];

        // Calculate wavelength: λ = c / f
        const λ_m = c / f_Hz;

        // Calculate energy: E = hf
        const E_J = h * f_Hz;

        setResult({
          wavelength_m: λ_m,
          wavelength_nm: λ_m * 1e9,
          wavelength_μm: λ_m * 1e6,
          energy_J: E_J,
          energy_eV: E_J / energyConversions['eV'],
          frequency_Hz: f_Hz,
        });
      } else if (mode === 'frequency') {
        // Calculate frequency from wavelength
        const λ_value = parseFloat(wavelength);
        if (isNaN(λ_value) || λ_value <= 0) {
          throw new Error('Please enter a valid positive wavelength');
        }

        const λ_m = λ_value * wavelengthConversions[wavelengthUnit];
        const f = c / λ_m;

        setResult({
          frequency_Hz: f,
          frequency_kHz: f / 1e3,
          frequency_MHz: f / 1e6,
          frequency_GHz: f / 1e9,
          frequency_THz: f / 1e12,
          wavelength_m: λ_m,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    setWavelength(example.wavelength);
    setWavelengthUnit(example.wavelengthUnit);
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setWavelength('500');
    setWavelengthUnit('nm');
    setFrequency('');
    setFrequencyUnit('Hz');
    setEnergy('');
    setEnergyUnit('J');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            E = hf = hc/λ
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate energy, wavelength, or frequency of electromagnetic radiation using quantum mechanics.
          </p>
        </div>

        {/* Calculation Mode Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Calculate:
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setMode('energy')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'energy'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Energy
            </button>
            <button
              onClick={() => setMode('wavelength')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'wavelength'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Wavelength
            </button>
            <button
              onClick={() => setMode('frequency')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'frequency'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Frequency
            </button>
          </div>
        </div>

        {/* Example Problems */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Wavelengths:
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
          {(mode === 'energy' || mode === 'frequency') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Wavelength (λ)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={wavelength}
                  onChange={(e) => setWavelength(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="500"
                  step="any"
                />
                <select
                  value={wavelengthUnit}
                  onChange={(e) => setWavelengthUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="nm">nm</option>
                  <option value="μm">μm</option>
                  <option value="Å">Å</option>
                  <option value="pm">pm</option>
                  <option value="m">m</option>
                  <option value="cm">cm</option>
                  <option value="mm">mm</option>
                </select>
              </div>
            </div>
          )}

          {mode === 'wavelength' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Frequency (f)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="6e14"
                  step="any"
                />
                <select
                  value={frequencyUnit}
                  onChange={(e) => setFrequencyUnit(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="Hz">Hz</option>
                  <option value="kHz">kHz</option>
                  <option value="MHz">MHz</option>
                  <option value="GHz">GHz</option>
                  <option value="THz">THz</option>
                </select>
              </div>
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
            
            {mode === 'energy' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Photon Energy:</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>E =</strong> {result.energy_J.toExponential(4)} J</div>
                    <div><strong>E =</strong> {result.energy_eV.toFixed(4)} eV</div>
                    <div><strong>E =</strong> {result.energy_kJ_mol.toFixed(2)} kJ/mol</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Frequency:</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>f =</strong> {result.frequency_Hz.toExponential(4)} Hz</div>
                    <div><strong>f =</strong> {result.frequency_THz.toFixed(2)} THz</div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    EM Spectrum Region:
                  </p>
                  <p className="text-lg font-bold text-blue-800 dark:text-blue-200">{result.region}</p>
                  {result.color && (
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                      Color: <strong>{result.color}</strong>
                    </p>
                  )}
                </div>
              </div>
            )}

            {mode === 'wavelength' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Wavelength:</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>λ =</strong> {result.wavelength_m.toExponential(4)} m</div>
                    <div><strong>λ =</strong> {result.wavelength_nm.toFixed(2)} nm</div>
                    <div><strong>λ =</strong> {result.wavelength_μm.toFixed(4)} μm</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Energy:</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>E =</strong> {result.energy_J.toExponential(4)} J</div>
                    <div><strong>E =</strong> {result.energy_eV.toFixed(4)} eV</div>
                  </div>
                </div>
              </div>
            )}

            {mode === 'frequency' && (
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Frequency:</p>
                  <div className="space-y-1 font-mono text-sm">
                    <div><strong>f =</strong> {result.frequency_Hz.toExponential(4)} Hz</div>
                    <div><strong>f =</strong> {result.frequency_THz.toFixed(2)} THz</div>
                    <div><strong>f =</strong> {result.frequency_GHz.toFixed(2)} GHz</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Light & Energy
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Photon Energy:</strong> Light behaves as both a wave and a particle (photon). 
              Each photon carries energy proportional to its frequency.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>E = hf:</strong> Energy = Planck's constant × frequency</li>
              <li><strong>c = λf:</strong> Speed of light = wavelength × frequency</li>
              <li><strong>E = hc/λ:</strong> Energy inversely proportional to wavelength</li>
              <li><strong>h =</strong> 6.626 × 10⁻³⁴ J·s (Planck's constant)</li>
              <li><strong>c =</strong> 2.998 × 10⁸ m/s (Speed of light)</li>
            </ul>
            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
              <p className="text-xs">
                <strong>Key Insight:</strong> Shorter wavelengths (UV, X-rays) carry MORE energy than 
                longer wavelengths (IR, radio waves). This is why UV light can damage DNA while radio 
                waves cannot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WavelengthEnergyCalculator;
