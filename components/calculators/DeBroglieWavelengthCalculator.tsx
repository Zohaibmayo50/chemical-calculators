'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromMomentum' | 'fromVelocity' | 'toMomentum';

interface CommonParticle {
  name: string;
  mass: number; // in kg
  symbol: string;
}

const commonParticles: CommonParticle[] = [
  { name: 'Electron', mass: 9.109e-31, symbol: 'e⁻' },
  { name: 'Proton', mass: 1.673e-27, symbol: 'p⁺' },
  { name: 'Neutron', mass: 1.675e-27, symbol: 'n' },
  { name: 'Alpha particle', mass: 6.644e-27, symbol: 'α' },
  { name: 'Carbon-12', mass: 1.993e-26, symbol: '¹²C' },
];

const DeBroglieWavelengthCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('fromVelocity');
  const [mass, setMass] = useState<string>('');
  const [velocity, setVelocity] = useState<string>('');
  const [momentum, setMomentum] = useState<string>('');
  const [wavelength, setWavelength] = useState<string>('');
  const [kineticEnergy, setKineticEnergy] = useState<string>('');
  const [selectedParticle, setSelectedParticle] = useState<string>('');

  // Planck's constant
  const PLANCK = 6.626e-34; // J·s
  const SPEED_OF_LIGHT = 2.998e8; // m/s

  const calculate = () => {
    if (mode === 'fromVelocity') {
      const m = parseFloat(mass);
      const v = parseFloat(velocity);
      if (isNaN(m) || isNaN(v)) return;

      // λ = h / (m × v)
      const p = m * v;
      const lambda = PLANCK / p;
      
      setWavelength(lambda.toExponential(4));
      setMomentum(p.toExponential(4));

      // Calculate kinetic energy: KE = (1/2)mv²
      const ke = 0.5 * m * v * v;
      setKineticEnergy(ke.toExponential(4));
    } else if (mode === 'fromMomentum') {
      const p = parseFloat(momentum);
      if (isNaN(p)) return;

      // λ = h / p
      const lambda = PLANCK / p;
      setWavelength(lambda.toExponential(4));

      // If mass is known, calculate velocity
      if (mass) {
        const m = parseFloat(mass);
        if (!isNaN(m)) {
          const v = p / m;
          setVelocity(v.toExponential(4));

          const ke = 0.5 * m * v * v;
          setKineticEnergy(ke.toExponential(4));
        }
      }
    } else if (mode === 'toMomentum') {
      const lambda = parseFloat(wavelength);
      if (isNaN(lambda)) return;

      // p = h / λ
      const p = PLANCK / lambda;
      setMomentum(p.toExponential(4));

      // If mass is known, calculate velocity
      if (mass) {
        const m = parseFloat(mass);
        if (!isNaN(m)) {
          const v = p / m;
          setVelocity(v.toExponential(4));

          const ke = 0.5 * m * v * v;
          setKineticEnergy(ke.toExponential(4));
        }
      }
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Electron at 1% speed of light
      setMode('fromVelocity');
      selectParticle(commonParticles[0]);
      setVelocity((0.01 * SPEED_OF_LIGHT).toExponential(4));
    } else if (example === 2) {
      // Baseball (0.145 kg at 40 m/s)
      setMode('fromVelocity');
      setSelectedParticle('');
      setMass('0.145');
      setVelocity('40');
    } else if (example === 3) {
      // From wavelength (1 nm)
      setMode('toMomentum');
      setWavelength('1e-9');
      selectParticle(commonParticles[0]);
    }
  };

  const selectParticle = (particle: CommonParticle) => {
    setSelectedParticle(particle.name);
    setMass(particle.mass.toExponential(4));
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
            onClick={() => setMode('fromVelocity')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromVelocity'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">From Velocity</div>
            <div className="text-sm opacity-75">Calculate λ from m and v</div>
          </button>
          <button
            onClick={() => setMode('fromMomentum')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromMomentum'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">From Momentum</div>
            <div className="text-sm opacity-75">Calculate λ from p</div>
          </button>
          <button
            onClick={() => setMode('toMomentum')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'toMomentum'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">To Momentum</div>
            <div className="text-sm opacity-75">Calculate p from λ</div>
          </button>
        </div>
      </div>

      {/* Common Particles Database */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Common Particles (Quick Select)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {commonParticles.map((particle) => (
            <button
              key={particle.name}
              onClick={() => selectParticle(particle)}
              className={`p-3 rounded-lg border transition-all text-sm ${
                selectedParticle === particle.name
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
              }`}
            >
              <div className="font-semibold">{particle.symbol}</div>
              <div className="text-xs opacity-75">{particle.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {(mode === 'fromVelocity' || mode === 'fromMomentum' || mode === 'toMomentum') && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mass (kg)
            </label>
            <input
              type="text"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
              placeholder="e.g., 9.109e-31"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Use scientific notation (e.g., 9.109e-31)
            </p>
          </div>
        )}

        {mode === 'fromVelocity' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Velocity (m/s)
            </label>
            <input
              type="text"
              value={velocity}
              onChange={(e) => setVelocity(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
              placeholder="e.g., 3.0e6"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Speed of light c = 2.998 × 10⁸ m/s
            </p>
          </div>
        )}

        {mode === 'fromMomentum' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Momentum (kg·m/s)
            </label>
            <input
              type="text"
              value={momentum}
              onChange={(e) => setMomentum(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
              placeholder="e.g., 2.73e-24"
            />
          </div>
        )}

        {mode === 'toMomentum' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Wavelength (m)
            </label>
            <input
              type="text"
              value={wavelength}
              onChange={(e) => setWavelength(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-mono"
              placeholder="e.g., 1.0e-9"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              1 nm = 10⁻⁹ m, 1 Å = 10⁻¹⁰ m
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
            <div className="font-semibold text-sm">Electron at 1% c</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">v = 3.0 × 10⁶ m/s</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Baseball</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">m = 0.145 kg, v = 40 m/s</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">From Wavelength</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">λ = 1 nm</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(wavelength || momentum || velocity || kineticEnergy) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wavelength && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">de Broglie Wavelength (λ)</div>
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400 font-mono">
                  {wavelength} m
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(wavelength) >= 1e-9 && parseFloat(wavelength) < 1e-6 && 
                    `≈ ${(parseFloat(wavelength) * 1e9).toFixed(2)} nm`}
                  {parseFloat(wavelength) >= 1e-10 && parseFloat(wavelength) < 1e-9 && 
                    `≈ ${(parseFloat(wavelength) * 1e10).toFixed(2)} Å`}
                </div>
              </div>
            )}
            {momentum && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Momentum (p)</div>
                <div className="text-xl font-bold text-secondary-600 dark:text-secondary-400 font-mono">
                  {momentum} kg·m/s
                </div>
              </div>
            )}
            {velocity && mode !== 'fromVelocity' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Velocity (v)</div>
                <div className="text-xl font-bold text-tertiary-600 dark:text-tertiary-400 font-mono">
                  {velocity} m/s
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(velocity) / SPEED_OF_LIGHT < 0.01 && 
                    `≈ ${((parseFloat(velocity) / SPEED_OF_LIGHT) * 100).toExponential(2)}% of c`}
                  {parseFloat(velocity) / SPEED_OF_LIGHT >= 0.01 && parseFloat(velocity) / SPEED_OF_LIGHT < 1 &&
                    `≈ ${((parseFloat(velocity) / SPEED_OF_LIGHT) * 100).toFixed(2)}% of c`}
                </div>
              </div>
            )}
            {kineticEnergy && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Kinetic Energy (KE)</div>
                <div className="text-xl font-bold text-green-600 dark:text-green-400 font-mono">
                  {kineticEnergy} J
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {parseFloat(kineticEnergy) > 1.602e-19 &&
                    `≈ ${(parseFloat(kineticEnergy) / 1.602e-19).toExponential(2)} eV`}
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <p className="font-semibold mb-2">de Broglie Equation:</p>
              <p className="font-mono">λ = h / p = h / (m × v)</p>
              <p className="mt-2">where h = 6.626 × 10⁻³⁴ J·s (Planck's constant)</p>
              {mass && velocity && (
                <p className="mt-2">
                  This {selectedParticle || 'particle'} exhibits wave-particle duality with a matter wavelength of {wavelength} m.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Understanding de Broglie Wavelength
        </h3>
        <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <p>
            <strong>Wave-Particle Duality:</strong> All matter exhibits both wave and particle properties. The de Broglie wavelength 
            is the wavelength associated with a moving particle.
          </p>
          <p>
            <strong>Formula:</strong> λ = h/p = h/(mv), where h is Planck's constant (6.626 × 10⁻³⁴ J·s)
          </p>
          <p>
            <strong>Significance:</strong> For macroscopic objects, λ is negligibly small. For subatomic particles like electrons, 
            λ is significant and leads to observable quantum effects like diffraction and interference.
          </p>
          <p>
            <strong>Applications:</strong> Electron microscopy, quantum mechanics, particle accelerators, and understanding atomic structure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeBroglieWavelengthCalculator;
