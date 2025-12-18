export interface Calculator {
  id: string;
  name: string;
  description: string;
  slug: string;
  formula?: string;
  formulaExplanation?: string;
  variables?: string;
  units?: string;
  educationalLevel?: string[];
}

export interface CalculatorCategory {
  id: string;
  name: string;
  description: string;
  semanticContext: string;
  calculators: Calculator[];
}

export const calculatorCategories: CalculatorCategory[] = [
  {
    id: 'stoichiometry',
    name: 'Stoichiometry Calculators',
    description: 'Stoichiometry calculators for quantitative chemical analysis and reaction calculations.',
    semanticContext: 'Stoichiometry represents the quantitative relationships between reactants and products in chemical reactions. These calculators help determine molecular ratios, limiting reagents, theoretical yields, and percent yields based on balanced chemical equations and the law of conservation of mass.',
    calculators: [
      {
        id: 'stoichiometry',
        name: 'Stoichiometry Calculator',
        description: 'Calculate mole ratios and quantities in chemical reactions',
        slug: 'stoichiometry-calculator',
        formula: 'n = m/M (moles = mass/molar mass)',
        variables: 'n = moles, m = mass (g), M = molar mass (g/mol)',
        units: 'mol, g, g/mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'limiting-reagent',
        name: 'Limiting Reagent Calculator',
        description: 'Determine the limiting reactant in chemical reactions',
        slug: 'limiting-reagent-calculator',
        formula: 'moles_reactant / coefficient',
        variables: 'Compare mole ratios to stoichiometric coefficients',
        units: 'mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'theoretical-yield',
        name: 'Theoretical Yield Calculator',
        description: 'Calculate maximum product amount from reactants',
        slug: 'theoretical-yield-calculator',
        formula: 'Yield = (moles_limiting × coefficient_product × M_product)',
        variables: 'Based on limiting reagent and stoichiometric ratios',
        units: 'g, mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'percent-yield',
        name: 'Percent Yield Calculator',
        description: 'Determine reaction efficiency and actual vs theoretical yield',
        slug: 'percent-yield-calculator',
        formula: '% Yield = (Actual/Theoretical) × 100',
        variables: 'Actual = experimental yield, Theoretical = calculated yield',
        units: '%',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'empirical-formula',
        name: 'Empirical Formula Calculator',
        description: 'Find the simplest whole-number ratio of elements',
        slug: 'empirical-formula-calculator',
        formula: 'moles_element / smallest_moles',
        variables: 'mass % → moles → simplest ratio',
        units: 'g, mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'molecular-formula',
        name: 'Molecular Formula Calculator',
        description: 'Calculate molecular formula from empirical formula',
        slug: 'molecular-formula-calculator',
        formula: 'n = M_molecular / M_empirical',
        variables: 'n = multiplier for empirical formula',
        units: 'g/mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'combustion',
        name: 'Combustion Calculator',
        description: 'Analyze combustion reactions and energy release',
        slug: 'combustion-calculator',
        formula: 'CₓHᵧ + O₂ → CO₂ + H₂O',
        variables: 'Complete combustion with oxygen',
        units: 'mol, kJ',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'balancing-equations',
        name: 'Chemical Equation Balancer',
        description: 'Balance chemical equations automatically',
        slug: 'balancing-equations-calculator',
        formula: 'aA + bB → cC + dD',
        variables: 'Coefficients a,b,c,d balance atoms on both sides',
        units: 'stoichiometric coefficients',
        educationalLevel: ['high-school', 'college']
      },
    ]
  },
  {
    id: 'solutions-concentrations',
    name: 'Solutions & Concentration Calculators',
    description: 'Calculate molarity, molality, normality, and other concentration units for chemical solutions.',
    semanticContext: 'Solution concentration describes the amount of solute dissolved in a given quantity of solvent. Understanding concentration units like molarity (moles per liter), molality (moles per kilogram), and mass percent is essential for preparing solutions, conducting titrations, and predicting colligative properties.',
    calculators: [
      {
        id: 'molarity',
        name: 'Molarity Calculator',
        description: 'Calculate molar concentration of solutions',
        slug: 'molarity-calculator',
        formula: 'M = n/V (Molarity = moles/volume in L)',
        variables: 'M = molarity (M), n = moles (mol), V = volume (L)',
        units: 'M, mol, L',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'molality',
        name: 'Molality Calculator',
        description: 'Calculate molal concentration (moles per kg solvent)',
        slug: 'molality-calculator',
        formula: 'm = n/mass_solvent (kg)',
        variables: 'm = molality (mol/kg), n = moles solute',
        units: 'mol/kg, mol, kg',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'normality',
        name: 'Normality Calculator',
        description: 'Calculate equivalent concentration for acid-base reactions',
        slug: 'normality-calculator',
        formula: 'N = M × n (equivalents)',
        variables: 'N = normality, M = molarity, n = equivalents per mole',
        units: 'N, M, eq/mol',
        educationalLevel: ['college']
      },
      {
        id: 'dilution',
        name: 'Dilution Calculator',
        description: 'Calculate volumes and concentrations for solution dilution',
        slug: 'dilution-calculator',
        formula: 'C₁V₁ = C₂V₂',
        variables: 'C₁,V₁ = initial concentration & volume; C₂,V₂ = final',
        units: 'M, L, mL',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'concentration-converter',
        name: 'Concentration Converter',
        description: 'Convert between different concentration units',
        slug: 'concentration-converter',
        formula: 'M ⇄ m ⇄ % ⇄ ppm ⇄ ppb',
        variables: 'Converts between molarity, molality, mass%, ppm, ppb',
        units: 'M, m, %, ppm, ppb',
        educationalLevel: ['college']
      },
      {
        id: 'mass-percent',
        name: 'Mass Percent Calculator',
        description: 'Calculate mass percentage of solute in solution',
        slug: 'mass-percent-calculator',
        formula: '% = (mass_solute/mass_solution) × 100',
        variables: 'mass_solute = mass of dissolved substance',
        units: '%, g',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'ppm',
        name: 'PPM Calculator',
        description: 'Calculate parts per million concentration',
        slug: 'ppm-calculator',
        formula: 'ppm = (mass_solute/mass_solution) × 10⁶',
        variables: 'ppm = parts per million (mg/L in dilute aqueous solutions)',
        units: 'ppm, mg/L, mg/kg',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'ppb',
        name: 'PPB Calculator',
        description: 'Calculate parts per billion concentration',
        slug: 'ppb-calculator',
        formula: 'ppb = (mass_solute/mass_solution) × 10⁹',
        variables: 'ppb = parts per billion (μg/L in dilute aqueous solutions)',
        units: 'ppb, μg/L, μg/kg',
        educationalLevel: ['college']
      },
      {
        id: 'mole-fraction',
        name: 'Mole Fraction Calculator',
        description: 'Calculate mole fraction of components in mixtures',
        slug: 'mole-fraction-calculator',
        formula: 'χₐ = nₐ / n_total',
        variables: 'χₐ = mole fraction of component A, Σχ = 1',
        units: 'dimensionless (0 to 1)',
        educationalLevel: ['college']
      },
      {
        id: 'solution-preparation',
        name: 'Solution Preparation Calculator',
        description: 'Calculate amounts needed to prepare solutions',
        slug: 'solution-preparation-calculator',
        formula: 'mass = M × V × Molar_Mass',
        variables: 'M = desired molarity, V = volume, MM = molar mass',
        units: 'g, M, L, g/mol',
        educationalLevel: ['high-school', 'college']
      },
    ]
  },
  {
    id: 'chemical-reactions',
    name: 'Chemical Reaction Calculators',
    description: 'Analyze reaction kinetics, equilibrium, and thermodynamics.',
    semanticContext: 'Chemical reactions involve the transformation of reactants into products through bond breaking and formation. Reaction calculators help determine reaction rates, equilibrium constants, activation energies, and the spontaneity of chemical processes.',
    calculators: [
      {
        id: 'equilibrium-constant',
        name: 'Equilibrium Constant Calculator',
        description: 'Calculate Kc, Kp, and reaction quotient Q',
        slug: 'equilibrium-constant-calculator',
        formula: 'K = [products] / [reactants]',
        variables: 'K = equilibrium constant, concentrations at equilibrium',
        units: 'varies (M, atm)',
        educationalLevel: ['college']
      },
      {
        id: 'reaction-quotient',
        name: 'Reaction Quotient Calculator',
        description: 'Determine reaction direction and equilibrium status',
        slug: 'reaction-quotient-calculator',
        formula: 'Q = [products] / [reactants] (at any time)',
        variables: 'Q < K → forward; Q > K → reverse; Q = K → equilibrium',
        units: 'varies (M, atm)',
        educationalLevel: ['college']
      },
      {
        id: 'rate-constant',
        name: 'Rate Constant Calculator',
        description: 'Calculate reaction rate constants and orders',
        slug: 'rate-constant-calculator',
        formula: 'rate = k[A]ᵐ[B]ⁿ',
        variables: 'k = rate constant, m,n = reaction orders',
        units: 'varies with order (M/s, 1/s, 1/(M·s))',
        educationalLevel: ['college']
      },
      {
        id: 'half-life',
        name: 'Half-Life Calculator',
        description: 'Calculate radioactive decay and reaction half-lives',
        slug: 'half-life-calculator',
        formula: 't₁/₂ = ln(2)/k',
        variables: 't₁/₂ = half-life, k = decay/rate constant',
        units: 's, min, h, days, years',
        educationalLevel: ['college']
      },
      {
        id: 'arrhenius',
        name: 'Arrhenius Equation Calculator',
        description: 'Calculate activation energy and temperature effects',
        slug: 'arrhenius-calculator',
        formula: 'k = A·e^(-Ea/RT)',
        variables: 'k = rate constant, A = frequency factor, Ea = activation energy',
        units: 'J/mol, K',
        educationalLevel: ['college']
      },
      {
        id: 'gibbs-free-energy',
        name: 'Gibbs Free Energy Calculator',
        description: 'Determine reaction spontaneity and equilibrium',
        slug: 'gibbs-free-energy-calculator',
        formula: 'ΔG = ΔH - TΔS',
        variables: 'ΔG = Gibbs free energy, ΔH = enthalpy, T = temperature, ΔS = entropy',
        units: 'kJ/mol, K, J/(mol·K)',
        educationalLevel: ['college']
      },
      {
        id: 'enthalpy',
        name: 'Enthalpy Calculator',
        description: 'Calculate heat of reaction and formation',
        slug: 'enthalpy-calculator',
        formula: 'ΔH = Σ(ΔH_products) - Σ(ΔH_reactants)',
        variables: 'ΔH = enthalpy change, ΔH° = standard enthalpy',
        units: 'kJ/mol, kcal/mol',
        educationalLevel: ['college']
      },
      {
        id: 'entropy',
        name: 'Entropy Calculator',
        description: 'Calculate entropy change in reactions',
        slug: 'entropy-calculator',
        formula: 'ΔS = Σ(S_products) - Σ(S_reactants)',
        variables: 'ΔS = entropy change, S° = standard entropy',
        units: 'J/(mol·K)',
        educationalLevel: ['college']
      },
    ]
  },
  {
    id: 'thermodynamics',
    name: 'Thermodynamics Calculators',
    description: 'Calculate thermodynamic properties, energy changes, and spontaneity.',
    semanticContext: 'Chemical thermodynamics studies energy transformations in chemical systems. These calculators determine enthalpy changes, entropy variations, free energy values, and heat capacities to predict whether reactions occur spontaneously and how much energy they release or consume.',
    calculators: [
      {
        id: 'internal-energy',
        name: 'Internal Energy Calculator',
        description: 'Calculate change in internal energy',
        slug: 'internal-energy-calculator',
        formula: 'ΔU = Q - W',
        variables: 'Q = heat added to system, W = work done by system',
        units: 'J, kJ, cal',
        educationalLevel: ['college']
      },
      {
        id: 'heat-capacity',
        name: 'Heat Capacity Calculator',
        description: 'Calculate specific and molar heat capacity',
        slug: 'heat-capacity-calculator',
        formula: 'C = q / ΔT',
        variables: 'C = heat capacity, q = heat, ΔT = temperature change',
        units: 'J/K, J/(mol·K), J/(g·K)',
        educationalLevel: ['college']
      },
      {
        id: 'calorimetry',
        name: 'Calorimetry Calculator',
        description: 'Calculate heat transfer in calorimeter experiments',
        slug: 'calorimetry-calculator',
        formula: 'q = mcΔT',
        variables: 'm = mass, c = specific heat, ΔT = temperature change',
        units: 'J, g, J/(g·K), K',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'hess-law',
        name: 'Hess\'s Law Calculator',
        description: 'Calculate enthalpy using Hess\'s Law',
        slug: 'hess-law-calculator',
        formula: 'ΔH_total = ΣΔH_steps',
        variables: 'Sum of enthalpy changes for individual steps',
        units: 'kJ/mol',
        educationalLevel: ['college']
      },
      {
        id: 'born-haber',
        name: 'Born-Haber Cycle Calculator',
        description: 'Calculate lattice energy using Born-Haber cycle',
        slug: 'born-haber-calculator',
        formula: 'ΔH_f = ΔH_sub + IE + EA + ΔH_lattice',
        variables: 'Cyclical calculation of ionic compound formation',
        units: 'kJ/mol',
        educationalLevel: ['college']
      },
      {
        id: 'work',
        name: 'Work Calculator',
        description: 'Calculate PV work and expansion work',
        slug: 'work-calculator',
        formula: 'W = -PΔV (constant pressure)',
        variables: 'P = pressure, ΔV = volume change',
        units: 'J, L·atm',
        educationalLevel: ['college']
      },
    ]
  },
  {
    id: 'physical-chemistry',
    name: 'Physical Chemistry Calculators',
    description: 'Gas laws, colligative properties, and physical behavior of chemical systems.',
    semanticContext: 'Physical chemistry examines the physical properties and behavior of matter at the molecular level. These calculators apply gas laws, colligative properties, and phase equilibria to predict how chemical systems respond to changes in temperature, pressure, and composition.',
    calculators: [
      {
        id: 'ideal-gas-law',
        name: 'Ideal Gas Law Calculator',
        description: 'Calculate PV=nRT relationships',
        slug: 'ideal-gas-law-calculator',
        formula: 'PV = nRT',
        variables: 'P = pressure, V = volume, n = moles, R = gas constant, T = temperature',
        units: 'atm, L, mol, K (R = 0.0821 L·atm/(mol·K))',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'boiling-point-elevation',
        name: 'Boiling Point Elevation Calculator',
        description: 'Calculate change in boiling point for solutions',
        slug: 'boiling-point-elevation-calculator',
        formula: 'ΔTb = Kb·m',
        variables: 'Kb = ebullioscopic constant, m = molality',
        units: '°C, K, mol/kg',
        educationalLevel: ['college']
      },
      {
        id: 'freezing-point-depression',
        name: 'Freezing Point Depression Calculator',
        description: 'Calculate change in freezing point for solutions',
        slug: 'freezing-point-depression-calculator',
        formula: 'ΔTf = Kf·m',
        variables: 'Kf = cryoscopic constant, m = molality',
        units: '°C, K, mol/kg',
        educationalLevel: ['college']
      },
      {
        id: 'osmotic-pressure',
        name: 'Osmotic Pressure Calculator',
        description: 'Calculate osmotic pressure of solutions',
        slug: 'osmotic-pressure-calculator',
        formula: 'π = MRT',
        variables: 'π = osmotic pressure, M = molarity, R = gas constant',
        units: 'atm, M, K',
        educationalLevel: ['college']
      },
      {
        id: 'vapor-pressure',
        name: 'Vapor Pressure Calculator',
        description: 'Calculate vapor pressure using Clausius-Clapeyron',
        slug: 'vapor-pressure-calculator',
        formula: 'ln(P₂/P₁) = -(ΔH_vap/R)(1/T₂ - 1/T₁)',
        variables: 'ΔH_vap = enthalpy of vaporization',
        units: 'atm, kJ/mol, K',
        educationalLevel: ['college']
      },
      {
        id: 'raoults-law',
        name: 'Raoult\'s Law Calculator',
        description: 'Calculate partial pressures in solutions',
        slug: 'raoults-law-calculator',
        formula: 'Pₐ = χₐ × P°ₐ',
        variables: 'χₐ = mole fraction, P°ₐ = pure vapor pressure',
        units: 'atm, mmHg',
        educationalLevel: ['college']
      },
      {
        id: 'grahams-law',
        name: 'Graham\'s Law Calculator',
        description: 'Calculate gas diffusion and effusion rates',
        slug: 'grahams-law-calculator',
        formula: 'rate₁/rate₂ = √(M₂/M₁)',
        variables: 'M = molar mass of gases',
        units: 'g/mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'daltons-law',
        name: 'Dalton\'s Law Calculator',
        description: 'Calculate partial pressures in gas mixtures',
        slug: 'daltons-law-calculator',
        formula: 'P_total = P₁ + P₂ + P₃ + ...',
        variables: 'Pᵢ = partial pressure of gas i',
        units: 'atm, kPa, mmHg',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'van-der-waals',
        name: 'Van der Waals Calculator',
        description: 'Calculate real gas behavior',
        slug: 'van-der-waals-calculator',
        formula: '[P + a(n/V)²](V - nb) = nRT',
        variables: 'a,b = van der Waals constants for gas',
        units: 'atm, L, mol, K',
        educationalLevel: ['college']
      },
      {
        id: 'combined-gas-law',
        name: 'Combined Gas Law Calculator',
        description: 'Relate P, V, T changes for fixed amount of gas',
        slug: 'combined-gas-law-calculator',
        formula: 'P₁V₁/T₁ = P₂V₂/T₂',
        variables: 'Initial and final pressure, volume, temperature',
        units: 'atm, L, K',
        educationalLevel: ['high-school', 'college']
      },
    ]
  },
  {
    id: 'electrochemistry',
    name: 'Electrochemistry Calculators',
    description: 'Electrode potentials, galvanic cells, electrolysis, and redox calculations.',
    semanticContext: 'Electrochemistry studies the relationship between electrical energy and chemical reactions. These calculators determine cell potentials, predict redox spontaneity, calculate electrolysis requirements, and analyze oxidation-reduction reactions using the Nernst equation and Faraday\'s laws.',
    calculators: [
      {
        id: 'nernst-equation',
        name: 'Nernst Equation Calculator',
        description: 'Calculate cell potential under non-standard conditions',
        slug: 'nernst-equation-calculator',
        formula: 'E = E° - (RT/nF)lnQ',
        variables: 'E° = standard potential, n = electrons, F = Faraday constant',
        units: 'V, J/(mol·K), mol',
        educationalLevel: ['college']
      },
      {
        id: 'cell-potential',
        name: 'Cell Potential Calculator',
        description: 'Calculate standard electrode potential',
        slug: 'cell-potential-calculator',
        formula: 'E°_cell = E°_cathode - E°_anode',
        variables: 'Reduction potential of cathode minus anode',
        units: 'V (volts)',
        educationalLevel: ['college']
      },
      {
        id: 'faradays-law',
        name: 'Faraday\'s Law Calculator',
        description: 'Calculate electrolysis products and charge',
        slug: 'faradays-law-calculator',
        formula: 'm = (Q × M) / (n × F)',
        variables: 'Q = charge (C), M = molar mass, n = electrons, F = 96485 C/mol',
        units: 'g, C, g/mol',
        educationalLevel: ['college']
      },
      {
        id: 'oxidation-number',
        name: 'Oxidation Number Calculator',
        description: 'Determine oxidation states in compounds',
        slug: 'oxidation-number-calculator',
        formula: 'Σ(oxidation states) = charge',
        variables: 'Rules: O = -2, H = +1, alkali = +1, alkaline earth = +2',
        units: 'dimensionless integers',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'redox-balancer',
        name: 'Redox Reaction Balancer',
        description: 'Balance oxidation-reduction equations',
        slug: 'redox-balancer',
        formula: 'e⁻ lost = e⁻ gained',
        variables: 'Half-reaction method or oxidation number method',
        units: 'stoichiometric coefficients',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'battery-capacity',
        name: 'Battery Capacity Calculator',
        description: 'Calculate electrochemical cell capacity',
        slug: 'battery-capacity-calculator',
        formula: 'Capacity = (n × F) / 3600',
        variables: 'n = moles of reactant, F = Faraday constant',
        units: 'Ah (ampere-hours), mAh',
        educationalLevel: ['college']
      },
    ]
  },
  {
    id: 'organic-chemistry',
    name: 'Organic Chemistry Calculators',
    description: 'Organic molecule analysis, functional groups, and carbon chemistry.',
    semanticContext: 'Organic chemistry focuses on carbon-containing compounds and their reactions. These calculators help determine molecular structures, functional group properties, isomer identification, and organic reaction mechanisms essential for understanding biochemical processes and synthetic chemistry.',
    calculators: [
      {
        id: 'degree-unsaturation',
        name: 'Degree of Unsaturation Calculator',
        description: 'Calculate rings and double bonds in molecules',
        slug: 'degree-unsaturation-calculator',
        formula: 'DBE = (2C + 2 + N - H - X)/2',
        variables: 'C = carbons, N = nitrogens, H = hydrogens, X = halogens',
        units: 'dimensionless (rings + double bonds)',
        educationalLevel: ['college']
      },
      {
        id: 'iupac-naming',
        name: 'IUPAC Naming Helper',
        description: 'Generate IUPAC names for organic compounds',
        slug: 'iupac-naming-calculator',
        formula: 'prefix-parent-suffix',
        variables: 'Systematic naming: longest chain, functional groups, substituents',
        units: 'nomenclature',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'functional-group',
        name: 'Functional Group Identifier',
        description: 'Identify functional groups in organic molecules',
        slug: 'functional-group-calculator',
        formula: 'Pattern recognition',
        variables: 'Alkene, alcohol, carbonyl, carboxyl, amine, etc.',
        units: 'functional group names',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'isomer-calculator',
        name: 'Isomer Calculator',
        description: 'Calculate possible isomers for molecular formulas',
        slug: 'isomer-calculator',
        formula: 'Combinatorial analysis',
        variables: 'Structural, geometric, optical isomers',
        units: 'number of isomers',
        educationalLevel: ['college']
      },
      {
        id: 'hybridization',
        name: 'Hybridization Calculator',
        description: 'Determine atomic orbital hybridization',
        slug: 'hybridization-calculator',
        formula: 'Steric number = bonds + lone pairs',
        variables: 'sp, sp², sp³, sp³d, sp³d²',
        units: 'hybridization type',
        educationalLevel: ['college']
      },
      {
        id: 'molecular-geometry',
        name: 'Molecular Geometry Calculator',
        description: 'Predict 3D molecular shapes using VSEPR',
        slug: 'molecular-geometry-calculator',
        formula: 'VSEPR theory',
        variables: 'Linear, bent, trigonal, tetrahedral, octahedral',
        units: 'geometry names',
        educationalLevel: ['high-school', 'college']
      },
    ]
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry Calculators',
    description: 'Biological molecules, enzymes, metabolism, and biochemical pathways.',
    semanticContext: 'Biochemistry applies chemical principles to biological systems. These calculators analyze enzyme kinetics, protein properties, DNA sequences, metabolic rates, and biomolecular interactions essential for understanding cellular processes and pharmaceutical applications.',
    calculators: [
      {
        id: 'michaelis-menten',
        name: 'Michaelis-Menten Calculator',
        description: 'Calculate enzyme kinetics parameters',
        slug: 'michaelis-menten-calculator',
        formula: 'v = (Vmax·[S])/(Km + [S])',
        variables: 'Vmax = max velocity, Km = Michaelis constant, [S] = substrate',
        units: 'M/s, M',
        educationalLevel: ['college']
      },
      {
        id: 'protein-molecular-weight',
        name: 'Protein Molecular Weight Calculator',
        description: 'Calculate molecular weight from amino acid sequence',
        slug: 'protein-molecular-weight-calculator',
        formula: 'MW = Σ(amino acid masses) - (n-1)×18',
        variables: 'n = number of amino acids, subtract water for peptide bonds',
        units: 'Da, kDa',
        educationalLevel: ['college']
      },
      {
        id: 'isoelectric-point',
        name: 'Isoelectric Point Calculator',
        description: 'Calculate pI of proteins and amino acids',
        slug: 'isoelectric-point-calculator',
        formula: 'pI = (pKa₁ + pKa₂) / 2',
        variables: 'Average of pKa values where net charge = 0',
        units: 'pH units',
        educationalLevel: ['college']
      },
      {
        id: 'dna-concentration',
        name: 'DNA Concentration Calculator',
        description: 'Calculate DNA concentration from absorbance',
        slug: 'dna-concentration-calculator',
        formula: '[DNA] = A₂₆₀ × 50 µg/mL',
        variables: 'A₂₆₀ = absorbance at 260 nm',
        units: 'µg/mL, ng/µL',
        educationalLevel: ['college']
      },
      {
        id: 'tm-calculator',
        name: 'DNA Melting Temperature Calculator',
        description: 'Calculate Tm for DNA sequences',
        slug: 'tm-calculator',
        formula: 'Tm = 4(G+C) + 2(A+T)',
        variables: 'Simple formula for short sequences (<14 bp)',
        units: '°C',
        educationalLevel: ['college']
      },
      {
        id: 'buffer-capacity',
        name: 'Buffer Capacity Calculator',
        description: 'Calculate buffering capacity of solutions',
        slug: 'buffer-capacity-calculator',
        formula: 'β = 2.303C(Ka[H⁺])/(Ka + [H⁺])²',
        variables: 'C = total buffer concentration',
        units: 'mol/(L·pH)',
        educationalLevel: ['college']
      },
    ]
  },
  {
    id: 'general-chemistry',
    name: 'General Chemistry Calculators',
    description: 'Atomic structure, molar mass, pH, and fundamental chemistry calculations.',
    semanticContext: 'General chemistry encompasses fundamental principles governing matter, atomic structure, chemical bonding, and acid-base chemistry. These calculators determine molar masses, pH values, electron configurations, and other core chemical properties essential for all chemistry disciplines.',
    calculators: [
      {
        id: 'molar-mass',
        name: 'Molar Mass Calculator',
        description: 'Calculate molecular weight from chemical formula',
        slug: 'molar-mass-calculator',
        formula: 'M = Σ(nᵢ × Mᵢ)',
        variables: 'nᵢ = number of atoms, Mᵢ = atomic mass',
        units: 'g/mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'ph',
        name: 'pH Calculator',
        description: 'Calculate pH, pOH, [H+], and [OH-]',
        slug: 'ph-calculator',
        formula: 'pH = -log[H+]',
        variables: 'pH + pOH = 14, [H⁺][OH⁻] = 10⁻¹⁴',
        units: 'pH, M',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'pka',
        name: 'pKa Calculator',
        description: 'Calculate acid dissociation constant',
        slug: 'pka-calculator',
        formula: 'pKa = -log(Ka)',
        variables: 'Ka = [H⁺][A⁻]/[HA]',
        units: 'pKa units, M',
        educationalLevel: ['college']
      },
      {
        id: 'henderson-hasselbalch',
        name: 'Henderson-Hasselbalch Calculator',
        description: 'Calculate buffer pH',
        slug: 'henderson-hasselbalch-calculator',
        formula: 'pH = pKa + log([A⁻]/[HA])',
        variables: 'pKa = acid dissociation constant, [A⁻] = conjugate base, [HA] = weak acid',
        units: 'pH units, M',
        educationalLevel: ['college']
      },
      {
        id: 'atomic-mass',
        name: 'Atomic Mass Calculator',
        description: 'Calculate average atomic mass from isotopes',
        slug: 'atomic-mass-calculator',
        formula: 'M = Σ(abundanceᵢ × massᵢ)',
        variables: 'Weighted average of isotopic masses',
        units: 'amu, u',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'electron-configuration',
        name: 'Electron Configuration Calculator',
        description: 'Determine electron orbital arrangement',
        slug: 'electron-configuration-calculator',
        formula: 'Aufbau principle + Pauli + Hund\'s rule',
        variables: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰...',
        units: 'orbital notation',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'valence-electrons',
        name: 'Valence Electrons Calculator',
        description: 'Calculate number of valence electrons',
        slug: 'valence-electrons-calculator',
        formula: 'Group number (for main group elements)',
        variables: 'Outermost shell electrons',
        units: 'number of electrons',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'oxidation-state',
        name: 'Oxidation State Calculator',
        description: 'Determine oxidation numbers in compounds',
        slug: 'oxidation-state-calculator',
        formula: 'Σ(oxidation numbers) = total charge',
        variables: 'Apply oxidation state rules systematically',
        units: 'dimensionless integers',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'lewis-structure',
        name: 'Lewis Structure Calculator',
        description: 'Generate Lewis dot structures',
        slug: 'lewis-structure-calculator',
        formula: 'Octet rule: 8 electrons per atom',
        variables: 'Bonding and lone pair electrons',
        units: 'electron dots/lines',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'ionic-formula',
        name: 'Ionic Formula Calculator',
        description: 'Predict formulas of ionic compounds',
        slug: 'ionic-formula-calculator',
        formula: 'Cation charge + Anion charge = 0',
        variables: 'Cross-multiply charges to get subscripts',
        units: 'chemical formula',
        educationalLevel: ['high-school', 'college']
      },
    ]
  },
  {
    id: 'other-tools',
    name: 'Other Chemistry Tools',
    description: 'Unit conversions, spectroscopy, analytical chemistry, and specialized calculators.',
    semanticContext: 'Specialized chemistry tools cover diverse applications including analytical techniques, spectroscopic analysis, unit conversions, and advanced calculations for research and industrial applications. These calculators support laboratory work, data analysis, and practical chemistry applications.',
    calculators: [
      {
        id: 'unit-converter',
        name: 'Chemistry Unit Converter',
        description: 'Convert between chemistry units',
        slug: 'chemistry-unit-converter',
        formula: 'Conversion factors',
        variables: 'Length, mass, volume, pressure, temperature, energy',
        units: 'm, g, L, atm, K, J',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'density',
        name: 'Density Calculator',
        description: 'Calculate density from mass and volume',
        slug: 'density-calculator',
        formula: 'ρ = m/V',
        variables: 'ρ = density, m = mass, V = volume',
        units: 'g/cm³, g/mL, kg/L',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'avogadro',
        name: 'Avogadro\'s Number Calculator',
        description: 'Convert between moles and particles',
        slug: 'avogadro-calculator',
        formula: 'N = n × 6.022×10²³',
        variables: 'N = number of particles, n = moles',
        units: 'particles, mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'beer-lambert',
        name: 'Beer-Lambert Law Calculator',
        description: 'Calculate absorbance and concentration',
        slug: 'beer-lambert-calculator',
        formula: 'A = εcl',
        variables: 'A = absorbance, ε = molar absorptivity, c = concentration, l = path length',
        units: 'dimensionless, M⁻¹cm⁻¹, M, cm',
        educationalLevel: ['college']
      },
      {
        id: 'wavelength-frequency',
        name: 'Wavelength-Frequency Calculator',
        description: 'Convert between wavelength and frequency',
        slug: 'wavelength-frequency-calculator',
        formula: 'c = λν',
        variables: 'c = speed of light (3×10⁸ m/s), λ = wavelength, ν = frequency',
        units: 'nm, m, Hz, s⁻¹',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'mass-to-mole',
        name: 'Mass to Mole Converter',
        description: 'Convert between mass and moles',
        slug: 'mass-to-mole-converter',
        formula: 'n = m/M',
        variables: 'n = moles, m = mass, M = molar mass',
        units: 'mol, g, g/mol',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'significant-figures',
        name: 'Significant Figures Calculator',
        description: 'Round values to proper significant figures',
        slug: 'significant-figures-calculator',
        formula: 'Counting rules',
        variables: 'Non-zero digits, captive zeros, trailing zeros after decimal',
        units: 'digit count',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'scientific-notation',
        name: 'Scientific Notation Converter',
        description: 'Convert to/from scientific notation',
        slug: 'scientific-notation-calculator',
        formula: 'a × 10ⁿ',
        variables: 'a = coefficient (1 ≤ |a| < 10), n = exponent',
        units: 'standard form',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'titration',
        name: 'Titration Calculator',
        description: 'Calculate unknown concentrations from titration',
        slug: 'titration-calculator',
        formula: 'M₁V₁/n₁ = M₂V₂/n₂',
        variables: 'M = molarity, V = volume, n = stoichiometric coefficient',
        units: 'M, mL, L',
        educationalLevel: ['high-school', 'college']
      },
      {
        id: 'solubility-product',
        name: 'Solubility Product Calculator',
        description: 'Calculate Ksp and solubility',
        slug: 'solubility-product-calculator',
        formula: 'Ksp = [cation]ᵐ[anion]ⁿ',
        variables: 'Solubility equilibrium constant',
        units: 'varies (M, M², M³)',
        educationalLevel: ['college']
      },
      {
        id: 'ionic-strength',
        name: 'Ionic Strength Calculator',
        description: 'Calculate solution ionic strength',
        slug: 'ionic-strength-calculator',
        formula: 'I = 0.5Σ(cᵢzᵢ²)',
        variables: 'cᵢ = concentration, zᵢ = charge of ion i',
        units: 'M',
        educationalLevel: ['college']
      },
      {
        id: 'activity-coefficient',
        name: 'Activity Coefficient Calculator',
        description: 'Calculate activity coefficients in solutions',
        slug: 'activity-coefficient-calculator',
        formula: 'logγ = -Az²√I/(1+Bå√I)',
        variables: 'Debye-Hückel equation, γ = activity coefficient',
        units: 'dimensionless',
        educationalLevel: ['college']
      },
    ]
  },
];

export const allCalculators = calculatorCategories.flatMap(category => 
  category.calculators.map(calc => ({
    ...calc,
    category: category.name,
    categoryId: category.id,
  }))
);

export const getTotalCalculatorCount = () => allCalculators.length;

export const getCalculatorBySlug = (slug: string) => 
  allCalculators.find(calc => calc.slug === slug);

export const searchCalculators = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return allCalculators.filter(calc => 
    calc.name.toLowerCase().includes(lowerQuery) ||
    calc.description.toLowerCase().includes(lowerQuery) ||
    calc.category.toLowerCase().includes(lowerQuery)
  );
};
