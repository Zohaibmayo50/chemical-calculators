'use client';

import React, { useState } from 'react';

export default function NernstEquationCalculator() {
  const [standardPotential, setStandardPotential] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('298.15');
  const [electronsTransferred, setElectronsTransferred] = useState<string>('');
  const [reactionQuotient, setReactionQuotient] = useState<string>('');
  const [cellPotential, setCellPotential] = useState<number | null>(null);

  const R = 8.314; // J/(mol·K)
  const F = 96485; // C/mol

  const calculateCellPotential = () => {
    const E0 = parseFloat(standardPotential);
    const T = parseFloat(temperature);
    const n = parseFloat(electronsTransferred);
    const Q = parseFloat(reactionQuotient);

    if (isNaN(E0) || isNaN(T) || isNaN(n) || isNaN(Q) || n === 0) {
      alert('Please enter valid values for all fields. Electrons transferred must be non-zero.');
      return;
    }

    if (Q <= 0) {
      alert('Reaction quotient must be positive.');
      return;
    }

    // Nernst Equation: E = E° - (RT/nF) × ln(Q)
    const E = E0 - ((R * T) / (n * F)) * Math.log(Q);
    setCellPotential(E);
  };

  const clearFields = () => {
    setStandardPotential('');
    setTemperature('298.15');
    setElectronsTransferred('');
    setReactionQuotient('');
    setCellPotential(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Standard Cell Potential (E°) (V)
          </label>
          <input
            type="number"
            step="0.001"
            value={standardPotential}
            onChange={(e) => setStandardPotential(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 1.10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (K)
          </label>
          <input
            type="number"
            step="0.01"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="298.15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Electrons Transferred (n)
          </label>
          <input
            type="number"
            step="1"
            value={electronsTransferred}
            onChange={(e) => setElectronsTransferred(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reaction Quotient (Q)
          </label>
          <input
            type="number"
            step="any"
            value={reactionQuotient}
            onChange={(e) => setReactionQuotient(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.1"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateCellPotential}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </div>

        {cellPotential !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-primary-200 dark:border-primary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Cell Potential (E):</span>{' '}
                <span className="text-primary-600 dark:text-primary-400 font-bold text-xl">
                  {cellPotential.toFixed(4)} V
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: E = E° - (RT/nF) × ln(Q)
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                R = 8.314 J/(mol·K), F = 96485 C/mol
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
