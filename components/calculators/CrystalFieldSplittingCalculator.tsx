'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromWavelength' | 'toWavelength' | 'spinState';

interface ComplexGeometry {
  name: string;
  symbol: string;
  splitting: string;
  coordinationNumber: number;
}

const geometries: ComplexGeometry[] = [
  { name: 'Octahedral', symbol: 'Oh', splitting: 'Δₒ', coordinationNumber: 6 },
  { name: 'Tetrahedral', symbol: 'Td', splitting: 'Δₜ', coordinationNumber: 4 },
  { name: 'Square Planar', symbol: 'D4h', splitting: 'Δₛₚ', coordinationNumber: 4 },
];

const CrystalFieldSplittingCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('fromWavelength');
  const [wavelength, setWavelength] = useState<string>('');
  const [splittingEnergy, setSplittingEnergy] = useState<string>('');
  const [geometry, setGeometry] = useState<string>('Octahedral');
  const [dElectrons, setDElectrons] = useState<string>('');
  const [spinState, setSpinState] = useState<string>('');
  const [selectedGeometry, setSelectedGeometry] = useState<string>('');

  // Planck's constant and speed of light
  const PLANCK = 6.626e-34; // J·s
  const SPEED_OF_LIGHT = 2.998e8; // m/s
  const EV_TO_J = 1.602e-19; // J/eV

  const calculate = () => {
    if (mode === 'fromWavelength') {
      const lambda = parseFloat(wavelength) * 1e-9; // Convert nm to m
      if (isNaN(lambda)) return;

      // E = hc/λ
      const energyJ = (PLANCK * SPEED_OF_LIGHT) / lambda;
      const energyEV = energyJ / EV_TO_J;
      const energyKJ = energyJ * 6.022e23 / 1000; // Convert to kJ/mol

      setSplittingEnergy(energyKJ.toFixed(2));
    } else if (mode === 'toWavelength') {
      const energy = parseFloat(splittingEnergy); // in kJ/mol
      if (isNaN(energy)) return;

      // Convert kJ/mol to J per photon
      const energyJ = (energy * 1000) / 6.022e23;
      
      // λ = hc/E
      const lambda = (PLANCK * SPEED_OF_LIGHT) / energyJ;
      const lambdaNm = lambda * 1e9; // Convert m to nm

      setWavelength(lambdaNm.toFixed(2));
    } else if (mode === 'spinState') {
      const d = parseInt(dElectrons);
      const energy = parseFloat(splittingEnergy);
      
      if (isNaN(d) || isNaN(energy)) return;

      // Determine spin state based on d-electrons and geometry
      let prediction = '';
      
      if (geometry === 'Octahedral') {
        // For octahedral complexes
        if (d === 1 || d === 2 || d === 3) {
          prediction = 'High Spin (weak field)';
        } else if (d === 4 || d === 5 || d === 6 || d === 7) {
          // These can be high or low spin depending on Δₒ
          if (energy > 150) {
            prediction = `Low Spin (strong field, Δₒ > P)`;
          } else if (energy < 100) {
            prediction = `High Spin (weak field, Δₒ < P)`;
          } else {
            prediction = `Intermediate (Δₒ ≈ P, can be either)`;
          }
        } else if (d === 8 || d === 9 || d === 10) {
          prediction = 'Only one spin state possible';
        }
      } else if (geometry === 'Tetrahedral') {
        // Tetrahedral complexes are almost always high spin
        prediction = 'High Spin (Δₜ is small, ~4/9 Δₒ)';
      } else if (geometry === 'Square Planar') {
        // Square planar d⁸ complexes are always low spin
        if (d === 8) {
          prediction = 'Low Spin (strong field)';
        } else {
          prediction = 'Rare for this d-electron count';
        }
      }

      setSpinState(prediction);
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // [Ti(H₂O)₆]³⁺ - purple color
      setMode('fromWavelength');
      setGeometry('Octahedral');
      setWavelength('510');
    } else if (example === 2) {
      // [Fe(CN)₆]³⁻ - low spin Fe³⁺
      setMode('spinState');
      setGeometry('Octahedral');
      setDElectrons('5');
      setSplittingEnergy('400');
    } else if (example === 3) {
      // Calculate wavelength from known Δₒ
      setMode('toWavelength');
      setGeometry('Octahedral');
      setSplittingEnergy('200');
    }
  };

  const selectGeometry = (geo: ComplexGeometry) => {
    setSelectedGeometry(geo.name);
    setGeometry(geo.name);
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
            onClick={() => setMode('fromWavelength')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromWavelength'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">From Wavelength</div>
            <div className="text-sm opacity-75">Calculate Δ from λ</div>
          </button>
          <button
            onClick={() => setMode('toWavelength')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'toWavelength'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">To Wavelength</div>
            <div className="text-sm opacity-75">Calculate λ from Δ</div>
          </button>
          <button
            onClick={() => setMode('spinState')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'spinState'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Spin State</div>
            <div className="text-sm opacity-75">High vs Low Spin</div>
          </button>
        </div>
      </div>

      {/* Geometry Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Complex Geometry
        </label>
        <div className="grid grid-cols-3 gap-3">
          {geometries.map((geo) => (
            <button
              key={geo.name}
              onClick={() => selectGeometry(geo)}
              className={`p-3 rounded-lg border transition-all ${
                selectedGeometry === geo.name
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold">{geo.name}</div>
              <div className="text-xs opacity-75">{geo.symbol}, CN={geo.coordinationNumber}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {(mode === 'fromWavelength') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wavelength (λ) in nm
            </label>
            <input
              type="number"
              step="1"
              value={wavelength}
              onChange={(e) => setWavelength(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 510"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Visible range: 400-700 nm
            </p>
          </div>
        )}

        {(mode === 'toWavelength' || mode === 'spinState') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Crystal Field Splitting Energy (Δ) in kJ/mol
            </label>
            <input
              type="number"
              step="10"
              value={splittingEnergy}
              onChange={(e) => setSplittingEnergy(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 200"
            />
          </div>
        )}

        {mode === 'spinState' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of d-electrons
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={dElectrons}
              onChange={(e) => setDElectrons(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="1-10"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Example: Fe³⁺ has 5 d-electrons
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
            <div className="font-semibold text-sm">[Ti(H₂O)₆]³⁺</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Purple, λ = 510 nm</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">[Fe(CN)₆]³⁻</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Low spin Fe³⁺</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Calculate λ</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">From Δ = 200 kJ/mol</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(splittingEnergy || wavelength || spinState) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {splittingEnergy && mode !== 'toWavelength' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Crystal Field Splitting Energy</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {splittingEnergy} kJ/mol
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  For {geometry} geometry
                </div>
              </div>
            )}

            {wavelength && mode !== 'fromWavelength' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Absorption Wavelength</div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  {wavelength} nm
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(wavelength) < 450 && 'Violet/Blue'}
                  {parseFloat(wavelength) >= 450 && parseFloat(wavelength) < 495 && 'Blue'}
                  {parseFloat(wavelength) >= 495 && parseFloat(wavelength) < 570 && 'Green'}
                  {parseFloat(wavelength) >= 570 && parseFloat(wavelength) < 590 && 'Yellow'}
                  {parseFloat(wavelength) >= 590 && parseFloat(wavelength) < 620 && 'Orange'}
                  {parseFloat(wavelength) >= 620 && 'Red'}
                </div>
              </div>
            )}

            {spinState && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Predicted Spin State</div>
                <div className="text-xl font-bold text-tertiary-600 dark:text-tertiary-400">
                  {spinState}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Crystal Field Theory:</p>
              <p>E = hc/λ = {geometry === 'Octahedral' ? 'Δₒ' : geometry === 'Tetrahedral' ? 'Δₜ' : 'Δₛₚ'}</p>
              <p className="mt-2 text-xs">
                d-orbital degeneracy is lifted by ligand field, causing electronic transitions that absorb specific wavelengths.
                {geometry === 'Tetrahedral' && ' Note: Δₜ ≈ 4/9 × Δₒ (tetrahedral splitting is smaller).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Understanding Crystal Field Splitting
        </h3>
        <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <p>
            <strong>Crystal Field Theory:</strong> Explains the color and magnetic properties of transition metal complexes 
            by considering ligand-metal interactions as purely electrostatic.
          </p>
          <p>
            <strong>d-Orbital Splitting:</strong> Ligands approach along axes, raising energy of orbitals pointing toward 
            ligands (e<sub>g</sub> in octahedral) and lowering others (t<sub>2g</sub>).
          </p>
          <p>
            <strong>Color Origin:</strong> d-d transitions absorb specific wavelengths. The complementary color is observed. 
            Larger Δ → shorter λ absorbed → blue-shifted color.
          </p>
          <p>
            <strong>Spin States:</strong> Strong field ligands (CN⁻, CO) cause large Δ → low spin. Weak field ligands 
            (H₂O, F⁻) cause small Δ → high spin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrystalFieldSplittingCalculator;
