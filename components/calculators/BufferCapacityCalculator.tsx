'use client';

import React, { useState } from 'react';

type CalculationMode = 'capacity' | 'phChange' | 'design';

const BufferCapacityCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('capacity');

  // Buffer capacity inputs
  const [bufferConcentration, setBufferConcentration] = useState<string>('');
  const [pka, setPka] = useState<string>('');
  const [pH, setPH] = useState<string>('');

  // pH change inputs
  const [initialPH, setInitialPH] = useState<string>('');
  const [acidAdded, setAcidAdded] = useState<string>('');
  const [baseAdded, setBaseAdded] = useState<string>('');
  const [bufferVolume, setBufferVolume] = useState<string>('');
  const [weakAcidConc, setWeakAcidConc] = useState<string>('');
  const [conjugateBaseConc, setConjugateBaseConc] = useState<string>('');

  // Buffer design inputs
  const [targetPH, setTargetPH] = useState<string>('');
  const [totalConcentration, setTotalConcentration] = useState<string>('');
  const [acidPka, setAcidPka] = useState<string>('');

  // Results
  const [bufferCapacity, setBufferCapacity] = useState<string>('');
  const [finalPH, setFinalPH] = useState<string>('');
  const [phDelta, setPhDelta] = useState<string>('');
  const [acidRatio, setAcidRatio] = useState<string>('');
  const [baseRatio, setBaseRatio] = useState<string>('');
  const [effectiveness, setEffectiveness] = useState<string>('');

  // Common buffer systems
  const bufferSystems = [
    {
      name: 'Acetic Acid/Acetate',
      pka: 4.76,
      range: 'pH 3.8-5.8',
      conc: 0.1,
      mode: 'capacity' as CalculationMode,
    },
    {
      name: 'Phosphate Buffer (H₂PO₄⁻/HPO₄²⁻)',
      pka: 7.21,
      range: 'pH 6.2-8.2',
      conc: 0.1,
      mode: 'capacity' as CalculationMode,
    },
    {
      name: 'Tris Buffer',
      pka: 8.06,
      range: 'pH 7.0-9.0',
      conc: 0.05,
      mode: 'capacity' as CalculationMode,
    },
    {
      name: 'Carbonate Buffer',
      pka: 10.33,
      range: 'pH 9.3-11.3',
      conc: 0.1,
      mode: 'capacity' as CalculationMode,
    },
    {
      name: 'Design pH 7.4 Buffer',
      targetpH: 7.4,
      pka: 7.21,
      totalC: 0.1,
      mode: 'design' as CalculationMode,
    },
  ];

  const loadExample = (example: typeof bufferSystems[0]) => {
    setMode(example.mode);
    if (example.pka) {
      setPka(example.pka.toString());
      setAcidPka(example.pka.toString());
    }
    if (example.conc) setBufferConcentration(example.conc.toString());
    if (example.targetpH) setTargetPH(example.targetpH.toString());
    if (example.totalC) setTotalConcentration(example.totalC.toString());
  };

  const calculateBufferCapacity = () => {
    const C = parseFloat(bufferConcentration);
    const pKa = parseFloat(pka);
    const pHval = parseFloat(pH);

    if (isNaN(C) || isNaN(pKa) || isNaN(pHval)) {
      alert('Please enter all values');
      return;
    }

    // Buffer capacity β = 2.303 × C × Ka × [H⁺] / (Ka + [H⁺])²
    // Simplified: β = 2.303 × C × 10^(-pKa) × 10^(-pH) / (10^(-pKa) + 10^(-pH))²
    
    const Ka = Math.pow(10, -pKa);
    const H = Math.pow(10, -pHval);
    
    const beta = 2.303 * C * Ka * H / Math.pow(Ka + H, 2);
    
    setBufferCapacity(beta.toExponential(2));

    // Determine effectiveness
    const pHDiff = Math.abs(pHval - pKa);
    let effect = '';
    
    if (pHDiff <= 1) {
      effect = 'Excellent - within optimal range (pH = pKa ± 1)';
    } else if (pHDiff <= 1.5) {
      effect = 'Good - acceptable buffering capacity';
    } else {
      effect = 'Poor - outside effective buffer range';
    }
    
    setEffectiveness(effect);

    // Maximum capacity occurs at pH = pKa
    const betaMax = 2.303 * C / 4;
    const efficiency = (beta / betaMax) * 100;
    
    setPhDelta(`Efficiency: ${efficiency.toFixed(1)}% of maximum (max at pH = pKa = ${pKa})`);
  };

  const calculatePHChange = () => {
    const pHi = parseFloat(initialPH);
    const Ca = parseFloat(weakAcidConc);
    const Cb = parseFloat(conjugateBaseConc);
    const V = parseFloat(bufferVolume);
    const pKa = parseFloat(pka);
    
    let nAcid = parseFloat(acidAdded) || 0;
    let nBase = parseFloat(baseAdded) || 0;

    if (isNaN(pHi) || isNaN(Ca) || isNaN(Cb) || isNaN(V) || isNaN(pKa)) {
      alert('Please enter buffer composition and pKa');
      return;
    }

    // Convert to moles
    const molesAcid = Ca * V / 1000;
    const molesBase = Cb * V / 1000;

    // After adding strong acid/base
    const finalMolesAcid = molesAcid + nAcid - nBase;
    const finalMolesBase = molesBase - nAcid + nBase;

    if (finalMolesAcid <= 0 || finalMolesBase <= 0) {
      alert('Buffer capacity exceeded - all acid or base consumed');
      setFinalPH('Buffer destroyed');
      setPhDelta('N/A');
      return;
    }

    // Henderson-Hasselbalch
    const pHf = pKa + Math.log10(finalMolesBase / finalMolesAcid);
    
    setFinalPH(pHf.toFixed(2));
    
    const delta = pHf - pHi;
    setPhDelta(`ΔpH = ${delta > 0 ? '+' : ''}${delta.toFixed(2)}`);

    // Calculate buffer capacity from pH change
    const totalAdded = nAcid + nBase;
    if (totalAdded > 0 && Math.abs(delta) > 0.01) {
      const beta = totalAdded / (V / 1000) / Math.abs(delta);
      setBufferCapacity(`β ≈ ${beta.toFixed(3)} mol/(L·pH)`);
    }
  };

  const designBuffer = () => {
    const pHtarget = parseFloat(targetPH);
    const pKa = parseFloat(acidPka);
    const Ctotal = parseFloat(totalConcentration);

    if (isNaN(pHtarget) || isNaN(pKa) || isNaN(Ctotal)) {
      alert('Please enter target pH, pKa, and total concentration');
      return;
    }

    // Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])
    // [A⁻]/[HA] = 10^(pH - pKa)
    const ratio = Math.pow(10, pHtarget - pKa);
    
    // [HA] + [A⁻] = Ctotal
    // [A⁻] = ratio × [HA]
    // [HA](1 + ratio) = Ctotal
    
    const concAcid = Ctotal / (1 + ratio);
    const concBase = Ctotal - concAcid;
    
    setAcidRatio(`[HA] = ${concAcid.toFixed(4)} M`);
    setBaseRatio(`[A⁻] = ${concBase.toFixed(4)} M`);
    
    const percentAcid = (concAcid / Ctotal) * 100;
    const percentBase = (concBase / Ctotal) * 100;
    
    setEffectiveness(`Ratio: ${percentAcid.toFixed(1)}% acid : ${percentBase.toFixed(1)}% base`);

    // Check if within good buffer range
    const pHDiff = Math.abs(pHtarget - pKa);
    if (pHDiff > 1) {
      setPhDelta(`Warning: pH outside optimal range (pKa ± 1). Consider acid with pKa closer to ${pHtarget}.`);
    } else {
      setPhDelta(`Good choice - within optimal buffer range`);
    }

    // Calculate buffer capacity at this composition
    const Ka = Math.pow(10, -pKa);
    const H = Math.pow(10, -pHtarget);
    const beta = 2.303 * Ctotal * Ka * H / Math.pow(Ka + H, 2);
    setBufferCapacity(`Buffer capacity: β = ${beta.toFixed(3)} mol/(L·pH)`);
  };

  const handleCalculate = () => {
    if (mode === 'capacity') {
      calculateBufferCapacity();
    } else if (mode === 'phChange') {
      calculatePHChange();
    } else if (mode === 'design') {
      designBuffer();
    }
  };

  const handleReset = () => {
    setBufferConcentration('');
    setPka('');
    setPH('');
    setInitialPH('');
    setAcidAdded('');
    setBaseAdded('');
    setBufferVolume('');
    setWeakAcidConc('');
    setConjugateBaseConc('');
    setTargetPH('');
    setTotalConcentration('');
    setAcidPka('');
    setBufferCapacity('');
    setFinalPH('');
    setPhDelta('');
    setAcidRatio('');
    setBaseRatio('');
    setEffectiveness('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('capacity')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'capacity'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Buffer Capacity
          </button>
          <button
            onClick={() => setMode('phChange')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'phChange'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            pH Change
          </button>
          <button
            onClick={() => setMode('design')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'design'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Design Buffer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mode === 'capacity' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Buffer Concentration (M)
              </label>
              <input
                type="number"
                value={bufferConcentration}
                onChange={(e) => setBufferConcentration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.1"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKa of Weak Acid
              </label>
              <input
                type="number"
                value={pka}
                onChange={(e) => setPka(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.76"
                step="0.01"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Buffer pH
              </label>
              <input
                type="number"
                value={pH}
                onChange={(e) => setPH(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.76"
                step="0.01"
              />
            </div>
          </>
        )}

        {mode === 'phChange' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Initial pH
              </label>
              <input
                type="number"
                value={initialPH}
                onChange={(e) => setInitialPH(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.76"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKa
              </label>
              <input
                type="number"
                value={pka}
                onChange={(e) => setPka(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4.76"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Weak Acid Concentration (M)
              </label>
              <input
                type="number"
                value={weakAcidConc}
                onChange={(e) => setWeakAcidConc(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.05"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Conjugate Base Concentration (M)
              </label>
              <input
                type="number"
                value={conjugateBaseConc}
                onChange={(e) => setConjugateBaseConc(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.05"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Buffer Volume (mL)
              </label>
              <input
                type="number"
                value={bufferVolume}
                onChange={(e) => setBufferVolume(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 100"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Strong Acid Added (mmol)
              </label>
              <input
                type="number"
                value={acidAdded}
                onChange={(e) => setAcidAdded(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1"
                step="0.1"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Strong Base Added (mmol)
              </label>
              <input
                type="number"
                value={baseAdded}
                onChange={(e) => setBaseAdded(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0"
                step="0.1"
              />
            </div>
          </>
        )}

        {mode === 'design' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Target pH
              </label>
              <input
                type="number"
                value={targetPH}
                onChange={(e) => setTargetPH(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 7.4"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                pKa of Weak Acid
              </label>
              <input
                type="number"
                value={acidPka}
                onChange={(e) => setAcidPka(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 7.21"
                step="0.01"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Buffer Concentration (M)
              </label>
              <input
                type="number"
                value={totalConcentration}
                onChange={(e) => setTotalConcentration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.1"
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
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {(bufferCapacity || finalPH || acidRatio) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            {bufferCapacity && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Buffer Capacity (β)</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{bufferCapacity}</p>
              </div>
            )}

            {finalPH && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Final pH</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{finalPH}</p>
              </div>
            )}

            {phDelta && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">pH Change / Info</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{phDelta}</p>
              </div>
            )}

            {acidRatio && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Weak Acid</p>
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">{acidRatio}</p>
              </div>
            )}

            {baseRatio && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Conjugate Base</p>
                <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">{baseRatio}</p>
              </div>
            )}

            {effectiveness && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Effectiveness</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{effectiveness}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Common Buffer Systems
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {bufferSystems.map((system, index) => (
            <button
              key={index}
              onClick={() => loadExample(system)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{system.name}</div>
              {system.range && (
                <div className="text-sm text-gray-600 dark:text-gray-400">{system.range}</div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Buffer Fundamentals
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>Buffer Capacity (β):</strong> Amount of acid/base that can be added per unit pH change</p>
          <p><strong>Optimal Range:</strong> pH = pKa ± 1 for maximum effectiveness</p>
          <p><strong>Maximum β:</strong> Occurs when pH = pKa (equal concentrations of acid and base)</p>
          <p><strong>Henderson-Hasselbalch:</strong> pH = pKa + log([A⁻]/[HA])</p>
        </div>
      </div>
    </div>
  );
};

export default BufferCapacityCalculator;
