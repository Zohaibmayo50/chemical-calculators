export default function FormulasExplained() {
  const formulas = [
    {
      name: 'Molarity',
      formula: 'M = n / V',
      explanation: 'Molarity measures the molar concentration of a solution',
      variables: 'M = molarity, n = moles of solute, V = volume in liters',
      example: 'If you dissolve 0.5 moles of NaCl in 2 liters of water, M = 0.5/2 = 0.25 M',
      keywords: ['molarity formula', 'molar concentration', 'solution concentration']
    },
    {
      name: 'Molality',
      formula: 'm = n / mass(solvent)',
      explanation: 'Molality expresses concentration as moles per kilogram of solvent',
      variables: 'm = molality, n = moles of solute, mass = kilograms of solvent',
      example: 'Dissolving 1 mole in 0.5 kg solvent gives m = 1/0.5 = 2 m',
      keywords: ['molality formula', 'molal concentration', 'chemistry calculations']
    },
    {
      name: 'Percent Yield',
      formula: '% Yield = (Actual / Theoretical) × 100',
      explanation: 'Percent yield measures reaction efficiency by comparing actual vs theoretical product',
      variables: 'Actual = measured product amount, Theoretical = calculated maximum product',
      example: 'If theory predicts 10g but you get 8g: (8/10) × 100 = 80% yield',
      keywords: ['percent yield formula', 'reaction efficiency', 'stoichiometry calculations']
    },
    {
      name: 'Dilution',
      formula: 'C₁V₁ = C₂V₂',
      explanation: 'The dilution formula calculates new concentrations when adding solvent',
      variables: 'C₁ = initial concentration, V₁ = initial volume, C₂ = final concentration, V₂ = final volume',
      example: 'Diluting 10 mL of 2M solution to 50 mL: 2×10 = C₂×50, C₂ = 0.4 M',
      keywords: ['dilution formula', 'solution dilution', 'concentration calculator']
    },
    {
      name: 'pH Calculation',
      formula: 'pH = -log[H⁺]',
      explanation: 'pH quantifies solution acidity using hydrogen ion concentration',
      variables: '[H⁺] = hydrogen ion concentration in mol/L',
      example: 'If [H⁺] = 1×10⁻⁵ M, then pH = -log(10⁻⁵) = 5',
      keywords: ['pH formula', 'acid base calculations', 'hydrogen ion concentration']
    },
    {
      name: 'Ideal Gas Law',
      formula: 'PV = nRT',
      explanation: 'The ideal gas law relates pressure, volume, temperature, and moles of gas',
      variables: 'P = pressure (atm), V = volume (L), n = moles, R = 0.0821 L·atm/(mol·K), T = temperature (K)',
      example: '1 mole at 273K and 1 atm: PV = 1×0.0821×273 = 22.4 L',
      keywords: ['ideal gas law', 'gas calculations', 'PV=nRT formula']
    },
  ];

  return (
    <section id="formulas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-primary-50 dark:from-gray-900 dark:to-primary-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-zoom-in">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors animate-slide-in-left">
            Chemistry Calculator Formulas Explained
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Master essential <strong className="text-primary-700 dark:text-primary-400">chemical formulas</strong> and 
            <strong className="text-primary-700 dark:text-primary-400"> chemistry calculation formulas</strong> with clear explanations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formulas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-2xl dark:hover:shadow-primary-900/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 animate-zoom-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-3 transition-colors">{item.name}</h3>
              
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg p-4 mb-4 transition-colors">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-medium transition-colors">Formula:</div>
                <div className="text-2xl font-mono font-bold text-primary-800 dark:text-primary-300 transition-colors">{item.formula}</div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed transition-colors">{item.explanation}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Variables:</div>
                <p className="text-sm text-gray-600">{item.variables}</p>
              </div>

              <div className="bg-accent-50 rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">Example:</div>
                <p className="text-sm text-gray-600">{item.example}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Chemistry Formulas</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our <strong>chemistry formula calculator</strong> collection includes formulas for 
            <strong> stoichiometry calculations</strong>, <strong>solution concentration formulas</strong>, 
            thermodynamic equations, equilibrium constants, and electrochemistry. Each calculator 
            applies these <strong>chemical formulas</strong> with proper unit handling and step-by-step logic.
          </p>
        </div>
      </div>
    </section>
  );
}
