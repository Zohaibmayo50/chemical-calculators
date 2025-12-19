'use client';

import React, { useState } from 'react';

type CalculationMode = 'pressure' | 'volume' | 'moles' | 'temperature';

const R_VALUES = {
  'L·atm/(mol·K)': 0.0821,
  'J/(mol·K)': 8.314,
  'L·kPa/(mol·K)': 8.314,
  'cal/(mol·K)': 1.987,
  'L·mmHg/(mol·K)': 62.36,
};

type RConstant = keyof typeof R_VALUES;

export default function IdealGasLawCalculator() {
  const [mode, setMode] = useState<CalculationMode>('pressure');
  const [pressure, setPressure] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [moles, setMoles] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [rConstant, setRConstant] = useState<RConstant>('L·atm/(mol·K)');
  const [result, setResult] = useState<number | null>(null);

  const calculatePressure = () => {
    const V = parseFloat(volume);
    const n = parseFloat(moles);
    const T = parseFloat(temperature);
    const R = R_VALUES[rConstant];

    if (isNaN(V) || isNaN(n) || isNaN(T)) {
      alert('Please enter valid numbers');
      return;
    }

    if (V <= 0 || n <= 0 || T <= 0) {
      alert('All values must be positive');
      return;
    }

    // P = nRT / V
    const P = (n * R * T) / V;
    setResult(P);
  };

  const calculateVolume = () => {
    const P = parseFloat(pressure);
    const n = parseFloat(moles);
    const T = parseFloat(temperature);
    const R = R_VALUES[rConstant];

    if (isNaN(P) || isNaN(n) || isNaN(T)) {
      alert('Please enter valid numbers');
      return;
    }

    if (P <= 0 || n <= 0 || T <= 0) {
      alert('All values must be positive');
      return;
    }

    // V = nRT / P
    const V = (n * R * T) / P;
    setResult(V);
  };

  const calculateMoles = () => {
    const P = parseFloat(pressure);
    const V = parseFloat(volume);
    const T = parseFloat(temperature);
    const R = R_VALUES[rConstant];

    if (isNaN(P) || isNaN(V) || isNaN(T)) {
      alert('Please enter valid numbers');
      return;
    }

    if (P <= 0 || V <= 0 || T <= 0) {
      alert('All values must be positive');
      return;
    }

    // n = PV / RT
    const n = (P * V) / (R * T);
    setResult(n);
  };

  const calculateTemperature = () => {
    const P = parseFloat(pressure);
    const V = parseFloat(volume);
    const n = parseFloat(moles);
    const R = R_VALUES[rConstant];

    if (isNaN(P) || isNaN(V) || isNaN(n)) {
      alert('Please enter valid numbers');
      return;
    }

    if (P <= 0 || V <= 0 || n <= 0) {
      alert('All values must be positive');
      return;
    }

    // T = PV / nR
    const T = (P * V) / (n * R);
    setResult(T);
  };

  const handleCalculate = () => {
    switch (mode) {
      case 'pressure':
        calculatePressure();
        break;
      case 'volume':
        calculateVolume();
        break;
      case 'moles':
        calculateMoles();
        break;
      case 'temperature':
        calculateTemperature();
        break;
    }
  };

  const handleReset = () => {
    setPressure('');
    setVolume('');
    setMoles('');
    setTemperature('');
    setResult(null);
  };

  const getUnitLabel = () => {
    if (rConstant.includes('atm')) return 'atm';
    if (rConstant.includes('kPa')) return 'kPa';
    if (rConstant.includes('mmHg')) return 'mmHg';
    if (rConstant.includes('J')) return 'Pa (J/L = Pa)';
    return 'atm';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ideal Gas Law Calculator</h2>

      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ideal Gas Law</p>
          <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">PV = nRT</p>
        </div>
      </div>

      {/* R Constant Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Gas Constant (R)
        </label>
        <select
          value={rConstant}
          onChange={(e) => { setRConstant(e.target.value as RConstant); handleReset(); }}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        >
          <option value="L·atm/(mol·K)">0.0821 L·atm/(mol·K)</option>
          <option value="J/(mol·K)">8.314 J/(mol·K)</option>
          <option value="L·kPa/(mol·K)">8.314 L·kPa/(mol·K)</option>
          <option value="cal/(mol·K)">1.987 cal/(mol·K)</option>
          <option value="L·mmHg/(mol·K)">62.36 L·mmHg/(mol·K)</option>
        </select>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to calculate?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button
            onClick={() => { setMode('pressure'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'pressure'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Pressure (P)
          </button>
          <button
            onClick={() => { setMode('volume'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'volume'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Volume (V)
          </button>
          <button
            onClick={() => { setMode('moles'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'moles'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Moles (n)
          </button>
          <button
            onClick={() => { setMode('temperature'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'temperature'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Temperature (T)
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {mode !== 'pressure' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pressure ({getUnitLabel()})
            </label>
            <input
              type="number"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              placeholder={`e.g., 1.0 ${getUnitLabel()}`}
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {mode !== 'volume' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Volume (L)
            </label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="e.g., 22.4"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {mode !== 'moles' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Moles (mol)
            </label>
            <input
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
              placeholder="e.g., 1.0"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {mode !== 'temperature' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (K)
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              placeholder="e.g., 273.15"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Tip: K = °C + 273.15
            </p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Result Display */}
      {result !== null && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Result:</h3>
          {mode === 'pressure' && (
            <p className="text-gray-700 dark:text-gray-300">
              Pressure: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} {getUnitLabel()}</span>
            </p>
          )}
          {mode === 'volume' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Volume: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} L</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                = {(result * 1000).toFixed(2)} mL
              </p>
            </div>
          )}
          {mode === 'moles' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Moles: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(6)} mol</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                = {(result * 1000).toFixed(4)} mmol
              </p>
            </div>
          )}
          {mode === 'temperature' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Temperature: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(2)} K</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                = {(result - 273.15).toFixed(2)} °C
              </p>
            </div>
          )}
        </div>
      )}

      {/* Reference Information */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Standard Conditions (STP):</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
          <div>
            <strong>Old STP (pre-1982):</strong>
            <div className="ml-2">T = 273.15 K (0°C)</div>
            <div className="ml-2">P = 1 atm = 101.325 kPa</div>
            <div className="ml-2">V = 22.414 L/mol</div>
          </div>
          <div>
            <strong>Current STP (IUPAC):</strong>
            <div className="ml-2">T = 273.15 K (0°C)</div>
            <div className="ml-2">P = 100 kPa = 1 bar</div>
            <div className="ml-2">V = 22.711 L/mol</div>
          </div>
        </div>
      </div>
    </div>
  );
}
