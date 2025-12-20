'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromBonds' | 'fromElectronegativity' | 'resultant';

interface Bond {
  element1: string;
  element2: string;
  electronegativity1: number;
  electronegativity2: number;
  bondLength: number;
}

const commonBonds: Bond[] = [
  { element1: 'H', element2: 'F', electronegativity1: 2.20, electronegativity2: 3.98, bondLength: 92 },
  { element1: 'H', element2: 'Cl', electronegativity1: 2.20, electronegativity2: 3.16, bondLength: 127 },
  { element1: 'H', element2: 'O', electronegativity1: 2.20, electronegativity2: 3.44, bondLength: 96 },
  { element1: 'C', element2: 'O', electronegativity1: 2.55, electronegativity2: 3.44, bondLength: 143 },
  { element1: 'C', element2: 'N', electronegativity1: 2.55, electronegativity2: 3.04, bondLength: 147 },
  { element1: 'N', element2: 'O', electronegativity1: 3.04, electronegativity2: 3.44, bondLength: 136 },
];

const DipoleMomentCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('fromElectronegativity');
  const [electronegativity1, setElectronegativity1] = useState<string>('');
  const [electronegativity2, setElectronegativity2] = useState<string>('');
  const [bondLength, setBondLength] = useState<string>('');
  const [dipoleMoment, setDipoleMoment] = useState<string>('');
  const [partialCharge, setPartialCharge] = useState<string>('');
  const [percentIonic, setPercentIonic] = useState<string>('');
  const [selectedBond, setSelectedBond] = useState<string>('');

  // Constants
  const ELECTRON_CHARGE = 1.602e-19; // Coulombs
  const DEBYE_CONVERSION = 3.336e-30; // C·m to Debye

  const calculate = () => {
    if (mode === 'fromElectronegativity') {
      const en1 = parseFloat(electronegativity1);
      const en2 = parseFloat(electronegativity2);
      const length = parseFloat(bondLength) * 1e-12; // pm to m
      
      if (isNaN(en1) || isNaN(en2) || isNaN(length)) return;
      
      // Calculate electronegativity difference
      const deltaEN = Math.abs(en2 - en1);
      
      // Estimate percent ionic character using Pauling's relationship
      // % ionic = 100 * [1 - exp(-0.25 * ΔEN²)]
      const percentIon = 100 * (1 - Math.exp(-0.25 * deltaEN * deltaEN));
      setPercentIonic(percentIon.toFixed(1));
      
      // Estimate partial charge (δ)
      // For simplicity, δ ≈ (% ionic / 100) * e
      const delta = (percentIon / 100);
      setPartialCharge(delta.toFixed(3));
      
      // Calculate dipole moment
      // μ = δ * e * d (in C·m)
      const muCm = delta * ELECTRON_CHARGE * length;
      
      // Convert to Debye (1 D = 3.336 × 10⁻³⁰ C·m)
      const muDebye = muCm / DEBYE_CONVERSION;
      setDipoleMoment(muDebye.toFixed(2));
      
    } else if (mode === 'fromBonds') {
      // Calculate resultant from multiple bond dipoles
      // This would require bond angles and geometry - simplified version
      const mu = parseFloat(dipoleMoment);
      if (isNaN(mu)) return;
      
      // Just showing the value for now
      setDipoleMoment(mu.toFixed(2));
    } else if (mode === 'resultant') {
      // Calculate resultant from vector components
      // Simplified - would need x, y, z components
      const mu = parseFloat(dipoleMoment);
      if (isNaN(mu)) return;
      
      setDipoleMoment(mu.toFixed(2));
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // H-F bond (highly polar)
      setMode('fromElectronegativity');
      setElectronegativity1('2.20'); // H
      setElectronegativity2('3.98'); // F
      setBondLength('92'); // pm
    } else if (example === 2) {
      // H-Cl bond
      setMode('fromElectronegativity');
      setElectronegativity1('2.20'); // H
      setElectronegativity2('3.16'); // Cl
      setBondLength('127'); // pm
    } else if (example === 3) {
      // C-O bond
      setMode('fromElectronegativity');
      setElectronegativity1('2.55'); // C
      setElectronegativity2('3.44'); // O
      setBondLength('143'); // pm
    }
  };

  const selectBond = (bond: Bond) => {
    setSelectedBond(`${bond.element1}-${bond.element2}`);
    setElectronegativity1(bond.electronegativity1.toString());
    setElectronegativity2(bond.electronegativity2.toString());
    setBondLength(bond.bondLength.toString());
    setMode('fromElectronegativity');
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
            onClick={() => setMode('fromElectronegativity')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromElectronegativity'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">From Electronegativity</div>
            <div className="text-sm opacity-75">μ from ΔEN</div>
          </button>
          <button
            onClick={() => setMode('fromBonds')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromBonds'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">From Bond Dipoles</div>
            <div className="text-sm opacity-75">Vector sum</div>
          </button>
          <button
            onClick={() => setMode('resultant')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'resultant'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Resultant Dipole</div>
            <div className="text-sm opacity-75">Molecular μ</div>
          </button>
        </div>
      </div>

      {/* Common Bonds Selection */}
      {mode === 'fromElectronegativity' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Common Bonds
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {commonBonds.map((bond) => (
              <button
                key={`${bond.element1}-${bond.element2}`}
                onClick={() => selectBond(bond)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedBond === `${bond.element1}-${bond.element2}`
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                <div className="font-semibold text-sm">{bond.element1}-{bond.element2}</div>
                <div className="text-xs opacity-75">ΔEN = {Math.abs(bond.electronegativity2 - bond.electronegativity1).toFixed(2)}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mode === 'fromElectronegativity' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Electronegativity 1 (Element A)
              </label>
              <input
                type="number"
                step="0.01"
                value={electronegativity1}
                onChange={(e) => setElectronegativity1(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 2.20 (H)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Electronegativity 2 (Element B)
              </label>
              <input
                type="number"
                step="0.01"
                value={electronegativity2}
                onChange={(e) => setElectronegativity2(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 3.98 (F)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bond Length (pm)
              </label>
              <input
                type="number"
                step="1"
                value={bondLength}
                onChange={(e) => setBondLength(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 92 pm for H-F"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                1 pm = 10⁻¹² m
              </p>
            </div>
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
          Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => fillExample(1)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">H-F Bond</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Highly polar</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">H-Cl Bond</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Polar covalent</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">C-O Bond</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Moderate polarity</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(dipoleMoment || partialCharge || percentIonic) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dipoleMoment && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Dipole Moment</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  μ = {dipoleMoment} D
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  1 Debye = 3.336 × 10⁻³⁰ C·m
                </div>
              </div>
            )}

            {partialCharge && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Partial Charge</div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  δ = ±{partialCharge}e
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Charge separation
                </div>
              </div>
            )}

            {percentIonic && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Ionic Character</div>
                <div className="text-2xl font-bold text-tertiary-600 dark:text-tertiary-400">
                  {percentIonic}% ionic
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(percentIonic) < 5 && 'Mostly covalent'}
                  {parseFloat(percentIonic) >= 5 && parseFloat(percentIonic) < 50 && 'Polar covalent'}
                  {parseFloat(percentIonic) >= 50 && 'Predominantly ionic'}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Dipole Moment Formula:</p>
              <p className="font-mono">μ = δ × e × d</p>
              <p className="mt-2 text-xs">
                Where δ is partial charge, e is elementary charge, and d is bond length. 
                Larger μ indicates more polar bond.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">
          Understanding Dipole Moments
        </h3>
        <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
          <p>
            <strong>Dipole Moment (μ):</strong> A measure of bond polarity. It's a vector quantity pointing from positive 
            to negative charge (δ⁺ → δ⁻). Units: Debye (D) or C·m.
          </p>
          <p>
            <strong>Electronegativity Difference (ΔEN):</strong> Larger ΔEN means more polar bond. ΔEN &gt; 1.7 typically 
            indicates ionic character. Pauling scale is most common.
          </p>
          <p>
            <strong>Molecular Polarity:</strong> Even with polar bonds, symmetric molecules (CO₂, CCl₄) have μ = 0 due to 
            vector cancellation. Asymmetric molecules (H₂O, NH₃) have net dipole moments.
          </p>
          <p>
            <strong>Applications:</strong> Dipole moments affect boiling points, solubility, intermolecular forces, and 
            spectroscopy (microwave, IR). Polar molecules dissolve in polar solvents ("like dissolves like").
          </p>
        </div>
      </div>
    </div>
  );
};

export default DipoleMomentCalculator;
