'use client';

import React, { useState } from 'react';

type CalculationMode = 'validate' | 'electron' | 'orbitals';

const QuantumNumbersCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('validate');

  // Validation inputs
  const [n, setN] = useState<string>('');
  const [l, setL] = useState<string>('');
  const [ml, setMl] = useState<string>('');
  const [ms, setMs] = useState<string>('');

  // Electron configuration inputs
  const [atomicNumber, setAtomicNumber] = useState<string>('');
  const [electronNumber, setElectronNumber] = useState<string>('');

  // Orbital inputs
  const [principalQN, setPrincipalQN] = useState<string>('');
  const [azimuthalQN, setAzimuthalQN] = useState<string>('');

  // Results
  const [isValid, setIsValid] = useState<string>('');
  const [orbitalName, setOrbitalName] = useState<string>('');
  const [maxElectrons, setMaxElectrons] = useState<string>('');
  const [orbitalShape, setOrbitalShape] = useState<string>('');
  const [degeneracy, setDegeneracy] = useState<string>('');
  const [quantumSet, setQuantumSet] = useState<string>('');
  const [electronConfig, setElectronConfig] = useState<string>('');

  // Examples database
  const examples = [
    {
      name: '1s electron',
      n: 1,
      l: 0,
      ml: 0,
      ms: 0.5,
      mode: 'validate' as CalculationMode,
    },
    {
      name: '2p orbital',
      n: 2,
      l: 1,
      ml: -1,
      ms: -0.5,
      mode: 'validate' as CalculationMode,
    },
    {
      name: '3d orbital',
      n: 3,
      l: 2,
      ml: 0,
      ms: 0.5,
      mode: 'validate' as CalculationMode,
    },
    {
      name: 'Carbon (Z=6)',
      atomicNum: 6,
      electronNum: 6,
      mode: 'electron' as CalculationMode,
    },
    {
      name: 'Iron (Z=26)',
      atomicNum: 26,
      electronNum: 26,
      mode: 'electron' as CalculationMode,
    },
    {
      name: '4f orbitals',
      principal: 4,
      azimuthal: 3,
      mode: 'orbitals' as CalculationMode,
    },
  ];

  const loadExample = (example: typeof examples[0]) => {
    setMode(example.mode);
    if (example.n !== undefined) setN(example.n.toString());
    if (example.l !== undefined) setL(example.l.toString());
    if (example.ml !== undefined) setMl(example.ml.toString());
    if (example.ms !== undefined) setMs(example.ms.toString());
    if (example.atomicNum !== undefined) setAtomicNumber(example.atomicNum.toString());
    if (example.electronNum !== undefined) setElectronNumber(example.electronNum.toString());
    if (example.principal !== undefined) setPrincipalQN(example.principal.toString());
    if (example.azimuthal !== undefined) setAzimuthalQN(example.azimuthal.toString());
  };

  const validateQuantumNumbers = () => {
    const nVal = parseInt(n);
    const lVal = parseInt(l);
    const mlVal = parseInt(ml);
    const msVal = parseFloat(ms);

    if (isNaN(nVal) || isNaN(lVal) || isNaN(mlVal) || isNaN(msVal)) {
      alert('Please enter valid numerical values');
      return;
    }

    let valid = true;
    let reasons: string[] = [];

    // Rule 1: n must be positive integer (n = 1, 2, 3, ...)
    if (nVal < 1 || !Number.isInteger(nVal)) {
      valid = false;
      reasons.push('n must be a positive integer (1, 2, 3, ...)');
    }

    // Rule 2: l must be 0 to n-1
    if (lVal < 0 || lVal >= nVal || !Number.isInteger(lVal)) {
      valid = false;
      reasons.push(`l must be an integer from 0 to n-1 (0 to ${nVal - 1})`);
    }

    // Rule 3: ml must be -l to +l
    if (valid && (mlVal < -lVal || mlVal > lVal || !Number.isInteger(mlVal))) {
      valid = false;
      reasons.push(`ml must be an integer from -l to +l (${-lVal} to ${lVal})`);
    }

    // Rule 4: ms must be +1/2 or -1/2
    if (msVal !== 0.5 && msVal !== -0.5) {
      valid = false;
      reasons.push('ms must be +1/2 or -1/2');
    }

    if (valid) {
      setIsValid('Valid quantum number set ✓');
      
      // Determine orbital designation
      const orbitalLetters = ['s', 'p', 'd', 'f', 'g', 'h'];
      const orbital = `${nVal}${orbitalLetters[lVal] || lVal}`;
      setOrbitalName(orbital);
      
      // Calculate properties
      const maxE = 2 * (2 * lVal + 1);
      setMaxElectrons(`${maxE} electrons`);
      
      const shapes = ['spherical', 'dumbbell', 'cloverleaf', 'complex'];
      setOrbitalShape(shapes[lVal] || 'complex multi-lobed');
      
      setDegeneracy(`${2 * lVal + 1} orbitals`);
      
      setQuantumSet(
        `n=${nVal}, l=${lVal}, ml=${mlVal}, ms=${msVal > 0 ? '+1/2' : '-1/2'}`
      );
    } else {
      setIsValid('Invalid quantum number set ✗');
      setOrbitalName(reasons.join('; '));
      setMaxElectrons('');
      setOrbitalShape('');
      setDegeneracy('');
      setQuantumSet('');
    }
  };

  const calculateElectronConfig = () => {
    const Z = parseInt(atomicNumber);
    const electrons = parseInt(electronNumber) || Z;

    if (isNaN(Z) || isNaN(electrons)) {
      alert('Please enter atomic number');
      return;
    }

    // Aufbau principle order
    const order = [
      '1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s',
      '4f', '5d', '6p', '7s', '5f', '6d', '7p'
    ];
    
    const maxElectronsPerOrbital: { [key: string]: number } = {
      's': 2, 'p': 6, 'd': 10, 'f': 14
    };

    let config = '';
    let remaining = electrons;
    let lastOrbital = '';

    for (const orbital of order) {
      if (remaining <= 0) break;
      
      const orbitalType = orbital.slice(-1);
      const maxE = maxElectronsPerOrbital[orbitalType];
      const electronsInOrbital = Math.min(remaining, maxE);
      
      config += `${orbital}${electronsInOrbital === 1 ? '¹' : electronsInOrbital === 2 ? '²' : electronsInOrbital === 3 ? '³' : electronsInOrbital === 4 ? '⁴' : electronsInOrbital === 5 ? '⁵' : electronsInOrbital === 6 ? '⁶' : electronsInOrbital === 7 ? '⁷' : electronsInOrbital === 8 ? '⁸' : electronsInOrbital === 9 ? '⁹' : electronsInOrbital === 10 ? '¹⁰' : electronsInOrbital === 11 ? '¹¹' : electronsInOrbital === 12 ? '¹²' : electronsInOrbital === 13 ? '¹³' : electronsInOrbital === 14 ? '¹⁴' : electronsInOrbital.toString()} `;
      
      remaining -= electronsInOrbital;
      lastOrbital = orbital;
    }

    setElectronConfig(config.trim());
    
    // Determine quantum numbers for last electron
    const n = parseInt(lastOrbital.match(/\d+/)?.[0] || '1');
    const orbitalType = lastOrbital.slice(-1);
    const lMap: { [key: string]: number } = { 's': 0, 'p': 1, 'd': 2, 'f': 3 };
    const l = lMap[orbitalType];
    
    setQuantumSet(`Last electron: n=${n}, l=${l} (${n}${orbitalType} orbital)`);
  };

  const calculateOrbitalInfo = () => {
    const nVal = parseInt(principalQN);
    const lVal = parseInt(azimuthalQN);

    if (isNaN(nVal) || isNaN(lVal)) {
      alert('Please enter principal and azimuthal quantum numbers');
      return;
    }

    if (lVal >= nVal || lVal < 0) {
      alert(`l must be between 0 and ${nVal - 1}`);
      return;
    }

    const orbitalLetters = ['s', 'p', 'd', 'f', 'g', 'h'];
    const orbital = `${nVal}${orbitalLetters[lVal]}`;
    setOrbitalName(orbital);

    const numOrbitals = 2 * lVal + 1;
    setDegeneracy(`${numOrbitals} degenerate orbital${numOrbitals > 1 ? 's' : ''}`);

    const maxE = 2 * numOrbitals;
    setMaxElectrons(`Maximum: ${maxE} electrons (${numOrbitals} orbitals × 2)`);

    // List all possible ml values
    const mlValues: number[] = [];
    for (let i = -lVal; i <= lVal; i++) {
      mlValues.push(i);
    }
    
    setQuantumSet(`Possible ml values: ${mlValues.join(', ')}`);

    const shapes = [
      'Spherical (s)',
      'Dumbbell-shaped (p): px, py, pz',
      'Cloverleaf (d): dxy, dyz, dxz, dx²-y², dz²',
      'Complex (f): 7 complex orientations',
    ];
    setOrbitalShape(shapes[lVal] || 'Complex multi-lobed structure');
  };

  const handleCalculate = () => {
    if (mode === 'validate') {
      validateQuantumNumbers();
    } else if (mode === 'electron') {
      calculateElectronConfig();
    } else if (mode === 'orbitals') {
      calculateOrbitalInfo();
    }
  };

  const handleReset = () => {
    setN('');
    setL('');
    setMl('');
    setMs('');
    setAtomicNumber('');
    setElectronNumber('');
    setPrincipalQN('');
    setAzimuthalQN('');
    setIsValid('');
    setOrbitalName('');
    setMaxElectrons('');
    setOrbitalShape('');
    setDegeneracy('');
    setQuantumSet('');
    setElectronConfig('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('validate')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'validate'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Validate QN Set
          </button>
          <button
            onClick={() => setMode('electron')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'electron'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Electron Config
          </button>
          <button
            onClick={() => setMode('orbitals')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'orbitals'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Orbital Info
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mode === 'validate' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Principal Quantum Number (n)
              </label>
              <input
                type="number"
                value={n}
                onChange={(e) => setN(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="1, 2, 3, ..."
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Azimuthal Quantum Number (l)
              </label>
              <input
                type="number"
                value={l}
                onChange={(e) => setL(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="0 to n-1"
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Magnetic Quantum Number (ml)
              </label>
              <input
                type="number"
                value={ml}
                onChange={(e) => setMl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="-l to +l"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Spin Quantum Number (ms)
              </label>
              <select
                value={ms}
                onChange={(e) => setMs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select spin</option>
                <option value="0.5">+1/2 (spin up)</option>
                <option value="-0.5">-1/2 (spin down)</option>
              </select>
            </div>
          </>
        )}

        {mode === 'electron' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Atomic Number (Z)
              </label>
              <input
                type="number"
                value={atomicNumber}
                onChange={(e) => setAtomicNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 6 for Carbon"
                min="1"
                max="118"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Electrons (optional)
              </label>
              <input
                type="number"
                value={electronNumber}
                onChange={(e) => setElectronNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="For ions (defaults to Z)"
                min="1"
              />
            </div>
          </>
        )}

        {mode === 'orbitals' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Principal Quantum Number (n)
              </label>
              <input
                type="number"
                value={principalQN}
                onChange={(e) => setPrincipalQN(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 3"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Azimuthal Quantum Number (l)
              </label>
              <input
                type="number"
                value={azimuthalQN}
                onChange={(e) => setAzimuthalQN(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="0=s, 1=p, 2=d, 3=f"
                min="0"
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

      {(isValid || electronConfig || orbitalName) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            {isValid && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Validation Result</p>
                <p className={`text-2xl font-bold ${isValid.includes('Valid') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  {isValid}
                </p>
                {orbitalName && !isValid.includes('Invalid') && (
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{orbitalName}</p>
                )}
                {isValid.includes('Invalid') && orbitalName && (
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">{orbitalName}</p>
                )}
              </div>
            )}

            {electronConfig && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Electron Configuration</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{electronConfig}</p>
              </div>
            )}

            {orbitalName && !isValid && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Orbital Designation</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{orbitalName}</p>
              </div>
            )}

            {maxElectrons && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Maximum Electrons</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{maxElectrons}</p>
              </div>
            )}

            {degeneracy && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Degeneracy</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{degeneracy}</p>
              </div>
            )}

            {orbitalShape && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Orbital Shape</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{orbitalShape}</p>
              </div>
            )}

            {quantumSet && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Additional Information</p>
                <p className="text-gray-700 dark:text-gray-300">{quantumSet}</p>
              </div>
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
          Quantum Number Rules
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>n (Principal):</strong> Positive integer (1, 2, 3, ...) - determines energy level and size</p>
          <p><strong>l (Azimuthal):</strong> 0 to n-1 - determines orbital shape (0=s, 1=p, 2=d, 3=f)</p>
          <p><strong>ml (Magnetic):</strong> -l to +l - determines orbital orientation in space</p>
          <p><strong>ms (Spin):</strong> +1/2 or -1/2 - determines electron spin direction</p>
          <p className="pt-2 border-t border-gray-300 dark:border-gray-600"><strong>Pauli Exclusion:</strong> No two electrons can have identical quantum number sets</p>
        </div>
      </div>
    </div>
  );
};

export default QuantumNumbersCalculator;
