'use client';

import React, { useState } from 'react';

type CalculationMode = 'complete' | 'incomplete' | 'energy';

const CombustionCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('complete');

  // Complete combustion inputs
  const [hydrocarbon, setHydrocarbon] = useState<string>('');
  const [moles, setMoles] = useState<string>('');

  // Incomplete combustion inputs
  const [fuel, setFuel] = useState<string>('');
  const [oxygenAvailable, setOxygenAvailable] = useState<string>('');

  // Energy calculation inputs
  const [compound, setCompound] = useState<string>('');
  const [mass, setMass] = useState<string>('');
  const [enthalpyOfCombustion, setEnthalpyOfCombustion] = useState<string>('');

  // Results
  const [balancedEquation, setBalancedEquation] = useState<string>('');
  const [co2Produced, setCo2Produced] = useState<string>('');
  const [h2oProduced, setH2oProduced] = useState<string>('');
  const [o2Required, setO2Required] = useState<string>('');
  const [energyReleased, setEnergyReleased] = useState<string>('');
  const [combustionType, setCombustionType] = useState<string>('');

  const examples = [
    {
      name: 'Methane (CH₄)',
      formula: 'CH₄',
      equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
      deltaH: -890,
    },
    {
      name: 'Propane (C₃H₈)',
      formula: 'C₃H₈',
      equation: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
      deltaH: -2220,
    },
    {
      name: 'Ethanol (C₂H₅OH)',
      formula: 'C₂H₅OH',
      equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
      deltaH: -1367,
    },
    {
      name: 'Glucose (C₆H₁₂O₆)',
      formula: 'C₆H₁₂O₆',
      equation: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O',
      deltaH: -2803,
    },
  ];

  const loadExample = (example: typeof examples[0]) => {
    setMode('complete');
    setHydrocarbon(example.formula);
    setMoles('1');
  };

  const parseFormula = (formula: string): { C: number; H: number; O: number } => {
    const normalized = formula
      .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2')
      .replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5')
      .replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8')
      .replace(/₉/g, '9');

    let C = 0, H = 0, O = 0;

    const cMatch = normalized.match(/C(\d*)/);
    if (cMatch) C = cMatch[1] ? parseInt(cMatch[1]) : 1;

    const hMatch = normalized.match(/H(\d*)/);
    if (hMatch) H = hMatch[1] ? parseInt(hMatch[1]) : 1;

    const oMatch = normalized.match(/O(\d*)/);
    if (oMatch) O = oMatch[1] ? parseInt(oMatch[1]) : 1;

    return { C, H, O };
  };

  const formatSubscript = (text: string): string => {
    const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    return text.split('').map(char => {
      const num = parseInt(char);
      return isNaN(num) ? char : subscripts[num];
    }).join('');
  };

  const calculateCompleteCombustion = () => {
    if (!hydrocarbon || !moles) {
      alert('Please enter hydrocarbon formula and moles');
      return;
    }

    try {
      const composition = parseFormula(hydrocarbon);
      const { C, H, O } = composition;
      const n = parseFloat(moles);

      if (isNaN(n) || n <= 0) {
        alert('Invalid moles value');
        return;
      }

      // Complete combustion: CₓHᵧOᵧ + O₂ → CO₂ + H₂O
      // Balance: x CO₂ and y/2 H₂O produced
      // O₂ required: (2x + y/2 - z) / 2

      const co2Coeff = C;
      const h2oCoeff = H / 2;
      const o2Coeff = (2 * C + H / 2 - O) / 2;

      // Format equation
      let equation = '';
      
      // Reactants
      if (n !== 1) equation += `${n} `;
      equation += hydrocarbon;
      equation += ` + ${(o2Coeff * n).toFixed(1)} O₂`;
      
      // Products
      equation += ` → ${(co2Coeff * n).toFixed(1)} CO₂`;
      equation += ` + ${(h2oCoeff * n).toFixed(1)} H₂O`;

      setBalancedEquation(equation);
      setCo2Produced(`${(co2Coeff * n).toFixed(2)} mol`);
      setH2oProduced(`${(h2oCoeff * n).toFixed(2)} mol`);
      setO2Required(`${(o2Coeff * n).toFixed(2)} mol`);
      setCombustionType('Complete Combustion');
      setEnergyReleased('');

    } catch (error) {
      alert('Error parsing formula. Please use format like CH₄, C₃H₈, etc.');
    }
  };

  const calculateIncompleteCombustion = () => {
    if (!fuel || !oxygenAvailable) {
      alert('Please enter fuel formula and oxygen available');
      return;
    }

    try {
      const composition = parseFormula(fuel);
      const { C, H } = composition;
      const o2Available = parseFloat(oxygenAvailable);

      if (isNaN(o2Available) || o2Available <= 0) {
        alert('Invalid oxygen value');
        return;
      }

      // For complete combustion
      const o2Required = (2 * C + H / 2) / 2;

      if (o2Available >= o2Required) {
        // Complete combustion
        const equation = `${fuel} + ${o2Required.toFixed(1)} O₂ → ${C} CO₂ + ${(H/2).toFixed(1)} H₂O`;
        setBalancedEquation(equation);
        setCombustionType('Complete Combustion (sufficient O₂)');
        setCo2Produced(`${C.toFixed(2)} mol`);
        setH2oProduced(`${(H/2).toFixed(2)} mol`);
        setO2Required(`${o2Required.toFixed(2)} mol`);
      } else {
        // Incomplete combustion - produces CO and/or C
        const ratio = o2Available / o2Required;
        let equation = '';
        
        if (ratio > 0.5) {
          // Primarily CO formation
          equation = `${fuel} + ${o2Available.toFixed(1)} O₂ → CO + CO₂ + H₂O (incomplete)`;
          setCombustionType('Incomplete Combustion - CO produced');
        } else {
          // Very limited oxygen - soot formation
          equation = `${fuel} + ${o2Available.toFixed(1)} O₂ → C (soot) + CO + H₂O (very incomplete)`;
          setCombustionType('Incomplete Combustion - Soot produced');
        }
        
        setBalancedEquation(equation);
        setCo2Produced('Variable (incomplete)');
        setH2oProduced('Variable (incomplete)');
        setO2Required(`${o2Required.toFixed(2)} mol (for complete)`);
      }

      setEnergyReleased('');

    } catch (error) {
      alert('Error parsing formula');
    }
  };

  const calculateEnergy = () => {
    if (!compound || !mass || !enthalpyOfCombustion) {
      alert('Please enter all values');
      return;
    }

    const composition = parseFormula(compound);
    const { C, H, O } = composition;
    
    // Calculate molar mass
    const molarMass = C * 12.01 + H * 1.008 + O * 16.00;
    const massValue = parseFloat(mass);
    const deltaH = parseFloat(enthalpyOfCombustion);

    if (isNaN(massValue) || isNaN(deltaH)) {
      alert('Invalid input values');
      return;
    }

    const molesOfCompound = massValue / molarMass;
    const energy = Math.abs(molesOfCompound * deltaH);

    setEnergyReleased(`${energy.toFixed(2)} kJ`);
    setCombustionType('Energy Calculation');
    
    const co2Coeff = C;
    const h2oCoeff = H / 2;
    
    setBalancedEquation(`${compound} + O₂ → ${co2Coeff} CO₂ + ${h2oCoeff} H₂O`);
    setCo2Produced(`${(co2Coeff * molesOfCompound).toFixed(2)} mol`);
    setH2oProduced(`${(h2oCoeff * molesOfCompound).toFixed(2)} mol`);
    setO2Required(`Calculated from ${molesOfCompound.toFixed(3)} mol fuel`);
  };

  const handleCalculate = () => {
    if (mode === 'complete') {
      calculateCompleteCombustion();
    } else if (mode === 'incomplete') {
      calculateIncompleteCombustion();
    } else if (mode === 'energy') {
      calculateEnergy();
    }
  };

  const handleReset = () => {
    setHydrocarbon('');
    setMoles('');
    setFuel('');
    setOxygenAvailable('');
    setCompound('');
    setMass('');
    setEnthalpyOfCombustion('');
    setBalancedEquation('');
    setCo2Produced('');
    setH2oProduced('');
    setO2Required('');
    setEnergyReleased('');
    setCombustionType('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('complete')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'complete'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Complete Combustion
          </button>
          <button
            onClick={() => setMode('incomplete')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'incomplete'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Incomplete Combustion
          </button>
          <button
            onClick={() => setMode('energy')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'energy'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Energy Calculation
          </button>
        </div>
      </div>

      {mode === 'complete' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hydrocarbon Formula
            </label>
            <input
              type="text"
              value={hydrocarbon}
              onChange={(e) => setHydrocarbon(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., CH₄, C₃H₈"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Moles of Fuel
            </label>
            <input
              type="number"
              value={moles}
              onChange={(e) => setMoles(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1"
              step="0.01"
            />
          </div>
        </div>
      )}

      {mode === 'incomplete' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fuel Formula
            </label>
            <input
              type="text"
              value={fuel}
              onChange={(e) => setFuel(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., CH₄, C₃H₈"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Oxygen Available (mol)
            </label>
            <input
              type="number"
              value={oxygenAvailable}
              onChange={(e) => setOxygenAvailable(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1.5"
              step="0.01"
            />
          </div>
        </div>
      )}

      {mode === 'energy' && (
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Compound Formula
            </label>
            <input
              type="text"
              value={compound}
              onChange={(e) => setCompound(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., CH₄, C₂H₅OH"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Mass of Compound (g)
            </label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 16"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enthalpy of Combustion (kJ/mol)
            </label>
            <input
              type="number"
              value={enthalpyOfCombustion}
              onChange={(e) => setEnthalpyOfCombustion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., -890 (negative for exothermic)"
              step="0.01"
            />
          </div>
        </div>
      )}

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

      {balancedEquation && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Type</p>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{combustionType}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Balanced Equation</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">{balancedEquation}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">CO₂ Produced</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400">{co2Produced}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">H₂O Produced</p>
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{h2oProduced}</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">O₂ Required</p>
              <p className="text-lg font-semibold text-orange-600 dark:text-orange-400">{o2Required}</p>
            </div>

            {energyReleased && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Energy Released</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{energyReleased}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Common Fuels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{example.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{example.equation}</div>
              <div className="text-xs text-gray-500 dark:text-gray-500">ΔH = {example.deltaH} kJ/mol</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombustionCalculator;
