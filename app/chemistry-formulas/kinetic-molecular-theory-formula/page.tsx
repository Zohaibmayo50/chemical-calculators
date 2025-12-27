import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kinetic Molecular Theory Formula | KMT Postulates & Gas Laws',
  description: 'Understand kinetic molecular theory: postulates, RMS speed, average kinetic energy, and gas behavior at the molecular level.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/kinetic-molecular-theory-formula',
  },
  keywords: ['kinetic molecular theory', 'KMT', 'RMS speed', 'average kinetic energy', 'gas postulates', 'molecular motion']
};

export default function KineticMolecularTheoryFormulaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/chemistry-formulas">Chemistry Formulas</Link>
            <span>→</span>
            <span className="text-gray-900 dark:text-white font-medium">Kinetic Molecular Theory</span>
          </nav>
        </div>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h1 className="text-5xl font-bold mb-4 text-center">Kinetic Molecular Theory</h1>
            <p className="text-xl text-center text-orange-100">
              Understanding gas behavior at the molecular level
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold mb-6">Five Postulates of KMT</h2>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Particles in Constant Motion</h3>
                    <p className="text-gray-700 dark:text-gray-300">Gas particles are in continuous, random, straight-line motion until they collide with each other or the container walls.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-purple-600">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-2">Negligible Volume</h3>
                    <p className="text-gray-700 dark:text-gray-300">The volume of individual gas particles is negligible compared to the total volume of the container.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-green-600">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-2">No Intermolecular Forces</h3>
                    <p className="text-gray-700 dark:text-gray-300">There are no attractive or repulsive forces between gas particles (ideal gas assumption).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-amber-600">4</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Elastic Collisions</h3>
                    <p className="text-gray-700 dark:text-gray-300">All collisions between gas particles and between particles and walls are perfectly elastic (no energy loss).</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-red-600">5</span>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 dark:text-red-300 mb-2">Temperature Proportional to KE</h3>
                    <p className="text-gray-700 dark:text-gray-300">The average kinetic energy of gas particles is directly proportional to absolute temperature (Kelvin).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Key Formulas</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4">Average Kinetic Energy</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center mb-4">
                  <p className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-3">
                    KE<sub>avg</sub> = (3/2)RT
                  </p>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">or</p>
                  <p className="text-3xl font-bold text-blue-700 dark:text-blue-300 mt-3">
                    KE<sub>avg</sub> = (3/2)k<sub>B</sub>T
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• KE<sub>avg</sub> = average kinetic energy per mole (J/mol) or per particle (J)</li>
                    <li>• R = 8.314 J/(mol·K) (per mole)</li>
                    <li>• k<sub>B</sub> = 1.381 × 10⁻²³ J/K (Boltzmann constant, per particle)</li>
                    <li>• T = temperature (K)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4">Root Mean Square (RMS) Speed</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center mb-4">
                  <p className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-3">
                    u<sub>rms</sub> = √(3RT/M)
                  </p>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mt-3">or</p>
                  <p className="text-3xl font-bold text-purple-700 dark:text-purple-300 mt-3">
                    u<sub>rms</sub> = √(3k<sub>B</sub>T/m)
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• u<sub>rms</sub> = root mean square speed (m/s)</li>
                    <li>• R = 8.314 J/(mol·K)</li>
                    <li>• T = temperature (K)</li>
                    <li>• M = molar mass (kg/mol) - MUST be in kg!</li>
                    <li>• m = mass of one molecule (kg)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-300 mb-4">Relationship Between KE and Speed</h3>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center mb-4">
                  <p className="text-4xl font-bold text-green-700 dark:text-green-300">
                    KE = (1/2)mu²
                  </p>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Where:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• m = mass of particle (kg)</li>
                    <li>• u = speed of particle (m/s)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Worked Examples</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">Example 1: RMS Speed of O₂</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate the RMS speed of O₂ molecules at 25°C.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Step 1: Convert temperature to Kelvin</p>
                  <p className="ml-12">T = 25 + 273.15 = 298.15 K</p>
                  
                  <p className="ml-6 mt-3">Step 2: Get molar mass in kg/mol</p>
                  <p className="ml-12">M(O₂) = 32.00 g/mol = 0.03200 kg/mol</p>
                  
                  <p className="ml-6 mt-3">Step 3: Apply formula</p>
                  <p className="ml-12">u<sub>rms</sub> = √(3RT/M)</p>
                  <p className="ml-12">u<sub>rms</sub> = √[(3)(8.314)(298.15) / 0.03200]</p>
                  <p className="ml-12">u<sub>rms</sub> = √(232,214)</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">u<sub>rms</sub> = 482 m/s</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300 mb-4">Example 2: Comparing Speeds</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Which moves faster at the same temperature: H₂ or N₂?</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">Since u<sub>rms</sub> = √(3RT/M), and T is constant:</p>
                  <p className="ml-12">u<sub>rms</sub> ∝ 1/√M</p>
                  
                  <p className="ml-6 mt-3">Lighter gas moves faster!</p>
                  <p className="ml-12">M(H₂) = 2.02 g/mol</p>
                  <p className="ml-12">M(N₂) = 28.02 g/mol</p>
                  
                  <p className="ml-6 mt-3">Speed ratio:</p>
                  <p className="ml-12">u(H₂)/u(N₂) = √[M(N₂)/M(H₂)]</p>
                  <p className="ml-12">u(H₂)/u(N₂) = √(28.02/2.02) = √13.87 = 3.72</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">H₂ moves 3.72× faster than N₂</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-300 mb-4">Example 3: Average Kinetic Energy</h3>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Problem:</strong> Calculate the average KE per mole of gas at 300 K.</p>
                  
                  <p className="mt-4"><strong>Solution:</strong></p>
                  <p className="ml-6">KE<sub>avg</sub> = (3/2)RT</p>
                  <p className="ml-6">KE<sub>avg</sub> = (3/2)(8.314 J/mol·K)(300 K)</p>
                  <p className="ml-6">KE<sub>avg</sub> = 3741 J/mol</p>
                  
                  <p className="ml-6 font-bold text-green-600 text-xl mt-4">KE<sub>avg</sub> = 3.74 kJ/mol</p>
                  
                  <p className="ml-6 text-sm text-blue-600 mt-3">
                    Note: This is the same for ALL gases at 300 K!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Temperature Effects</h2>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-4">Speed Distribution at Different Temperatures</h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Key Observations:</strong></p>
                <ul className="ml-6 space-y-2">
                  <li>• <strong>Higher T → Higher average speed</strong></li>
                  <li>• <strong>Higher T → Broader distribution</strong> (more variation in speeds)</li>
                  <li>• <strong>Higher T → Lower peak</strong> (but wider curve)</li>
                  <li>• At <strong>absolute zero (0 K)</strong>, all molecular motion stops</li>
                </ul>
                
                <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded">
                  <p className="font-bold mb-2">Three Types of Molecular Speed:</p>
                  <p className="ml-4">1. <strong>Most probable speed</strong> (u<sub>mp</sub>) = √(2RT/M)</p>
                  <p className="ml-4">2. <strong>Average speed</strong> (u<sub>avg</sub>) = √(8RT/πM)</p>
                  <p className="ml-4">3. <strong>RMS speed</strong> (u<sub>rms</sub>) = √(3RT/M)</p>
                  <p className="ml-4 mt-2 text-sm text-blue-600">u<sub>mp</sub> &lt; u<sub>avg</sub> &lt; u<sub>rms</sub></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Common Mistakes</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Wrong Units for Molar Mass</h3>
                  <p className="text-gray-700 dark:text-gray-300">Must use kg/mol, not g/mol! M(O₂) = 0.032 kg/mol</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Using Celsius Instead of Kelvin</h3>
                  <p className="text-gray-700 dark:text-gray-300">Always use absolute temperature (K)!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-red-50 dark:bg-red-900/20 rounded-xl p-4">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h3 className="font-bold text-red-900 dark:text-red-300 mb-2">Confusing KE per Mole vs per Particle</h3>
                  <p className="text-gray-700 dark:text-gray-300">Use R for per mole, k<sub>B</sub> for per particle!</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-bold text-yellow-900 dark:text-yellow-300 mb-2">Memory Aid</h3>
                  <p className="text-gray-700 dark:text-gray-300">Light gases (H₂, He) move FAST. Heavy gases (Xe, Rn) move SLOW.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6">Related Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/physical-chemistry-calculators/kinetic-molecular-theory-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">KMT Calculator</h3>
                <p className="text-sm text-gray-600">Calculate RMS speed</p>
              </Link>
              <Link href="/gas-laws-calculators/ideal-gas-law-calculator" className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-blue-900 mb-2">Ideal Gas Law Calculator</h3>
                <p className="text-sm text-gray-600">PV = nRT calculations</p>
              </Link>
              <Link href="/chemistry-formulas/grahams-law" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Graham's Law</h3>
                <p className="text-sm text-gray-600">Effusion and diffusion</p>
              </Link>
              <Link href="/chemistry-formulas/ideal-gas-law" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">Ideal Gas Law</h3>
                <p className="text-sm text-gray-600">PV = nRT</p>
              </Link>
              <Link href="/chemistry-formulas/rms-speed" className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-green-900 mb-2">RMS Speed Formula</h3>
                <p className="text-sm text-gray-600">Root mean square velocity</p>
              </Link>
              <Link href="/chemical-kinetics-calculators" className="p-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
                <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
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
            "headline": "Kinetic Molecular Theory Formula",
            "description": "Kinetic Molecular Theory Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/kinetic-molecular-theory-formula",
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
                "name": "Kinetic Molecular Theory Formula",
                "item": "https://chemsolved.com/chemistry-formulas/kinetic-molecular-theory-formula"
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
