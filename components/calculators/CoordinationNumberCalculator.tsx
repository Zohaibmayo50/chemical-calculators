'use client';

import React, { useState } from 'react';

type CalculationMode = 'coordinationNumber' | 'geometry' | 'ligandType';

const CoordinationNumberCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('coordinationNumber');

  // Coordination number inputs
  const [metalIon, setMetalIon] = useState<string>('');
  const [oxidationState, setOxidationState] = useState<string>('');
  const [ligandCount, setLigandCount] = useState<string>('');
  const [ligandDenticity, setLigandDenticity] = useState<string>('');

  // Geometry inputs
  const [coordNumber, setCoordNumber] = useState<string>('');

  // Ligand type inputs
  const [donorAtoms, setDonorAtoms] = useState<string>('');
  const [chelateRings, setChelateRings] = useState<string>('');

  // Results
  const [calculatedCN, setCalculatedCN] = useState<string>('');
  const [predictedGeometry, setPredictedGeometry] = useState<string>('');
  const [geometryDetails, setGeometryDetails] = useState<string>('');
  const [ligandClass, setLigandClass] = useState<string>('');
  const [examples, setExamples] = useState<string[]>([]);
  const [stability, setStability] = useState<string>('');

  // Complex examples database
  const complexExamples = [
    {
      name: '[Ag(NH₃)₂]⁺',
      metal: 'Ag',
      oxidState: 1,
      ligands: 2,
      denticity: 1,
      cn: 2,
      mode: 'coordinationNumber' as CalculationMode,
    },
    {
      name: '[Cu(H₂O)₆]²⁺',
      metal: 'Cu',
      oxidState: 2,
      ligands: 6,
      denticity: 1,
      cn: 6,
      mode: 'coordinationNumber' as CalculationMode,
    },
    {
      name: '[Fe(CN)₆]³⁻',
      metal: 'Fe',
      oxidState: 3,
      ligands: 6,
      denticity: 1,
      cn: 6,
      mode: 'coordinationNumber' as CalculationMode,
    },
    {
      name: '[Ni(en)₃]²⁺',
      metal: 'Ni',
      oxidState: 2,
      ligands: 3,
      denticity: 2,
      cn: 6,
      mode: 'coordinationNumber' as CalculationMode,
    },
    {
      name: '[PtCl₄]²⁻',
      metal: 'Pt',
      oxidState: 2,
      ligands: 4,
      denticity: 1,
      cn: 4,
      mode: 'geometry' as CalculationMode,
    },
    {
      name: '[Co(EDTA)]⁻',
      metal: 'Co',
      oxidState: 3,
      ligands: 1,
      denticity: 6,
      cn: 6,
      mode: 'ligandType' as CalculationMode,
    },
  ];

  const loadExample = (example: typeof complexExamples[0]) => {
    setMode(example.mode);
    setMetalIon(example.metal);
    setOxidationState(example.oxidState.toString());
    setLigandCount(example.ligands.toString());
    setLigandDenticity(example.denticity.toString());
    setCoordNumber(example.cn.toString());
  };

  const calculateCoordinationNumber = () => {
    const nLigands = parseInt(ligandCount);
    const denticity = parseInt(ligandDenticity);

    if (isNaN(nLigands) || isNaN(denticity)) {
      alert('Please enter valid numbers');
      return;
    }

    // Coordination number = number of donor atoms = ligands × denticity
    const cn = nLigands * denticity;
    setCalculatedCN(cn.toString());

    // Predict geometry based on CN
    predictGeometryFromCN(cn);

    // Provide examples
    provideComplexExamples(cn);
  };

  const predictGeometryFromCN = (cn: number) => {
    let geometry = '';
    let details = '';
    let exampleList: string[] = [];

    switch (cn) {
      case 2:
        geometry = 'Linear';
        details = 'Bond angle: 180°. Common for d¹⁰ metals like Ag⁺, Au⁺, Cu⁺.';
        exampleList = ['[Ag(NH₃)₂]⁺', '[CuCl₂]⁻', '[Au(CN)₂]⁻'];
        break;
      case 3:
        geometry = 'Trigonal Planar';
        details = 'Bond angles: 120°. Rare, found in some Cu(I) and Ag(I) complexes.';
        exampleList = ['[HgI₃]⁻', '[Cu(CN)₃]²⁻'];
        break;
      case 4:
        geometry = 'Tetrahedral or Square Planar';
        details =
          'Tetrahedral: sp³ hybridization, common for d⁰, d⁵, d¹⁰. Square planar: dsp² hybridization, common for d⁸ (Ni²⁺, Pd²⁺, Pt²⁺).';
        exampleList = [
          '[Zn(NH₃)₄]²⁺ (Td)',
          '[NiCl₄]²⁻ (Td)',
          '[PtCl₄]²⁻ (Sq planar)',
          '[Ni(CN)₄]²⁻ (Sq planar)',
        ];
        break;
      case 5:
        geometry = 'Trigonal Bipyramidal or Square Pyramidal';
        details =
          'Less common. Trigonal bipyramidal: 90° and 120° angles. Square pyramidal: 90° basal angles.';
        exampleList = ['[Fe(CO)₅]', '[Ni(CN)₅]³⁻', '[CuCl₅]³⁻'];
        break;
      case 6:
        geometry = 'Octahedral';
        details =
          'Most common coordination number. Bond angles: 90° and 180°. d²sp³ or sp³d² hybridization.';
        exampleList = [
          '[Fe(CN)₆]³⁻',
          '[Co(NH₃)₆]³⁺',
          '[Cr(H₂O)₆]³⁺',
          '[Ni(en)₃]²⁺',
        ];
        break;
      case 7:
        geometry = 'Pentagonal Bipyramidal or Capped Octahedral';
        details = 'Rare geometry. Found in some lanthanide and actinide complexes.';
        exampleList = ['[ZrF₇]³⁻', '[NbF₇]²⁻'];
        break;
      case 8:
        geometry = 'Square Antiprismatic or Dodecahedral';
        details = 'Common for large metal ions like lanthanides and actinides.';
        exampleList = ['[Mo(CN)₈]⁴⁻', '[ZrF₈]⁴⁻'];
        break;
      default:
        geometry = 'Varied or Complex';
        details = 'Higher coordination numbers (>8) found in lanthanides, actinides.';
        exampleList = ['Various lanthanide complexes'];
    }

    setPredictedGeometry(geometry);
    setGeometryDetails(details);
    setExamples(exampleList);
  };

  const handleGeometryCalculation = () => {
    const cn = parseInt(coordNumber);
    if (isNaN(cn)) {
      alert('Please enter a valid coordination number');
      return;
    }
    predictGeometryFromCN(cn);
  };

  const handleLigandTypeCalculation = () => {
    const donors = parseInt(donorAtoms);
    const rings = parseInt(chelateRings);

    if (isNaN(donors)) {
      alert('Please enter number of donor atoms');
      return;
    }

    let ligandType = '';
    let stabilityInfo = '';

    // Classify by denticity
    if (donors === 1) {
      ligandType = 'Monodentate Ligand';
      stabilityInfo =
        'Forms one coordinate bond. Examples: H₂O, NH₃, Cl⁻, CN⁻. Moderate stability.';
    } else if (donors === 2) {
      ligandType = 'Bidentate Ligand (Chelating)';
      stabilityInfo =
        'Forms two coordinate bonds, creating one chelate ring. Examples: ethylenediamine (en), oxalate (ox). Chelate effect increases stability.';
    } else if (donors === 3) {
      ligandType = 'Tridentate Ligand (Chelating)';
      stabilityInfo =
        'Forms three coordinate bonds. Examples: diethylenetriamine (dien), terpyridine. Forms 2 chelate rings. High stability.';
    } else if (donors === 4) {
      ligandType = 'Tetradentate Ligand (Chelating)';
      stabilityInfo =
        'Forms four coordinate bonds. Examples: triethylenetetramine (trien), porphyrin. Forms 3 chelate rings. Very high stability.';
    } else if (donors === 5) {
      ligandType = 'Pentadentate Ligand (Chelating)';
      stabilityInfo =
        'Forms five coordinate bonds. Examples: DTPA derivatives. Forms 4 chelate rings. Extremely high stability.';
    } else if (donors === 6) {
      ligandType = 'Hexadentate Ligand (Chelating)';
      stabilityInfo =
        'Forms six coordinate bonds. Example: EDTA⁴⁻. Forms 5 chelate rings. Maximum chelate effect, extremely stable complexes.';
    } else {
      ligandType = `Polydentate Ligand (${donors} donor atoms)`;
      stabilityInfo = 'Multiple chelate rings. Very high stability due to chelate effect.';
    }

    // Add chelate effect information
    if (!isNaN(rings) && rings > 0) {
      stabilityInfo += ` Forms ${rings} chelate ring(s). Each ring increases stability by ~5-10 kJ/mol (chelate effect).`;
    }

    setLigandClass(ligandType);
    setStability(stabilityInfo);

    // Provide common examples
    const examplesForDenticity: { [key: number]: string[] } = {
      1: ['H₂O', 'NH₃', 'Cl⁻', 'CN⁻', 'CO', 'py (pyridine)'],
      2: ['en (ethylenediamine)', 'ox (oxalate)', 'acac (acetylacetonate)', 'bipy (bipyridine)'],
      3: ['dien (diethylenetriamine)', 'terpy (terpyridine)'],
      4: ['trien (triethylenetetramine)', 'porphyrin', 'phthalocyanine'],
      5: ['DTPA⁴⁻ derivatives'],
      6: ['EDTA⁴⁻ (ethylenediaminetetraacetate)'],
    };

    setExamples(examplesForDenticity[donors] || ['Various polydentate ligands']);
  };

  const provideComplexExamples = (cn: number) => {
    // Already handled in predictGeometryFromCN
  };

  const handleCalculate = () => {
    if (mode === 'coordinationNumber') {
      calculateCoordinationNumber();
    } else if (mode === 'geometry') {
      handleGeometryCalculation();
    } else if (mode === 'ligandType') {
      handleLigandTypeCalculation();
    }
  };

  const handleReset = () => {
    setMetalIon('');
    setOxidationState('');
    setLigandCount('');
    setLigandDenticity('');
    setCoordNumber('');
    setDonorAtoms('');
    setChelateRings('');
    setCalculatedCN('');
    setPredictedGeometry('');
    setGeometryDetails('');
    setLigandClass('');
    setExamples([]);
    setStability('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('coordinationNumber')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'coordinationNumber'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Coordination Number
          </button>
          <button
            onClick={() => setMode('geometry')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'geometry'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Predict Geometry
          </button>
          <button
            onClick={() => setMode('ligandType')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'ligandType'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Ligand Classification
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {mode === 'coordinationNumber' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Metal Ion (optional)
              </label>
              <input
                type="text"
                value={metalIon}
                onChange={(e) => setMetalIon(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., Fe, Cu, Co"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Oxidation State (optional)
              </label>
              <input
                type="number"
                value={oxidationState}
                onChange={(e) => setOxidationState(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 2, 3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Ligands
              </label>
              <input
                type="number"
                value={ligandCount}
                onChange={(e) => setLigandCount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 6"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ligand Denticity
              </label>
              <input
                type="number"
                value={ligandDenticity}
                onChange={(e) => setLigandDenticity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 1 (monodentate), 2 (bidentate)"
                min="1"
              />
            </div>
          </>
        )}

        {mode === 'geometry' && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Coordination Number
            </label>
            <input
              type="number"
              value={coordNumber}
              onChange={(e) => setCoordNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 6 for octahedral"
              min="2"
              max="12"
            />
          </div>
        )}

        {mode === 'ligandType' && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Donor Atoms
              </label>
              <input
                type="number"
                value={donorAtoms}
                onChange={(e) => setDonorAtoms(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 6 for EDTA"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Chelate Rings (if applicable)
              </label>
              <input
                type="number"
                value={chelateRings}
                onChange={(e) => setChelateRings(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="e.g., 5 for EDTA"
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
          Analyze
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
        >
          Reset
        </button>
      </div>

      {(calculatedCN || predictedGeometry || ligandClass) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            {calculatedCN && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Coordination Number</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{calculatedCN}</p>
              </div>
            )}

            {predictedGeometry && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Predicted Geometry</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {predictedGeometry}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{geometryDetails}</p>
              </div>
            )}

            {ligandClass && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Ligand Classification</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {ligandClass}
                </p>
                {stability && (
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{stability}</p>
                )}
              </div>
            )}

            {examples.length > 0 && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Common Examples</p>
                <ul className="list-disc list-inside space-y-1">
                  {examples.map((ex, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Coordination Complexes
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {complexExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <span className="font-medium text-gray-800 dark:text-white">{example.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                (CN = {example.cn})
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Coordination Chemistry Basics
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p>
            <strong>Coordination Number (CN):</strong> Number of donor atoms bonded to the central metal
          </p>
          <p>
            <strong>Denticity:</strong> Number of donor atoms per ligand (1=monodentate, 2=bidentate, etc.)
          </p>
          <p>
            <strong>Chelate Effect:</strong> Multidentate ligands form more stable complexes than monodentate
          </p>
          <p>
            <strong>Common Geometries:</strong> Linear (CN=2), Tetrahedral/Square planar (CN=4), Octahedral (CN=6)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoordinationNumberCalculator;
