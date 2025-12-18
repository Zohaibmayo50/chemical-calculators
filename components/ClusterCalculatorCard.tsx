import { Calculator } from '@/data/calculators';

interface ClusterCalculatorCardProps {
  calculator: Calculator;
  index: number;
  clusterSlug?: string;
}

export default function ClusterCalculatorCard({ calculator, index, clusterSlug }: ClusterCalculatorCardProps) {
  return (
    <a
      href={clusterSlug ? `/${clusterSlug}/${calculator.slug}` : `/${calculator.slug}`}
      className="block group bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-xl dark:hover:shadow-primary-900/50 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
          {calculator.name}
        </h3>
        <div className="flex-shrink-0 ml-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg 
            className="w-4 h-4 text-primary-600 dark:text-primary-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 transition-colors">
        {calculator.description}
      </p>
      
      {calculator.formula && (
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-3 transition-colors">
          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-medium">Formula:</div>
          <code className="text-sm font-mono font-bold text-primary-800 dark:text-primary-300 block">
            {calculator.formula}
          </code>
        </div>
      )}
    </a>
  );
}
