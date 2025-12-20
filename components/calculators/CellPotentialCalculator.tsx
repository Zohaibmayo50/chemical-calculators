'use client';

import React, { useState } from 'react';

type CalculationMode = 'standard' | 'nonstandard';

const CellPotentialCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('standard');
  const [cathodeReduction, setCathodeReduction] = useState<string>('');
  const [anodeReduction, setAnodeReduction] = useState<string>('');
  const [concentration, setConcentration] = useState<string>('1');
  const [temperature, setTemperature] = useState<string>('298');
  const [nElectrons, setNElectrons] = useState<string>('2');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [nernstResult, setNernstResult] = useState<string>('');

  // Common reduction potentials (V)
  const commonHalfReactions = [
    { reaction: 'F₂ + 2e⁻ → 2F⁻', E0: '2.87', name: 'Fluorine' },
    { reaction: 'Au³⁺ + 3e⁻ → Au', E0: '1.50', name: 'Gold(III)' },
    { reaction: 'Cl₂ + 2e⁻ → 2Cl⁻', E0: '1.36', name: 'Chlorine' },
    { reaction: 'O₂ + 4H⁺ + 4e⁻ → 2H₂O', E0: '1.23', name: 'Oxygen (acidic)' },
    { reaction: 'Br₂ + 2e⁻ → 2Br⁻', E0: '1.07', name: 'Bromine' },
    { reaction: 'Ag⁺ + e⁻ → Ag', E0: '0.80', name: 'Silver' },
    { reaction: 'Fe³⁺ + e⁻ → Fe²⁺', E0: '0.77', name: 'Iron(III)' },
    { reaction: 'I₂ + 2e⁻ → 2I⁻', E0: '0.54', name: 'Iodine' },
    { reaction: 'Cu²⁺ + 2e⁻ → Cu', E0: '0.34', name: 'Copper(II)' },
    { reaction: '2H⁺ + 2e⁻ → H₂', E0: '0.00', name: 'Hydrogen (reference)' },
    { reaction: 'Pb²⁺ + 2e⁻ → Pb', E0: '-0.13', name: 'Lead' },
    { reaction: 'Sn²⁺ + 2e⁻ → Sn', E0: '-0.14', name: 'Tin' },
    { reaction: 'Ni²⁺ + 2e⁻ → Ni', E0: '-0.26', name: 'Nickel' },
    { reaction: 'Fe²⁺ + 2e⁻ → Fe', E0: '-0.45', name: 'Iron(II)' },
    { reaction: 'Zn²⁺ + 2e⁻ → Zn', E0: '-0.76', name: 'Zinc' },
    { reaction: 'Al³⁺ + 3e⁻ → Al', E0: '-1.66', name: 'Aluminum' },
    { reaction: 'Mg²⁺ + 2e⁻ → Mg', E0: '-2.37', name: 'Magnesium' },
    { reaction: 'Na⁺ + e⁻ → Na', E0: '-2.71', name: 'Sodium' },
    { reaction: 'Li⁺ + e⁻ → Li', E0: '-3.04', name: 'Lithium' },
  ];

  const examples = [
    {
      name: 'Zn-Cu Cell (Daniell Cell)',
      cathode: '0.34',
      anode: '-0.76',
      n: '2',
      description: 'Classic galvanic cell',
    },
    {
      name: 'Ag-Zn Battery',
      cathode: '0.80',
      anode: '-0.76',
      n: '2',
      description: 'High voltage battery',
    },
    {
      name: 'Fe³⁺/Fe²⁺ - Zn',
      cathode: '0.77',
      anode: '-0.76',
      n: '2',
      description: 'Iron redox couple',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);
    setNernstResult('');

    try {
      const E_cathode = parseFloat(cathodeReduction);
      const E_anode = parseFloat(anodeReduction);
      const T = parseFloat(temperature);
      const n = parseFloat(nElectrons);
      const Q = parseFloat(concentration);

      if (isNaN(E_cathode) || isNaN(E_anode)) {
        throw new Error('Please enter valid reduction potentials');
      }
      if (isNaN(n) || n <= 0) {
        throw new Error('Number of electrons must be positive');
      }

      // Standard cell potential: E°_cell = E°_cathode - E°_anode
      const E_cell_standard = E_cathode - E_anode;
      setResult(E_cell_standard);

      // For non-standard conditions, apply Nernst equation
      if (mode === 'nonstandard') {
        if (isNaN(T) || T <= 0) {
          throw new Error('Temperature must be positive');
        }
        if (isNaN(Q) || Q <= 0) {
          throw new Error('Reaction quotient must be positive');
        }

        const R = 8.314; // J/(mol·K)
        const F = 96485; // C/mol (Faraday constant)
        
        // Nernst equation: E = E° - (RT/nF)lnQ
        // At 298 K: E = E° - (0.0592/n)logQ
        const E_cell = E_cell_standard - (R * T / (n * F)) * Math.log(Q);
        
        setNernstResult(
          `E°_cell = ${E_cell_standard.toFixed(3)} V\n` +
          `E_cell (at ${T} K) = ${E_cell.toFixed(3)} V\n` +
          `\nNernst equation applied:\n` +
          `E = E° - (RT/nF)ln(Q)\n` +
          `E = ${E_cell_standard.toFixed(3)} - (${(R * T / (n * F)).toFixed(5)})ln(${Q})\n` +
          `E = ${E_cell.toFixed(3)} V`
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setCathodeReduction(example.cathode);
    setAnodeReduction(example.anode);
    setNElectrons(example.n);
    setError('');
    setResult(null);
    setNernstResult('');
  };

  const fillHalfReaction = (E0: string, target: 'cathode' | 'anode') => {
    if (target === 'cathode') {
      setCathodeReduction(E0);
    } else {
      setAnodeReduction(E0);
    }
  };

  const clearFields = () => {
    setCathodeReduction('');
    setAnodeReduction('');
    setConcentration('1');
    setTemperature('298');
    setNElectrons('2');
    setResult(null);
    setError('');
    setNernstResult('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            E°_cell = E°_cathode - E°_anode
          </h3>
          
          {/* Mode Selection */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => setMode('standard')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === 'standard'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Standard Conditions
            </button>
            <button
              onClick={() => setMode('nonstandard')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                mode === 'nonstandard'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Non-Standard (Nernst)
            </button>
          </div>
        </div>

        {/* Example Cells */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Galvanic Cells:
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
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  E°_cell = {(parseFloat(example.cathode) - parseFloat(example.anode)).toFixed(2)} V
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Cathode (Reduction) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Cathode E° (Reduction Potential, V) - Higher potential
          </label>
          <input
            type="number"
            value={cathodeReduction}
            onChange={(e) => setCathodeReduction(e.target.value)}
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter cathode reduction potential"
          />
          <details className="mt-2">
            <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
              Select from common half-reactions (cathode)
            </summary>
            <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded p-2">
              {commonHalfReactions.map((hr, idx) => (
                <button
                  key={idx}
                  onClick={() => fillHalfReaction(hr.E0, 'cathode')}
                  className="w-full text-left text-xs p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex justify-between"
                >
                  <span>{hr.name}</span>
                  <span className="font-mono">{hr.E0} V</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Anode (Oxidation) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Anode E° (Reduction Potential, V) - Lower potential
          </label>
          <input
            type="number"
            value={anodeReduction}
            onChange={(e) => setAnodeReduction(e.target.value)}
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter anode reduction potential"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Note: Enter as reduction potential, will be reversed for oxidation
          </p>
          <details className="mt-2">
            <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
              Select from common half-reactions (anode)
            </summary>
            <div className="mt-2 max-h-40 overflow-y-auto border border-gray-200 dark:border-gray-600 rounded p-2">
              {commonHalfReactions.map((hr, idx) => (
                <button
                  key={idx}
                  onClick={() => fillHalfReaction(hr.E0, 'anode')}
                  className="w-full text-left text-xs p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex justify-between"
                >
                  <span>{hr.name}</span>
                  <span className="font-mono">{hr.E0} V</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Number of Electrons */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of Electrons Transferred (n)
          </label>
          <input
            type="number"
            value={nElectrons}
            onChange={(e) => setNElectrons(e.target.value)}
            step="1"
            min="1"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="Enter number of electrons"
          />
        </div>

        {/* Non-standard conditions */}
        {mode === 'nonstandard' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temperature (K)
              </label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                step="1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter temperature"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                298 K = 25°C (standard), 310 K = 37°C (body temperature)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Reaction Quotient (Q)
              </label>
              <input
                type="number"
                value={concentration}
                onChange={(e) => setConcentration(e.target.value)}
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter Q value"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Q = [products]/[reactants], use 1 for standard concentrations
              </p>
            </div>
          </>
        )}

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate E_cell
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

        {result !== null && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            {mode === 'standard' ? (
              <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold">
                  E°_cell = {result.toFixed(3)} V
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {result > 0 ? 
                    '⚡ Spontaneous reaction (galvanic/voltaic cell)' : 
                    '🔋 Non-spontaneous (requires external voltage - electrolytic cell)'}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ΔG° = -nFE° = {(-parseFloat(nElectrons) * 96485 * result / 1000).toFixed(1)} kJ/mol
                </p>
              </div>
            ) : (
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-mono">
                {nernstResult}
              </pre>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Cell Potential
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Standard Cell Potential (E°_cell):</strong> Voltage produced by a galvanic cell 
              under standard conditions (1 M concentrations, 1 atm pressure, 25°C).
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Cathode:</strong> Reduction occurs (gains electrons)</li>
              <li><strong>Anode:</strong> Oxidation occurs (loses electrons)</li>
              <li><strong>Positive E°_cell:</strong> Spontaneous reaction (galvanic cell)</li>
              <li><strong>Negative E°_cell:</strong> Non-spontaneous (needs external voltage)</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Nernst Equation:</strong> E = E° - (RT/nF)ln(Q) adjusts potential for 
                non-standard conditions. At 298 K: E = E° - (0.0592/n)log(Q)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CellPotentialCalculator;
