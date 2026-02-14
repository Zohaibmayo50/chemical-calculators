import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Radioactive Decay Formula',
  description: 'Use N = N0 e^(âˆ’Î»t) and the relationship with half-life to compute remaining quantity.',
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Radioactive Decay</h2>
          <p className="text-gray-700 mb-4">
            Radioactive decay is a first-order kinetic process where unstable atomic nuclei spontaneously transform into more stable configurations by emitting radiation. This phenomenon, discovered by Henri Becquerel in 1896 and extensively studied by Marie and Pierre Curie, follows exponential decay kinetics characterized by a constant decay probability per unit time. Unlike chemical reactions, radioactive decay is unaffected by temperature, pressure, or chemical environment, making it an ideal natural clock for applications ranging from carbon dating to medical diagnostics.
          </p>
          <p className="text-gray-700 mb-4">
            The exponential nature of radioactive decay means that a fixed fraction of remaining nuclei decays per unit time, regardless of how many nuclei are present. This leads to the concept of half-lifeâ€”the time required for exactly half of the radioactive material to decay. Half-lives vary enormously: carbon-14 has a half-life of 5,730 years used in archaeology, iodine-131 (8 days) is used in thyroid treatment, and uranium-238 (4.5 billion years) helps geologists date Earth's oldest rocks.
          </p>
          <p className="text-gray-700 mb-4">
            Understanding radioactive decay formulas is essential for nuclear medicine, where radioisotopes are used for both diagnosis and treatment. Radiation safety officers use these equations to calculate shielding requirements and safe handling times. Environmental scientists apply them to model the transport and fate of radioisotopes in ecosystems. In nuclear power generation, decay calculations predict fuel rod lifetimes and manage radioactive waste storage requirements over thousands of years.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-rose-50 border-l-4 border-rose-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-rose-700">N = Nâ‚€ e^(âˆ’Î»t)</p>
            <p className="text-lg text-rose-700 mt-2">Î» = ln(2) / t<sub>1/2</sub></p>
          </div>
          <p className="text-gray-700 mb-4">Exponential decay relationship for radioactive nuclei over time.</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">N:</span>
              <span className="text-gray-700">Amount of radioactive substance remaining at time t (atoms, grams, or becquerels)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">Nâ‚€:</span>
              <span className="text-gray-700">Initial amount of radioactive substance at t = 0 (same units as N)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">Î»:</span>
              <span className="text-gray-700">Decay constant, probability of decay per unit time (sâ»Â¹, hâ»Â¹, or yearâ»Â¹)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">t:</span>
              <span className="text-gray-700">Elapsed time (seconds, hours, days, or yearsâ€”must match Î» units)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[140px]">t<sub>1/2</sub>:</span>
              <span className="text-gray-700">Half-life, time for N to decrease to Nâ‚€/2 (same time units as t)</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2">Alternative Forms:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>N = Nâ‚€ (1/2)^(t/t<sub>1/2</sub>) â€” using half-life directly</li>
              <li>Activity: A = Aâ‚€ e^(âˆ’Î»t) â€” decay rate in becquerels (Bq)</li>
              <li>ln(N/Nâ‚€) = âˆ’Î»t â€” linearized form useful for graphing</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> A medical isotope has a half-life of 5.0 hours. If you start with 120 mg, how much remains after 8.0 hours?</p>
          <p className="text-gray-700 mb-4"><strong>Given:</strong> t<sub>1/2</sub> = 5.0 h, Nâ‚€ = 120 mg, t = 8.0 h</p>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Calculate Decay Constant</p>
            <p className="text-gray-700">Î» = ln(2) / t<sub>1/2</sub> = 0.693147 / 5.0 h = 0.1386 hâ»Â¹</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Calculate Exponent</p>
            <p className="text-gray-700">âˆ’Î»t = âˆ’0.1386 hâ»Â¹ Ã— 8.0 h = âˆ’1.1088</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Apply Exponential Function</p>
            <p className="text-gray-700">e^(âˆ’1.1088) = 0.3299</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 4: Calculate Remaining Amount</p>
            <p className="text-gray-700">N = 120 mg Ã— 0.3299 = 39.6 mg</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: 39.6 mg remains after 8.0 hours</p>
            <p className="text-sm text-gray-600 mt-1">This represents 33% of the original amount (slightly less than 1.6 half-lives)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Carbon-14 Dating</h3>
            <p className="text-gray-700">
              Archaeologists use carbon-14 decay (t<sub>1/2</sub> = 5,730 years) to determine the age of organic materials up to 50,000 years old. By measuring the ratio of C-14 to C-12 in ancient wood, bone, or fabric, scientists calculate how long ago the organism died, revolutionizing archaeology and paleontology.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Nuclear Medicine</h3>
            <p className="text-gray-700">
              Hospitals use radioisotopes like technetium-99m (t<sub>1/2</sub> = 6 hours) for diagnostic imaging and iodine-131 for thyroid cancer treatment. Decay calculations ensure optimal imaging times and minimize patient radiation exposure, balancing diagnostic quality with safety.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Radiometric Dating of Rocks</h3>
            <p className="text-gray-700">
              Geologists use uranium-lead dating (U-238 t<sub>1/2</sub> = 4.5 billion years) to determine Earth's age and date geological events. The decay series provides multiple independent age estimates, confirming the 4.54 billion year age of our planet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Radiation Safety and Waste Management</h3>
            <p className="text-gray-700">
              Nuclear facilities calculate required storage times for radioactive waste using decay formulas. Materials must be isolated until activity decreases to safe levels, which for some isotopes means thousands of years of secure containment in geological repositories.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Radioisotopes Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Isotope</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Half-Life</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Technetium-99m</td>
                  <td className="border border-gray-300 px-4 py-2">6.0 hours</td>
                  <td className="border border-gray-300 px-4 py-2">Medical imaging scans</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Iodine-131</td>
                  <td className="border border-gray-300 px-4 py-2">8.0 days</td>
                  <td className="border border-gray-300 px-4 py-2">Thyroid cancer treatment</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Carbon-14</td>
                  <td className="border border-gray-300 px-4 py-2">5,730 years</td>
                  <td className="border border-gray-300 px-4 py-2">Archaeological dating</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Plutonium-239</td>
                  <td className="border border-gray-300 px-4 py-2">24,100 years</td>
                  <td className="border border-gray-300 px-4 py-2">Nuclear fuel/waste</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Uranium-238</td>
                  <td className="border border-gray-300 px-4 py-2">4.5 billion years</td>
                  <td className="border border-gray-300 px-4 py-2">Geological dating</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 1: Inconsistent Time Units</h3>
              <p className="text-gray-700">The decay constant Î» and time t must have reciprocal units. If Î» is in hâ»Â¹, t must be in hours. Mixing hours and seconds produces completely incorrect results.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 2: Forgetting the Negative Sign</h3>
              <p className="text-gray-700">The exponent must be negative (âˆ’Î»t), not positive. A positive exponent would incorrectly predict exponential growth instead of decay.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 3: Using Wrong Base for Logarithm</h3>
              <p className="text-gray-700">Always use natural logarithm ln(2) â‰ˆ 0.693, not logâ‚â‚€(2) â‰ˆ 0.301. The exponential decay formula requires the natural base e.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 4: Confusing Activity and Amount</h3>
              <p className="text-gray-700">Both amount (N) and activity (A = Î»N) follow exponential decay with the same Î», but they have different units and meanings. Activity is measured in becquerels (decays per second).</p>
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
            <a href="/chemical-reaction-calculators/half-life-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Half-Life Calculator</h3>
              <p className="text-sm text-gray-600">Calculate decay half-life</p>
            </a>
            <a href="/chemistry-formulas/half-life-formula" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Half-Life Formula</h3>
              <p className="text-sm text-gray-600">tâ‚/â‚‚ = ln(2)/Î» relationship</p>
            </a>
            <a href="/chemistry-formulas/integrated-rate-laws" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Integrated Rate Laws</h3>
              <p className="text-sm text-gray-600">First-order kinetics formulas</p>
            </a>
            <a href="/chemical-reaction-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
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
