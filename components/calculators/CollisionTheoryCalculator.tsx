'use client';

import React, { useState } from 'react';

type CalculationMode = 'collisionFrequency' | 'rateConstant' | 'temperature';

const CollisionTheoryCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('collisionFrequency');

  // Collision frequency inputs
  const [molecularDiameter, setMolecularDiameter] = useState<string>('');
  const [concentration, setConcentration] = useState<string>('');
  const [temperature, setTemperature] = useState<string>('');
  const [molecularMass, setMolecularMass] = useState<string>('');

  // Rate constant inputs
  const [activationEnergy, setActivationEnergy] = useState<string>('');
  const [preExponentialFactor, setPreExponentialFactor] = useState<string>('');
  const [stericalFactor, setStericalFactor] = useState<string>('');

  // Temperature effect inputs
  const [temperature1, setTemperature1] = useState<string>('');
  const [temperature2, setTemperature2] = useState<string>('');
  const [rateConstant1, setRateConstant1] = useState<string>('');

  // Results
  const [collisionFrequency, setCollisionFrequency] = useState<string>('');
  const [rateConstant, setRateConstant] = useState<string>('');
  const [rateConstant2, setRateConstant2] = useState<string>('');
  const [meanSpeed, setMeanSpeed] = useState<string>('');
  const [fractionActivated, setFractionActivated] = useState<string>('');

  // Examples database
  const examples = [
    {
      name: 'N₂ Collision Frequency',
      diameter: 3.7e-10,
      conc: 0.04,
      temp: 298,
      mass: 28,
      mode: 'collisionFrequency' as CalculationMode,
    },
    {
      name: 'H₂ + I₂ Reaction',
      activationE: 165,
      preFactor: 1e11,
      stericalF: 0.16,
      temp: 700,
      mode: 'rateConstant' as CalculationMode,
    },
    {
      name: 'O₂ Collisions',
      diameter: 3.5e-10,
      conc: 0.04,
      temp: 298,
      mass: 32,
      mode: 'collisionFrequency' as CalculationMode,
    },
    {
      name: 'Temperature Effect on k',
      temp1: 300,
      temp2: 350,
      k1: 1e-3,
      activationE: 50,
      mode: 'temperature' as CalculationMode,
    },
    {
      name: 'NO + O₃ Reaction',
      activationE: 10,
      preFactor: 8e12,
      stericalF: 0.8,
      temp: 298,
      mode: 'rateConstant' as CalculationMode,
    },
  ];

  const loadExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    if (example.diameter) setMolecularDiameter(example.diameter.toExponential());
    if (example.conc) setConcentration(example.conc.toString());
    if (example.temp) setTemperature(example.temp.toString());
    if (example.mass) setMolecularMass(example.mass.toString());
    if (example.activationE) setActivationEnergy((example.activationE * 1000).toString());
    if (example.preFactor) setPreExponentialFactor(example.preFactor.toExponential());
    if (example.stericalF) setStericalFactor(example.stericalF.toString());
    if (example.temp1) setTemperature1(example.temp1.toString());
    if (example.temp2) setTemperature2(example.temp2.toString());
    if (example.k1) setRateConstant1(example.k1.toExponential());
  };

  const calculateCollisionFrequency = () => {
    const d = parseFloat(molecularDiameter); // meters
    const C = parseFloat(concentration); // mol/L
    const T = parseFloat(temperature); // K
    const M = parseFloat(molecularMass); // g/mol

    if (isNaN(d) || isNaN(C) || isNaN(T) || isNaN(M)) {
      alert('Please enter valid numerical values');
      return;
    }

    const R = 8.314; // J/(mol·K)
    const NA = 6.022e23; // Avogadro's number
    const kB = 1.381e-23; // Boltzmann constant (J/K)

    // Convert concentration from mol/L to molecules/m³
    const n = C * 1000 * NA; // molecules/m³

    // Calculate mean molecular speed (m/s)
    const mass_kg = (M / 1000) / NA; // mass per molecule in kg
    const v_mean = Math.sqrt((8 * kB * T) / (Math.PI * mass_kg));
    setMeanSpeed(v_mean.toExponential(2));

    // Calculate collision cross-section (m²)
    const sigma = Math.PI * d * d;

    // Collision frequency Z (collisions/(m³·s))
    const Z = sigma * v_mean * n * n / Math.sqrt(2);

    setCollisionFrequency(Z.toExponential(2));
  };

  const calculateRateConstant = () => {
    const Ea = parseFloat(activationEnergy); // J/mol
    const A = parseFloat(preExponentialFactor); // units vary
    const p = parseFloat(stericalFactor); // dimensionless
    const T = parseFloat(temperature); // K

    if (isNaN(Ea) || isNaN(T)) {
      alert('Please enter valid activation energy and temperature');
      return;
    }

    const R = 8.314; // J/(mol·K)

    // Arrhenius equation: k = A × e^(-Ea/RT)
    const exponentialFactor = Math.exp(-Ea / (R * T));
    
    let k: number;
    if (!isNaN(A) && !isNaN(p)) {
      // With steric factor: k = p × A × e^(-Ea/RT)
      k = p * A * exponentialFactor;
    } else if (!isNaN(A)) {
      // Without steric factor
      k = A * exponentialFactor;
    } else {
      alert('Please enter pre-exponential factor A');
      return;
    }

    setRateConstant(k.toExponential(3));

    // Calculate fraction of molecules with E ≥ Ea
    const fraction = exponentialFactor;
    setFractionActivated((fraction * 100).toExponential(2));
  };

  const calculateTemperatureEffect = () => {
    const T1 = parseFloat(temperature1); // K
    const T2 = parseFloat(temperature2); // K
    const k1 = parseFloat(rateConstant1);
    const Ea = parseFloat(activationEnergy); // J/mol

    if (isNaN(T1) || isNaN(T2) || isNaN(k1) || isNaN(Ea)) {
      alert('Please enter valid values for both temperatures, k1, and activation energy');
      return;
    }

    const R = 8.314; // J/(mol·K)

    // Arrhenius equation in two-point form:
    // ln(k2/k1) = (Ea/R) × (1/T1 - 1/T2)
    const lnRatio = (Ea / R) * (1 / T1 - 1 / T2);
    const k2 = k1 * Math.exp(lnRatio);

    setRateConstant2(k2.toExponential(3));

    // Calculate rate increase factor
    const ratioK = k2 / k1;
    setRateConstant(`Rate increases by factor of ${ratioK.toFixed(2)}`);
  };

  const handleCalculate = () => {
    if (mode === 'collisionFrequency') {
      calculateCollisionFrequency();
    } else if (mode === 'rateConstant') {
      calculateRateConstant();
    } else if (mode === 'temperature') {
      calculateTemperatureEffect();
    }
  };

  const handleReset = () => {
    setMolecularDiameter('');
    setConcentration('');
    setTemperature('');
    setMolecularMass('');
    setActivationEnergy('');
    setPreExponentialFactor('');
    setStericalFactor('');
    setTemperature1('');
    setTemperature2('');
    setRateConstant1('');
    setCollisionFrequency('');
    setRateConstant('');
    setRateConstant2('');
    setMeanSpeed('');
    setFractionActivated('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('collisionFrequency')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'collisionFrequency'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Collision Frequency
          </button>
          <button
            onClick={() => setMode('rateConstant')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'rateConstant'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Rate Constant
          </button>
          <button
            onClick={() => setMode('temperature')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'temperature'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Temperature Effect
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mode === 'collisionFrequency' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molecular Diameter (m)
              </label>
              <input
                type="text"
                value={molecularDiameter}
                onChange={(e) => setMolecularDiameter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 3.7e-10"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Concentration (mol/L)
              </label>
              <input
                type="number"
                value={concentration}
                onChange={(e) => setConcentration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.04"
                step="0.001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temperature (K)
              </label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 298"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Molecular Mass (g/mol)
              </label>
              <input
                type="number"
                value={molecularMass}
                onChange={(e) => setMolecularMass(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 28"
                step="0.01"
              />
            </div>
          </>
        )}

        {mode === 'rateConstant' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activation Energy Ea (J/mol)
              </label>
              <input
                type="number"
                value={activationEnergy}
                onChange={(e) => setActivationEnergy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 165000"
                step="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pre-Exponential Factor A
              </label>
              <input
                type="text"
                value={preExponentialFactor}
                onChange={(e) => setPreExponentialFactor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1e11"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Steric Factor p (0-1)
              </label>
              <input
                type="number"
                value={stericalFactor}
                onChange={(e) => setStericalFactor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0.16"
                step="0.01"
                min="0"
                max="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temperature (K)
              </label>
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 700"
                step="1"
              />
            </div>
          </>
        )}

        {mode === 'temperature' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temperature 1 (K)
              </label>
              <input
                type="number"
                value={temperature1}
                onChange={(e) => setTemperature1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 300"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Temperature 2 (K)
              </label>
              <input
                type="number"
                value={temperature2}
                onChange={(e) => setTemperature2(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 350"
                step="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rate Constant k₁
              </label>
              <input
                type="text"
                value={rateConstant1}
                onChange={(e) => setRateConstant1(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1e-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activation Energy Ea (J/mol)
              </label>
              <input
                type="number"
                value={activationEnergy}
                onChange={(e) => setActivationEnergy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 50000"
                step="1000"
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

      {(collisionFrequency || rateConstant || rateConstant2) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collisionFrequency && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Collision Frequency</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {collisionFrequency} collisions/(m³·s)
                </p>
              </div>
            )}
            {meanSpeed && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Mean Molecular Speed</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">{meanSpeed} m/s</p>
              </div>
            )}
            {rateConstant && mode === 'rateConstant' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Rate Constant k</p>
                <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{rateConstant}</p>
              </div>
            )}
            {fractionActivated && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Fraction with E ≥ Ea</p>
                <p className="text-lg font-bold text-orange-600 dark:text-orange-400">{fractionActivated}%</p>
              </div>
            )}
            {rateConstant2 && (
              <>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rate Constant k₂</p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">{rateConstant2}</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Rate Change</p>
                  <p className="text-lg font-bold text-red-600 dark:text-red-400">{rateConstant}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Example Calculations</h3>
        <div className="grid grid-cols-1 gap-2">
          {examples.map((example, index) => (
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
          Collision Theory Fundamentals
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Collision Frequency:</strong> Number of molecular collisions per unit volume per unit time
          </p>
          <p>
            <strong>Activation Energy:</strong> Minimum energy required for successful reaction
          </p>
          <p>
            <strong>Steric Factor (p):</strong> Fraction of collisions with proper orientation (0 &lt; p ≤ 1)
          </p>
          <p>
            <strong>Rate Constant:</strong> k = p × Z × e^(-Ea/RT), where Z is collision frequency
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollisionTheoryCalculator;
