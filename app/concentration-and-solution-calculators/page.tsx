import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterCalculatorCard from '@/components/ClusterCalculatorCard';
import FormulaCard from '@/components/FormulaCard';
import CommonMistakesList from '@/components/CommonMistakesList';
import RelatedClusterLink from '@/components/RelatedClusterLink';

export const metadata: Metadata = {
  title: 'Concentration & Solution Calculators | Molarity, Dilution & Normality',
  description: 'Precise concentration and solution calculators for molarity, molality, dilution, normality, and percent composition. Calculate solution properties accurately.',
};

export default function ConcentrationSolutionCalculatorsPage() {
  const clusterData = getClusterPageBySlug('concentration-and-solution-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'solutions-concentrations');
  const relatedClusters = getRelatedClusterPages('concentration-and-solution-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
          >
            Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600 dark:text-gray-300">Concentration & Solution Calculators</span>
        </nav>
      </div>

      {/* Hero Section - Entity Definition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {clusterData.h1}
          </h1>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in" style={{ animationDelay: '100ms' }}>
              {clusterData.entityDefinition.intro}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {clusterData.entityDefinition.whatItMeasures}
            </p>
          </div>
        </div>

        {/* Quick Link to Homepage Entity */}
        <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Explore all chemistry calculators</span>
          </Link>
        </div>
      </section>

      {/* Where Used Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-zoom-in">
            Where Concentration Calculators Are Used
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '0ms' }}>
              <div className="w-12 h-12 bg-cyan-500 dark:bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Education</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.education}</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-teal-500 dark:bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Laboratory</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.labs}</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-indigo-500 dark:bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Industry</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.industry}</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-pink-500 dark:bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Research</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.research}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Formulas Section */}
      <section className="py-16 bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-bounce-in">
            Core Concentration Formulas
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Essential formulas for calculating solution concentrations and dilutions
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {clusterData.entityDefinition.formulasInvolved.map((formula, index) => (
              <FormulaCard 
                key={index}
                formula={formula.split(' (')[0]}
                explanation={formula.includes('(') ? formula.split('(')[1].replace(')', '') : 'Key concentration formula'}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculators List Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-rotate-in">
            All Concentration & Solution Calculators
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Access {category.calculators.length} specialized calculators for solution preparation and analysis
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.calculators.map((calculator, index) => (
              <ClusterCalculatorCard 
                key={calculator.id}
                calculator={calculator}
                index={index}
                clusterSlug="concentration-and-solution-calculators"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-zoom-in">
            How Concentration Calculators Work
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-accent-200 dark:border-accent-700 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500 dark:bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Define Concentration Units</h3>
                  <p className="text-gray-600 dark:text-gray-300">Concentration can be expressed in multiple ways: molarity (mol/L), molality (mol/kg), percent by mass or volume, parts per million (ppm), or normality. Choose the appropriate unit for your application.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700 animate-slide-in-right" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Calculate Solute Amount</h3>
                  <p className="text-gray-600 dark:text-gray-300">Determine the amount of solute (substance being dissolved) needed using molar mass, density, or concentration relationships. Accuracy in solute measurement is critical for precise solutions.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-secondary-200 dark:border-secondary-700 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-500 dark:bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Apply Dilution Principles</h3>
                  <p className="text-gray-600 dark:text-gray-300">For dilutions, use M₁V₁ = M₂V₂ (concentration × volume before = concentration × volume after). This fundamental relationship ensures proper dilution calculations while conserving moles of solute.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-tertiary-200 dark:border-tertiary-700 animate-slide-in-right" style={{ animationDelay: '300ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-tertiary-500 dark:bg-tertiary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Account for Temperature</h3>
                  <p className="text-gray-600 dark:text-gray-300">Temperature affects solution volume and density. For molality calculations (which use solvent mass), temperature effects are minimal, but molarity calculations may require temperature corrections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-shake">
            Common Concentration Calculation Mistakes
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Avoid these frequent errors when preparing solutions
          </p>
          <CommonMistakesList mistakes={clusterData.commonMistakes} />
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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

          {/* Back to Homepage */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-accent-600 dark:bg-accent-700 text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-accent-700 dark:hover:bg-accent-600 transition-all duration-300 hover:scale-105 shadow-lg"
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
