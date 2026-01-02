'use client';
import React, { useState } from 'react';

export default function RadiocarbonDatingCalculator() {
  const [currentActivity, setCurrentActivity] = useState<string>('');
  const [initialActivity, setInitialActivity] = useState<string>('15.3');
  const [age, setAge] = useState<number | null>(null);
  const [uncertaintyYears, setUncertaintyYears] = useState<number | null>(null);
  const [eraDescription, setEraDescription] = useState<string>('');

  const calculateAge = () => {
    const A_current = parseFloat(currentActivity);
    const A_initial = parseFloat(initialActivity);

    if (isNaN(A_current) || isNaN(A_initial)) {
      alert('Please enter valid numbers');
      return;
    }

    if (A_current <= 0 || A_initial <= 0) {
      alert('Activity values must be positive');
      return;
    }

    if (A_current > A_initial) {
      alert('Current activity cannot exceed initial activity');
      return;
    }

    // Carbon-14 half-life = 5730 years
    const halfLife = 5730; // years
    
    // Age calculation using decay equation: t = (t₁/₂ / ln(2)) × ln(A₀/A)
    const age_calculated = (halfLife / Math.LN2) * Math.log(A_initial / A_current);
    
    setAge(age_calculated);
    
    // Calculate uncertainty (typically ±40-100 years for modern techniques)
    const uncertainty = Math.max(40, age_calculated * 0.01); // 1% or 40 years minimum
    setUncertaintyYears(uncertainty);
    
    // Determine historical era
    if (age_calculated < 500) {
      setEraDescription('Modern Period (0-500 years)');
    } else if (age_calculated < 2000) {
      setEraDescription('Medieval to Modern (500-2000 years)');
    } else if (age_calculated < 5000) {
      setEraDescription('Ancient Civilizations (2000-5000 years)');
    } else if (age_calculated < 10000) {
      setEraDescription('Neolithic Period (5000-10000 years)');
    } else if (age_calculated < 20000) {
      setEraDescription('Upper Paleolithic (10000-20000 years)');
    } else if (age_calculated < 50000) {
      setEraDescription('Middle Paleolithic (20000-50000 years)');
    } else {
      setEraDescription('Near Detection Limit (>50000 years)');
    }
  };

  const handleReset = () => {
    setCurrentActivity('');
    setInitialActivity('15.3');
    setAge(null);
    setUncertaintyYears(null);
    setEraDescription('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Radiocarbon Dating Calculator
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Dating Formula:</strong> t = (t<sub>½</sub> / ln2) × ln(A₀ / A)<br/>
            <strong>¹⁴C Half-life:</strong> 5,730 years<br/>
            <strong>Living Organisms:</strong> ~15.3 dpm/g carbon (modern standard)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Current ¹⁴C Activity (dpm/g)
          </label>
          <input
            type="number"
            value={currentActivity}
            onChange={(e) => setCurrentActivity(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="e.g., 7.5"
            step="0.01"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Disintegrations per minute per gram of carbon
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Initial ¹⁴C Activity (dpm/g)
          </label>
          <input
            type="number"
            value={initialActivity}
            onChange={(e) => setInitialActivity(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="e.g., 15.3"
            step="0.01"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Standard = 15.3 dpm/g (living organisms in 1950)
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={calculateAge}
          className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate Age
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {age !== null && (
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 animate-fade-in">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">
            Dating Results:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Age:</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {age.toFixed(0)} years
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Uncertainty:</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ± {uncertaintyYears!.toFixed(0)} years
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Calendar Date:</span>
              <span className="text-lg font-bold text-purple-600 dark:text-purple-400">
                ~{(new Date().getFullYear() - age).toFixed(0)} CE
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Historical Era:</span>
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                {eraDescription}
              </span>
            </div>
            
            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Radiocarbon Dating Range:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Effective range: 500 - 50,000 years</li>
                <li>• ¹⁴C half-life: 5,730 ± 40 years</li>
                <li>• After ~50,000 years: Too little ¹⁴C remains</li>
                <li>• Accuracy: ±40-100 years (modern AMS)</li>
                <li>• Calibration: Tree rings, coral, varves</li>
                <li>• Applications: Archaeology, geology, paleontology</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Formula: t = (5730 / ln2) × ln({initialActivity} / {currentActivity}) = {age.toFixed(0)} years
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
