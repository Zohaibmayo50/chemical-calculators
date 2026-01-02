'use client';
import React, { useState } from 'react';

export default function ChemicalOxygenDemandCalculator() {
  const [volumeSample, setVolumeSample] = useState<string>('');
  const [blankTitration, setBlankTitration] = useState<string>('');
  const [sampleTitration, setSampleTitration] = useState<string>('');
  const [molarity, setMolarity] = useState<string>('');
  const [cod, setCod] = useState<number | null>(null);
  const [pollutionLevel, setPollutionLevel] = useState<string>('');

  const calculateCOD = () => {
    const V_sample = parseFloat(volumeSample);
    const V_blank = parseFloat(blankTitration);
    const V_sample_titration = parseFloat(sampleTitration);
    const M = parseFloat(molarity);

    if (isNaN(V_sample) || isNaN(V_blank) || isNaN(V_sample_titration) || isNaN(M)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    if (V_sample <= 0 || M <= 0) {
      alert('Sample volume and molarity must be positive');
      return;
    }

    // COD (mg/L) = [(V_blank - V_sample) × M × 8000] / V_sample
    // 8000 = 1000 (mg/g) × 8 (g O2 per mole)
    const codValue = ((V_blank - V_sample_titration) * M * 8000) / V_sample;
    
    setCod(codValue);
    
    // Determine pollution level
    if (codValue < 20) {
      setPollutionLevel('Very Low - Clean Water');
    } else if (codValue < 40) {
      setPollutionLevel('Low - Good Quality');
    } else if (codValue < 80) {
      setPollutionLevel('Moderate - Acceptable');
    } else if (codValue < 200) {
      setPollutionLevel('High - Polluted');
    } else {
      setPollutionLevel('Very High - Severely Polluted');
    }
  };

  const handleReset = () => {
    setVolumeSample('');
    setBlankTitration('');
    setSampleTitration('');
    setMolarity('');
    setCod(null);
    setPollutionLevel('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Chemical Oxygen Demand Calculator
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>COD Formula:</strong> COD = [(V<sub>blank</sub> - V<sub>sample</sub>) × M × 8000] / V<sub>sample</sub><br/>
            <strong>Where:</strong> V = Volume (mL), M = Molarity of oxidant (mol/L)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Sample Volume (mL)
          </label>
          <input
            type="number"
            value={volumeSample}
            onChange={(e) => setVolumeSample(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 25"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Blank Titration Volume (mL)
          </label>
          <input
            type="number"
            value={blankTitration}
            onChange={(e) => setBlankTitration(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 10.5"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Sample Titration Volume (mL)
          </label>
          <input
            type="number"
            value={sampleTitration}
            onChange={(e) => setSampleTitration(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 8.2"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Oxidant Molarity (mol/L)
          </label>
          <input
            type="number"
            value={molarity}
            onChange={(e) => setMolarity(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="e.g., 0.025"
            step="0.001"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={calculateCOD}
          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate COD
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {cod !== null && (
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 animate-fade-in">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">
            Results:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">COD:</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {cod.toFixed(2)} mg/L
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Pollution Level:</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {pollutionLevel}
              </span>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• &lt;20 mg/L: Clean water, minimal organic pollution</li>
                <li>• 20-40 mg/L: Low pollution, good for aquatic life</li>
                <li>• 40-80 mg/L: Moderate pollution, acceptable levels</li>
                <li>• 80-200 mg/L: High pollution, treatment needed</li>
                <li>• &gt;200 mg/L: Severe pollution, immediate action required</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Formula: COD = [(V<sub>blank</sub> - V<sub>sample</sub>) × M × 8000] / V<sub>sample</sub>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
