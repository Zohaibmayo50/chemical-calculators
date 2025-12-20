'use client';

import React, { useState } from 'react';

type CalculationMode = 'heat' | 'mass' | 'specificHeat' | 'tempChange';

const SpecificHeatCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('heat');
  const [mass, setMass] = useState<string>('100');
  const [specificHeat, setSpecificHeat] = useState<string>('4.184');
  const [tempChange, setTempChange] = useState<string>('25');
  const [initialTemp, setInitialTemp] = useState<string>('20');
  const [finalTemp, setFinalTemp] = useState<string>('45');
  const [heat, setHeat] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  // Common specific heat capacities (J/g·°C)
  const commonSubstances = [
    { name: 'Water', c: 4.184, category: 'Liquids' },
    { name: 'Ice', c: 2.09, category: 'Solids' },
    { name: 'Steam', c: 2.01, category: 'Gases' },
    { name: 'Ethanol', c: 2.44, category: 'Liquids' },
    { name: 'Aluminum', c: 0.897, category: 'Metals' },
    { name: 'Copper', c: 0.385, category: 'Metals' },
    { name: 'Iron', c: 0.449, category: 'Metals' },
    { name: 'Gold', c: 0.129, category: 'Metals' },
    { name: 'Silver', c: 0.235, category: 'Metals' },
    { name: 'Lead', c: 0.128, category: 'Metals' },
    { name: 'Glass', c: 0.84, category: 'Solids' },
    { name: 'Concrete', c: 0.88, category: 'Solids' },
    { name: 'Wood', c: 1.76, category: 'Solids' },
    { name: 'Air', c: 1.01, category: 'Gases' },
    { name: 'Nitrogen', c: 1.04, category: 'Gases' },
    { name: 'Oxygen', c: 0.918, category: 'Gases' },
  ];

  const examples = [
    {
      name: 'Heating Water',
      mode: 'heat' as CalculationMode,
      mass: '250',
      specificHeat: '4.184',
      initialTemp: '20',
      finalTemp: '100',
      heat: '',
      description: 'Boiling 250g of water',
    },
    {
      name: 'Cooling Metal',
      mode: 'heat' as CalculationMode,
      mass: '500',
      specificHeat: '0.385',
      initialTemp: '200',
      finalTemp: '25',
      heat: '',
      description: 'Copper cooling to room temp',
    },
    {
      name: 'Find Specific Heat',
      mode: 'specificHeat' as CalculationMode,
      mass: '100',
      specificHeat: '',
      heat: '2000',
      initialTemp: '25',
      finalTemp: '75',
      description: 'Unknown substance heated',
    },
  ];

  const fillSubstance = (c: number) => {
    setSpecificHeat(c.toString());
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const m = parseFloat(mass);
      const c = parseFloat(specificHeat);
      const t1 = parseFloat(initialTemp);
      const t2 = parseFloat(finalTemp);
      const q = parseFloat(heat);

      if (mode === 'heat') {
        // Calculate q = mcΔT
        if (isNaN(m) || isNaN(c) || isNaN(t1) || isNaN(t2)) {
          throw new Error('Please enter valid numbers for all fields');
        }
        if (m <= 0) throw new Error('Mass must be positive');
        if (c <= 0) throw new Error('Specific heat must be positive');

        const deltaT = t2 - t1;
        const heatEnergy = m * c * deltaT;
        setResult(heatEnergy);
      } else if (mode === 'mass') {
        // Calculate m = q / (cΔT)
        if (isNaN(q) || isNaN(c) || isNaN(t1) || isNaN(t2)) {
          throw new Error('Please enter valid numbers for all fields');
        }
        if (c <= 0) throw new Error('Specific heat must be positive');
        
        const deltaT = t2 - t1;
        if (deltaT === 0) throw new Error('Temperature change cannot be zero');
        
        const calculatedMass = q / (c * deltaT);
        setResult(calculatedMass);
      } else if (mode === 'specificHeat') {
        // Calculate c = q / (mΔT)
        if (isNaN(q) || isNaN(m) || isNaN(t1) || isNaN(t2)) {
          throw new Error('Please enter valid numbers for all fields');
        }
        if (m <= 0) throw new Error('Mass must be positive');
        
        const deltaT = t2 - t1;
        if (deltaT === 0) throw new Error('Temperature change cannot be zero');
        
        const calculatedC = q / (m * deltaT);
        setResult(calculatedC);
      } else if (mode === 'tempChange') {
        // Calculate ΔT = q / (mc)
        if (isNaN(q) || isNaN(m) || isNaN(c)) {
          throw new Error('Please enter valid numbers for all fields');
        }
        if (m <= 0) throw new Error('Mass must be positive');
        if (c <= 0) throw new Error('Specific heat must be positive');
        
        const deltaT = q / (m * c);
        setResult(deltaT);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    setMass(example.mass);
    setSpecificHeat(example.specificHeat);
    setInitialTemp(example.initialTemp);
    setFinalTemp(example.finalTemp);
    if (example.heat) setHeat(example.heat);
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setMass('100');
    setSpecificHeat('4.184');
    setTempChange('25');
    setInitialTemp('20');
    setFinalTemp('45');
    setHeat('');
    setResult(null);
    setError('');
  };

  const getResultLabel = () => {
    switch (mode) {
      case 'heat':
        return 'Heat Energy (q)';
      case 'mass':
        return 'Mass (m)';
      case 'specificHeat':
        return 'Specific Heat (c)';
      case 'tempChange':
        return 'Temperature Change (ΔT)';
      default:
        return 'Result';
    }
  };

  const getResultUnit = () => {
    switch (mode) {
      case 'heat':
        return 'J (Joules)';
      case 'mass':
        return 'g (grams)';
      case 'specificHeat':
        return 'J/g·°C';
      case 'tempChange':
        return '°C';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            q = mcΔT
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculate heat transfer using the specific heat equation. Choose what you want to find.
          </p>
        </div>

        {/* Calculation Mode Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Calculate:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              onClick={() => setMode('heat')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'heat'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Heat (q)
            </button>
            <button
              onClick={() => setMode('mass')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'mass'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Mass (m)
            </button>
            <button
              onClick={() => setMode('specificHeat')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'specificHeat'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Specific Heat (c)
            </button>
            <button
              onClick={() => setMode('tempChange')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                mode === 'tempChange'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              ΔT
            </button>
          </div>
        </div>

        {/* Example Problems */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Problems:
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
          {mode !== 'mass' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass (m) - grams
              </label>
              <input
                type="number"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="100"
                step="0.01"
              />
            </div>
          )}

          {mode !== 'specificHeat' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Specific Heat (c) - J/g·°C
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={specificHeat}
                  onChange={(e) => setSpecificHeat(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="4.184"
                  step="0.001"
                />
                <details className="relative">
                  <summary className="px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 text-sm">
                    Select
                  </summary>
                  <div className="absolute z-10 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg max-h-64 overflow-y-auto">
                    {commonSubstances.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => fillSubstance(sub.c)}
                        className="w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{sub.name}</span>
                          <span className="text-gray-500">{sub.c}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </details>
              </div>
            </div>
          )}

          {mode !== 'tempChange' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Initial Temperature (T₁) - °C
                </label>
                <input
                  type="number"
                  value={initialTemp}
                  onChange={(e) => setInitialTemp(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="20"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Final Temperature (T₂) - °C
                </label>
                <input
                  type="number"
                  value={finalTemp}
                  onChange={(e) => setFinalTemp(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="45"
                  step="0.1"
                />
              </div>
            </>
          )}

          {(mode === 'mass' || mode === 'specificHeat' || mode === 'tempChange') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Heat Energy (q) - Joules
              </label>
              <input
                type="number"
                value={heat}
                onChange={(e) => setHeat(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="10000"
                step="0.1"
              />
            </div>
          )}
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

        {result !== null && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold">
                {getResultLabel()}: {result.toFixed(2)} {getResultUnit()}
              </p>
              {mode === 'heat' && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    {result > 0 
                      ? '⬆️ Energy absorbed (heating process - endothermic)' 
                      : '⬇️ Energy released (cooling process - exothermic)'}
                  </p>
                  <p className="mt-2">
                    In kJ: <strong>{(result / 1000).toFixed(3)} kJ</strong>
                  </p>
                  {Math.abs(result) >= 4184 && (
                    <p className="mt-1">
                      Enough to change {(Math.abs(result) / 4184).toFixed(1)}g of water by 1°C
                    </p>
                  )}
                </div>
              )}
              {mode === 'specificHeat' && (
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p>Compare with common values:</p>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>Water: 4.184 J/g·°C</li>
                    <li>Aluminum: 0.897 J/g·°C</li>
                    <li>Copper: 0.385 J/g·°C</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Specific Heat
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Specific Heat Capacity (c):</strong> The amount of energy required to raise 
              the temperature of 1 gram of a substance by 1°C. Different materials require different 
              amounts of energy to heat up.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>q:</strong> Heat energy in Joules (J)</li>
              <li><strong>m:</strong> Mass in grams (g)</li>
              <li><strong>c:</strong> Specific heat in J/g·°C</li>
              <li><strong>ΔT:</strong> Temperature change (T₂ - T₁) in °C</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Sign Convention:</strong> Positive q means heat absorbed (temperature increases), 
                negative q means heat released (temperature decreases). Water has one of the highest 
                specific heats, making it excellent for temperature regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificHeatCalculator;
