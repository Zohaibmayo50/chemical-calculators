'use client';
import React, { useState } from 'react';

export default function CombustionAnalysisCalculator() {
  const [sampleMass, setSampleMass] = useState<string>('');
  const [co2Mass, setCo2Mass] = useState<string>('');
  const [h2oMass, setH2oMass] = useState<string>('');
  const [n2Mass, setN2Mass] = useState<string>('');
  const [carbonPercent, setCarbonPercent] = useState<number | null>(null);
  const [hydrogenPercent, setHydrogenPercent] = useState<number | null>(null);
  const [nitrogenPercent, setNitrogenPercent] = useState<number | null>(null);
  const [oxygenPercent, setOxygenPercent] = useState<number | null>(null);
  const [empiricalFormula, setEmpiricalFormula] = useState<string>('');

  const calculateComposition = () => {
    const m_sample = parseFloat(sampleMass);
    const m_co2 = parseFloat(co2Mass);
    const m_h2o = parseFloat(h2oMass);
    const m_n2 = parseFloat(n2Mass) || 0;

    if (isNaN(m_sample) || isNaN(m_co2) || isNaN(m_h2o)) {
      alert('Please enter valid numbers for sample mass, CO₂, and H₂O');
      return;
    }

    if (m_sample <= 0) {
      alert('Sample mass must be positive');
      return;
    }

    // Calculate mass of each element
    // From CO2: mass of C = (12/44) × mass of CO2
    const mass_C = (12.01 / 44.01) * m_co2;
    
    // From H2O: mass of H = (2/18) × mass of H2O
    const mass_H = (2.016 / 18.015) * m_h2o;
    
    // From N2: mass of N = (28/28) × mass of N2
    const mass_N = m_n2;
    
    // Oxygen by difference
    const mass_O = m_sample - mass_C - mass_H - mass_N;

    // Calculate percentages
    const percent_C = (mass_C / m_sample) * 100;
    const percent_H = (mass_H / m_sample) * 100;
    const percent_N = (mass_N / m_sample) * 100;
    const percent_O = (mass_O / m_sample) * 100;

    setCarbonPercent(percent_C);
    setHydrogenPercent(percent_H);
    setNitrogenPercent(percent_N);
    setOxygenPercent(percent_O > 0 ? percent_O : 0);

    // Calculate empirical formula
    const moles_C = mass_C / 12.01;
    const moles_H = mass_H / 1.008;
    const moles_N = mass_N / 14.01;
    const moles_O = mass_O / 16.00;

    // Find smallest mole value
    const moleValues = [moles_C, moles_H, moles_N, moles_O > 0 ? moles_O : Infinity];
    const smallest = Math.min(...moleValues);

    // Divide by smallest to get ratios
    const ratio_C = Math.round((moles_C / smallest) * 2) / 2;
    const ratio_H = Math.round((moles_H / smallest) * 2) / 2;
    const ratio_N = Math.round((moles_N / smallest) * 2) / 2;
    const ratio_O = moles_O > 0 ? Math.round((moles_O / smallest) * 2) / 2 : 0;

    // Build empirical formula string
    let formula = '';
    if (ratio_C > 0) formula += `C${ratio_C > 1 ? ratio_C : ''}`;
    if (ratio_H > 0) formula += `H${ratio_H > 1 ? ratio_H : ''}`;
    if (ratio_N > 0) formula += `N${ratio_N > 1 ? ratio_N : ''}`;
    if (ratio_O > 0) formula += `O${ratio_O > 1 ? ratio_O : ''}`;

    setEmpiricalFormula(formula || 'Unable to determine');
  };

  const handleReset = () => {
    setSampleMass('');
    setCo2Mass('');
    setH2oMass('');
    setN2Mass('');
    setCarbonPercent(null);
    setHydrogenPercent(null);
    setNitrogenPercent(null);
    setOxygenPercent(null);
    setEmpiricalFormula('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Combustion Analysis Calculator
        </h2>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
          <p className="text-sm text-gray-700 dark:text-gray-200">
            <strong>Analysis:</strong> Burn organic compound, measure CO₂ and H₂O produced<br/>
            <strong>From CO₂:</strong> %C = (12/44) × (m<sub>CO₂</sub> / m<sub>sample</sub>) × 100<br/>
            <strong>From H₂O:</strong> %H = (2/18) × (m<sub>H₂O</sub> / m<sub>sample</sub>) × 100
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Sample Mass (mg)
          </label>
          <input
            type="number"
            value={sampleMass}
            onChange={(e) => setSampleMass(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="e.g., 1.50"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            CO₂ Produced (mg)
          </label>
          <input
            type="number"
            value={co2Mass}
            onChange={(e) => setCo2Mass(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="e.g., 3.30"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            H₂O Produced (mg)
          </label>
          <input
            type="number"
            value={h2oMass}
            onChange={(e) => setH2oMass(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="e.g., 1.35"
            step="0.01"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
            N₂ Produced (mg) - Optional
          </label>
          <input
            type="number"
            value={n2Mass}
            onChange={(e) => setN2Mass(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="e.g., 0.20 (leave blank if none)"
            step="0.01"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={calculateComposition}
          className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Calculate Composition
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-xl transition-all duration-200"
        >
          Reset
        </button>
      </div>

      {carbonPercent !== null && (
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 animate-fade-in">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-4">
            Elemental Composition:
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Carbon (C):</span>
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {carbonPercent.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
              <span className="font-semibold text-gray-700 dark:text-gray-300">Hydrogen (H):</span>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {hydrogenPercent!.toFixed(2)}%
              </span>
            </div>
            {nitrogenPercent! > 0 && (
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Nitrogen (N):</span>
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  {nitrogenPercent!.toFixed(2)}%
                </span>
              </div>
            )}
            {oxygenPercent! > 0 && (
              <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Oxygen (O):</span>
                <span className="text-xl font-bold text-red-600 dark:text-red-400">
                  {oxygenPercent!.toFixed(2)}%
                </span>
              </div>
            )}
            
            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Empirical Formula:</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 text-center">
                {empiricalFormula}
              </p>
            </div>

            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Note: Oxygen calculated by difference. N₂ analysis optional for nitrogen-containing compounds.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
