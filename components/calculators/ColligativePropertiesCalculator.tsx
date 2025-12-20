'use client';

import React, { useState } from 'react';

type PropertyType = 'freezing' | 'boiling' | 'osmotic';

const ColligativePropertiesCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<PropertyType>('freezing');
  const [molality, setMolality] = useState<string>('');
  const [vanHoff, setVanHoff] = useState<string>('1');
  const [kf, setKf] = useState<string>('1.86');
  const [kb, setKb] = useState<string>('0.512');
  const [result, setResult] = useState<number | null>(null);
  const [newPoint, setNewPoint] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setResult(null);
    setNewPoint(null);

    try {
      const m = parseFloat(molality);
      const i = parseFloat(vanHoff);

      if (!molality || !vanHoff) {
        setError('Please enter molality and van\'t Hoff factor');
        return;
      }

      if (m < 0 || i <= 0) {
        setError('Molality must be non-negative and i must be positive');
        return;
      }

      if (propertyType === 'freezing') {
        const kfVal = parseFloat(kf);
        if (!kf || kfVal <= 0) {
          setError('Please enter a valid Kf value');
          return;
        }
        // ΔTf = i × Kf × m
        const deltaT = i * kfVal * m;
        setResult(deltaT);
        setNewPoint(0 - deltaT); // Water freezes at 0°C
      } else if (propertyType === 'boiling') {
        const kbVal = parseFloat(kb);
        if (!kb || kbVal <= 0) {
          setError('Please enter a valid Kb value');
          return;
        }
        // ΔTb = i × Kb × m
        const deltaT = i * kbVal * m;
        setResult(deltaT);
        setNewPoint(100 + deltaT); // Water boils at 100°C
      } else if (propertyType === 'osmotic') {
        // π = i × M × R × T
        // Using simplified version: π = i × M × 0.0821 × 298 (at 25°C)
        // For dilute solutions, molality ≈ molarity
        const R = 0.0821; // L·atm/(mol·K)
        const T = 298; // K (25°C)
        const osmoticPressure = i * m * R * T;
        setResult(osmoticPressure);
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setMolality('');
    setVanHoff('1');
    setKf('1.86');
    setKb('0.512');
    setResult(null);
    setNewPoint(null);
    setError('');
  };

  const setSolvent = (solvent: string) => {
    const solvents: { [key: string]: { kf: string; kb: string } } = {
      'water': { kf: '1.86', kb: '0.512' },
      'benzene': { kf: '5.12', kb: '2.53' },
      'camphor': { kf: '37.7', kb: '5.95' },
      'acetic-acid': { kf: '3.90', kb: '3.07' },
    };
    if (solvents[solvent]) {
      setKf(solvents[solvent].kf);
      setKb(solvents[solvent].kb);
    }
  };

  const setSolute = (solute: string) => {
    const solutes: { [key: string]: string } = {
      'sugar': '1',
      'NaCl': '2',
      'CaCl2': '3',
      'MgSO4': '2',
      'AlCl3': '4',
    };
    if (solutes[solute]) {
      setVanHoff(solutes[solute]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Colligative Properties Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Colligative Properties:</strong> Properties that depend only on the number of solute particles
          <br />
          • Freezing Point Depression: ΔTf = i·Kf·m
          <br />
          • Boiling Point Elevation: ΔTb = i·Kb·m
          <br />
          • Osmotic Pressure: π = i·M·R·T
        </p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculate
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { mode: 'freezing' as PropertyType, label: 'Freezing Point' },
            { mode: 'boiling' as PropertyType, label: 'Boiling Point' },
            { mode: 'osmotic' as PropertyType, label: 'Osmotic Pressure' },
          ].map(({ mode, label }) => (
            <button
              key={mode}
              onClick={() => setPropertyType(mode)}
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                propertyType === mode
                  ? 'bg-tertiary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Solvent (Quick Fill Constants)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { key: 'water', label: 'Water' },
            { key: 'benzene', label: 'Benzene' },
            { key: 'camphor', label: 'Camphor' },
            { key: 'acetic-acid', label: 'Acetic Acid' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSolvent(key)}
              className="py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 text-sm font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Solute (Quick Fill i)
        </label>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {[
            { key: 'sugar', label: 'Sugar (i=1)' },
            { key: 'NaCl', label: 'NaCl (i=2)' },
            { key: 'CaCl2', label: 'CaCl₂ (i=3)' },
            { key: 'MgSO4', label: 'MgSO₄ (i=2)' },
            { key: 'AlCl3', label: 'AlCl₃ (i=4)' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setSolute(key)}
              className="py-2 px-3 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50 text-xs font-medium transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Molality (m)
          </label>
          <input
            type="number"
            value={molality}
            onChange={(e) => setMolality(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter molality"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">mol solute / kg solvent</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            van&apos;t Hoff Factor (i)
          </label>
          <input
            type="number"
            value={vanHoff}
            onChange={(e) => setVanHoff(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter i"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Number of particles per formula unit (1 for non-electrolytes, 2 for NaCl, etc.)
          </p>
        </div>

        {propertyType === 'freezing' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kf (Freezing Point Depression Constant)
            </label>
            <input
              type="number"
              value={kf}
              onChange={(e) => setKf(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter Kf"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">°C·kg/mol (1.86 for water)</p>
          </div>
        )}

        {propertyType === 'boiling' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Kb (Boiling Point Elevation Constant)
            </label>
            <input
              type="number"
              value={kb}
              onChange={(e) => setKb(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter Kb"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">°C·kg/mol (0.512 for water)</p>
          </div>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={calculate}
          className="flex-1 bg-tertiary-600 hover:bg-tertiary-700 text-white font-semibold 
                   py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg 
                   hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg 
                   text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 
                   transition-colors duration-200"
        >
          Clear
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {result !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {propertyType === 'freezing' && 'Freezing Point Depression (ΔTf):'}
              {propertyType === 'boiling' && 'Boiling Point Elevation (ΔTb):'}
              {propertyType === 'osmotic' && 'Osmotic Pressure (π):'}
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {result.toFixed(3)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {(propertyType === 'freezing' || propertyType === 'boiling') && '°C'}
              {propertyType === 'osmotic' && 'atm (at 25°C)'}
            </p>
          </div>

          {newPoint !== null && (
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {propertyType === 'freezing' ? 'New Freezing Point:' : 'New Boiling Point:'}
              </h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {newPoint.toFixed(3)}°C
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                {propertyType === 'freezing' 
                  ? `Decreases from 0°C by ${result.toFixed(3)}°C` 
                  : `Increases from 100°C by ${result.toFixed(3)}°C`}
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Points:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {propertyType === 'freezing' && (
                <>
                  <li>• Adding solute lowers freezing point</li>
                  <li>• Larger i value = greater depression</li>
                  <li>• Used in antifreeze, de-icing</li>
                </>
              )}
              {propertyType === 'boiling' && (
                <>
                  <li>• Adding solute raises boiling point</li>
                  <li>• Larger i value = greater elevation</li>
                  <li>• Used in cooking (salted water)</li>
                </>
              )}
              {propertyType === 'osmotic' && (
                <>
                  <li>• Pressure needed to prevent osmosis</li>
                  <li>• Important in biological systems</li>
                  <li>• Used in reverse osmosis</li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solvent Constants:</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-600">
                <th className="text-left py-2 text-gray-900 dark:text-white">Solvent</th>
                <th className="text-center py-2 text-gray-900 dark:text-white">Kf (°C·kg/mol)</th>
                <th className="text-center py-2 text-gray-900 dark:text-white">Kb (°C·kg/mol)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="py-2">Water</td>
                <td className="text-center py-2">1.86</td>
                <td className="text-center py-2">0.512</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="py-2">Benzene</td>
                <td className="text-center py-2">5.12</td>
                <td className="text-center py-2">2.53</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="py-2">Camphor</td>
                <td className="text-center py-2">37.7</td>
                <td className="text-center py-2">5.95</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-600">
                <td className="py-2">Acetic Acid</td>
                <td className="text-center py-2">3.90</td>
                <td className="text-center py-2">3.07</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ColligativePropertiesCalculator;
