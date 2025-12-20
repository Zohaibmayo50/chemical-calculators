'use client';

import React, { useState } from 'react';

const DaltonsLawCalculator: React.FC = () => {
  const [gases, setGases] = useState<{ name: string; pressure: string }[]>([
    { name: 'Gas 1', pressure: '' },
    { name: 'Gas 2', pressure: '' },
  ]);
  const [totalPressure, setTotalPressure] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const addGas = () => {
    setGases([...gases, { name: `Gas ${gases.length + 1}`, pressure: '' }]);
  };

  const removeGas = (index: number) => {
    if (gases.length > 2) {
      setGases(gases.filter((_, i) => i !== index));
    }
  };

  const updateGas = (index: number, field: 'name' | 'pressure', value: string) => {
    const newGases = [...gases];
    newGases[index][field] = value;
    setGases(newGases);
  };

  const calculate = () => {
    setError('');
    setTotalPressure(null);

    try {
      let total = 0;
      for (const gas of gases) {
        if (!gas.pressure) {
          setError('Please fill in all partial pressures');
          return;
        }
        const pressure = parseFloat(gas.pressure);
        if (pressure < 0) {
          setError('Pressures must be non-negative');
          return;
        }
        total += pressure;
      }

      setTotalPressure(total);
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setGases([
      { name: 'Gas 1', pressure: '' },
      { name: 'Gas 2', pressure: '' },
    ]);
    setTotalPressure(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dalton&apos;s Law Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Dalton&apos;s Law:</strong> P<sub>total</sub> = P₁ + P₂ + P₃ + ...
          <br />
          Total pressure of a gas mixture equals the sum of partial pressures
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Partial Pressures of Gases
          </label>
          <button
            onClick={addGas}
            className="text-sm px-3 py-1 bg-tertiary-600 text-white rounded-lg hover:bg-tertiary-700 transition-colors"
          >
            + Add Gas
          </button>
        </div>

        <div className="space-y-3">
          {gases.map((gas, index) => (
            <div key={index} className="grid grid-cols-5 gap-2">
              <input
                type="text"
                value={gas.name}
                onChange={(e) => updateGas(index, 'name', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder={`Gas ${index + 1} name`}
              />
              <input
                type="number"
                value={gas.pressure}
                onChange={(e) => updateGas(index, 'pressure', e.target.value)}
                className="col-span-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Partial pressure"
                step="any"
              />
              {gases.length > 2 && (
                <button
                  onClick={() => removeGas(index)}
                  className="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          All pressures must be in the same units (atm, kPa, mmHg, etc.)
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate Total Pressure
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 
                   transition-colors duration-200"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {totalPressure !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Total Pressure (P<sub>total</sub>):
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {totalPressure.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Same units as input pressures
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Mole Fractions:</h4>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {gases.map((gas, index) => {
                const pressure = parseFloat(gas.pressure);
                const moleFraction = (pressure / totalPressure) * 100;
                return (
                  <div key={index} className="flex justify-between">
                    <span>{gas.name}:</span>
                    <span className="font-mono">
                      χ = {(pressure / totalPressure).toFixed(4)} ({moleFraction.toFixed(2)}%)
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Mole fraction χ = P<sub>gas</sub> / P<sub>total</sub>
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Each gas behaves independently in an ideal mixture</li>
              <li>• Partial pressure is the pressure the gas would exert alone</li>
              <li>• Mole fraction equals partial pressure fraction</li>
              <li>• Sum of mole fractions always equals 1</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Example: Air Composition (1 atm):</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• N₂: 0.78 atm (78%)</div>
          <div>• O₂: 0.21 atm (21%)</div>
          <div>• Ar: 0.009 atm (0.9%)</div>
          <div>• CO₂: 0.0004 atm (0.04%)</div>
        </div>
      </div>
    </div>
  );
};

export default DaltonsLawCalculator;
