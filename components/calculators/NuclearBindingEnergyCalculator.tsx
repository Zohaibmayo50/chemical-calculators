'use client';

import React, { useState } from 'react';

type CalculationMode = 'fromMassDefect' | 'toMassDefect' | 'perNucleon';

interface CommonNuclide {
  name: string;
  symbol: string;
  atomicNumber: number;
  massNumber: number;
  atomicMass: number; // in amu
  bindingEnergyPerNucleon: number; // in MeV
}

const commonNuclides: CommonNuclide[] = [
  { name: 'Hydrogen-1', symbol: '¹H', atomicNumber: 1, massNumber: 1, atomicMass: 1.007825, bindingEnergyPerNucleon: 0 },
  { name: 'Deuterium', symbol: '²H', atomicNumber: 1, massNumber: 2, atomicMass: 2.014102, bindingEnergyPerNucleon: 1.112 },
  { name: 'Helium-4', symbol: '⁴He', atomicNumber: 2, massNumber: 4, atomicMass: 4.002603, bindingEnergyPerNucleon: 7.074 },
  { name: 'Carbon-12', symbol: '¹²C', atomicNumber: 6, massNumber: 12, atomicMass: 12.000000, bindingEnergyPerNucleon: 7.680 },
  { name: 'Nitrogen-14', symbol: '¹⁴N', atomicNumber: 7, massNumber: 14, atomicMass: 14.003074, bindingEnergyPerNucleon: 7.476 },
  { name: 'Oxygen-16', symbol: '¹⁶O', atomicNumber: 8, massNumber: 16, atomicMass: 15.994915, bindingEnergyPerNucleon: 7.976 },
  { name: 'Iron-56', symbol: '⁵⁶Fe', atomicNumber: 26, massNumber: 56, atomicMass: 55.934937, bindingEnergyPerNucleon: 8.790 },
  { name: 'Uranium-235', symbol: '²³⁵U', atomicNumber: 92, massNumber: 235, atomicMass: 235.043928, bindingEnergyPerNucleon: 7.591 },
  { name: 'Uranium-238', symbol: '²³⁸U', atomicNumber: 92, massNumber: 238, atomicMass: 238.050788, bindingEnergyPerNucleon: 7.570 },
];

const NuclearBindingEnergyCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('fromMassDefect');
  const [massDefect, setMassDefect] = useState<string>('');
  const [atomicNumber, setAtomicNumber] = useState<string>('');
  const [massNumber, setMassNumber] = useState<string>('');
  const [atomicMass, setAtomicMass] = useState<string>('');
  const [bindingEnergy, setBindingEnergy] = useState<string>('');
  const [selectedNuclide, setSelectedNuclide] = useState<string>('');

  // Constants
  const PROTON_MASS = 1.007276; // amu
  const NEUTRON_MASS = 1.008665; // amu
  const AMU_TO_MEV = 931.494; // MeV/amu (conversion factor)

  const calculate = () => {
    if (mode === 'fromMassDefect') {
      const defect = parseFloat(massDefect);
      if (isNaN(defect)) return;

      // Calculate binding energy from mass defect
      // E = Δm × c² (where c² = 931.494 MeV/amu)
      const energy = defect * AMU_TO_MEV;
      setBindingEnergy(energy.toFixed(4));
    } else if (mode === 'toMassDefect') {
      const Z = parseFloat(atomicNumber);
      const A = parseFloat(massNumber);
      const mass = parseFloat(atomicMass);

      if (isNaN(Z) || isNaN(A) || isNaN(mass)) return;

      const N = A - Z; // number of neutrons

      // Calculate theoretical mass (sum of individual nucleons)
      const theoreticalMass = (Z * PROTON_MASS) + (N * NEUTRON_MASS);

      // Mass defect = theoretical mass - actual mass
      const defect = theoreticalMass - mass;
      setMassDefect(defect.toFixed(6));

      // Calculate binding energy
      const energy = defect * AMU_TO_MEV;
      setBindingEnergy(energy.toFixed(4));
    } else if (mode === 'perNucleon') {
      const Z = parseFloat(atomicNumber);
      const A = parseFloat(massNumber);
      const mass = parseFloat(atomicMass);

      if (isNaN(Z) || isNaN(A) || isNaN(mass)) return;

      const N = A - Z;
      const theoreticalMass = (Z * PROTON_MASS) + (N * NEUTRON_MASS);
      const defect = theoreticalMass - mass;
      const totalEnergy = defect * AMU_TO_MEV;

      // Binding energy per nucleon
      const energyPerNucleon = totalEnergy / A;

      setMassDefect(defect.toFixed(6));
      setBindingEnergy(energyPerNucleon.toFixed(4));
    }
  };

  const fillExample = (example: number) => {
    if (example === 1) {
      // Helium-4 example
      setMode('toMassDefect');
      setAtomicNumber('2');
      setMassNumber('4');
      setAtomicMass('4.002603');
    } else if (example === 2) {
      // Iron-56 per nucleon
      setMode('perNucleon');
      setAtomicNumber('26');
      setMassNumber('56');
      setAtomicMass('55.934937');
    } else if (example === 3) {
      // Direct mass defect to energy
      setMode('fromMassDefect');
      setMassDefect('0.030377');
    }
  };

  const selectNuclide = (nuclide: CommonNuclide) => {
    setSelectedNuclide(nuclide.symbol);
    setAtomicNumber(nuclide.atomicNumber.toString());
    setMassNumber(nuclide.massNumber.toString());
    setAtomicMass(nuclide.atomicMass.toString());
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
            onClick={() => setMode('fromMassDefect')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'fromMassDefect'
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
            }`}
          >
            <div className="font-semibold">From Mass Defect</div>
            <div className="text-sm opacity-75">Calculate binding energy</div>
          </button>
          <button
            onClick={() => setMode('toMassDefect')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'toMassDefect'
                ? 'border-secondary-500 bg-secondary-50 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-secondary-300'
            }`}
          >
            <div className="font-semibold">To Mass Defect</div>
            <div className="text-sm opacity-75">From nuclide data</div>
          </button>
          <button
            onClick={() => setMode('perNucleon')}
            className={`p-4 rounded-lg border-2 transition-all ${
              mode === 'perNucleon'
                ? 'border-tertiary-500 bg-tertiary-50 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300'
                : 'border-gray-300 dark:border-gray-600 hover:border-tertiary-300'
            }`}
          >
            <div className="font-semibold">Per Nucleon</div>
            <div className="text-sm opacity-75">Binding energy/nucleon</div>
          </button>
        </div>
      </div>

      {/* Common Nuclides Database */}
      {(mode === 'toMassDefect' || mode === 'perNucleon') && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Common Nuclides (Quick Select)
          </label>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {commonNuclides.map((nuclide) => (
              <button
                key={nuclide.symbol}
                onClick={() => selectNuclide(nuclide)}
                className={`p-3 rounded-lg border transition-all text-sm ${
                  selectedNuclide === nuclide.symbol
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                <div className="font-semibold">{nuclide.symbol}</div>
                <div className="text-xs opacity-75">A={nuclide.massNumber}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {mode === 'fromMassDefect' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mass Defect (Δm) in amu
            </label>
            <input
              type="number"
              step="0.000001"
              value={massDefect}
              onChange={(e) => setMassDefect(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., 0.030377"
            />
          </div>
        )}

        {(mode === 'toMassDefect' || mode === 'perNucleon') && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Atomic Number (Z)
              </label>
              <input
                type="number"
                value={atomicNumber}
                onChange={(e) => setAtomicNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Number of protons"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mass Number (A)
              </label>
              <input
                type="number"
                value={massNumber}
                onChange={(e) => setMassNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Protons + Neutrons"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Atomic Mass (amu)
              </label>
              <input
                type="number"
                step="0.000001"
                value={atomicMass}
                onChange={(e) => setAtomicMass(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Actual mass in amu"
              />
            </div>
          </>
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
            <div className="font-semibold text-sm">Helium-4 Mass Defect</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Calculate Δm for ⁴He</div>
          </button>
          <button
            onClick={() => fillExample(2)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Iron-56 Stability</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">BE/nucleon for ⁵⁶Fe</div>
          </button>
          <button
            onClick={() => fillExample(3)}
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left"
          >
            <div className="font-semibold text-sm">Direct Conversion</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Δm = 0.030377 amu</div>
          </button>
        </div>
      </div>

      {/* Results */}
      {(massDefect || bindingEnergy) && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6 border-2 border-primary-200 dark:border-primary-800">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {massDefect && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Mass Defect (Δm)</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {massDefect} amu
                </div>
              </div>
            )}
            {bindingEnergy && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {mode === 'perNucleon' ? 'Binding Energy per Nucleon' : 'Total Binding Energy'}
                </div>
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">
                  {bindingEnergy} MeV{mode === 'perNucleon' ? '/nucleon' : ''}
                </div>
              </div>
            )}
          </div>

          {mode !== 'fromMassDefect' && atomicNumber && massNumber && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-semibold mb-2">Calculation Details:</p>
                <p>Protons (Z) = {atomicNumber}</p>
                <p>Neutrons (N) = {parseInt(massNumber) - parseInt(atomicNumber)}</p>
                <p>Nucleons (A) = {massNumber}</p>
                <p className="mt-2">
                  Theoretical mass = ({atomicNumber} × {PROTON_MASS}) + ({parseInt(massNumber) - parseInt(atomicNumber)} × {NEUTRON_MASS})
                </p>
                <p>Conversion factor: 1 amu = 931.494 MeV/c²</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Educational Info */}
      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
          Understanding Nuclear Binding Energy
        </h3>
        <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <p>
            <strong>Mass Defect:</strong> The difference between the mass of separated nucleons and the mass of the nucleus.
          </p>
          <p>
            <strong>Binding Energy:</strong> The energy required to separate all nucleons in a nucleus, calculated using Einstein's equation E = mc².
          </p>
          <p>
            <strong>Formula:</strong> BE = Δm × c² = Δm × 931.494 MeV (where Δm is in amu)
          </p>
          <p>
            <strong>Stability:</strong> Higher binding energy per nucleon means greater nuclear stability. Iron-56 has the highest BE/nucleon (~8.79 MeV).
          </p>
        </div>
      </div>
    </div>
  );
};

export default NuclearBindingEnergyCalculator;
