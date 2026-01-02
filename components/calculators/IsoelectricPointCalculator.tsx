'use client';

import React, { useState } from 'react';

export default function IsoelectricPointCalculator() {
  const [pka1, setPka1] = useState<string>('');
  const [pka2, setPka2] = useState<string>('');
  const [pka3, setPka3] = useState<string>('');
  const [aminoAcidType, setAminoAcidType] = useState<string>('neutral');
  const [pI, setPI] = useState<number | null>(null);

  const calculatePI = () => {
    const pk1 = parseFloat(pka1);
    const pk2 = parseFloat(pka2);

    if (isNaN(pk1) || isNaN(pk2)) {
      alert('Please enter valid pKa values.');
      return;
    }

    let isoelectricPoint: number;

    if (aminoAcidType === 'neutral') {
      // For neutral amino acids: pI = (pKa1 + pKa2) / 2
      // pKa1 = α-COOH, pKa2 = α-NH3+
      isoelectricPoint = (pk1 + pk2) / 2;
    } else if (aminoAcidType === 'acidic') {
      // For acidic amino acids (Asp, Glu): pI = (pKa1 + pKa_R) / 2
      // Uses the two carboxyl groups
      isoelectricPoint = (pk1 + pk2) / 2;
    } else if (aminoAcidType === 'basic') {
      // For basic amino acids (Lys, Arg, His): pI = (pKa2 + pKa_R) / 2
      // Uses α-NH3+ and R-group
      const pk3 = parseFloat(pka3);
      if (isNaN(pk3)) {
        alert('Please enter pKa3 for basic amino acids.');
        return;
      }
      isoelectricPoint = (pk2 + pk3) / 2;
    } else {
      isoelectricPoint = (pk1 + pk2) / 2;
    }

    setPI(isoelectricPoint);
  };

  const clearFields = () => {
    setPka1('');
    setPka2('');
    setPka3('');
    setAminoAcidType('neutral');
    setPI(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Amino Acid Type
          </label>
          <select
            value={aminoAcidType}
            onChange={(e) => setAminoAcidType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
          >
            <option value="neutral">Neutral (most amino acids)</option>
            <option value="acidic">Acidic (Asp, Glu)</option>
            <option value="basic">Basic (Lys, Arg, His)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            pKa1 (α-COOH)
          </label>
          <input
            type="number"
            step="any"
            value={pka1}
            onChange={(e) => setPka1(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 2.34"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            pKa of the carboxyl group
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            pKa2 (α-NH<sub>3</sub><sup>+</sup> or R-group)
          </label>
          <input
            type="number"
            step="any"
            value={pka2}
            onChange={(e) => setPka2(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="e.g., 9.69"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            pKa of the amino group or side chain
          </p>
        </div>

        {aminoAcidType === 'basic' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              pKa3 (R-group)
            </label>
            <input
              type="number"
              step="any"
              value={pka3}
              onChange={(e) => setPka3(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
              placeholder="e.g., 10.53"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              pKa of the basic side chain
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={calculatePI}
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

        {pI !== null && (
          <div className="mt-6 p-6 bg-gradient-to-br from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border-2 border-tertiary-200 dark:border-tertiary-600 animate-slide-in-up">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Results
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Isoelectric Point (pI):</span>{' '}
                <span className="text-tertiary-600 dark:text-tertiary-400 font-bold text-2xl">
                  {pI.toFixed(2)}
                </span>
              </p>
              
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>At pH = {pI.toFixed(2)}:</strong> The amino acid has zero net charge
                </p>
                <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• pH &lt; {pI.toFixed(2)}: Net positive charge (cation)</li>
                  <li>• pH &gt; {pI.toFixed(2)}: Net negative charge (anion)</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Formula: pI = (pKa<sub>1</sub> + pKa<sub>2</sub>) / 2
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
