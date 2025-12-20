'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromEmpirical' | 'verify' | 'compare';

const MolecularFormulaCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('fromEmpirical');

  // From Empirical inputs
  const [empiricalFormula, setEmpiricalFormula] = useState<string>('');
  const [molecularWeight, setMolecularWeight] = useState<string>('');

  // Verify inputs
  const [proposedFormula, setProposedFormula] = useState<string>('');
  const [knownMW, setKnownMW] = useState<string>('');

  // Results
  const [molecularFormula, setMolecularFormula] = useState<string>('');
  const [multiplier, setMultiplier] = useState<string>('');
  const [empiricalMass, setEmpiricalMass] = useState<string>('');
  const [molecularMass, setMolecularMass] = useState<string>('');
  const [isValid, setIsValid] = useState<string>('');

  // Common examples
  const examples = [
    {
      name: 'Glucose',
      empirical: 'CH₂O',
      molecular: 'C₆H₁₂O₆',
      mw: 180,
      n: 6,
    },
    {
      name: 'Benzene',
      empirical: 'CH',
      molecular: 'C₆H₆',
      mw: 78,
      n: 6,
    },
    {
      name: 'Ethane',
      empirical: 'CH₃',
      molecular: 'C₂H₆',
      mw: 30,
      n: 2,
    },
    {
      name: 'Acetic Acid',
      empirical: 'CH₂O',
      molecular: 'C₂H₄O₂',
      mw: 60,
      n: 2,
    },
  ];

  const loadExample = (example: typeof examples[0]) => {
    setMode('fromEmpirical');
    setEmpiricalFormula(example.empirical);
    setMolecularWeight(example.mw.toString());
  };

  // Atomic masses
  const atomicMasses: { [key: string]: number } = {
    H: 1.008, C: 12.01, N: 14.01, O: 16.00, S: 32.07, P: 30.97,
    Cl: 35.45, Br: 79.90, I: 126.9, F: 19.00, Na: 22.99, K: 39.10,
    Ca: 40.08, Mg: 24.31, Fe: 55.85, Cu: 63.55, Zn: 65.38, Ag: 107.9,
  };

  const parseFormula = (formula: string): { [key: string]: number } => {
    const elements: { [key: string]: number } = {};
    // Remove subscript numbers and convert to regular
    const normalized = formula
      .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2')
      .replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5')
      .replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8')
      .replace(/₉/g, '9');
    
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(normalized)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      elements[element] = (elements[element] || 0) + count;
    }
    
    return elements;
  };

  const calculateMass = (elements: { [key: string]: number }): number => {
    let mass = 0;
    for (const [element, count] of Object.entries(elements)) {
      if (atomicMasses[element]) {
        mass += atomicMasses[element] * count;
      }
    }
    return mass;
  };

  const formatFormula = (elements: { [key: string]: number }): string => {
    const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    let formula = '';
    
    // Common order: C, H, then alphabetical
    const order = ['C', 'H'];
    const remaining = Object.keys(elements).filter(e => !order.includes(e)).sort();
    const allElements = [...order.filter(e => elements[e]), ...remaining];
    
    for (const element of allElements) {
      const count = elements[element];
      formula += element;
      if (count > 1) {
        formula += count.toString().split('').map(d => subscripts[parseInt(d)]).join('');
      }
    }
    
    return formula;
  };

  const calculateFromEmpirical = () => {
    if (!empiricalFormula || !molecularWeight) {
      alert('Please enter empirical formula and molecular weight');
      return;
    }

    const elements = parseFormula(empiricalFormula);
    const empMass = calculateMass(elements);
    const molWeight = parseFloat(molecularWeight);

    if (empMass === 0 || isNaN(molWeight)) {
      alert('Invalid input');
      return;
    }

    const n = Math.round(molWeight / empMass);
    
    // Multiply empirical formula by n
    const molecularElements: { [key: string]: number } = {};
    for (const [element, count] of Object.entries(elements)) {
      molecularElements[element] = count * n;
    }

    const molFormula = formatFormula(molecularElements);
    const calculatedMass = calculateMass(molecularElements);

    setEmpiricalMass(`${empMass.toFixed(2)} g/mol`);
    setMolecularMass(`${calculatedMass.toFixed(2)} g/mol`);
    setMultiplier(`n = ${n}`);
    setMolecularFormula(molFormula);
    setIsValid(`Molecular formula: ${molFormula}`);
  };

  const verifyFormula = () => {
    if (!proposedFormula || !knownMW) {
      alert('Please enter formula and molecular weight');
      return;
    }

    const elements = parseFormula(proposedFormula);
    const calculatedMW = calculateMass(elements);
    const knownWeight = parseFloat(knownMW);

    const difference = Math.abs(calculatedMW - knownWeight);
    const percentError = (difference / knownWeight) * 100;

    setMolecularMass(`${calculatedMW.toFixed(2)} g/mol`);
    setMolecularFormula(formatFormula(elements));
    
    if (percentError < 1) {
      setIsValid(`✓ Valid! Calculated MW matches (${percentError.toFixed(2)}% error)`);
    } else if (percentError < 5) {
      setIsValid(`⚠ Close match (${percentError.toFixed(2)}% error)`);
    } else {
      setIsValid(`✗ Invalid - ${difference.toFixed(2)} g/mol difference (${percentError.toFixed(2)}% error)`);
    }
    
    setMultiplier(`Error: ${percentError.toFixed(2)}%`);
    setEmpiricalMass('');
  };

  const handleCalculate = () => {
    if (mode === 'fromEmpirical') {
      calculateFromEmpirical();
    } else if (mode === 'verify') {
      verifyFormula();
    }
  };

  const handleReset = () => {
    setEmpiricalFormula('');
    setMolecularWeight('');
    setProposedFormula('');
    setKnownMW('');
    setMolecularFormula('');
    setMultiplier('');
    setEmpiricalMass('');
    setMolecularMass('');
    setIsValid('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <button
            onClick={() => setMode('fromEmpirical')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'fromEmpirical'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            From Empirical Formula
          </button>
          <button
            onClick={() => setMode('verify')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'verify'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Verify Formula
          </button>
        </div>
      </div>

      {mode === 'fromEmpirical' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Empirical Formula
            </label>
            <input
              type="text"
              value={empiricalFormula}
              onChange={(e) => setEmpiricalFormula(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., CH₂O or CH2O"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              You can use subscripts (₂) or regular numbers (2)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molecular Weight (g/mol)
            </label>
            <input
              type="number"
              value={molecularWeight}
              onChange={(e) => setMolecularWeight(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 180"
              step="0.01"
            />
          </div>
        </div>
      )}

      {mode === 'verify' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Proposed Molecular Formula
            </label>
            <input
              type="text"
              value={proposedFormula}
              onChange={(e) => setProposedFormula(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., C₆H₁₂O₆ or C6H12O6"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Known Molecular Weight (g/mol)
            </label>
            <input
              type="number"
              value={knownMW}
              onChange={(e) => setKnownMW(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 180.16"
              step="0.01"
            />
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {molecularFormula && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Molecular Formula</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{molecularFormula}</p>
            </div>

            {empiricalMass && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Empirical Formula Mass</p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">{empiricalMass}</p>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Molecular Mass</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">{molecularMass}</p>
            </div>

            {multiplier && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Multiplier / Error</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{multiplier}</p>
              </div>
            )}

            {isValid && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                <p className="text-gray-700 dark:text-gray-300">{isValid}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Compounds
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{example.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {example.empirical} → {example.molecular} (n = {example.n})
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Formula Basics
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>Empirical Formula:</strong> Simplest whole-number ratio of atoms</p>
          <p><strong>Molecular Formula:</strong> Actual number of atoms in a molecule</p>
          <p><strong>Relationship:</strong> Molecular Formula = (Empirical Formula) × n</p>
          <p><strong>Calculate n:</strong> n = Molecular Weight / Empirical Formula Mass</p>
          <p><strong>Example:</strong> CH₂O (empirical) → C₆H₁₂O₆ (molecular), n = 6</p>
        </div>
      </div>
    </div>
  );
};

export default MolecularFormulaCalculator;
