'use client';

import React, { useState } from 'react';

type CalculationMode = 'rsConfiguration' | 'ezIsomerism' | 'chirality';

const StereochemistryCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('rsConfiguration');
  const [chiralCenters, setChiralCenters] = useState<string>('1');
  const [substituents, setSubstituents] = useState<string[]>(['', '', '', '']);
  const [priorities, setPriorities] = useState<string[]>(['', '', '', '']);
  const [configuration, setConfiguration] = useState<string>('');
  const [enantiomers, setEnantiomers] = useState<string>('');
  const [diastereomers, setDiastereomers] = useState<string>('');

  const calculateStereoisomers = (n: number): { enantiomers: number; diastereomers: number } => {
    const totalIsomers = Math.pow(2, n);
    const enantiomerPairs = totalIsomers / 2;
    const diastereomers = n > 1 ? totalIsomers - 2 : 0;
    return { enantiomers: enantiomerPairs * 2, diastereomers };
  };

  const determinePriority = (substituent: string): number => {
    // Simple atomic number-based priority (Cahn-Ingold-Prelog rules simplified)
    const atomicNumbers: { [key: string]: number } = {
      H: 1,
      C: 6,
      N: 7,
      O: 8,
      F: 9,
      P: 15,
      S: 16,
      Cl: 17,
      Br: 35,
      I: 53,
    };

    const firstAtom = substituent.trim().charAt(0).toUpperCase() + substituent.trim().charAt(1)?.toLowerCase() || '';
    return atomicNumbers[firstAtom] || atomicNumbers[substituent.trim().charAt(0)] || 0;
  };

  const calculate = () => {
    if (mode === 'chirality') {
      const n = parseInt(chiralCenters);
      if (isNaN(n) || n < 0) return;

      const result = calculateStereoisomers(n);
      setEnantiomers(result.enantiomers.toString());
      setDiastereomers(result.diastereomers.toString());
      setConfiguration(`${result.enantiomers} enantiomers (${result.enantiomers / 2} pairs)`);
    } else if (mode === 'rsConfiguration') {
      // Assign priorities based on atomic number
      const priorityNumbers = substituents.map((sub) => determinePriority(sub));
      const sortedIndices = priorityNumbers
        .map((p, i) => ({ priority: p, index: i }))
        .sort((a, b) => b.priority - a.priority)
        .map((item) => item.index);

      // Check if priorities are assigned (simplified check)
      if (sortedIndices.length === 4) {
        setConfiguration('Priority assigned. Use manual inspection for R/S determination.');
      }
    } else if (mode === 'ezIsomerism') {
      setConfiguration('E/Z determination requires manual geometric analysis');
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Alanine (1 chiral center)
      setMode('chirality');
      setChiralCenters('1');
    } else if (example === 2) {
      // Threonine (2 chiral centers)
      setMode('chirality');
      setChiralCenters('2');
    } else if (example === 3) {
      // Glucose (4 chiral centers)
      setMode('chirality');
      setChiralCenters('4');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      {/* Mode Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setMode('rsConfiguration')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'rsConfiguration'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">R/S Configuration</div>
            <div className="text-sm opacity-75">Cahn-Ingold-Prelog</div>
          </button>
          <button
            onClick={() => setMode('ezIsomerism')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'ezIsomerism'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">E/Z Isomerism</div>
            <div className="text-sm opacity-75">Alkene geometry</div>
          </button>
          <button
            onClick={() => setMode('chirality')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'chirality'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Stereoisomer Count</div>
            <div className="text-sm opacity-75">2<sup>n</sup> rule</div>
          </button>
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mode === 'chirality' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Chiral Centers
            </label>
            <input
              type="number"
              min="0"
              max="10"
              value={chiralCenters}
              onChange={(e) => setChiralCenters(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 2"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Maximum stereoisomers = 2<sup>n</sup>
            </p>
          </div>
        )}

        {mode === 'rsConfiguration' && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Substituent {i + 1}
                </label>
                <input
                  type="text"
                  value={substituents[i]}
                  onChange={(e) => {
                    const newSubs = [...substituents];
                    newSubs[i] = e.target.value;
                    setSubstituents(newSubs);
                  }}
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder={`e.g., ${['H', 'CH₃', 'OH', 'COOH'][i]}`}
                />
              </div>
            ))}
          </>
        )}
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
      >
        Calculate
      </button>

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Example Molecules
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => fillExample(1)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Alanine</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">1 chiral center</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Threonine</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">2 chiral centers</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Glucose</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">4 chiral centers</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(configuration || enantiomers || diastereomers) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enantiomers && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Enantiomers</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {enantiomers}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseInt(enantiomers) / 2} pairs (non-superimposable mirror images)
                </div>
              </div>
            )}

            {diastereomers && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Diastereomers</div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  {diastereomers}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Non-mirror image stereoisomers
                </div>
              </div>
            )}

            {configuration && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Configuration/Analysis</div>
                <div className="text-lg font-bold text-tertiary-600 dark:text-tertiary-400">
                  {configuration}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Stereochemistry Principles:</p>
              <p className="mb-2">
                <strong>Chiral centers:</strong> Carbons with 4 different substituents. Max stereoisomers = 2<sup>n</sup> (without meso compounds).
              </p>
              <p className="text-xs">
                <strong>R/S:</strong> Cahn-Ingold-Prelog priority rules. <strong>E/Z:</strong> Higher priority groups on same (Z) or opposite (E) sides.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
          Understanding Stereochemistry
        </h3>
        <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <p>
            <strong>Chirality:</strong> A molecule is chiral if it's non-superimposable on its mirror image. Chiral centers 
            (stereocenters) are typically sp³ carbons with 4 different groups.
          </p>
          <p>
            <strong>Enantiomers:</strong> Stereoisomers that are mirror images. They have identical physical properties except 
            rotation of plane-polarized light (optical activity). In biology, only one enantiomer is often active.
          </p>
          <p>
            <strong>Diastereomers:</strong> Stereoisomers that are NOT mirror images. They have different physical and chemical 
            properties (melting points, solubility, reactivity).
          </p>
          <p>
            <strong>R/S System:</strong> Absolute configuration based on Cahn-Ingold-Prelog priority rules. Higher atomic number 
            = higher priority. Clockwise (1→2→3 with lowest priority away) = R. Counterclockwise = S.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StereochemistryCalculator;
