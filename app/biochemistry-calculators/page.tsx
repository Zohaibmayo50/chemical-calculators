import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Biochemistry Calculators | Enzyme Kinetics, DNA & Protein Analysis',
  description: 'Calculate enzyme kinetics parameters, DNA concentrations, protein properties, and biochemical reaction rates for life science applications.',
};

export default function BiochemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('biochemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'biochemistry');
  const relatedClusters = getRelatedClusterPages('biochemistry-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="tertiary" />;
}
