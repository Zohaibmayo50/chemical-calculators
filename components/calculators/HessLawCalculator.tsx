'use client';

import React, { useState } from 'react';

interface Reaction {
  id: number;
  equation: string;
  enthalpy: string;
  coefficient: string;
}

const HessLawCalculator: React.FC = () => {
  const [reactions, setReactions] = useState<Reaction[]>([
    { id: 1, equation: '', enthalpy: '', coefficient: '1' },
    { id: 2, equation: '', enthalpy: '', coefficient: '1' },
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const examples = [
    {
      name: 'Carbon Combustion (2-step)',
      reactions: [
        { equation: 'C(s) + ½O₂(g) → CO(g)', enthalpy: '-110.5', coefficient: '1' },
        { equation: 'CO(g) + ½O₂(g) → CO₂(g)', enthalpy: '-283.0', coefficient: '1' },
      ],
      description: 'Calculate ΔH for C + O₂ → CO₂',
    },
    {
      name: 'Formation of NH₃ (3-step)',
      reactions: [
        { equation: 'N₂(g) + O₂(g) → 2NO(g)', enthalpy: '180.5', coefficient: '1' },
        { equation: '2NO(g) + O₂(g) → 2NO₂(g)', enthalpy: '-114.1', coefficient: '1' },
        { equation: '4NO₂(g) + O₂(g) + 4NH₃(g) → 6H₂O(l) + 4N₂(g)', enthalpy: '-1170', coefficient: '-1' },
      ],
      description: 'Complex pathway calculation',
    },
  ];

  const addReaction = () => {
    setReactions([
      ...reactions,
      { id: Date.now(), equation: '', enthalpy: '', coefficient: '1' },
    ]);
  };

  const removeReaction = (id: number) => {
    if (reactions.length > 2) {
      setReactions(reactions.filter((r) => r.id !== id));
    }
  };

  const updateReaction = (id: number, field: keyof Reaction, value: string) => {
    setReactions(
      reactions.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const calculate = () => {
    setError('');
    setResult(null);

    try {
      let totalEnthalpy = 0;

      for (const reaction of reactions) {
        const enthalpy = parseFloat(reaction.enthalpy);
        const coefficient = parseFloat(reaction.coefficient);

        if (isNaN(enthalpy)) {
          throw new Error(`Invalid enthalpy value for reaction: ${reaction.equation || 'unnamed'}`);
        }
        if (isNaN(coefficient)) {
          throw new Error(`Invalid coefficient for reaction: ${reaction.equation || 'unnamed'}`);
        }

        // Hess's Law: ΔH_total = Σ(coefficient × ΔH)
        totalEnthalpy += coefficient * enthalpy;
      }

      setResult(totalEnthalpy);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setReactions(
      example.reactions.map((r, index) => ({
        id: Date.now() + index,
        equation: r.equation,
        enthalpy: r.enthalpy,
        coefficient: r.coefficient,
      }))
    );
    setError('');
    setResult(null);
  };

  const clearFields = () => {
    setReactions([
      { id: 1, equation: '', enthalpy: '', coefficient: '1' },
      { id: 2, equation: '', enthalpy: '', coefficient: '1' },
    ]);
    setResult(null);
    setError('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Hess's Law: ΔH_total = Σ(coefficient × ΔH)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Add multiple reactions with their enthalpy changes. Use positive coefficients for reactions as written, 
            negative coefficients for reversed reactions.
          </p>
        </div>

        {/* Example Calculations */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Calculations:
          </h4>
          <div className="grid md:grid-cols-2 gap-2">
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

        {/* Reactions List */}
        <div className="space-y-3">
          {reactions.map((reaction, index) => (
            <div key={reaction.id} className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Reaction {index + 1}
                </h4>
                {reactions.length > 2 && (
                  <button
                    onClick={() => removeReaction(reaction.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Chemical Equation
                </label>
                <input
                  type="text"
                  value={reaction.equation}
                  onChange={(e) => updateReaction(reaction.id, 'equation', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., C(s) + O₂(g) → CO₂(g)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    ΔH (kJ/mol)
                  </label>
                  <input
                    type="number"
                    value={reaction.enthalpy}
                    onChange={(e) => updateReaction(reaction.id, 'enthalpy', e.target.value)}
                    step="0.1"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter enthalpy"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Coefficient
                  </label>
                  <input
                    type="number"
                    value={reaction.coefficient}
                    onChange={(e) => updateReaction(reaction.id, 'coefficient', e.target.value)}
                    step="0.5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="1, -1, 2, etc."
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Use -1 to reverse reaction
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={addReaction}
          className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
        >
          + Add Another Reaction
        </button>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate ΔH_total
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

        {result !== null && (
          <div className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
            <div className="space-y-2">
              <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold">
                ΔH_total = {result.toFixed(2)} kJ/mol
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {result < 0 ? '⚡ Exothermic reaction (releases energy)' : '🔥 Endothermic reaction (absorbs energy)'}
              </p>
              {Math.abs(result) > 500 && (
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  High energy change - very favorable or unfavorable reaction
                </p>
              )}
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Hess's Law
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Hess's Law of Constant Heat Summation:</strong> The total enthalpy change for a reaction 
              is the same whether it occurs in one step or multiple steps.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Add reactions with positive coefficients (as written)</li>
              <li>Subtract reactions with negative coefficients (reversed reactions change sign of ΔH)</li>
              <li>Multiply ΔH by stoichiometric coefficients if needed</li>
              <li>Sum all modified ΔH values to get overall ΔH</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Key Principle:</strong> Energy is a state function - the path doesn't matter, 
                only initial and final states. This allows us to calculate unknown ΔH values from known ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HessLawCalculator;
