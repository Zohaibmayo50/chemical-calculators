'use client';

import { useState } from 'react';

interface Isotope {
  id: number;
  mass: string;
  abundance: string;
}

export default function AtomicMassCalculator() {
  const [isotopes, setIsotopes] = useState<Isotope[]>([
    { id: 1, mass: '', abundance: '' },
    { id: 2, mass: '', abundance: '' }
  ]);
  const [atomicMass, setAtomicMass] = useState<number | null>(null);

  const addIsotope = () => {
    const newId = isotopes.length > 0 ? Math.max(...isotopes.map(i => i.id)) + 1 : 1;
    setIsotopes([...isotopes, { id: newId, mass: '', abundance: '' }]);
  };

  const removeIsotope = (id: number) => {
    if (isotopes.length > 2) {
      setIsotopes(isotopes.filter(isotope => isotope.id !== id));
    }
  };

  const updateIsotope = (id: number, field: 'mass' | 'abundance', value: string) => {
    setIsotopes(isotopes.map(isotope =>
      isotope.id === id ? { ...isotope, [field]: value } : isotope
    ));
  };

  const calculate = () => {
    // Validate all inputs
    const validIsotopes = isotopes.filter(isotope => {
      const mass = parseFloat(isotope.mass);
      const abundance = parseFloat(isotope.abundance);
      return !isNaN(mass) && !isNaN(abundance) && mass > 0 && abundance >= 0;
    });

    if (validIsotopes.length < 2) {
      alert('Please enter at least 2 valid isotopes');
      return;
    }

    // Check if abundances sum to 100
    const totalAbundance = validIsotopes.reduce((sum, isotope) => 
      sum + parseFloat(isotope.abundance), 0
    );

    if (Math.abs(totalAbundance - 100) > 0.01) {
      alert(`Abundances must sum to 100%. Current sum: ${totalAbundance.toFixed(2)}%`);
      return;
    }

    // Calculate weighted average
    const weightedSum = validIsotopes.reduce((sum, isotope) => {
      const mass = parseFloat(isotope.mass);
      const abundance = parseFloat(isotope.abundance);
      return sum + (mass * abundance / 100);
    }, 0);

    setAtomicMass(weightedSum);
  };

  const reset = () => {
    setIsotopes([
      { id: 1, mass: '', abundance: '' },
      { id: 2, mass: '', abundance: '' }
    ]);
    setAtomicMass(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
          ⚛️
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Atomic Mass Calculator
        </h2>
      </div>

      <div className="space-y-4">
        {/* Isotopes */}
        {isotopes.map((isotope, index) => (
          <div key={isotope.id} className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-4 border border-primary-200 dark:border-primary-700">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Isotope {index + 1}
              </h3>
              {isotopes.length > 2 && (
                <button
                  onClick={() => removeIsotope(isotope.id)}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-semibold"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mass (amu)
                </label>
                <input
                  type="number"
                  step="0.000001"
                  value={isotope.mass}
                  onChange={(e) => updateIsotope(isotope.id, 'mass', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors"
                  placeholder="e.g., 12.000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Abundance (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={isotope.abundance}
                  onChange={(e) => updateIsotope(isotope.id, 'abundance', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-colors"
                  placeholder="e.g., 98.93"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add Isotope Button */}
        <button
          onClick={addIsotope}
          className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
        >
          + Add Isotope
        </button>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
        >
          Calculate Atomic Mass
        </button>

        {/* Results */}
        {atomicMass !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl border-2 border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Results</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Average Atomic Mass:</span>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {atomicMass.toFixed(6)} amu
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {atomicMass !== null && (
          <button
            onClick={reset}
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          >
            Reset Calculator
          </button>
        )}

        {/* Quick Reference */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-lg">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Quick Reference</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-400 space-y-1">
            <li>• <strong>Carbon-12:</strong> 98.93% at 12.000000 amu</li>
            <li>• <strong>Carbon-13:</strong> 1.07% at 13.003355 amu</li>
            <li>• <strong>Carbon avg:</strong> 12.011 amu</li>
            <li>• Abundances must sum to 100%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
