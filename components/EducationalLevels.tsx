export default function EducationalLevels() {
  const levels = [
    {
      level: 'Middle School Chemistry',
      icon: '🎓',
      description: 'Introduction to basic chemistry concepts and simple calculations',
      calculators: [
        { name: 'Density Calculator', use: 'Learn mass, volume, and density relationships' },
        { name: 'Unit Converter', use: 'Practice metric conversions for chemistry' },
        { name: 'Atomic Mass Calculator', use: 'Understand atomic structure and isotopes' },
        { name: 'Molar Mass Calculator', use: 'Calculate molecular weights from formulas' },
      ],
      keywords: ['middle school chemistry', 'basic chemistry calculators', 'chemistry for students']
    },
    {
      level: 'High School Chemistry',
      icon: '📚',
      description: 'Core chemistry calculations for AP Chemistry and standard curricula',
      calculators: [
        { name: 'Molarity Calculator', use: 'Master solution concentration calculations' },
        { name: 'Stoichiometry Calculator', use: 'Balance equations and calculate yields' },
        { name: 'pH Calculator', use: 'Understand acids, bases, and pH scale' },
        { name: 'Gas Law Calculator', use: 'Apply PV=nRT and combined gas laws' },
        { name: 'Percent Yield Calculator', use: 'Calculate reaction efficiency' },
      ],
      keywords: ['high school chemistry', 'AP chemistry calculator', 'chemistry homework help']
    },
    {
      level: 'College / University',
      icon: '🔬',
      description: 'Advanced chemistry tools for undergraduate and graduate studies',
      calculators: [
        { name: 'Thermodynamics Calculator', use: 'Calculate ΔG, ΔH, ΔS for reactions' },
        { name: 'Equilibrium Constant', use: 'Determine Kc, Kp, and reaction direction' },
        { name: 'Nernst Equation', use: 'Calculate cell potentials in electrochemistry' },
        { name: 'Michaelis-Menten', use: 'Analyze enzyme kinetics and biochemistry' },
        { name: 'Spectroscopy Calculators', use: 'Beer-Lambert law and wavelength calculations' },
      ],
      keywords: ['college chemistry', 'university chemistry tools', 'advanced chemistry calculators']
    },
  ];

  return (
    <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-bounce-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Chemistry Calculators by Educational Level
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Find the right <strong className="text-primary-700 dark:text-primary-400 transition-colors">chemistry calculators for students</strong> at 
            every level, from middle school to university
          </p>
        </div>

        <div className="space-y-8">
          {levels.map((level, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-10 shadow-xl border-2 border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-2xl dark:hover:shadow-primary-900/50 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{level.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors">{level.level}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors">{level.description}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {level.calculators.map((calc, calcIdx) => (
                  <div
                    key={calcIdx}
                    className="bg-white dark:bg-gray-700/50 rounded-lg p-4 border border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
                  >
                    <div className="font-semibold text-primary-700 dark:text-primary-400 mb-2 transition-colors">{calc.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors">{calc.use}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {level.keywords.map((keyword, kwIdx) => (
                  <span
                    key={kwIdx}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Chemistry Problem Solvers for Every Student</h3>
          <p className="text-lg leading-relaxed">
            Whether you&#39;re working on <strong>chemistry homework calculators</strong> for basic problems or 
            need advanced <strong>chemistry problem solvers</strong> for research, our tools provide accurate 
            results with clear explanations. All calculators include formula references and step-by-step logic 
            to help you learn while solving problems.
          </p>
        </div>
      </div>
    </section>
  );
}
