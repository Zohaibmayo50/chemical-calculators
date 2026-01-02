'use client';
import React, { useState } from 'react';

export default function CrudeProteinCalculator() {
  const [nitrogenPercent, setNitrogenPercent] = useState<string>('');
  const [conversionFactor, setConversionFactor] = useState<string>('6.25');
  const [sampleType, setSampleType] = useState<string>('general');
  const [proteinPercent, setProteinPercent] = useState<number | null>(null);
  const [proteinCategory, setProteinCategory] = useState<string>('');

  const sampleTypes = {
    general: { factor: 6.25, name: 'General Foods' },
    wheat: { factor: 5.70, name: 'Wheat/Flour' },
    milk: { factor: 6.38, name: 'Milk/Dairy' },
    rice: { factor: 5.95, name: 'Rice' },
    soy: { factor: 5.71, name: 'Soy Products' },
    meat: { factor: 6.25, name: 'Meat/Fish' },
    gelatin: { factor: 5.55, name: 'Gelatin' },
  };

  const handleSampleTypeChange = (type: string) => {
    setSampleType(type);
    setConversionFactor(sampleTypes[type as keyof typeof sampleTypes].factor.toString());
  };

  const calculateProtein = () => {
    const N_percent = parseFloat(nitrogenPercent);
    const factor = parseFloat(conversionFactor);

    if (isNaN(N_percent) || isNaN(factor)) {
      alert('Please enter valid numbers');
      return;
    }

    if (N_percent < 0 || N_percent > 100) {
      alert('Nitrogen percentage must be between 0 and 100');
      return;
    }

    if (factor <= 0) {
      alert('Conversion factor must be positive');
      return;
    }

    // Crude Protein (%) = Nitrogen (%) × Conversion Factor
    const protein = N_percent * factor;
    
    setProteinPercent(protein);
    
    // Categorize protein content
    if (protein < 5) {
      setProteinCategory('Very Low Protein');
    } else if (protein < 10) {
      setProteinCategory('Low Protein');
    } else if (protein < 20) {
      setProteinCategory('Moderate Protein');
    } else if (protein < 40) {
      setProteinCategory('High Protein');
    } else {
      setProteinCategory('Very High Protein');
    }
  };

  const handleReset = () => {
    setNitrogenPercent('');
    setConversionFactor('6.25');
    setSampleType('general');
    setProteinPercent(null);
    setProteinCategory('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Crude Protein Calculator
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Crude Protein Formula:</strong> Protein (%) = Nitrogen (%) × Conversion Factor<br/>
            <strong>Kjeldahl Method:</strong> Measures total nitrogen, assumes 16% N in protein (factor = 6.25)
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Sample Type
          </label>
          <select
            value={sampleType}
            onChange={(e) => handleSampleTypeChange(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
          >
            {Object.entries(sampleTypes).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name} (Factor: {value.factor})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Nitrogen Content (%)
          </label>
          <input
            type="number"
            value={nitrogenPercent}
            onChange={(e) => setNitrogenPercent(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="e.g., 2.5"
            step="0.01"
            min="0"
            max="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Conversion Factor
          </label>
          <input
            type="number"
            value={conversionFactor}
            onChange={(e) => setConversionFactor(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="e.g., 6.25"
            step="0.01"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Standard factor = 6.25 (assumes 16% N in protein)
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={calculateProtein}
          className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate Protein
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {proteinPercent !== null && (
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 animate-fade-in">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">
            Results:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Crude Protein:</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {proteinPercent.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Category:</span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {proteinCategory}
              </span>
            </div>
            
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Conversion Factors by Food Type:</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• General foods: 6.25 (16% N)</li>
                <li>• Wheat/flour: 5.70 (17.5% N)</li>
                <li>• Milk/dairy: 6.38 (15.7% N)</li>
                <li>• Rice: 5.95 (16.8% N)</li>
                <li>• Soy products: 5.71 (17.5% N)</li>
                <li>• Meat/fish: 6.25 (16% N)</li>
                <li>• Gelatin: 5.55 (18% N)</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Formula: Crude Protein (%) = N (%) × {conversionFactor}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
