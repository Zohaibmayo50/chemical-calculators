'use client';

import React, { useState } from 'react';

const FormalChargeCalculator: React.FC = () => {
  const [valenceElectrons, setValenceElectrons] = useState<string>('');
  const [nonBondingElectrons, setNonBondingElectrons] = useState<string>('');
  const [bondingElectrons, setBondingElectrons] = useState<string>('');
  const [bonds, setBonds] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const commonAtoms = [
    { symbol: 'H', name: 'Hydrogen', valence: 1, typical: 'H in H₂O: FC = 0' },
    { symbol: 'C', name: 'Carbon', valence: 4, typical: 'C in CH₄: FC = 0' },
    { symbol: 'N', name: 'Nitrogen', valence: 5, typical: 'N in NH₃: FC = 0' },
    { symbol: 'O', name: 'Oxygen', valence: 6, typical: 'O in H₂O: FC = 0' },
    { symbol: 'F', name: 'Fluorine', valence: 7, typical: 'F in HF: FC = 0' },
    { symbol: 'S', name: 'Sulfur', valence: 6, typical: 'S can expand octet' },
    { symbol: 'P', name: 'Phosphorus', valence: 5, typical: 'P can expand octet' },
    { symbol: 'Cl', name: 'Chlorine', valence: 7, typical: 'Cl in HCl: FC = 0' },
  ];

  const examples = [
    {
      name: 'H₂O (Oxygen)',
      valence: '6',
      nonBonding: '4',
      bonding: '4',
      description: 'Oxygen in water',
    },
    {
      name: 'NH₄⁺ (Nitrogen)',
      valence: '5',
      nonBonding: '0',
      bonding: '8',
      description: 'Nitrogen in ammonium',
    },
    {
      name: 'CO₃²⁻ (Oxygen, single bond)',
      valence: '6',
      nonBonding: '6',
      bonding: '2',
      description: 'Terminal oxygen in carbonate',
    },
    {
      name: 'NO₃⁻ (Nitrogen)',
      valence: '5',
      nonBonding: '0',
      bonding: '8',
      description: 'Nitrogen in nitrate',
    },
    {
      name: 'O₃ (Central oxygen)',
      valence: '6',
      nonBonding: '2',
      bonding: '6',
      description: 'Central O in ozone',
    },
    {
      name: 'CN⁻ (Carbon)',
      valence: '4',
      nonBonding: '2',
      bonding: '6',
      description: 'Carbon in cyanide',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const V = parseFloat(valenceElectrons);
      const N = parseFloat(nonBondingElectrons);
      const B = parseFloat(bondingElectrons);

      if (isNaN(V) || V < 0) throw new Error('Please enter valid number of valence electrons');
      if (isNaN(N) || N < 0) throw new Error('Please enter valid number of non-bonding electrons');
      if (isNaN(B) || B < 0 || B % 2 !== 0) {
        throw new Error('Bonding electrons must be an even number (2 per bond)');
      }

      // Formal charge formula: FC = V - N - B/2
      const formalCharge = V - N - (B / 2);
      
      // Calculate number of bonds
      const numberOfBonds = B / 2;

      // Determine interpretation
      let interpretation = '';
      if (formalCharge === 0) {
        interpretation = 'Neutral - this is the most stable configuration';
      } else if (formalCharge > 0) {
        interpretation = `Positive charge (+${formalCharge}) - atom has fewer electrons than neutral`;
      } else {
        interpretation = `Negative charge (${formalCharge}) - atom has more electrons than neutral`;
      }

      // Check octet rule (for second period elements)
      const totalElectrons = N + B;
      let octetStatus = '';
      if (V <= 2) {
        octetStatus = totalElectrons === 2 ? 'Duet complete ✓' : 'Duet incomplete';
      } else if (V <= 8) {
        if (totalElectrons === 8) octetStatus = 'Octet complete ✓';
        else if (totalElectrons < 8) octetStatus = `Octet incomplete (${totalElectrons}/8)`;
        else octetStatus = `Expanded octet (${totalElectrons} electrons)`;
      } else {
        octetStatus = totalElectrons >= 8 ? 'Can accommodate expanded octet' : 'Electrons around atom: ' + totalElectrons;
      }

      setResult({
        formalCharge,
        numberOfBonds,
        totalElectrons,
        interpretation,
        octetStatus,
        V,
        N,
        B,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setValenceElectrons(example.valence);
    setNonBondingElectrons(example.nonBonding);
    setBondingElectrons(example.bonding);
    setBonds('');
    setError('');
    setResult(null);
  };

  const selectAtom = (atom: typeof commonAtoms[0]) => {
    setValenceElectrons(atom.valence.toString());
  };

  const calculateFromBonds = () => {
    const numBonds = parseFloat(bonds);
    if (!isNaN(numBonds) && numBonds >= 0) {
      setBondingElectrons((numBonds * 2).toString());
    }
  };

  const clearFields = () => {
    setValenceElectrons('');
    setNonBondingElectrons('');
    setBondingElectrons('');
    setBonds('');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            FC = V - N - B/2
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate formal charge to determine electron distribution in Lewis structures.
          </p>
        </div>

        {/* Common Atoms */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Select Atom (sets valence electrons):
          </h4>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {commonAtoms.map((atom, index) => (
              <button
                key={index}
                onClick={() => selectAtom(atom)}
                className="p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow text-center"
                title={atom.typical}
              >
                <div className="font-bold text-lg text-gray-900 dark:text-white">
                  {atom.symbol}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  V = {atom.valence}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Example Molecules */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Atoms:
          </h4>
          <div className="grid md:grid-cols-3 gap-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => fillExample(example)}
                className="text-left p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {example.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {example.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Valence Electrons (V)
            </label>
            <input
              type="number"
              value={valenceElectrons}
              onChange={(e) => setValenceElectrons(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 6 for oxygen"
              min="0"
              step="1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Number of electrons in outer shell of neutral atom
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Non-Bonding Electrons (N)
            </label>
            <input
              type="number"
              value={nonBondingElectrons}
              onChange={(e) => setNonBondingElectrons(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 4 (two lone pairs)"
              min="0"
              step="2"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Lone pair electrons (usually even number)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Bonds
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={bonds}
                onChange={(e) => setBonds(e.target.value)}
                onBlur={calculateFromBonds}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 2 bonds"
                min="0"
                step="1"
              />
              <button
                onClick={calculateFromBonds}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-sm"
              >
                → B
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Total bonds (single + double + triple)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bonding Electrons (B)
            </label>
            <input
              type="number"
              value={bondingElectrons}
              onChange={(e) => setBondingElectrons(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 4 (2 bonds × 2e⁻)"
              min="0"
              step="2"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Total electrons in bonds (must be even)
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Formal Charge:</p>
                <p className="text-5xl font-bold text-center">
                  {result.formalCharge > 0 && '+'}
                  {result.formalCharge === 0 ? (
                    <span className="text-green-600 dark:text-green-400">0</span>
                  ) : result.formalCharge > 0 ? (
                    <span className="text-blue-600 dark:text-blue-400">{result.formalCharge}</span>
                  ) : (
                    <span className="text-red-600 dark:text-red-400">{result.formalCharge}</span>
                  )}
                </p>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {result.interpretation}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Calculation:</p>
                  <p className="font-mono text-sm">
                    FC = V - N - B/2
                  </p>
                  <p className="font-mono text-sm">
                    FC = {result.V} - {result.N} - {result.B}/2
                  </p>
                  <p className="font-mono text-sm">
                    FC = {result.V} - {result.N} - {result.B / 2}
                  </p>
                  <p className="font-mono text-sm font-bold">
                    FC = {result.formalCharge}
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Bond Information:</p>
                  <div className="space-y-1 text-sm">
                    <div><strong>Number of bonds:</strong> {result.numberOfBonds}</div>
                    <div><strong>Total electrons:</strong> {result.totalElectrons}</div>
                    <div><strong>Octet status:</strong> {result.octetStatus}</div>
                  </div>
                </div>
              </div>

              {result.formalCharge !== 0 && (
                <div className={`p-4 rounded-lg border-l-4 ${
                  result.formalCharge > 0 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500' 
                    : 'bg-red-50 dark:bg-red-900/20 border-red-500'
                }`}>
                  <p className="text-sm font-semibold mb-1">
                    {result.formalCharge > 0 ? 'Positive Formal Charge:' : 'Negative Formal Charge:'}
                  </p>
                  <p className="text-xs">
                    {result.formalCharge > 0 
                      ? 'This atom shares more electrons than it owns. Structures with minimal formal charges are generally more stable.'
                      : 'This atom owns more electrons than it shares. More electronegative atoms can better accommodate negative charges.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Formal Charge
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Formal charge</strong> is a bookkeeping tool to track electron distribution in Lewis structures. 
              It helps identify the most stable resonance structures.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>V:</strong> Valence electrons of the neutral atom</li>
              <li><strong>N:</strong> Non-bonding (lone pair) electrons</li>
              <li><strong>B:</strong> Bonding electrons (count all electrons in bonds)</li>
              <li><strong>B/2:</strong> Each bond "assigns" half its electrons to each atom</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Best Structures:</strong> Minimize formal charges (aim for 0). Place negative charges on 
                electronegative atoms. Avoid adjacent like charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormalChargeCalculator;
