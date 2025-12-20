'use client';

import React, { useState } from 'react';

type CalculationMode = 'octahedral' | 'tetrahedral' | 'comparison';

const LFSECalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('octahedral');

  // Inputs
  const [dElectrons, setDElectrons] = useState<string>('');
  const [deltaO, setDeltaO] = useState<string>('');
  const [spinState, setSpinState] = useState<string>('high');
  const [pairingEnergy, setPairingEnergy] = useState<string>('');

  // Results
  const [lfse, setLfse] = useState<string>('');
  const [configuration, setConfiguration] = useState<string>('');
  const [stability, setStability] = useState<string>('');
  const [spinStateResult, setSpinStateResult] = useState<string>('');
  const [comparison, setComparison] = useState<string>('');

  // Common complexes database
  const complexes = [
    {
      name: '[Ti(H₂O)₆]³⁺',
      dElec: 1,
      delta: 243,
      geometry: 'octahedral' as CalculationMode,
      spin: 'high',
    },
    {
      name: '[V(H₂O)₆]³⁺',
      dElec: 2,
      delta: 180,
      geometry: 'octahedral' as CalculationMode,
      spin: 'high',
    },
    {
      name: '[Cr(H₂O)₆]³⁺',
      dElec: 3,
      delta: 208,
      geometry: 'octahedral' as CalculationMode,
      spin: 'high',
    },
    {
      name: '[Fe(H₂O)₆]²⁺',
      dElec: 6,
      delta: 120,
      geometry: 'octahedral' as CalculationMode,
      spin: 'high',
    },
    {
      name: '[Fe(CN)₆]³⁻',
      dElec: 5,
      delta: 400,
      geometry: 'octahedral' as CalculationMode,
      spin: 'low',
    },
    {
      name: '[Co(NH₃)₆]³⁺',
      dElec: 6,
      delta: 275,
      geometry: 'octahedral' as CalculationMode,
      spin: 'low',
    },
    {
      name: '[Ni(H₂O)₆]²⁺',
      dElec: 8,
      delta: 102,
      geometry: 'octahedral' as CalculationMode,
      spin: 'high',
    },
    {
      name: '[CuCl₄]²⁻',
      dElec: 9,
      delta: 85,
      geometry: 'tetrahedral' as CalculationMode,
      spin: 'high',
    },
  ];

  const loadExample = (example: typeof complexes[0]) => {
    setMode(example.geometry);
    setDElectrons(example.dElec.toString());
    setDeltaO(example.delta.toString());
    setSpinState(example.spin);
  };

  const calculateOctahedralLFSE = () => {
    const d = parseInt(dElectrons);
    const Delta = parseFloat(deltaO);

    if (isNaN(d) || isNaN(Delta) || d < 0 || d > 10) {
      alert('Please enter valid d-electron count (0-10) and Δo');
      return;
    }

    let t2gElectrons = 0;
    let egElectrons = 0;
    let lfseValue = 0;
    let config = '';
    let spin = spinState;

    // For d4, d5, d6, d7: check spin state
    if (d >= 4 && d <= 7) {
      if (spin === 'high') {
        // High spin: fill t2g first, then eg, minimize pairing
        if (d === 4) {
          t2gElectrons = 3;
          egElectrons = 1;
          config = 't₂g³ eg¹';
        } else if (d === 5) {
          t2gElectrons = 3;
          egElectrons = 2;
          config = 't₂g³ eg²';
        } else if (d === 6) {
          t2gElectrons = 4;
          egElectrons = 2;
          config = 't₂g⁴ eg²';
        } else if (d === 7) {
          t2gElectrons = 5;
          egElectrons = 2;
          config = 't₂g⁵ eg²';
        }
      } else {
        // Low spin: fill t2g completely before eg
        if (d === 4) {
          t2gElectrons = 4;
          egElectrons = 0;
          config = 't₂g⁴ eg⁰';
        } else if (d === 5) {
          t2gElectrons = 5;
          egElectrons = 0;
          config = 't₂g⁵ eg⁰';
        } else if (d === 6) {
          t2gElectrons = 6;
          egElectrons = 0;
          config = 't₂g⁶ eg⁰';
        } else if (d === 7) {
          t2gElectrons = 6;
          egElectrons = 1;
          config = 't₂g⁶ eg¹';
        }
      }
    } else {
      // d0-d3 and d8-d10: only one spin state possible
      if (d === 0) {
        config = 't₂g⁰ eg⁰';
      } else if (d === 1) {
        t2gElectrons = 1;
        config = 't₂g¹ eg⁰';
      } else if (d === 2) {
        t2gElectrons = 2;
        config = 't₂g² eg⁰';
      } else if (d === 3) {
        t2gElectrons = 3;
        config = 't₂g³ eg⁰';
      } else if (d === 8) {
        t2gElectrons = 6;
        egElectrons = 2;
        config = 't₂g⁶ eg²';
      } else if (d === 9) {
        t2gElectrons = 6;
        egElectrons = 3;
        config = 't₂g⁶ eg³';
      } else if (d === 10) {
        t2gElectrons = 6;
        egElectrons = 4;
        config = 't₂g⁶ eg⁴';
      }
    }

    // Calculate LFSE
    // t2g: -0.4 Δo each, eg: +0.6 Δo each
    lfseValue = (-0.4 * t2gElectrons + 0.6 * egElectrons) * Delta;

    setLfse(`${lfseValue.toFixed(1)} kJ/mol`);
    setConfiguration(config);
    setSpinStateResult(spin === 'high' ? 'High Spin' : 'Low Spin');

    // Stability interpretation
    let stabilityText = '';
    if (lfseValue < 0) {
      stabilityText = `Stabilized by ${Math.abs(lfseValue).toFixed(1)} kJ/mol relative to spherical field`;
    } else if (lfseValue > 0) {
      stabilityText = `Destabilized by ${lfseValue.toFixed(1)} kJ/mol relative to spherical field`;
    } else {
      stabilityText = 'No stabilization (spherical field)';
    }
    setStability(stabilityText);

    // Maximum LFSE configurations
    const maxLFSE = d === 3 || (d === 6 && spin === 'low') || d === 8;
    if (maxLFSE) {
      setComparison('Maximum LFSE configuration - extra stable');
    } else if (d === 0 || d === 5 || d === 10) {
      setComparison('Zero LFSE - no crystal field stabilization');
    } else {
      setComparison('Moderate LFSE');
    }
  };

  const calculateTetrahedralLFSE = () => {
    const d = parseInt(dElectrons);
    const Delta = parseFloat(deltaO);

    if (isNaN(d) || isNaN(Delta) || d < 0 || d > 10) {
      alert('Please enter valid d-electron count (0-10) and Δt');
      return;
    }

    // Tetrahedral: e orbitals lower, t2 orbitals higher
    // Δt ≈ (4/9) Δo, and splitting is inverted
    // e: -0.6 Δt, t2: +0.4 Δt

    let eElectrons = 0;
    let t2Electrons = 0;
    let config = '';

    // Tetrahedral complexes are always high spin (small Δt)
    if (d === 0) {
      config = 'e⁰ t₂⁰';
    } else if (d === 1) {
      eElectrons = 1;
      config = 'e¹ t₂⁰';
    } else if (d === 2) {
      eElectrons = 2;
      config = 'e² t₂⁰';
    } else if (d === 3) {
      eElectrons = 2;
      t2Electrons = 1;
      config = 'e² t₂¹';
    } else if (d === 4) {
      eElectrons = 2;
      t2Electrons = 2;
      config = 'e² t₂²';
    } else if (d === 5) {
      eElectrons = 2;
      t2Electrons = 3;
      config = 'e² t₂³';
    } else if (d === 6) {
      eElectrons = 3;
      t2Electrons = 3;
      config = 'e³ t₂³';
    } else if (d === 7) {
      eElectrons = 4;
      t2Electrons = 3;
      config = 'e⁴ t₂³';
    } else if (d === 8) {
      eElectrons = 4;
      t2Electrons = 4;
      config = 'e⁴ t₂⁴';
    } else if (d === 9) {
      eElectrons = 4;
      t2Electrons = 5;
      config = 'e⁴ t₂⁵';
    } else if (d === 10) {
      eElectrons = 4;
      t2Electrons = 6;
      config = 'e⁴ t₂⁶';
    }

    // Calculate LFSE for tetrahedral
    // e: -0.6 Δt each, t2: +0.4 Δt each
    const lfseValue = (-0.6 * eElectrons + 0.4 * t2Electrons) * Delta;

    setLfse(`${lfseValue.toFixed(1)} kJ/mol`);
    setConfiguration(config);
    setSpinStateResult('High Spin (always for Td)');

    let stabilityText = '';
    if (lfseValue < 0) {
      stabilityText = `Stabilized by ${Math.abs(lfseValue).toFixed(1)} kJ/mol`;
    } else if (lfseValue > 0) {
      stabilityText = `Destabilized by ${lfseValue.toFixed(1)} kJ/mol`;
    } else {
      stabilityText = 'No net stabilization';
    }
    setStability(stabilityText);

    setComparison(`Note: Δt ≈ (4/9)Δo ≈ ${(Delta * 9 / 4).toFixed(0)} kJ/mol (if compared to Oh)`);
  };

  const handleCalculate = () => {
    if (mode === 'octahedral') {
      calculateOctahedralLFSE();
    } else if (mode === 'tetrahedral') {
      calculateTetrahedralLFSE();
    } else if (mode === 'comparison') {
      // Calculate both and compare
      calculateOctahedralLFSE();
      // Store result, then calculate tetrahedral
    }
  };

  const handleReset = () => {
    setDElectrons('');
    setDeltaO('');
    setSpinState('high');
    setPairingEnergy('');
    setLfse('');
    setConfiguration('');
    setStability('');
    setSpinStateResult('');
    setComparison('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Geometry
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('octahedral')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'octahedral'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Octahedral
          </button>
          <button
            onClick={() => setMode('tetrahedral')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'tetrahedral'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Tetrahedral
          </button>
          <button
            onClick={() => setMode('comparison')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'comparison'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Comparison
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Number of d-Electrons
          </label>
          <input
            type="number"
            value={dElectrons}
            onChange={(e) => setDElectrons(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="0 to 10"
            min="0"
            max="10"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {mode === 'octahedral' ? 'Δo (kJ/mol)' : 'Δt (kJ/mol)'}
          </label>
          <input
            type="number"
            value={deltaO}
            onChange={(e) => setDeltaO(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., 200"
            step="1"
          />
        </div>

        {mode === 'octahedral' && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Spin State (for d⁴-d⁷)
            </label>
            <select
              value={spinState}
              onChange={(e) => setSpinState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="high">High Spin (weak field)</option>
              <option value="low">Low Spin (strong field)</option>
            </select>
          </div>
        )}
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCalculate}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Calculate LFSE
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {lfse && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Ligand Field Stabilization Energy</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{lfse}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Electron Configuration</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">{configuration}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Spin State</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{spinStateResult}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Stability</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{stability}</p>
            </div>

            {comparison && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Notes</p>
                <p className="text-gray-700 dark:text-gray-300">{comparison}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Complexes
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {complexes.map((complex, index) => (
            <button
              key={index}
              onClick={() => loadExample(complex)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{complex.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                d{complex.dElec}, {complex.spin} spin, Δ = {complex.delta} kJ/mol
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          LFSE Basics
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>Octahedral:</strong> t₂g (lower, -0.4Δo each), eg (higher, +0.6Δo each)</p>
          <p><strong>Tetrahedral:</strong> e (lower, -0.6Δt each), t₂ (higher, +0.4Δt each)</p>
          <p><strong>High Spin:</strong> Weak field ligands, maximize unpaired electrons, Δ &lt; pairing energy</p>
          <p><strong>Low Spin:</strong> Strong field ligands, pair electrons in lower orbitals, Δ &gt; pairing energy</p>
          <p><strong>Maximum LFSE:</strong> d³ (Oh), d⁶ (Oh low spin), d⁸ (Oh)</p>
        </div>
      </div>
    </div>
  );
};

export default LFSECalculator;
