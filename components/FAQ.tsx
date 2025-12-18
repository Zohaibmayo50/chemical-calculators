'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are chemistry calculators and how do they work?",
    answer: "Chemistry calculators are computational tools that apply mathematical principles to solve chemical problems. They use established chemical formulas, constants, and laws (such as the ideal gas law, stoichiometric relationships, and thermodynamic equations) to perform accurate calculations for concentration, reaction yields, molecular properties, and energy changes."
  },
  {
    question: "How do I calculate molarity for chemical solutions?",
    answer: "Molarity (M) is calculated by dividing the number of moles of solute by the volume of solution in liters: M = n/V. You can use our Molarity Calculator by entering the mass of solute, its molar mass, and the solution volume. The calculator automatically converts units and provides the molar concentration."
  },
  {
    question: "What is stoichiometry and why is it important?",
    answer: "Stoichiometry is the quantitative relationship between reactants and products in chemical reactions based on balanced equations and the law of conservation of mass. It's essential for predicting product amounts, determining limiting reagents, calculating percent yields, and ensuring proper reactant ratios in laboratory and industrial chemistry."
  },
  {
    question: "How accurate are these chemistry calculation tools?",
    answer: "Our chemistry calculators use standard chemical formulas and internationally recognized constants (such as Avogadro's number, gas constant R, and Faraday constant). Results are accurate to the precision of input values. For scientific research, always verify critical calculations and consider significant figures appropriate to your measurements."
  },
  {
    question: "Can I use these calculators for educational purposes?",
    answer: "Yes, these calculators are ideal for chemistry education at high school, undergraduate, and graduate levels. They help students verify homework solutions, understand chemical relationships, visualize calculation steps, and learn proper problem-solving approaches for stoichiometry, equilibrium, thermodynamics, and other chemistry topics."
  },
  {
    question: "What's the difference between molarity and molality?",
    answer: "Molarity (M) measures moles of solute per liter of solution (mol/L) and changes with temperature because volume is temperature-dependent. Molality (m) measures moles of solute per kilogram of solvent (mol/kg) and remains constant regardless of temperature, making it preferred for colligative properties and temperature-variable systems."
  },
  {
    question: "How do I calculate percent yield in chemical reactions?",
    answer: "Percent yield compares actual experimental yield to theoretical maximum yield: % Yield = (Actual Yield / Theoretical Yield) × 100. First calculate theoretical yield using stoichiometry from the balanced equation and limiting reagent. Then divide your actual laboratory result by this theoretical value and multiply by 100."
  },
  {
    question: "What chemistry topics do these calculators cover?",
    answer: "Our collection covers comprehensive chemistry topics including stoichiometry, solution concentrations (molarity, molality, normality), acid-base chemistry (pH, pKa, buffers), thermodynamics (enthalpy, entropy, Gibbs free energy), chemical kinetics, equilibrium, electrochemistry (Nernst equation, cell potentials), organic chemistry, biochemistry, and analytical techniques."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-rotate-in">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
            Common questions about chemical calculators and chemistry calculations
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg animate-slide-in-right"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8 transition-colors">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50 dark:bg-gray-700/50 animate-fade-in">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqData.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}
