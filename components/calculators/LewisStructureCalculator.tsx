'use client';

import React, { useState } from 'react';

type CalculationMode = 'valence' | 'structure' | 'formalCharge';

interface Element {
  symbol: string;
  valenceElectrons: number;
}

const COMMON_ELEMENTS: Element[] = [
  { symbol: 'H', valenceElectrons: 1 },
  { symbol: 'C', valenceElectrons: 4 },
  { symbol: 'N', valenceElectrons: 5 },
  { symbol: 'O', valenceElectrons: 6 },
  { symbol: 'F', valenceElectrons: 7 },
  { symbol: 'P', valenceElectrons: 5 },
  { symbol: 'S', valenceElectrons: 6 },
  { symbol: 'Cl', valenceElectrons: 7 },
  { symbol: 'Br', valenceElectrons: 7 },
  { symbol: 'I', valenceElectrons: 7 },
];

export default function LewisStructureCalculator() {
  const [mode, setMode] = useState<CalculationMode>('valence');
  const [selectedElement, setSelectedElement] = useState('');
  const [atomCount, setAtomCount] = useState('');
  const [totalValence, setTotalValence] = useState('');
  const [bondingElectrons, setBondingElectrons] = useState('');
  const [charge, setCharge] = useState('');
  
  // Formal charge inputs
  const [formalValence, setFormalValence] = useState('');
  const [formalBonds, setFormalBonds] = useState('');
  const [formalLonePairs, setFormalLonePairs] = useState('');

  const loadExample = (exampleNum: number) => {
    setSelectedElement('');
    
    if (exampleNum === 1) {
      // H2O
      setMode('valence');
      setTotalValence('');
      // Will show how to calculate: 2H(1) + O(6) = 8 electrons
    } else if (exampleNum === 2) {
      // CO2
      setMode('structure');
      setTotalValence('16');
      setBondingElectrons('8');
      setCharge('0');
    } else if (exampleNum === 3) {
      // NH4+
      setMode('valence');
      setTotalValence('');
      setCharge('1');
    }
  };

  const calculateStructure = () => {
    const total = parseInt(totalValence);
    const bonding = parseInt(bondingElectrons);
    const chargeVal = parseInt(charge) || 0;
    
    if (isNaN(total) || isNaN(bonding) || total < 0 || bonding < 0) return null;
    
    const nonBonding = total - bonding;
    const bonds = bonding / 2;
    const lonePairCount = nonBonding / 2;
    
    return {
      totalElectrons: total,
      bondingElectrons: bonding,
      nonBondingElectrons: nonBonding,
      numberOfBonds: bonds,
      lonePairs: lonePairCount,
      charge: chargeVal,
    };
  };

  const calculateFormalCharge = () => {
    const v = parseInt(formalValence);
    const b = parseInt(formalBonds);
    const lp = parseInt(formalLonePairs);
    
    if (isNaN(v) || isNaN(b) || isNaN(lp)) return null;
    
    // FC = V - (L + B/2)
    // where V = valence electrons, L = lone pair electrons, B = bonding electrons
    const lonePairElectrons = lp * 2;
    const bondingElectrons = b * 2;
    const formalCharge = v - (lonePairElectrons + bondingElectrons / 2);
    
    return {
      formalCharge,
      valenceElectrons: v,
      lonePairElectrons,
      bondingElectrons,
      bondCount: b,
      lonePairCount: lp,
    };
  };

  const structureResult = mode === 'structure' ? calculateStructure() : null;
  const formalChargeResult = mode === 'formalCharge' ? calculateFormalCharge() : null;
  const selectedEl = COMMON_ELEMENTS.find(e => e.symbol === selectedElement);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Lewis Structure Calculator
        </h2>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          What would you like to calculate?
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMode('valence')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'valence'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Valence Electrons
          </button>
          <button
            onClick={() => setMode('structure')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'structure'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Structure Info
          </button>
          <button
            onClick={() => setMode('formalCharge')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'formalCharge'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Formal Charge
          </button>
        </div>
      </div>

      {/* Valence Electrons Mode */}
      {mode === 'valence' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select Element to See Valence Electrons
          </label>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {COMMON_ELEMENTS.map((el) => (
              <button
                key={el.symbol}
                onClick={() => setSelectedElement(el.symbol)}
                className={`p-3 rounded-lg font-medium transition-all ${
                  selectedElement === el.symbol
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {el.symbol}
              </button>
            ))}
          </div>

          {selectedEl && (
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedEl.symbol} - Valence Electrons
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded p-4">
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 text-center">
                  {selectedEl.valenceElectrons} electrons
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              How to Count Valence Electrons for Molecules
            </h4>
            <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <p><strong>Step 1:</strong> Add valence electrons from each atom</p>
              <p><strong>Step 2:</strong> Add electrons for negative charge (subtract for positive)</p>
              <p><strong>Example:</strong> H₂O = 2(1) + 1(6) = 8 electrons</p>
              <p><strong>Example:</strong> NH₄⁺ = 1(5) + 4(1) - 1 = 8 electrons</p>
            </div>
          </div>
        </div>
      )}

      {/* Structure Info Mode */}
      {mode === 'structure' && (
        <div className="mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Valence Electrons
              </label>
              <input
                type="number"
                value={totalValence}
                onChange={(e) => setTotalValence(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 16"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bonding Electrons
              </label>
              <input
                type="number"
                value={bondingElectrons}
                onChange={(e) => setBondingElectrons(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 8"
                min="0"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                2 electrons per bond
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Charge (optional)
              </label>
              <input
                type="number"
                value={charge}
                onChange={(e) => setCharge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0"
              />
            </div>
          </div>

          {structureResult && (
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Structure Analysis
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Electrons</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {structureResult.totalElectrons}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Number of Bonds</p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {structureResult.numberOfBonds}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lone Pairs</p>
                  <p className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                    {structureResult.lonePairs}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bonding Electrons</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {structureResult.bondingElectrons}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Non-bonding Electrons</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {structureResult.nonBondingElectrons}
                  </p>
                </div>
                {structureResult.charge !== 0 && (
                  <div className="bg-white dark:bg-gray-800 rounded p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Charge</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {structureResult.charge > 0 ? '+' : ''}{structureResult.charge}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Formal Charge Mode */}
      {mode === 'formalCharge' && (
        <div className="mb-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Valence Electrons
              </label>
              <input
                type="number"
                value={formalValence}
                onChange={(e) => setFormalValence(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 5"
                min="0"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                For the atom
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Bonds
              </label>
              <input
                type="number"
                value={formalBonds}
                onChange={(e) => setFormalBonds(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4"
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Lone Pairs
              </label>
              <input
                type="number"
                value={formalLonePairs}
                onChange={(e) => setFormalLonePairs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0"
                min="0"
              />
            </div>
          </div>

          {formalChargeResult && (
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Formal Charge Result
              </h3>
              <div className="bg-white dark:bg-gray-800 rounded p-6 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Formal Charge</p>
                <p className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {formalChargeResult.formalCharge > 0 ? '+' : ''}{formalChargeResult.formalCharge}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-4 space-y-2">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Calculation:</p>
                <p className="font-mono text-sm">FC = V - (L + B/2)</p>
                <p className="font-mono text-sm">
                  FC = {formalChargeResult.valenceElectrons} - ({formalChargeResult.lonePairElectrons} + {formalChargeResult.bondingElectrons}/2)
                </p>
                <p className="font-mono text-sm">
                  FC = {formalChargeResult.valenceElectrons} - {formalChargeResult.lonePairElectrons + formalChargeResult.bondingElectrons / 2}
                </p>
                <p className="font-mono text-sm font-bold">
                  FC = {formalChargeResult.formalCharge}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Try Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => loadExample(1)}
            className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all"
          >
            H₂O (Water)
          </button>
          <button
            onClick={() => loadExample(2)}
            className="p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all"
          >
            CO₂ (Carbon Dioxide)
          </button>
          <button
            onClick={() => loadExample(3)}
            className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
          >
            NH₄⁺ (Ammonium)
          </button>
        </div>
      </div>

      {/* Educational Info */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Lewis Structure Rules
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <p><strong>1. Octet Rule:</strong> Most atoms want 8 valence electrons (H wants 2)</p>
          <p><strong>2. Bonding:</strong> Each bond = 2 shared electrons (1 electron from each atom)</p>
          <p><strong>3. Lone Pairs:</strong> Non-bonding electron pairs on an atom</p>
          <p><strong>4. Formal Charge:</strong> FC = V - (L + B/2), where V = valence, L = lone pair e⁻, B = bonding e⁻</p>
          <p><strong>5. Best Structure:</strong> Minimize formal charges, place negative charge on most electronegative atom</p>
        </div>
      </div>
    </div>
  );
}
