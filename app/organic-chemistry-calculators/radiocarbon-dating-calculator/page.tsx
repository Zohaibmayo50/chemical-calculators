import RadiocarbonDatingCalculator from '@/components/calculators/RadiocarbonDatingCalculator';
import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Radiocarbon Dating Calculator | Carbon-14 Age Determination',
  description: 'Calculate age of organic samples using radiocarbon dating (C-14 method). Determine archaeological and geological ages from carbon-14 activity measurements.',
  keywords: 'radiocarbon dating calculator, carbon-14 dating, C14 dating, archaeological dating, radioactive decay, half-life calculator, age determination, archaeology calculator',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators/radiocarbon-dating-calculator',
  },
};

export default function RadiocarbonDatingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm animate-fade-in">
          <Link 
            href="/" 
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            Home
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link 
            href="/organic-chemistry-calculators" 
            className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
          >
            Organic Chemistry Calculators
          </Link>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Radiocarbon Dating</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 animate-fade-in">
          Radiocarbon Dating Calculator
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in animation-delay-100">
          Calculate age of organic samples using carbon-14 radioactive decay
        </p>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Calculator Section */}
          <div className="lg:col-span-2 space-y-8">
            <RadiocarbonDatingCalculator />

            {/* Educational Content */}
            <div className="space-y-6">
              {/* What is Radiocarbon Dating */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  What is Radiocarbon Dating?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Radiocarbon dating, also known as <strong>carbon-14 dating</strong>, is a revolutionary method 
                  for determining the age of organic materials up to about 50,000 years old. Developed by Willard 
                  Libby in 1949 (Nobel Prize 1960), this technique has transformed archaeology, geology, and 
                  paleontology by providing absolute dates for ancient artifacts and fossils.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The method relies on measuring the ratio of radioactive <strong>Â¹â´C</strong> (carbon-14) to stable 
                  <strong>Â¹Â²C</strong> (carbon-12) in organic samples. Living organisms constantly exchange carbon 
                  with the environment, maintaining a steady Â¹â´C/Â¹Â²C ratio. After death, Â¹â´C decays while Â¹Â²C remains 
                  constant, allowing age calculation from the remaining Â¹â´C activity.
                </p>
              </section>

              {/* How It Works */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  How Radiocarbon Dating Works
                </h2>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-lg text-purple-800 dark:text-purple-300 mb-3">
                      Step 1: Â¹â´C Formation in Atmosphere
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Cosmic rays collide with atmospheric nitrogen, producing radioactive carbon-14:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      Â¹â´N + n â†’ Â¹â´C + p (neutron capture)
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Â¹â´C oxidizes to COâ‚‚ and mixes into the atmosphere and oceans
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-lg text-blue-800 dark:text-blue-300 mb-3">
                      Step 2: Incorporation into Living Organisms
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Living organisms absorb Â¹â´C through:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>â€¢ Plants: Photosynthesis (Â¹â´COâ‚‚ â†’ organic compounds)</li>
                      <li>â€¢ Animals: Eating plants or other animals</li>
                      <li>â€¢ Maintains equilibrium with atmospheric Â¹â´C/Â¹Â²C ratio</li>
                      <li>â€¢ Standard activity: ~15.3 dpm/g carbon (1950 reference)</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-lg text-green-800 dark:text-green-300 mb-3">
                      Step 3: Radioactive Decay After Death
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Once an organism dies, it stops exchanging carbon with the environment:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded mb-2">
                      Â¹â´C â†’ Â¹â´N + Î²â» + Î½Ì„â‚‘ (beta decay)
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Half-life: 5,730 Â± 40 years. After each half-life, Â¹â´C activity decreases by 50%.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                    <h3 className="font-bold text-lg text-orange-800 dark:text-orange-300 mb-3">
                      Step 4: Age Calculation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Measure current Â¹â´C activity and calculate age using decay equation:
                    </p>
                    <p className="font-mono text-sm bg-white dark:bg-gray-800 p-3 rounded">
                      t = (tâ‚/â‚‚ / ln2) Ã— ln(Aâ‚€ / A)
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Where tâ‚/â‚‚ = 5730 years, Aâ‚€ = initial activity, A = current activity
                    </p>
                  </div>
                </div>
              </section>

              {/* Mathematical Formula */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Radiocarbon Dating Formula
                </h2>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800 mb-6">
                  <p className="font-bold text-lg mb-3">Age Calculation Formula:</p>
                  <p className="font-mono text-xl mb-4">
                    t = (t<sub>1/2</sub> / ln2) Ã— ln(Aâ‚€ / A)
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>t</strong> = Age of sample (years)</p>
                    <p><strong>t<sub>1/2</sub></strong> = Half-life of Â¹â´C = 5,730 years</p>
                    <p><strong>ln2</strong> = Natural logarithm of 2 â‰ˆ 0.693147</p>
                    <p><strong>Aâ‚€</strong> = Initial Â¹â´C activity (living organisms) = 15.3 dpm/g</p>
                    <p><strong>A</strong> = Current Â¹â´C activity (measured in sample) dpm/g</p>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-lg mb-3">Alternative Form (First-Order Decay):</h3>
                  <p className="font-mono text-lg mb-4">
                    A = Aâ‚€ Ã— e<sup>-Î»t</sup>
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><strong>Î»</strong> = Decay constant = ln2 / t<sub>1/2</sub> = 1.21 Ã— 10â»â´ yearâ»Â¹</p>
                    <p><strong>e</strong> = Euler's number â‰ˆ 2.71828</p>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">ðŸ“Š Activity Units:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>â€¢ <strong>dpm/g</strong> = disintegrations per minute per gram of carbon</li>
                    <li>â€¢ <strong>Bq/g</strong> = becquerels per gram (SI unit) = dpm/60</li>
                    <li>â€¢ <strong>pMC</strong> = percent modern carbon = (A/Aâ‚€) Ã— 100</li>
                  </ul>
                </div>
              </section>

              {/* Detailed Example */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Example: Dating the Dead Sea Scrolls
                </h2>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Problem:</strong> A linen sample from the Dead Sea Scrolls shows a Â¹â´C activity of 
                    13.5 dpm/g. Calculate the age of the scroll.
                  </p>

                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="font-semibold mb-2">Given Information:</p>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                        <li>â€¢ Current activity: A = 13.5 dpm/g</li>
                        <li>â€¢ Initial activity: Aâ‚€ = 15.3 dpm/g (living plants in 1950)</li>
                        <li>â€¢ Half-life: t<sub>1/2</sub> = 5,730 years</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-2">Calculation:</p>
                      <div className="space-y-2 font-mono text-sm bg-white dark:bg-gray-800 p-4 rounded">
                        <p>t = (5730 / ln2) Ã— ln(Aâ‚€ / A)</p>
                        <p>t = (5730 / 0.693) Ã— ln(15.3 / 13.5)</p>
                        <p>t = 8268 Ã— ln(1.133)</p>
                        <p>t = 8268 Ã— 0.125</p>
                        <p className="text-lg font-bold text-purple-600 dark:text-purple-400">t â‰ˆ 1,033 years</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                      <p className="font-bold text-green-800 dark:text-green-300 mb-2">Result:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        The scroll is approximately <strong>1,033 years old</strong>, dating to around 
                        <strong> 991 CE</strong> (calculated from 2024). This agrees well with paleographic 
                        estimates of the Dead Sea Scrolls (200 BCE - 100 CE) when accounting for calibration 
                        curves and uncertainties.
                      </p>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Verification:</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                        After 1033 years: A = 15.3 Ã— e<sup>-0.000121Ã—1033</sup> = 15.3 Ã— 0.882 â‰ˆ 13.5 dpm/g âœ“
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Limitations and Calibration */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Limitations and Calibration
                </h2>

                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h3 className="font-bold text-red-800 dark:text-red-300 mb-2">âš ï¸ Age Limitations</h3>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>â€¢ <strong>Minimum:</strong> ~500 years (modern contamination issues)</li>
                      <li>â€¢ <strong>Maximum:</strong> ~50,000 years (too little Â¹â´C remains)</li>
                      <li>â€¢ After 10 half-lives (57,300 years): Only 0.1% Â¹â´C remains</li>
                      <li>â€¢ Detection limit: ~0.1% modern carbon activity</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">ðŸŒ Atmospheric Variations</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Atmospheric Â¹â´C levels have not been constant over time due to:
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>â€¢ Solar activity variations (sunspot cycles)</li>
                      <li>â€¢ Earth's magnetic field fluctuations</li>
                      <li>â€¢ Volcanic COâ‚‚ emissions (depleted in Â¹â´C)</li>
                      <li>â€¢ Industrial Revolution (Suess effect - fossil fuel burning)</li>
                      <li>â€¢ Nuclear weapons testing (1950s-60s spike)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">âœ… Calibration Methods</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Radiocarbon ages are calibrated using:
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>â€¢ <strong>Tree rings (dendrochronology):</strong> Up to ~14,000 years</li>
                      <li>â€¢ <strong>Coral growth bands:</strong> Tropical corals, up to 30,000 years</li>
                      <li>â€¢ <strong>Lake/ocean sediment layers (varves):</strong> Annual deposits</li>
                      <li>â€¢ <strong>IntCal calibration curves:</strong> Updated regularly by international consortium</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">ðŸ”¬ Modern Techniques</h3>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>â€¢ <strong>AMS (Accelerator Mass Spectrometry):</strong> Direct atom counting</li>
                      <li>â€¢ <strong>Sample size:</strong> AMS requires only 1 mg carbon vs 1 g for traditional</li>
                      <li>â€¢ <strong>Precision:</strong> Â±40-100 years for AMS vs Â±200-500 for decay counting</li>
                      <li>â€¢ <strong>Speed:</strong> Hours vs weeks for traditional methods</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Applications */}
              <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                  Applications of Radiocarbon Dating
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-bold text-amber-800 dark:text-amber-300 mb-2">
                      ðŸ›ï¸ Archaeology
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Date artifacts, settlement layers, ancient manuscripts, Egyptian mummies, and human remains. 
                      Revolutionized understanding of human prehistory and cultural chronology.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                      ðŸŒ‹ Geology & Paleontology
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Determine ages of sediments, volcanic eruptions, ice cores, and fossil remains. Study 
                      climate change, glacial cycles, and extinction events.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">
                      ðŸŽ¨ Art Authentication
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Verify authenticity of paintings, sculptures, and antiques. Detect modern forgeries by 
                      identifying post-1950 nuclear bomb spike in Â¹â´C levels.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
                      ðŸŒŠ Environmental Science
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Track carbon cycle dynamics, ocean circulation, groundwater ages, and soil carbon turnover. 
                      Study past climate conditions and ecological changes.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Reference */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Key Values
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <p className="font-semibold text-purple-800 dark:text-purple-300">Half-life</p>
                    <p className="text-gray-600 dark:text-gray-400">5,730 Â± 40 years</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="font-semibold text-blue-800 dark:text-blue-300">Living Activity</p>
                    <p className="text-gray-600 dark:text-gray-400">15.3 dpm/g C</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="font-semibold text-green-800 dark:text-green-300">Valid Range</p>
                    <p className="text-gray-600 dark:text-gray-400">500-50,000 years</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <p className="font-semibold text-orange-800 dark:text-orange-300">Decay Constant</p>
                    <p className="text-gray-600 dark:text-gray-400">1.21 Ã— 10â»â´ yrâ»Â¹</p>
                  </div>
                </div>
              </div>

              {/* Related Calculators */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Related Calculators
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/chemical-reaction-calculators/radioactive-decay-calculator"
                    className="block p-3 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg hover:shadow-md transition-shadow border border-red-200 dark:border-red-800"
                  >
                    <p className="font-semibold text-red-800 dark:text-red-300 text-sm">
                      Radioactive Decay
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">General decay</p>
                  </Link>
                  <Link
                    href="/chemical-reaction-calculators/half-life-calculator"
                    className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:shadow-md transition-shadow border border-blue-200 dark:border-blue-800"
                  >
                    <p className="font-semibold text-blue-800 dark:text-blue-300 text-sm">
                      Half-Life Calculator
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Decay kinetics</p>
                  </Link>
                  <Link
                    href="/chemistry-formulas/nuclear-binding-energy"
                    className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800"
                  >
                    <p className="font-semibold text-purple-800 dark:text-purple-300 text-sm">
                      Nuclear Binding Energy
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Nuclear stability</p>
                  </Link>
                </div>
              </div>

              {/* Where It's Used */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Where It's Used
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">â€¢</span>
                    <span>Archaeological dating labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">â€¢</span>
                    <span>Museum authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">â€¢</span>
                    <span>Geological surveys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">â€¢</span>
                    <span>Climate research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">â€¢</span>
                    <span>Forensic science</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Radiocarbon Dating Calculator",
            "description": "Calculate age of organic samples using radiocarbon dating and carbon-14 decay measurements.",
            "url": "https://chemsolved.com/organic-chemistry-calculators/radiocarbon-dating-calculator",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "All",
            "permissions": "browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "creator": {
              "@type": "Organization",
              "name": "ChemSolved"
            }
          })
        }}
      />
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
                "name": "Organic Chemistry Calculators",
                "item": "https://chemsolved.com/organic-chemistry-calculators"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Radiocarbon Dating",
                "item": "https://chemsolved.com/organic-chemistry-calculators/radiocarbon-dating-calculator"
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
