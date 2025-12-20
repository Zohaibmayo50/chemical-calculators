'use client';

import React, { useState } from 'react';

type CalculationMode = 'proton' | 'carbon13' | 'prediction';

interface FunctionalGroup {
  name: string;
  protonRange: string;
  carbon13Range: string;
  description: string;
}

const NMRChemicalShiftCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('proton');

  // Proton NMR inputs
  const [chemicalEnvironment, setChemicalEnvironment] = useState<string>('');
  const [neighboringGroups, setNeighboringGroups] = useState<string>('');
  const [substituentEffect, setSubstituentEffect] = useState<string>('0');

  // Carbon-13 NMR inputs
  const [carbonType, setCarbonType] = useState<string>('');
  const [alphaSubstituents, setAlphaSubstituents] = useState<string>('0');
  const [betaSubstituents, setBetaSubstituents] = useState<string>('0');

  // Prediction inputs
  const [baseShift, setBaseShift] = useState<string>('');
  const [electronWithdrawing, setElectronWithdrawing] = useState<string>('0');
  const [aromaticRing, setAromaticRing] = useState<boolean>(false);
  const [hydrogenBonding, setHydrogenBonding] = useState<boolean>(false);

  // Results
  const [predictedShift, setPredictedShift] = useState<string>('');
  const [shiftRange, setShiftRange] = useState<string>('');
  const [multiplicity, setMultiplicity] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');

  // Functional groups database
  const functionalGroups: FunctionalGroup[] = [
    {
      name: 'Alkane CH₃',
      protonRange: '0.8-1.0',
      carbon13Range: '8-30',
      description: 'Methyl groups, highly shielded',
    },
    {
      name: 'Alkane CH₂',
      protonRange: '1.2-1.4',
      carbon13Range: '15-55',
      description: 'Methylene groups',
    },
    {
      name: 'Alkene =CH',
      protonRange: '4.5-6.5',
      carbon13Range: '100-150',
      description: 'Vinyl protons, deshielded by π electrons',
    },
    {
      name: 'Aromatic Ar-H',
      protonRange: '6.5-8.5',
      carbon13Range: '110-160',
      description: 'Benzene ring protons',
    },
    {
      name: 'Aldehyde -CHO',
      protonRange: '9.0-10.0',
      carbon13Range: '190-205',
      description: 'Highly deshielded carbonyl H',
    },
    {
      name: 'Alcohol -OH',
      protonRange: '1.0-5.0',
      carbon13Range: '50-90',
      description: 'Variable, H-bonding dependent',
    },
    {
      name: 'Carboxylic Acid -COOH',
      protonRange: '10.0-13.0',
      carbon13Range: '170-185',
      description: 'Most deshielded proton',
    },
    {
      name: 'Amine -NH₂',
      protonRange: '0.5-3.0',
      carbon13Range: '30-65',
      description: 'Variable, exchange with D₂O',
    },
    {
      name: 'Ether C-O-C',
      protonRange: '3.3-4.0',
      carbon13Range: '50-80',
      description: 'α to oxygen',
    },
    {
      name: 'Ketone C=O',
      protonRange: 'N/A',
      carbon13Range: '190-220',
      description: 'No attached H, carbon only',
    },
  ];

  const loadExample = (group: FunctionalGroup) => {
    const protonMid = parseFloat(group.protonRange.split('-')[0]) + 0.5;
    const carbonMid = parseFloat(group.carbon13Range.split('-')[0]) + 10;
    
    if (mode === 'proton' && group.protonRange !== 'N/A') {
      setBaseShift(protonMid.toFixed(1));
      setChemicalEnvironment(group.name);
    } else if (mode === 'carbon13') {
      setBaseShift(carbonMid.toFixed(0));
      setCarbonType(group.name);
    }
  };

  const calculateProtonShift = () => {
    let shift = 0;
    
    // Base shifts for different environments
    const envShifts: { [key: string]: number } = {
      'alkyl': 0.9,
      'allylic': 1.7,
      'benzylic': 2.3,
      'alpha-oxygen': 3.4,
      'alpha-nitrogen': 2.7,
      'alpha-carbonyl': 2.1,
      'vinylic': 5.3,
      'aromatic': 7.3,
      'aldehyde': 9.5,
      'carboxylic': 11.0,
    };

    const env = chemicalEnvironment.toLowerCase();
    for (const key in envShifts) {
      if (env.includes(key)) {
        shift = envShifts[key];
        break;
      }
    }

    // Add substituent effects
    const subEffect = parseFloat(substituentEffect);
    if (!isNaN(subEffect)) {
      shift += subEffect;
    }

    // Aromatic ring current effect
    if (aromaticRing) {
      shift += 0.3; // Ring current deshielding
    }

    // Hydrogen bonding
    if (hydrogenBonding) {
      shift += 1.0; // H-bonding causes downfield shift
    }

    setPredictedShift(`δ ${shift.toFixed(2)} ppm`);
    
    // Estimate range (±0.3 ppm typical)
    const lowerBound = shift - 0.3;
    const upperBound = shift + 0.3;
    setShiftRange(`${lowerBound.toFixed(2)} - ${upperBound.toFixed(2)} ppm`);

    // Determine multiplicity (simplified)
    let mult = 'Not determined (requires neighbor H count)';
    if (neighboringGroups) {
      const numNeighbors = parseInt(neighboringGroups);
      if (!isNaN(numNeighbors)) {
        const patterns = ['singlet', 'doublet', 'triplet', 'quartet', 'quintet', 'sextet', 'septet'];
        mult = patterns[Math.min(numNeighbors, 6)] || 'multiplet';
      }
    }
    setMultiplicity(mult);

    // Interpretation
    let interp = '';
    if (shift < 1.0) {
      interp = 'Highly shielded - likely alkyl CH₃ or TMS reference region';
    } else if (shift < 2.0) {
      interp = 'Shielded - alkyl CH₂ or CH groups';
    } else if (shift < 3.0) {
      interp = 'Moderately shielded - α to heteroatom or adjacent to unsaturation';
    } else if (shift < 5.0) {
      interp = 'Deshielded - α to oxygen/nitrogen or allylic';
    } else if (shift < 7.0) {
      interp = 'Significantly deshielded - vinylic or near aromatic ring';
    } else if (shift < 9.0) {
      interp = 'Aromatic region - benzene or heteroaromatic protons';
    } else {
      interp = 'Highly deshielded - aldehyde or carboxylic acid proton';
    }
    setInterpretation(interp);
  };

  const calculateCarbon13Shift = () => {
    let shift = 0;

    // Base shifts for carbon types
    const carbonShifts: { [key: string]: number } = {
      'alkyl': 20,
      'methyl': 15,
      'methylene': 30,
      'methine': 40,
      'quaternary': 35,
      'alkene': 120,
      'alkyne': 80,
      'aromatic': 130,
      'carbonyl': 200,
      'carboxyl': 175,
      'nitrile': 120,
      'ether': 65,
      'amine': 45,
    };

    const cType = carbonType.toLowerCase();
    for (const key in carbonShifts) {
      if (cType.includes(key)) {
        shift = carbonShifts[key];
        break;
      }
    }

    // α-substituent effects (empirical)
    const alphaEffect = parseFloat(alphaSubstituents);
    if (!isNaN(alphaEffect)) {
      shift += alphaEffect * 10; // ~10 ppm per α electron-withdrawing group
    }

    // β-substituent effects
    const betaEffect = parseFloat(betaSubstituents);
    if (!isNaN(betaEffect)) {
      shift += betaEffect * 5; // ~5 ppm per β group
    }

    setPredictedShift(`δ ${shift.toFixed(1)} ppm`);
    
    // Estimate range (±5 ppm typical for ¹³C)
    const lowerBound = shift - 5;
    const upperBound = shift + 5;
    setShiftRange(`${lowerBound.toFixed(1)} - ${upperBound.toFixed(1)} ppm`);

    setMultiplicity('Based on attached H: CH₃ (quartet), CH₂ (triplet), CH (doublet), C (no signal in DEPT)');

    // Interpretation
    let interp = '';
    if (shift < 50) {
      interp = 'Aliphatic carbon - likely sp³ hybridized C-H or C-C';
    } else if (shift < 100) {
      interp = 'α to heteroatom - C-O, C-N, or substituted alkyl';
    } else if (shift < 160) {
      interp = 'sp² carbon - alkene, aromatic, or nitrile';
    } else if (shift < 180) {
      interp = 'Carboxyl carbon - COOH, COOR, or amide C=O';
    } else {
      interp = 'Carbonyl carbon - aldehyde, ketone, highly deshielded';
    }
    setInterpretation(interp);
  };

  const calculatePrediction = () => {
    const base = parseFloat(baseShift);
    const ewg = parseFloat(electronWithdrawing);

    if (isNaN(base)) {
      alert('Please enter a base chemical shift value');
      return;
    }

    let totalShift = base;

    // Electron-withdrawing groups cause downfield shift
    if (!isNaN(ewg)) {
      totalShift += ewg * 0.5; // ~0.5 ppm per EWG in ¹H NMR
    }

    // Aromatic ring current
    if (aromaticRing) {
      totalShift += 0.4;
    }

    // Hydrogen bonding
    if (hydrogenBonding) {
      totalShift += 0.8;
    }

    setPredictedShift(`δ ${totalShift.toFixed(2)} ppm`);
    setShiftRange(`${(totalShift - 0.3).toFixed(2)} - ${(totalShift + 0.3).toFixed(2)} ppm`);
    setMultiplicity('Depends on neighboring protons (n+1 rule)');

    const effectsApplied = [];
    if (ewg > 0) effectsApplied.push(`${ewg} EWG (+${(ewg * 0.5).toFixed(2)} ppm)`);
    if (aromaticRing) effectsApplied.push('aromatic ring current (+0.4 ppm)');
    if (hydrogenBonding) effectsApplied.push('H-bonding (+0.8 ppm)');

    let interp = `Base shift: ${base.toFixed(2)} ppm`;
    if (effectsApplied.length > 0) {
      interp += `. Effects applied: ${effectsApplied.join(', ')}`;
    }
    setInterpretation(interp);
  };

  const handleCalculate = () => {
    if (mode === 'proton') {
      calculateProtonShift();
    } else if (mode === 'carbon13') {
      calculateCarbon13Shift();
    } else if (mode === 'prediction') {
      calculatePrediction();
    }
  };

  const handleReset = () => {
    setChemicalEnvironment('');
    setNeighboringGroups('');
    setSubstituentEffect('0');
    setCarbonType('');
    setAlphaSubstituents('0');
    setBetaSubstituents('0');
    setBaseShift('');
    setElectronWithdrawing('0');
    setAromaticRing(false);
    setHydrogenBonding(false);
    setPredictedShift('');
    setShiftRange('');
    setMultiplicity('');
    setInterpretation('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          NMR Type
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('proton')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'proton'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            ¹H NMR
          </button>
          <button
            onClick={() => setMode('carbon13')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'carbon13'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            ¹³C NMR
          </button>
          <button
            onClick={() => setMode('prediction')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'prediction'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Custom Prediction
          </button>
        </div>
      </div>

      {mode === 'proton' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Chemical Environment
            </label>
            <input
              type="text"
              value={chemicalEnvironment}
              onChange={(e) => setChemicalEnvironment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., aromatic, alpha-oxygen, aldehyde"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Neighboring H
              </label>
              <input
                type="number"
                value={neighboringGroups}
                onChange={(e) => setNeighboringGroups(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="For multiplicity (n+1 rule)"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Substituent Effect (ppm)
              </label>
              <input
                type="number"
                value={substituentEffect}
                onChange={(e) => setSubstituentEffect(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Additional shift"
                step="0.1"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={aromaticRing}
                onChange={(e) => setAromaticRing(e.target.checked)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Near aromatic ring</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hydrogenBonding}
                onChange={(e) => setHydrogenBonding(e.target.checked)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Hydrogen bonding</span>
            </label>
          </div>
        </div>
      )}

      {mode === 'carbon13' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Carbon Type
            </label>
            <input
              type="text"
              value={carbonType}
              onChange={(e) => setCarbonType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., aromatic, carbonyl, methylene, ether"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                α-Substituents (EWG count)
              </label>
              <input
                type="number"
                value={alphaSubstituents}
                onChange={(e) => setAlphaSubstituents(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="0-3"
                min="0"
                max="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                β-Substituents (count)
              </label>
              <input
                type="number"
                value={betaSubstituents}
                onChange={(e) => setBetaSubstituents(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="0-2"
                min="0"
                max="2"
              />
            </div>
          </div>
        </div>
      )}

      {mode === 'prediction' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Base Chemical Shift (ppm)
            </label>
            <input
              type="number"
              value={baseShift}
              onChange={(e) => setBaseShift(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Starting shift value"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Electron-Withdrawing Groups
            </label>
            <input
              type="number"
              value={electronWithdrawing}
              onChange={(e) => setElectronWithdrawing(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Number of EWG nearby"
              min="0"
            />
          </div>

          <div className="flex gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={aromaticRing}
                onChange={(e) => setAromaticRing(e.target.checked)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">Aromatic ring effect</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hydrogenBonding}
                onChange={(e) => setHydrogenBonding(e.target.checked)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">H-bonding present</span>
            </label>
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Predict Chemical Shift
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {predictedShift && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Predicted Chemical Shift</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{predictedShift}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Expected Range</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">{shiftRange}</p>
            </div>

            {multiplicity && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Multiplicity</p>
                <p className="text-gray-700 dark:text-gray-300">{multiplicity}</p>
              </div>
            )}

            {interpretation && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Interpretation</p>
                <p className="text-gray-700 dark:text-gray-300">{interpretation}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Common Functional Groups
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {functionalGroups.map((group, index) => (
            <button
              key={index}
              onClick={() => loadExample(group)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{group.name}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                ¹H: {group.protonRange} ppm | ¹³C: {group.carbon13Range} ppm
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {group.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          NMR Basics
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>¹H NMR:</strong> 0-13 ppm range, TMS reference at 0 ppm</p>
          <p><strong>¹³C NMR:</strong> 0-220 ppm range, broader distribution than ¹H</p>
          <p><strong>Deshielding:</strong> EWG, π-bonds, aromatics cause downfield shift (higher ppm)</p>
          <p><strong>Multiplicity:</strong> n+1 rule for ¹H NMR (n = # of equivalent neighboring H)</p>
          <p><strong>Integration:</strong> Area under ¹H peak proportional to # of protons</p>
        </div>
      </div>
    </div>
  );
};

export default NMRChemicalShiftCalculator;
