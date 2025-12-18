'use client';

import { useState } from 'react';

export default function MassPercentCalculator() {
  const [massSolute, setMassSolute] = useState<string>('');
  const [massSolvent, setMassSolvent] = useState<string>('');
  const [massPercent, setMassPercent] = useState<number | null>(null);
  const [calculationType, setCalculationType] = useState<'calculate-percent' | 'calculate-solute' | 'calculate-solution'>('calculate-percent');

  const calculateMassPercent = () => {
    const mSolute = parseFloat(massSolute);
    const mSolvent = parseFloat(massSolvent);

    if (isNaN(mSolute) || isNaN(mSolvent)) {
      alert('Please enter valid numbers for mass of solute and solvent');
      return;
    }

    if (mSolute < 0 || mSolvent < 0) {
      alert('Mass values must be positive');
      return;
    }

    const totalMass = mSolute + mSolvent;
    const percent = (mSolute / totalMass) * 100;
    setMassPercent(percent);
  };

  const calculateSoluteMass = () => {
    const percent = parseFloat(massSolute); // Using massSolute field for percent
    const mSolution = parseFloat(massSolvent); // Using massSolvent field for total mass

    if (isNaN(percent) || isNaN(mSolution)) {
      alert('Please enter valid numbers for mass percent and total solution mass');
      return;
    }

    if (percent < 0 || percent > 100 || mSolution < 0) {
      alert('Mass percent must be 0-100% and solution mass must be positive');
      return;
    }

    const mSolute = (percent / 100) * mSolution;
    setMassPercent(mSolute);
  };

  const calculateSolutionMass = () => {
    const mSolute = parseFloat(massSolute);
    const percent = parseFloat(massSolvent); // Using massSolvent field for percent

    if (isNaN(mSolute) || isNaN(percent)) {
      alert('Please enter valid numbers for solute mass and mass percent');
      return;
    }

    if (mSolute < 0 || percent < 0 || percent > 100) {
      alert('Values must be positive and percent must be 0-100%');
      return;
    }

    const mSolution = (mSolute / percent) * 100;
    setMassPercent(mSolution);
  };

  const handleCalculate = () => {
    if (calculationType === 'calculate-percent') {
      calculateMassPercent();
    } else if (calculationType === 'calculate-solute') {
      calculateSoluteMass();
    } else {
      calculateSolutionMass();
    }
  };

  const reset = () => {
    setMassSolute('');
    setMassSolvent('');
    setMassPercent(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mass Percent Calculator</h2>

      {/* Calculation Type Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What do you want to calculate?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => { setCalculationType('calculate-percent'); reset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationType === 'calculate-percent'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Mass %
          </button>
          <button
            onClick={() => { setCalculationType('calculate-solute'); reset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationType === 'calculate-solute'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Solute Mass
          </button>
          <button
            onClick={() => { setCalculationType('calculate-solution'); reset(); }}
            className={`px-4 py-3 rounded-lg font-medium transition-colors ${
              calculationType === 'calculate-solution'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Solution Mass
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-4 mb-6">
        {calculationType === 'calculate-percent' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass of Solute (g)
              </label>
              <input
                type="number"
                value={massSolute}
                onChange={(e) => setMassSolute(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter mass of solute (g)"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass of Solvent (g)
              </label>
              <input
                type="number"
                value={massSolvent}
                onChange={(e) => setMassSolvent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter mass of solvent (g)"
                step="0.01"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Total solution mass = solute mass + solvent mass
              </p>
            </div>
          </>
        )}

        {calculationType === 'calculate-solute' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass Percent (%)
              </label>
              <input
                type="number"
                value={massSolute}
                onChange={(e) => setMassSolute(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter mass percent"
                step="0.1"
                min="0"
                max="100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Solution Mass (g)
              </label>
              <input
                type="number"
                value={massSolvent}
                onChange={(e) => setMassSolvent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter total solution mass (g)"
                step="0.01"
              />
            </div>
          </>
        )}

        {calculationType === 'calculate-solution' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass of Solute (g)
              </label>
              <input
                type="number"
                value={massSolute}
                onChange={(e) => setMassSolute(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter mass of solute (g)"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass Percent (%)
              </label>
              <input
                type="number"
                value={massSolvent}
                onChange={(e) => setMassSolvent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Enter desired mass percent"
                step="0.1"
                min="0"
                max="100"
              />
            </div>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Result */}
      {massPercent !== null && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-lg">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">Result:</h3>
          {calculationType === 'calculate-percent' && (
            <>
              <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                Mass Percent = {massPercent.toFixed(2)}%
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Total Solution Mass = {(parseFloat(massSolute) + parseFloat(massSolvent)).toFixed(2)} g
              </p>
            </>
          )}
          {calculationType === 'calculate-solute' && (
            <p className="text-2xl font-bold text-green-800 dark:text-green-200">
              Mass of Solute = {massPercent.toFixed(2)} g
            </p>
          )}
          {calculationType === 'calculate-solution' && (
            <>
              <p className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                Total Solution Mass = {massPercent.toFixed(2)} g
              </p>
              <p className="text-sm text-green-700 dark:text-green-300">
                Mass of Solvent = {(massPercent - parseFloat(massSolute)).toFixed(2)} g
              </p>
            </>
          )}
        </div>
      )}

      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Common Mass Percent Solutions:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-blue-800 dark:text-blue-400">
          <div><strong>Saline solution:</strong> 0.9% NaCl</div>
          <div><strong>Hydrogen peroxide:</strong> 3% H₂O₂</div>
          <div><strong>Vinegar:</strong> 5% acetic acid</div>
          <div><strong>Rubbing alcohol:</strong> 70% isopropanol</div>
          <div><strong>Bleach:</strong> 5-8% NaOCl</div>
          <div><strong>Sugar water:</strong> 10-20% sucrose</div>
        </div>
      </div>
    </div>
  );
}
