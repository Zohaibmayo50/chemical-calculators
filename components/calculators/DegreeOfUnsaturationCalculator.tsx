'use client';

import React, { useState } from 'react';

export default function DegreeOfUnsaturationCalculator() {
  const [carbon, setCarbon] = useState<string>('');
  const [hydrogen, setHydrogen] = useState<string>('');
  const [nitrogen, setNitrogen] = useState<string>('');
  const [halogen, setHalogen] = useState<string>('');
  const [dbe, setDbe] = useState<number | null>(null);

  const calculateDegreeOfUnsaturation = () => {
    const C = parseFloat(carbon) || 0;
    const H = parseFloat(hydrogen) || 0;
    const N = parseFloat(nitrogen) || 0;
    const X = parseFloat(halogen) || 0;

    if (C < 0 || H < 0 || N < 0 || X < 0) {
      alert('Number of atoms cannot be negative.');
      return;
    }

    // DBE = (2C + 2 + N - H - X) / 2
    const degreeOfUnsaturation = (2 * C + 2 + N - H - X) / 2;

    if (degreeOfUnsaturation < 0) {
      alert('Invalid molecular formula. DBE cannot be negative. Please check your inputs.');
      return;
    }

    setDbe(degreeOfUnsaturation);
  };

  const clearFields = () => {
    setCarbon('');
    setHydrogen('');
    setNitrogen('');
    setHalogen('');
    setDbe(null);
  };

  const interpretDBE = (value: number): string[] => {
    const interpretations: string[] = [];
    
    if (value === 0) {
      interpretations.push('Saturated molecule (no rings or double bonds)');
      interpretations.push('Example: Alkane');
    } else if (value === 1) {
      interpretations.push('One ring OR one double bond');
      interpretations.push('Examples: Cyclopentane, 1-pentene');
    } else if (value === 2) {
      interpretations.push('Two rings OR two double bonds OR one triple bond OR one ring + one double bond');
      interpretations.push('Examples: Cyclohexene, 1,3-butadiene, 1-butyne');
    } else if (value === 3) {
      interpretations.push('Three degrees of unsaturation');
      interpretations.push('Examples: Cyclopropane + double bond, two double bonds + ring, one triple bond + ring');
    } else if (value === 4) {
      interpretations.push('Four degrees of unsaturation - often indicates a benzene ring');
      interpretations.push('Example: Benzene (C₆H₆)');
    } else if (value >= 5) {
      interpretations.push('High degree of unsaturation');
      interpretations.push('May indicate aromatic rings, multiple rings, or multiple bonds');
    }
    
    return interpretations;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Degree of Unsaturation (DBE):</strong> (2C + 2 + N - H - X) / 2<br/>
            <span className="text-xs">Where C = carbons, H = hydrogens, N = nitrogens, X = halogens (F, Cl, Br, I)<br/>
            Oxygen and sulfur are ignored in this formula.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Carbons (C)
            </label>
            <input
              type="number"
              step="1"
              value={carbon}
              onChange={(e) => setCarbon(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="e.g., 6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Hydrogens (H)
            </label>
            <input
              type="number"
              step="1"
              value={hydrogen}
              onChange={(e) => setHydrogen(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="e.g., 6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Nitrogens (N)
            </label>
            <input
              type="number"
              step="1"
              value={nitrogen}
              onChange={(e) => setNitrogen(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="e.g., 0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Optional - enter 0 if none
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Halogens (X: F, Cl, Br, I)
            </label>
            <input
              type="number"
              step="1"
              value={halogen}
              onChange={(e) => setHalogen(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="e.g., 0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Optional - enter 0 if none
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculateDegreeOfUnsaturation}
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

        {dbe !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-primary-200 dark:border-primary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Degree of Unsaturation (DBE):</span>{' '}
                <span className="text-primary-600 dark:text-primary-400 font-bold text-2xl">
                  {dbe}
                </span>
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {interpretDBE(dbe).map((interpretation, index) => (
                    <li key={index}>• {interpretation}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">What contributes to DBE:</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Each ring = 1 DBE</li>
                  <li>• Each double bond (C=C, C=O, C=N) = 1 DBE</li>
                  <li>• Each triple bond (C≡C, C≡N) = 2 DBE</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: DBE = (2C + 2 + N - H - X) / 2
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
