export default function WhyAccurate() {
  const features = [
    {
      title: 'Formula Transparency',
      icon: '📐',
      description: 'Every calculator displays the exact formula used, allowing you to verify the calculation method and understand the underlying chemistry principles.',
      details: [
        'Complete formula documentation',
        'Variable definitions provided',
        'No hidden calculations or black boxes'
      ]
    },
    {
      title: 'Step-by-Step Logic',
      icon: '🔢',
      description: 'We show how calculations progress from input to output, making it educational and verifiable at every stage.',
      details: [
        'Clear calculation breakdowns',
        'Intermediate steps displayed',
        'Learn while you calculate'
      ]
    },
    {
      title: 'Proper Unit Handling',
      icon: '⚖️',
      description: 'Our calculators automatically handle unit conversions and ensure dimensional consistency throughout all calculations.',
      details: [
        'Automatic unit conversions',
        'Dimensional analysis checks',
        'Support for SI and common units'
      ]
    },
    {
      title: 'Scientific Constants',
      icon: '🔬',
      description: 'We use internationally recognized values for all physical and chemical constants, ensuring accuracy and reproducibility.',
      details: [
        'NIST-recommended constants',
        'Updated periodically',
        'Source documentation provided'
      ]
    },
    {
      title: 'Error Checking',
      icon: '✅',
      description: 'Built-in validation ensures inputs are within reasonable ranges and alerts you to potential errors or unusual results.',
      details: [
        'Input validation',
        'Range checking',
        'Warning for unusual values'
      ]
    },
    {
      title: 'Peer Reviewed',
      icon: '👥',
      description: 'Our formulas and implementations are verified by chemistry professionals and educators to ensure correctness.',
      details: [
        'Expert validation',
        'Educational review',
        'Continuous improvement'
      ]
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-zoom-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Why Our Chemistry Calculators Are Accurate
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Trust and transparency in every <strong className="text-primary-700 dark:text-primary-400 transition-colors">chemistry calculation</strong> we perform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-xl dark:hover:shadow-primary-900/50 transition-all duration-300 transform hover:-translate-y-1 animate-bounce-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.details.map((detail, detailIdx) => (
                  <li key={detailIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Accuracy Guarantee */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl dark:shadow-primary-900/50 transition-all">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Accuracy Commitment</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-semibold mb-3">Chemical Formula Accuracy</h4>
                <p className="leading-relaxed text-white/90">
                  Every <strong>chemical formula</strong> and <strong>stoichiometry calculation</strong> is 
                  based on established chemical principles from authoritative sources like IUPAC, NIST, and 
                  peer-reviewed chemistry textbooks.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Continuous Validation</h4>
                <p className="leading-relaxed text-white/90">
                  We continuously test our <strong>chemistry calculators</strong> against known problems and 
                  standard solutions to ensure accuracy. User feedback helps us identify and fix any issues quickly.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-center text-lg leading-relaxed">
                <strong>Educational Use Notice:</strong> While our calculators are highly accurate, always 
                verify critical calculations for research, industrial applications, or safety-critical work. 
                These tools are designed to complement, not replace, professional chemical knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
