'use client';

import React, { useState } from 'react';

type CalculationMode = 'from-molarity' | 'from-mass' | 'find-molarity';

export default function SolutionPreparationCalculator() {
  const [mode, setMode] = useState<CalculationMode>('from-molarity');
  const [molarity, setMolarity] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [molarMass, setMolarMass] = useState<string>('');
  const [mass, setMass] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateFromMolarity = () => {
    const M = parseFloat(molarity);
    const V = parseFloat(volume);
    const MM = parseFloat(molarMass);

    if (isNaN(M) || isNaN(V) || isNaN(MM)) {
      alert('Please enter valid numbers');
      return;
    }

    if (M <= 0 || V <= 0 || MM <= 0) {
      alert('All values must be positive');
      return;
    }

    // mass = M × V × MM
    const massNeeded = M * V * MM;
    setResult(massNeeded);
  };

  const calculateFromMass = () => {
    const m = parseFloat(mass);
    const V = parseFloat(volume);
    const MM = parseFloat(molarMass);

    if (isNaN(m) || isNaN(V) || isNaN(MM)) {
      alert('Please enter valid numbers');
      return;
    }

    if (m <= 0 || V <= 0 || MM <= 0) {
      alert('All values must be positive');
      return;
    }

    // M = mass / (V × MM)
    const M = m / (V * MM);
    setResult(M);
  };

  const calculateMolarity = () => {
    const m = parseFloat(mass);
    const V = parseFloat(volume);
    const MM = parseFloat(molarMass);

    if (isNaN(m) || isNaN(V) || isNaN(MM)) {
      alert('Please enter valid numbers');
      return;
    }

    if (m <= 0 || V <= 0 || MM <= 0) {
      alert('All values must be positive');
      return;
    }

    // M = mass / (V × MM)
    const M = m / (V * MM);
    setResult(M);
  };

  const handleCalculate = () => {
    switch (mode) {
      case 'from-molarity':
        calculateFromMolarity();
        break;
      case 'from-mass':
        calculateFromMass();
        break;
      case 'find-molarity':
        calculateMolarity();
        break;
    }
  };

  const handleReset = () => {
    setMolarity('');
    setVolume('');
    setMolarMass('');
    setMass('');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Solution Preparation Calculator</h2>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to calculate?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => { setMode('from-molarity'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'from-molarity'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Mass Needed
          </button>
          <button
            onClick={() => { setMode('from-mass'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'from-mass'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Volume Needed
          </button>
          <button
            onClick={() => { setMode('find-molarity'); handleReset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              mode === 'find-molarity'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Molarity
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {mode === 'from-molarity' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Desired Molarity (M or mol/L)
              </label>
              <input
                type="number"
                value={molarity}
                onChange={(e) => setMolarity(e.target.value)}
                placeholder="e.g., 1.0"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Volume of Solution (L)
              </label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="e.g., 0.5"
                step="0.001"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molar Mass (g/mol)
              </label>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                placeholder="e.g., 58.44 for NaCl"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </>
        )}

        {mode === 'from-mass' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass of Solute (g)
              </label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                placeholder="e.g., 29.22"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Desired Molarity (M or mol/L)
              </label>
              <input
                type="number"
                value={molarity}
                onChange={(e) => setMolarity(e.target.value)}
                placeholder="e.g., 1.0"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molar Mass (g/mol)
              </label>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                placeholder="e.g., 58.44 for NaCl"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </>
        )}

        {mode === 'find-molarity' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass of Solute (g)
              </label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                placeholder="e.g., 29.22"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Volume of Solution (L)
              </label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="e.g., 0.5"
                step="0.001"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molar Mass (g/mol)
              </label>
              <input
                type="number"
                value={molarMass}
                onChange={(e) => setMolarMass(e.target.value)}
                placeholder="e.g., 58.44 for NaCl"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </>
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
          {mode === 'from-molarity' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Mass of solute needed: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} g</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Dissolve {result.toFixed(4)} g of solute in water and dilute to {volume} L
              </p>
            </div>
          )}
          {mode === 'from-mass' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Volume needed: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} L</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Dissolve {mass} g in water and dilute to {result.toFixed(4)} L ({(result * 1000).toFixed(2)} mL)
              </p>
            </div>
          )}
          {mode === 'find-molarity' && (
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Molarity: <span className="font-bold text-green-700 dark:text-green-400">{result.toFixed(4)} M</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                The solution has a concentration of {result.toFixed(4)} mol/L
              </p>
            </div>
          )}
        </div>
      )}

      {/* Common Solutes Reference */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Common Laboratory Chemicals:</h3>
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
          <div>
            <strong>Acids:</strong>
            <div className="ml-2">HCl: 36.46 g/mol</div>
            <div className="ml-2">H₂SO₄: 98.08 g/mol</div>
            <div className="ml-2">HNO₃: 63.01 g/mol</div>
          </div>
          <div>
            <strong>Bases:</strong>
            <div className="ml-2">NaOH: 40.00 g/mol</div>
            <div className="ml-2">KOH: 56.11 g/mol</div>
            <div className="ml-2">NH₃: 17.03 g/mol</div>
          </div>
          <div>
            <strong>Salts:</strong>
            <div className="ml-2">NaCl: 58.44 g/mol</div>
            <div className="ml-2">KCl: 74.55 g/mol</div>
            <div className="ml-2">CaCl₂: 110.98 g/mol</div>
          </div>
          <div>
            <strong>Organic:</strong>
            <div className="ml-2">Glucose: 180.16 g/mol</div>
            <div className="ml-2">Sucrose: 342.30 g/mol</div>
            <div className="ml-2">Urea: 60.06 g/mol</div>
          </div>
        </div>
      </div>
    </div>
  );
}
