'use client';

import React, { useState } from 'react';

type CalculationMode = 'calculate-ppm' | 'calculate-solute' | 'calculate-solution';

export default function PPMCalculator() {
  const [mode, setMode] = useState<CalculationMode>('calculate-ppm');
  const [soluteMass, setSoluteMass] = useState<string>('');
  const [solutionMass, setSolutionMass] = useState<string>('');
  const [ppm, setPPM] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculatePPM = () => {
    const solute = parseFloat(soluteMass);
    const solution = parseFloat(solutionMass);

    if (isNaN(solute) || isNaN(solution) || solution === 0) {
      setResult(null);
      return;
    }

    const ppmValue = (solute / solution) * 1000000;
    setResult(ppmValue);
  };

  const calculateSoluteMass = () => {
    const ppmValue = parseFloat(ppm);
    const solution = parseFloat(solutionMass);

    if (isNaN(ppmValue) || isNaN(solution)) {
      setResult(null);
      return;
    }

    const solute = (ppmValue * solution) / 1000000;
    setResult(solute);
  };

  const calculateSolutionMass = () => {
    const solute = parseFloat(soluteMass);
    const ppmValue = parseFloat(ppm);

    if (isNaN(solute) || isNaN(ppmValue) || ppmValue === 0) {
      setResult(null);
      return;
    }

    const solution = (solute * 1000000) / ppmValue;
    setResult(solution);
  };

  const handleCalculate = () => {
    switch (mode) {
      case 'calculate-ppm':
        calculatePPM();
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
    setPPM('');
    setResult(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-slate-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">PPM Calculator</h2>
        
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
            <option value="calculate-ppm">Calculate PPM</option>
            <option value="calculate-solute">Calculate Solute Mass</option>
            <option value="calculate-solution">Calculate Solution Mass</option>
          </select>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {mode === 'calculate-ppm' && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mass of Solute (mg, g, or kg)
                </label>
                <input
                  type="number"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  placeholder="e.g., 5"
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
                  PPM (parts per million)
                </label>
                <input
                  type="number"
                  value={ppm}
                  onChange={(e) => setPPM(e.target.value)}
                  placeholder="e.g., 5000"
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
                  Mass of Solute (mg, g, or kg)
                </label>
                <input
                  type="number"
                  value={soluteMass}
                  onChange={(e) => setSoluteMass(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  PPM (parts per million)
                </label>
                <input
                  type="number"
                  value={ppm}
                  onChange={(e) => setPPM(e.target.value)}
                  placeholder="e.g., 5000"
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
            {mode === 'calculate-ppm' && (
              <p className="text-slate-700">
                <span className="font-bold text-green-700">{result.toFixed(2)} ppm</span>
              </p>
            )}
            {mode === 'calculate-solute' && (
              <p className="text-slate-700">
                Mass of Solute: <span className="font-bold text-green-700">{result.toFixed(4)} (same units as solution)</span>
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

      {/* Common PPM Values Reference */}
      <div className="bg-slate-50 border-t border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">Common PPM Values</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Water Quality</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Drinking water TDS: 50-500 ppm</li>
              <li>• Pool chlorine: 1-3 ppm</li>
              <li>• Hard water (Ca²⁺): &gt;120 ppm</li>
              <li>• EPA lead limit: 15 ppb (0.015 ppm)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Air Quality</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• CO₂ indoor: 400-1000 ppm</li>
              <li>• CO safety limit: 35 ppm (8h)</li>
              <li>• Ozone: 0.070 ppm (8h standard)</li>
              <li>• VOCs indoor: &lt;0.5 ppm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Soil/Agriculture</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Soil nitrogen: 20-40 ppm</li>
              <li>• Soil phosphorus: 25-50 ppm</li>
              <li>• Soil potassium: 100-250 ppm</li>
              <li>• Micronutrients: 0.1-50 ppm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">Industrial</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• Boiler water TDS: &lt;1 ppm</li>
              <li>• Coolant additives: 500-3000 ppm</li>
              <li>• Metal impurities: &lt;10 ppm</li>
              <li>• Trace contaminants: &lt;1 ppm</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Note: For dilute aqueous solutions, 1 ppm ≈ 1 mg/L. PPM = parts per million = (mass_solute/mass_solution) × 10⁶
        </p>
      </div>
    </div>
  );
}
