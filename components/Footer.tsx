import Link from 'next/link';
import { calculatorCategories } from '@/data/calculators';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 border-t-4 border-primary-600 dark:border-primary-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 animate-fade-in-up">
          {/* About Section */}
          <div>
            <h3 className="text-white dark:text-primary-400 font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">⚗️</span>
              ChemSolved
            </h3>
            <p className="text-sm leading-relaxed mb-4 transition-colors">
              ChemSolved is an educational chemistry calculator platform. Accurate, free, and accessible 24/7.
            </p>
          </div>

          {/* Quick Links - Stoichiometry & Solutions */}
          <div>
            <h4 className="text-white dark:text-primary-400 font-semibold mb-4">Popular Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/concentration-and-solution-calculators/molarity-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → Molarity Calculator
                </a>
              </li>
              <li>
                <a href="/stoichiometry-calculators/stoichiometry-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → Stoichiometry Calculator
                </a>
              </li>
              <li>
                <a href="/atomic-structure-calculators/ph-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → pH Calculator
                </a>
              </li>
              <li>
                <a href="/stoichiometry-calculators/molecular-weight-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → Molar Mass Calculator
                </a>
              </li>
              <li>
                <a href="/concentration-and-solution-calculators/dilution-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → Dilution Calculator
                </a>
              </li>
              <li>
                <a href="/stoichiometry-calculators/percent-yield-calculator" className="hover:text-primary-400 dark:hover:text-primary-300 transition-all hover:translate-x-1 inline-block">
                  → Percent Yield Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              {calculatorCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <a 
                    href={`#${category.id}`} 
                    className="hover:text-primary-400 transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-primary-400 transition-colors">
                  How Calculators Work
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-primary-400 transition-colors">
                  About ChemSolved
                </a>
              </li>
              <li>
                <a href="mailto:contact@chemsolved.com" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">
              © {new Date().getFullYear()} ChemSolved — Chemistry Calculators & Educational Tools
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Use
              </a>
              <a href="/disclaimer" className="hover:text-primary-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            Educational and informational purposes only. Always verify critical calculations for laboratory and research applications.
          </p>
        </div>
      </div>
    </footer>
  );
}
