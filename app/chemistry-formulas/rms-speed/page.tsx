import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Root Mean Square Speed',
  description: 'Calculate root mean square speed (v_rms = âˆš(3RT/M)) of gas molecules. Apply kinetic molecular theory and Maxwell-Boltzmann distribution to determine gas velocities.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/rms-speed',
  },
  keywords: 'rms speed, kinetic molecular theory, gas velocity, Maxwell-Boltzmann',
}

export default function RmsSpeedPage() {
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
            <li className="text-gray-900">Root Mean Square Speed</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Root Mean Square Speed</h1>
          <p className="text-lg opacity-90">Average molecular speed in gases</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding RMS Speed</h2>
          <p className="text-gray-700 mb-4">
            Root mean square (RMS) speed is a type of average molecular speed derived from the kinetic molecular theory of gases. Unlike arithmetic mean speed, RMS speed accounts for the distribution of molecular velocities in a gas sample, providing a measure directly related to kinetic energy. It represents the square root of the average of squared speeds of all molecules.
          </p>
          <p className="text-gray-700 mb-4">
            According to kinetic molecular theory, gas molecules are in constant random motion, colliding with container walls and each other. These collisions create pressure, and the average kinetic energy of molecules is directly proportional to absolute temperature. The RMS speed quantifies this molecular motion and varies with both temperature and molecular mass.
          </p>
          <p className="text-gray-700">
            The relationship v<sub>rms</sub> = âˆš(3RT/M) shows that lighter molecules move faster than heavier ones at the same temperature, explaining phenomena like gas effusion rates and why helium balloons deflate faster than air-filled ones.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Formula</h2>
          <div className="bg-sky-50 border-l-4 border-sky-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-sky-700">v<sub>rms</sub> = âˆš(3RT / M)</p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li><strong>v<sub>rms</sub></strong> = root mean square speed (m/s)</li>
            <li><strong>R</strong> = gas constant (8.314 JÂ·molâ»Â¹Â·Kâ»Â¹)</li>
            <li><strong>T</strong> = absolute temperature (K)</li>
            <li><strong>M</strong> = molar mass (kg/mol)</li>
          </ul>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="font-semibold text-yellow-800 mb-2">Unit Consistency:</p>
            <p className="text-gray-700">Ensure M is in kg/mol, not g/mol. Convert by dividing grams by 1000. Temperature must be in Kelvin (K = Â°C + 273.15).</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Example: Oâ‚‚ at 25Â°C</h2>
          <p className="text-gray-700 mb-3"><strong>Given:</strong> M(Oâ‚‚) = 32 g/mol = 0.032 kg/mol, T = 298 K.</p>
          <div className="space-y-2 text-gray-700 bg-gray-50 p-4 rounded">
            <p><strong>Step 1:</strong> Convert units: 32 g/mol Ã· 1000 = 0.032 kg/mol</p>
            <p><strong>Step 2:</strong> Apply formula: v<sub>rms</sub> = âˆš[(3 Ã— 8.314 Ã— 298) / 0.032]</p>
            <p><strong>Step 3:</strong> Calculate numerator: 3 Ã— 8.314 Ã— 298 = 7,434 J/mol</p>
            <p><strong>Step 4:</strong> Divide: 7,434 / 0.032 = 232,312 mÂ²/sÂ²</p>
            <p><strong>Step 5:</strong> Take square root: âˆš232,312 â‰ˆ 482 m/s</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: v<sub>rms</sub> â‰ˆ 482 m/s (about 1,730 km/h)</p>
            <p className="text-sm text-gray-600 mt-2">This is roughly the speed of sound in air!</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Types of Molecular Speeds</h2>
          <div className="space-y-3">
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-2">Most Probable Speed (v<sub>mp</sub>)</h3>
              <p className="text-gray-700">v<sub>mp</sub> = âˆš(2RT/M) â€” The peak of Maxwell-Boltzmann distribution; most molecules have this speed.</p>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-2">Average Speed (v<sub>avg</sub>)</h3>
              <p className="text-gray-700">v<sub>avg</sub> = âˆš(8RT/Ï€M) â€” Arithmetic mean of all molecular speeds.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded">
              <h3 className="font-semibold text-purple-900 mb-2">Root Mean Square Speed (v<sub>rms</sub>)</h3>
              <p className="text-gray-700">v<sub>rms</sub> = âˆš(3RT/M) â€” Highest of the three; directly related to average kinetic energy.</p>
            </div>
            <p className="text-gray-700 text-sm mt-3">Relationship: v<sub>mp</sub> &lt; v<sub>avg</sub> &lt; v<sub>rms</sub> (ratio â‰ˆ 1 : 1.13 : 1.22)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Temperature and Mass Effects</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700 mb-2">Effect of Temperature</h3>
              <p className="text-gray-700">v<sub>rms</sub> âˆ âˆšT â€” Doubling absolute temperature increases speed by factor of âˆš2 (â‰ˆ1.41). Higher T = faster molecular motion.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-700 mb-2">Effect of Molar Mass</h3>
              <p className="text-gray-700">v<sub>rms</sub> âˆ 1/âˆšM â€” Lighter molecules move faster. Hâ‚‚ molecules move 4Ã— faster than Oâ‚‚ at same temperature.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Real-World Applications</h2>
          <div className="space-y-3 text-gray-700">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">Gas Separation</h3>
              <p>Uranium isotope separation (U-235/U-238) exploits small mass differences affecting diffusion rates based on molecular speeds.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">Atmospheric Science</h3>
              <p>Explains why hydrogen and helium escape Earth's atmosphere while heavier gases like Nâ‚‚ and Oâ‚‚ remain gravitationally bound.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">Vacuum Technology</h3>
              <p>Determines pumping speed requirements and gas flow characteristics in high-vacuum systems.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold text-gray-800 mb-2">Chemical Kinetics</h3>
              <p>Collision frequency and reaction rates depend on molecular speeds predicted by kinetic theory.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comparative Speeds at 25Â°C</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Gas</th>
                  <th className="px-4 py-2 text-left">M (g/mol)</th>
                  <th className="px-4 py-2 text-left">v<sub>rms</sub> (m/s)</th>
                  <th className="px-4 py-2 text-left">Relative Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-2">Hâ‚‚</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">1,920</td>
                  <td className="px-4 py-2">4.0Ã—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">He</td>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">1,360</td>
                  <td className="px-4 py-2">2.8Ã—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nâ‚‚</td>
                  <td className="px-4 py-2">28</td>
                  <td className="px-4 py-2">515</td>
                  <td className="px-4 py-2">1.1Ã—</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Oâ‚‚</td>
                  <td className="px-4 py-2">32</td>
                  <td className="px-4 py-2">482</td>
                  <td className="px-4 py-2">1.0Ã— (reference)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">COâ‚‚</td>
                  <td className="px-4 py-2">44</td>
                  <td className="px-4 py-2">410</td>
                  <td className="px-4 py-2">0.85Ã—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Takeaways</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Lighter molecules move faster at same temperature.</li>
            <li>Higher temperature = higher v<sub>rms</sub> (proportional to âˆšT).</li>
            <li>Related to kinetic energy: KE<sub>avg</sub> = Â½ m v<sub>rms</sub>Â² = (3/2) k<sub>B</sub>T.</li>
            <li>RMS speed is always greater than average speed and most probable speed.</li>
            <li>Kinetic molecular theory assumptions (ideal gas) work best at low pressure and high temperature.</li>
            <li>At same temperature, all gases have same average kinetic energy but different speeds.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/physical-chemistry-calculators/kinetic-molecular-theory-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Kinetic Molecular Theory Calculator</h3>
              <p className="text-sm text-gray-600">Calculate molecular speeds</p>
            </a>
            <a href="/physical-chemistry-calculators/grahams-law-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Graham's Law Calculator</h3>
              <p className="text-sm text-gray-600">Calculate diffusion rates</p>
            </a>
            <a href="/physical-chemistry-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Gas Laws Calculators</h3>
              <p className="text-sm opacity-90">Explore all gas law tools</p>
            </a>
            <a href="/chemistry-formulas/grahams-law" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Graham's Law</h3>
              <p className="text-sm text-gray-600">Effusion and diffusion</p>
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
            "headline": "Rms Speed",
            "description": "Rms Speed on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/rms-speed",
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
                "name": "Rms Speed",
                "item": "https://chemsolved.com/chemistry-formulas/rms-speed"
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
