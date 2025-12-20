'use client';

import React, { useState } from 'react';

type CalculationMode = 'positionMomentum' | 'energyTime' | 'fromWavelength';

interface Particle {
  name: string;
  symbol: string;
  mass: number; // in kg
  description: string;
}

const particles: Particle[] = [
  { name: 'Electron', symbol: 'e⁻', mass: 9.109e-31, description: 'Most common quantum particle' },
  { name: 'Proton', symbol: 'p⁺', mass: 1.673e-27, description: 'Atomic nucleus component' },
  { name: 'Neutron', symbol: 'n', mass: 1.675e-27, description: 'Atomic nucleus component' },
  { name: 'Hydrogen Atom', symbol: 'H', mass: 1.674e-27, description: 'Ground state hydrogen' },
];

const HeisenbergUncertaintyCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('positionMomentum');
  const [deltaX, setDeltaX] = useState<string>('');
  const [deltaP, setDeltaP] = useState<string>('');
  const [deltaE, setDeltaE] = useState<string>('');
  const [deltaT, setDeltaT] = useState<string>('');
  const [mass, setMass] = useState<string>('');
  const [wavelength, setWavelength] = useState<string>('');
  const [selectedParticle, setSelectedParticle] = useState<string>('');

  // Reduced Planck's constant (ℏ)
  const HBAR = 1.054571817e-34; // J·s
  const PLANCK = 6.62607015e-34; // J·s
  const SPEED_OF_LIGHT = 2.998e8; // m/s
  const EV_TO_J = 1.602176634e-19; // J/eV

  const calculate = () => {
    if (mode === 'positionMomentum') {
      // Calculate minimum Δp from Δx (or vice versa)
      if (deltaX) {
        const dx = parseFloat(deltaX);
        if (isNaN(dx)) return;
        
        // Δp·Δx ≥ ℏ/2, so Δp ≥ ℏ/(2Δx)
        const dp = HBAR / (2 * dx);
        setDeltaP(dp.toExponential(4));
        
        // Calculate velocity uncertainty if mass is known
        if (mass) {
          const m = parseFloat(mass);
          if (!isNaN(m)) {
            const dv = dp / m;
            // Additional info could be displayed here
          }
        }
      } else if (deltaP) {
        const dp = parseFloat(deltaP);
        if (isNaN(dp)) return;
        
        // Δx ≥ ℏ/(2Δp)
        const dx = HBAR / (2 * dp);
        setDeltaX(dx.toExponential(4));
      }
    } else if (mode === 'energyTime') {
      // Calculate minimum ΔE from Δt (or vice versa)
      if (deltaT) {
        const dt = parseFloat(deltaT);
        if (isNaN(dt)) return;
        
        // ΔE·Δt ≥ ℏ/2, so ΔE ≥ ℏ/(2Δt)
        const de = HBAR / (2 * dt);
        setDeltaE(de.toExponential(4));
      } else if (deltaE) {
        const de = parseFloat(deltaE);
        if (isNaN(de)) return;
        
        // Δt ≥ ℏ/(2ΔE)
        const dt = HBAR / (2 * de);
        setDeltaT(dt.toExponential(4));
      }
    } else if (mode === 'fromWavelength') {
      // Calculate uncertainties from photon wavelength
      const lambda = parseFloat(wavelength) * 1e-9; // Convert nm to m
      if (isNaN(lambda)) return;
      
      // Photon momentum: p = h/λ
      const p = PLANCK / lambda;
      
      // For a wave packet, Δx·Δk ≥ 1/2 where k = 2π/λ
      // This gives Δx ≥ λ/(4π) approximately
      const dx = lambda / (4 * Math.PI);
      setDeltaX(dx.toExponential(4));
      
      // Δp = ℏ/(2Δx)
      const dp = HBAR / (2 * dx);
      setDeltaP(dp.toExponential(4));
      
      // Photon energy: E = hc/λ
      const energy = PLANCK * SPEED_OF_LIGHT / lambda;
      setDeltaE(energy.toExponential(4));
      
      // Time uncertainty: Δt = ℏ/(2ΔE)
      const dt = HBAR / (2 * energy);
      setDeltaT(dt.toExponential(4));
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Electron position uncertainty (atomic scale)
      setMode('positionMomentum');
      setDeltaX('1e-10');
      setMass('9.109e-31');
      setSelectedParticle('Electron');
    } else if (example === 2) {
      // Excited state lifetime
      setMode('energyTime');
      setDeltaT('1e-8');
    } else if (example === 3) {
      // Photon uncertainty from wavelength
      setMode('fromWavelength');
      setWavelength('500');
    }
  };

  const selectParticle = (particle: Particle) => {
    setSelectedParticle(particle.name);
    setMass(particle.mass.toExponential());
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
            onClick={() => setMode('positionMomentum')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'positionMomentum'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">Position-Momentum</div>
            <div className="text-sm opacity-75">Δx·Δp ≥ ℏ/2</div>
          </button>
          <button
            onClick={() => setMode('energyTime')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'energyTime'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">Energy-Time</div>
            <div className="text-sm opacity-75">ΔE·Δt ≥ ℏ/2</div>
          </button>
          <button
            onClick={() => setMode('fromWavelength')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromWavelength'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">From Wavelength</div>
            <div className="text-sm opacity-75">Photon uncertainties</div>
          </button>
        </div>
      </div>

      {/* Particle Selection (optional) */}
      {mode === 'positionMomentum' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select Particle (optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {particles.map((particle) => (
              <button
                key={particle.name}
                onClick={() => selectParticle(particle)}
                className={`p-3 rounded-lg border transition-all ${
                  selectedParticle === particle.name
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                <div className="font-semibold text-sm">{particle.symbol}</div>
                <div className="text-xs opacity-75">{particle.name}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mode === 'positionMomentum' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Position Uncertainty (Δx) in meters
              </label>
              <input
                type="text"
                value={deltaX}
                onChange={(e) => setDeltaX(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 1e-10 (scientific notation)"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Atomic scale: ~10⁻¹⁰ m (1 Å)
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Momentum Uncertainty (Δp) in kg·m/s
              </label>
              <input
                type="text"
                value={deltaP}
                onChange={(e) => setDeltaP(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Calculate from Δx"
                readOnly={!!deltaX}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Particle Mass (m) in kg (optional)
              </label>
              <input
                type="text"
                value={mass}
                onChange={(e) => setMass(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 9.109e-31 (electron)"
              />
            </div>
          </>
        )}

        {mode === 'energyTime' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Energy Uncertainty (ΔE) in Joules
              </label>
              <input
                type="text"
                value={deltaE}
                onChange={(e) => setDeltaE(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 1e-19"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Uncertainty (Δt) in seconds
              </label>
              <input
                type="text"
                value={deltaT}
                onChange={(e) => setDeltaT(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., 1e-8 (excited state lifetime)"
              />
            </div>
          </>
        )}

        {mode === 'fromWavelength' && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Photon Wavelength (λ) in nm
            </label>
            <input
              type="number"
              step="10"
              value={wavelength}
              onChange={(e) => setWavelength(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 500"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Visible light: 400-700 nm
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
            <div className="font-semibold text-sm">Electron in Atom</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Δx = 0.1 nm</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Excited State</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">τ = 10 ns</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Photon Packet</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">λ = 500 nm</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(deltaX || deltaP || deltaE || deltaT) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deltaX && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Position Uncertainty</div>
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  Δx = {deltaX} m
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(deltaX) > 1e-6 && '(macroscopic scale)'}
                  {parseFloat(deltaX) <= 1e-6 && parseFloat(deltaX) > 1e-9 && '(microscopic scale)'}
                  {parseFloat(deltaX) <= 1e-9 && '(atomic/subatomic scale)'}
                </div>
              </div>
            )}

            {deltaP && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Momentum Uncertainty</div>
                <div className="text-xl font-bold text-secondary-600 dark:text-secondary-400">
                  Δp = {deltaP} kg·m/s
                </div>
                {mass && parseFloat(mass) > 0 && (
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Δv ≈ {(parseFloat(deltaP) / parseFloat(mass)).toExponential(2)} m/s
                  </div>
                )}
              </div>
            )}

            {deltaE && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Energy Uncertainty</div>
                <div className="text-xl font-bold text-tertiary-600 dark:text-tertiary-400">
                  ΔE = {deltaE} J
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {(parseFloat(deltaE) / EV_TO_J).toExponential(2)} eV
                </div>
              </div>
            )}

            {deltaT && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Time Uncertainty</div>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  Δt = {deltaT} s
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(deltaT) > 1e-6 && '(long-lived state)'}
                  {parseFloat(deltaT) <= 1e-6 && parseFloat(deltaT) > 1e-12 && '(typical excited state)'}
                  {parseFloat(deltaT) <= 1e-12 && '(very short-lived)'}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">Heisenberg Uncertainty Principle:</p>
              <p className="mb-2">
                {mode === 'positionMomentum' && 'Δx·Δp ≥ ℏ/2 = ' + (HBAR/2).toExponential(3) + ' J·s'}
                {mode === 'energyTime' && 'ΔE·Δt ≥ ℏ/2 = ' + (HBAR/2).toExponential(3) + ' J·s'}
                {mode === 'fromWavelength' && 'Both position-momentum and energy-time relations shown'}
              </p>
              {deltaX && deltaP && (
                <p className="text-xs">
                  Product: Δx·Δp = {(parseFloat(deltaX) * parseFloat(deltaP)).toExponential(3)} J·s 
                  {(parseFloat(deltaX) * parseFloat(deltaP)) >= HBAR/2 ? ' ✓ (satisfies uncertainty)' : ' ✗ (violates uncertainty!)'}
                </p>
              )}
              {deltaE && deltaT && (
                <p className="text-xs">
                  Product: ΔE·Δt = {(parseFloat(deltaE) * parseFloat(deltaT)).toExponential(3)} J·s 
                  {(parseFloat(deltaE) * parseFloat(deltaT)) >= HBAR/2 ? ' ✓ (satisfies uncertainty)' : ' ✗ (violates uncertainty!)'}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
          Understanding the Uncertainty Principle
        </h3>
        <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
          <p>
            <strong>Not about measurement error:</strong> The uncertainty principle is a fundamental property of quantum 
            systems, not a limitation of our measuring instruments. Particles simply don't have well-defined position 
            and momentum simultaneously.
          </p>
          <p>
            <strong>Wave-particle duality:</strong> Particles exhibit wave-like properties. A well-localized wave packet 
            (small Δx) requires many wavelengths → spread in momentum (large Δp). A pure sine wave (definite p) extends 
            infinitely (infinite Δx).
          </p>
          <p>
            <strong>Energy-time relation:</strong> Short-lived states (small Δt) have broader energy distributions (large ΔE). 
            This explains natural line widths in atomic spectra and virtual particles in quantum field theory.
          </p>
          <p>
            <strong>Fundamental limit:</strong> ℏ/2 ≈ 5.27 × 10⁻³⁵ J·s sets the scale. For macroscopic objects, uncertainties 
            are negligibly small. For electrons in atoms, they're huge compared to classical quantities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeisenbergUncertaintyCalculator;
