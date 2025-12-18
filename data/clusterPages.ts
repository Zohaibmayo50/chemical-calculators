/**
 * Topical Cluster Page Data - Enhanced for Semantic SEO
 * Supporting the homepage entity with deep topical authority
 */

export interface ClusterPageData {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  categoryId: string;
  
  // 1. Expanded Entity Definition
  entityDefinition: {
    intro: string;
    whatItMeasures: string;
    whyCalculationsNeeded: string;
    formulasInvolved: string[];
  };
  
  // 2. Historical & Conceptual Background
  historicalContext: {
    origin: string;
    evolution: string;
    significance: string;
  };
  
  // 3. Where Used (existing, enhanced)
  whereUsed: {
    education: string;
    labs: string;
    industry: string;
    research: string;
  };
  
  // 4. Core Formulas (enhanced with details)
  coreFormulas: Array<{
    formula: string;
    name: string;
    variables: string;
    units: string;
    explanation: string;
  }>;
  
  // 5. Types of Calculations
  calculationTypes: Array<{
    type: string;
    description: string;
    when: string;
  }>;
  
  // 6. Common Mistakes (existing)
  commonMistakes: string[];
  
  // 7. Relationship With Other Topics
  relationships: {
    connectedTopics: Array<{
      topic: string;
      slug: string;
      relationship: string;
    }>;
    broaderConcepts: string[];
  };
  
  // 8. FAQ Section
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  
  // Related Topics (for internal linking)
  relatedClusters: string[];
}

export const clusterPages: ClusterPageData[] = [
  {
    slug: 'stoichiometry-calculators',
    title: 'Stoichiometry Calculators | Mole Ratios & Chemical Equations',
    h1: 'Stoichiometry Calculators',
    metaDescription: 'Accurate stoichiometry calculators for chemical equations, mole ratios, limiting reagents, and percent yield. Calculate reaction quantities based on balanced equations.',
    categoryId: 'stoichiometry',
    
    // 1. Expanded Entity Definition
    entityDefinition: {
      intro: 'Stoichiometry is the branch of chemistry that deals with the quantitative relationships between reactants and products in chemical reactions. These calculators help determine how much of each substance is involved in a reaction based on balanced chemical equations.',
      whatItMeasures: 'Stoichiometry calculations measure mole ratios, mass relationships, limiting reagents, theoretical yields, percent yields, and empirical formulas. These measurements are grounded in the law of conservation of mass, which states that matter cannot be created or destroyed in chemical reactions.',
      whyCalculationsNeeded: 'Stoichiometric calculations are essential for predicting reaction outcomes, determining exact quantities of chemicals needed, optimizing resource usage, analyzing experimental results, and ensuring safety in chemical processes. Without precise stoichiometric analysis, chemical reactions would be unpredictable and wasteful.',
      formulasInvolved: [
        'n = m/M (moles = mass/molar mass)',
        '% Yield = (Actual/Theoretical) × 100',
        'Mole ratio from balanced equation coefficients',
        'Limiting reagent: smallest (moles/coefficient) value'
      ]
    },
    
    // 2. Historical & Conceptual Background
    historicalContext: {
      origin: 'The term "stoichiometry" derives from the Greek words "stoicheion" (element) and "metron" (measure). Jeremias Benjamin Richter first introduced the concept in 1792, defining it as the science of measuring quantitative proportions of chemical elements.',
      evolution: 'Stoichiometry evolved from simple mass relationships to complex molecular calculations as John Dalton developed atomic theory in the early 1800s. Amedeo Avogadro\'s hypothesis (1811) that equal volumes of gases contain equal numbers of molecules further refined stoichiometric principles, leading to the mole concept we use today.',
      significance: 'Modern stoichiometry forms the foundation of quantitative chemistry, enabling everything from pharmaceutical synthesis to industrial chemical production. It connects the microscopic world of atoms and molecules to the macroscopic world of grams and liters that we can measure and manipulate.'
    },
    
    // 3. Where Used
    whereUsed: {
      education: 'High school and college chemistry courses use stoichiometry to teach chemical equation balancing, reaction predictions, and quantitative analysis. Essential for AP Chemistry, IB Chemistry, and introductory university chemistry labs where students learn to predict reaction outcomes and analyze experimental data.',
      labs: 'Laboratory work requires stoichiometry to calculate precise amounts of reagents needed for experiments, determine expected product yields, analyze reaction efficiency, and troubleshoot unexpected results. Accurate stoichiometric calculations prevent waste and ensure experimental reproducibility.',
      industry: 'Chemical manufacturing relies on stoichiometry for scaling reactions from laboratory to production scale, optimizing raw material usage, minimizing waste, ensuring consistent product quality, and meeting regulatory requirements. Pharmaceutical companies use stoichiometry to ensure drug purity and dosage accuracy.',
      research: 'Research chemists use stoichiometric calculations to design experiments, predict reaction outcomes, analyze synthesis pathways, interpret experimental data, and develop new chemical processes. Stoichiometry is fundamental to materials science, catalysis research, and green chemistry initiatives.'
    },
    
    // 4. Core Formulas (enhanced)
    coreFormulas: [
      {
        formula: 'n = m/M',
        name: 'Mole Calculation',
        variables: 'n = moles, m = mass, M = molar mass',
        units: 'n (mol), m (g), M (g/mol)',
        explanation: 'Converts between mass and moles using molar mass from the periodic table. This is the fundamental conversion in all stoichiometric calculations, bridging the gap between measurable mass and the mole ratio from balanced equations.'
      },
      {
        formula: 'moles A / coef A = moles B / coef B',
        name: 'Mole Ratio',
        variables: 'moles A, B = amounts of substances; coef A, B = balanced equation coefficients',
        units: 'dimensionless ratio',
        explanation: 'Relates the amounts of different substances in a reaction using coefficients from the balanced chemical equation. This ratio remains constant and allows calculation of any unknown quantity if one is known.'
      },
      {
        formula: '% Yield = (Actual Yield / Theoretical Yield) × 100',
        name: 'Percent Yield',
        variables: 'Actual Yield = experimental amount obtained, Theoretical Yield = calculated maximum amount',
        units: 'both yields in same units (g, mol, etc.), result in %',
        explanation: 'Measures reaction efficiency by comparing experimental results to theoretical predictions. Values less than 100% indicate losses due to side reactions, incomplete reactions, purification losses, or measurement errors.'
      },
      {
        formula: 'Limiting Reagent = smallest (moles / coefficient)',
        name: 'Limiting Reagent Determination',
        variables: 'moles = amount of each reactant, coefficient = stoichiometric coefficient',
        units: 'mol',
        explanation: 'Identifies which reactant will be completely consumed first, limiting the amount of product formed. All other reactants are in excess. The limiting reagent determines the theoretical yield.'
      }
    ],
    
    // 5. Types of Calculations
    calculationTypes: [
      {
        type: 'Mass-to-Mass Stoichiometry',
        description: 'Converting the mass of one substance to the mass of another using mole ratios and molar masses.',
        when: 'Used when you know the mass of a reactant and need to find the mass of product formed, or vice versa. Most common in laboratory settings where masses are directly measured.'
      },
      {
        type: 'Limiting Reagent Problems',
        description: 'Determining which reactant runs out first when multiple reactants are present in non-stoichiometric amounts.',
        when: 'Essential when working with real reactions where exact stoichiometric amounts are rarely used. Critical for optimizing reactant ratios and predicting actual product amounts.'
      },
      {
        type: 'Percent Yield Calculations',
        description: 'Comparing theoretical maximum product amount with actual experimental yield to assess reaction efficiency.',
        when: 'Used to evaluate experimental results, identify problems in procedures, compare reaction conditions, and calculate losses in multi-step syntheses.'
      },
      {
        type: 'Empirical and Molecular Formulas',
        description: 'Determining the simplest whole-number ratio of elements (empirical) and the actual molecular formula using mass composition data.',
        when: 'Used in analytical chemistry to identify unknown compounds, verify synthesis products, and determine compound purity from combustion analysis or elemental analysis data.'
      },
      {
        type: 'Solution Stoichiometry',
        description: 'Combining concentration calculations with stoichiometry for reactions in solution, particularly acid-base and precipitation reactions.',
        when: 'Essential for titrations, solution-phase synthesis, and any chemistry calculators involving dissolved reactants where molarity is used instead of direct mass measurements.'
      }
    ],
    
    // 6. Common Mistakes
    commonMistakes: [
      'Forgetting to balance chemical equations before calculating - all stoichiometric calculations require balanced equations as the foundation',
      'Using mass ratios directly instead of converting to mole ratios first - chemical reactions occur in mole ratios, not mass ratios',
      'Not identifying the limiting reagent correctly - comparing moles directly without dividing by stoichiometric coefficients',
      'Mixing up theoretical yield (maximum possible) with actual yield (experimentally obtained) - critical for percent yield calculations',
      'Ignoring significant figures based on measurement precision - stoichiometric answers should not be more precise than the measurements',
      'Using incorrect molar masses from the periodic table - must account for all atoms in molecular formulas and use correct atomic masses',
      'Forgetting to convert units consistently - mixing grams with kilograms or mL with L leads to errors by factors of 1000'
    ],
    
    // 7. Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Concentration and Solution Calculators',
          slug: 'concentration-and-solution-calculators',
          relationship: 'Stoichiometry extends to solution chemistry through molarity calculations, where chemical amounts are expressed as concentration rather than mass. Titration stoichiometry combines both concepts.'
        },
        {
          topic: 'Chemical Reaction Calculators',
          slug: 'chemical-reaction-calculators',
          relationship: 'Reaction equilibrium and kinetics build upon stoichiometric principles, using mole ratios to predict equilibrium positions and calculate reaction rates.'
        },
        {
          topic: 'Thermodynamics Calculators',
          slug: 'thermodynamics-calculators',
          relationship: 'Enthalpy calculations require stoichiometric ratios to determine energy changes per mole of reactant or product, connecting energy with matter.'
        }
      ],
      broaderConcepts: [
        'Law of Conservation of Mass - the foundational principle underlying all stoichiometric calculations',
        'Atomic Theory - understanding that matter consists of discrete atoms that combine in fixed ratios',
        'The Mole Concept - Avogadro\'s number provides the bridge between atomic scale and laboratory scale',
        'Chemical Bonding - understanding how atoms combine determines stoichiometric coefficients in balanced equations'
      ]
    },
    
    // 8. FAQ Section
    faqs: [
      {
        question: 'What is stoichiometry in simple terms?',
        answer: 'Stoichiometry is the calculation of quantities in chemical reactions. It uses balanced chemical equations to determine how much of each substance is needed or produced in a reaction, similar to following a recipe in cooking where proportions must be exact.'
      },
      {
        question: 'Why do we need stoichiometry calculations?',
        answer: 'Stoichiometry is essential for predicting how much product a reaction will make, determining how much reactant to use, avoiding waste of expensive chemicals, ensuring safety by preventing excess reactants, and analyzing experimental results to understand reaction efficiency.'
      },
      {
        question: 'What is the difference between theoretical yield and actual yield?',
        answer: 'Theoretical yield is the maximum amount of product that could form based on stoichiometric calculations, assuming perfect conditions. Actual yield is what you actually obtain in the lab, which is almost always less due to incomplete reactions, side reactions, losses during purification, and experimental errors.'
      },
      {
        question: 'How do you identify the limiting reagent?',
        answer: 'Convert all reactants to moles, divide each by its coefficient in the balanced equation, and the reactant with the smallest result is the limiting reagent. This reactant will be completely consumed and determines the maximum amount of product that can form.'
      },
      {
        question: 'Why must chemical equations be balanced for stoichiometry?',
        answer: 'Balanced equations show the exact mole ratios in which substances react and form products, following the law of conservation of mass. Without balancing, stoichiometric calculations would violate fundamental chemical laws and give incorrect results.'
      },
      {
        question: 'What units are used in stoichiometric calculations?',
        answer: 'Stoichiometry primarily uses moles (mol) because chemical reactions occur in mole ratios. However, calculations often start with mass (grams), volume (liters for gases or solutions), or particles (atoms, molecules), all of which can be converted to moles for calculation purposes.'
      },
      {
        question: 'How does stoichiometry apply to real-world chemistry?',
        answer: 'Industries use stoichiometry to manufacture chemicals efficiently, pharmaceutical companies ensure precise drug formulations, environmental scientists calculate pollutant quantities, and forensic chemists analyze chemical evidence. Any field involving chemical reactions requires stoichiometric analysis.'
      }
    ],
    
    relatedClusters: [
      'concentration-and-solution-calculators',
      'chemical-reaction-calculators',
      'atomic-structure-calculators'
    ]
  },
  
  {
    slug: 'concentration-and-solution-calculators',
    title: 'Solution Concentration Calculators | Molarity, Molality & Dilution',
    h1: 'Concentration and Solution Calculators',
    metaDescription: 'Calculate solution concentrations with molarity, molality, normality, and dilution calculators. Accurate tools for preparing chemical solutions.',
    categoryId: 'solutions-concentrations',
    
    entityDefinition: {
      intro: 'Solution concentration calculations are fundamental to chemistry, determining the amount of solute dissolved in a given quantity of solvent or solution. These calculators help prepare solutions with precise concentrations.',
      whatItMeasures: 'Concentration calculators measure molarity (mol/L), molality (mol/kg), normality, mass percent, parts per million (ppm), and perform dilution calculations using the relationship C₁V₁ = C₂V₂.',
      formulasInvolved: [
        'M = n/V (Molarity = moles/volume)',
        'm = n/mass_solvent (Molality)',
        'C₁V₁ = C₂V₂ (Dilution)',
        '% = (mass_solute/mass_solution) × 100'
      ]
    },
    
    whereUsed: {
      education: 'Chemistry students learn solution preparation in lab courses, preparing standard solutions for titrations, acid-base experiments, and quantitative analysis.',
      labs: 'Analytical chemistry labs require precise solution concentrations for titrations, spectroscopy, chromatography, and other analytical techniques.',
      industry: 'Pharmaceutical and chemical industries use concentration calculations for formulation, quality control, and regulatory compliance.',
      research: 'Research laboratories prepare reagent solutions, buffer systems, and reaction mixtures requiring accurate concentration calculations.'
    },
    
    commonMistakes: [
      'Confusing molarity with molality',
      'Using solution mass instead of solvent mass for molality',
      'Forgetting volume changes when diluting',
      'Not converting units consistently (mL to L)',
      'Using final volume instead of volume added in dilutions',
      'Ignoring temperature effects on volume measurements'
    ],
    
    relatedClusters: [
      'stoichiometry-calculators',
      'physical-chemistry-calculators',
      'biochemistry-calculators'
    ]
  },
  
  {
    slug: 'chemical-reaction-calculators',
    title: 'Chemical Reaction Calculators | Equilibrium, Kinetics & Rates',
    h1: 'Chemical Reaction Calculators',
    metaDescription: 'Calculate reaction rates, equilibrium constants, activation energy, and reaction quotients. Tools for chemical kinetics and equilibrium analysis.',
    categoryId: 'chemical-reactions',
    
    entityDefinition: {
      intro: 'Chemical reaction calculators analyze the kinetics, equilibrium, and energetics of chemical processes. These tools predict reaction behavior, calculate rate constants, and determine equilibrium positions.',
      whatItMeasures: 'These calculators determine equilibrium constants (Kc, Kp), reaction quotients (Q), rate constants, activation energy (Ea), half-lives, and predict reaction spontaneity.',
      formulasInvolved: [
        'K = [products]/[reactants] at equilibrium',
        'k = A·e^(-Ea/RT) (Arrhenius equation)',
        't₁/₂ = ln(2)/k (first-order half-life)',
        'ΔG = ΔH - TΔS (Gibbs free energy)'
      ]
    },
    
    whereUsed: {
      education: 'Physical chemistry and kinetics courses teach students how to analyze reaction mechanisms, determine rate laws, and predict equilibrium positions.',
      labs: 'Kinetics experiments measure reaction rates, determine rate laws, and calculate activation energies from temperature-dependent rate constants.',
      industry: 'Chemical process optimization requires understanding reaction kinetics for reactor design, yield maximization, and process control.',
      research: 'Mechanistic studies use kinetic data to propose reaction mechanisms, identify intermediates, and understand catalytic processes.'
    },
    
    commonMistakes: [
      'Using concentrations instead of activities for equilibrium',
      'Confusing Q with K',
      'Forgetting to use absolute temperature (Kelvin)',
      'Not considering stoichiometric coefficients as exponents',
      'Mixing up forward and reverse rate constants',
      'Assuming equilibrium constant changes with initial concentrations'
    ],
    
    relatedClusters: [
      'thermodynamics-calculators',
      'stoichiometry-calculators',
      'physical-chemistry-calculators'
    ]
  },
  
  {
    slug: 'thermodynamics-calculators',
    title: 'Chemical Thermodynamics Calculators | Enthalpy, Entropy & Gibbs Energy',
    h1: 'Thermodynamics Calculators',
    metaDescription: 'Calculate thermodynamic properties including enthalpy, entropy, Gibbs free energy, and heat capacity. Predict reaction spontaneity.',
    categoryId: 'thermodynamics',
    
    entityDefinition: {
      intro: 'Chemical thermodynamics calculators analyze energy changes in chemical systems, predicting whether reactions occur spontaneously and how much energy they release or consume.',
      whatItMeasures: 'These tools calculate enthalpy changes (ΔH), entropy changes (ΔS), Gibbs free energy (ΔG), internal energy (ΔU), heat capacity, and calorimetry measurements.',
      formulasInvolved: [
        'ΔG = ΔH - TΔS (Gibbs free energy)',
        'ΔU = Q - W (First law)',
        'q = mcΔT (Heat transfer)',
        "ΔH = ΣH_products - ΣH_reactants (Hess's law)"
      ]
    },
    
    whereUsed: {
      education: 'Thermodynamics forms a core component of physical chemistry courses, teaching students about energy, spontaneity, and equilibrium.',
      labs: 'Calorimetry experiments measure heat of reaction, heat capacity, and enthalpy changes for various processes.',
      industry: 'Process engineering uses thermodynamic calculations for reactor design, energy efficiency, and safety analysis.',
      research: 'Computational chemistry and materials research rely on thermodynamic data to predict stability and reaction feasibility.'
    },
    
    commonMistakes: [
      'Using Celsius instead of Kelvin for temperature',
      'Forgetting to account for phase changes',
      'Confusing system and surroundings in sign conventions',
      'Not using standard state conditions when required',
      'Mixing up ΔH and ΔG for spontaneity predictions',
      "Incorrectly applying Hess's law with reversed reactions"
    ],
    
    relatedClusters: [
      'chemical-reaction-calculators',
      'physical-chemistry-calculators',
      'electrochemistry-calculators'
    ]
  },
  
  {
    slug: 'electrochemistry-calculators',
    title: 'Electrochemistry Calculators | Cell Potential, Nernst & Faraday',
    h1: 'Electrochemistry Calculators',
    metaDescription: 'Calculate electrode potentials, cell voltages, and electrolysis quantities using Nernst equation and Faraday laws. Electrochemistry tools.',
    categoryId: 'electrochemistry',
    
    entityDefinition: {
      intro: 'Electrochemistry calculators analyze the relationship between electrical energy and chemical reactions, calculating cell potentials, predicting redox spontaneity, and determining electrolysis products.',
      whatItMeasures: 'These calculators determine standard cell potentials, Nernst equation results, electrolysis quantities via Faraday\'s laws, and oxidation-reduction relationships.',
      formulasInvolved: [
        'E = E° - (RT/nF)lnQ (Nernst equation)',
        'E°_cell = E°_cathode - E°_anode',
        'm = (Q × M)/(n × F) (Faraday\'s law)',
        'ΔG = -nFE (Free energy and cell potential)'
      ]
    },
    
    whereUsed: {
      education: 'Electrochemistry teaches students about batteries, corrosion, electrolysis, and the relationship between electricity and chemistry.',
      labs: 'Electrochemical experiments measure electrode potentials, construct galvanic cells, and perform electrolysis calculations.',
      industry: 'Battery development, electroplating, corrosion prevention, and metal refining all rely on electrochemical principles.',
      research: 'Electroanalytical chemistry, fuel cell research, and materials electrochemistry use these calculations extensively.'
    },
    
    commonMistakes: [
      'Confusing anode and cathode in different cell types',
      'Using concentrations instead of activities in Nernst equation',
      'Forgetting to balance electrons in half-reactions',
      'Mixing up oxidation and reduction potentials',
      'Not using Faraday constant correctly (96485 C/mol)',
      'Assuming standard conditions when they don\'t apply'
    ],
    
    relatedClusters: [
      'thermodynamics-calculators',
      'chemical-reaction-calculators',
      'physical-chemistry-calculators'
    ]
  },
  
  {
    slug: 'physical-chemistry-calculators',
    title: 'Physical Chemistry Calculators | Gas Laws & Colligative Properties',
    h1: 'Physical Chemistry Calculators',
    metaDescription: 'Calculate gas laws, colligative properties, vapor pressure, and phase behavior. Tools for physical chemistry calculations.',
    categoryId: 'physical-chemistry',
    
    entityDefinition: {
      intro: 'Physical chemistry calculators apply mathematical principles to understand the physical properties and behavior of chemical systems, from gas laws to colligative properties.',
      whatItMeasures: 'These tools calculate ideal gas law relationships, real gas behavior, colligative properties (boiling point elevation, freezing point depression, osmotic pressure), and vapor pressure.',
      formulasInvolved: [
        'PV = nRT (Ideal gas law)',
        'ΔTb = Kb·m (Boiling point elevation)',
        'ΔTf = Kf·m (Freezing point depression)',
        'π = MRT (Osmotic pressure)'
      ]
    },
    
    whereUsed: {
      education: 'Physical chemistry courses cover gas laws, thermodynamics, kinetics, and quantum mechanics using these fundamental calculations.',
      labs: 'Gas law experiments, colligative property measurements, and phase diagram studies require these calculations.',
      industry: 'Chemical engineering, refrigeration, and process design applications rely on physical chemistry principles.',
      research: 'Atmospheric chemistry, materials science, and computational modeling use physical chemistry calculations.'
    },
    
    commonMistakes: [
      'Using wrong gas constant value for units',
      'Forgetting to convert temperature to Kelvin',
      'Confusing molarity with molality for colligative properties',
      'Not accounting for van\'t Hoff factor for ionic compounds',
      'Using ideal gas law for high pressure/low temperature',
      'Ignoring vapor pressure of solvent in Raoult\'s law'
    ],
    
    relatedClusters: [
      'thermodynamics-calculators',
      'concentration-and-solution-calculators',
      'chemical-reaction-calculators'
    ]
  },
  
  {
    slug: 'organic-chemistry-calculators',
    title: 'Organic Chemistry Calculators | Structure, Nomenclature & Analysis',
    h1: 'Organic Chemistry Calculators',
    metaDescription: 'Calculate degree of unsaturation, molecular geometry, and analyze organic structures. Tools for organic chemistry analysis.',
    categoryId: 'organic-chemistry',
    
    entityDefinition: {
      intro: 'Organic chemistry calculators analyze carbon-containing compounds, determining structural features, nomenclature, and molecular properties essential for understanding organic reactions.',
      whatItMeasures: 'These calculators determine degree of unsaturation (DBE), molecular geometry using VSEPR theory, functional groups, isomer counts, and hybridization states.',
      formulasInvolved: [
        'DBE = (2C + 2 + N - H - X)/2',
        'Steric number = bonds + lone pairs',
        'Molecular formula from empirical formula',
        'Constitutional isomer counting formulas'
      ]
    },
    
    whereUsed: {
      education: 'Organic chemistry courses teach structure determination, nomenclature, reaction mechanisms, and spectroscopic analysis.',
      labs: 'Synthesis labs use these calculations for yield determination, product identification, and reaction planning.',
      industry: 'Pharmaceutical, polymer, and fine chemical industries rely on organic structure analysis for drug design and synthesis.',
      research: 'Organic synthesis, natural product chemistry, and medicinal chemistry research require detailed structural analysis.'
    },
    
    commonMistakes: [
      'Incorrectly counting hydrogen atoms in condensed formulas',
      'Forgetting to account for halogens in DBE formula',
      'Confusing constitutional isomers with stereoisomers',
      'Misidentifying hybridization from molecular geometry',
      'Not considering resonance in structure determination',
      'Incorrect IUPAC naming priority rules'
    ],
    
    relatedClusters: [
      'biochemistry-calculators',
      'atomic-structure-calculators',
      'stoichiometry-calculators'
    ]
  },
  
  {
    slug: 'biochemistry-calculators',
    title: 'Biochemistry Calculators | Enzyme Kinetics & Protein Analysis',
    h1: 'Biochemistry Calculators',
    metaDescription: 'Calculate enzyme kinetics, protein molecular weight, DNA concentration, and buffer pH. Biochemistry calculation tools.',
    categoryId: 'biochemistry',
    
    entityDefinition: {
      intro: 'Biochemistry calculators apply chemical principles to biological systems, analyzing enzyme kinetics, protein properties, DNA/RNA calculations, and buffer systems.',
      whatItMeasures: 'These tools calculate Michaelis-Menten kinetics, protein molecular weight, isoelectric point, DNA/RNA concentration from absorbance, melting temperature, and buffer capacity.',
      formulasInvolved: [
        'v = (Vmax·[S])/(Km + [S]) (Michaelis-Menten)',
        'pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch)',
        '[DNA] = A₂₆₀ × 50 μg/mL',
        'Tm = 4(G+C) + 2(A+T) for short sequences'
      ]
    },
    
    whereUsed: {
      education: 'Biochemistry courses teach metabolism, enzyme mechanisms, protein structure, and molecular biology techniques.',
      labs: 'Molecular biology labs use these calculations for enzyme assays, protein purification, DNA quantification, and buffer preparation.',
      industry: 'Biotechnology and pharmaceutical companies rely on biochemistry calculations for drug development and quality control.',
      research: 'Enzyme engineering, protein design, and genomics research require extensive biochemical calculations.'
    },
    
    commonMistakes: [
      'Confusing Km with Kd or affinity',
      'Using wrong extinction coefficient for DNA/RNA',
      'Forgetting to account for water loss in peptide bonds',
      'Not considering temperature for Tm calculations',
      'Using Henderson-Hasselbalch outside valid pH range',
      'Ignoring ionic strength effects on buffer systems'
    ],
    
    relatedClusters: [
      'organic-chemistry-calculators',
      'concentration-and-solution-calculators',
      'chemical-reaction-calculators'
    ]
  },
  
  {
    slug: 'atomic-structure-calculators',
    title: 'Atomic Structure Calculators | Electron Configuration & Isotopes',
    h1: 'Atomic Structure Calculators',
    metaDescription: 'Calculate atomic mass, electron configuration, and valence electrons. Tools for understanding atomic structure.',
    categoryId: 'general-chemistry',
    
    entityDefinition: {
      intro: 'Atomic structure calculators help understand the fundamental building blocks of matter, determining electron configurations, atomic masses, and elemental properties.',
      whatItMeasures: 'These calculators determine average atomic mass from isotopes, electron configurations, valence electrons, oxidation states, and Lewis structures.',
      whyCalculationsNeeded: 'Understanding atomic structure is fundamental to all of chemistry. These calculations help predict chemical behavior, bonding patterns, and elemental properties based on electronic configurations.',
      formulasInvolved: [
        'Average atomic mass = Σ(abundance × mass)',
        'Aufbau principle for electron filling',
        'Valence electrons = group number',
        'Oxidation state rules and calculations'
      ]
    },
    
    historicalContext: {
      origin: 'The concept of atomic structure emerged from John Dalton\'s atomic theory (1808) and evolved through J.J. Thomson\'s electron discovery (1897) and Ernest Rutherford\'s nuclear model (1911).',
      evolution: 'Niels Bohr introduced quantum energy levels (1913), followed by the wave mechanical model from Schrödinger and Heisenberg (1926), establishing our modern understanding of electron configurations and orbital theory.',
      significance: 'Atomic structure theory forms the foundation of chemistry, explaining the periodic table organization, chemical bonding, spectroscopy, and the behavior of all matter at the molecular level.'
    },
    
    whereUsed: {
      education: 'General chemistry introduces atomic structure, periodic trends, and chemical bonding using these fundamental concepts.',
      labs: 'Spectroscopy experiments and elemental analysis require understanding of atomic structure and electron configurations.',
      industry: 'Materials science and semiconductor industries use atomic structure principles for material design.',
      research: 'Computational chemistry, spectroscopy, and quantum chemistry research rely on atomic structure calculations.'
    },

    coreFormulas: [
      {
        formula: 'Average Atomic Mass = Σ(isotope abundance × isotope mass)',
        name: 'Average Atomic Mass',
        variables: 'abundance (fractional or %), isotope mass (amu)',
        units: 'amu (atomic mass units)',
        explanation: 'Calculates the weighted average mass of all naturally occurring isotopes of an element based on their relative abundances.'
      },
      {
        formula: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰...',
        name: 'Electron Configuration (Aufbau Principle)',
        variables: 'atomic number, orbital energies',
        units: 'dimensionless (electron count)',
        explanation: 'Describes the distribution of electrons in atomic orbitals following the Aufbau principle (lowest energy first), Pauli exclusion principle, and Hund\'s rule.'
      },
      {
        formula: 'Valence e⁻ = Group Number (for main group elements)',
        name: 'Valence Electrons',
        variables: 'group number, electron configuration',
        units: 'electron count',
        explanation: 'Determines the number of electrons in the outermost shell that participate in chemical bonding and reactions.'
      },
      {
        formula: 'E = -13.6 eV × (Z²/n²)',
        name: 'Bohr Energy Level',
        variables: 'Z (atomic number), n (principal quantum number)',
        units: 'eV (electron volts)',
        explanation: 'Calculates the energy of electrons in hydrogen-like atoms at different quantum levels, fundamental to understanding atomic spectra.'
      }
    ],

    calculationTypes: [
      {
        type: 'Isotope Average Atomic Mass',
        description: 'Calculate weighted average mass from isotope data',
        whenToUse: 'When determining the atomic mass of elements with multiple natural isotopes using abundance data'
      },
      {
        type: 'Electron Configuration',
        description: 'Determine electron distribution in orbitals',
        whenToUse: 'When predicting chemical properties, bonding behavior, or ionization patterns of atoms and ions'
      },
      {
        type: 'Valence Electron Determination',
        description: 'Identify outermost electrons for bonding',
        whenToUse: 'When predicting chemical reactivity, oxidation states, or drawing Lewis structures'
      },
      {
        type: 'Quantum Number Calculations',
        description: 'Calculate n, l, ml, ms values for electrons',
        whenToUse: 'When describing electron states in atoms or understanding spectroscopic transitions'
      },
      {
        type: 'Oxidation State Assignment',
        description: 'Determine oxidation numbers in compounds',
        whenToUse: 'When balancing redox reactions, predicting compound formation, or analyzing electron transfer'
      }
    ],
    
    commonMistakes: [
      'Filling electron orbitals in wrong order - follow the Aufbau principle: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...',
      'Forgetting electron configuration exceptions like Chromium [Ar]3d⁵4s¹ and Copper [Ar]3d¹⁰4s¹',
      'Confusing valence electrons with total electrons - valence electrons are only in the outermost shell',
      'Not using weighted average for atomic mass - multiply each isotope mass by its fractional abundance',
      'Incorrectly applying oxidation state rules - follow priority: free elements (0), monoatomic ions, O (-2), H (+1)',
      'Ignoring Hund\'s rule when filling orbitals - fill each orbital singly before pairing electrons'
    ],

    relationships: {
      connectedTopics: [
        {
          topic: 'Chemical Bonding',
          relationship: 'Electron configurations determine bonding capacity and molecular geometry',
          linkTo: '#'
        },
        {
          topic: 'Periodic Trends',
          relationship: 'Atomic structure explains periodic table organization and elemental properties',
          linkTo: '#'
        },
        {
          topic: 'Spectroscopy',
          relationship: 'Electron transitions between energy levels produce characteristic spectra',
          linkTo: '#'
        }
      ],
      broaderConcepts: [
        'Quantum Mechanics',
        'General Chemistry',
        'Physical Chemistry',
        'Inorganic Chemistry'
      ]
    },

    faqs: [
      {
        question: 'How do you calculate the average atomic mass of an element?',
        answer: 'Multiply each isotope\'s mass by its fractional abundance (as a decimal), then sum all products. For example, if chlorine has Cl-35 (75% abundance, 34.97 amu) and Cl-37 (25% abundance, 36.97 amu): (0.75 × 34.97) + (0.25 × 36.97) = 35.45 amu.'
      },
      {
        question: 'What is the Aufbau principle and why does it matter?',
        answer: 'The Aufbau principle states that electrons fill atomic orbitals starting from the lowest energy level to highest. It matters because it predicts electron configurations, which determine chemical properties, bonding behavior, and reactivity of elements.'
      },
      {
        question: 'Why are chromium and copper exceptions to electron configuration rules?',
        answer: 'Chromium [Ar]3d⁵4s¹ and copper [Ar]3d¹⁰4s¹ are exceptions because half-filled (d⁵) and fully-filled (d¹⁰) d-orbitals provide extra stability due to electron exchange energy and symmetry. The stability gained outweighs the energy cost of promoting an electron from 4s to 3d.'
      },
      {
        question: 'How do you determine the number of valence electrons?',
        answer: 'For main group elements, the number of valence electrons equals the group number (Group 1 has 1, Group 17 has 7). For transition metals, count electrons in the outermost s and d orbitals. Valence electrons are crucial for predicting bonding and chemical reactivity.'
      },
      {
        question: 'What is the difference between atomic number and mass number?',
        answer: 'Atomic number (Z) is the number of protons, which defines the element and equals the number of electrons in a neutral atom. Mass number (A) is the sum of protons plus neutrons, which varies among isotopes of the same element.'
      },
      {
        question: 'How do quantum numbers describe electrons in atoms?',
        answer: 'Four quantum numbers describe each electron: n (principal, energy level/shell), l (angular momentum, orbital shape), ml (magnetic, orbital orientation), and ms (spin, +½ or -½). These numbers uniquely identify each electron\'s state and follow specific rules (Pauli exclusion principle).'
      },
      {
        question: 'Why is understanding atomic structure important in chemistry?',
        answer: 'Atomic structure explains all chemical behavior: why elements are arranged in the periodic table, how chemical bonds form, why elements react the way they do, and what properties compounds will have. It\'s the foundation connecting physics to all chemistry subdisciplines.'
      }
    ],
    
    relatedClusters: [
      'stoichiometry-calculators',
      'organic-chemistry-calculators',
      'physical-chemistry-calculators'
    ]
  }
];

// Helper function to get cluster page by slug
export const getClusterPageBySlug = (slug: string) => 
  clusterPages.find(page => page.slug === slug);

// Helper function to get related cluster pages
export const getRelatedClusterPages = (slug: string) => {
  const currentPage = getClusterPageBySlug(slug);
  if (!currentPage) return [];
  
  return currentPage.relatedClusters
    .map(relatedSlug => getClusterPageBySlug(relatedSlug))
    .filter(Boolean);
};
