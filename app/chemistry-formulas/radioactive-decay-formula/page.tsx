import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Radioactive Decay Formula',
  description: 'Use N = N0 e^(−λt) and the relationship with half-life to compute remaining quantity.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/radioactive-decay-formula',
  },
  keywords: 'radioactive decay formula, half-life, decay constant, nuclear decay',
}

export default function RadioactiveDecayFormulaPage() {
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
            <li className="text-gray-900">Radioactive Decay Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-rose-600 to-red-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Radioactive Decay Formula</h1>
          <p className="text-lg opacity-90">Exponential decay of nuclei with time</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Equations</h2>
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-rose-700">N = N0 e^(−λ t)</p>
            <p className="text-lg text-rose-700 mt-2">λ = ln(2) / t_1/2</p>
          </div>
          <p className="text-gray-700">N0 is initial quantity; N is remaining after time t; λ is the decay constant; t_1/2 is half-life.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> t_1/2 = 5.0 h, N0 = 120 mg, t = 8.0 h.</p>
          <div className="space-y-2 text-gray-700">
            <p>λ = ln(2)/5.0 = 0.1386 h^-1</p>
            <p>N = 120 e^(−0.1386 × 8.0) = 120 e^(−1.1088) ≈ 39.9 mg</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: ≈ 39.9 mg remaining after 8 h</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong units</h3>
              <p>Match time units for λ and t; use consistent hours, seconds, etc.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Using percent incorrectly</h3>
              <p>Work with absolute quantities or fractions; convert to percentages at the end.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/chemical-reaction-calculators/radioactive-decay-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Radioactive Decay Calculator</h3>
              <p className="text-sm text-gray-600">Calculate remaining quantity</p>
            </a>
            <a href="/kinetics-calculators/half-life-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Half-Life Calculator</h3>
              <p className="text-sm text-gray-600">Calculate decay half-life</p>
            </a>
            <a href="/chemistry-formulas/half-life-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Half-Life Formula</h3>
              <p className="text-sm text-gray-600">t₁/₂ = ln(2)/λ relationship</p>
            </a>
            <a href="/chemistry-formulas/integrated-rate-laws" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Integrated Rate Laws</h3>
              <p className="text-sm text-gray-600">First-order kinetics formulas</p>
            </a>
            <a href="/chemical-kinetics-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Chemical Kinetics Calculators</h3>
              <p className="text-sm opacity-90">Explore all kinetics tools and calculators</p>
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
            "headline": "Radioactive Decay Formula",
            "description": "Radioactive Decay Formula on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/radioactive-decay-formula",
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
                "name": "Radioactive Decay Formula",
                "item": "https://chemsolved.com/chemistry-formulas/radioactive-decay-formula"
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
