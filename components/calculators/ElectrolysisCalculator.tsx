'use client';

import React, { useState } from 'react';

type CalculationMode = 'mass' | 'charge' | 'time' | 'current';

const ElectrolysisCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('mass');
  const [current, setCurrent] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [charge, setCharge] = useState<string>('');
  const [molarMass, setMolarMass] = useState<string>('');
  const [electronsMoles, setElectronsMoles] = useState<string>('');
  const [mass, setMass] = useState<string>('');
  const [selectedSubstance, setSelectedSubstance] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  // Faraday's constant
  const F = 96485; // C/mol (Coulombs per mole of electrons)

  const commonSubstances = [
    { name: 'Copper (Cu²⁺ → Cu)', molarMass: 63.55, electrons: 2, symbol: 'Cu' },
    { name: 'Silver (Ag⁺ → Ag)', molarMass: 107.87, electrons: 1, symbol: 'Ag' },
    { name: 'Aluminum (Al³⁺ → Al)', molarMass: 26.98, electrons: 3, symbol: 'Al' },
    { name: 'Zinc (Zn²⁺ → Zn)', molarMass: 65.38, electrons: 2, symbol: 'Zn' },
    { name: 'Chlorine (2Cl⁻ → Cl₂)', molarMass: 70.90, electrons: 2, symbol: 'Cl₂' },
    { name: 'Oxygen (2H₂O → O₂)', molarMass: 32.00, electrons: 4, symbol: 'O₂' },
    { name: 'Hydrogen (2H₂O → H₂)', molarMass: 2.016, electrons: 2, symbol: 'H₂' },
    { name: 'Gold (Au³⁺ → Au)', molarMass: 196.97, electrons: 3, symbol: 'Au' },
  ];

  const examples = [
    {
      name: 'Copper Plating',
      mode: 'mass' as CalculationMode,
      current: '5.0',
      time: '3600',
      substance: 'Copper (Cu²⁺ → Cu)',
    },
    {
      name: 'Chlorine Production',
      mode: 'time' as CalculationMode,
      current: '10.0',
      mass: '5.0',
      substance: 'Chlorine (2Cl⁻ → Cl₂)',
    },
    {
      name: 'Silver Electroplating',
      mode: 'current' as CalculationMode,
      time: '7200',
      mass: '10.0',
      substance: 'Silver (Ag⁺ → Ag)',
    },
  ];

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const I = parseFloat(current);
      const t = parseFloat(time);
      const Q = parseFloat(charge);
      const M = parseFloat(molarMass);
      const n = parseFloat(electronsMoles);
      const m = parseFloat(mass);

      // Validate inputs based on mode
      if (mode === 'mass') {
        if (isNaN(I) || I <= 0) throw new Error('Current must be positive');
        if (isNaN(t) || t <= 0) throw new Error('Time must be positive');
        if (isNaN(M) || M <= 0) throw new Error('Molar mass must be positive');
        if (isNaN(n) || n <= 0) throw new Error('Number of electrons must be positive');

        // Calculate: Q = I × t, then m = (Q × M) / (n × F)
        const totalCharge = I * t;
        const calculatedMass = (totalCharge * M) / (n * F);
        const moles = calculatedMass / M;

        setResult({
          mode: 'mass',
          mass: calculatedMass,
          charge: totalCharge,
          moles,
          current: I,
          time: t,
          molarMass: M,
          electrons: n,
        });
      } else if (mode === 'charge') {
        if (isNaN(m) || m <= 0) throw new Error('Mass must be positive');
        if (isNaN(M) || M <= 0) throw new Error('Molar mass must be positive');
        if (isNaN(n) || n <= 0) throw new Error('Number of electrons must be positive');

        // Calculate: Q = (m × n × F) / M
        const calculatedCharge = (m * n * F) / M;
        const moles = m / M;

        setResult({
          mode: 'charge',
          charge: calculatedCharge,
          mass: m,
          moles,
          molarMass: M,
          electrons: n,
        });
      } else if (mode === 'time') {
        if (isNaN(I) || I <= 0) throw new Error('Current must be positive');
        if (isNaN(m) || m <= 0) throw new Error('Mass must be positive');
        if (isNaN(M) || M <= 0) throw new Error('Molar mass must be positive');
        if (isNaN(n) || n <= 0) throw new Error('Number of electrons must be positive');

        // Calculate: t = Q / I, where Q = (m × n × F) / M
        const requiredCharge = (m * n * F) / M;
        const calculatedTime = requiredCharge / I;
        const moles = m / M;

        setResult({
          mode: 'time',
          time: calculatedTime,
          charge: requiredCharge,
          mass: m,
          current: I,
          moles,
          molarMass: M,
          electrons: n,
        });
      } else if (mode === 'current') {
        if (isNaN(t) || t <= 0) throw new Error('Time must be positive');
        if (isNaN(m) || m <= 0) throw new Error('Mass must be positive');
        if (isNaN(M) || M <= 0) throw new Error('Molar mass must be positive');
        if (isNaN(n) || n <= 0) throw new Error('Number of electrons must be positive');

        // Calculate: I = Q / t, where Q = (m × n × F) / M
        const requiredCharge = (m * n * F) / M;
        const calculatedCurrent = requiredCharge / t;
        const moles = m / M;

        setResult({
          mode: 'current',
          current: calculatedCurrent,
          charge: requiredCharge,
          mass: m,
          time: t,
          moles,
          molarMass: M,
          electrons: n,
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    setCurrent(example.current || '');
    setTime(example.time || '');
    setMass(example.mass || '');
    setSelectedSubstance(example.substance);
    
    const substance = commonSubstances.find(s => s.name === example.substance);
    if (substance) {
      setMolarMass(substance.molarMass.toString());
      setElectronsMoles(substance.electrons.toString());
    }
    
    setCharge('');
    setError('');
    setResult(null);
  };

  const selectSubstance = (substance: typeof commonSubstances[0]) => {
    setSelectedSubstance(substance.name);
    setMolarMass(substance.molarMass.toString());
    setElectronsMoles(substance.electrons.toString());
  };

  const formatTime = (seconds: number): string => {
    if (seconds < 60) return `${seconds.toFixed(2)} s`;
    if (seconds < 3600) return `${(seconds / 60).toFixed(2)} min`;
    return `${(seconds / 3600).toFixed(2)} h`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Faraday's Laws of Electrolysis
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Calculate mass of product, charge, time, or current required for electrolysis.
          </p>
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
            <p className="font-mono text-center text-lg">
              m = (Q × M) / (n × F)
            </p>
            <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
              Q = I × t &nbsp;|&nbsp; F = 96,485 C/mol
            </p>
          </div>
        </div>

        {/* Calculation Mode Selection */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Calculate:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => setMode('mass')}
              className={`p-3 rounded-lg font-semibold transition-all ${
                mode === 'mass'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Mass (m)
            </button>
            <button
              onClick={() => setMode('charge')}
              className={`p-3 rounded-lg font-semibold transition-all ${
                mode === 'charge'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Charge (Q)
            </button>
            <button
              onClick={() => setMode('time')}
              className={`p-3 rounded-lg font-semibold transition-all ${
                mode === 'time'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Time (t)
            </button>
            <button
              onClick={() => setMode('current')}
              className={`p-3 rounded-lg font-semibold transition-all ${
                mode === 'current'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Current (I)
            </button>
          </div>
        </div>

        {/* Common Substances */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Common Substances:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {commonSubstances.map((substance, index) => (
              <button
                key={index}
                onClick={() => selectSubstance(substance)}
                className={`p-3 rounded-lg text-left transition-all ${
                  selectedSubstance === substance.name
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-md'
                    : 'bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-md'
                }`}
              >
                <div className="font-semibold text-sm">{substance.symbol}</div>
                <div className="text-xs opacity-90 mt-1">n = {substance.electrons}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Problems:
          </h4>
          <div className="grid md:grid-cols-3 gap-3">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => fillExample(example)}
                className="p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow text-left"
              >
                <div className="font-semibold text-sm text-gray-900 dark:text-white">
                  {example.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Calculate {example.mode}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          {mode !== 'current' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current (I) in Amperes (A)
              </label>
              <input
                type="number"
                step="any"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 5.0"
              />
            </div>
          )}

          {mode !== 'time' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time (t) in seconds
              </label>
              <input
                type="number"
                step="any"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 3600"
              />
            </div>
          )}

          {mode !== 'mass' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass (m) in grams
              </label>
              <input
                type="number"
                step="any"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 5.0"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Molar Mass (M) in g/mol
            </label>
            <input
              type="number"
              step="any"
              value={molarMass}
              onChange={(e) => setMolarMass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 63.55"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Electrons per ion/molecule (n)
            </label>
            <input
              type="number"
              step="1"
              value={electronsMoles}
              onChange={(e) => setElectronsMoles(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 2"
            />
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Calculate
        </button>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
              Electrolysis Results
            </h4>

            {result.mode === 'mass' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Mass of Product:
                </div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  {result.mass.toFixed(4)} g
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {result.moles.toFixed(4)} mol produced
                </div>
              </div>
            )}

            {result.mode === 'charge' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Total Charge Required:
                </div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  {result.charge.toFixed(2)} C
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {(result.charge / F).toFixed(4)} mol of electrons
                </div>
              </div>
            )}

            {result.mode === 'time' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Time Required:
                </div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {formatTime(result.time)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  ({result.time.toFixed(2)} seconds)
                </div>
              </div>
            )}

            {result.mode === 'current' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Current Required:
                </div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                  {result.current.toFixed(4)} A
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {(result.current * 1000).toFixed(2)} mA
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                <div className="text-sm text-blue-700 dark:text-blue-300 mb-1">
                  Total Charge:
                </div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  {result.charge.toFixed(2)} C
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                  {(result.charge / F).toFixed(4)} mol e⁻
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <div className="text-sm text-green-700 dark:text-green-300 mb-1">
                  Moles Produced:
                </div>
                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                  {result.moles.toFixed(4)} mol
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 mt-1">
                  M = {result.molarMass} g/mol
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Faraday's First Law:
              </div>
              <div className="font-mono text-sm text-gray-900 dark:text-white">
                m = (Q × M) / (n × F)
              </div>
              <div className="font-mono text-sm text-gray-900 dark:text-white mt-1">
                m = ({result.charge.toFixed(2)} C × {result.molarMass} g/mol) / ({result.electrons} × 96485 C/mol)
              </div>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Faraday's Laws
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">First Law:</p>
              <p className="text-blue-800 dark:text-blue-200">
                The mass of substance deposited/liberated at an electrode is directly proportional to 
                the quantity of electric charge passed through the electrolyte.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">Key Relationships:</p>
              <ul className="list-disc list-inside space-y-1 text-green-800 dark:text-green-200">
                <li><strong>Q = I × t</strong> - Charge equals current times time</li>
                <li><strong>F = 96,485 C/mol</strong> - Faraday's constant (charge per mole of electrons)</li>
                <li><strong>m = (Q × M) / (n × F)</strong> - Mass from charge, molar mass, and electron transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectrolysisCalculator;
