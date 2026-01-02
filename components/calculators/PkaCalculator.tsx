'use client';

import { useState } from 'react';

export default function PkaCalculator() {
  const [ka, setKa] = useState('');
  const [pka, setPka] = useState('');
  const [result, setResult] = useState<{
    pka?: number;
    ka?: number;
    type: string;
  } | null>(null);

  const calculateFromKa = () => {
    const kaValue = parseFloat(ka);
    if (isNaN(kaValue) || kaValue <= 0) {
      alert('Please enter a valid Ka value (must be positive)');
      return;
    }

    const pkaValue = -Math.log10(kaValue);
    setResult({
      pka: pkaValue,
      ka: kaValue,
      type: 'from-ka'
    });
  };

  const calculateFromPka = () => {
    const pkaValue = parseFloat(pka);
    if (isNaN(pkaValue)) {
      alert('Please enter a valid pKa value');
      return;
    }

    const kaValue = Math.pow(10, -pkaValue);
    setResult({
      pka: pkaValue,
      ka: kaValue,
      type: 'from-pka'
    });
  };

  const reset = () => {
    setKa('');
    setPka('');
    setResult(null);
  };

  const getAcidStrength = (pkaVal: number) => {
    if (pkaVal < 0) return { label: 'Very Strong Acid', color: 'text-red-600' };
    if (pkaVal < 2) return { label: 'Strong Acid', color: 'text-red-500' };
    if (pkaVal < 7) return { label: 'Weak Acid', color: 'text-orange-500' };
    if (pkaVal < 12) return { label: 'Very Weak Acid', color: 'text-yellow-600' };
    return { label: 'Extremely Weak Acid', color: 'text-green-600' };
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl">⚗️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">pKa Calculator</h2>
      </div>

      <div className="space-y-6">
        {/* Ka to pKa Section */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Calculate pKa from Ka</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ka (Acid Dissociation Constant)
              </label>
              <input
                type="text"
                value={ka}
                onChange={(e) => setKa(e.target.value)}
                placeholder="e.g., 1.8e-5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Enter in scientific notation (e.g., 1.8e-5) or decimal format
              </p>
            </div>
            <button
              onClick={calculateFromKa}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Calculate pKa
            </button>
          </div>
        </div>

        {/* pKa to Ka Section */}
        <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/30 dark:to-primary-900/30 rounded-xl p-6 border-2 border-accent-200 dark:border-accent-700">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Calculate Ka from pKa</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKa Value
              </label>
              <input
                type="number"
                step="0.01"
                value={pka}
                onChange={(e) => setPka(e.target.value)}
                placeholder="e.g., 4.76"
                className="w-full px-4 py-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>
            <button
              onClick={calculateFromPka}
              className="w-full bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Calculate Ka
            </button>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-green-600">✓</span>
              Results
            </h3>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Ka (Acid Dissociation Constant)</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.ka!.toExponential(3)}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">pKa</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {result.pka!.toFixed(2)}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Acid Strength</p>
                <p className={`text-xl font-bold ${getAcidStrength(result.pka!).color}`}>
                  {getAcidStrength(result.pka!).label}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Lower pKa = stronger acid
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Reset Button */}
        {result && (
          <button
            onClick={reset}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Reset Calculator
          </button>
        )}
      </div>

      {/* Quick Reference */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Reference</h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white">Strong Acids</p>
            <p className="text-gray-600 dark:text-gray-400">pKa &lt; 0 (HCl, H₂SO₄)</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
            <p className="font-semibold text-gray-900 dark:text-white">Weak Acids</p>
            <p className="text-gray-600 dark:text-gray-400">pKa 2-7 (Acetic acid: 4.76)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
