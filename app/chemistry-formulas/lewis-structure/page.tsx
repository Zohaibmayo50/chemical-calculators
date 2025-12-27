import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lewis Structure Formula | Dot Structures & Electron Distribution',
  description: 'Learn how to draw Lewis structures using valence electrons, octet rule, and formal charge. Master electron dot structures for molecules and ions.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/lewis-structure',
  },
  keywords: ['lewis structure', 'electron dot structure', 'valence electrons', 'octet rule', 'formal charge', 'bonding pairs', 'lone pairs', 'lewis formula']
};

export default function LewisStructurePage() {
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
            <Link href="/chemistry-formulas" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Chemistry Formulas
            </Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Lewis Structure</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Lewis Structure Formula</h1>
            <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Visual representation of molecular structure showing valence electrons, bonding pairs, and lone pairs using dot notation
            </p>
          </div>
        </section>

        {/* Formula Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Steps to Draw Lewis Structure</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">1. Count Total Valence Electrons</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-lg">
                  Total e⁻ = Σ(valence electrons) + charge
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4">2. Arrange Atoms & Draw Bonds</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-lg">
                  Each bond = 2 electrons (1 electron pair)
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">3. Distribute Remaining Electrons</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-lg">
                  Complete octets (duet for H) with lone pairs
                </div>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-900 dark:text-pink-300 mb-4">4. Check Formal Charges</h3>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 font-mono text-lg">
                  FC = V - N - B/2 (minimize formal charges)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variables Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Concepts</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-2">Valence Electrons (V)</h3>
                <p className="text-gray-700 dark:text-gray-300">Outermost electrons available for bonding (group number for main group elements)</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300 mb-2">Bonding Pairs (B)</h3>
                <p className="text-gray-700 dark:text-gray-300">Electron pairs shared between atoms (single, double, triple bonds)</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-2">Lone Pairs (N)</h3>
                <p className="text-gray-700 dark:text-gray-300">Non-bonding electron pairs on an atom</p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-900 dark:text-pink-300 mb-2">Octet Rule</h3>
                <p className="text-gray-700 dark:text-gray-300">Atoms tend to gain, lose, or share electrons to achieve 8 valence electrons (2 for H)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step-by-Step Examples</h2>
            
            <div className="space-y-8">
              {/* Example 1: Water */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: Water (H₂O)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Count valence electrons</p>
                  <p className="ml-6">H: 1 × 2 = 2 electrons, O: 6 electrons → Total = 8 electrons</p>
                  
                  <p><strong>Step 2:</strong> Draw skeleton (O in center, H on sides)</p>
                  <p className="ml-6 font-mono">H-O-H (2 bonds = 4 electrons used)</p>
                  
                  <p><strong>Step 3:</strong> Distribute remaining 4 electrons as lone pairs on O</p>
                  <p className="ml-6 font-mono">H-O-H with 2 lone pairs on O</p>
                  
                  <p><strong>Step 4:</strong> Check: O has 8 e⁻, each H has 2 e⁻ ✓</p>
                </div>
              </div>

              {/* Example 2: Carbon Dioxide */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 2: Carbon Dioxide (CO₂)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Count valence electrons</p>
                  <p className="ml-6">C: 4, O: 6 × 2 = 12 → Total = 16 electrons</p>
                  
                  <p><strong>Step 2:</strong> Draw skeleton with C in center</p>
                  <p className="ml-6 font-mono">O-C-O (2 bonds = 4 electrons)</p>
                  
                  <p><strong>Step 3:</strong> Add lone pairs (12 electrons remaining)</p>
                  <p className="ml-6">Each O gets 6 electrons (3 lone pairs), but C only has 4 e⁻</p>
                  
                  <p><strong>Step 4:</strong> Form double bonds to satisfy octet</p>
                  <p className="ml-6 font-mono">O=C=O (each atom has 8 electrons) ✓</p>
                </div>
              </div>

              {/* Example 3: Ammonium Ion */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 3: Ammonium Ion (NH₄⁺)</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Step 1:</strong> Count valence electrons (subtract charge)</p>
                  <p className="ml-6">N: 5, H: 1 × 4 = 4, charge: -1 → Total = 8 electrons</p>
                  
                  <p><strong>Step 2:</strong> Draw 4 N-H bonds (8 electrons used)</p>
                  <p className="ml-6 font-mono">All electrons used in bonding</p>
                  
                  <p><strong>Step 3:</strong> All atoms satisfy duet/octet ✓</p>
                  
                  <p><strong>Step 4:</strong> Formal charge on N = +1 (matches ion charge) ✓</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Mistakes to Avoid</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Forgetting to Count Charge</h3>
                  <p className="text-gray-700 dark:text-gray-300">Add electrons for negative charges, subtract for positive charges</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Violating Octet Rule Unnecessarily</h3>
                  <p className="text-gray-700 dark:text-gray-300">Check if multiple bonds can satisfy octets before accepting expanded octets</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Central Atom</h3>
                  <p className="text-gray-700 dark:text-gray-300">Least electronegative atom (except H) is usually central</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Not Checking Formal Charges</h3>
                  <p className="text-gray-700 dark:text-gray-300">Lowest formal charges indicate most stable structure; sum must equal molecular charge</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Expanded Octets</h3>
                  <p className="text-gray-700 dark:text-gray-300">Period 3+ elements (P, S, Cl, etc.) can have &gt;8 electrons using d orbitals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Applications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-300 mb-3">Molecular Geometry</h3>
                <p className="text-gray-700 dark:text-gray-300">Predict 3D shape using VSEPR theory based on bonding and lone pairs</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 dark:text-green-300 mb-3">Polarity</h3>
                <p className="text-gray-700 dark:text-gray-300">Determine molecular polarity from electronegativity differences and geometry</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-900 dark:text-purple-300 mb-3">Reactivity</h3>
                <p className="text-gray-700 dark:text-gray-300">Lone pairs and formal charges indicate reactive sites in molecules</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-900 dark:text-orange-300 mb-3">Resonance</h3>
                <p className="text-gray-700 dark:text-gray-300">Multiple valid Lewis structures show electron delocalization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Related Calculators & Formulas</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/atomic-structure-calculators/lewis-structure-calculator" className="block p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">Lewis Structure Calculator</h3>
                <p className="text-blue-100">Draw Lewis structures automatically</p>
              </Link>

              <Link href="/chemistry-formulas/formal-charge-formula" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Formal Charge Formula</h3>
                <p className="text-gray-600 dark:text-gray-400">Calculate formal charges on atoms</p>
              </Link>

              <Link href="/chemistry-formulas/vsepr-theory" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">VSEPR Theory</h3>
                <p className="text-gray-600 dark:text-gray-400">Predict molecular geometry</p>
              </Link>

              <Link href="/atomic-structure-calculators/hybridization-calculator" className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hybridization Calculator</h3>
                <p className="text-gray-600 dark:text-gray-400">Determine orbital hybridization</p>
              </Link>

              <Link href="/atomic-structure-calculators" className="block p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-2">All Atomic Structure Calculators</h3>
                <p className="text-sm opacity-90">Explore all molecular structure tools</p>
              </Link>
            </div>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Lewis Structure",
            "description": "Lewis Structure on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/lewis-structure",
            "author": {
              "@type": "Person",
              "name": "Muhammad Zohaib",
              "jobTitle": "Chemist"
            },
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "educationalLevel": "University",
            "educationalUse": "Reference"
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
                "name": "Lewis Structure",
                "item": "https://chemsolved.com/chemistry-formulas/lewis-structure"
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
