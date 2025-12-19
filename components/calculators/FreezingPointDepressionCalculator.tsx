'use client';

import React, { useState } from 'react';

export default function FreezingPointDepressionCalculator() {
  const [calculationMode, setCalculationMode] = useState<'delta-t' | 'molality' | 'kf'>('delta-t');
  const [molality, setMolality] = useState<string>('');
  const [kf, setKf] = useState<string>('1.86');
  const [deltaT, setDeltaT] = useState<string>('');
  const [vanHoffFactor, setVanHoffFactor] = useState<string>('1');
  const [result, setResult] = useState<number | null>(null);

  const calculateDeltaT = () => {
    const m = parseFloat(molality);
    const kfVal = parseFloat(kf);
    const i = parseFloat(vanHoffFactor);

    if (isNaN(m) || isNaN(kfVal) || isNaN(i)) {
      alert('Please enter valid numbers');
      return;
    }

    if (m < 0 || kfVal < 0 || i < 0) {
      alert('Values cannot be negative');
      return;
    }

    // ΔTf = i × Kf × m
    const result = i * kfVal * m;
    setResult(result);
  };

  const calculateMolality = () => {
    const dt = parseFloat(deltaT);
    const kfVal = parseFloat(kf);
    const i = parseFloat(vanHoffFactor);

    if (isNaN(dt) || isNaN(kfVal) || isNaN(i)) {
      alert('Please enter valid numbers');
      return;
    }

    if (dt < 0 || kfVal <= 0 || i <= 0) {
      alert('Please check your values');
      return;
    }

    // m = ΔTf / (i × Kf)
    const result = dt / (i * kfVal);
    setResult(result);
  };

  const calculateKf = () => {
    const dt = parseFloat(deltaT);
    const m = parseFloat(molality);
    const i = parseFloat(vanHoffFactor);

    if (isNaN(dt) || isNaN(m) || isNaN(i)) {
      alert('Please enter valid numbers');
      return;
    }

    if (dt <= 0 || m <= 0 || i <= 0) {
      alert('Please check your values');
      return;
    }

    // Kf = ΔTf / (i × m)
    const result = dt / (i * m);
    setResult(result);
  };

  const handleCalculate = () => {
    switch (calculationMode) {
      case 'delta-t':
        calculateDeltaT();
        break;
      case 'molality':
        calculateMolality();
        break;
      case 'kf':
        calculateKf();
        break;
    }
  };

  const handleReset = () => {
    setMolality('');
    setDeltaT('');
    setVanHoffFactor('1');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Freezing Point Depression Calculator</h2>

      {/* Formula Display */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Freezing Point Depression Formula</p>
          <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">ΔTf = i × Kf × m</p>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to calculate?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => { setCalculationMode('delta-t'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationMode === 'delta-t'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            ΔTf (Temperature Change)
          </button>
          <button
            onClick={() => { setCalculationMode('molality'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationMode === 'molality'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Molality (m)
          </button>
          <button
            onClick={() => { setCalculationMode('kf'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationMode === 'kf'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Kf (Constant)
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {calculationMode !== 'delta-t' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              ΔTf - Freezing Point Depression (°C or K)
            </label>
            <input
              type="number"
              value={deltaT}
              onChange={(e) => setDeltaT(e.target.value)}
              placeholder="e.g., 1.86"
              step="0.001"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {calculationMode !== 'molality' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molality (m) - mol solute / kg solvent
            </label>
            <input
              type="number"
              value={molality}
              onChange={(e) => setMolality(e.target.value)}
              placeholder="e.g., 1.0"
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        {calculationMode !== 'kf' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kf - Cryoscopic Constant (°C·kg/mol)
            </label>
            <input
              type="number"
              value={kf}
              onChange={(e) => setKf(e.target.value)}
              placeholder="e.g., 1.86 for water"
              step="0.001"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            van&apos;t Hoff Factor (i)
          </label>
          <input
            type="number"
            value={vanHoffFactor}
            onChange={(e) => setVanHoffFactor(e.target.value)}
            placeholder="1 for non-electrolytes, 2 for NaCl"
            step="0.1"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Non-electrolytes: i = 1 | NaCl, KCl: i ≈ 2 | CaCl₂, Na₂SO₄: i ≈ 3
          </p>
        </div>
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
          {calculationMode === 'delta-t' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Freezing Point Depression: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} °C</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                New freezing point of water: {(0 - result).toFixed(3)} °C
              </p>
            </div>
          )}
          {calculationMode === 'molality' && (
            <p className="text-gray-700 dark:text-gray-300">
              Molality: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} mol/kg</span>
            </p>
          )}
          {calculationMode === 'kf' && (
            <p className="text-gray-700 dark:text-gray-300">
              Kf: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} °C·kg/mol</span>
            </p>
          )}
        </div>
      )}

      {/* Common Kf Values */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Common Kf Values (°C·kg/mol):</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
          <div><strong>Water:</strong> 1.86</div>
          <div><strong>Benzene:</strong> 5.12</div>
          <div><strong>Cyclohexane:</strong> 20.0</div>
          <div><strong>Acetic acid:</strong> 3.90</div>
          <div><strong>Camphor:</strong> 37.7</div>
          <div><strong>Naphthalene:</strong> 6.94</div>
        </div>
      </div>

      {/* Practical Applications */}
      <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Practical Applications:</h3>
        <ul className="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1">
          <li><strong>Road salt (NaCl):</strong> Lowers freezing point of water to prevent ice formation</li>
          <li><strong>Antifreeze (ethylene glycol):</strong> Prevents car radiator from freezing</li>
          <li><strong>De-icing aircraft:</strong> Propylene glycol solutions lower freezing point</li>
          <li><strong>Ice cream making:</strong> Salt lowers ice temperature for faster freezing</li>
        </ul>
      </div>
    </div>
  );
}
