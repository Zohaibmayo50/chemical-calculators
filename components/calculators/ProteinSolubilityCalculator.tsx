'use client';

import React, { useState } from 'react';

export default function ProteinSolubilityCalculator() {
  const [temperature, setTemperature] = useState<string>('');
  const [pH, setPH] = useState<string>('');
  const [saltConcentration, setSaltConcentration] = useState<string>('');
  const [proteinPI, setProteinPI] = useState<string>('');
  const [solubilityScore, setSolubilityScore] = useState<number | null>(null);
  const [recommendation, setRecommendation] = useState<string>('');

  const calculateSolubility = () => {
    const temp = parseFloat(temperature);
    const phValue = parseFloat(pH);
    const salt = parseFloat(saltConcentration);
    const pI = parseFloat(proteinPI);

    if (isNaN(temp) || isNaN(phValue) || isNaN(salt) || isNaN(pI)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (temp < 0 || temp > 100 || phValue < 0 || phValue > 14 || salt < 0 || pI < 0 || pI > 14) {
      alert('Please enter realistic values.');
      return;
    }

    // Solubility factors (simplified model)
    // 1. pH distance from pI (larger is better)
    const pHDifference = Math.abs(phValue - pI);
    const pHFactor = Math.min(pHDifference / 3, 1); // Normalized 0-1

    // 2. Temperature effect (moderate temps are better)
    const tempFactor = temp >= 4 && temp <= 25 ? 1 : 
                       temp < 4 ? 0.7 : 
                       temp > 37 ? 0.5 : 0.8;

    // 3. Salt concentration (moderate is better, too high or low reduces solubility)
    const saltFactor = salt >= 0.05 && salt <= 0.2 ? 1 :
                       salt < 0.05 ? 0.6 :
                       salt > 0.5 ? 0.4 : 0.7;

    // Combined solubility score (0-100)
    const score = (pHFactor * 0.5 + tempFactor * 0.3 + saltFactor * 0.2) * 100;

    setSolubilityScore(score);

    // Generate recommendation
    let rec = '';
    if (score >= 80) {
      rec = 'Excellent solubility conditions. Protein should remain highly soluble.';
    } else if (score >= 60) {
      rec = 'Good solubility expected. Monitor for precipitation over time.';
    } else if (score >= 40) {
      rec = 'Moderate solubility. Consider adjusting pH away from pI or optimizing salt concentration.';
    } else {
      rec = 'Low solubility predicted. pH is too close to pI or conditions are suboptimal. Adjust pH ±2 units from pI and maintain salt between 50-200 mM.';
    }

    if (pHDifference < 1) {
      rec += ' WARNING: pH is very close to pI - high precipitation risk!';
    }

    setRecommendation(rec);
  };

  const clearFields = () => {
    setTemperature('');
    setPH('');
    setSaltConcentration('');
    setProteinPI('');
    setSolubilityScore(null);
    setRecommendation('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Temperature (°C)
          </label>
          <input
            type="number"
            step="any"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Solution pH
          </label>
          <input
            type="number"
            step="any"
            value={pH}
            onChange={(e) => setPH(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 7.4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Salt Concentration (M)
          </label>
          <input
            type="number"
            step="any"
            value={saltConcentration}
            onChange={(e) => setSaltConcentration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.15"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            NaCl or equivalent ionic strength
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Protein Isoelectric Point (pI)
          </label>
          <input
            type="number"
            step="any"
            value={proteinPI}
            onChange={(e) => setProteinPI(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 5.5"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            pH where protein has zero net charge
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateSolubility}
            className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
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

        {solubilityScore !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Solubility Score:</span>{' '}
                <span className={`font-bold text-2xl ${
                  solubilityScore >= 80 ? 'text-green-600' :
                  solubilityScore >= 60 ? 'text-blue-600' :
                  solubilityScore >= 40 ? 'text-yellow-600' :
                  'text-red-600'
                }`}>
                  {solubilityScore.toFixed(1)}/100
                </span>
              </p>

              <div className="bg-gray-200 dark:bg-gray-600 rounded-full h-4 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    solubilityScore >= 80 ? 'bg-green-600' :
                    solubilityScore >= 60 ? 'bg-blue-600' :
                    solubilityScore >= 40 ? 'bg-yellow-600' :
                    'bg-red-600'
                  }`}
                  style={{ width: `${solubilityScore}%` }}
                />
              </div>

              <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Recommendation:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {recommendation}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white">pH - pI:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {Math.abs(parseFloat(pH) - parseFloat(proteinPI)).toFixed(2)} units
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
                  <p className="font-semibold text-gray-900 dark:text-white">Salt:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {(parseFloat(saltConcentration) * 1000).toFixed(0)} mM
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
