import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Planck Equation: Photon Energy & Frequency Formula',
  description: 'Calculate photon energy using Planck\'s equation (E = hÎ½). Relate energy, frequency, and wavelength for electromagnetic radiation and quantum mechanics applications.',
  alternates: {
    canonical: 'https://chemsolved.com/chemistry-formulas/planck-equation',
  },
  keywords: 'Planck equation, photon energy, frequency, quantum mechanics, wavelength',
}

export default function PlanckEquationPage() {
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
            <li className="text-gray-900">Planck Equation</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Planck Equation</h1>
          <p className="text-lg opacity-90">Energy quantization of light</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding the Planck Equation</h2>
          <p className="text-gray-700 mb-4">
            The Planck equation, formulated by Max Planck in 1900, represents one of the most revolutionary discoveries in physicsâ€”the quantization of energy. Planck proposed that electromagnetic radiation is emitted and absorbed in discrete packets called quanta (later named photons), with energy directly proportional to frequency. This groundbreaking concept solved the ultraviolet catastrophe problem in blackbody radiation and laid the foundation for quantum mechanics, fundamentally changing our understanding of light and matter interactions.
          </p>
          <p className="text-gray-700 mb-4">
            The relationship E = hÎ½ establishes that energy and frequency are inseparable properties of electromagnetic radiation. Higher frequency radiation (UV, X-rays, gamma rays) carries more energy per photon than lower frequency radiation (infrared, microwaves, radio waves). This explains why ultraviolet light causes sunburn while infrared light produces warmthâ€”UV photons have sufficient energy to break chemical bonds in DNA, while IR photons merely increase molecular vibrations. The Planck constant (h = 6.626 Ã— 10â»Â³â´ JÂ·s) is one of nature's fundamental constants, appearing throughout quantum mechanics.
          </p>
          <p className="text-gray-700 mb-4">
            Applications of the Planck equation span from explaining the photoelectric effect (which earned Einstein the Nobel Prize) to designing modern technologies like photovoltaic cells, LEDs, and laser systems. In spectroscopy, the equation connects observed wavelengths to the energy differences between molecular or atomic states, enabling chemists to identify substances and study molecular structure. Understanding photon energy is essential for photochemistry, where light drives reactions like photosynthesis and industrial polymer curing processes.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Formula</h2>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-violet-700">E = hÎ½</p>
            <p className="text-lg text-violet-700 mt-2">Î½ = c / Î»</p>
            <p className="text-lg text-violet-700 mt-2">Therefore: E = hc / Î»</p>
          </div>
          <p className="text-gray-700 mb-4">Calculate photon energy from frequency or wavelength of electromagnetic radiation.</p>
          
          <div className="mt-4 space-y-3">
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[100px]">E:</span>
              <span className="text-gray-700">Photon energy (joules, J) or electron volts (eV, where 1 eV = 1.602 Ã— 10â»Â¹â¹ J)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[100px]">h:</span>
              <span className="text-gray-700">Planck constant = 6.626 Ã— 10â»Â³â´ JÂ·s (or 4.136 Ã— 10â»Â¹âµ eVÂ·s)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[100px]">Î½ (nu):</span>
              <span className="text-gray-700">Frequency of electromagnetic radiation (Hz or sâ»Â¹)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[100px]">c:</span>
              <span className="text-gray-700">Speed of light in vacuum = 2.998 Ã— 10â¸ m/s (often rounded to 3.0 Ã— 10â¸ m/s)</span>
            </div>
            <div className="flex items-start">
              <span className="font-semibold text-gray-800 min-w-[100px]">Î» (lambda):</span>
              <span className="text-gray-700">Wavelength of electromagnetic radiation (meters, nm, or Ã…ngstrÃ¶ms)</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2">Key Relationships:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Energy is directly proportional to frequency: higher Î½ â†’ higher E</li>
              <li>Energy is inversely proportional to wavelength: shorter Î» â†’ higher E</li>
              <li>For moles of photons: E<sub>mol</sub> = N<sub>A</sub>hÎ½ (where N<sub>A</sub> = 6.022 Ã— 10Â²Â³)</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Example</h2>
          <p className="text-gray-700 mb-3"><strong>Problem:</strong> Calculate the energy of a photon of green light with wavelength Î» = 500 nm.</p>
          <p className="text-gray-700 mb-4"><strong>Given:</strong> Î» = 500 nm, h = 6.626 Ã— 10â»Â³â´ JÂ·s, c = 3.0 Ã— 10â¸ m/s</p>
          
          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 1: Convert Wavelength to Meters</p>
            <p className="text-gray-700">Î» = 500 nm = 500 Ã— 10â»â¹ m = 5.00 Ã— 10â»â· m</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 2: Apply E = hc/Î» Formula</p>
            <p className="text-gray-700">E = (6.626 Ã— 10â»Â³â´ JÂ·s)(3.0 Ã— 10â¸ m/s) / (5.00 Ã— 10â»â· m)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 3: Calculate Numerator</p>
            <p className="text-gray-700">(6.626 Ã— 3.0) Ã— 10â»Â³â´âºâ¸ = 19.878 Ã— 10â»Â²â¶ = 1.9878 Ã— 10â»Â²âµ JÂ·m</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 4: Divide by Wavelength</p>
            <p className="text-gray-700">E = (1.9878 Ã— 10â»Â²âµ) / (5.00 Ã— 10â»â·) = 3.98 Ã— 10â»Â¹â¹ J</p>
          </div>

          <div className="bg-gray-50 p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">Step 5: Optional - Convert to Electron Volts</p>
            <p className="text-gray-700">E = (3.98 Ã— 10â»Â¹â¹ J) / (1.602 Ã— 10â»Â¹â¹ J/eV) = 2.48 eV</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: E = 3.98 Ã— 10â»Â¹â¹ J = 2.48 eV</p>
            <p className="text-sm text-gray-600 mt-1">This energy is insufficient to ionize atoms but can excite electrons in certain molecules.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Applications</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Photoelectric Effect</h3>
            <p className="text-gray-700">
              Einstein's explanation of the photoelectric effect using Planck's equation demonstrated that light behaves as particles. When photon energy (hÎ½) exceeds the work function of a metal, electrons are ejected. This phenomenon is fundamental to photovoltaic solar cells, light sensors, and photomultiplier tubes used in scientific instrumentation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Spectroscopy and Molecular Analysis</h3>
            <p className="text-gray-700">
              Absorption and emission spectroscopy rely on the Planck equation to relate observed wavelengths to energy level transitions in atoms and molecules. UV-Vis spectroscopy identifies compounds by their characteristic absorption patterns, while IR spectroscopy reveals molecular vibrations. Each absorption peak represents Î”E = hÎ½ for a specific transition.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3. LED and Laser Technology</h3>
            <p className="text-gray-700">
              Light-emitting diodes (LEDs) emit photons when electrons transition between energy levels in semiconductors. The Planck equation determines the color (wavelength) of light emitted based on the band gap energy. Red LEDs have lower energy gaps (~1.8 eV) while blue LEDs require higher energies (~3.0 eV).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Photochemistry and Photobiology</h3>
            <p className="text-gray-700">
              Chemical reactions driven by light, including photosynthesis and vitamin D synthesis in skin, require photons with sufficient energy to break or form chemical bonds. The Planck equation helps predict which wavelengths can drive specific photochemical processes, enabling rational design of light-activated drugs and photocatalysts.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Electromagnetic Spectrum Energy Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Radiation Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Wavelength Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Photon Energy (eV)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Gamma rays</td>
                  <td className="border border-gray-300 px-4 py-2">&lt; 0.01 nm</td>
                  <td className="border border-gray-300 px-4 py-2">&gt; 124 keV</td>
                  <td className="border border-gray-300 px-4 py-2">Cancer radiotherapy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">X-rays</td>
                  <td className="border border-gray-300 px-4 py-2">0.01-10 nm</td>
                  <td className="border border-gray-300 px-4 py-2">124 eV - 124 keV</td>
                  <td className="border border-gray-300 px-4 py-2">Medical imaging</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ultraviolet</td>
                  <td className="border border-gray-300 px-4 py-2">10-400 nm</td>
                  <td className="border border-gray-300 px-4 py-2">3.1-124 eV</td>
                  <td className="border border-gray-300 px-4 py-2">Sterilization, sunburn</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Visible light</td>
                  <td className="border border-gray-300 px-4 py-2">400-700 nm</td>
                  <td className="border border-gray-300 px-4 py-2">1.8-3.1 eV</td>
                  <td className="border border-gray-300 px-4 py-2">Vision, photosynthesis</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Infrared</td>
                  <td className="border border-gray-300 px-4 py-2">700 nm - 1 mm</td>
                  <td className="border border-gray-300 px-4 py-2">0.001-1.8 eV</td>
                  <td className="border border-gray-300 px-4 py-2">Heat, IR spectroscopy</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Microwave</td>
                  <td className="border border-gray-300 px-4 py-2">1 mm - 1 m</td>
                  <td className="border border-gray-300 px-4 py-2">10â»â¶-0.001 eV</td>
                  <td className="border border-gray-300 px-4 py-2">Cooking, radar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 1: Wavelength Unit Confusion</h3>
              <p className="text-gray-700">Always convert wavelength to meters before using E = hc/Î». If Î» is given in nm, multiply by 10â»â¹; if in Ã…ngstrÃ¶ms (Ã…), multiply by 10â»Â¹â°. Forgetting unit conversion produces answers off by factors of 10Â³ or more.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 2: Confusing Frequency and Wavelength</h3>
              <p className="text-gray-700">Frequency and wavelength are inversely related: Î½ = c/Î». Higher frequency means shorter wavelength. Don't mistakenly use both in the same calculation or assume they're directly proportional.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 3: Using Wrong Planck Constant</h3>
              <p className="text-gray-700">If you want energy in joules, use h = 6.626 Ã— 10â»Â³â´ JÂ·s. For energy in eV, use h = 4.136 Ã— 10â»Â¹âµ eVÂ·s. Mixing units produces incorrect results.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h3 className="font-semibold text-red-900 mb-2">Mistake 4: Forgetting Speed of Light Units</h3>
              <p className="text-gray-700">The speed of light is c = 3.0 Ã— 10â¸ m/s. If your wavelength is in meters and you use this value, your energy will be in joules (with appropriate h value). Dimensional analysis prevents unit errors.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Calculators</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/atomic-structure-calculators/wavelength-energy-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Wavelength-Energy Calculator</h3>
              <p className="text-sm text-gray-600">Calculate photon properties</p>
            </a>
            <a href="/atomic-structure-calculators/bohr-model-calculator" className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-900 mb-2">Bohr Model Calculator</h3>
              <p className="text-sm text-gray-600">Energy level transitions</p>
            </a>
            <a href="/chemistry-formulas/wavelength-energy-relationship" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">Wavelength-Energy Relationship</h3>
              <p className="text-sm text-gray-600">E = hc/Î» formula</p>
            </a>
            <a href="/chemistry-formulas/de-broglie-wavelength" className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-green-900 mb-2">De Broglie Wavelength</h3>
              <p className="text-sm text-gray-600">Matter wave properties</p>
            </a>
            <a href="/atomic-structure-calculators" className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">All Quantum & Atomic Structure Calculators</h3>
              <p className="text-sm opacity-90">Explore all quantum and atomic tools</p>
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
            "headline": "Planck Equation",
            "description": "Planck Equation on ChemSolved",
            "url": "https://chemsolved.com/chemistry-formulas/planck-equation",
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
                "name": "Planck Equation",
                "item": "https://chemsolved.com/chemistry-formulas/planck-equation"
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
