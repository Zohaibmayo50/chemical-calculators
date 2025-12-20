'use client';

import React, { useState } from 'react';

type CalculationMode = 'geometry' | 'bonding' | 'formula';

interface Geometry {
  name: string;
  hybridization: string;
  bondAngle: string;
  examples: string[];
}

const GEOMETRIES: Geometry[] = [
  { name: 'Linear', hybridization: 'sp', bondAngle: '180°', examples: ['CO₂', 'BeCl₂', 'HCN'] },
  { name: 'Trigonal Planar', hybridization: 'sp²', bondAngle: '120°', examples: ['BF₃', 'SO₃', 'NO₃⁻'] },
  { name: 'Tetrahedral', hybridization: 'sp³', bondAngle: '109.5°', examples: ['CH₄', 'NH₃*', 'H₂O*'] },
  { name: 'Trigonal Bipyramidal', hybridization: 'sp³d', bondAngle: '90°, 120°, 180°', examples: ['PCl₅', 'SF₄*', 'ClF₃*'] },
  { name: 'Octahedral', hybridization: 'sp³d²', bondAngle: '90°, 180°', examples: ['SF₆', 'PF₆⁻', 'XeF₄*'] },
  { name: 'Bent (2 BP)', hybridization: 'sp³', bondAngle: '~104.5°', examples: ['H₂O'] },
  { name: 'Trigonal Pyramidal', hybridization: 'sp³', bondAngle: '~107°', examples: ['NH₃', 'PH₃'] },
  { name: 'T-shaped', hybridization: 'sp³d', bondAngle: '~87.5°, ~175°', examples: ['ClF₃', 'BrF₃'] },
  { name: 'Square Planar', hybridization: 'sp³d²', bondAngle: '90°, 180°', examples: ['XeF₄', '[PtCl₄]²⁻'] },
  { name: 'Square Pyramidal', hybridization: 'sp³d²', bondAngle: '~84.8°', examples: ['BrF₅', 'IF₅'] },
];

export default function HybridizationCalculator() {
  const [mode, setMode] = useState<CalculationMode>('geometry');
  const [selectedGeometry, setSelectedGeometry] = useState('');
  const [bondingPairs, setBondingPairs] = useState('');
  const [lonePairs, setLonePairs] = useState('');
  const [formula, setFormula] = useState('');

  const loadExample = (exampleNum: number) => {
    if (exampleNum === 1) {
      // CH4 - tetrahedral sp3
      setMode('bonding');
      setBondingPairs('4');
      setLonePairs('0');
    } else if (exampleNum === 2) {
      // H2O - bent sp3
      setMode('bonding');
      setBondingPairs('2');
      setLonePairs('2');
    } else if (exampleNum === 3) {
      // PCl5 - trigonal bipyramidal sp3d
      setMode('bonding');
      setBondingPairs('5');
      setLonePairs('0');
    }
  };

  const calculateFromBonding = () => {
    const bp = parseInt(bondingPairs);
    const lp = parseInt(lonePairs);
    
    if (isNaN(bp) || isNaN(lp) || bp < 0 || lp < 0) return null;
    
    const stericNumber = bp + lp;
    
    let hybridization = '';
    let electronGeometry = '';
    let molecularGeometry = '';
    let bondAngle = '';
    
    if (stericNumber === 2) {
      hybridization = 'sp';
      electronGeometry = 'Linear';
      molecularGeometry = 'Linear';
      bondAngle = '180°';
    } else if (stericNumber === 3) {
      hybridization = 'sp²';
      electronGeometry = 'Trigonal Planar';
      if (lp === 0) {
        molecularGeometry = 'Trigonal Planar';
        bondAngle = '120°';
      } else if (lp === 1) {
        molecularGeometry = 'Bent';
        bondAngle = '<120°';
      }
    } else if (stericNumber === 4) {
      hybridization = 'sp³';
      electronGeometry = 'Tetrahedral';
      if (lp === 0) {
        molecularGeometry = 'Tetrahedral';
        bondAngle = '109.5°';
      } else if (lp === 1) {
        molecularGeometry = 'Trigonal Pyramidal';
        bondAngle = '~107°';
      } else if (lp === 2) {
        molecularGeometry = 'Bent';
        bondAngle = '~104.5°';
      }
    } else if (stericNumber === 5) {
      hybridization = 'sp³d';
      electronGeometry = 'Trigonal Bipyramidal';
      if (lp === 0) {
        molecularGeometry = 'Trigonal Bipyramidal';
        bondAngle = '90°, 120°, 180°';
      } else if (lp === 1) {
        molecularGeometry = 'Seesaw';
        bondAngle = '<90°, <120°';
      } else if (lp === 2) {
        molecularGeometry = 'T-shaped';
        bondAngle = '~87.5°, ~175°';
      } else if (lp === 3) {
        molecularGeometry = 'Linear';
        bondAngle = '180°';
      }
    } else if (stericNumber === 6) {
      hybridization = 'sp³d²';
      electronGeometry = 'Octahedral';
      if (lp === 0) {
        molecularGeometry = 'Octahedral';
        bondAngle = '90°, 180°';
      } else if (lp === 1) {
        molecularGeometry = 'Square Pyramidal';
        bondAngle = '~84.8°';
      } else if (lp === 2) {
        molecularGeometry = 'Square Planar';
        bondAngle = '90°, 180°';
      }
    } else {
      return null;
    }
    
    return {
      hybridization,
      electronGeometry,
      molecularGeometry,
      bondAngle,
      stericNumber,
      bondingPairs: bp,
      lonePairs: lp,
    };
  };

  const result = mode === 'bonding' ? calculateFromBonding() : null;
  const selectedGeo = GEOMETRIES.find(g => g.name === selectedGeometry);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Hybridization Calculator
        </h2>
      </div>

      {/* Mode Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          How would you like to determine hybridization?
        </label>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMode('geometry')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'geometry'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            From Geometry
          </button>
          <button
            onClick={() => setMode('bonding')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'bonding'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            From Bonding
          </button>
          <button
            onClick={() => setMode('formula')}
            className={`p-3 rounded-lg font-medium transition-all ${
              mode === 'formula'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            From Formula
          </button>
        </div>
      </div>

      {/* Geometry Mode */}
      {mode === 'geometry' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Select Molecular Geometry
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {GEOMETRIES.map((geo) => (
              <button
                key={geo.name}
                onClick={() => setSelectedGeometry(geo.name)}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  selectedGeometry === geo.name
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {geo.name}
              </button>
            ))}
          </div>
          
          {selectedGeo && (
            <div className="mt-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {selectedGeo.name} Geometry
              </h3>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 rounded p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hybridization</p>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {selectedGeo.hybridization}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bond Angle</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {selectedGeo.bondAngle}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGeo.examples.map((ex) => (
                      <span
                        key={ex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-mono"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Bonding Mode */}
      {mode === 'bonding' && (
        <div className="mb-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bonding Pairs (BP)
              </label>
              <input
                type="number"
                value={bondingPairs}
                onChange={(e) => setBondingPairs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 4"
                min="0"
                max="6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Lone Pairs (LP)
              </label>
              <input
                type="number"
                value={lonePairs}
                onChange={(e) => setLonePairs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 0"
                min="0"
                max="4"
              />
            </div>
          </div>

          {result && (
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Results
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hybridization</p>
                  <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {result.hybridization}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Steric Number</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.stericNumber}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Electron Geometry</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {result.electronGeometry}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Molecular Geometry</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {result.molecularGeometry}
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded p-4 md:col-span-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Bond Angle</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {result.bondAngle}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Formula Mode */}
      {mode === 'formula' && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Enter Molecular Formula (e.g., CH₄, H₂O, NH₃)
          </label>
          <input
            type="text"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., CH₄"
          />
          <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
            Note: This mode requires Lewis structure analysis. Use "From Bonding" mode for accurate results.
          </p>
        </div>
      )}

      {/* Example Problems */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Try Example Problems
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => loadExample(1)}
            className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all"
          >
            CH₄ (Methane)
          </button>
          <button
            onClick={() => loadExample(2)}
            className="p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-medium transition-all"
          >
            H₂O (Water)
          </button>
          <button
            onClick={() => loadExample(3)}
            className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all"
          >
            PCl₅ (Phosphorus pentachloride)
          </button>
        </div>
      </div>

      {/* Educational Info */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
        <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
          What is Hybridization?
        </h4>
        <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
          Hybridization is the mixing of atomic orbitals to form new hybrid orbitals suitable for bonding. 
          The type of hybridization depends on the steric number (bonding pairs + lone pairs).
        </p>
        <div className="bg-white dark:bg-gray-800 rounded p-3 space-y-2 text-sm">
          <p><strong>Steric Number 2:</strong> sp (linear, 180°)</p>
          <p><strong>Steric Number 3:</strong> sp² (trigonal planar, 120°)</p>
          <p><strong>Steric Number 4:</strong> sp³ (tetrahedral, 109.5°)</p>
          <p><strong>Steric Number 5:</strong> sp³d (trigonal bipyramidal, 90°/120°/180°)</p>
          <p><strong>Steric Number 6:</strong> sp³d² (octahedral, 90°/180°)</p>
        </div>
        <p className="text-sm text-blue-800 dark:text-blue-200 mt-3">
          <strong>Key:</strong> Lone pairs affect molecular geometry but not hybridization. For example, 
          H₂O has sp³ hybridization (like CH₄) but bent geometry due to 2 lone pairs.
        </p>
      </div>
    </div>
  );
}
