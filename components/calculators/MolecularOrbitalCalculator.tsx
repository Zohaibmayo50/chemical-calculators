'use client';

import React, { useState } from 'react';

type CalculationMode = 'bondOrder' | 'magnetism' | 'stability';

interface Molecule {
  name: string;
  formula: string;
  totalElectrons: number;
  bondOrder: number;
  magnetic: 'paramagnetic' | 'diamagnetic';
}

const diatomicMolecules: Molecule[] = [
  { name: 'Hydrogen', formula: 'H₂', totalElectrons: 2, bondOrder: 1, magnetic: 'diamagnetic' },
  { name: 'Helium', formula: 'He₂', totalElectrons: 4, bondOrder: 0, magnetic: 'diamagnetic' },
  { name: 'Lithium', formula: 'Li₂', totalElectrons: 6, bondOrder: 1, magnetic: 'diamagnetic' },
  { name: 'Nitrogen', formula: 'N₂', totalElectrons: 14, bondOrder: 3, magnetic: 'diamagnetic' },
  { name: 'Oxygen', formula: 'O₂', totalElectrons: 16, bondOrder: 2, magnetic: 'paramagnetic' },
  { name: 'Fluorine', formula: 'F₂', totalElectrons: 18, bondOrder: 1, magnetic: 'diamagnetic' },
  { name: 'Carbon Monoxide', formula: 'CO', totalElectrons: 14, bondOrder: 3, magnetic: 'diamagnetic' },
  { name: 'Nitric Oxide', formula: 'NO', totalElectrons: 15, bondOrder: 2.5, magnetic: 'paramagnetic' },
];

const MolecularOrbitalCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('bondOrder');
  const [totalElectrons, setTotalElectrons] = useState<string>('');
  const [period, setPeriod] = useState<string>('2');
  const [bondingElectrons, setBondingElectrons] = useState<string>('');
  const [antibondingElectrons, setAntibondingElectrons] = useState<string>('');
  const [bondOrder, setBondOrder] = useState<string>('');
  const [magneticProperty, setMagneticProperty] = useState<string>('');
  const [unpairedElectrons, setUnpairedElectrons] = useState<string>('');
  const [moConfig, setMoConfig] = useState<string>('');
  const [selectedMolecule, setSelectedMolecule] = useState<string>('');

  const fillMODiagram = (electrons: number, period: number): { bonding: number; antibonding: number; config: string; unpaired: number } => {
    let config = '';
    let bonding = 0;
    let antibonding = 0;
    let unpaired = 0;
    let remaining = electrons;

    if (period === 1) {
      // H₂, He₂: only σ1s and σ*1s
      const sigma1s = Math.min(remaining, 2);
      remaining -= sigma1s;
      bonding += sigma1s;
      config += `σ1s²`;
      
      if (remaining > 0) {
        const sigmaStar1s = Math.min(remaining, 2);
        antibonding += sigmaStar1s;
        config += ` σ*1s${sigmaStar1s === 1 ? '¹' : '²'}`;
      }
    } else {
      // Period 2: Different order for B₂, C₂, N₂ vs O₂, F₂, Ne₂
      // For Z ≤ 7 (up to N): σ2s, σ*2s, π2p (degenerate), σ2p, π*2p, σ*2p
      // For Z > 7 (O, F, Ne): σ2s, σ*2s, σ2p, π2p (degenerate), π*2p, σ*2p
      
      const isLowZ = electrons <= 14; // B₂ to N₂
      
      // σ2s (bonding)
      const sigma2s = Math.min(remaining, 2);
      remaining -= sigma2s;
      bonding += sigma2s;
      config += `σ2s²`;
      
      // σ*2s (antibonding)
      if (remaining > 0) {
        const sigmaStar2s = Math.min(remaining, 2);
        remaining -= sigmaStar2s;
        antibonding += sigmaStar2s;
        config += ` σ*2s²`;
      }
      
      if (isLowZ) {
        // π2p before σ2p (for B₂, C₂, N₂)
        if (remaining > 0) {
          const pi2p = Math.min(remaining, 4);
          remaining -= pi2p;
          bonding += pi2p;
          unpaired = pi2p % 2 === 0 && pi2p < 4 ? 2 : pi2p === 1 ? 1 : pi2p === 3 ? 2 : 0;
          config += ` π2p${pi2p === 1 ? '¹' : pi2p === 2 ? '²' : pi2p === 3 ? '³' : '⁴'}`;
        }
        
        if (remaining > 0) {
          const sigma2p = Math.min(remaining, 2);
          remaining -= sigma2p;
          bonding += sigma2p;
          config += ` σ2p${sigma2p === 1 ? '¹' : '²'}`;
        }
      } else {
        // σ2p before π2p (for O₂, F₂, Ne₂)
        if (remaining > 0) {
          const sigma2p = Math.min(remaining, 2);
          remaining -= sigma2p;
          bonding += sigma2p;
          config += ` σ2p²`;
        }
        
        if (remaining > 0) {
          const pi2p = Math.min(remaining, 4);
          remaining -= pi2p;
          bonding += pi2p;
          unpaired = pi2p % 2 === 0 && pi2p < 4 ? 2 : pi2p === 1 ? 1 : pi2p === 3 ? 2 : 0;
          config += ` π2p${pi2p === 1 ? '¹' : pi2p === 2 ? '²' : pi2p === 3 ? '³' : '⁴'}`;
        }
      }
      
      // π*2p (antibonding)
      if (remaining > 0) {
        const piStar2p = Math.min(remaining, 4);
        remaining -= piStar2p;
        antibonding += piStar2p;
        unpaired = piStar2p % 2 === 0 && piStar2p < 4 ? 2 : piStar2p === 1 ? 1 : piStar2p === 3 ? 2 : 0;
        config += ` π*2p${piStar2p === 1 ? '¹' : piStar2p === 2 ? '²' : piStar2p === 3 ? '³' : '⁴'}`;
      }
      
      // σ*2p (antibonding)
      if (remaining > 0) {
        const sigmaStar2p = Math.min(remaining, 2);
        antibonding += sigmaStar2p;
        config += ` σ*2p${sigmaStar2p === 1 ? '¹' : '²'}`;
      }
    }

    return { bonding, antibonding, config, unpaired };
  };

  const calculate = () => {
    if (mode === 'bondOrder') {
      const electrons = parseFloat(totalElectrons);
      const p = parseFloat(period);
      
      if (isNaN(electrons) || isNaN(p)) return;
      
      const result = fillMODiagram(electrons, p);
      setBondingElectrons(result.bonding.toString());
      setAntibondingElectrons(result.antibonding.toString());
      
      const bo = (result.bonding - result.antibonding) / 2;
      setBondOrder(bo.toFixed(1));
      setMoConfig(result.config);
      setUnpairedElectrons(result.unpaired.toString());
      
      if (result.unpaired > 0) {
        setMagneticProperty('Paramagnetic');
      } else {
        setMagneticProperty('Diamagnetic');
      }
    } else if (mode === 'magnetism') {
      const unpaired = parseFloat(unpairedElectrons);
      if (isNaN(unpaired)) return;
      
      if (unpaired > 0) {
        setMagneticProperty('Paramagnetic (attracted to magnetic field)');
      } else {
        setMagneticProperty('Diamagnetic (repelled by magnetic field)');
      }
    } else if (mode === 'stability') {
      const bo = parseFloat(bondOrder);
      if (isNaN(bo)) return;
      
      if (bo > 0) {
        setMagneticProperty(`Stable molecule (BO = ${bo})`);
      } else if (bo === 0) {
        setMagneticProperty('Unstable - does not exist (BO = 0)');
      } else {
        setMagneticProperty('Invalid bond order (BO < 0)');
      }
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // O₂ - famous paramagnetic molecule
      setMode('bondOrder');
      setTotalElectrons('16');
      setPeriod('2');
    } else if (example === 2) {
      // N₂ - triple bond
      setMode('bondOrder');
      setTotalElectrons('14');
      setPeriod('2');
    } else if (example === 3) {
      // He₂ - does not exist
      setMode('bondOrder');
      setTotalElectrons('4');
      setPeriod('1');
    }
  };

  const selectMolecule = (molecule: Molecule) => {
    setSelectedMolecule(molecule.name);
    setTotalElectrons(molecule.totalElectrons.toString());
    setPeriod(molecule.totalElectrons <= 4 ? '1' : '2');
    setMode('bondOrder');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      {/* Mode Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => setMode('bondOrder')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'bondOrder'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">Bond Order</div>
            <div className="text-sm opacity-75">BO = (B - A)/2</div>
          </button>
          <button
            onClick={() => setMode('magnetism')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'magnetism'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">Magnetic Property</div>
            <div className="text-sm opacity-75">Para vs Dia</div>
          </button>
          <button
            onClick={() => setMode('stability')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'stability'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Stability</div>
            <div className="text-sm opacity-75">Predict existence</div>
          </button>
        </div>
      </div>

      {/* Molecule Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Common Diatomic Molecules
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {diatomicMolecules.map((mol) => (
            <button
              key={mol.formula}
              onClick={() => selectMolecule(mol)}
              className={`p-3 rounded-lg border transition-all ${
                selectedMolecule === mol.name
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold text-sm">{mol.formula}</div>
              <div className="text-xs opacity-75">BO = {mol.bondOrder}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mode === 'bondOrder' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Total Valence Electrons
              </label>
              <input
                type="number"
                step="1"
                value={totalElectrons}
                onChange={(e) => setTotalElectrons(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 16 for O₂"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Period
              </label>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="1">Period 1 (H, He)</option>
                <option value="2">Period 2 (Li-Ne)</option>
              </select>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Determines MO ordering
              </p>
            </div>
          </>
        )}

        {mode === 'magnetism' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Unpaired Electrons
            </label>
            <input
              type="number"
              step="1"
              min="0"
              value={unpairedElectrons}
              onChange={(e) => setUnpairedElectrons(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 2 for O₂"
            />
          </div>
        )}

        {mode === 'stability' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Bond Order
            </label>
            <input
              type="number"
              step="0.5"
              value={bondOrder}
              onChange={(e) => setBondOrder(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 2 for O₂"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              BO = 0 means unstable
            </p>
          </div>
        )}
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl mb-6"
      >
        Calculate
      </button>

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <button
            onClick={() => fillExample(1)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">O₂ Molecule</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">16e⁻, paramagnetic</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">N₂ Molecule</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">14e⁻, triple bond</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">He₂ Molecule</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">4e⁻, does not exist</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(bondOrder || magneticProperty || moConfig) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bondOrder && mode === 'bondOrder' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Bond Order</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  BO = {bondOrder}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(bondOrder) === 0 && 'Molecule does not exist'}
                  {parseFloat(bondOrder) === 1 && 'Single bond'}
                  {parseFloat(bondOrder) === 1.5 && 'Intermediate bond'}
                  {parseFloat(bondOrder) === 2 && 'Double bond'}
                  {parseFloat(bondOrder) === 2.5 && 'Intermediate bond'}
                  {parseFloat(bondOrder) === 3 && 'Triple bond'}
                  {parseFloat(bondOrder) > 0 && parseFloat(bondOrder) < 1 && 'Weak bond'}
                </div>
              </div>
            )}

            {bondingElectrons && mode === 'bondOrder' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Electron Distribution</div>
                <div className="text-lg font-bold text-secondary-600 dark:text-secondary-400">
                  Bonding: {bondingElectrons}e⁻
                </div>
                <div className="text-lg font-bold text-red-600 dark:text-red-400">
                  Antibonding: {antibondingElectrons}e⁻
                </div>
              </div>
            )}

            {moConfig && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">MO Configuration</div>
                <div className="text-lg font-mono font-bold text-tertiary-600 dark:text-tertiary-400">
                  {moConfig}
                </div>
              </div>
            )}

            {magneticProperty && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Property</div>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  {magneticProperty}
                </div>
                {unpairedElectrons && mode === 'bondOrder' && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Unpaired electrons: {unpairedElectrons}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Molecular Orbital Theory:</p>
              <p>Bond Order = (Bonding e⁻ - Antibonding e⁻) / 2</p>
              <p className="mt-2 text-xs">
                Higher bond order → stronger bond, shorter bond length. Unpaired electrons → paramagnetic.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
          Understanding Molecular Orbitals
        </h3>
        <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <p>
            <strong>Bonding MOs:</strong> Lower energy than atomic orbitals. Electron density between nuclei stabilizes the bond.
            Include σ (sigma) and π (pi) orbitals.
          </p>
          <p>
            <strong>Antibonding MOs:</strong> Higher energy with nodes between nuclei. Denoted with * (e.g., σ*, π*). 
            Electrons here weaken or cancel bonding.
          </p>
          <p>
            <strong>Bond Order:</strong> Predicts bond strength and stability. BO = 0 means the molecule doesn't exist 
            (e.g., He₂). Higher BO = stronger, shorter bond.
          </p>
          <p>
            <strong>Magnetism:</strong> Unpaired electrons (e.g., O₂ with 2 unpaired in π*2p) make molecules paramagnetic 
            (attracted to magnets). All paired → diamagnetic (repelled).
          </p>
        </div>
      </div>
    </div>
  );
};

export default MolecularOrbitalCalculator;
