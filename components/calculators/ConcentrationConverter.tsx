'use client';

import React, { useState } from 'react';

type ConcentrationType = 'molarity' | 'molality' | 'mass-percent' | 'ppm' | 'ppb';

export default function ConcentrationConverter() {
  const [fromType, setFromType] = useState<ConcentrationType>('molarity');
  const [toType, setToType] = useState<ConcentrationType>('mass-percent');
  const [inputValue, setInputValue] = useState<string>('');
  const [molarMass, setMolarMass] = useState<string>('');
  const [density, setDensity] = useState<string>('1.0');
  const [result, setResult] = useState<number | null>(null);

  const conversionLabels = {
    'molarity': 'Molarity (M)',
    'molality': 'Molality (m)',
    'mass-percent': 'Mass Percent (%)',
    'ppm': 'PPM',
    'ppb': 'PPB'
  };

  const convert = () => {
    const value = parseFloat(inputValue);
    const MM = parseFloat(molarMass);
    const ρ = parseFloat(density);

    if (isNaN(value) || isNaN(MM) || isNaN(ρ)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    if (value < 0 || MM <= 0 || ρ <= 0) {
      alert('All values must be positive');
      return;
    }

    // Convert input to molarity first (intermediate)
    let molarity = 0;

    switch (fromType) {
      case 'molarity':
        molarity = value;
        break;
      case 'molality':
        // M ≈ m × ρ / (1 + m × MM / 1000)
        molarity = (value * ρ) / (1 + (value * MM) / 1000);
        break;
      case 'mass-percent':
        // M = (% × ρ × 10) / MM
        molarity = (value * ρ * 10) / MM;
        break;
      case 'ppm':
        // M = (ppm × ρ) / (MM × 1000)
        molarity = (value * ρ) / (MM * 1000);
        break;
      case 'ppb':
        // M = (ppb × ρ) / (MM × 1000000)
        molarity = (value * ρ) / (MM * 1000000);
        break;
    }

    // Convert molarity to target unit
    let output = 0;

    switch (toType) {
      case 'molarity':
        output = molarity;
        break;
      case 'molality':
        // m ≈ M / (ρ - M × MM / 1000)
        output = molarity / (ρ - (molarity * MM) / 1000);
        break;
      case 'mass-percent':
        // % = (M × MM) / (ρ × 10)
        output = (molarity * MM) / (ρ * 10);
        break;
      case 'ppm':
        // ppm = (M × MM × 1000) / ρ
        output = (molarity * MM * 1000) / ρ;
        break;
      case 'ppb':
        // ppb = (M × MM × 1000000) / ρ
        output = (molarity * MM * 1000000) / ρ;
        break;
    }

    setResult(output);
  };

  const handleReset = () => {
    setInputValue('');
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Concentration Converter</h2>

      {/* From/To Selection */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Convert From:
          </label>
          <select
            value={fromType}
            onChange={(e) => {
              setFromType(e.target.value as ConcentrationType);
              handleReset();
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            {Object.entries(conversionLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Convert To:
          </label>
          <select
            value={toType}
            onChange={(e) => {
              setToType(e.target.value as ConcentrationType);
              handleReset();
            }}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            {Object.entries(conversionLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Input Value */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Input Concentration ({conversionLabels[fromType]})
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="e.g., 1.5"
          step="0.001"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Additional Parameters */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
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

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Solution Density (g/mL)
          </label>
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            placeholder="e.g., 1.0 for water"
            step="0.001"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={convert}
          className="flex-1 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Convert
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
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-bold text-green-700 dark:text-green-400">
              {result.toExponential(4)} {conversionLabels[toType]}
            </span>
          </p>
          {result >= 1000 || result < 0.001 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              = {result.toFixed(6)} (standard notation)
            </p>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              = {result.toFixed(4)} (standard notation)
            </p>
          )}
        </div>
      )}

      {/* Common Solutes Reference */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Common Solute Molar Masses:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-700 dark:text-gray-300">
          <div>NaCl: 58.44 g/mol</div>
          <div>KCl: 74.55 g/mol</div>
          <div>CaCl₂: 110.98 g/mol</div>
          <div>NaOH: 40.00 g/mol</div>
          <div>H₂SO₄: 98.08 g/mol</div>
          <div>HCl: 36.46 g/mol</div>
          <div>Glucose: 180.16 g/mol</div>
          <div>Sucrose: 342.30 g/mol</div>
          <div>Urea: 60.06 g/mol</div>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
          Note: Conversions assume dilute aqueous solutions. For concentrated solutions, results are approximations.
        </p>
      </div>
    </div>
  );
}
