'use client';

import React, { useState } from 'react';

interface Bond {
  id: number;
  type: string;
  energy: string;
  count: string;
  location: 'reactants' | 'products';
}

const BondEnergyCalculator: React.FC = () => {
  const [bonds, setBonds] = useState<Bond[]>([
    { id: 1, type: 'C-H', energy: '413', count: '4', location: 'reactants' },
    { id: 2, type: 'O=O', energy: '498', count: '2', location: 'reactants' },
    { id: 3, type: 'C=O', energy: '799', count: '2', location: 'products' },
    { id: 4, type: 'O-H', energy: '463', count: '4', location: 'products' },
  ]);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');
  const [breakdown, setBreakdown] = useState<string>('');

  // Common bond energies (kJ/mol)
  const commonBonds = [
    { bond: 'C-H', energy: 413, category: 'C-H bonds' },
    { bond: 'C-C', energy: 347, category: 'C-C bonds' },
    { bond: 'C=C', energy: 614, category: 'C-C bonds' },
    { bond: 'C≡C', energy: 839, category: 'C-C bonds' },
    { bond: 'C-O', energy: 358, category: 'C-O bonds' },
    { bond: 'C=O', energy: 799, category: 'C-O bonds' },
    { bond: 'C=O (CO₂)', energy: 804, category: 'C-O bonds' },
    { bond: 'C-N', energy: 305, category: 'C-N bonds' },
    { bond: 'C=N', energy: 615, category: 'C-N bonds' },
    { bond: 'C≡N', energy: 891, category: 'C-N bonds' },
    { bond: 'N-H', energy: 391, category: 'N-H bonds' },
    { bond: 'N-N', energy: 163, category: 'N-N bonds' },
    { bond: 'N=N', energy: 418, category: 'N-N bonds' },
    { bond: 'N≡N', energy: 945, category: 'N-N bonds' },
    { bond: 'O-H', energy: 463, category: 'O-H bonds' },
    { bond: 'O-O', energy: 146, category: 'O-O bonds' },
    { bond: 'O=O', energy: 498, category: 'O-O bonds' },
    { bond: 'H-H', energy: 436, category: 'H-H bonds' },
    { bond: 'F-F', energy: 158, category: 'Halogen bonds' },
    { bond: 'Cl-Cl', energy: 242, category: 'Halogen bonds' },
    { bond: 'Br-Br', energy: 193, category: 'Halogen bonds' },
    { bond: 'I-I', energy: 151, category: 'Halogen bonds' },
    { bond: 'H-F', energy: 567, category: 'H-X bonds' },
    { bond: 'H-Cl', energy: 431, category: 'H-X bonds' },
    { bond: 'H-Br', energy: 366, category: 'H-X bonds' },
    { bond: 'H-I', energy: 299, category: 'H-X bonds' },
  ];

  const examples = [
    {
      name: 'Methane Combustion (CH₄ + 2O₂)',
      bonds: [
        { type: 'C-H', energy: '413', count: '4', location: 'reactants' as const },
        { type: 'O=O', energy: '498', count: '2', location: 'reactants' as const },
        { type: 'C=O', energy: '799', count: '2', location: 'products' as const },
        { type: 'O-H', energy: '463', count: '4', location: 'products' as const },
      ],
      description: 'Complete combustion to CO₂ and H₂O',
    },
    {
      name: 'Hydrogen + Chlorine (H₂ + Cl₂)',
      bonds: [
        { type: 'H-H', energy: '436', count: '1', location: 'reactants' as const },
        { type: 'Cl-Cl', energy: '242', count: '1', location: 'reactants' as const },
        { type: 'H-Cl', energy: '431', count: '2', location: 'products' as const },
      ],
      description: 'Formation of HCl',
    },
  ];

  const addBond = (location: 'reactants' | 'products') => {
    setBonds([
      ...bonds,
      { id: Date.now(), type: '', energy: '', count: '1', location },
    ]);
  };

  const removeBond = (id: number) => {
    setBonds(bonds.filter((b) => b.id !== id));
  };

  const updateBond = (id: number, field: keyof Bond, value: string) => {
    setBonds(bonds.map((b) => (b.id === id ? { ...b, [field]: value } : b)));
  };

  const fillBondEnergy = (bondType: string, energy: number, id: number) => {
    setBonds(
      bonds.map((b) =>
        b.id === id ? { ...b, type: bondType, energy: energy.toString() } : b
      )
    );
  };

  const calculate = () => {
    setError('');
    setResult(null);
    setBreakdown('');

    try {
      let bondsBrokenEnergy = 0;
      let bondsFormedEnergy = 0;
      let breakdownText = 'Bonds Broken (Reactants - Energy Input +):\n';

      // Calculate energy for bonds broken (reactants)
      const reactantBonds = bonds.filter((b) => b.location === 'reactants');
      for (const bond of reactantBonds) {
        const energy = parseFloat(bond.energy);
        const count = parseFloat(bond.count);

        if (isNaN(energy) || isNaN(count)) {
          throw new Error(`Invalid values for bond: ${bond.type || 'unnamed'}`);
        }

        const totalEnergy = energy * count;
        bondsBrokenEnergy += totalEnergy;
        breakdownText += `  ${count} × ${bond.type || '?'} (${energy} kJ/mol) = +${totalEnergy.toFixed(1)} kJ/mol\n`;
      }

      breakdownText += `Total bonds broken: +${bondsBrokenEnergy.toFixed(1)} kJ/mol\n\n`;
      breakdownText += 'Bonds Formed (Products - Energy Released -):\n';

      // Calculate energy for bonds formed (products)
      const productBonds = bonds.filter((b) => b.location === 'products');
      for (const bond of productBonds) {
        const energy = parseFloat(bond.energy);
        const count = parseFloat(bond.count);

        if (isNaN(energy) || isNaN(count)) {
          throw new Error(`Invalid values for bond: ${bond.type || 'unnamed'}`);
        }

        const totalEnergy = energy * count;
        bondsFormedEnergy += totalEnergy;
        breakdownText += `  ${count} × ${bond.type || '?'} (${energy} kJ/mol) = -${totalEnergy.toFixed(1)} kJ/mol\n`;
      }

      breakdownText += `Total bonds formed: -${bondsFormedEnergy.toFixed(1)} kJ/mol\n\n`;

      // ΔH = Bonds Broken - Bonds Formed
      const deltaH = bondsBrokenEnergy - bondsFormedEnergy;
      
      breakdownText += `ΔH_rxn = Bonds Broken - Bonds Formed\n`;
      breakdownText += `ΔH_rxn = ${bondsBrokenEnergy.toFixed(1)} - ${bondsFormedEnergy.toFixed(1)}\n`;
      breakdownText += `ΔH_rxn = ${deltaH.toFixed(1)} kJ/mol`;

      setResult(deltaH);
      setBreakdown(breakdownText);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const fillExample = (example: typeof examples[0]) => {
    setBonds(
      example.bonds.map((b, index) => ({
        id: Date.now() + index,
        type: b.type,
        energy: b.energy,
        count: b.count,
        location: b.location,
      }))
    );
    setError('');
    setResult(null);
    setBreakdown('');
  };

  const clearFields = () => {
    setBonds([
      { id: 1, type: '', energy: '', count: '1', location: 'reactants' },
      { id: 2, type: '', energy: '', count: '1', location: 'products' },
    ]);
    setResult(null);
    setError('');
    setBreakdown('');
  };

  const reactantBonds = bonds.filter((b) => b.location === 'reactants');
  const productBonds = bonds.filter((b) => b.location === 'products');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            ΔH_rxn = Σ(Bonds Broken) - Σ(Bonds Formed)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Breaking bonds requires energy (+), forming bonds releases energy (-). 
            The net difference is the enthalpy change.
          </p>
        </div>

        {/* Example Reactions */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Example Reactions:
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

        {/* Reactants (Bonds Broken) */}
        <div className="border-2 border-red-200 dark:border-red-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-red-900 dark:text-red-100">
              Reactants (Bonds Broken) ⬆️ +Energy
            </h4>
            <button
              onClick={() => addBond('reactants')}
              className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 font-medium"
            >
              + Add Bond
            </button>
          </div>

          <div className="space-y-2">
            {reactantBonds.map((bond) => (
              <div key={bond.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  value={bond.type}
                  onChange={(e) => updateBond(bond.id, 'type', e.target.value)}
                  className="col-span-3 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., C-H"
                />
                <input
                  type="number"
                  value={bond.energy}
                  onChange={(e) => updateBond(bond.id, 'energy', e.target.value)}
                  className="col-span-3 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Energy"
                  step="0.1"
                />
                <input
                  type="number"
                  value={bond.count}
                  onChange={(e) => updateBond(bond.id, 'count', e.target.value)}
                  className="col-span-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:text-white"
                  placeholder="#"
                  step="0.5"
                />
                <details className="col-span-3">
                  <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer">
                    Select
                  </summary>
                  <div className="absolute z-10 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg max-h-32 overflow-y-auto">
                    {commonBonds.map((cb, idx) => (
                      <button
                        key={idx}
                        onClick={() => fillBondEnergy(cb.bond, cb.energy, bond.id)}
                        className="w-full text-left text-xs px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between"
                      >
                        <span>{cb.bond}</span>
                        <span>{cb.energy}</span>
                      </button>
                    ))}
                  </div>
                </details>
                <button
                  onClick={() => removeBond(bond.id)}
                  className="col-span-1 text-red-500 hover:text-red-700 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Products (Bonds Formed) */}
        <div className="border-2 border-green-200 dark:border-green-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-green-900 dark:text-green-100">
              Products (Bonds Formed) ⬇️ -Energy
            </h4>
            <button
              onClick={() => addBond('products')}
              className="text-sm text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-medium"
            >
              + Add Bond
            </button>
          </div>

          <div className="space-y-2">
            {productBonds.map((bond) => (
              <div key={bond.id} className="grid grid-cols-12 gap-2 items-center">
                <input
                  type="text"
                  value={bond.type}
                  onChange={(e) => updateBond(bond.id, 'type', e.target.value)}
                  className="col-span-3 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., C=O"
                />
                <input
                  type="number"
                  value={bond.energy}
                  onChange={(e) => updateBond(bond.id, 'energy', e.target.value)}
                  className="col-span-3 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Energy"
                  step="0.1"
                />
                <input
                  type="number"
                  value={bond.count}
                  onChange={(e) => updateBond(bond.id, 'count', e.target.value)}
                  className="col-span-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="#"
                  step="0.5"
                />
                <details className="col-span-3">
                  <summary className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer">
                    Select
                  </summary>
                  <div className="absolute z-10 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded shadow-lg max-h-32 overflow-y-auto">
                    {commonBonds.map((cb, idx) => (
                      <button
                        key={idx}
                        onClick={() => fillBondEnergy(cb.bond, cb.energy, bond.id)}
                        className="w-full text-left text-xs px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 flex justify-between"
                      >
                        <span>{cb.bond}</span>
                        <span>{cb.energy}</span>
                      </button>
                    ))}
                  </div>
                </details>
                <button
                  onClick={() => removeBond(bond.id)}
                  className="col-span-1 text-green-500 hover:text-green-700 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={calculate}
            className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Calculate ΔH_rxn
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
            <div className="space-y-3">
              <p className="text-gray-800 dark:text-gray-200 text-2xl font-bold">
                ΔH_rxn = {result.toFixed(1)} kJ/mol
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {result < 0 
                  ? '⚡ Exothermic reaction (releases energy, bonds formed > bonds broken)' 
                  : '🔥 Endothermic reaction (absorbs energy, bonds broken > bonds formed)'}
              </p>
              <pre className="text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-mono bg-white dark:bg-gray-800 p-3 rounded">
                {breakdown}
              </pre>
            </div>
          </div>
        )}

        {/* Educational Info */}
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Understanding Bond Energies
          </h4>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              <strong>Bond Energy (Bond Dissociation Energy):</strong> The energy required to break 
              one mole of bonds in gaseous molecules. Always a positive value (endothermic process).
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>Breaking bonds:</strong> Requires energy input (+)</li>
              <li><strong>Forming bonds:</strong> Releases energy (-)</li>
              <li><strong>Triple bonds</strong> stronger than double bonds stronger than single bonds</li>
              <li><strong>Average values:</strong> Bond energies are averages across many molecules</li>
            </ul>
            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-xs">
                <strong>Key Concept:</strong> If more energy is released forming bonds than required 
                to break them, the reaction is exothermic (ΔH &lt; 0). Otherwise, it's endothermic (ΔH &gt; 0).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondEnergyCalculator;
