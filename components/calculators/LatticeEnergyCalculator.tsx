'use client';

import React, { useState } from 'react';

type CalculationMode = 'bornLande' | 'kapustinskii' | 'bornHaber';

const LatticeEnergyCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('kapustinskii');

  // Born-Landé equation inputs
  const [madelung, setMadelung] = useState<string>('');
  const [cationCharge, setCationCharge] = useState<string>('');
  const [anionCharge, setAnionCharge] = useState<string>('');
  const [cationRadius, setCationRadius] = useState<string>('');
  const [anionRadius, setAnionRadius] = useState<string>('');
  const [bornExponent, setBornExponent] = useState<string>('');

  // Kapustinskii equation inputs
  const [numIons, setNumIons] = useState<string>('');
  const [zPlus, setZPlus] = useState<string>('');
  const [zMinus, setZMinus] = useState<string>('');
  const [rPlus, setRPlus] = useState<string>('');
  const [rMinus, setRMinus] = useState<string>('');

  // Born-Haber cycle inputs
  const [sublimation, setSublimation] = useState<string>('');
  const [ionization, setIonization] = useState<string>('');
  const [dissociation, setDissociation] = useState<string>('');
  const [electronAffinity, setElectronAffinity] = useState<string>('');
  const [formationEnthalpy, setFormationEnthalpy] = useState<string>('');

  // Results
  const [latticeEnergy, setLatticeEnergy] = useState<string>('');
  const [energyPerIon, setEnergyPerIon] = useState<string>('');
  const [stability, setStability] = useState<string>('');
  const [comparison, setComparison] = useState<string>('');

  // Common ionic compounds database
  const compounds = [
    {
      name: 'NaCl (Sodium Chloride)',
      mode: 'kapustinskii' as CalculationMode,
      v: 2,
      zp: 1,
      zm: 1,
      rp: 102,
      rm: 181,
      actual: 786,
    },
    {
      name: 'MgO (Magnesium Oxide)',
      mode: 'kapustinskii' as CalculationMode,
      v: 2,
      zp: 2,
      zm: 2,
      rp: 72,
      rm: 140,
      actual: 3850,
    },
    {
      name: 'CaF₂ (Calcium Fluoride)',
      mode: 'kapustinskii' as CalculationMode,
      v: 3,
      zp: 2,
      zm: 1,
      rp: 100,
      rm: 133,
      actual: 2630,
    },
    {
      name: 'Al₂O₃ (Aluminum Oxide)',
      mode: 'kapustinskii' as CalculationMode,
      v: 5,
      zp: 3,
      zm: 2,
      rp: 54,
      rm: 140,
      actual: 15300,
    },
    {
      name: 'KCl (Potassium Chloride)',
      mode: 'kapustinskii' as CalculationMode,
      v: 2,
      zp: 1,
      zm: 1,
      rp: 138,
      rm: 181,
      actual: 717,
    },
    {
      name: 'LiF (Lithium Fluoride)',
      mode: 'kapustinskii' as CalculationMode,
      v: 2,
      zp: 1,
      zm: 1,
      rp: 76,
      rm: 133,
      actual: 1037,
    },
  ];

  const loadExample = (example: typeof compounds[0]) => {
    setMode(example.mode);
    setNumIons(example.v.toString());
    setZPlus(example.zp.toString());
    setZMinus(example.zm.toString());
    setRPlus(example.rp.toString());
    setRMinus(example.rm.toString());
  };

  const calculateKapustinskii = () => {
    const v = parseFloat(numIons);
    const zp = parseFloat(zPlus);
    const zm = parseFloat(zMinus);
    const rp = parseFloat(rPlus);
    const rm = parseFloat(rMinus);

    if (isNaN(v) || isNaN(zp) || isNaN(zm) || isNaN(rp) || isNaN(rm)) {
      alert('Please enter all values for Kapustinskii equation');
      return;
    }

    // Kapustinskii equation: U = (1202 × v × |z+| × |z-|) / (r+ + r-)
    // Factor includes conversion to kJ/mol
    const K = 1202; // kJ·pm/mol
    const rSum = rp + rm; // in pm
    const U = (K * v * Math.abs(zp) * Math.abs(zm)) / rSum;

    setLatticeEnergy(`${U.toFixed(0)} kJ/mol`);
    setEnergyPerIon(`${(U / v).toFixed(0)} kJ/mol per ion pair`);

    // Stability interpretation
    let stabilityText = '';
    if (U > 3000) {
      stabilityText = 'Extremely high lattice energy - very stable ionic compound with high melting point';
    } else if (U > 2000) {
      stabilityText = 'High lattice energy - stable compound with elevated melting point';
    } else if (U > 1000) {
      stabilityText = 'Moderate lattice energy - moderately stable ionic compound';
    } else {
      stabilityText = 'Low lattice energy - relatively less stable, lower melting point';
    }
    setStability(stabilityText);

    // Charge and size effects
    const chargeProduct = Math.abs(zp * zm);
    let comparisonText = '';
    
    if (chargeProduct === 1) {
      comparisonText = '1:1 compound - moderate electrostatic attraction';
    } else if (chargeProduct === 2) {
      comparisonText = '2:1 or 1:2 compound - enhanced electrostatic attraction';
    } else if (chargeProduct >= 4) {
      comparisonText = 'High charge product - very strong electrostatic attraction, high stability';
    }
    
    if (rSum < 250) {
      comparisonText += '. Small ionic radii - increased lattice energy';
    } else if (rSum > 350) {
      comparisonText += '. Large ionic radii - decreased lattice energy';
    }
    
    setComparison(comparisonText);
  };

  const calculateBornLande = () => {
    const A = parseFloat(madelung);
    const zp = parseFloat(cationCharge);
    const zm = parseFloat(anionCharge);
    const rp = parseFloat(cationRadius);
    const rm = parseFloat(anionRadius);
    const n = parseFloat(bornExponent);

    if (isNaN(A) || isNaN(zp) || isNaN(zm) || isNaN(rp) || isNaN(rm) || isNaN(n)) {
      alert('Please enter all values for Born-Landé equation');
      return;
    }

    // Born-Landé equation: U = (N_A × A × e² × |z+| × |z-|) / (4πε₀ × r₀) × (1 - 1/n)
    // Simplified: U = (1389 × A × |z+| × |z-|) / r₀ × (1 - 1/n)
    // where 1389 kJ·pm/mol includes all constants
    
    const r0 = rp + rm; // in pm
    const constant = 1389; // kJ·pm/mol
    const U = (constant * A * Math.abs(zp) * Math.abs(zm) / r0) * (1 - 1/n);

    setLatticeEnergy(`${U.toFixed(0)} kJ/mol`);
    setEnergyPerIon(`${U.toFixed(0)} kJ/mol (total)`);

    let stabilityText = '';
    if (U > 3000) {
      stabilityText = 'Very high lattice energy - extremely stable crystal structure';
    } else if (U > 2000) {
      stabilityText = 'High lattice energy - stable ionic solid';
    } else {
      stabilityText = 'Moderate lattice energy';
    }
    setStability(stabilityText);

    setComparison(`Madelung constant A = ${A.toFixed(3)} indicates ${getMadelungStructure(A)}`);
  };

  const calculateBornHaber = () => {
    const subH = parseFloat(sublimation);
    const ionH = parseFloat(ionization);
    const dissH = parseFloat(dissociation);
    const eaH = parseFloat(electronAffinity);
    const formH = parseFloat(formationEnthalpy);

    if (isNaN(subH) || isNaN(ionH) || isNaN(dissH) || isNaN(eaH) || isNaN(formH)) {
      alert('Please enter all enthalpy values for Born-Haber cycle');
      return;
    }

    // Born-Haber cycle: ΔH_f = ΔH_sub + ΔH_ion + (1/2)ΔH_diss + ΔH_EA + U
    // Solving for U: U = ΔH_f - ΔH_sub - ΔH_ion - (1/2)ΔH_diss - ΔH_EA
    // Note: EA is typically negative (energy released), so we add it
    
    const U = formH - subH - ionH - dissH - eaH;

    setLatticeEnergy(`${U.toFixed(0)} kJ/mol`);
    setEnergyPerIon(`${U.toFixed(0)} kJ/mol (lattice energy)`);

    let stabilityText = '';
    if (U < -3000) {
      stabilityText = 'Very exothermic lattice formation - highly stable ionic compound';
    } else if (U < -2000) {
      stabilityText = 'Exothermic lattice formation - stable compound';
    } else if (U < -1000) {
      stabilityText = 'Moderately exothermic - stable ionic solid';
    } else {
      stabilityText = 'Low lattice energy';
    }
    setStability(stabilityText);

    // Energy balance
    const totalInput = subH + ionH + dissH;
    const totalOutput = Math.abs(eaH) + Math.abs(U);
    setComparison(
      `Energy input: ${totalInput.toFixed(0)} kJ/mol | Energy output: ${totalOutput.toFixed(0)} kJ/mol | Net: ${formH.toFixed(0)} kJ/mol`
    );
  };

  const getMadelungStructure = (A: number): string => {
    if (Math.abs(A - 1.748) < 0.01) return 'Rock salt (NaCl) structure';
    if (Math.abs(A - 1.763) < 0.01) return 'Cesium chloride (CsCl) structure';
    if (Math.abs(A - 1.638) < 0.01) return 'Zinc blende (ZnS) structure';
    if (Math.abs(A - 2.408) < 0.01) return 'Fluorite (CaF₂) structure';
    if (Math.abs(A - 4.172) < 0.01) return 'Rutile (TiO₂) structure';
    return 'specific crystal structure';
  };

  const handleCalculate = () => {
    if (mode === 'kapustinskii') {
      calculateKapustinskii();
    } else if (mode === 'bornLande') {
      calculateBornLande();
    } else if (mode === 'bornHaber') {
      calculateBornHaber();
    }
  };

  const handleReset = () => {
    setMadelung('');
    setCationCharge('');
    setAnionCharge('');
    setCationRadius('');
    setAnionRadius('');
    setBornExponent('');
    setNumIons('');
    setZPlus('');
    setZMinus('');
    setRPlus('');
    setRMinus('');
    setSublimation('');
    setIonization('');
    setDissociation('');
    setElectronAffinity('');
    setFormationEnthalpy('');
    setLatticeEnergy('');
    setEnergyPerIon('');
    setStability('');
    setComparison('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Method
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('kapustinskii')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'kapustinskii'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Kapustinskii
          </button>
          <button
            onClick={() => setMode('bornLande')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'bornLande'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Born-Landé
          </button>
          <button
            onClick={() => setMode('bornHaber')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'bornHaber'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Born-Haber Cycle
          </button>
        </div>
      </div>

      {mode === 'kapustinskii' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Ions (v)
            </label>
            <input
              type="number"
              value={numIons}
              onChange={(e) => setNumIons(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 2 for NaCl, 3 for CaF₂"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cation Charge (z⁺)
            </label>
            <input
              type="number"
              value={zPlus}
              onChange={(e) => setZPlus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., +1, +2, +3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Anion Charge (z⁻)
            </label>
            <input
              type="number"
              value={zMinus}
              onChange={(e) => setZMinus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., -1, -2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cation Radius (pm)
            </label>
            <input
              type="number"
              value={rPlus}
              onChange={(e) => setRPlus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 102 for Na⁺"
              step="0.1"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Anion Radius (pm)
            </label>
            <input
              type="number"
              value={rMinus}
              onChange={(e) => setRMinus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 181 for Cl⁻"
              step="0.1"
            />
          </div>
        </div>
      )}

      {mode === 'bornLande' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Madelung Constant (A)
            </label>
            <input
              type="number"
              value={madelung}
              onChange={(e) => setMadelung(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1.748 for NaCl"
              step="0.001"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Born Exponent (n)
            </label>
            <input
              type="number"
              value={bornExponent}
              onChange={(e) => setBornExponent(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 7-12"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cation Charge
            </label>
            <input
              type="number"
              value={cationCharge}
              onChange={(e) => setCationCharge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., +1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Anion Charge
            </label>
            <input
              type="number"
              value={anionCharge}
              onChange={(e) => setAnionCharge(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., -1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cation Radius (pm)
            </label>
            <input
              type="number"
              value={cationRadius}
              onChange={(e) => setCationRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 102"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Anion Radius (pm)
            </label>
            <input
              type="number"
              value={anionRadius}
              onChange={(e) => setAnionRadius(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 181"
              step="0.1"
            />
          </div>
        </div>
      )}

      {mode === 'bornHaber' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sublimation Enthalpy (kJ/mol)
            </label>
            <input
              type="number"
              value={sublimation}
              onChange={(e) => setSublimation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 108 for Na(s) → Na(g)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Ionization Enthalpy (kJ/mol)
            </label>
            <input
              type="number"
              value={ionization}
              onChange={(e) => setIonization(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 496 for Na → Na⁺"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bond Dissociation (kJ/mol)
            </label>
            <input
              type="number"
              value={dissociation}
              onChange={(e) => setDissociation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 122 for ½Cl₂ → Cl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Electron Affinity (kJ/mol)
            </label>
            <input
              type="number"
              value={electronAffinity}
              onChange={(e) => setElectronAffinity(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., -349 for Cl → Cl⁻"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Formation Enthalpy (kJ/mol)
            </label>
            <input
              type="number"
              value={formationEnthalpy}
              onChange={(e) => setFormationEnthalpy(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., -411 for NaCl formation"
            />
          </div>
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Calculate Lattice Energy
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {latticeEnergy && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Lattice Energy</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{latticeEnergy}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Energy Per Ion</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">{energyPerIon}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Stability Assessment</p>
              <p className="text-gray-700 dark:text-gray-300">{stability}</p>
            </div>

            {comparison && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Analysis</p>
                <p className="text-gray-700 dark:text-gray-300">{comparison}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Compounds
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {compounds.map((compound, index) => (
            <button
              key={index}
              onClick={() => loadExample(compound)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{compound.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Experimental: {compound.actual} kJ/mol
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Lattice Energy Basics
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p>
            <strong>Kapustinskii:</strong> U = (1202 × v × |z⁺| × |z⁻|) / (r⁺ + r⁻)
          </p>
          <p>
            <strong>Born-Landé:</strong> U = (1389 × A × |z⁺| × |z⁻|) / r₀ × (1 - 1/n)
          </p>
          <p>
            <strong>Trends:</strong> Higher charges → higher U; Smaller radii → higher U
          </p>
          <p>
            <strong>Applications:</strong> Predicts solubility, melting points, compound stability
          </p>
        </div>
      </div>
    </div>
  );
};

export default LatticeEnergyCalculator;
