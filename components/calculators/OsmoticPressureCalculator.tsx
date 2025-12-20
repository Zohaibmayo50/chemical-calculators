'use client';

import React, { useState } from 'react';

type SolveMode = 'pressure' | 'molarity' | 'temperature';

const OsmoticPressureCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('pressure');
  const [molarity, setMolarity] = useState<string>('0.1');
  const [temperature, setTemperature] = useState<string>('298');
  const [vanHoffFactor, setVanHoffFactor] = useState<string>('1');
  const [osmoticPressure, setOsmoticPressure] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');

  const R = 0.08206; // L·atm/(mol·K)

  const examples = [
    { name: 'Glucose (Non-electrolyte)', i: '1', M: '0.1', T: '298', desc: 'Common sugar, no dissociation' },
    { name: 'NaCl (Strong electrolyte)', i: '2', M: '0.1', T: '298', desc: 'Dissociates into 2 ions' },
    { name: 'CaCl₂ (Strong electrolyte)', i: '3', M: '0.1', T: '298', desc: 'Dissociates into 3 ions' },
  ];

  const calculate = () => {
    setError('');
    setResult(null);
    setInterpretation('');

    try {
      const i = parseFloat(vanHoffFactor);
      const M = parseFloat(molarity);
      const T = parseFloat(temperature);
      const pi = parseFloat(osmoticPressure);

      if (isNaN(i) || i <= 0) {
        throw new Error('Van\'t Hoff factor must be positive');
      }

      if (solveMode === 'pressure') {
        if (isNaN(M) || M <= 0) throw new Error('Molarity must be positive');
        if (isNaN(T) || T <= 0) throw new Error('Temperature must be positive');
        const calculatedPi = i * M * R * T;
        setResult(calculatedPi);
        if (calculatedPi < 1) {
          setInterpretation('Low osmotic pressure - dilute solution.');
        } else if (calculatedPi < 10) {
          setInterpretation('Moderate osmotic pressure - typical laboratory solution.');
        } else {
          setInterpretation('High osmotic pressure - concentrated solution.');
        }
      } else if (solveMode === 'molarity') {
        if (isNaN(pi) || pi <= 0) throw new Error('Osmotic pressure must be positive');
        if (isNaN(T) || T <= 0) throw new Error('Temperature must be positive');
        const calculatedM = pi / (i * R * T);
        setResult(calculatedM);
        setInterpretation(`Molarity: ${calculatedM.toFixed(6)} M = ${(calculatedM * 1000).toFixed(3)} mM`);
      } else if (solveMode === 'temperature') {
        if (isNaN(pi) || pi <= 0) throw new Error('Osmotic pressure must be positive');
        if (isNaN(M) || M <= 0) throw new Error('Molarity must be positive');
        const calculatedT = pi / (i * M * R);
        setResult(calculatedT);
        const tempC = calculatedT - 273.15;
        setInterpretation(`Temperature: ${calculatedT.toFixed(2)} K = ${tempC.toFixed(2)} °C`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setVanHoffFactor(example.i);
    setMolarity(example.M);
    setTemperature(example.T);
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setMolarity('');
    setTemperature('298');
    setVanHoffFactor('1');
    setOsmoticPressure('');
    setResult(null);
    setError('');
    setInterpretation('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Van't Hoff Equation: π = iMRT
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            <button
              onClick={() => setSolveMode('pressure')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                solveMode === 'pressure'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Solve for π
            </button>
            <button
              onClick={() => setSolveMode('molarity')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                solveMode === 'molarity'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Solve for M
            </button>
            <button
              onClick={() => setSolveMode('temperature')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                solveMode === 'temperature'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Solve for T
            </button>
            <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg text-center">
              <span className="text-xs text-blue-800 dark:text-blue-200">R = {R}</span>
            </div>
          </div>
        </div>

        {/* Example Solutions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Solutions:
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
                  {example.desc}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  i = {example.i}, M = {example.M} M
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Van't Hoff Factor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Van't Hoff Factor (i)
          </label>
          <input
            type="number"
            value={vanHoffFactor}
            onChange={(e) => setVanHoffFactor(e.target.value)}
            step="0.1"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter Van't Hoff factor"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            1 for non-electrolytes, 2 for NaCl, 3 for CaCl₂, etc.
          </p>
        </div>

        {/* Molarity - hidden when solving for it */}
        {solveMode !== 'molarity' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molarity (M)
            </label>
            <input
              type="number"
              value={molarity}
              onChange={(e) => setMolarity(e.target.value)}
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter molarity (mol/L)"
            />
          </div>
        )}

        {/* Temperature - hidden when solving for it */}
        {solveMode !== 'temperature' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Temperature (K)
            </label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              step="1"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter temperature (K)"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              298 K = 25°C (room temperature), 310 K = 37°C (body temperature)
            </p>
          </div>
        )}

        {/* Osmotic Pressure - hidden when solving for it */}
        {solveMode !== 'pressure' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Osmotic Pressure (atm)
            </label>
            <input
              type="number"
              value={osmoticPressure}
              onChange={(e) => setOsmoticPressure(e.target.value)}
              step="0.01"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter osmotic pressure (atm)"
            />
          </div>
        )}

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

        {result !== null && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            {solveMode === 'pressure' && (
              <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-200 text-xl font-bold">
                  {result.toFixed(4)} atm
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  = {(result * 101.325).toFixed(2)} kPa
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  = {(result * 760).toFixed(1)} mmHg
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {interpretation}
                </p>
              </div>
            )}
            {solveMode !== 'pressure' && (
              <p className="text-gray-800 dark:text-gray-200">
                {interpretation}
              </p>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Osmotic Pressure
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>π = iMRT</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>π</strong> = osmotic pressure (atm)</li>
              <li><strong>i</strong> = Van't Hoff factor (number of particles from dissociation)</li>
              <li><strong>M</strong> = molarity (mol/L)</li>
              <li><strong>R</strong> = gas constant = 0.08206 L·atm/(mol·K)</li>
              <li><strong>T</strong> = absolute temperature (K)</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Key Concept:</strong> Osmotic pressure is the minimum pressure needed to prevent water 
                from flowing through a semipermeable membrane from a dilute solution to a concentrated one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsmoticPressureCalculator;
