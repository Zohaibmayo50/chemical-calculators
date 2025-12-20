'use client';

import React, { useState } from 'react';

const RaoultsLawCalculator: React.FC = () => {
  const [solventPressure, setSolventPressure] = useState<string>('');
  const [moleFractionSolvent, setMoleFractionSolvent] = useState<string>('');
  const [moleFractionSolute, setMoleFractionSolute] = useState<string>('');
  const [partialPressure, setPartialPressure] = useState<number | null>(null);
  const [pressureLowering, setPressureLowering] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setPartialPressure(null);
    setPressureLowering(null);

    try {
      const P0 = parseFloat(solventPressure);
      const chiSolvent = parseFloat(moleFractionSolvent);
      const chiSolute = parseFloat(moleFractionSolute);

      if (!solventPressure) {
        setError('Please enter the pure solvent vapor pressure (P°)');
        return;
      }

      if (P0 <= 0) {
        setError('Vapor pressure must be positive');
        return;
      }

      // Option 1: User provides mole fraction of solvent
      if (moleFractionSolvent) {
        if (chiSolvent < 0 || chiSolvent > 1) {
          setError('Mole fraction must be between 0 and 1');
          return;
        }
        // Raoult's Law: P = χ_solvent × P°
        const calculated = chiSolvent * P0;
        setPartialPressure(calculated);
        setPressureLowering(P0 - calculated);
      }
      // Option 2: User provides mole fraction of solute
      else if (moleFractionSolute) {
        if (chiSolute < 0 || chiSolute > 1) {
          setError('Mole fraction must be between 0 and 1');
          return;
        }
        // χ_solvent = 1 - χ_solute
        const chiSolv = 1 - chiSolute;
        const calculated = chiSolv * P0;
        setPartialPressure(calculated);
        setPressureLowering(P0 - calculated);
      } else {
        setError('Please enter either mole fraction of solvent or solute');
        return;
      }
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setSolventPressure('');
    setMoleFractionSolvent('');
    setMoleFractionSolute('');
    setPartialPressure(null);
    setPressureLowering(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Raoult&apos;s Law Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Raoult&apos;s Law:</strong> P<sub>solvent</sub> = χ<sub>solvent</sub> × P°<sub>solvent</sub>
          <br />
          For ideal solutions: partial pressure is proportional to mole fraction
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Pure Solvent Vapor Pressure (P°)
          </label>
          <input
            type="number"
            value={solventPressure}
            onChange={(e) => setSolventPressure(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter P°"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">mmHg, atm, kPa, or any pressure unit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mole Fraction of Solvent (χ<sub>solvent</sub>)
            </label>
            <input
              type="number"
              value={moleFractionSolvent}
              onChange={(e) => {
                setMoleFractionSolvent(e.target.value);
                if (e.target.value) setMoleFractionSolute('');
              }}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter χ_solvent"
              step="any"
              min="0"
              max="1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Between 0 and 1</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              OR Mole Fraction of Solute (χ<sub>solute</sub>)
            </label>
            <input
              type="number"
              value={moleFractionSolute}
              onChange={(e) => {
                setMoleFractionSolute(e.target.value);
                if (e.target.value) setMoleFractionSolvent('');
              }}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Enter χ_solute"
              step="any"
              min="0"
              max="1"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Between 0 and 1</p>
          </div>
        </div>
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

      {partialPressure !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Partial Pressure of Solvent:
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {partialPressure.toFixed(4)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Same units as P°
            </p>
          </div>

          {pressureLowering !== null && (
            <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Vapor Pressure Lowering (ΔP):</h4>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{pressureLowering.toFixed(4)}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                ΔP = P° - P<sub>solution</sub>
              </p>
            </div>
          )}

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Adding a non-volatile solute lowers the vapor pressure of the solvent</li>
              <li>• The decrease is proportional to the mole fraction of solute</li>
              <li>• This is a colligative property (depends on number, not type of particles)</li>
              <li>• Assumes ideal solution behavior</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Solvent Vapor Pressures (25°C):</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• Water: 23.8 mmHg</div>
          <div>• Ethanol: 59.0 mmHg</div>
          <div>• Benzene: 95.1 mmHg</div>
          <div>• Acetone: 229.5 mmHg</div>
        </div>
      </div>
    </div>
  );
};

export default RaoultsLawCalculator;
