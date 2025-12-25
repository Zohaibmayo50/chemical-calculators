import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cell Potential Formula | ChemCalc',
  description: 'Calculate standard and non-standard cell potentials with examples and common pitfalls.',
  keywords: 'cell potential formula, electrochemistry, Ecell, standard reduction potential',
}

export default function CellPotentialFormulaPage() {
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
            <li className="text-gray-900">Cell Potential Formula</li>
          </ul>
        </nav>

        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-3">Cell Potential Formula</h1>
          <p className="text-lg opacity-90">Find galvanic/voltaic cell voltage from half-reactions</p>
        </div>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Standard Cell Potential</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4 text-center">
            <p className="text-2xl font-bold text-yellow-700">E°cell = E°cathode - E°anode</p>
          </div>
          <p className="text-gray-700">Use tabulated standard reduction potentials (V). Identify which half-reaction is reduction (cathode) and which is oxidation (anode).</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Non-Standard Conditions (Nernst)</h2>
          <div className="bg-gray-50 p-4 rounded text-center">
            <p className="text-lg font-mono">Ecell = E°cell - (RT/nF) ln Q</p>
            <p className="text-sm text-gray-600 mt-2">At 25 C: Ecell = E°cell - (0.0592/n) log Q</p>
          </div>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>n = moles of electrons transferred</li>
            <li>Q = reaction quotient (activities or concentrations)</li>
            <li>R = 8.314 J/mol·K, T in K, F = 96485 C/mol</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Example</h2>
          <p className="text-gray-700 mb-3"><strong>Cell:</strong> Zn(s) | Zn2+ (1.0 M) || Cu2+ (1.0 M) | Cu(s)</p>
          <div className="space-y-3 text-gray-700">
            <p>E°(Cu2+/Cu) = +0.34 V (cathode)</p>
            <p>E°(Zn2+/Zn) = -0.76 V (anode)</p>
            <p>E°cell = 0.34 - (-0.76) = +1.10 V</p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4 mt-4">
            <p className="font-semibold">Answer: E°cell = +1.10 V (spontaneous)</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Common Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Sign confusion</h3>
              <p>Do not flip the sign of tabulated reduction potentials when identifying the anode; use reduction values and subtract.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Wrong n value</h3>
              <p>Balance electrons; n is required for Nernst calculations.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Unit mix-ups</h3>
              <p>Use log base 10 only with 0.0592/n; use natural log with RT/F.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-700">Ignoring phase/activities</h3>
              <p>Pure solids/liquids have activity 1; only species in Q with concentration/pressure appear.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQ</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Does multiplying a half-reaction change E°?</h3>
              <p>No, potentials do not scale with stoichiometric multiplication.</p>
            </div>
            <div>
              <h3 className="font-semibold">How to tell spontaneity?</h3>
              <p>Positive Ecell indicates a spontaneous galvanic cell under stated conditions.</p>
            </div>
            <div>
              <h3 className="font-semibold">What if concentrations are not 1 M?</h3>
              <p>Use the Nernst equation with the appropriate Q value.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
