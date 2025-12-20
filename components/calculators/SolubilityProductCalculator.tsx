'use client';

import React, { useState } from 'react';

type SolveMode = 'Qsp' | 'solubility';

const SolubilityProductCalculator: React.FC = () => {
  const [solveMode, setSolveMode] = useState<SolveMode>('Qsp');
  const [cationConc, setCationConc] = useState<string>('');
  const [anionConc, setAnionConc] = useState<string>('');
  const [cationCoeff, setCationCoeff] = useState<string>('1');
  const [anionCoeff, setAnionCoeff] = useState<string>('1');
  const [ksp, setKsp] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [precipitate, setPrecipitate] = useState<string>('');
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);
    setPrecipitate('');

    try {
      const cationC = parseFloat(cationConc);
      const anionC = parseFloat(anionConc);
      const cationN = parseFloat(cationCoeff);
      const anionN = parseFloat(anionCoeff);
      const kspVal = parseFloat(ksp);

      if (solveMode === 'Qsp') {
        if (!cationConc || !anionConc || !cationCoeff || !anionCoeff) {
          setError('Please enter all concentrations and coefficients');
          return;
        }
        if (cationC < 0 || anionC < 0 || cationN <= 0 || anionN <= 0) {
          setError('Concentrations must be non-negative and coefficients positive');
          return;
        }

        // Qsp = [cation]^m [anion]^n
        const qsp = Math.pow(cationC, cationN) * Math.pow(anionC, anionN);
        setResult(qsp);

        // Compare with Ksp if provided
        if (ksp) {
          if (qsp > kspVal) {
            setPrecipitate('Precipitation will occur (Qsp > Ksp)');
          } else if (qsp < kspVal) {
            setPrecipitate('No precipitation (Qsp < Ksp) - unsaturated');
          } else {
            setPrecipitate('Saturated solution (Qsp = Ksp) - at equilibrium');
          }
        }
      } else if (solveMode === 'solubility') {
        if (!ksp || !cationCoeff || !anionCoeff) {
          setError('Please enter Ksp and coefficients');
          return;
        }
        if (kspVal <= 0 || cationN <= 0 || anionN <= 0) {
          setError('All values must be positive');
          return;
        }

        // For a salt M_m A_n: Ksp = (ms)^m (ns)^n where s is molar solubility
        // Ksp = (m^m)(n^n)(s^(m+n))
        // s = (Ksp / (m^m * n^n))^(1/(m+n))
        
        const power = cationN + anionN;
        const coefficient = Math.pow(cationN, cationN) * Math.pow(anionN, anionN);
        const solubility = Math.pow(kspVal / coefficient, 1 / power);
        
        setResult(solubility);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setCationConc('');
    setAnionConc('');
    setCationCoeff('1');
    setAnionCoeff('1');
    setKsp('');
    setResult(null);
    setPrecipitate('');
    setError('');
  };

  const loadCompound = (compound: string) => {
    const compounds: { [key: string]: { ksp: string; cation: string; anion: string } } = {
      'AgCl': { ksp: '1.8e-10', cation: '1', anion: '1' },
      'BaSO4': { ksp: '1.1e-10', cation: '1', anion: '1' },
      'CaCO3': { ksp: '3.4e-9', cation: '1', anion: '1' },
      'PbI2': { ksp: '7.1e-9', cation: '1', anion: '2' },
      'Ag2CrO4': { ksp: '1.1e-12', cation: '2', anion: '1' },
      'Ca3(PO4)2': { ksp: '2.1e-33', cation: '3', anion: '2' },
    };

    if (compounds[compound]) {
      setKsp(compounds[compound].ksp);
      setCationCoeff(compounds[compound].cation);
      setAnionCoeff(compounds[compound].anion);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Solubility Product Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Solubility Product (Ksp):</strong> For M<sub>m</sub>A<sub>n</sub> ⇌ mM<sup>+</sup> + nA<sup>-</sup>
          <br />
          Ksp = [M<sup>+</sup>]<sup>m</sup>[A<sup>-</sup>]<sup>n</sup>
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculate
        </label>
        <div className="grid grid-cols-2 gap-2">
          {[
            { mode: 'Qsp' as SolveMode, label: 'Qsp & Precipitation' },
            { mode: 'solubility' as SolveMode, label: 'Molar Solubility' },
          ].map(({ mode, label }) => (
            <button
              key={mode}
              onClick={() => setSolveMode(mode)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                solveMode === mode
                  ? 'bg-tertiary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Common Compounds (Quick Fill)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { key: 'AgCl', label: 'AgCl' },
            { key: 'BaSO4', label: 'BaSO₄' },
            { key: 'CaCO3', label: 'CaCO₃' },
            { key: 'PbI2', label: 'PbI₂' },
            { key: 'Ag2CrO4', label: 'Ag₂CrO₄' },
            { key: 'Ca3(PO4)2', label: 'Ca₃(PO₄)₂' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => loadCompound(key)}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-sm font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
          <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">
            Dissolution: M<sub>m</sub>A<sub>n</sub> ⇌ mM<sup>+</sup> + nA<sup>-</sup>
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cation Coefficient (m)
              </label>
              <input
                type="number"
                value={cationCoeff}
                onChange={(e) => setCationCoeff(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                step="1"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Anion Coefficient (n)
              </label>
              <input
                type="number"
                value={anionCoeff}
                onChange={(e) => setAnionCoeff(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                step="1"
                min="1"
              />
            </div>
          </div>
        </div>

        {solveMode === 'Qsp' && (
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [Cation] Concentration (M)
              </label>
              <input
                type="number"
                value={cationConc}
                onChange={(e) => setCationConc(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Enter [M⁺]"
                step="any"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                [Anion] Concentration (M)
              </label>
              <input
                type="number"
                value={anionConc}
                onChange={(e) => setAnionConc(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
                placeholder="Enter [A⁻]"
                step="any"
              />
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Ksp Value {solveMode === 'solubility' && <span className="text-tertiary-600">(Required)</span>}
            {solveMode === 'Qsp' && <span className="text-gray-500">(Optional for comparison)</span>}
          </label>
          <input
            type="text"
            value={ksp}
            onChange={(e) => setKsp(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="e.g., 1.8e-10"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Use scientific notation (e.g., 1.8e-10)</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate
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

      {result !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {solveMode === 'Qsp' ? 'Reaction Quotient (Qsp):' : 'Molar Solubility:'}
            </h3>
            <p className="text-3xl font-bold text-tertiary-600 dark:text-tertiary-400">
              {result.toExponential(3)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {solveMode === 'solubility' && 'mol/L (M)'}
            </p>
          </div>

          {precipitate && (
            <div className={`p-4 rounded-lg ${
              precipitate.includes('will occur') 
                ? 'bg-red-50 dark:bg-red-900/30' 
                : precipitate.includes('No precipitation')
                ? 'bg-green-50 dark:bg-green-900/30'
                : 'bg-yellow-50 dark:bg-yellow-900/30'
            }`}>
              <p className={`font-semibold ${
                precipitate.includes('will occur')
                  ? 'text-red-900 dark:text-red-100'
                  : precipitate.includes('No precipitation')
                  ? 'text-green-900 dark:text-green-100'
                  : 'text-yellow-900 dark:text-yellow-100'
              }`}>
                {precipitate}
              </p>
              {precipitate.includes('will occur') && (
                <p className="text-sm text-red-800 dark:text-red-200 mt-2">
                  Qsp = {result.toExponential(3)} &gt; Ksp = {parseFloat(ksp).toExponential(3)}
                </p>
              )}
              {precipitate.includes('No precipitation') && (
                <p className="text-sm text-green-800 dark:text-green-200 mt-2">
                  Qsp = {result.toExponential(3)} &lt; Ksp = {parseFloat(ksp).toExponential(3)}
                </p>
              )}
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {solveMode === 'Qsp' ? (
                <>
                  <li>• Qsp &gt; Ksp: Precipitation occurs</li>
                  <li>• Qsp &lt; Ksp: No precipitation, unsaturated</li>
                  <li>• Qsp = Ksp: Saturated, at equilibrium</li>
                </>
              ) : (
                <>
                  <li>• Lower Ksp = less soluble compound</li>
                  <li>• Solubility depends on temperature</li>
                  <li>• Common ion effect reduces solubility</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ksp Values at 25°C:</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• AgCl: 1.8×10⁻¹⁰</div>
          <div>• BaSO₄: 1.1×10⁻¹⁰</div>
          <div>• CaCO₃: 3.4×10⁻⁹</div>
          <div>• PbI₂: 7.1×10⁻⁹</div>
          <div>• Ag₂CrO₄: 1.1×10⁻¹²</div>
          <div>• Ca₃(PO₄)₂: 2.1×10⁻³³</div>
        </div>
      </div>
    </div>
  );
};

export default SolubilityProductCalculator;
