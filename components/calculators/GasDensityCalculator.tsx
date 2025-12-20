'use client';

import React, { useState } from 'react';

type CalculationMode = 'density' | 'molarMass' | 'pressure' | 'temperature';

interface CommonGas {
  name: string;
  formula: string;
  molarMass: number;
}

const COMMON_GASES: CommonGas[] = [
  { name: 'Air', formula: 'Air', molarMass: 28.97 },
  { name: 'Oxygen', formula: 'O₂', molarMass: 32.00 },
  { name: 'Nitrogen', formula: 'N₂', molarMass: 28.01 },
  { name: 'Carbon Dioxide', formula: 'CO₂', molarMass: 44.01 },
  { name: 'Helium', formula: 'He', molarMass: 4.003 },
  { name: 'Hydrogen', formula: 'H₂', molarMass: 2.016 },
  { name: 'Argon', formula: 'Ar', molarMass: 39.95 },
  { name: 'Methane', formula: 'CH₄', molarMass: 16.04 },
  { name: 'Ammonia', formula: 'NH₃', molarMass: 17.03 },
  { name: 'Chlorine', formula: 'Cl₂', molarMass: 70.90 },
];

export default function GasDensityCalculator() {
  const [mode, setMode] = useState<CalculationMode>('density');
  const [density, setDensity] = useState('');
  const [molarMass, setMolarMass] = useState('');
  const [pressure, setPressure] = useState('');
  const [temperature, setTemperature] = useState('');
  const [selectedGas, setSelectedGas] = useState<string>('');

  // R = 0.0821 L·atm/(mol·K)
  const R = 0.0821;

  const loadExample = (exampleNum: number) => {
    setSelectedGas('');
    
    if (exampleNum === 1) {
      // Calculate density of CO₂ at STP
      setMode('density');
      setMolarMass('44.01');
      setPressure('1');
      setTemperature('273.15');
      setDensity('');
    } else if (exampleNum === 2) {
      // Determine molar mass of unknown gas
      setMode('molarMass');
      setDensity('1.43');
      setPressure('1');
      setTemperature('298');
      setMolarMass('');
    } else if (exampleNum === 3) {
      // Find pressure needed for specific density
      setMode('pressure');
      setDensity('2.50');
      setMolarMass('32.00');
      setTemperature('298');
      setPressure('');
    }
  };

  const loadGas = (gas: CommonGas) => {
    setSelectedGas(gas.name);
    setMolarMass(gas.molarMass.toString());
  };

  const calculate = () => {
    const D = parseFloat(density);
    const M = parseFloat(molarMass);
    const P = parseFloat(pressure);
    const T = parseFloat(temperature);

    // D = PM/RT
    // Rearranging: M = DRT/P, P = DRT/M, T = PM/DR

    if (mode === 'density') {
      // Calculate density: D = PM/RT
      if (!M || !P || !T || M <= 0 || P <= 0 || T <= 0) return null;
      const calculatedDensity = (P * M) / (R * T);
      return {
        result: calculatedDensity,
        unit: 'g/L',
        steps: [
          `D = PM/RT`,
          `D = (${P} atm × ${M} g/mol) / (0.0821 L·atm/(mol·K) × ${T} K)`,
          `D = ${calculatedDensity.toFixed(4)} g/L`,
        ],
      };
    } else if (mode === 'molarMass') {
      // Calculate molar mass: M = DRT/P
      if (!D || !P || !T || D <= 0 || P <= 0 || T <= 0) return null;
      const calculatedMolarMass = (D * R * T) / P;
      return {
        result: calculatedMolarMass,
        unit: 'g/mol',
        steps: [
          `M = DRT/P`,
          `M = (${D} g/L × 0.0821 L·atm/(mol·K) × ${T} K) / ${P} atm`,
          `M = ${calculatedMolarMass.toFixed(4)} g/mol`,
        ],
      };
    } else if (mode === 'pressure') {
      // Calculate pressure: P = DRT/M
      if (!D || !M || !T || D <= 0 || M <= 0 || T <= 0) return null;
      const calculatedPressure = (D * R * T) / M;
      return {
        result: calculatedPressure,
        unit: 'atm',
        steps: [
          `P = DRT/M`,
          `P = (${D} g/L × 0.0821 L·atm/(mol·K) × ${T} K) / ${M} g/mol`,
          `P = ${calculatedPressure.toFixed(4)} atm`,
        ],
      };
    } else if (mode === 'temperature') {
      // Calculate temperature: T = PM/DR
      if (!D || !M || !P || D <= 0 || M <= 0 || P <= 0) return null;
      const calculatedTemperature = (P * M) / (D * R);
      return {
        result: calculatedTemperature,
        unit: 'K',
        celsius: calculatedTemperature - 273.15,
        steps: [
          `T = PM/DR`,
          `T = (${P} atm × ${M} g/mol) / (${D} g/L × 0.0821 L·atm/(mol·K))`,
          `T = ${calculatedTemperature.toFixed(4)} K`,
          `T = ${(calculatedTemperature - 273.15).toFixed(2)} °C`,
        ],
      };
    }
    return null;
  };

  const result = calculate();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Gas Density Calculator
        </h2>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          What would you like to calculate?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() => setMode('density')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'density'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Density
          </button>
          <button
            onClick={() => setMode('molarMass')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'molarMass'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Molar Mass
          </button>
          <button
            onClick={() => setMode('pressure')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'pressure'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Pressure
          </button>
          <button
            onClick={() => setMode('temperature')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'temperature'
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Temperature
          </button>
        </div>
      </div>

      {/* Common Gases */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Select a Common Gas (Optional)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {COMMON_GASES.map((gas) => (
            <button
              key={gas.formula}
              onClick={() => loadGas(gas)}
              className={`p-2 rounded-lg text-sm font-medium transition-all ${
                selectedGas === gas.name
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {gas.formula}
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {mode !== 'density' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Density (D) [g/L]
            </label>
            <input
              type="number"
              value={density}
              onChange={(e) => setDensity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1.43"
              step="0.001"
            />
          </div>
        )}

        {mode !== 'molarMass' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molar Mass (M) [g/mol]
            </label>
            <input
              type="number"
              value={molarMass}
              onChange={(e) => setMolarMass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 44.01"
              step="0.01"
            />
          </div>
        )}

        {mode !== 'pressure' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pressure (P) [atm]
            </label>
            <input
              type="number"
              value={pressure}
              onChange={(e) => setPressure(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1 (STP)"
              step="0.01"
            />
          </div>
        )}

        {mode !== 'temperature' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (T) [K]
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 273.15 (STP)"
              step="0.01"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              STP: 273.15 K | Room temp: ~298 K
            </p>
          </div>
        )}
      </div>

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Try Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => loadExample(1)}
            className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all"
          >
            Density of CO₂ at STP
          </button>
          <button
            onClick={() => loadExample(2)}
            className="p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all"
          >
            Unknown Gas Identification
          </button>
          <button
            onClick={() => loadExample(3)}
            className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
          >
            Pressure for Density
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6 border-2 border-primary-200 dark:border-primary-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Results
          </h3>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              {mode === 'density' && 'Density'}
              {mode === 'molarMass' && 'Molar Mass'}
              {mode === 'pressure' && 'Pressure'}
              {mode === 'temperature' && 'Temperature'}
            </p>
            <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {result.result.toFixed(4)} {result.unit}
            </p>
            {mode === 'temperature' && result.celsius !== undefined && (
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                = {result.celsius.toFixed(2)} °C
              </p>
            )}
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-gray-900 dark:text-white">Calculation Steps:</p>
            {result.steps.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded p-3 font-mono text-sm text-gray-700 dark:text-gray-300"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Gas Density Formula
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
          From the ideal gas law PV = nRT, substituting n = m/M and rearranging for density (D = m/V):
        </p>
        <div className="bg-white dark:bg-gray-800 rounded p-3 mb-3">
          <p className="font-mono text-center text-lg font-bold text-gray-900 dark:text-white">
            D = PM/RT
          </p>
        </div>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <p><strong>D</strong> = density (g/L)</p>
          <p><strong>P</strong> = pressure (atm)</p>
          <p><strong>M</strong> = molar mass (g/mol)</p>
          <p><strong>R</strong> = 0.0821 L·atm/(mol·K)</p>
          <p><strong>T</strong> = temperature (K)</p>
        </div>
        <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Applications:</strong> This formula is commonly used to determine the molar mass of an 
            unknown gas from experimental density measurements, or to predict gas densities under different 
            conditions. At STP (1 atm, 273.15 K), one mole of any ideal gas occupies 22.4 L.
          </p>
        </div>
      </div>
    </div>
  );
}
