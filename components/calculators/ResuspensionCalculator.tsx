'use client';

import React, { useState } from 'react';

export default function ResuspensionCalculator() {
  const [pelletWeight, setPelletWeight] = useState<string>('');
  const [desiredConcentration, setDesiredConcentration] = useState<string>('');
  const [molecularWeight, setMolecularWeight] = useState<string>('');
  const [volumeToAdd, setVolumeToAdd] = useState<number | null>(null);
  const [finalMolarity, setFinalMolarity] = useState<number | null>(null);

  const calculateResuspension = () => {
    const weight = parseFloat(pelletWeight);
    const targetConc = parseFloat(desiredConcentration);
    const mw = parseFloat(molecularWeight);

    if (isNaN(weight) || isNaN(targetConc) || isNaN(mw)) {
      alert('Please enter valid values for all fields.');
      return;
    }

    if (weight <= 0 || targetConc <= 0 || mw <= 0) {
      alert('All values must be positive.');
      return;
    }

    // Calculate volume needed
    // Concentration (mg/mL) = weight (mg) / volume (mL)
    // Volume (mL) = weight (mg) / concentration (mg/mL)
    const volume = weight / targetConc;

    // Calculate molarity
    // Molarity (M) = (weight in mg / MW in g/mol) / (volume in mL) * 1000
    const molarity = (weight / mw) / volume;

    setVolumeToAdd(volume);
    setFinalMolarity(molarity);
  };

  const clearFields = () => {
    setPelletWeight('');
    setDesiredConcentration('');
    setMolecularWeight('');
    setVolumeToAdd(null);
    setFinalMolarity(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pellet/Powder Weight (mg)
          </label>
          <input
            type="number"
            step="any"
            value={pelletWeight}
            onChange={(e) => setPelletWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 50"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Weight of protein, DNA, or compound to resuspend
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Desired Concentration (mg/mL)
          </label>
          <input
            type="number"
            step="any"
            value={desiredConcentration}
            onChange={(e) => setDesiredConcentration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molecular Weight (g/mol) - Optional
          </label>
          <input
            type="number"
            step="any"
            value={molecularWeight}
            onChange={(e) => setMolecularWeight(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 66000"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter to calculate molarity (e.g., 66 kDa protein = 66000 g/mol)
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateResuspension}
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

        {volumeToAdd !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Volume to Add:</span>
                </p>
                <p className="text-tertiary-600 dark:text-tertiary-400 font-bold text-3xl">
                  {volumeToAdd.toFixed(3)} mL
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  = {(volumeToAdd * 1000).toFixed(1)} µL
                </p>
              </div>

              {finalMolarity !== null && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <span className="font-semibold">Final Molarity:</span>
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                    {finalMolarity >= 0.001 ? `${finalMolarity.toFixed(4)} M` : 
                     finalMolarity >= 0.000001 ? `${(finalMolarity * 1000).toFixed(4)} mM` :
                     `${(finalMolarity * 1000000).toFixed(4)} µM`}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {finalMolarity >= 0.001 ? `= ${(finalMolarity * 1000).toFixed(2)} mM` :
                     finalMolarity >= 0.000001 ? `= ${(finalMolarity * 1000000).toFixed(2)} µM` : ''}
                  </p>
                </div>
              )}

              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  📋 Protocol:
                </p>
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-1 list-decimal list-inside">
                  <li>Add {volumeToAdd < 1 ? `${(volumeToAdd * 1000).toFixed(0)} µL` : `${volumeToAdd.toFixed(2)} mL`} of buffer/solvent to the pellet</li>
                  <li>Mix gently by pipetting or vortexing</li>
                  <li>Allow to dissolve completely (may take several minutes)</li>
                  <li>Centrifuge briefly if needed to collect all liquid</li>
                  <li>Verify concentration by spectrophotometry if critical</li>
                </ol>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: Volume (mL) = Weight (mg) / Concentration (mg/mL)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
