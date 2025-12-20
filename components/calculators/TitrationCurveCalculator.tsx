'use client';

import React, { useState } from 'react';

type CalculationMode = 'strongAcidBase' | 'weakAcid' | 'weakBase';

const TitrationCurveCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('strongAcidBase');

  // Strong acid-base inputs
  const [acidConcentration, setAcidConcentration] = useState<string>('');
  const [acidVolume, setAcidVolume] = useState<string>('');
  const [baseConcentration, setBaseConcentration] = useState<string>('');
  const [volumeAdded, setVolumeAdded] = useState<string>('');

  // Weak acid inputs
  const [ka, setKa] = useState<string>('');
  const [pka, setPka] = useState<string>('');

  // Weak base inputs
  const [kb, setKb] = useState<string>('');
  const [pkb, setPkb] = useState<string>('');

  // Results
  const [pH, setPH] = useState<string>('');
  const [equivalenceVolume, setEquivalenceVolume] = useState<string>('');
  const [titrationRegion, setTitrationRegion] = useState<string>('');
  const [buffering, setBuffering] = useState<string>('');

  // Titration examples database
  const titrationExamples = [
    {
      name: 'HCl + NaOH (Strong-Strong)',
      acidConc: 0.1,
      acidVol: 25,
      baseConc: 0.1,
      volume: 12.5,
      type: 'strongAcidBase' as CalculationMode,
    },
    {
      name: 'CH₃COOH + NaOH (Weak Acid)',
      acidConc: 0.1,
      acidVol: 50,
      baseConc: 0.1,
      ka: 1.8e-5,
      volume: 25,
      type: 'weakAcid' as CalculationMode,
    },
    {
      name: 'NH₃ + HCl (Weak Base)',
      baseConc: 0.1,
      acidVol: 50,
      acidConc: 0.1,
      kb: 1.8e-5,
      volume: 25,
      type: 'weakBase' as CalculationMode,
    },
    {
      name: 'HCl + NaOH at Equivalence',
      acidConc: 0.1,
      acidVol: 25,
      baseConc: 0.1,
      volume: 25,
      type: 'strongAcidBase' as CalculationMode,
    },
    {
      name: 'CH₃COOH at Half-Equivalence',
      acidConc: 0.1,
      acidVol: 50,
      baseConc: 0.1,
      ka: 1.8e-5,
      volume: 25,
      type: 'weakAcid' as CalculationMode,
    },
  ];

  const loadExample = (example: typeof titrationExamples[0]) => {
    setMode(example.type);
    setAcidConcentration(example.acidConc?.toString() || '');
    setAcidVolume(example.acidVol?.toString() || '');
    setBaseConcentration(example.baseConc?.toString() || '');
    setVolumeAdded(example.volume?.toString() || '');
    if (example.ka) {
      setKa(example.ka.toExponential());
      setPka((-Math.log10(example.ka)).toFixed(2));
    }
    if (example.kb) {
      setKb(example.kb.toExponential());
      setPkb((-Math.log10(example.kb)).toFixed(2));
    }
  };

  const calculateStrongAcidBase = () => {
    const Ca = parseFloat(acidConcentration);
    const Va = parseFloat(acidVolume);
    const Cb = parseFloat(baseConcentration);
    const Vb = parseFloat(volumeAdded);

    if (isNaN(Ca) || isNaN(Va) || isNaN(Cb) || isNaN(Vb)) {
      alert('Please enter valid numerical values');
      return;
    }

    // Calculate equivalence volume
    const Veq = (Ca * Va) / Cb;
    setEquivalenceVolume(Veq.toFixed(2));

    const totalVolume = Va + Vb;

    let pHValue: number;
    let region: string;

    if (Vb < Veq - 0.01) {
      // Before equivalence - excess acid
      const excessAcid = (Ca * Va - Cb * Vb) / totalVolume;
      pHValue = -Math.log10(excessAcid);
      region = 'Before Equivalence Point (Excess Acid)';
      setBuffering('No - strong acid/base system');
    } else if (Math.abs(Vb - Veq) < 0.01) {
      // At equivalence point
      pHValue = 7.0;
      region = 'At Equivalence Point';
      setBuffering('No - neutral solution');
    } else {
      // After equivalence - excess base
      const excessBase = (Cb * Vb - Ca * Va) / totalVolume;
      const pOH = -Math.log10(excessBase);
      pHValue = 14 - pOH;
      region = 'After Equivalence Point (Excess Base)';
      setBuffering('No - strong acid/base system');
    }

    setPH(pHValue.toFixed(2));
    setTitrationRegion(region);
  };

  const calculateWeakAcid = () => {
    const Ca = parseFloat(acidConcentration);
    const Va = parseFloat(acidVolume);
    const Cb = parseFloat(baseConcentration);
    const Vb = parseFloat(volumeAdded);
    const Ka = ka ? parseFloat(ka) : pka ? Math.pow(10, -parseFloat(pka)) : NaN;

    if (isNaN(Ca) || isNaN(Va) || isNaN(Cb) || isNaN(Vb) || isNaN(Ka)) {
      alert('Please enter valid numerical values including Ka or pKa');
      return;
    }

    const Veq = (Ca * Va) / Cb;
    setEquivalenceVolume(Veq.toFixed(2));

    const totalVolume = Va + Vb;
    const molesAcid = Ca * Va / 1000;
    const molesBase = Cb * Vb / 1000;

    let pHValue: number;
    let region: string;

    if (Vb < 0.01) {
      // Initial pH - weak acid only
      pHValue = 0.5 * (pka ? parseFloat(pka) : -Math.log10(Ka)) - 0.5 * Math.log10(Ca);
      region = 'Initial (Weak Acid)';
      setBuffering('No - no conjugate base present');
    } else if (Vb < Veq - 0.01) {
      // Buffer region - Henderson-Hasselbalch
      const molesRemaining = molesAcid - molesBase;
      const molesConjugate = molesBase;
      const pKaValue = pka ? parseFloat(pka) : -Math.log10(Ka);
      
      if (Math.abs(Vb - Veq / 2) < 0.1) {
        // At half-equivalence point
        pHValue = pKaValue;
        region = 'Half-Equivalence Point (pH = pKa)';
        setBuffering('Yes - maximum buffer capacity');
      } else {
        pHValue = pKaValue + Math.log10(molesConjugate / molesRemaining);
        region = 'Buffer Region';
        setBuffering('Yes - buffer present');
      }
    } else if (Math.abs(Vb - Veq) < 0.01) {
      // At equivalence point - weak base (conjugate)
      const Cconjugate = molesAcid / (totalVolume / 1000);
      const Kb = 1e-14 / Ka;
      const OH = Math.sqrt(Kb * Cconjugate);
      const pOH = -Math.log10(OH);
      pHValue = 14 - pOH;
      region = 'At Equivalence Point (Basic)';
      setBuffering('No - only conjugate base present');
    } else {
      // After equivalence - excess strong base
      const excessBase = (molesBase - molesAcid) / (totalVolume / 1000);
      const pOH = -Math.log10(excessBase);
      pHValue = 14 - pOH;
      region = 'After Equivalence Point (Excess Base)';
      setBuffering('No - dominated by excess base');
    }

    setPH(pHValue.toFixed(2));
    setTitrationRegion(region);
  };

  const calculateWeakBase = () => {
    const Cb = parseFloat(baseConcentration);
    const Vb = parseFloat(acidVolume); // Base initial volume
    const Ca = parseFloat(acidConcentration);
    const Va = parseFloat(volumeAdded); // Acid added
    const Kb = kb ? parseFloat(kb) : pkb ? Math.pow(10, -parseFloat(pkb)) : NaN;

    if (isNaN(Ca) || isNaN(Va) || isNaN(Cb) || isNaN(Vb) || isNaN(Kb)) {
      alert('Please enter valid numerical values including Kb or pKb');
      return;
    }

    const Veq = (Cb * Vb) / Ca;
    setEquivalenceVolume(Veq.toFixed(2));

    const totalVolume = Va + Vb;
    const molesBase = Cb * Vb / 1000;
    const molesAcid = Ca * Va / 1000;

    let pHValue: number;
    let region: string;

    if (Va < 0.01) {
      // Initial pH - weak base only
      const pKbValue = pkb ? parseFloat(pkb) : -Math.log10(Kb);
      const pOH = 0.5 * pKbValue - 0.5 * Math.log10(Cb);
      pHValue = 14 - pOH;
      region = 'Initial (Weak Base)';
      setBuffering('No - no conjugate acid present');
    } else if (Va < Veq - 0.01) {
      // Buffer region
      const molesRemaining = molesBase - molesAcid;
      const molesConjugate = molesAcid;
      const pKbValue = pkb ? parseFloat(pkb) : -Math.log10(Kb);
      const pOH = pKbValue + Math.log10(molesConjugate / molesRemaining);
      pHValue = 14 - pOH;
      
      if (Math.abs(Va - Veq / 2) < 0.1) {
        region = 'Half-Equivalence Point (pOH = pKb)';
        setBuffering('Yes - maximum buffer capacity');
      } else {
        region = 'Buffer Region';
        setBuffering('Yes - buffer present');
      }
    } else if (Math.abs(Va - Veq) < 0.01) {
      // At equivalence point - weak acid (conjugate)
      const Cconjugate = molesBase / (totalVolume / 1000);
      const Ka = 1e-14 / Kb;
      const H = Math.sqrt(Ka * Cconjugate);
      pHValue = -Math.log10(H);
      region = 'At Equivalence Point (Acidic)';
      setBuffering('No - only conjugate acid present');
    } else {
      // After equivalence - excess strong acid
      const excessAcid = (molesAcid - molesBase) / (totalVolume / 1000);
      pHValue = -Math.log10(excessAcid);
      region = 'After Equivalence Point (Excess Acid)';
      setBuffering('No - dominated by excess acid');
    }

    setPH(pHValue.toFixed(2));
    setTitrationRegion(region);
  };

  const handleCalculate = () => {
    if (mode === 'strongAcidBase') {
      calculateStrongAcidBase();
    } else if (mode === 'weakAcid') {
      calculateWeakAcid();
    } else if (mode === 'weakBase') {
      calculateWeakBase();
    }
  };

  const handleReset = () => {
    setAcidConcentration('');
    setAcidVolume('');
    setBaseConcentration('');
    setVolumeAdded('');
    setKa('');
    setPka('');
    setKb('');
    setPkb('');
    setPH('');
    setEquivalenceVolume('');
    setTitrationRegion('');
    setBuffering('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('strongAcidBase')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'strongAcidBase'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Strong Acid-Base
          </button>
          <button
            onClick={() => setMode('weakAcid')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'weakAcid'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Weak Acid Titration
          </button>
          <button
            onClick={() => setMode('weakBase')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'weakBase'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Weak Base Titration
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'weakBase' ? 'Acid Concentration (M)' : 'Acid Concentration (M)'}
          </label>
          <input
            type="number"
            value={acidConcentration}
            onChange={(e) => setAcidConcentration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 0.1"
            step="0.001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'weakBase' ? 'Base Initial Volume (mL)' : 'Acid Initial Volume (mL)'}
          </label>
          <input
            type="number"
            value={acidVolume}
            onChange={(e) => setAcidVolume(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 25"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'weakBase' ? 'Base Concentration (M)' : 'Base Concentration (M)'}
          </label>
          <input
            type="number"
            value={baseConcentration}
            onChange={(e) => setBaseConcentration(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 0.1"
            step="0.001"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'weakBase' ? 'Acid Volume Added (mL)' : 'Base Volume Added (mL)'}
          </label>
          <input
            type="number"
            value={volumeAdded}
            onChange={(e) => setVolumeAdded(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 12.5"
            step="0.1"
          />
        </div>

        {mode === 'weakAcid' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ka (Acid Dissociation Constant)
              </label>
              <input
                type="text"
                value={ka}
                onChange={(e) => {
                  setKa(e.target.value);
                  if (e.target.value) {
                    const kaVal = parseFloat(e.target.value);
                    if (!isNaN(kaVal)) setPka((-Math.log10(kaVal)).toFixed(2));
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1.8e-5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKa (or enter Ka)
              </label>
              <input
                type="number"
                value={pka}
                onChange={(e) => {
                  setPka(e.target.value);
                  if (e.target.value) {
                    const pkaVal = parseFloat(e.target.value);
                    if (!isNaN(pkaVal)) setKa(Math.pow(10, -pkaVal).toExponential(2));
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.74"
                step="0.01"
              />
            </div>
          </>
        )}

        {mode === 'weakBase' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Kb (Base Dissociation Constant)
              </label>
              <input
                type="text"
                value={kb}
                onChange={(e) => {
                  setKb(e.target.value);
                  if (e.target.value) {
                    const kbVal = parseFloat(e.target.value);
                    if (!isNaN(kbVal)) setPkb((-Math.log10(kbVal)).toFixed(2));
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1.8e-5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKb (or enter Kb)
              </label>
              <input
                type="number"
                value={pkb}
                onChange={(e) => {
                  setPkb(e.target.value);
                  if (e.target.value) {
                    const pkbVal = parseFloat(e.target.value);
                    if (!isNaN(pkbVal)) setKb(Math.pow(10, -pkbVal).toExponential(2));
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.74"
                step="0.01"
              />
            </div>
          </>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Calculate pH
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {pH && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">pH</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{pH}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Equivalence Volume</p>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{equivalenceVolume} mL</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Titration Region</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{titrationRegion}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">Buffer Capacity</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{buffering}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Example Titrations</h3>
        <div className="grid grid-cols-1 gap-2">
          {titrationExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <span className="font-medium text-gray-800 dark:text-white">{example.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Understanding Titration Curves
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Strong Acid-Strong Base:</strong> Sharp equivalence point at pH 7, large pH jump
          </p>
          <p>
            <strong>Weak Acid-Strong Base:</strong> Equivalence point &gt; 7, buffer region present, pH = pKa at half-equivalence
          </p>
          <p>
            <strong>Weak Base-Strong Acid:</strong> Equivalence point &lt; 7, buffer region present, pOH = pKb at half-equivalence
          </p>
          <p>
            <strong>Buffer Region:</strong> Resists pH changes, uses Henderson-Hasselbalch equation
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitrationCurveCalculator;
