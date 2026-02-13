import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Oxidation Number Rules',
  description: 'Determine oxidation states using systematic rules for redox chemistry.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/oxidation-number-rules',
  },
  keywords: 'oxidation number, oxidation state, redox, reduction, rules',
}

export default function OxidationNumberPage() {
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
            <li className="text-gray-900">Oxidation Number Rules</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Oxidation Number Rules</h1>
          <p className="text-lg opacity-90">Assign oxidation states systematically</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Oxidation Numbers</h2>
          <p className="text-gray-700 mb-4">
            Oxidation numbers (also called oxidation states) are a bookkeeping tool that tracks electron distribution in chemical compounds and helps identify which atoms are oxidized or reduced during chemical reactions. While oxidation numbers don't represent actual charges on atoms in covalent compounds, they provide a systematic method for analyzing electron transfer in redox reactions. The concept dates to the early 20th century and has become indispensable for balancing redox equations, predicting reaction products, understanding electrochemistry, and organizing chemical knowledge about element reactivity patterns.
          </p>
          <p className="text-gray-700 mb-4">
            The rules for assigning oxidation numbers follow a priority system that resolves conflicts when multiple rules could apply. For example, in most compounds oxygen has oxidation number -2, but this rule is overruled by the fluorine rule (fluorine always -1) in OF₂, where oxygen becomes +2. Understanding this priority hierarchy is crucial for correctly assigning oxidation states. The most fundamental rule is that oxidation numbers must sum to the overall charge: zero for neutral molecules, or the ion charge for polyatomic ions. This constraint allows calculation of unknown oxidation states through algebraic equations.
          </p>
          <p className="text-gray-700">
            Oxidation numbers reveal patterns in periodic table chemistry: Group 1 metals always +1, Group 2 always +2, while transition metals exhibit variable oxidation states (Fe can be +2 or +3, Mn ranges from -1 to +7). These patterns help predict compound formulas and reaction outcomes. In organic chemistry, tracking carbon oxidation states helps classify reactions: oxidation increases oxygen/decreases hydrogen content (alcohols → aldehydes → acids), while reduction does the opposite (aldehydes → alcohols). Mastering oxidation numbers is essential for understanding redox chemistry, electrochemistry, corrosion, metabolism, and industrial chemical processes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Priority Rules (Apply in Order)</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li><strong>Free elements:</strong> Oxidation number = 0 (e.g., Na, O₂, Cl₂)</li>
            <li><strong>Monatomic ions:</strong> Oxidation number = ion charge (e.g., Na⁺ = +1, Cl⁻ = -1)</li>
            <li><strong>Fluorine:</strong> Always -1 in compounds</li>
            <li><strong>Oxygen:</strong> Usually -2 (exceptions: peroxides -1, OF₂ +2)</li>
            <li><strong>Hydrogen:</strong> +1 with nonmetals, -1 with metals (hydrides)</li>
            <li><strong>Group 1 metals:</strong> Always +1</li>
            <li><strong>Group 2 metals:</strong> Always +2</li>
            <li><strong>Sum rule:</strong> Sum of all oxidation numbers = overall charge</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example: H₂SO₄</h2>
          <div className="space-y-2 text-gray-700">
            <p>Compound is neutral, so sum = 0.</p>
            <p>H: +1 (rule 5) → 2 H = +2 total</p>
            <p>O: -2 (rule 4) → 4 O = -8 total</p>
            <p>Let S = x: 2(+1) + x + 4(-2) = 0</p>
            <p>2 + x - 8 = 0 → x = +6</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: S has oxidation number +6</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Additional Worked Example: Dichromate Ion (Cr₂O₇²⁻)</h2>
          <div className="space-y-3 text-gray-700">
            <p><strong>Step 1:</strong> Identify the overall charge: -2</p>
            <p><strong>Step 2:</strong> Oxygen usually -2 (rule 4), so 7 O = 7(-2) = -14 total</p>
            <p><strong>Step 3:</strong> Let Cr oxidation state = x for each Cr atom</p>
            <p><strong>Step 4:</strong> Sum rule: 2(x) + 7(-2) = -2</p>
            <p><strong>Step 5:</strong> Solve: 2x - 14 = -2 → 2x = 12 → x = +6</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: Each Cr has oxidation number +6</p>
            <p className="text-sm text-gray-700 mt-1">Cr₂O₇²⁻ is a powerful oxidizing agent, as Cr⁺⁶ readily accepts electrons to become Cr⁺³.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          <div className="space-y-3">
            <div className="bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 mb-2">Balancing Redox Equations</h3>
              <p className="text-gray-700">Identify oxidation/reduction by tracking oxidation number changes. Oxidation = increase in oxidation number; reduction = decrease.</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 mb-2">Predicting Compound Formulas</h3>
              <p className="text-gray-700">Use common oxidation states to predict formulas: Fe⁺³ + O⁻² → Fe₂O₃ (charges must balance).</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold text-yellow-900 mb-2">Identifying Redox Reactions</h3>
              <p className="text-gray-700">If oxidation numbers change, it's a redox reaction. If no change, it's not redox (e.g., precipitation, acid-base).</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Forgetting peroxide exception (H₂O₂: O is -1, not -2).</li>
            <li>Not accounting for overall charge in polyatomic ions.</li>
            <li>Applying rules out of priority order.</li>
          </ul>
        </section>

        {/* Related Calculators */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/electrochemistry-calculators/oxidation-number-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Oxidation Number Calculator</h3>
              <p className="text-sm text-gray-600">Calculate oxidation states automatically</p>
            </a>
            <a href="/electrochemistry-calculators/redox-balancing-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Redox Balancing Calculator</h3>
              <p className="text-sm text-gray-600">Balance redox equations</p>
            </a>
            <a href="/chemistry-formulas/nernst-equation" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Nernst Equation</h3>
              <p className="text-sm text-gray-600">Electrochemistry & redox potential</p>
            </a>
            <a href="/electrochemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Redox Calculators</h3>
              <p className="text-sm opacity-90">Explore all redox chemistry tools</p>
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
            "headline": "Oxidation Number Rules",
            "description": "Oxidation Number Rules on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/oxidation-number-rules",
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
                "name": "Oxidation Number Rules",
                "item": "https://chemsolved.com/chemistry-formulas/oxidation-number-rules"
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
