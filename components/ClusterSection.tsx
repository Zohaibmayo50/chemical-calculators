import { CalculatorCategory } from '@/data/calculators';
import CalculatorList from './CalculatorList';

interface ClusterSectionProps {
  category: CalculatorCategory;
  index: number;
}

export default function ClusterSection({ category, index }: ClusterSectionProps) {
  const isEven = index % 2 === 0;
  
  // Map category IDs to cluster slugs
  const categoryToClusterSlug: Record<string, string> = {
    'stoichiometry': 'stoichiometry-calculators',
    'solutions-concentrations': 'concentration-and-solution-calculators',
    'chemical-reactions': 'chemical-reaction-calculators',
    'thermodynamics': 'thermodynamics-calculators',
    'electrochemistry': 'electrochemistry-calculators',
    'physical-chemistry': 'physical-chemistry-calculators',
    'organic-chemistry': 'organic-chemistry-calculators',
    'biochemistry': 'biochemistry-calculators',
    'general-chemistry': 'atomic-structure-calculators'
  };
  
  const clusterSlug = categoryToClusterSlug[category.id] || category.id;
  
  return (
    <section 
      id={category.id}
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isEven 
          ? 'bg-white dark:bg-gray-900' 
          : 'bg-gradient-to-br from-gray-50 to-primary-50/30 dark:from-gray-800 dark:to-primary-900/20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 animate-slide-in-left">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            {category.name}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium transition-colors">
            {category.description}
          </p>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
              {category.semanticContext}
            </p>
          </div>
        </div>

        <CalculatorList calculators={category.calculators} clusterSlug={clusterSlug} />
      </div>
    </section>
  );
}
