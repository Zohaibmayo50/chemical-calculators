import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Activity Coefficient (γ)',
  description: 'Calculate activity coefficient (a = γ×[C]) for non-ideal solutions. Apply Debye-Hückel equation, understand ionic strength effects, and correct for solution behavior.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/activity-coefficient',
  },
  keywords: 'activity coefficient, non-ideal solutions, ionic strength, Debye-Hückel',
}

export default function ActivityCoefficientPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm breadcrumbs mb-8">
          <ul className="flex space-x-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><span className="mx-2">/</span></li>
            <li><a href="/chemistry-formulas" className="hover:text-blue-600">Chemistry Formulas</a></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-gray-900">Activity Coefficient</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Activity Coefficient (γ)</h1>
          <p className="text-lg opacity-90">Correct concentrations for non-ideal behavior</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Activity Coefficients</h2>
          <p className="text-gray-700 mb-4">
            The activity coefficient (γ) is a dimensionless correction factor that accounts for non-ideal behavior in solutions, particularly ionic solutions where electrostatic interactions between charged species cause deviations from ideal solution behavior. In ideal solutions, thermodynamic properties depend solely on concentration (molarity or molality), but real solutions—especially those containing ions—exhibit significant departures from ideality due to ion-ion interactions, ion-solvent interactions, and changes in solution structure. The activity (a = γ[C]) represents the "effective concentration" that should be used in thermodynamic equations for accurate predictions.
          </p>
          <p className="text-gray-700 mb-4">
            Activity coefficients typically have values less than 1 for ionic solutions (γ &lt; 1), meaning the effective concentration is lower than the actual concentration due to electrostatic attractions between oppositely charged ions. These ion pairs or clusters reduce the number of independently acting particles in solution. The Debye-Hückel theory, developed in 1923, provides a theoretical framework for calculating activity coefficients in dilute ionic solutions based on ionic strength—a measure of the total concentration of ions weighted by their charge squared.
          </p>
          <p className="text-gray-700">
            Understanding activity coefficients is essential for accurate calculations in analytical chemistry (pH measurements, solubility predictions, electrode potentials), industrial process chemistry (crystallization, precipitation), geochemistry (mineral dissolution), and biochemistry (enzyme kinetics in cellular environments). While introductory chemistry often uses concentrations for simplicity, rigorous thermodynamic work requires activities. The distinction becomes critical in concentrated solutions, high ionic strength environments, or when precision is paramount, such as in analytical standards or pharmaceutical formulations.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Definition</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-amber-700">a = γ × [C]</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>a</strong> = activity (effective concentration)</li>
            <li><strong>γ</strong> = activity coefficient (dimensionless)</li>
            <li><strong>[C]</strong> = molar concentration</li>
            <li>γ = 1 for ideal solutions; γ &lt; 1 for ionic solutions</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Debye-Hückel Approximation</h2>
          <p className="text-gray-700 mb-3">For dilute ionic solutions:</p>
          <div className="bg-amber-50 p-4 rounded text-center">
            <p className="text-lg font-semibold text-amber-700">log γ± = -A |z₊z₋| √I</p>
          </div>
          <p className="text-gray-700 mt-3">I = ionic strength; A ≈ 0.51 (25°C, aqueous); z = ion charges.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> NaCl, I = 0.01 M, z₊ = +1, z₋ = -1.</p>
          <div className="space-y-2 text-gray-700">
            <p>log γ± = -0.51 × 1 × √0.01 = -0.51 × 0.1 = -0.051</p>
            <p>γ± = 10⁻⁰·⁰⁵¹ ≈ 0.89</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: γ± ≈ 0.89</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Ionic Strength Calculation</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 text-center">
            <p className="text-xl font-bold text-amber-700">I = ½ Σ c<sub>i</sub>z<sub>i</sub>²</p>
          </div>
          <p className="text-gray-700 mb-3">I = ionic strength (mol/L), c<sub>i</sub> = concentration of ion i, z<sub>i</sub> = charge of ion i</p>
          
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold text-gray-800 mb-2">Example: Calculate I for 0.1 M CaCl₂</p>
            <p className="text-gray-700">CaCl₂ → Ca²⁺ + 2Cl⁻</p>
            <p className="text-gray-700">[Ca²⁺] = 0.1 M, z = +2; [Cl⁻] = 0.2 M, z = -1</p>
            <p className="text-gray-700">I = ½[(0.1)(2²) + (0.2)(1²)] = ½(0.4 + 0.2) = 0.3 M</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Accurate pH Measurements</h3>
              <p className="text-gray-700">pH = -log(a<sub>H⁺</sub>) = -log(γ<sub>H⁺</sub>[H⁺]). Activity coefficients become significant at ionic strengths above 0.01 M.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Solubility Predictions</h3>
              <p className="text-gray-700">Use activities instead of concentrations in K<sub>sp</sub> expressions for accurate solubility calculations in solutions with high ionic strength.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Electrochemistry</h3>
              <p className="text-gray-700">Nernst equation uses activities for accurate electrode potential calculations: E = E° - (RT/nF)ln(a<sub>products</sub>/a<sub>reactants</sub>)</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using Debye-Hückel at high ionic strength</h3>
              <p className="text-gray-700">Simple Debye-Hückel is valid only for I &lt; 0.1 M. Use extended Debye-Hückel or Davies equation for higher concentrations.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Forgetting to square charges</h3>
              <p className="text-gray-700">In ionic strength calculation I = ½Σc<sub>i</sub>z<sub>i</sub>², the charge must be squared. Ca²⁺ contributes 4× per mole, not 2×.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Applying to neutral molecules</h3>
              <p className="text-gray-700">Activity coefficients near 1 for uncharged species. Ionic effects are primarily for charged species in solution.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Notes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Important for accurate equilibrium calculations in concentrated solutions.</li>
            <li>Debye-Hückel valid only for I &lt; 0.1 M; use extended models for higher I.</li>
            <li>Use activities in thermodynamic expressions; concentrations for kinetics (usually).</li>
          </ul>
        </section>
        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/activity-coefficient-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Activity Coefficient Calculator</h3>
              <p className="text-sm text-gray-600">Calculate activity coefficients using Debye-Hückel</p>
            </a>
            <a href="/chemistry-formulas/ionic-strength-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Ionic Strength Formula</h3>
              <p className="text-sm text-gray-600">I = ½Σ(c<sub>i</sub>z<sub>i</sub>²) for activity calculations</p>
            </a>
            <a href="/physical-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Physical Chemistry Calculators</h3>
              <p className="text-sm opacity-90">Explore all physical chemistry tools</p>
            </a>
          </div>
        </section>
      
      {/* Structured Data - EducationalArticle */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Activity Coefficient",
            "description": "Activity Coefficient on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/activity-coefficient",
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
                "name": "Activity Coefficient",
                "item": "https://chemsolved.com/chemistry-formulas/activity-coefficient"
              }
            ]
          })
        }}
      />
      </main>
      <Footer />
    </div>
  )
}
