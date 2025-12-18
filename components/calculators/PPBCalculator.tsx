'use client';

import React, { useState } from 'react';

type CalculationMode = 'calculate-ppb' | 'calculate-solute' | 'calculate-solution';

export default function PPBCalculator() {
  const [mode, setMode] = useState<CalculationMode>('calculate-ppb');
  const [soluteMass, setSoluteMass] = useState<string>('');
  const [solutionMass, setSolutionMass] = useState<string>('');
  const [ppb, setPPB] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePPB = () => {
    const solute = parseFloat(soluteMass);
    const solution = parseFloat(solutionMass);

    if (isNaN(solute) || isNaN(solution) || solution === 0) {
      setResult(null);
      return;
    }

    const ppbValue = (solute / solution) * 1000000000;
    setResult(ppbValue);
  };

  const calculateSoluteMass = () => {
    const ppbValue = parseFloat(ppb);
    const solution = parseFloat(solutionMass);

    if (isNaN(ppbValue) || isNaN(solution)) {
      setResult(null);
      return;
    }

    const solute = (ppbValue * solution) / 1000000000;
    setResult(solute);
  };

  const calculateSolutionMass = () => {
    const solute = parseFloat(soluteMass);
    const ppbValue = parseFloat(ppb);

    if (isNaN(solute) || isNaN(ppbValue) || ppbValue === 0) {
      setResult(null);
      return;
    }

    const solution = (solute * 1000000000) / ppbValue;
    setResult(solution);
  };

  const handleCalculate = () => {
    switch (mode) {
      case 'calculate-ppb':
        calculatePPB();
        break;
      case 'calculate-solute':
        calculateSoluteMass();
        break;
      case 'calculate-solution':
        calculateSolutionMass();
        break;
    }
  };

  const handleReset = () => {
    setSoluteMass('');
    setSolutionMass('');
    setPPB('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">PPB Calculator</h2>
        
        {/* Mode Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            What do you want to calculate?
          </label>
          <select
            value={mode}
            onChange={(e) => {
              setMode(e.target.value as CalculationMode);
              handleReset();
            }}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="calculate-ppb">Calculate PPB</option>
            <option value="calculate-solute">Calculate Solute Mass</option>
            <option value="calculate-solution">Calculate Solution Mass</option>
          </select>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {mode === 'calculate-ppb' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mass of Solute (μg, mg, or g)
                </label>
                <input
                  type="number"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  placeholder="e.g., 0.05"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mass of Solution (same units as solute)
                </label>
                <input
                  type="number"
                  value={solutionMass}
                  onChange={(e) => setSolutionMass(e.target.value)}
                  placeholder="e.g., 1000"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </>
          )}

          {mode === 'calculate-solute' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  PPB (parts per billion)
                </label>
                <input
                  type="number"
                  value={ppb}
                  onChange={(e) => setPPB(e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mass of Solution (g, kg, or L for aqueous)
                </label>
                <input
                  type="number"
                  value={solutionMass}
                  onChange={(e) => setSolutionMass(e.target.value)}
                  placeholder="e.g., 1000"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </>
          )}

          {mode === 'calculate-solution' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mass of Solute (μg, mg, or g)
                </label>
                <input
                  type="number"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  placeholder="e.g., 0.05"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  PPB (parts per billion)
                </label>
                <input
                  type="number"
                  value={ppb}
                  onChange={(e) => setPPB(e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleCalculate}
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

        {/* Result Display */}
        {result !== null && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Result:</h3>
            {mode === 'calculate-ppb' && (
              <p className="text-slate-700">
                <span className="font-bold text-green-700">{result.toFixed(2)} ppb</span>
                <span className="text-sm text-slate-600 ml-2">({(result / 1000).toFixed(4)} ppm)</span>
              </p>
            )}
            {mode === 'calculate-solute' && (
              <p className="text-slate-700">
                Mass of Solute: <span className="font-bold text-green-700">{result.toExponential(4)} (same units as solution)</span>
              </p>
            )}
            {mode === 'calculate-solution' && (
              <p className="text-slate-700">
                Mass of Solution: <span className="font-bold text-green-700">{result.toFixed(2)} (same units as solute)</span>
              </p>
            )}
          </div>
        )}
      </div>

      {/* Common PPB Values Reference */}
      <div className="bg-slate-50 border-t border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">Common PPB Concentrations</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Environmental Limits</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Lead in water: 15 ppb (EPA action level)</li>
              <li>• Arsenic in water: 10 ppb (MCL)</li>
              <li>• Mercury in water: 2 ppb (MCL)</li>
              <li>• Cadmium in water: 5 ppb (MCL)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Trace Analysis</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Heavy metals in soil: 1-100 ppb</li>
              <li>• Dioxins: measured in ppb-ppt</li>
              <li>• PCBs in water: &lt;0.5 ppb</li>
              <li>• Pesticide residues: 0.1-10 ppb</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Pharmaceutical</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Drug impurities: &lt;100 ppb</li>
              <li>• Heavy metals: &lt;10 ppb typical</li>
              <li>• Residual solvents: varies by class</li>
              <li>• Elemental impurities: ICH Q3D</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Ultrapure Applications</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Semiconductor water: &lt;1 ppb</li>
              <li>• Electronics: ppb-ppt levels</li>
              <li>• High-purity chemicals: &lt;10 ppb</li>
              <li>• Research-grade reagents</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Note: 1 ppb = 0.001 ppm = 1 μg/L (for dilute aqueous solutions). PPB = parts per billion = (mass_solute/mass_solution) × 10⁹
        </p>
      </div>
    </div>
  );
}
