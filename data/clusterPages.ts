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
      whyCalculationsNeeded: 'Accurate concentration calculations are crucial for preparing solutions with precise compositions, ensuring reproducible experimental results, maintaining safety in chemical handling, and achieving accurate analytical measurements in research and industry.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Solution concentration concepts developed in the 18th century with the work of chemists like Antoine Lavoisier and Joseph Priestley, who needed precise measurements for their experiments.',
      evolution: 'The mole concept introduced by Amedeo Avogadro in 1811 provided the foundation for modern concentration units. Molarity was defined in the late 19th century, while molality became important in the 20th century for temperature-independent measurements.',
      significance: 'Accurate concentration measurements are fundamental to all quantitative chemistry, enabling precise control of reaction conditions, analytical measurements, and industrial processes.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'M = n/V',
        name: 'Molarity',
        variables: 'M = molarity (mol/L), n = moles of solute, V = volume of solution (L)',
        units: 'M (mol/L), n (mol), V (L)',
        explanation: 'Molarity measures concentration as moles of solute per liter of solution. It changes with temperature due to volume expansion/contraction.'
      },
      {
        formula: 'm = n/mass_solvent',
        name: 'Molality',
        variables: 'm = molality (mol/kg), n = moles of solute, mass_solvent = mass of solvent (kg)',
        units: 'm (mol/kg), n (mol), mass_solvent (kg)',
        explanation: 'Molality measures concentration as moles of solute per kilogram of solvent. It is temperature-independent since mass does not change with temperature.'
      },
      {
        formula: 'C₁V₁ = C₂V₂',
        name: 'Dilution Formula',
        variables: 'C₁, C₂ = initial and final concentrations, V₁, V₂ = initial and final volumes',
        units: 'C (any concentration unit), V (any volume unit)',
        explanation: 'The dilution formula shows that the amount of solute remains constant during dilution. It applies to any concentration unit (molarity, normality, etc.).'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Molarity Calculations',
        description: 'Converting between moles, volume, and molarity to determine solution concentrations.',
        when: 'Used when preparing solutions of known concentration, calculating amounts needed for reactions, or analyzing solution composition.'
      },
      {
        type: 'Molality Calculations',
        description: 'Calculating concentration based on moles of solute and mass of solvent.',
        when: 'Preferred for temperature-sensitive applications like colligative properties, where constant concentration is needed regardless of temperature changes.'
      },
      {
        type: 'Dilution Problems',
        description: 'Calculating how to prepare solutions of lower concentration from stock solutions.',
        when: 'Common in laboratories when preparing working solutions from concentrated stock solutions, or when adjusting solution concentrations.'
      },
      {
        type: 'Normality Calculations',
        description: 'Working with equivalent concentrations for acids, bases, and redox reactions.',
        when: 'Used in acid-base titrations and redox titrations where reaction stoichiometry involves multiple H⁺ or e⁻ per molecule.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Stoichiometry Calculators',
          slug: 'stoichiometry-calculators',
          relationship: 'Concentration calculations are essential for solution stoichiometry, particularly in titrations where molarity is used instead of mass measurements.'
        },
        {
          topic: 'Acid-Base Calculators',
          slug: 'acid-base-calculators',
          relationship: 'pH calculations depend on concentration, and acid-base equilibrium constants are expressed in terms of concentration units.'
        },
        {
          topic: 'Physical Chemistry Calculators',
          slug: 'physical-chemistry-calculators',
          relationship: 'Colligative properties like boiling point elevation and freezing point depression depend on solution concentration.'
        }
      ],
      broaderConcepts: [
        'The Mole Concept - understanding that concentration expresses the number of particles per unit volume or mass',
        'Solution Chemistry - the behavior of substances dissolved in solvents',
        'Quantitative Analysis - measuring chemical amounts accurately',
        'Chemical Equilibrium - concentration affects reaction direction and equilibrium constants'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between molarity and molality?',
        answer: 'Molarity (M) is moles of solute per liter of solution and changes with temperature due to volume changes. Molality (m) is moles of solute per kilogram of solvent and is temperature-independent.'
      },
      {
        question: 'When should I use molality instead of molarity?',
        answer: 'Use molality when temperature changes are involved, particularly for colligative properties like boiling point elevation, freezing point depression, osmotic pressure, and vapor pressure lowering.'
      },
      {
        question: 'How do I prepare a solution of specific molarity?',
        answer: 'Calculate moles needed (n = M × V), convert to grams using molar mass (m = n × M), weigh the solute, dissolve in solvent, and adjust final volume to the desired amount.'
      },
      {
        question: 'What is the dilution formula and when do I use it?',
        answer: 'C₁V₁ = C₂V₂ relates initial concentration and volume to final concentration and volume. Use it when preparing dilute solutions from concentrated stock solutions.'
      },
      {
        question: 'What is normality and how does it differ from molarity?',
        answer: 'Normality (N) is equivalents of solute per liter of solution. For acids/bases, equivalents equal moles × number of H⁺/OH⁻. For redox, it equals moles × electrons transferred. Normality equals molarity × equivalents per mole.'
      },
      {
        question: 'How does temperature affect concentration measurements?',
        answer: 'Temperature affects molarity because liquids expand/contract, changing volume. Molality is unaffected since it uses mass. Always specify temperature when reporting molarity.'
      },
      {
        question: 'What are common concentration units besides molarity?',
        answer: 'Mass percent (% m/m), volume percent (% v/v), mass/volume percent (% m/v), mole fraction, molality, normality, and parts per million (ppm) are commonly used depending on the application.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Understanding reaction kinetics and equilibrium is essential for controlling chemical processes, optimizing reaction conditions, predicting product yields, and designing efficient chemical syntheses.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Chemical kinetics developed in the 19th century with studies of reaction rates by chemists like Ludwig Wilhelmy and Peter Waage.',
      evolution: 'The development of transition state theory and collision theory in the 20th century provided theoretical frameworks for understanding reaction mechanisms.',
      significance: 'Understanding reaction rates and equilibrium is crucial for controlling chemical processes and designing efficient syntheses.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'rate = k[A]^m[B]^n',
        name: 'Rate Law',
        variables: 'k = rate constant, [A], [B] = concentrations, m, n = reaction orders',
        units: 'rate (mol/L·s), k depends on reaction order',
        explanation: 'The rate law expresses how reaction rate depends on reactant concentrations.'
      },
      {
        formula: 'K = k_f/k_r',
        name: 'Equilibrium Constant',
        variables: 'K = equilibrium constant, k_f, k_r = forward and reverse rate constants',
        units: 'dimensionless or concentration units',
        explanation: 'Equilibrium constant relates forward and reverse reaction rates at equilibrium.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Rate Law Determination',
        description: 'Analyzing experimental data to determine reaction order and rate constant.',
        when: 'Used in kinetics experiments to understand reaction mechanisms.'
      },
      {
        type: 'Equilibrium Calculations',
        description: 'Calculating equilibrium concentrations and constants.',
        when: 'Used to predict reaction direction and equilibrium composition.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Thermodynamics Calculators',
          slug: 'thermodynamics-calculators',
          relationship: 'Thermodynamics provides the driving force, while kinetics determines the speed of reactions.'
        }
      ],
      broaderConcepts: [
        'Reaction Mechanisms',
        'Catalyst Effects',
        'Temperature Dependence'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between kinetics and thermodynamics?',
        answer: 'Thermodynamics tells us whether a reaction can occur (spontaneity), while kinetics tells us how fast it occurs.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Thermodynamic calculations are essential for understanding energy changes in chemical processes, predicting reaction feasibility, and designing energy-efficient chemical systems.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Thermodynamics developed in the 19th century with the work of Sadi Carnot, Rudolf Clausius, and William Thomson (Lord Kelvin).',
      evolution: 'The laws of thermodynamics were established through studies of heat engines and energy conversion, leading to modern chemical thermodynamics.',
      significance: 'Thermodynamics provides the fundamental principles governing energy changes in chemical systems and predicts reaction feasibility.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'ΔG = ΔH - TΔS',
        name: 'Gibbs Free Energy',
        variables: 'ΔG = free energy change, ΔH = enthalpy change, T = temperature, ΔS = entropy change',
        units: 'energy units (J, kJ)',
        explanation: 'Gibbs free energy determines reaction spontaneity: negative ΔG means spontaneous.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Enthalpy Calculations',
        description: 'Calculating heat changes in chemical reactions.',
        when: 'Used to determine energy released or absorbed in reactions.'
      },
      {
        type: 'Entropy Calculations',
        description: 'Calculating disorder changes in systems.',
        when: 'Used to understand spontaneity and equilibrium.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Chemical Reaction Calculators',
          slug: 'chemical-reaction-calculators',
          relationship: 'Thermodynamics provides the driving force for reactions, while kinetics determines the rate.'
        }
      ],
      broaderConcepts: [
        'Energy Conservation',
        'Spontaneity',
        'Equilibrium'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between ΔH and ΔG?',
        answer: 'ΔH is the heat of reaction at constant pressure, while ΔG includes both enthalpy and entropy changes to determine spontaneity.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Electrochemistry calculations are essential for understanding batteries, fuel cells, corrosion, and electrolysis processes, enabling the design of energy storage and conversion systems.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Electrochemistry began with Alessandro Volta\'s invention of the battery in 1800 and Michael Faraday\'s laws in the 1830s.',
      evolution: 'The development of the Nernst equation and modern electroanalytical techniques expanded the field significantly.',
      significance: 'Electrochemistry bridges electricity and chemistry, enabling batteries, fuel cells, and many industrial processes.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'E = E° - (RT/nF)lnQ',
        name: 'Nernst Equation',
        variables: 'E = cell potential, E° = standard potential, R = gas constant, T = temperature, n = electrons, F = Faraday constant, Q = reaction quotient',
        units: 'volts',
        explanation: 'The Nernst equation calculates cell potential under non-standard conditions.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Cell Potential Calculations',
        description: 'Calculating standard and non-standard cell potentials.',
        when: 'Used to predict spontaneity and measure electrode potentials.'
      },
      {
        type: 'Electrolysis Calculations',
        description: 'Determining products and quantities in electrolysis.',
        when: 'Used in electroplating and metal refining processes.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Thermodynamics Calculators',
          slug: 'thermodynamics-calculators',
          relationship: 'Cell potential is related to Gibbs free energy change.'
        }
      ],
      broaderConcepts: [
        'Redox Reactions',
        'Energy Conversion',
        'Electrode Processes'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between galvanic and electrolytic cells?',
        answer: 'Galvanic cells convert chemical energy to electrical energy (batteries), while electrolytic cells use electrical energy to drive non-spontaneous reactions.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Physical chemistry calculations are essential for understanding how matter behaves under different conditions, predicting phase changes, and explaining macroscopic properties from molecular interactions.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Physical chemistry emerged in the 19th century with the work of chemists like van der Waals and Arrhenius.',
      evolution: 'The development of quantum mechanics and statistical thermodynamics expanded the field significantly.',
      significance: 'Physical chemistry provides the theoretical foundation for understanding chemical behavior and properties.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'PV = nRT',
        name: 'Ideal Gas Law',
        variables: 'P = pressure, V = volume, n = moles, R = gas constant, T = temperature',
        units: 'various',
        explanation: 'The ideal gas law relates the physical properties of gases.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Gas Law Calculations',
        description: 'Solving for pressure, volume, temperature, or moles in gas systems.',
        when: 'Used in gas behavior predictions and laboratory gas measurements.'
      },
      {
        type: 'Colligative Property Calculations',
        description: 'Calculating boiling point elevation, freezing point depression, etc.',
        when: 'Used for solutions and phase change predictions.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Thermodynamics Calculators',
          slug: 'thermodynamics-calculators',
          relationship: 'Physical chemistry provides the microscopic basis for thermodynamic principles.'
        }
      ],
      broaderConcepts: [
        'Molecular Interactions',
        'Phase Behavior',
        'Energy Transfer'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between ideal and real gases?',
        answer: 'Ideal gases follow PV = nRT exactly, while real gases deviate due to intermolecular forces and molecular volume.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Organic chemistry calculations are crucial for predicting molecular structure, reactivity, and properties of carbon-based compounds, which form the basis of life and many materials.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Organic chemistry began with the study of compounds from living organisms in the early 19th century.',
      evolution: 'The development of structural theory and spectroscopic methods revolutionized organic chemistry.',
      significance: 'Organic chemistry is fundamental to understanding life processes and developing new materials.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'DBE = (2C + 2 + N - H - X)/2',
        name: 'Degree of Unsaturation',
        variables: 'C = carbons, N = nitrogens, H = hydrogens, X = halogens',
        units: 'dimensionless',
        explanation: 'Calculates the number of rings and double bonds in a molecule.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Structure Determination',
        description: 'Analyzing molecular formulas to determine possible structures.',
        when: 'Used in spectroscopic analysis and unknown compound identification.'
      },
      {
        type: 'Nomenclature',
        description: 'Systematic naming of organic compounds.',
        when: 'Essential for clear communication in organic chemistry.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Stoichiometry Calculators',
          slug: 'stoichiometry-calculators',
          relationship: 'Organic reactions follow stoichiometric principles for yield calculations.'
        }
      ],
      broaderConcepts: [
        'Molecular Structure',
        'Reactivity Patterns',
        'Functional Groups'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between constitutional isomers and stereoisomers?',
        answer: 'Constitutional isomers have different connectivity of atoms, while stereoisomers have the same connectivity but different spatial arrangements.'
      }
    ],
    
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
      whyCalculationsNeeded: 'Biochemical calculations are essential for understanding biological processes, drug design, genetic analysis, and maintaining physiological conditions.',
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
    
    // Historical & Conceptual Background
    historicalContext: {
      origin: 'Biochemistry emerged from the study of fermentation and enzyme action in the late 19th century.',
      evolution: 'The discovery of DNA structure and enzyme mechanisms revolutionized biochemistry in the 20th century.',
      significance: 'Biochemistry provides the chemical basis for understanding life processes and developing medical treatments.'
    },
    
    // Core Formulas
    coreFormulas: [
      {
        formula: 'v = (Vmax·[S])/(Km + [S])',
        name: 'Michaelis-Menten Equation',
        variables: 'v = reaction velocity, Vmax = maximum velocity, [S] = substrate concentration, Km = Michaelis constant',
        units: 'various',
        explanation: 'Describes enzyme-catalyzed reaction kinetics.'
      }
    ],
    
    // Types of Calculations
    calculationTypes: [
      {
        type: 'Enzyme Kinetics',
        description: 'Analyzing enzyme reaction rates and mechanisms.',
        when: 'Used in drug design and metabolic studies.'
      },
      {
        type: 'Protein Analysis',
        description: 'Calculating protein properties and concentrations.',
        when: 'Essential for protein purification and characterization.'
      }
    ],
    
    // Relationships With Other Topics
    relationships: {
      connectedTopics: [
        {
          topic: 'Acid-Base Calculators',
          slug: 'acid-base-calculators',
          relationship: 'Buffer systems in biochemistry rely on acid-base equilibrium calculations.'
        }
      ],
      broaderConcepts: [
        'Molecular Biology',
        'Metabolism',
        'Enzyme Function'
      ]
    },
    
    // FAQ Section
    faqs: [
      {
        question: 'What is the difference between Km and Vmax?',
        answer: 'Km is the substrate concentration at half-maximum velocity and indicates enzyme affinity. Vmax is the maximum reaction rate.'
      }
    ],
    
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
        when: 'When determining the atomic mass of elements with multiple natural isotopes using abundance data'
      },
      {
        type: 'Electron Configuration',
        description: 'Determine electron distribution in orbitals',
        when: 'When predicting chemical properties, bonding behavior, or ionization patterns of atoms and ions'
      },
      {
        type: 'Valence Electron Determination',
        description: 'Identify outermost electrons for bonding',
        when: 'When predicting chemical reactivity, oxidation states, or drawing Lewis structures'
      },
      {
        type: 'Quantum Number Calculations',
        description: 'Calculate n, l, ml, ms values for electrons',
        when: 'When describing electron states in atoms or understanding spectroscopic transitions'
      },
      {
        type: 'Oxidation State Assignment',
        description: 'Determine oxidation numbers in compounds',
        when: 'When balancing redox reactions, predicting compound formation, or analyzing electron transfer'
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
          slug: 'chemical-bonding-calculators',
          relationship: 'Electron configurations determine bonding capacity and molecular geometry'
        },
        {
          topic: 'Periodic Trends',
          slug: 'periodic-trends-calculators',
          relationship: 'Atomic structure explains periodic table organization and elemental properties'
        },
        {
          topic: 'Spectroscopy',
          slug: 'spectroscopy-calculators',
          relationship: 'Electron transitions between energy levels produce characteristic spectra'
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
  },

  {
    slug: 'acid-base-calculators',
    title: 'Acid-Base Calculators | pKa, Titration & Buffer Chemistry',
    h1: 'Acid-Base Calculators',
    metaDescription: 'Calculate pKa, Ka, and titration curves for acid-base chemistry. Accurate tools for acid dissociation, titration analysis, and buffer preparation.',
    categoryId: 'acid-base',

    entityDefinition: {
      intro: 'Acid-base calculators quantify proton-transfer equilibria between acids and bases, determining how strongly an acid or base ionizes in solution and how solutions behave during titration.',
      whatItMeasures: 'These calculators determine acid dissociation constants (Ka, pKa), titration curve points, equivalence points, and pH changes as acid or base is added to a solution.',
      whyCalculationsNeeded: 'Acid-base calculations are essential for standardizing solutions, determining unknown concentrations via titration, selecting appropriate indicators, and understanding buffer behavior in biological and industrial systems.',
      formulasInvolved: [
        'pKa = -log(Ka)',
        'Ka = [H⁺][A⁻]/[HA]',
        'M₁V₁/n₁ = M₂V₂/n₂ (titration)',
        'pH = pKa + log([A⁻]/[HA]) (Henderson-Hasselbalch)'
      ]
    },

    historicalContext: {
      origin: 'Acid-base theory evolved from Arrhenius\'s 1884 definition of acids and bases through dissociation, to the more general Brønsted-Lowry (1923) proton-transfer definition still used today.',
      evolution: 'Titration as a quantitative technique developed alongside analytical chemistry in the 19th century, with indicators and standardized solutions enabling precise concentration determination.',
      significance: 'Acid-base equilibrium underlies buffer systems in blood chemistry, industrial process control, water treatment, and virtually every quantitative wet-chemistry technique.'
    },

    whereUsed: {
      education: 'Introductory and analytical chemistry courses use titration and pKa calculations to teach equilibrium concepts and quantitative analysis technique.',
      labs: 'Analytical and quality-control labs use titration to standardize solutions and determine unknown concentrations of acids, bases, and other titratable species.',
      industry: 'Pharmaceutical, food, and water-treatment industries rely on acid-base titration for quality control and regulatory compliance testing.',
      research: 'Biochemistry and pharmacology research use pKa values to predict drug ionization state, solubility, and membrane permeability at physiological pH.'
    },

    coreFormulas: [
      {
        formula: 'pKa = -log(Ka)',
        name: 'pKa Definition',
        variables: 'Ka = acid dissociation constant',
        units: 'pKa (dimensionless), Ka (M)',
        explanation: 'pKa expresses the acid dissociation constant on a logarithmic scale; lower pKa means a stronger acid.'
      },
      {
        formula: 'M₁V₁/n₁ = M₂V₂/n₂',
        name: 'Titration Formula',
        variables: 'M = molarity, V = volume, n = stoichiometric coefficient of acid/base',
        units: 'M, mL or L',
        explanation: 'Relates the moles of acid and base at the equivalence point of a titration, allowing calculation of an unknown concentration.'
      }
    ],

    calculationTypes: [
      {
        type: 'pKa / Ka Conversion',
        description: 'Converting between acid dissociation constant and its logarithmic form.',
        when: 'Used to compare relative acid strengths and predict protonation state at a given pH.'
      },
      {
        type: 'Titration Curve Analysis',
        description: 'Calculating pH at any point during an acid-base titration, including the equivalence point.',
        when: 'Used to determine unknown concentrations and select appropriate indicators for titrations.'
      }
    ],

    commonMistakes: [
      'Confusing Ka with pKa - remember pKa = -log(Ka), so a smaller pKa means a stronger, larger Ka acid',
      'Using the wrong stoichiometric coefficient for polyprotic acids or bases in titration calculations',
      'Forgetting that at the equivalence point, moles of acid equal moles of base only when the stoichiometric ratio is 1:1',
      'Ignoring temperature dependence of Ka and Kw when precision matters'
    ],

    relationships: {
      connectedTopics: [
        {
          topic: 'Concentration and Solution Calculators',
          slug: 'concentration-and-solution-calculators',
          relationship: 'Titration relies on molarity calculations to relate volumes and concentrations of titrant and analyte.'
        },
        {
          topic: 'Biochemistry Calculators',
          slug: 'biochemistry-calculators',
          relationship: 'Buffer systems in biochemistry depend directly on acid-base equilibrium and the Henderson-Hasselbalch equation.'
        },
        {
          topic: 'Equilibrium Calculators',
          slug: 'equilibrium-calculators',
          relationship: 'Acid dissociation is itself a chemical equilibrium, governed by the same equilibrium-constant principles.'
        }
      ],
      broaderConcepts: [
        'Brønsted-Lowry Acid-Base Theory',
        'Chemical Equilibrium',
        'Buffer Chemistry'
      ]
    },

    faqs: [
      {
        question: 'What is the difference between Ka and pKa?',
        answer: 'Ka is the acid dissociation constant measuring how completely an acid ionizes in water. pKa is the negative logarithm of Ka (pKa = -log Ka), which compresses the wide range of Ka values into a more manageable scale. A lower pKa indicates a stronger acid.'
      },
      {
        question: 'How do you find the equivalence point in a titration?',
        answer: 'The equivalence point occurs when moles of added titrant exactly equal moles of analyte (accounting for stoichiometry). It is identified from the titration curve as the point of steepest pH change, or calculated directly from M₁V₁/n₁ = M₂V₂/n₂.'
      },
      {
        question: 'Why do titration calculators matter in real labs?',
        answer: 'Titration is one of the most common quantitative analysis techniques, used to standardize solutions, verify concentrations, and ensure product quality in pharmaceutical, food, and chemical manufacturing.'
      }
    ],

    relatedClusters: [
      'concentration-and-solution-calculators',
      'equilibrium-calculators',
      'biochemistry-calculators'
    ]
  },

  {
    slug: 'equilibrium-calculators',
    title: 'Equilibrium Calculators | Solubility Product & Ksp',
    h1: 'Equilibrium Calculators',
    metaDescription: 'Calculate solubility product constants (Ksp), predict precipitation, and analyze chemical equilibrium in saturated solutions.',
    categoryId: 'equilibrium',

    entityDefinition: {
      intro: 'Equilibrium calculators analyze the state where forward and reverse reaction rates are equal, focusing on solubility equilibria between dissolved ions and undissolved solid.',
      whatItMeasures: 'These calculators determine the solubility product constant (Ksp), molar solubility, the reaction quotient (Qsp), and whether a precipitate will form under given ion concentrations.',
      whyCalculationsNeeded: 'Solubility equilibrium calculations predict whether precipitation will occur, determine maximum safe ion concentrations, and are essential for water treatment, geology, and analytical separations.',
      formulasInvolved: [
        'Ksp = [cation]ᵐ[anion]ⁿ',
        'Qsp compared to Ksp predicts precipitation direction',
        'Molar solubility derived from Ksp and stoichiometry'
      ]
    },

    historicalContext: {
      origin: 'The concept of a solubility product emerged from Guldberg and Waage\'s law of mass action (1864), applied to sparingly soluble ionic compounds.',
      evolution: 'Ksp tables became standard analytical chemistry references in the 20th century, enabling systematic prediction of precipitation reactions.',
      significance: 'Solubility equilibrium principles underlie water hardness treatment, kidney stone formation, geological mineral formation, and qualitative analysis schemes.'
    },

    whereUsed: {
      education: 'General and analytical chemistry courses use Ksp calculations to teach equilibrium concepts and qualitative analysis of ion mixtures.',
      labs: 'Analytical labs use solubility product calculations to design selective precipitation and separation procedures for ion mixtures.',
      industry: 'Water treatment facilities use Ksp values to predict and prevent scale formation from calcium carbonate and other sparingly soluble salts.',
      research: 'Environmental and geochemistry research use solubility equilibria to model mineral dissolution and precipitation in natural water systems.'
    },

    coreFormulas: [
      {
        formula: 'Ksp = [cation]ᵐ[anion]ⁿ',
        name: 'Solubility Product Constant',
        variables: 'm, n = stoichiometric coefficients of the dissolved ions',
        units: 'varies (M, M², M³ depending on stoichiometry)',
        explanation: 'Ksp is the equilibrium constant for the dissolution of a sparingly soluble ionic compound, equal to the product of ion concentrations raised to their stoichiometric powers.'
      }
    ],

    calculationTypes: [
      {
        type: 'Molar Solubility from Ksp',
        description: 'Calculating how much of a compound dissolves in water given its Ksp value.',
        when: 'Used to predict the maximum concentration of a sparingly soluble salt in solution.'
      },
      {
        type: 'Precipitation Prediction',
        description: 'Comparing the reaction quotient (Qsp) to Ksp to determine if a precipitate will form.',
        when: 'Used when mixing solutions containing ions that could form an insoluble compound.'
      }
    ],

    commonMistakes: [
      'Forgetting to raise ion concentrations to their stoichiometric powers when writing the Ksp expression',
      'Confusing Ksp (a constant) with molar solubility (a concentration) - they are related but not the same value',
      'Ignoring the common ion effect, which reduces solubility when a shared ion is already present in solution',
      'Comparing Qsp and Ksp incorrectly - precipitation occurs when Qsp > Ksp, not the reverse'
    ],

    relationships: {
      connectedTopics: [
        {
          topic: 'Chemical Reaction Calculators',
          slug: 'chemical-reaction-calculators',
          relationship: 'Solubility equilibrium is a specific application of the general equilibrium constant principles used across chemical reactions.'
        },
        {
          topic: 'Concentration and Solution Calculators',
          slug: 'concentration-and-solution-calculators',
          relationship: 'Molar solubility calculations directly use molarity concepts to express ion concentrations at saturation.'
        },
        {
          topic: 'Acid-Base Calculators',
          slug: 'acid-base-calculators',
          relationship: 'Acid dissociation and solubility product are both equilibrium constants governed by the same law of mass action.'
        }
      ],
      broaderConcepts: [
        'Law of Mass Action',
        'Chemical Equilibrium',
        'Common Ion Effect'
      ]
    },

    faqs: [
      {
        question: 'What does Ksp tell you?',
        answer: 'Ksp (the solubility product constant) tells you the extent to which a sparingly soluble ionic compound dissolves in water at equilibrium. A smaller Ksp means the compound is less soluble.'
      },
      {
        question: 'How do you predict if a precipitate will form?',
        answer: 'Calculate the reaction quotient Qsp using the current ion concentrations. If Qsp > Ksp, a precipitate forms. If Qsp < Ksp, the solution remains unsaturated and no precipitate forms. If Qsp = Ksp, the solution is exactly saturated.'
      },
      {
        question: 'What is the common ion effect on solubility?',
        answer: 'Adding a common ion (already part of the dissolved compound) to a saturated solution shifts equilibrium to reduce solubility, per Le Chatelier\'s principle, since Ksp must remain constant.'
      }
    ],

    relatedClusters: [
      'chemical-reaction-calculators',
      'concentration-and-solution-calculators',
      'acid-base-calculators'
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
    .filter((item): item is ClusterPageData => item !== undefined);
};
