import { Calculator } from '@/data/calculators';

interface CalculatorListProps {
  calculators: Calculator[];
  clusterSlug?: string;
}

const colorSchemes = [
  'from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30',
  'from-secondary-50 to-secondary-100 dark:from-secondary-900/30 dark:to-secondary-800/30',
  'from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30',
  'from-tertiary-50 to-tertiary-100 dark:from-tertiary-900/30 dark:to-tertiary-800/30',
];

export default function CalculatorList({ calculators, clusterSlug }: CalculatorListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {calculators.map((calc, index) => {
        const colorScheme = colorSchemes[index % colorSchemes.length];
        return (
        <a
          key={calc.id}
          href={clusterSlug ? `/${clusterSlug}/${calc.slug}` : `/${calc.slug}`}
          id={calc.slug}
          className="block group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl p-6 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-200/50 dark:hover:shadow-primary-900/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] animate-zoom-in hover:animate-float"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors leading-tight">
              {calc.name}
            </h3>
            <div className="flex-shrink-0 ml-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 dark:group-hover:from-primary-400 dark:group-hover:to-primary-500 transition-all group-hover:rotate-[360deg] duration-500">
              <svg 
                className="w-5 h-5 text-primary-600 dark:text-primary-300 group-hover:text-white transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed transition-colors">
            {calc.description}
          </p>
          
          {calc.formula && (
            <div className="mt-auto pt-4 border-t-2 border-gray-100 dark:border-gray-600 space-y-2 transition-colors">
              <div className={`bg-gradient-to-r ${colorScheme} rounded-lg p-3 transform transition-all group-hover:scale-105`}>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-medium uppercase tracking-wide">Formula:</div>
                <code className="text-base font-mono font-bold text-primary-800 dark:text-primary-200 block transition-colors">
                  {calc.formula}
                </code>
              </div>
              
              {calc.variables && (
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">Variables: </span>
                  {calc.variables}
                </div>
              )}
              
              {calc.units && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 rounded font-medium transition-colors animate-pulse-slow">
                    {calc.units}
                  </span>
                </div>
              )}
            </div>
          )}
        </a>
        );
      })}
    </div>
  );
}
