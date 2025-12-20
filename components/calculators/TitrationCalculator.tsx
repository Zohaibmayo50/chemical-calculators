'use client';

import React, { useState } from 'react';

type TitrationType = 'strong-strong' | 'weak-strong' | 'strong-weak';

const TitrationCalculator: React.FC = () => {
  const [titrationType, setTitrationType] = useState<TitrationType>('strong-strong');
  const [acidConc, setAcidConc] = useState<string>('');
  const [acidVolume, setAcidVolume] = useState<string>('');
  const [baseConc, setBaseConc] = useState<string>('');
  const [baseVolume, setBaseVolume] = useState<string>('');
  const [ka, setKa] = useState<string>('');
  const [kb, setKb] = useState<string>('');
  const [result, setResult] = useState<{
    equivalencePoint: number;
    equivalenceVolume: number;
    initialPH: number;
    halfwayPH?: number;
    phAtEquivalence: number;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const Ca = parseFloat(acidConc);
      const Va = parseFloat(acidVolume);
      const Cb = parseFloat(baseConc);
      const Vb = parseFloat(baseVolume);

      if (Ca <= 0 || Va <= 0 || Cb <= 0 || Vb <= 0) {
        setError('All concentrations and volumes must be positive');
        return;
      }

      // Calculate moles
      const molesAcid = Ca * (Va / 1000); // Convert mL to L
      const molesBase = Cb * (Vb / 1000);

      // Equivalence point volume (volume of base needed)
      const Veq = (Ca * Va) / Cb; // in mL

      // Calculate initial pH
      let initialPH = 7;
      let halfwayPH: number | undefined = undefined;
      let phAtEquivalence = 7;

      if (titrationType === 'strong-strong') {
        // Strong acid-strong base
        initialPH = -Math.log10(Ca);
        phAtEquivalence = 7.0; // Neutral at equivalence point

      } else if (titrationType === 'weak-strong') {
        // Weak acid-strong base
        if (!ka) {
          setError('Ka is required for weak acid titrations');
          return;
        }
        const kaVal = parseFloat(ka);
        if (kaVal <= 0) {
          setError('Ka must be positive');
          return;
        }

        // Initial pH: weak acid
        // HA ⇌ H+ + A-
        // Ka = [H+][A-]/[HA] ≈ x²/C (assuming x << C)
        const hPlus = Math.sqrt(kaVal * Ca);
        initialPH = -Math.log10(hPlus);

        // Halfway to equivalence: pH = pKa (buffer region)
        halfwayPH = -Math.log10(kaVal);

        // At equivalence: only conjugate base (A-) present
        // The base hydrolysis reaction: A- + H2O ⇌ HA + OH-
        // Kb = Kw/Ka
        const Kw = 1e-14;
        const Kb = Kw / kaVal;
        
        // Concentration of A- at equivalence
        const concConjugateBase = molesAcid / ((Va + Veq) / 1000);
        
        // [OH-] = sqrt(Kb * C)
        const ohMinus = Math.sqrt(Kb * concConjugateBase);
        const pOH = -Math.log10(ohMinus);
        phAtEquivalence = 14 - pOH;

      } else if (titrationType === 'strong-weak') {
        // Strong acid-weak base
        if (!kb) {
          setError('Kb is required for weak base titrations');
          return;
        }
        const kbVal = parseFloat(kb);
        if (kbVal <= 0) {
          setError('Kb must be positive');
          return;
        }

        // Initial pH: weak base
        // B + H2O ⇌ BH+ + OH-
        // Kb = [BH+][OH-]/[B] ≈ x²/C
        const ohMinus = Math.sqrt(kbVal * Cb);
        const pOH = -Math.log10(ohMinus);
        initialPH = 14 - pOH;

        // Halfway to equivalence: pH = 14 - pKb (buffer region)
        halfwayPH = 14 - (-Math.log10(kbVal));

        // At equivalence: only conjugate acid (BH+) present
        // Ka = Kw/Kb
        const Kw = 1e-14;
        const Ka = Kw / kbVal;
        
        // Concentration of BH+ at equivalence
        // Note: For strong acid titrating weak base, Veq is different
        const VeqBase = (Cb * Vb) / Ca; // volume of acid needed
        const concConjugateAcid = molesBase / ((Vb + VeqBase) / 1000);
        
        // [H+] = sqrt(Ka * C)
        const hPlus = Math.sqrt(Ka * concConjugateAcid);
        phAtEquivalence = -Math.log10(hPlus);
      }

      // pH at current point (with added base volume)
      let currentPH = initialPH;
      
      if (Vb < Veq) {
        // Before equivalence point
        if (titrationType === 'strong-strong') {
          const excessAcid = molesAcid - molesBase;
          const totalVolume = (Va + Vb) / 1000;
          const hConc = excessAcid / totalVolume;
          currentPH = -Math.log10(hConc);
        } else if (titrationType === 'weak-strong') {
          // Buffer region: Henderson-Hasselbalch
          const kaVal = parseFloat(ka);
          const molesHA = molesAcid - molesBase;
          const molesA = molesBase;
          currentPH = -Math.log10(kaVal) + Math.log10(molesA / molesHA);
        }
      } else if (Vb > Veq) {
        // After equivalence point - excess base
        const excessBase = molesBase - molesAcid;
        const totalVolume = (Va + Vb) / 1000;
        const ohConc = excessBase / totalVolume;
        const pOH = -Math.log10(ohConc);
        currentPH = 14 - pOH;
      } else {
        // At equivalence point
        currentPH = phAtEquivalence;
      }

      setResult({
        equivalencePoint: currentPH,
        equivalenceVolume: Veq,
        initialPH,
        halfwayPH,
        phAtEquivalence,
      });
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setAcidConc('');
    setAcidVolume('');
    setBaseConc('');
    setBaseVolume('');
    setKa('');
    setKb('');
    setResult(null);
    setError('');
  };

  const setExample = (example: string) => {
    if (example === 'hcl-naoh') {
      setTitrationType('strong-strong');
      setAcidConc('0.1');
      setAcidVolume('25');
      setBaseConc('0.1');
      setBaseVolume('0');
      setKa('');
      setKb('');
    } else if (example === 'acetic-naoh') {
      setTitrationType('weak-strong');
      setAcidConc('0.1');
      setAcidVolume('25');
      setBaseConc('0.1');
      setBaseVolume('0');
      setKa('1.8e-5');
      setKb('');
    } else if (example === 'ammonia-hcl') {
      setTitrationType('strong-weak');
      setAcidConc('0.1');
      setAcidVolume('0');
      setBaseConc('0.1');
      setBaseVolume('25');
      setKa('');
      setKb('1.8e-5');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Titration Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Acid-Base Titration:</strong> Calculate pH at various points during titration
          <br />
          Determines equivalence point, initial pH, and pH changes throughout the titration
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Titration Type
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {[
            { type: 'strong-strong' as TitrationType, label: 'Strong Acid - Strong Base' },
            { type: 'weak-strong' as TitrationType, label: 'Weak Acid - Strong Base' },
            { type: 'strong-weak' as TitrationType, label: 'Strong Acid - Weak Base' },
          ].map(({ type, label }) => (
            <button
              key={type}
              onClick={() => setTitrationType(type)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                titrationType === type
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
          Example Titrations
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setExample('hcl-naoh')}
            className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
          >
            HCl + NaOH
          </button>
          <button
            onClick={() => setExample('acetic-naoh')}
            className="py-2 px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 text-sm font-medium transition-colors"
          >
            CH₃COOH + NaOH
          </button>
          <button
            onClick={() => setExample('ammonia-hcl')}
            className="py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 text-sm font-medium transition-colors"
          >
            NH₃ + HCl
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Acid Concentration (M)
            </label>
            <input
              type="number"
              value={acidConc}
              onChange={(e) => setAcidConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter acid concentration"
              step="any"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Acid Volume (mL)
            </label>
            <input
              type="number"
              value={acidVolume}
              onChange={(e) => setAcidVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter acid volume"
              step="any"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Base Concentration (M)
            </label>
            <input
              type="number"
              value={baseConc}
              onChange={(e) => setBaseConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter base concentration"
              step="any"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Base Volume Added (mL)
            </label>
            <input
              type="number"
              value={baseVolume}
              onChange={(e) => setBaseVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter base volume added"
              step="any"
            />
          </div>
        </div>

        {titrationType === 'weak-strong' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ka (Acid Dissociation Constant)
            </label>
            <input
              type="text"
              value={ka}
              onChange={(e) => setKa(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="e.g., 1.8e-5"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use scientific notation (e.g., 1.8e-5 for 1.8 × 10⁻⁵)
            </p>
          </div>
        )}

        {titrationType === 'strong-weak' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kb (Base Dissociation Constant)
            </label>
            <input
              type="text"
              value={kb}
              onChange={(e) => setKb(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="e.g., 1.8e-5"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use scientific notation (e.g., 1.8e-5 for 1.8 × 10⁻⁵)
            </p>
          </div>
        )}
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Initial pH:
              </h3>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {result.initialPH.toFixed(2)}
              </p>
            </div>

            <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                pH at Equivalence:
              </h3>
              <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                {result.phAtEquivalence.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Current pH:
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400">
              {result.equivalencePoint.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              At {baseVolume} mL of base added
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
              Equivalence Point Volume: {result.equivalenceVolume.toFixed(2)} mL
            </p>
            {result.halfwayPH !== undefined && (
              <p className="text-sm text-purple-800 dark:text-purple-200 mt-1">
                pH at halfway point (½ × {result.equivalenceVolume.toFixed(2)} mL): {result.halfwayPH.toFixed(2)}
              </p>
            )}
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Indicator Selection:</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Choose an indicator with pKa close to the pH at equivalence point ({result.phAtEquivalence.toFixed(2)})
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {result.phAtEquivalence < 5 && '• Methyl orange (pKa 3.7) - suitable for strong acid-weak base'}
              {result.phAtEquivalence >= 6 && result.phAtEquivalence <= 8 && '• Bromothymol blue (pKa 7.0) - suitable for strong acid-strong base'}
              {result.phAtEquivalence > 8 && '• Phenolphthalein (pKa 9.3) - suitable for weak acid-strong base'}
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Ka/Kb Values:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>
            <strong>Weak Acids:</strong>
            <ul className="ml-4 mt-1">
              <li>• Acetic acid (CH₃COOH): Ka = 1.8×10⁻⁵</li>
              <li>• Formic acid (HCOOH): Ka = 1.8×10⁻⁴</li>
              <li>• Benzoic acid (C₆H₅COOH): Ka = 6.3×10⁻⁵</li>
            </ul>
          </div>
          <div>
            <strong>Weak Bases:</strong>
            <ul className="ml-4 mt-1">
              <li>• Ammonia (NH₃): Kb = 1.8×10⁻⁵</li>
              <li>• Methylamine (CH₃NH₂): Kb = 4.4×10⁻⁴</li>
              <li>• Pyridine (C₅H₅N): Kb = 1.7×10⁻⁹</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitrationCalculator;
