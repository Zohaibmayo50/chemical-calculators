'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromKsp' | 'toKsp' | 'commonIon';

interface CommonCompound {
  name: string;
  formula: string;
  ksp: number;
  cation: string;
  anion: string;
  ratio: string;
}

const COMMON_COMPOUNDS: CommonCompound[] = [
  { name: 'Silver chloride', formula: 'AgCl', ksp: 1.77e-10, cation: 'Ag⁺', anion: 'Cl⁻', ratio: '1:1' },
  { name: 'Lead(II) chloride', formula: 'PbCl₂', ksp: 1.17e-5, cation: 'Pb²⁺', anion: 'Cl⁻', ratio: '1:2' },
  { name: 'Calcium fluoride', formula: 'CaF₂', ksp: 3.45e-11, cation: 'Ca²⁺', anion: 'F⁻', ratio: '1:2' },
  { name: 'Barium sulfate', formula: 'BaSO₄', ksp: 1.08e-10, cation: 'Ba²⁺', anion: 'SO₄²⁻', ratio: '1:1' },
  { name: 'Silver chromate', formula: 'Ag₂CrO₄', ksp: 1.12e-12, cation: 'Ag⁺', anion: 'CrO₄²⁻', ratio: '2:1' },
  { name: 'Magnesium hydroxide', formula: 'Mg(OH)₂', ksp: 5.61e-12, cation: 'Mg²⁺', anion: 'OH⁻', ratio: '1:2' },
  { name: 'Calcium carbonate', formula: 'CaCO₃', ksp: 3.36e-9, cation: 'Ca²⁺', anion: 'CO₃²⁻', ratio: '1:1' },
  { name: 'Iron(III) hydroxide', formula: 'Fe(OH)₃', ksp: 2.79e-39, cation: 'Fe³⁺', anion: 'OH⁻', ratio: '1:3' },
];

export default function SolubilityCalculator() {
  const [mode, setMode] = useState<CalculationMode>('fromKsp');
  const [selectedCompound, setSelectedCompound] = useState('');
  const [ksp, setKsp] = useState('');
  const [cationCoeff, setCationCoeff] = useState('');
  const [anionCoeff, setAnionCoeff] = useState('');
  const [commonIonConc, setCommonIonConc] = useState('');

  const loadExample = (exampleNum: number) => {
    setSelectedCompound('');
    
    if (exampleNum === 1) {
      // AgCl
      setMode('fromKsp');
      setKsp('1.77e-10');
      setCationCoeff('1');
      setAnionCoeff('1');
    } else if (exampleNum === 2) {
      // PbCl2
      setMode('fromKsp');
      setKsp('1.17e-5');
      setCationCoeff('1');
      setAnionCoeff('2');
    } else if (exampleNum === 3) {
      // AgCl with common ion
      setMode('commonIon');
      setKsp('1.77e-10');
      setCationCoeff('1');
      setAnionCoeff('1');
      setCommonIonConc('0.1');
    }
  };

  const loadCompound = (compound: CommonCompound) => {
    setSelectedCompound(compound.name);
    setKsp(compound.ksp.toExponential());
    const [cation, anion] = compound.ratio.split(':');
    setCationCoeff(cation);
    setAnionCoeff(anion);
  };

  const calculateSolubility = () => {
    const kspVal = parseFloat(ksp);
    const a = parseInt(cationCoeff);
    const b = parseInt(anionCoeff);
    
    if (isNaN(kspVal) || isNaN(a) || isNaN(b) || kspVal <= 0 || a <= 0 || b <= 0) return null;
    
    let molarSolubility: number;
    
    if (mode === 'commonIon') {
      const commonIon = parseFloat(commonIonConc);
      if (isNaN(commonIon) || commonIon < 0) return null;
      
      // Simplified calculation assuming common ion is in large excess
      // For A_aB_b: Ksp = [A]^a × [B]^b
      // If B is common ion at concentration C: Ksp = [A]^a × C^b
      // [A] = (Ksp / C^b)^(1/a)
      molarSolubility = Math.pow(kspVal / Math.pow(commonIon, b), 1/a);
    } else {
      // For A_aB_b ⇌ aA + bB
      // Ksp = (as)^a × (bs)^b = a^a × b^b × s^(a+b)
      // s = [Ksp / (a^a × b^b)]^(1/(a+b))
      const coefficient = Math.pow(a, a) * Math.pow(b, b);
      const power = a + b;
      molarSolubility = Math.pow(kspVal / coefficient, 1 / power);
    }
    
    return {
      molarSolubility,
      ksp: kspVal,
      cationCoeff: a,
      anionCoeff: b,
      cationConc: a * molarSolubility,
      anionConc: b * molarSolubility,
      massConc: molarSolubility * 100, // Approximate, would need molar mass
      commonIon: mode === 'commonIon' ? parseFloat(commonIonConc) : undefined,
    };
  };

  const result = (mode === 'fromKsp' || mode === 'commonIon') ? calculateSolubility() : null;
  const selectedComp = COMMON_COMPOUNDS.find(c => c.name === selectedCompound);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Solubility Calculator
        </h2>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          What would you like to calculate?
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMode('fromKsp')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'fromKsp'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            From Ksp
          </button>
          <button
            onClick={() => setMode('toKsp')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'toKsp'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Calculate Ksp
          </button>
          <button
            onClick={() => setMode('commonIon')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'commonIon'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Common Ion
          </button>
        </div>
      </div>

      {/* Common Compounds */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Select a Common Compound (Optional)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {COMMON_COMPOUNDS.map((comp) => (
            <button
              key={comp.formula}
              onClick={() => loadCompound(comp)}
              className={`p-2 rounded-lg text-sm font-medium transition-all ${
                selectedCompound === comp.name
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span className="font-mono">{comp.formula}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {(mode === 'fromKsp' || mode === 'commonIon') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ksp (Solubility Product)
            </label>
            <input
              type="text"
              value={ksp}
              onChange={(e) => setKsp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1.77e-10"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use scientific notation (e.g., 1.77e-10)
            </p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cation Coefficient
          </label>
          <input
            type="number"
            value={cationCoeff}
            onChange={(e) => setCationCoeff(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 1"
            min="1"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            For AgCl → Ag⁺ + Cl⁻, enter 1
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Anion Coefficient
          </label>
          <input
            type="number"
            value={anionCoeff}
            onChange={(e) => setAnionCoeff(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 1"
            min="1"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            For PbCl₂ → Pb²⁺ + 2Cl⁻, enter 2
          </p>
        </div>

        {mode === 'commonIon' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Common Ion Concentration (M)
            </label>
            <input
              type="number"
              value={commonIonConc}
              onChange={(e) => setCommonIonConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 0.1"
              step="0.001"
            />
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Solubility Results
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white dark:bg-gray-800 rounded p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Molar Solubility</p>
              <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {result.molarSolubility.toExponential(3)} M
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Ksp</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {result.ksp.toExponential(3)}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded p-4 space-y-2">
            <p className="font-semibold text-gray-900 dark:text-white">Ion Concentrations:</p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Cation:</span> {result.cationConc.toExponential(3)} M
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-medium">Anion:</span> {result.anionConc.toExponential(3)} M
            </p>
            {result.commonIon !== undefined && (
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
                Common ion effect: Solubility reduced by common ion concentration of {result.commonIon} M
              </p>
            )}
          </div>
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
            AgCl Solubility
          </button>
          <button
            onClick={() => loadExample(2)}
            className="p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all"
          >
            PbCl₂ Solubility
          </button>
          <button
            onClick={() => loadExample(3)}
            className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
          >
            Common Ion Effect
          </button>
        </div>
      </div>

      {/* Educational Info */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          Solubility Product Constant (Ksp)
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <p>
            <strong>Ksp</strong> is the equilibrium constant for the dissolution of a sparingly soluble ionic compound.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded p-3 mt-2">
            <p className="font-semibold mb-1">For a compound A<sub>a</sub>B<sub>b</sub>:</p>
            <p className="font-mono">A<sub>a</sub>B<sub>b</sub>(s) ⇌ aA<sup>+</sup>(aq) + bB<sup>-</sup>(aq)</p>
            <p className="font-mono mt-1">Ksp = [A<sup>+</sup>]<sup>a</sup> × [B<sup>-</sup>]<sup>b</sup></p>
          </div>
          <p className="mt-2">
            <strong>Lower Ksp</strong> = less soluble | <strong>Higher Ksp</strong> = more soluble
          </p>
        </div>
      </div>
    </div>
  );
}
