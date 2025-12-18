import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Physical Chemistry Calculators | Gases, Phase Transitions & Colligative Properties',
  description: 'Calculate gas laws, phase diagrams, colligative properties, and physical chemistry parameters for ideal and real systems.',
};

export default function PhysicalChemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('physical-chemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'physical-chemistry');
  const relatedClusters = getRelatedClusterPages('physical-chemistry-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="accent" />;
}
