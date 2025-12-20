'use client';

import React, { useState } from 'react';

type Environment = 'acidic' | 'basic' | 'neutral';

const RedoxBalancingCalculator: React.FC = () => {
  const [oxidationHalf, setOxidationHalf] = useState<string>('Fe²⁺ → Fe³⁺');
  const [reductionHalf, setReductionHalf] = useState<string>('MnO₄⁻ → Mn²⁺');
  const [environment, setEnvironment] = useState<Environment>('acidic');
  const [result, setResult] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [error, setError] = useState<string>('');

  const examples = [
    {
      name: 'Permanganate-Iron (Acidic)',
      oxidation: 'Fe²⁺ → Fe³⁺',
      reduction: 'MnO₄⁻ → Mn²⁺',
      environment: 'acidic' as Environment,
      description: 'Common titration reaction',
    },
    {
      name: 'Dichromate-Ethanol (Acidic)',
      oxidation: 'C₂H₅OH → CH₃COOH',
      reduction: 'Cr₂O₇²⁻ → Cr³⁺',
      environment: 'acidic' as Environment,
      description: 'Breathalyzer reaction',
    },
    {
      name: 'Chlorine Disproportionation (Basic)',
      oxidation: 'Cl₂ → ClO⁻',
      reduction: 'Cl₂ → Cl⁻',
      environment: 'basic' as Environment,
      description: 'Bleach formation',
    },
  ];

  const commonHalfReactions = {
    oxidation: [
      'Fe²⁺ → Fe³⁺',
      'Sn²⁺ → Sn⁴⁺',
      'I⁻ → I₂',
      'SO₃²⁻ → SO₄²⁻',
      'H₂O₂ → O₂',
      'Zn → Zn²⁺',
      'Al → Al³⁺',
    ],
    reduction: [
      'MnO₄⁻ → Mn²⁺',
      'Cr₂O₇²⁻ → Cr³⁺',
      'NO₃⁻ → NO',
      'H₂O₂ → H₂O',
      'O₂ → H₂O',
      'Cl₂ → Cl⁻',
      'Cu²⁺ → Cu',
    ],
  };

  const balanceRedox = () => {
    setError('');
    setResult('');
    setSteps([]);

    try {
      // This is a simplified demonstration
      // Real implementation would require complex parsing and balancing algorithms
      const stepsArray: string[] = [];

      stepsArray.push('Step 1: Separate into half-reactions');
      stepsArray.push(`  Oxidation: ${oxidationHalf}`);
      stepsArray.push(`  Reduction: ${reductionHalf}`);

      stepsArray.push('\nStep 2: Balance atoms other than O and H');
      stepsArray.push('  (Check and balance main elements)');

      if (environment === 'acidic') {
        stepsArray.push('\nStep 3: Balance oxygen by adding H₂O');
        stepsArray.push('  (Add water to side lacking oxygen)');

        stepsArray.push('\nStep 4: Balance hydrogen by adding H⁺');
        stepsArray.push('  (Add H⁺ ions to side lacking hydrogen)');
      } else if (environment === 'basic') {
        stepsArray.push('\nStep 3: Balance oxygen by adding H₂O');
        stepsArray.push('  (Add water to side lacking oxygen)');

        stepsArray.push('\nStep 4: Balance hydrogen by adding H₂O and OH⁻');
        stepsArray.push('  (Add OH⁻ to opposite side of H, then add H₂O)');
      }

      stepsArray.push('\nStep 5: Balance charge by adding electrons');
      stepsArray.push('  (Add e⁻ to make both sides have equal charge)');

      stepsArray.push('\nStep 6: Multiply to equalize electrons');
      stepsArray.push('  (Make electrons lost = electrons gained)');

      stepsArray.push('\nStep 7: Add half-reactions and simplify');
      stepsArray.push('  (Combine and cancel common species)');

      // Example balanced equations for demonstration
      if (oxidationHalf.includes('Fe²⁺') && reductionHalf.includes('MnO₄⁻') && environment === 'acidic') {
        setResult('5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O');
        stepsArray.push('\nFinal Balanced Equation:');
        stepsArray.push('5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O');
        stepsArray.push('\n✓ Atoms balanced: Fe(5=5), Mn(1=1), O(4=4), H(8=8)');
        stepsArray.push('✓ Charge balanced: +17 on both sides');
      } else if (oxidationHalf.includes('Cl₂') && reductionHalf.includes('Cl₂') && environment === 'basic') {
        setResult('Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O');
        stepsArray.push('\nFinal Balanced Equation:');
        stepsArray.push('Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O');
        stepsArray.push('\n✓ Atoms balanced: Cl(2=2), O(2=2), H(2=2)');
        stepsArray.push('✓ Charge balanced: -2 on both sides');
      } else {
        setResult('Custom reaction - follow the steps above to balance manually');
        stepsArray.push('\n📝 For this reaction, follow the steps above to balance:');
        stepsArray.push('1. Balance main elements');
        stepsArray.push(`2. Add ${environment === 'acidic' ? 'H₂O and H⁺' : 'H₂O and OH⁻'}`);
        stepsArray.push('3. Add electrons to balance charge');
        stepsArray.push('4. Equalize electrons and add half-reactions');
      }

      setSteps(stepsArray);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setOxidationHalf(example.oxidation);
    setReductionHalf(example.reduction);
    setEnvironment(example.environment);
    setError('');
    setResult('');
    setSteps([]);
  };

  const clearFields = () => {
    setOxidationHalf('Fe²⁺ → Fe³⁺');
    setReductionHalf('MnO₄⁻ → Mn²⁺');
    setEnvironment('acidic');
    setResult('');
    setSteps([]);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Half-Reaction Method
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Balance redox reactions by separating oxidation and reduction half-reactions, then combining them.
          </p>
        </div>

        {/* Environment Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reaction Environment:
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setEnvironment('acidic')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                environment === 'acidic'
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Acidic (H⁺)
            </button>
            <button
              onClick={() => setEnvironment('basic')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                environment === 'basic'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Basic (OH⁻)
            </button>
            <button
              onClick={() => setEnvironment('neutral')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                environment === 'neutral'
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Neutral (H₂O)
            </button>
          </div>
        </div>

        {/* Example Reactions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Reactions:
          </h4>
          <div className="grid md:grid-cols-3 gap-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => fillExample(example)}
                className="text-left p-3 bg-gradient-to-br from-secondary-50 to-tertiary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="font-medium text-gray-900 dark:text-white text-sm">
                  {example.name}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {example.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Oxidation Half-Reaction (loses electrons)
            </label>
            <input
              type="text"
              value={oxidationHalf}
              onChange={(e) => setOxidationHalf(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white font-mono"
              placeholder="Fe²⁺ → Fe³⁺"
            />
            <details className="mt-1">
              <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer">
                Common oxidation half-reactions
              </summary>
              <div className="mt-2 space-y-1">
                {commonHalfReactions.oxidation.map((rxn, idx) => (
                  <button
                    key={idx}
                    onClick={() => setOxidationHalf(rxn)}
                    className="block w-full text-left text-xs px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded font-mono"
                  >
                    {rxn}
                  </button>
                ))}
              </div>
            </details>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Reduction Half-Reaction (gains electrons)
            </label>
            <input
              type="text"
              value={reductionHalf}
              onChange={(e) => setReductionHalf(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white font-mono"
              placeholder="MnO₄⁻ → Mn²⁺"
            />
            <details className="mt-1">
              <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer">
                Common reduction half-reactions
              </summary>
              <div className="mt-2 space-y-1">
                {commonHalfReactions.reduction.map((rxn, idx) => (
                  <button
                    key={idx}
                    onClick={() => setReductionHalf(rxn)}
                    className="block w-full text-left text-xs px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded font-mono"
                  >
                    {rxn}
                  </button>
                ))}
              </div>
            </details>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={balanceRedox}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Balance Equation
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
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Balanced Redox Equation:
            </h4>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
              <p className="font-mono text-lg font-bold text-gray-900 dark:text-white">
                {result}
              </p>
            </div>

            {steps.length > 0 && (
              <div>
                <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Balancing Steps:
                </h5>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                    {steps.join('\n')}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Half-Reaction Method Overview
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>The Half-Reaction Method</strong> balances redox reactions by treating oxidation 
              and reduction separately, then combining them.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Separate into oxidation and reduction half-reactions</li>
              <li>Balance atoms except O and H</li>
              <li>Balance O by adding H₂O</li>
              <li>Balance H by adding H⁺ (acidic) or OH⁻ (basic)</li>
              <li>Balance charge by adding electrons (e⁻)</li>
              <li>Multiply to equalize electrons transferred</li>
              <li>Add half-reactions and cancel common terms</li>
            </ol>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Remember:</strong> In acidic solutions use H⁺ and H₂O. In basic solutions, 
                balance as if acidic, then add OH⁻ to neutralize all H⁺ ions, creating H₂O.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedoxBalancingCalculator;
