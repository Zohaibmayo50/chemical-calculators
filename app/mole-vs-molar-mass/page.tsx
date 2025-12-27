import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Mole vs Molar Mass: Understanding the Key Difference | Chemistry Guide',
  description: 'Clarify the difference between mole (amount of substance) and molar mass (mass per mole). Learn definitions, units, and applications with examples.',
  alternates: {
    canonical: 'https://chemsolved.com/mole-vs-molar-mass',
  },
  keywords: ['mole vs molar mass', 'mole definition', 'molar mass definition', 'molecular weight', 'avogadro number', 'chemistry units']
};

export default function MoleVsMolarMassPage() {
  const comparisonRows = [
    {
      aspect: 'Definition',
      entity1: 'Amount of substance containing 6.022 × 10²³ particles',
      entity2: 'Mass of one mole of a substance'
    },
    {
      aspect: 'What It Represents',
      entity1: 'A quantity (like "dozen" but for particles)',
      entity2: 'Mass per mole (grams per mole)'
    },
    {
      aspect: 'Units',
      entity1: 'mol (moles)',
      entity2: 'g/mol (grams per mole)'
    },
    {
      aspect: 'Symbol',
      entity1: 'n',
      entity2: 'M or MM'
    },
    {
      aspect: 'Nature',
      entity1: 'Counting unit for particles',
      entity2: 'Physical property of a substance'
    },
    {
      aspect: 'Dependency',
      entity1: 'Sample-specific (how much you have)',
      entity2: 'Substance-specific (constant for each element/compound)'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Home
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Mole vs Molar Mass</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-6 text-center">Mole vs Molar Mass</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Understanding the fundamental difference between mole (a counting unit) and molar mass (a physical property) is crucial for mastering stoichiometry and chemical calculations.
            </p>
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Quick Comparison</h2>
          <ComparisonTable 
            entity1Name="Mole (n)"
            entity2Name="Molar Mass (M)"
            rows={comparisonRows}
          />
        </section>

        {/* What Is Mole? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is a Mole?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              A <strong className="text-primary-600 dark:text-primary-400">mole (mol)</strong> is the SI unit for amount of substance. One mole contains exactly 6.02214076 × 10²³ elementary entities (Avogadro's number). This could be atoms, molecules, ions, or any other particles.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Think of a mole like "a dozen"—just as a dozen always means 12 items, a mole always means 6.022 × 10²³ particles. It's a counting unit that bridges the atomic scale to the macroscopic scale.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For example: 1 mole of carbon atoms contains 6.022 × 10²³ carbon atoms. 2 moles contain twice that number.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/stoichiometry-calculators"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Stoichiometry Calculators
              </Link>
            </div>
          </div>
        </section>

        {/* What Is Molar Mass? */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Is Molar Mass?</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              <strong className="text-primary-600 dark:text-primary-400">Molar mass (M)</strong> is the mass of one mole of a substance, expressed in grams per mole (g/mol). It's numerically equal to the atomic or molecular weight but with units.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Molar mass is a constant physical property for each substance. For elements, it's found on the periodic table. For compounds, it's the sum of the atomic masses of all atoms in the molecular formula.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              For example: Carbon has a molar mass of 12.01 g/mol. This means one mole of carbon atoms weighs 12.01 grams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/stoichiometry-calculators/molecular-weight-calculator"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                Molecular Weight Calculator
              </Link>
              <Link 
                href="/chemistry-formulas/molecular-weight-formula"
                className="inline-flex items-center px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-md"
              >
                Molar Mass Formula
              </Link>
            </div>
          </div>
        </section>

        {/* Key Differences Explained */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Differences Explained</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Conceptual Nature</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Mole</strong> is a counting unit (like dozen, gross, or pair)—it tells you <em>how many</em> particles you have. <strong>Molar mass</strong> is a physical property—it tells you <em>how much mass</em> one mole of those particles has.
                </p>
              </div>

              <div className="border-l-4 border-secondary-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Variable vs Constant</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The <strong>number of moles</strong> varies depending on your sample size (you can have 1 mole, 2 moles, 0.5 moles, etc.). <strong>Molar mass</strong> is constant for each substance (carbon always has a molar mass of 12.01 g/mol).
                </p>
              </div>

              <div className="border-l-4 border-indigo-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Units Tell the Story</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Moles have units of <strong>mol</strong> (no denominator). Molar mass has units of <strong>g/mol</strong>, which literally means "grams per mole"—it's a ratio that converts between mass and moles.
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Relationship</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  They're related by the equation: <strong>mass (g) = moles (mol) × molar mass (g/mol)</strong>. Molar mass is the conversion factor between moles and grams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">When to Use Each</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">Use Mole When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Counting particles in stoichiometry</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Balancing chemical equations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Calculating reactant/product amounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Determining limiting reactants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span>Working with concentration (molarity, molality)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-secondary-700 dark:text-secondary-300 mb-4">Use Molar Mass When:</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Converting between grams and moles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Determining molecular formulas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Calculating empirical formulas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Identifying unknown compounds</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-600 mr-2">✓</span>
                    <span>Preparing solutions with specific concentrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Confusions */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Confusions</h2>
            
            <div className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Using "Mole" and "Molar Mass" Interchangeably</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  These are completely different concepts. Saying "the molar mass is 2 moles" is meaningless. Molar mass is expressed in g/mol, while amount of substance is in moles.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Confusing Molar Mass with Molecular Mass</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  While numerically similar, <strong>molecular mass</strong> is unitless (or in atomic mass units), while <strong>molar mass</strong> has units of g/mol. Molar mass = molecular mass in grams per mole.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Forgetting Units in Calculations</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Always include units. When calculating mass from moles, you multiply by molar mass: <strong>grams = mol × (g/mol)</strong>. The units help verify your calculation is correct.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">❌ Mistake: Thinking Molar Mass Changes with Sample Size</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Molar mass is an <strong>intensive property</strong>—it doesn't change whether you have 1 gram or 1000 grams of a substance. The number of moles changes, but molar mass remains constant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/stoichiometry-calculators/molecular-weight-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400"
              >
                <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-2">Molecular Weight Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate molar mass of compounds</p>
              </Link>
              
              <Link 
                href="/stoichiometry-calculators/stoichiometry-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-secondary-200 dark:border-secondary-800 hover:border-secondary-400"
              >
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-2">Stoichiometry Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Convert between moles, mass, and molecules</p>
              </Link>

              <Link 
                href="/stoichiometry-calculators"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400"
              >
                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">All Stoichiometry Calculators</h3>
                <p className="text-gray-600 dark:text-gray-400">Explore all mole-related tools</p>
              </Link>

              <Link 
                href="/stoichiometry-calculators/empirical-formula-calculator"
                className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400"
              >
                <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">Empirical Formula Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Determine formula from percent composition</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is the difference between mole and molar mass?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mole is a counting unit (amount of substance), while molar mass is the mass of one mole of that substance. Moles are measured in mol, molar mass in g/mol.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do you convert moles to grams?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Multiply the number of moles by the molar mass: mass (g) = moles (mol) × molar mass (g/mol). For example, 2 moles of water (molar mass 18 g/mol) = 2 × 18 = 36 grams.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Is molar mass the same as molecular weight?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  They're numerically equal but conceptually different. Molecular weight (or molecular mass) is dimensionless or in atomic mass units (amu). Molar mass is molecular weight expressed in grams per mole (g/mol).
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why is the mole important in chemistry?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The mole allows chemists to count atoms and molecules by weighing them. Since individual atoms are too small to count directly, the mole bridges the atomic scale (individual particles) to the macroscopic scale (grams we can measure).
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How do you find molar mass?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  For elements, molar mass equals the atomic mass from the periodic table (in g/mol). For compounds, add up the atomic masses of all atoms in the molecular formula. For example, H₂O = 2(1.01) + 16.00 = 18.02 g/mol.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Can you have a fraction of a mole?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Yes! You can have 0.5 moles, 2.3 moles, or any decimal value. The mole is a counting unit, and like any measurement, it can be expressed as fractions or decimals.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">What is Avogadro's number and how does it relate to moles?</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Avogadro's number (6.022 × 10²³) is the number of particles in one mole. Just as one dozen = 12 items, one mole = 6.022 × 10²³ particles (atoms, molecules, ions, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>
      
      {/* Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mole Vs Molar Mass",
            "description": "Mole Vs Molar Mass on ChemSolved",
            "url": "https://chemsolved.com/mole-vs-molar-mass",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            }
          })
        }}
      />
      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chemsolved.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Mole Vs Molar Mass",
                "item": "https://chemsolved.com/mole-vs-molar-mass"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </>
  );
}
