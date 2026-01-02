'use client';

import React, { useState } from 'react';

export default function EnzymeActivityCalculator() {
  const [productFormed, setProductFormed] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [enzymeAmount, setEnzymeAmount] = useState<string>('');
  const [volumeReaction, setVolumeReaction] = useState<string>('');
  const [specificActivity, setSpecificActivity] = useState<number | null>(null);
  const [totalActivity, setTotalActivity] = useState<number | null>(null);
  const [activityPerMl, setActivityPerMl] = useState<number | null>(null);

  const calculateEnzymeActivity = () => {
    const product = parseFloat(productFormed);
    const t = parseFloat(time);
    const enzyme = parseFloat(enzymeAmount);
    const volume = parseFloat(volumeReaction);

    if (isNaN(product) || isNaN(t) || isNaN(enzyme) || isNaN(volume)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (product < 0 || t <= 0 || enzyme <= 0 || volume <= 0) {
      alert('All values must be positive.');
      return;
    }

    // Activity = µmol product / time (Units = µmol/min)
    const totalAct = product / t;
    
    // Specific Activity = Units / mg protein
    const specAct = totalAct / enzyme;
    
    // Activity per mL = Units / mL
    const actPerMl = totalAct / volume;

    setTotalActivity(totalAct);
    setSpecificActivity(specAct);
    setActivityPerMl(actPerMl);
  };

  const clearFields = () => {
    setProductFormed('');
    setTime('');
    setEnzymeAmount('');
    setVolumeReaction('');
    setSpecificActivity(null);
    setTotalActivity(null);
    setActivityPerMl(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Product Formed (µmol)
          </label>
          <input
            type="number"
            step="any"
            value={productFormed}
            onChange={(e) => setProductFormed(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 15"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reaction Time (min)
          </label>
          <input
            type="number"
            step="any"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enzyme Amount (mg protein)
          </label>
          <input
            type="number"
            step="any"
            value={enzymeAmount}
            onChange={(e) => setEnzymeAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 0.5"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Total protein concentration in the assay
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reaction Volume (mL)
          </label>
          <input
            type="number"
            step="any"
            value={volumeReaction}
            onChange={(e) => setVolumeReaction(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 1.0"
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateEnzymeActivity}
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

        {totalActivity !== null && specificActivity !== null && activityPerMl !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Total Activity:</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold text-xl">
                  {totalActivity.toFixed(4)} Units
                </span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                (1 Unit = 1 µmol product/min)
              </p>
              
              <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Specific Activity:</span>{' '}
                  <span className="text-tertiary-600 dark:text-tertiary-400 font-bold text-xl">
                    {specificActivity.toFixed(4)} Units/mg
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Enzyme purity indicator
                </p>
              </div>

              <div className="pt-3 border-t border-gray-300 dark:border-gray-600">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Activity per Volume:</span>{' '}
                  <span className="text-tertiary-600 dark:text-tertiary-400 font-bold">
                    {activityPerMl.toFixed(4)} Units/mL
                  </span>
                </p>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: Specific Activity = (µmol/min) / mg protein
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
