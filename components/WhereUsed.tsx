export default function WhereUsed() {
  const useCases = [
    {
      title: 'Laboratory Work',
      icon: '⚗️',
      description: 'Professional chemists use chemistry calculators for precise solution preparation, experimental design, and data analysis.',
      applications: [
        'Preparing buffer solutions with exact pH',
        'Calculating reagent quantities for experiments',
        'Diluting stock solutions to working concentrations',
        'Analyzing spectroscopic data with Beer-Lambert law'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'School Education',
      icon: '📖',
      description: 'Students and teachers rely on online chemistry calculators for homework, exams, and understanding chemical concepts.',
      applications: [
        'Solving stoichiometry homework problems',
        'Verifying manual calculations for accuracy',
        'Learning chemical relationships through examples',
        'Preparing for AP Chemistry and standardized tests'
      ],
      color: 'from-accent-600 to-accent-700'
    },
    {
      title: 'Industrial Chemistry',
      icon: '🏭',
      description: 'Chemical engineers and industrial chemists use calculators for process optimization, quality control, and production planning.',
      applications: [
        'Scaling laboratory reactions to production scale',
        'Quality control testing and specification verification',
        'Process optimization and yield improvement',
        'Material balance calculations for chemical plants'
      ],
      color: 'from-primary-700 to-primary-800'
    },
    {
      title: 'Research & Analysis',
      icon: '🔬',
      description: 'Research scientists utilize chemistry calculation tools for experimental design, data interpretation, and publication.',
      applications: [
        'Calculating equilibrium constants from data',
        'Thermodynamic analysis of reaction spontaneity',
        'Electrochemical cell potential predictions',
        'Biochemical enzyme kinetics analysis'
      ],
      color: 'from-accent-500 to-accent-600'
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide-in-right">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Where Chemistry Calculators Are Used
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Professional and educational applications of <strong className="text-primary-700 dark:text-primary-400 transition-colors">online chemistry calculators</strong> across 
            multiple fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-2xl dark:hover:shadow-primary-900/50 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1 animate-zoom-in"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`bg-gradient-to-r ${useCase.color} dark:opacity-90 p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{useCase.icon}</div>
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors">{useCase.description}</p>
                
                <div className="space-y-3">
                  {useCase.applications.map((app, appIdx) => (
                    <div key={appIdx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-gray-700 font-medium">Lab Professionals</div>
            <div className="text-sm text-gray-600 mt-2">Using our tools daily</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
            <div className="text-gray-700 font-medium">Students</div>
            <div className="text-sm text-gray-600 mt-2">Learning chemistry</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">1,000+</div>
            <div className="text-gray-700 font-medium">Educational Institutions</div>
            <div className="text-sm text-gray-600 mt-2">Recommending our calculators</div>
          </div>
        </div>
      </div>
    </section>
  );
}
