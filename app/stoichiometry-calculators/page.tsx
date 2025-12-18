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
  title: 'Stoichiometry Calculators | Mole Ratios & Chemical Equations',
  description: 'Accurate stoichiometry calculators for chemical equations, mole ratios, limiting reagents, and percent yield. Calculate reaction quantities based on balanced equations.',
};

export default function StoichiometryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('stoichiometry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'stoichiometry');
  const relatedClusters = getRelatedClusterPages('stoichiometry-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600 dark:text-gray-300">Stoichiometry Calculators</span>
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
              All Stoichiometry Calculators
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
              {clusterData.entityDefinition.whatItMeasures}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.calculators.map((calculator, index) => (
              <ClusterCalculatorCard 
                key={calculator.id}
                calculator={calculator}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Entity Definition Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-zoom-in">
            What is Stoichiometry?
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-primary-200 dark:border-primary-700 animate-slide-in-up">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                {clusterData.entityDefinition.intro}
              </p>
              <p>
                {clusterData.entityDefinition.whyCalculationsNeeded}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historical & Conceptual Background */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-zoom-in">
            Historical & Conceptual Background
          </h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-slide-in-left">
              <h3 className="font-heading text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">Origins</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{clusterData.historicalContext.origin}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-slide-in-right" style={{ animationDelay: '100ms' }}>
              <h3 className="font-heading text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">Evolution</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{clusterData.historicalContext.evolution}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <h3 className="font-heading text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">Modern Significance</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{clusterData.historicalContext.significance}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Used Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-zoom-in">
            Where Stoichiometry Calculators Are Used
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '0ms' }}>
              <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Education</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.education}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Laboratory</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.labs}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-3">Industry</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{clusterData.whereUsed.industry}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-xl p-6 animate-slide-in-left" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Core Formulas Section - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-bounce-in">
            Core Stoichiometry Formulas & Variables
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Master these fundamental formulas that power all stoichiometric calculations
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {clusterData.coreFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-primary-200 dark:border-primary-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading text-xl font-bold text-primary-700 dark:text-primary-400 mb-3">{formula.name}</h3>
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-md p-4 mb-4">
                  <code className="text-lg font-mono font-bold text-primary-800 dark:text-primary-300 block text-center">
                    {formula.formula}
                  </code>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Variables:</span> {formula.variables}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Units:</span> {formula.units}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{formula.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Calculations Section - NEW */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-zoom-in">
            Types of Stoichiometric Calculations
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Different calculation methods serve specific purposes in chemical analysis and problem-solving
          </p>
          <div className="space-y-6">
            {clusterData.calculationTypes.map((calcType, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-50 to-primary-50 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-3">{calcType.type}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{calcType.description}</p>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border-l-4 border-primary-500">
                  <p className="text-sm text-gray-600 dark:text-gray-400"><span className="font-semibold text-primary-700 dark:text-primary-400">When to use:</span> {calcType.when}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* How They Work Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-zoom-in">
            How Stoichiometry Calculators Work
          </h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700 animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Balanced Chemical Equations</h3>
                  <p className="text-gray-600 dark:text-gray-300">Stoichiometry begins with a balanced chemical equation that shows the exact ratios of reactants and products. The coefficients represent mole ratios according to the law of conservation of mass.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-accent-200 dark:border-accent-700 animate-slide-in-right" style={{ animationDelay: '100ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-500 dark:bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Mole Conversions</h3>
                  <p className="text-gray-600 dark:text-gray-300">Convert between mass, moles, and particles using molar mass and Avogadro&#39;s number. The mole is the bridge between the microscopic world of atoms and the macroscopic world of grams.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-secondary-200 dark:border-secondary-700 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-secondary-500 dark:bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Limiting Reagent Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-300">Identify which reactant will run out first by comparing mole ratios to stoichiometric coefficients. The limiting reagent determines the maximum amount of product that can form.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-tertiary-200 dark:border-tertiary-700 animate-slide-in-right" style={{ animationDelay: '300ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-tertiary-500 dark:bg-tertiary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2">Yield Calculations</h3>
                  <p className="text-gray-600 dark:text-gray-300">Calculate theoretical yield (maximum possible) and compare to actual yield (experimental result) to determine percent yield, which measures reaction efficiency and experimental accuracy.</p>
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
            Common Stoichiometry Mistakes to Avoid
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Learn from these frequent errors to improve accuracy in your calculations
          </p>
          <CommonMistakesList mistakes={clusterData.commonMistakes} />
        </div>
      </section>

      {/* Relationship With Other Topics - NEW */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 via-white to-tertiary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center animate-swing">
            How Stoichiometry Connects to Other Chemistry Topics
          </h2>
          
          {/* Connected Topics */}
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Related Calculator Topics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {clusterData.relationships.connectedTopics.map((connection, index) => (
                <Link
                  key={connection.slug}
                  href={`/${connection.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl border-2 border-secondary-200 dark:border-secondary-700 hover:border-secondary-400 dark:hover:border-secondary-500 transition-all duration-300 hover:scale-105 animate-zoom-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-heading text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                    {connection.topic}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{connection.relationship}</p>
                  <div className="mt-4 flex items-center text-secondary-600 dark:text-secondary-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                    Explore Topic
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Broader Concepts */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg animate-fade-in">
            <h3 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Foundational Chemistry Concepts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {clusterData.relationships.broaderConcepts.map((concept, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-700 dark:to-gray-900 rounded-lg"
                >
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{concept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - NEW */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-rotate-in">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Common questions about stoichiometry and stoichiometric calculations
          </p>
          <div className="space-y-6">
            {clusterData.faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-50 to-primary-50 dark:from-gray-700 dark:to-gray-900 rounded-xl p-6 shadow-md animate-slide-in-left"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="font-heading text-xl font-bold text-primary-700 dark:text-primary-400 mb-3 flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Topics Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center animate-swing">
            Related Calculator Topics
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
            Expand your chemistry calculations with these related topics
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
              className="inline-flex items-center gap-2 bg-primary-600 dark:bg-primary-700 text-white px-8 py-4 rounded-lg font-heading font-bold text-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
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
