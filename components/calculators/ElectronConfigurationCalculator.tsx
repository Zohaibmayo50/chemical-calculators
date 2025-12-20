'use client';

import React, { useState } from 'react';

interface ElectronConfig {
  atomicNumber: number;
  element: string;
  symbol: string;
  configuration: string;
  nobleGasConfig: string;
  orbitalDiagram: string[];
}

const ElectronConfigurationCalculator: React.FC = () => {
  const [atomicNumber, setAtomicNumber] = useState<string>('26');
  const [result, setResult] = useState<ElectronConfig | null>(null);
  const [error, setError] = useState<string>('');

  const elements = [
    { z: 1, symbol: 'H', name: 'Hydrogen' },
    { z: 2, symbol: 'He', name: 'Helium' },
    { z: 6, symbol: 'C', name: 'Carbon' },
    { z: 7, symbol: 'N', name: 'Nitrogen' },
    { z: 8, symbol: 'O', name: 'Oxygen' },
    { z: 11, symbol: 'Na', name: 'Sodium' },
    { z: 17, symbol: 'Cl', name: 'Chlorine' },
    { z: 26, symbol: 'Fe', name: 'Iron' },
    { z: 29, symbol: 'Cu', name: 'Copper' },
    { z: 47, symbol: 'Ag', name: 'Silver' },
    { z: 79, symbol: 'Au', name: 'Gold' },
  ];

  // Aufbau principle orbital filling order
  const orbitalOrder = [
    '1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s',
    '4f', '5d', '6p', '7s', '5f', '6d', '7p'
  ];

  const orbitalCapacity: { [key: string]: number } = {
    's': 2, 'p': 6, 'd': 10, 'f': 14
  };

  const elementData: { [key: number]: { symbol: string; name: string } } = {
    1: { symbol: 'H', name: 'Hydrogen' }, 2: { symbol: 'He', name: 'Helium' },
    3: { symbol: 'Li', name: 'Lithium' }, 4: { symbol: 'Be', name: 'Beryllium' },
    5: { symbol: 'B', name: 'Boron' }, 6: { symbol: 'C', name: 'Carbon' },
    7: { symbol: 'N', name: 'Nitrogen' }, 8: { symbol: 'O', name: 'Oxygen' },
    9: { symbol: 'F', name: 'Fluorine' }, 10: { symbol: 'Ne', name: 'Neon' },
    11: { symbol: 'Na', name: 'Sodium' }, 12: { symbol: 'Mg', name: 'Magnesium' },
    13: { symbol: 'Al', name: 'Aluminum' }, 14: { symbol: 'Si', name: 'Silicon' },
    15: { symbol: 'P', name: 'Phosphorus' }, 16: { symbol: 'S', name: 'Sulfur' },
    17: { symbol: 'Cl', name: 'Chlorine' }, 18: { symbol: 'Ar', name: 'Argon' },
    19: { symbol: 'K', name: 'Potassium' }, 20: { symbol: 'Ca', name: 'Calcium' },
    21: { symbol: 'Sc', name: 'Scandium' }, 22: { symbol: 'Ti', name: 'Titanium' },
    23: { symbol: 'V', name: 'Vanadium' }, 24: { symbol: 'Cr', name: 'Chromium' },
    25: { symbol: 'Mn', name: 'Manganese' }, 26: { symbol: 'Fe', name: 'Iron' },
    27: { symbol: 'Co', name: 'Cobalt' }, 28: { symbol: 'Ni', name: 'Nickel' },
    29: { symbol: 'Cu', name: 'Copper' }, 30: { symbol: 'Zn', name: 'Zinc' },
    31: { symbol: 'Ga', name: 'Gallium' }, 32: { symbol: 'Ge', name: 'Germanium' },
    33: { symbol: 'As', name: 'Arsenic' }, 34: { symbol: 'Se', name: 'Selenium' },
    35: { symbol: 'Br', name: 'Bromine' }, 36: { symbol: 'Kr', name: 'Krypton' },
    47: { symbol: 'Ag', name: 'Silver' }, 79: { symbol: 'Au', name: 'Gold' },
  };

  const nobleGases: { [key: number]: string } = {
    2: 'He', 10: 'Ne', 18: 'Ar', 36: 'Kr', 54: 'Xe', 86: 'Rn'
  };

  const getConfiguration = (z: number): string => {
    // Handle exceptions (Chromium and Copper-like elements)
    const exceptions: { [key: number]: string } = {
      24: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d⁵', // Cr
      29: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ 3d¹⁰', // Cu
      41: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁴', // Nb
      42: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d⁵', // Mo
      47: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s¹ 4d¹⁰', // Ag
      79: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s¹ 4f¹⁴ 5d¹⁰', // Au
    };

    if (exceptions[z]) return exceptions[z];

    let remainingElectrons = z;
    const config: string[] = [];

    for (const orbital of orbitalOrder) {
      if (remainingElectrons === 0) break;

      const orbitalType = orbital.slice(-1);
      const capacity = orbitalCapacity[orbitalType];
      const electronsInOrbital = Math.min(remainingElectrons, capacity);

      config.push(`${orbital}${superscript(electronsInOrbital)}`);
      remainingElectrons -= electronsInOrbital;
    }

    return config.join(' ');
  };

  const getNobleGasConfiguration = (z: number): string => {
    // Find the previous noble gas
    let nobleGasZ = 0;
    for (const ngZ of Object.keys(nobleGases).map(Number).sort((a, b) => b - a)) {
      if (ngZ < z) {
        nobleGasZ = ngZ;
        break;
      }
    }

    if (nobleGasZ === 0) return getConfiguration(z); // No noble gas core

    const coreSymbol = nobleGases[nobleGasZ];
    const remainingZ = z - nobleGasZ;

    // Get configuration for remaining electrons
    let remainingElectrons = remainingZ;
    const config: string[] = [];

    for (const orbital of orbitalOrder) {
      if (remainingElectrons === 0) break;

      const orbitalType = orbital.slice(-1);
      const capacity = orbitalCapacity[orbitalType];

      // Determine how many electrons would be in this orbital at noble gas config
      const fullConfig = getConfiguration(nobleGasZ);
      if (fullConfig.includes(orbital)) continue; // Skip orbitals in noble gas core

      const electronsInOrbital = Math.min(remainingElectrons, capacity);
      config.push(`${orbital}${superscript(electronsInOrbital)}`);
      remainingElectrons -= electronsInOrbital;
    }

    return `[${coreSymbol}] ${config.join(' ')}`;
  };

  const superscript = (n: number): string => {
    const superscripts: { [key: number]: string } = {
      0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸',
      9: '⁹', 10: '¹⁰', 11: '¹¹', 12: '¹²', 13: '¹³', 14: '¹⁴'
    };
    return superscripts[n] || n.toString();
  };

  const getOrbitalDiagram = (z: number): string[] => {
    const diagram: string[] = [];
    let remainingElectrons = z;

    for (const orbital of orbitalOrder) {
      if (remainingElectrons === 0) break;

      const orbitalType = orbital.slice(-1);
      const capacity = orbitalCapacity[orbitalType];
      const electronsInOrbital = Math.min(remainingElectrons, capacity);

      // Create visual representation
      const numBoxes = capacity / 2; // Each box holds 2 electrons (spin up and down)
      let boxes = '';

      for (let i = 0; i < numBoxes; i++) {
        const electronCount = Math.min(2, Math.max(0, electronsInOrbital - i * 2));
        if (electronCount === 2) {
          boxes += '[↑↓] ';
        } else if (electronCount === 1) {
          boxes += '[↑_] ';
        } else {
          boxes += '[__] ';
        }
      }

      diagram.push(`${orbital}: ${boxes.trim()}`);
      remainingElectrons -= electronsInOrbital;
    }

    return diagram;
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      const z = parseInt(atomicNumber);

      if (isNaN(z) || z < 1 || z > 118) {
        throw new Error('Please enter a valid atomic number between 1 and 118');
      }

      const element = elementData[z] || { symbol: `Z=${z}`, name: 'Unknown' };

      const config: ElectronConfig = {
        atomicNumber: z,
        element: element.name,
        symbol: element.symbol,
        configuration: getConfiguration(z),
        nobleGasConfig: getNobleGasConfiguration(z),
        orbitalDiagram: getOrbitalDiagram(z),
      };

      setResult(config);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillElement = (z: number) => {
    setAtomicNumber(z.toString());
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setAtomicNumber('26');
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Aufbau Principle Electron Configuration
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Enter an atomic number to determine its electron configuration using the Aufbau principle.
          </p>
        </div>

        {/* Quick Select Elements */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Quick Select:
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {elements.map((elem) => (
              <button
                key={elem.z}
                onClick={() => fillElement(elem.z)}
                className="p-2 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow text-center"
              >
                <div className="font-bold text-lg text-gray-900 dark:text-white">{elem.symbol}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{elem.z}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Atomic Number (Z)
          </label>
          <input
            type="number"
            value={atomicNumber}
            onChange={(e) => setAtomicNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="26"
            min="1"
            max="118"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Enter a value from 1 (Hydrogen) to 118 (Oganesson)
          </p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate Configuration
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Element Information:
              </h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-lg">
                  <strong className="text-2xl">{result.symbol}</strong> - {result.element}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Atomic Number: {result.atomicNumber}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Full Electron Configuration:
              </h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-lg">
                {result.configuration}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Noble Gas (Abbreviated) Configuration:
              </h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-lg">
                {result.nobleGasConfig}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Orbital Diagram:
              </h4>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg font-mono text-sm space-y-1 max-h-64 overflow-y-auto">
                {result.orbitalDiagram.map((line, idx) => (
                  <div key={idx} className="whitespace-nowrap">
                    {line}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                ↑ = spin up electron, ↓ = spin down electron, __ = empty orbital
              </p>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Electron Configurations
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Aufbau Principle:</strong> Electrons fill orbitals starting from the lowest 
              energy level to higher energy levels following a specific order.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Orbital Order:</strong> 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s...</li>
              <li><strong>s orbitals:</strong> Hold 2 electrons max</li>
              <li><strong>p orbitals:</strong> Hold 6 electrons max (3 orbitals × 2)</li>
              <li><strong>d orbitals:</strong> Hold 10 electrons max (5 orbitals × 2)</li>
              <li><strong>f orbitals:</strong> Hold 14 electrons max (7 orbitals × 2)</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Exceptions:</strong> Some elements like Chromium (Cr) and Copper (Cu) have 
                unusual configurations because half-filled and fully-filled d orbitals are more stable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronConfigurationCalculator;
