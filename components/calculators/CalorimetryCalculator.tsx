'use client';

import React, { useState } from 'react';

const CalorimetryCalculator: React.FC = () => {
  const [mass, setMass] = useState<string>('');
  const [specificHeat, setSpecificHeat] = useState<string>('');
  const [tempInitial, setTempInitial] = useState<string>('');
  const [tempFinal, setTempFinal] = useState<string>('');
  const [heatEnergy, setHeatEnergy] = useState<number | null>(null);
  const [tempChange, setTempChange] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculate = () => {
    setError('');
    setHeatEnergy(null);
    setTempChange(null);

    try {
      const m = parseFloat(mass);
      const c = parseFloat(specificHeat);
      const Ti = parseFloat(tempInitial);
      const Tf = parseFloat(tempFinal);

      if (!mass || !specificHeat || !tempInitial || !tempFinal) {
        setError('Please enter all values');
        return;
      }

      if (m <= 0 || c <= 0) {
        setError('Mass and specific heat must be positive');
        return;
      }

      // q = mcΔT
      const deltaT = Tf - Ti;
      const q = m * c * deltaT;

      setHeatEnergy(q);
      setTempChange(deltaT);
    } catch (err) {
      setError('Invalid input values');
    }
  };

  const handleClear = () => {
    setMass('');
    setSpecificHeat('');
    setTempInitial('');
    setTempFinal('');
    setHeatEnergy(null);
    setTempChange(null);
    setError('');
  };

  const setMaterial = (material: string) => {
    const specificHeats: { [key: string]: string } = {
      'Water': '4.184',
      'Ice': '2.09',
      'Steam': '2.01',
      'Aluminum': '0.897',
      'Copper': '0.385',
      'Iron': '0.449',
      'Gold': '0.129',
      'Silver': '0.235',
    };
    if (specificHeats[material]) {
      setSpecificHeat(specificHeats[material]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Calorimetry Calculator
      </h2>

      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Heat Equation:</strong> q = mcΔT
          <br />
          Calculate heat absorbed or released during temperature changes
        </p>
      </div>

      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Material (Quick Fill Specific Heat)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {['Water', 'Ice', 'Steam', 'Aluminum', 'Copper', 'Iron', 'Gold', 'Silver'].map((material) => (
            <button
              key={material}
              onClick={() => setMaterial(material)}
              className="py-2 px-3 bg-tertiary-100 dark:bg-tertiary-900/30 text-tertiary-700 dark:text-tertiary-300 rounded-lg hover:bg-tertiary-200 dark:hover:bg-tertiary-900/50 text-sm font-medium transition-colors"
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Mass (m)
          </label>
          <input
            type="number"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter mass"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">grams (g)</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Specific Heat Capacity (c)
          </label>
          <input
            type="number"
            value={specificHeat}
            onChange={(e) => setSpecificHeat(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
            placeholder="Enter specific heat"
            step="any"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">J/(g·°C)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Temperature (T<sub>i</sub>)
            </label>
            <input
              type="number"
              value={tempInitial}
              onChange={(e) => setTempInitial(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Initial temp"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">°C</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Final Temperature (T<sub>f</sub>)
            </label>
            <input
              type="number"
              value={tempFinal}
              onChange={(e) => setTempFinal(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              placeholder="Final temp"
              step="any"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">°C</p>
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
          Calculate Heat
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

      {heatEnergy !== null && tempChange !== null && (
        <div className="space-y-4">
          <div className="p-6 bg-gradient-to-r from-tertiary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Heat Energy (q):
            </h3>
            <p className="text-4xl font-bold text-tertiary-600 dark:text-tertiary-400 mb-2">
              {heatEnergy.toFixed(2)} J
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {(heatEnergy / 1000).toFixed(3)} kJ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg ${tempChange > 0 ? 'bg-red-50 dark:bg-red-900/30' : 'bg-blue-50 dark:bg-blue-900/30'}`}>
              <h4 className={`font-semibold mb-2 ${tempChange > 0 ? 'text-red-900 dark:text-red-100' : 'text-blue-900 dark:text-blue-100'}`}>
                Temperature Change:
              </h4>
              <p className={`text-2xl font-bold ${tempChange > 0 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                {tempChange > 0 ? '+' : ''}{tempChange.toFixed(2)}°C
              </p>
            </div>

            <div className={`p-4 rounded-lg ${heatEnergy > 0 ? 'bg-red-50 dark:bg-red-900/30' : 'bg-blue-50 dark:bg-blue-900/30'}`}>
              <h4 className={`font-semibold mb-2 ${heatEnergy > 0 ? 'text-red-900 dark:text-red-100' : 'text-blue-900 dark:text-blue-100'}`}>
                Process Type:
              </h4>
              <p className={`text-lg font-semibold ${heatEnergy > 0 ? 'text-red-600 dark:text-red-400' : 'text-blue-600 dark:text-blue-400'}`}>
                {heatEnergy > 0 ? 'Endothermic (Heat Absorbed)' : 'Exothermic (Heat Released)'}
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Interpretation:</h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• q &gt; 0: System absorbs heat (temperature increases)</li>
              <li>• q &lt; 0: System releases heat (temperature decreases)</li>
              <li>• Larger |q| means more energy transferred</li>
              <li>• Sign convention: heat absorbed by system is positive</li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specific Heat Capacities (J/(g·°C)):</h4>
        <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <div>• Water (l): 4.184</div>
          <div>• Ice: 2.09</div>
          <div>• Steam: 2.01</div>
          <div>• Aluminum: 0.897</div>
          <div>• Copper: 0.385</div>
          <div>• Iron: 0.449</div>
          <div>• Gold: 0.129</div>
          <div>• Silver: 0.235</div>
        </div>
      </div>
    </div>
  );
};

export default CalorimetryCalculator;
