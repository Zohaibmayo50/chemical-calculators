import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Partition Coefficient (Kp)',
  description: 'Kp = [solute in organic] / [solute in aqueous] for extraction equilibrium.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/partition-coefficient',
  },
  keywords: 'partition coefficient, distribution, extraction, log P',
}

export default function PartitionCoefficientPage() {
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
            <li className="text-gray-900">Partition Coefficient</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Partition Coefficient (Kp)</h1>
          <p className="text-lg opacity-90">Distribution between immiscible solvents</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Partition Coefficients</h2>
          <p className="text-gray-700 mb-4">
            The partition coefficient (K<sub>p</sub> or K<sub>D</sub>) is a fundamental parameter in chemistry that quantifies how a solute distributes itself between two immiscible solvents at equilibrium. First systematically studied by Walther Nernst in 1891, this concept has become indispensable in pharmaceutical chemistry, environmental science, and analytical chemistry. The partition coefficient represents the ratio of concentrations of a compound in two immiscible phases, typically an organic solvent (like octanol or chloroform) and water. This dimensionless constant is temperature-dependent and specific to each solute-solvent system.
          </p>
          <p className="text-gray-700 mb-4">
            In pharmaceutical applications, the octanol-water partition coefficient (log P) serves as a critical predictor of drug absorption, distribution, metabolism, and excretion (ADME properties). Lipophilic drugs with high log P values readily cross lipid membranes but may have poor water solubility, while hydrophilic drugs with low log P dissolve well in blood but struggle to penetrate cell membranes. The optimal log P for oral drugs typically ranges from 0 to 3, balancing membrane permeability with aqueous solubility. Medicinal chemists manipulate log P through structural modifications—adding polar groups decreases log P (more hydrophilic), while adding nonpolar groups increases log P (more lipophilic).
          </p>
          <p className="text-gray-700">
            Environmental chemists use partition coefficients to predict pollutant behavior in ecosystems. The octanol-water partition coefficient (K<sub>ow</sub>) correlates with bioaccumulation in fatty tissues, soil adsorption, and atmospheric partitioning. Compounds with log K<sub>ow</sub> &gt; 4 tend to bioaccumulate in organisms, raising toxicity concerns. Understanding partition coefficients enables prediction of contaminant fate during remediation and assessment of chemical hazards in regulatory frameworks.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Partition Coefficient Formula and Definitions</h2>
          <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-teal-700">K<sub>p</sub> = [solute]<sub>organic</sub> / [solute]<sub>aqueous</sub></p>
          </div>
          <div className="space-y-4 text-gray-700 mt-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-teal-700 mb-2">Logarithmic Form (log P):</p>
              <p>log P = log₁₀(K<sub>p</sub>)</p>
              <p className="text-sm text-gray-600 mt-2">Commonly reported because K<sub>p</sub> values span many orders of magnitude. log P values typically range from -3 (very hydrophilic) to +10 (extremely lipophilic).</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-teal-700 mb-2">Distribution Ratio (D):</p>
              <p>D = [total solute in organic phase] / [total solute in aqueous phase]</p>
              <p className="text-sm text-gray-600 mt-2">Accounts for all species (ionized and unionized). For ionizable compounds, D varies with pH while true K<sub>p</sub> (for neutral species only) remains constant.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold text-teal-700 mb-2">Key Relationship:</p>
              <p>High K<sub>p</sub> (>1) → solute prefers organic phase (lipophilic)</p>
              <p>Low K<sub>p</sub> (<1) → solute prefers aqueous phase (hydrophilic)</p>
              <p>K<sub>p</sub> = 1 → equal distribution between phases</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Step-by-Step Example</h2>
          <div className="bg-teal-50 border-l-4 border-teal-600 p-4 mb-4">
            <p className="font-semibold text-teal-800">Problem: Calculate partition coefficient and extraction efficiency</p>
            <p className="text-gray-700 mt-2"><strong>Given:</strong> After equilibration, [iodine]<sub>CHCl₃</sub> = 0.80 M and [iodine]<sub>H₂O</sub> = 0.20 M</p>
          </div>
          
          <div className="space-y-3 text-gray-700">
            <div className="bg-white border-l-4 border-teal-500 pl-4 py-2">
              <p className="font-semibold text-teal-700">Step 1: Apply partition coefficient formula</p>
              <p>K<sub>p</sub> = [solute]<sub>organic</sub> / [solute]<sub>aqueous</sub></p>
              <p>K<sub>p</sub> = 0.80 M / 0.20 M = 4.0</p>
            </div>
            
            <div className="bg-white border-l-4 border-teal-500 pl-4 py-2">
              <p className="font-semibold text-teal-700">Step 2: Calculate log P</p>
              <p>log P = log₁₀(4.0) ≈ 0.60</p>
              <p className="text-sm text-gray-600">This positive log P indicates iodine prefers the organic chloroform phase</p>
            </div>
            
            <div className="bg-white border-l-4 border-teal-500 pl-4 py-2">
              <p className="font-semibold text-teal-700">Step 3: Calculate percentage extracted</p>
              <p>Assume equal volumes (V<sub>org</sub> = V<sub>aq</sub> = V)</p>
              <p>Moles in organic = 0.80V; Moles in aqueous = 0.20V</p>
              <p>% extraction = (0.80V)/(0.80V + 0.20V) × 100% = 80%</p>
            </div>
            
            <div className="bg-white border-l-4 border-teal-500 pl-4 py-2">
              <p className="font-semibold text-teal-700">Step 4: Interpret the result</p>
              <p>K<sub>p</sub> = 4 means iodine is 4 times more concentrated in chloroform than water. A single extraction removes 80% of iodine from the aqueous phase, demonstrating efficient separation.</p>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold text-green-800">Answer: K<sub>p</sub> = 4.0; log P ≈ 0.60; 80% extracted</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Concepts in Partition Behavior</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">1. Multiple Extraction Strategy</h3>
              <p className="text-gray-700 mb-3">Multiple small-volume extractions are more efficient than a single large-volume extraction. For n extractions with volume ratio r = V<sub>org</sub>/V<sub>aq</sub>:</p>
              <div className="bg-gray-50 p-4 rounded">
                <p className="font-mono">Fraction remaining in aqueous = [1 / (1 + K<sub>p</sub>r)]<sup>n</sup></p>
                <p className="text-sm text-gray-600 mt-2">Example: Three 10 mL extractions are more efficient than one 30 mL extraction with the same total organic solvent volume.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">2. pH Dependence for Ionizable Compounds</h3>
              <p className="text-gray-700">For weak acids (HA ⇌ H⁺ + A⁻) and bases, distribution depends on pH because only the neutral form partitions into organic solvents:</p>
              <p className="font-mono text-sm bg-gray-50 p-3 rounded mt-2">D = K<sub>p</sub> / (1 + 10<sup>pH-pKa</sup>) for acids</p>
              <p className="font-mono text-sm bg-gray-50 p-3 rounded mt-2">D = K<sub>p</sub> / (1 + 10<sup>pKa-pH</sup>) for bases</p>
              <p className="text-gray-700 mt-2">Adjusting pH controls extraction selectivity for acidic and basic compounds.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">3. Temperature Effects</h3>
              <p className="text-gray-700">Partition coefficients are temperature-dependent, typically following van't Hoff relationship:</p>
              <p className="font-mono text-sm bg-gray-50 p-3 rounded mt-2">ln K<sub>p</sub> = -ΔH°/RT + ΔS°/R</p>
              <p className="text-gray-700 mt-2">Most extractions are conducted at controlled temperatures (often 25°C) for reproducibility. Higher temperatures generally increase distribution into less polar phases.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">4. Solvent Selection Considerations</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
                <li><strong>Immiscibility:</strong> Organic and aqueous phases must not significantly mix</li>
                <li><strong>Selectivity:</strong> Choose solvents that maximize K<sub>p</sub> differences for target vs. impurities</li>
                <li><strong>Safety:</strong> Consider toxicity, flammability, and volatility</li>
                <li><strong>Recovery:</strong> Easy to evaporate or chemically remove from extracted solute</li>
                <li><strong>Common solvents:</strong> Dichloromethane, ethyl acetate, hexane, diethyl ether, chloroform</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real-World Applications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-2">Drug Design and Development</h3>
              <p className="text-gray-700">Pharmaceutical companies use log P to optimize drug candidates. Lipinski's Rule of Five states successful oral drugs typically have log P ≤ 5. Chemists modify molecular structures to achieve optimal log P: adding hydroxyl or amine groups decreases log P (better solubility), while adding alkyl chains or aromatic rings increases log P (better membrane penetration).</p>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-2">Environmental Fate Modeling</h3>
              <p className="text-gray-700">K<sub>ow</sub> predicts how pollutants partition between water, soil, sediment, and biota. Pesticides with log K<sub>ow</sub> &gt; 4 bioaccumulate in fish and wildlife. The EPA uses partition coefficients in risk assessments for chemical approvals, determining safe exposure limits and cleanup standards for contaminated sites.</p>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-2">Liquid-Liquid Extraction</h3>
              <p className="text-gray-700">Industrial separation processes exploit partition coefficients for purification. Caffeine extraction from coffee uses dichloromethane (high K<sub>p</sub> for caffeine). Rare earth metal separation employs selective extractants with vastly different partition coefficients for adjacent lanthanides. Petroleum refining uses liquid-liquid extraction to remove sulfur and nitrogen compounds.</p>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
              <h3 className="font-semibold text-teal-800 mb-2">Analytical Chemistry</h3>
              <p className="text-gray-700">Sample preparation for chromatography and mass spectrometry often involves extraction to concentrate analytes and remove matrix interferences. Solid phase extraction mimics liquid-liquid partitioning using bonded stationary phases. Knowing compound log P values helps predict retention times in reversed-phase HPLC where separation depends on differential partitioning between mobile and stationary phases.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes and Tips</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Confusing K<sub>p</sub> with Distribution Ratio (D)</h3>
              <p className="text-gray-700">K<sub>p</sub> applies only to the neutral, un-ionized form of a compound. Distribution ratio D accounts for all species (ionized and neutral). For ionizable compounds, D varies with pH while K<sub>p</sub> is constant. Always specify which you're reporting and under what conditions (pH, temperature).</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Ignoring Volume Ratios in Extraction Calculations</h3>
              <p className="text-gray-700">When calculating extraction efficiency, you must account for phase volume ratios. The fraction extracted = K<sub>p</sub>V<sub>org</sub>/(K<sub>p</sub>V<sub>org</sub> + V<sub>aq</sub>). Many students incorrectly assume equal volumes or forget this term entirely, leading to erroneous extraction efficiency predictions.</p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700 mb-1">Using Partition Coefficients Outside Dilute Solution Range</h3>
              <p className="text-gray-700">K<sub>p</sub> assumes ideal behavior and constant activity coefficients, valid only for dilute solutions. At high concentrations, solute-solute interactions, dimerization, and non-ideal mixing can cause significant deviations. Always verify concentration ranges where reported K<sub>p</sub> values apply.</p>
            </div>
            
            <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-3 rounded">
              <h3 className="font-semibold text-yellow-700 mb-1">Pro Tip: Computational Prediction</h3>
              <p className="text-gray-700">Software packages (AlogP, XlogP, ClogP) predict log P from molecular structure with reasonable accuracy (±0.5 log units). These tools accelerate drug design by screening virtual libraries before synthesis. However, always validate predictions experimentally for lead compounds, as subtle structural changes can significantly affect log P.</p>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/partition-coefficient-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Partition Coefficient Calculator</h3>
              <p className="text-sm text-gray-600">Calculate K<sub>p</sub> = [organic]/[aqueous]</p>
            </a>
            <a href="/solution-calculators/dilution-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Dilution Calculator</h3>
              <p className="text-sm text-gray-600">Prepare solutions for extraction</p>
            </a>
            <a href="/chemistry-formulas/solubility-product-constant-ksp" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Solubility Product (K<sub>sp</sub>)</h3>
              <p className="text-sm text-gray-600">Related equilibrium constant</p>
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
            "headline": "Partition Coefficient",
            "description": "Partition Coefficient on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/partition-coefficient",
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
                "name": "Partition Coefficient",
                "item": "https://chemsolved.com/chemistry-formulas/partition-coefficient"
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
