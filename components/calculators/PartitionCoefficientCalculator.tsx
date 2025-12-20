'use client';

import React, { useState } from 'react';

type CalculationMode = 'logP' | 'distribution' | 'extraction';

const PartitionCoefficientCalculator: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('logP');

  // Log P calculation inputs
  const [organicConc, setOrganicConc] = useState<string>('');
  const [aqueousConc, setAqueousConc] = useState<string>('');
  const [fragmentContributions, setFragmentContributions] = useState<string>('');

  // Distribution coefficient inputs
  const [pH, setPH] = useState<string>('');
  const [pka, setPka] = useState<string>('');
  const [logPValue, setLogPValue] = useState<string>('');
  const [acidBase, setAcidBase] = useState<string>('neutral');

  // Extraction efficiency inputs
  const [partitionCoeff, setPartitionCoeff] = useState<string>('');
  const [organicVolume, setOrganicVolume] = useState<string>('');
  const [aqueousVolume, setAqueousVolume] = useState<string>('');
  const [extractions, setExtractions] = useState<string>('1');

  // Results
  const [logP, setLogP] = useState<string>('');
  const [logD, setLogD] = useState<string>('');
  const [lipophilicity, setLipophilicity] = useState<string>('');
  const [efficiency, setEfficiency] = useState<string>('');
  const [interpretation, setInterpretation] = useState<string>('');

  // Drug molecules database
  const molecules = [
    {
      name: 'Aspirin',
      mode: 'distribution' as CalculationMode,
      logP: 1.19,
      pka: 3.5,
      type: 'acid',
      pH: 7.4,
    },
    {
      name: 'Caffeine',
      mode: 'logP' as CalculationMode,
      orgConc: 85,
      aqConc: 15,
      logP: 0.75,
    },
    {
      name: 'Ibuprofen',
      mode: 'distribution' as CalculationMode,
      logP: 3.97,
      pka: 4.9,
      type: 'acid',
      pH: 7.4,
    },
    {
      name: 'Diazepam (Valium)',
      mode: 'logP' as CalculationMode,
      orgConc: 98,
      aqConc: 2,
      logP: 2.82,
    },
    {
      name: 'Atenolol',
      mode: 'distribution' as CalculationMode,
      logP: 0.16,
      pka: 9.6,
      type: 'base',
      pH: 7.4,
    },
  ];

  const loadExample = (example: typeof molecules[0]) => {
    setMode(example.mode);
    if ('orgConc' in example && 'aqConc' in example && example.orgConc !== undefined && example.aqConc !== undefined) {
      setOrganicConc(example.orgConc.toString());
      setAqueousConc(example.aqConc.toString());
    }
    if ('logP' in example && example.logP !== undefined) {
      setLogPValue(example.logP.toString());
    }
    if ('pka' in example && 'pH' in example && 'type' in example && example.pka !== undefined && example.pH !== undefined && example.type !== undefined) {
      setPka(example.pka.toString());
      setPH(example.pH.toString());
      setAcidBase(example.type);
    }
  };

  const calculateLogP = () => {
    const Corg = parseFloat(organicConc);
    const Caq = parseFloat(aqueousConc);

    if (isNaN(Corg) || isNaN(Caq) || Caq === 0) {
      alert('Please enter valid concentrations');
      return;
    }

    // P = [organic] / [aqueous]
    const P = Corg / Caq;
    const calculatedLogP = Math.log10(P);

    setLogP(calculatedLogP.toFixed(2));
    setLogD('N/A (pH-independent for neutral)');

    // Lipophilicity interpretation
    let lipText = '';
    if (calculatedLogP > 5) {
      lipText = 'Very lipophilic - poor aqueous solubility, may accumulate in tissues';
    } else if (calculatedLogP > 3) {
      lipText = 'Highly lipophilic - good membrane permeability, risk of accumulation';
    } else if (calculatedLogP > 0) {
      lipText = 'Moderately lipophilic - balanced distribution, good drug-like properties';
    } else if (calculatedLogP > -2) {
      lipText = 'Hydrophilic - high aqueous solubility, poor membrane permeability';
    } else {
      lipText = 'Very hydrophilic - very high water solubility, minimal membrane crossing';
    }
    setLipophilicity(lipText);

    // Drug-likeness (Lipinski's Rule: logP < 5)
    let interpText = '';
    if (calculatedLogP >= -0.4 && calculatedLogP <= 5.6) {
      interpText = "Within Lipinski's Rule of 5 range (acceptable drug-like properties)";
    } else if (calculatedLogP > 5.6) {
      interpText = "Exceeds Lipinski's Rule - may have poor oral bioavailability";
    } else {
      interpText = 'Very low logP - may have absorption issues';
    }
    
    if (calculatedLogP >= 0 && calculatedLogP <= 3) {
      interpText += '. Optimal range for CNS penetration';
    }
    
    setInterpretation(interpText);
    setEfficiency('');
  };

  const calculateDistribution = () => {
    const phValue = parseFloat(pH);
    const pkaValue = parseFloat(pka);
    const logPVal = parseFloat(logPValue);

    if (isNaN(phValue) || isNaN(pkaValue) || isNaN(logPVal)) {
      alert('Please enter pH, pKa, and logP values');
      return;
    }

    let calculatedLogD = 0;
    
    if (acidBase === 'acid') {
      // For acids: logD = logP + log(1 / (1 + 10^(pH - pKa)))
      const ionizationFraction = 1 / (1 + Math.pow(10, phValue - pkaValue));
      calculatedLogD = logPVal + Math.log10(ionizationFraction);
    } else if (acidBase === 'base') {
      // For bases: logD = logP + log(1 / (1 + 10^(pKa - pH)))
      const ionizationFraction = 1 / (1 + Math.pow(10, pkaValue - phValue));
      calculatedLogD = logPVal + Math.log10(ionizationFraction);
    } else {
      // Neutral compound
      calculatedLogD = logPVal;
    }

    setLogP(logPVal.toFixed(2));
    setLogD(calculatedLogD.toFixed(2));

    // Ionization analysis
    let ionPercent = 0;
    if (acidBase === 'acid') {
      ionPercent = (100 / (1 + Math.pow(10, pkaValue - phValue)));
    } else if (acidBase === 'base') {
      ionPercent = (100 / (1 + Math.pow(10, phValue - pkaValue)));
    }

    let lipText = '';
    if (calculatedLogD > 3) {
      lipText = `Highly lipophilic at pH ${phValue} (~${(100 - ionPercent).toFixed(1)}% unionized)`;
    } else if (calculatedLogD > 0) {
      lipText = `Moderately lipophilic at pH ${phValue} (~${(100 - ionPercent).toFixed(1)}% unionized)`;
    } else {
      lipText = `Hydrophilic at pH ${phValue} (~${ionPercent.toFixed(1)}% ionized)`;
    }
    setLipophilicity(lipText);

    // pH-dependent permeability
    const difference = logPVal - calculatedLogD;
    let interpText = '';
    if (Math.abs(difference) < 0.5) {
      interpText = 'Minimal pH effect - compound mostly unionized at this pH';
    } else if (Math.abs(difference) < 2) {
      interpText = 'Moderate pH effect - significant ionization affects distribution';
    } else {
      interpText = 'Strong pH effect - highly ionized, drastically reduced lipophilicity';
    }
    
    if (acidBase === 'acid' && phValue > pkaValue + 2) {
      interpText += '. Acid mostly ionized at this pH - poor membrane permeability';
    } else if (acidBase === 'base' && phValue < pkaValue - 2) {
      interpText += '. Base mostly ionized at this pH - poor membrane permeability';
    }
    
    setInterpretation(interpText);
    setEfficiency('');
  };

  const calculateExtraction = () => {
    const P = parseFloat(partitionCoeff);
    const Vorg = parseFloat(organicVolume);
    const Vaq = parseFloat(aqueousVolume);
    const n = parseInt(extractions);

    if (isNaN(P) || isNaN(Vorg) || isNaN(Vaq) || isNaN(n) || n < 1) {
      alert('Please enter valid values');
      return;
    }

    // Single extraction efficiency: E = (P × Vorg) / (P × Vorg + Vaq)
    const singleE = (P * Vorg) / (P * Vorg + Vaq);
    
    // Multiple extractions: fraction remaining = ((Vaq) / (P × Vorg + Vaq))^n
    const fractionRemaining = Math.pow(Vaq / (P * Vorg + Vaq), n);
    const totalE = 1 - fractionRemaining;

    setEfficiency(`${(totalE * 100).toFixed(1)}%`);
    
    const singleEffPercent = singleE * 100;
    setLogP(P.toFixed(2));
    
    let lipText = '';
    if (n === 1) {
      lipText = `Single extraction: ${singleEffPercent.toFixed(1)}% extracted`;
    } else {
      lipText = `${n} extractions: ${(totalE * 100).toFixed(1)}% total (vs ${singleEffPercent.toFixed(1)}% for single)`;
    }
    setLipophilicity(lipText);

    // Optimization suggestions
    let interpText = '';
    if (totalE > 0.99) {
      interpText = 'Excellent extraction efficiency - nearly quantitative recovery';
    } else if (totalE > 0.95) {
      interpText = 'Very good extraction efficiency';
    } else if (totalE > 0.90) {
      interpText = 'Good extraction efficiency';
    } else if (totalE > 0.80) {
      interpText = 'Moderate extraction - consider additional extractions';
    } else {
      interpText = 'Low extraction efficiency - increase P, adjust volumes, or add more extractions';
    }
    
    // Multiple extraction advantage
    if (n > 1) {
      const improvement = ((totalE - singleE) / singleE * 100);
      if (improvement > 10) {
        interpText += `. Multiple extractions improved efficiency by ${improvement.toFixed(0)}%`;
      }
    }
    
    setInterpretation(interpText);
    setLogD('');
  };

  const handleCalculate = () => {
    if (mode === 'logP') {
      calculateLogP();
    } else if (mode === 'distribution') {
      calculateDistribution();
    } else if (mode === 'extraction') {
      calculateExtraction();
    }
  };

  const handleReset = () => {
    setOrganicConc('');
    setAqueousConc('');
    setFragmentContributions('');
    setPH('');
    setPka('');
    setLogPValue('');
    setAcidBase('neutral');
    setPartitionCoeff('');
    setOrganicVolume('');
    setAqueousVolume('');
    setExtractions('1');
    setLogP('');
    setLogD('');
    setLipophilicity('');
    setEfficiency('');
    setInterpretation('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('logP')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'logP'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Log P
          </button>
          <button
            onClick={() => setMode('distribution')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'distribution'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Distribution (Log D)
          </button>
          <button
            onClick={() => setMode('extraction')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'extraction'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Extraction
          </button>
        </div>
      </div>

      {mode === 'logP' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Organic Phase Concentration
            </label>
            <input
              type="number"
              value={organicConc}
              onChange={(e) => setOrganicConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 85 mg/L"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Aqueous Phase Concentration
            </label>
            <input
              type="number"
              value={aqueousConc}
              onChange={(e) => setAqueousConc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 15 mg/L"
              step="0.01"
            />
          </div>
        </div>
      )}

      {mode === 'distribution' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Log P (at neutral pH)
            </label>
            <input
              type="number"
              value={logPValue}
              onChange={(e) => setLogPValue(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 1.19"
              step="0.01"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              pKa
            </label>
            <input
              type="number"
              value={pka}
              onChange={(e) => setPka(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 3.5"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              pH
            </label>
            <input
              type="number"
              value={pH}
              onChange={(e) => setPH(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 7.4 (physiological)"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Compound Type
            </label>
            <select
              value={acidBase}
              onChange={(e) => setAcidBase(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="neutral">Neutral</option>
              <option value="acid">Weak Acid</option>
              <option value="base">Weak Base</option>
            </select>
          </div>
        </div>
      )}

      {mode === 'extraction' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Partition Coefficient (P)
            </label>
            <input
              type="number"
              value={partitionCoeff}
              onChange={(e) => setPartitionCoeff(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 10"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Organic Phase Volume (mL)
            </label>
            <input
              type="number"
              value={organicVolume}
              onChange={(e) => setOrganicVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 50"
              step="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Aqueous Phase Volume (mL)
            </label>
            <input
              type="number"
              value={aqueousVolume}
              onChange={(e) => setAqueousVolume(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 100"
              step="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Number of Extractions
            </label>
            <input
              type="number"
              value={extractions}
              onChange={(e) => setExtractions(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="e.g., 3"
              min="1"
              step="1"
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

      {(logP || efficiency) && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Results</h3>
          <div className="space-y-4">
            {logP && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Log P (Partition Coefficient)</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{logP}</p>
              </div>
            )}

            {logD && logD !== '' && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Log D (Distribution at pH {pH})</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{logD}</p>
              </div>
            )}

            {efficiency && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Extraction Efficiency</p>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{efficiency}</p>
              </div>
            )}

            {lipophilicity && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Lipophilicity</p>
                <p className="text-gray-700 dark:text-gray-300">{lipophilicity}</p>
              </div>
            )}

            {interpretation && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Interpretation</p>
                <p className="text-gray-700 dark:text-gray-300">{interpretation}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Molecules
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {molecules.map((molecule, index) => (
            <button
              key={index}
              onClick={() => loadExample(molecule)}
              className="text-left px-4 py-2 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{molecule.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Log P = {molecule.logP}
                {'pka' in molecule && `, pKa = ${molecule.pka}`}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Key Concepts
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>Log P:</strong> Partition coefficient = [organic] / [aqueous] for neutral species</p>
          <p><strong>Log D:</strong> Distribution coefficient at specific pH (accounts for ionization)</p>
          <p><strong>Lipinski's Rule:</strong> Drug-like molecules typically have -0.4 &lt; logP &lt; 5.6</p>
          <p><strong>Multiple Extractions:</strong> More efficient than single extraction with same total volume</p>
          <p><strong>Applications:</strong> Drug design, environmental fate, separation techniques</p>
        </div>
      </div>
    </div>
  );
};

export default PartitionCoefficientCalculator;
