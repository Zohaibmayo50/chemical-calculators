import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorCategory } from '@/data/calculators';
import { ClusterPageData } from '@/data/clusterPages';
import ClusterCalculatorCard from '@/components/ClusterCalculatorCard';
import FormulaCard from '@/components/FormulaCard';
import CommonMistakesList from '@/components/CommonMistakesList';
import RelatedClusterLink from '@/components/RelatedClusterLink';

interface ClusterPageTemplateProps {
  clusterData: ClusterPageData;
  category: CalculatorCategory;
  relatedClusters: ClusterPageData[];
  colorScheme: 'primary' | 'accent' | 'secondary' | 'tertiary';
}

const colorClasses = {
  primary: {
    breadcrumb: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300',
    link: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300',
    button: 'bg-primary-600 dark:bg-primary-700 hover:bg-primary-700 dark:hover:bg-primary-600',
    gradient: 'from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
  },
  accent: {
    breadcrumb: 'text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300',
    link: 'text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300',
    button: 'bg-accent-600 dark:bg-accent-700 hover:bg-accent-700 dark:hover:bg-accent-600',
    gradient: 'from-accent-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
  },
  secondary: {
    breadcrumb: 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300',
    link: 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300',
    button: 'bg-secondary-600 dark:bg-secondary-700 hover:bg-secondary-700 dark:hover:bg-secondary-600',
    gradient: 'from-secondary-50 via-white to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
  },
  tertiary: {
    breadcrumb: 'text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300',
    link: 'text-tertiary-600 dark:text-tertiary-400 hover:text-tertiary-700 dark:hover:text-tertiary-300',
    button: 'bg-tertiary-600 dark:bg-tertiary-700 hover:bg-tertiary-700 dark:hover:bg-tertiary-600',
    gradient: 'from-tertiary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'
  }
};

const useContextColors = [
  { name: 'Education', color: 'blue', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { name: 'Laboratory', color: 'green', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { name: 'Industry', color: 'purple', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { name: 'Research', color: 'orange', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
];

export default function ClusterPageTemplate({ clusterData, category, relatedClusters, colorScheme }: ClusterPageTemplateProps) {
  const colors = colorClasses[colorScheme];
  const whereUsedValues = [
    clusterData.whereUsed.education,
    clusterData.whereUsed.labs,
    clusterData.whereUsed.industry,
    clusterData.whereUsed.research
  ];

  return (
    <>
      <Header />
      <main className={`min-h-screen bg-gradient-to-br ${colors.gradient}`}>
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link href="/" className={`${colors.breadcrumb} transition-colors`}>
            Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600 dark:text-gray-300">{clusterData.h1}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 dark:from-gray-900 dark:via-primary-900 dark:to-gray-800">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-500/10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>{category.calculators.length} Professional Calculators</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-zoom-in" style={{ animationDelay: '100ms' }}>
              {clusterData.h1}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
              {clusterData.entityDefinition.intro}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '300ms' }}>
              <a
                href="#calculators"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
              >
                <span>Browse Calculators</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/20 hover:border-white/40 group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>All Calculators</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 text-white dark:text-gray-800" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C300,80 600,80 900,40 L1200,20 L1200,120 L0,120 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Calculators List Section - Moved right after hero */}
      <section id="calculators" className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-rotate-in">
              All {category.name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              {clusterData.entityDefinition.whatItMeasures}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.calculators.map((calculator, index) => (
              <ClusterCalculatorCard key={calculator.id} calculator={calculator} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Entity Definition Section */}
      <section className={`py-16 bg-gradient-to-br ${colors.gradient}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-zoom-in">
            What is {clusterData.h1.replace(' Calculators', '')}?
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-primary-200 dark:border-primary-700 animate-slide-in-up">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                {clusterData.entityDefinition.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Used Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-zoom-in">
            Where {category.name} Are Used
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useContextColors.map((context, index) => (
              <div 
                key={context.name}
                className={`bg-gradient-to-br from-${context.color}-50 to-${context.color}-100 dark:from-${context.color}-900/30 dark:to-${context.color}-800/30 rounded-xl p-6 animate-slide-in-left`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-${context.color}-500 dark:bg-${context.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={context.icon} />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">{context.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{whereUsedValues[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Formulas Section */}
      <section className={`py-16 bg-gradient-to-br ${colors.gradient}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-bounce-in">
            Core Formulas
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Essential formulas for {category.name.toLowerCase()} calculations
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {clusterData.entityDefinition.formulasInvolved.map((formula, index) => (
              <FormulaCard 
                key={index}
                formula={formula.split(' (')[0]}
                explanation={formula.includes('(') ? formula.split('(')[1].replace(')', '') : 'Key formula'}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Common Mistakes */}
      <section className={`py-16 bg-gradient-to-br ${colors.gradient}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-shake">
            Common Mistakes to Avoid
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Learn from these frequent errors to improve calculation accuracy
          </p>
          <CommonMistakesList mistakes={clusterData.commonMistakes} />
        </div>
      </section>

      {/* Related Topics */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-swing">
            Related Calculator Topics
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Explore these related chemistry calculation topics
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {relatedClusters.filter(c => c !== undefined).map((cluster, index) => (
              <RelatedClusterLink 
                key={cluster.slug}
                slug={cluster.slug}
                title={cluster.h1}
                description={cluster.metaDescription.split('.')[0] + '.'}
                index={index}
              />
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link 
              href="/"
              className={`inline-flex items-center gap-2 ${colors.button} text-white px-8 py-4 rounded-lg font-heading font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Browse All Chemistry Calculators</span>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
