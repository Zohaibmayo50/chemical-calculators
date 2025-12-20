'use client';

import React, { useState } from 'react';

type CalculationMode = 'balance' | 'verify' | 'practice';

interface Element {
  symbol: string;
  count: number;
}

const ChemicalEquationBalancer: React.FC = () => {
  const [mode, setMode] = useState<CalculationMode>('balance');

  // Balance mode inputs
  const [reactants, setReactants] = useState<string>('');
  const [products, setProducts] = useState<string>('');

  // Results
  const [balancedEquation, setBalancedEquation] = useState<string>('');
  const [coefficients, setCoefficients] = useState<string>('');
  const [verification, setVerification] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);

  const examples = [
    {
      name: 'Combustion of Methane',
      reactants: 'CH₄ + O₂',
      products: 'CO₂ + H₂O',
      balanced: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    },
    {
      name: 'Formation of Water',
      reactants: 'H₂ + O₂',
      products: 'H₂O',
      balanced: '2H₂ + O₂ → 2H₂O',
    },
    {
      name: 'Synthesis of Ammonia',
      reactants: 'N₂ + H₂',
      products: 'NH₃',
      balanced: 'N₂ + 3H₂ → 2NH₃',
    },
    {
      name: 'Combustion of Propane',
      reactants: 'C₃H₈ + O₂',
      products: 'CO₂ + H₂O',
      balanced: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    },
    {
      name: 'Rust Formation',
      reactants: 'Fe + O₂',
      products: 'Fe₂O₃',
      balanced: '4Fe + 3O₂ → 2Fe₂O₃',
    },
  ];

  const loadExample = (example: typeof examples[0]) => {
    setMode('balance');
    setReactants(example.reactants);
    setProducts(example.products);
  };

  const parseCompound = (compound: string): { [key: string]: number } => {
    const elements: { [key: string]: number } = {};
    const normalized = compound.trim()
      .replace(/₀/g, '0').replace(/₁/g, '1').replace(/₂/g, '2')
      .replace(/₃/g, '3').replace(/₄/g, '4').replace(/₅/g, '5')
      .replace(/₆/g, '6').replace(/₇/g, '7').replace(/₈/g, '8')
      .replace(/₉/g, '9');

    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;

    while ((match = regex.exec(normalized)) !== null) {
      if (match[1]) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2]) : 1;
        elements[element] = (elements[element] || 0) + count;
      }
    }

    return elements;
  };

  const formatSubscript = (num: number): string => {
    if (num === 1) return '';
    const subscripts = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    return num.toString().split('').map(d => subscripts[parseInt(d)]).join('');
  };

  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const simplifyCoefficients = (coeffs: number[]): number[] => {
    const divisor = coeffs.reduce((a, b) => gcd(Math.round(a), Math.round(b)));
    return coeffs.map(c => Math.round(c / divisor));
  };

  const balanceEquation = () => {
    if (!reactants || !products) {
      alert('Please enter both reactants and products');
      return;
    }

    try {
      const reactantList = reactants.split('+').map(r => r.trim());
      const productList = products.split('+').map(p => p.trim());
      
      // Parse all compounds
      const allCompounds = [...reactantList, ...productList];
      const compoundElements = allCompounds.map(c => parseCompound(c));

      // Get all unique elements
      const allElements = new Set<string>();
      compoundElements.forEach(comp => {
        Object.keys(comp).forEach(el => allElements.add(el));
      });
      const elementList = Array.from(allElements);

      // Simple balancing algorithm for common cases
      let coeffs = new Array(allCompounds.length).fill(1);
      const stepsArray: string[] = [];

      // Try to balance iteratively (simplified approach for demonstration)
      let balanced = false;
      let iterations = 0;
      const maxIterations = 50;

      while (!balanced && iterations < maxIterations) {
        balanced = true;
        iterations++;

        for (const element of elementList) {
          let leftCount = 0;
          let rightCount = 0;

          // Count on left side (reactants)
          for (let i = 0; i < reactantList.length; i++) {
            const count = compoundElements[i][element] || 0;
            leftCount += coeffs[i] * count;
          }

          // Count on right side (products)
          for (let i = 0; i < productList.length; i++) {
            const count = compoundElements[reactantList.length + i][element] || 0;
            rightCount += coeffs[reactantList.length + i] * count;
          }

          if (leftCount !== rightCount) {
            balanced = false;
            
            // Simple adjustment strategy
            if (leftCount < rightCount) {
              // Increase reactant coefficients
              for (let i = 0; i < reactantList.length; i++) {
                if ((compoundElements[i][element] || 0) > 0) {
                  coeffs[i] *= rightCount / leftCount;
                  break;
                }
              }
            } else {
              // Increase product coefficients
              for (let i = 0; i < productList.length; i++) {
                const idx = reactantList.length + i;
                if ((compoundElements[idx][element] || 0) > 0) {
                  coeffs[idx] *= leftCount / rightCount;
                  break;
                }
              }
            }
          }
        }
      }

      // Round and simplify coefficients
      coeffs = coeffs.map(c => Math.round(c * 10) / 10);
      
      // Try to convert to whole numbers
      let multiplier = 1;
      for (const coeff of coeffs) {
        const decimal = coeff % 1;
        if (decimal > 0.01) {
          if (Math.abs(decimal - 0.5) < 0.01) multiplier = Math.max(multiplier, 2);
          else if (Math.abs(decimal - 0.333) < 0.01 || Math.abs(decimal - 0.667) < 0.01) multiplier = Math.max(multiplier, 3);
        }
      }
      
      coeffs = coeffs.map(c => Math.round(c * multiplier));
      coeffs = simplifyCoefficients(coeffs);

      // Build balanced equation
      let leftSide = '';
      for (let i = 0; i < reactantList.length; i++) {
        if (i > 0) leftSide += ' + ';
        if (coeffs[i] > 1) leftSide += coeffs[i];
        leftSide += reactantList[i];
      }

      let rightSide = '';
      for (let i = 0; i < productList.length; i++) {
        if (i > 0) rightSide += ' + ';
        const coeff = coeffs[reactantList.length + i];
        if (coeff > 1) rightSide += coeff;
        rightSide += productList[i];
      }

      const equation = `${leftSide} → ${rightSide}`;
      setBalancedEquation(equation);
      setCoefficients(coeffs.join(', '));

      // Verify balance
      let isBalanced = true;
      let verificationText = '';
      
      for (const element of elementList) {
        let leftCount = 0;
        let rightCount = 0;

        for (let i = 0; i < reactantList.length; i++) {
          leftCount += coeffs[i] * (compoundElements[i][element] || 0);
        }

        for (let i = 0; i < productList.length; i++) {
          rightCount += coeffs[reactantList.length + i] * (compoundElements[reactantList.length + i][element] || 0);
        }

        verificationText += `${element}: ${leftCount} = ${rightCount} `;
        if (leftCount !== rightCount) {
          isBalanced = false;
          verificationText += '❌\n';
        } else {
          verificationText += '✓\n';
        }
      }

      if (isBalanced) {
        setVerification('✓ Equation is balanced!\n\n' + verificationText);
        stepsArray.push('All elements are balanced');
      } else {
        setVerification('⚠ Balancing algorithm needs refinement\n\n' + verificationText);
        stepsArray.push('Note: Complex equations may require manual adjustment');
      }

      setSteps(stepsArray);

    } catch (error) {
      alert('Error balancing equation. Please check your input format.');
      console.error(error);
    }
  };

  const handleReset = () => {
    setReactants('');
    setProducts('');
    setBalancedEquation('');
    setCoefficients('');
    setVerification('');
    setSteps([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Calculation Mode
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <button
            onClick={() => setMode('balance')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'balance'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Balance Equation
          </button>
          <button
            onClick={() => setMode('verify')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              mode === 'verify'
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Verify Balance
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Reactants (separate with +)
          </label>
          <input
            type="text"
            value={reactants}
            onChange={(e) => setReactants(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., Fe + O₂ or Fe + O2"
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            You can use subscripts (₂) or regular numbers (2)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Products (separate with +)
          </label>
          <input
            type="text"
            value={products}
            onChange={(e) => setProducts(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="e.g., Fe₂O₃ or Fe2O3"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={balanceEquation}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Balance Equation
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
              <p className="text-sm text-gray-600 dark:text-gray-400">Balanced Equation</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{balancedEquation}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">Coefficients</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{coefficients}</p>
            </div>

            {verification && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Verification</p>
                <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono">
                  {verification}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          Example Equations
        </h3>
        <div className="grid grid-cols-1 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(example)}
              className="text-left px-4 py-3 bg-white dark:bg-gray-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-500 transition-colors"
            >
              <div className="font-medium text-gray-800 dark:text-white">{example.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Unbalanced: {example.reactants} → {example.products}
              </div>
              <div className="text-sm text-green-600 dark:text-green-400">
                Balanced: {example.balanced}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
          Balancing Tips
        </h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <p><strong>1. Balance one element at a time</strong> - Start with the most complex compound</p>
          <p><strong>2. Leave hydrogen and oxygen for last</strong> - They're often in multiple compounds</p>
          <p><strong>3. Use fractions if needed</strong> - Then multiply to get whole numbers</p>
          <p><strong>4. Check your work</strong> - Verify each element is balanced on both sides</p>
          <p><strong>5. Simplify</strong> - Reduce coefficients to smallest whole numbers</p>
        </div>
      </div>
    </div>
  );
};

export default ChemicalEquationBalancer;
