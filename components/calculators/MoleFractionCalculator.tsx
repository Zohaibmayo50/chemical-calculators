'use client';

import React, { useState } from 'react';

interface Component {
  name: string;
  moles: string;
}

export default function MoleFractionCalculator() {
  const [components, setComponents] = useState<Component[]>([
    { name: 'Component A', moles: '' },
    { name: 'Component B', moles: '' }
  ]);
  const [results, setResults] = useState<{ name: string; moleFraction: number; percentage: number }[]>([]);

  const addComponent = () => {
    const nextLetter = String.fromCharCode(65 + components.length);
    setComponents([...components, { name: `Component ${nextLetter}`, moles: '' }]);
  };

  const removeComponent = (index: number) => {
    if (components.length > 2) {
      const newComponents = components.filter((_, i) => i !== index);
      setComponents(newComponents);
    }
  };

  const updateComponent = (index: number, field: 'name' | 'moles', value: string) => {
    const newComponents = [...components];
    newComponents[index][field] = value;
    setComponents(newComponents);
  };

  const calculateMoleFractions = () => {
    const moles = components.map(c => parseFloat(c.moles));
    
    if (moles.some(m => isNaN(m) || m < 0)) {
      setResults([]);
      return;
    }

    const totalMoles = moles.reduce((sum, m) => sum + m, 0);
    
    if (totalMoles === 0) {
      setResults([]);
      return;
    }

    const calculatedResults = components.map((component, index) => ({
      name: component.name,
      moleFraction: moles[index] / totalMoles,
      percentage: (moles[index] / totalMoles) * 100
    }));

    setResults(calculatedResults);
  };

  const handleReset = () => {
    setComponents([
      { name: 'Component A', moles: '' },
      { name: 'Component B', moles: '' }
    ]);
    setResults([]);
  };

  const totalMoleFraction = results.reduce((sum, r) => sum + r.moleFraction, 0);

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Mole Fraction Calculator</h2>
        
        <p className="text-slate-600 text-sm mb-6">
          Enter the number of moles for each component in your mixture. Mole fractions will be calculated automatically.
        </p>

        {/* Component Inputs */}
        <div className="space-y-4 mb-6">
          {components.map((component, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Component Name
                </label>
                <input
                  type="text"
                  value={component.name}
                  onChange={(e) => updateComponent(index, 'name', e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Moles
                </label>
                <input
                  type="number"
                  value={component.moles}
                  onChange={(e) => updateComponent(index, 'moles', e.target.value)}
                  placeholder="e.g., 2.5"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {components.length > 2 && (
                <button
                  onClick={() => removeComponent(index)}
                  className="mt-8 px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors"
                  title="Remove component"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add Component Button */}
        {components.length < 10 && (
          <button
            onClick={addComponent}
            className="w-full mb-6 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors border border-slate-300"
          >
            + Add Component
          </button>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={calculateMoleFractions}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Calculate
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Results Display */}
        {results.length > 0 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Mole Fractions:</h3>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-green-100 last:border-0">
                  <span className="font-medium text-slate-700">{result.name}:</span>
                  <div className="text-right">
                    <span className="font-bold text-green-700">χ = {result.moleFraction.toFixed(4)}</span>
                    <span className="text-sm text-slate-600 ml-2">({result.percentage.toFixed(2)}%)</span>
                  </div>
                </div>
              ))}
              <div className="pt-3 mt-3 border-t-2 border-green-300 flex justify-between items-center">
                <span className="font-semibold text-slate-900">Total:</span>
                <span className="font-bold text-green-800">
                  Σχ = {totalMoleFraction.toFixed(4)}
                </span>
              </div>
            </div>
            {Math.abs(totalMoleFraction - 1) < 0.0001 && (
              <p className="text-xs text-green-600 mt-2">✓ Sum of mole fractions equals 1 (valid)</p>
            )}
          </div>
        )}
      </div>

      {/* Common Mixtures Reference */}
      <div className="bg-slate-50 border-t border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">Common Mixtures (Mole Fractions)</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Air Composition (dry)</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• N₂: χ = 0.7808 (78.08%)</li>
              <li>• O₂: χ = 0.2095 (20.95%)</li>
              <li>• Ar: χ = 0.0093 (0.93%)</li>
              <li>• CO₂: χ = 0.0004 (0.04%)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Ethanol-Water Solutions</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Beer (~5% v/v): χ(EtOH) ≈ 0.017</li>
              <li>• Wine (~12% v/v): χ(EtOH) ≈ 0.042</li>
              <li>• Vodka (~40% v/v): χ(EtOH) ≈ 0.19</li>
              <li>• Azeotrope (95.6% v/v): χ(EtOH) ≈ 0.89</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Binary Salt Solutions</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• NaCl in water (saturated): χ(NaCl) ≈ 0.10</li>
              <li>• Glucose (1 M): χ(glucose) ≈ 0.018</li>
              <li>• Seawater: χ(salts) ≈ 0.01</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Gas Mixtures</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Natural gas: mostly CH₄ (χ ≈ 0.95)</li>
              <li>• Syngas: CO + H₂ (variable)</li>
              <li>• Flue gas: N₂ + CO₂ + H₂O</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Note: χ (chi) represents mole fraction. For ideal solutions: Σχᵢ = 1. Mole fraction is dimensionless (0 to 1).
        </p>
      </div>
    </div>
  );
}
