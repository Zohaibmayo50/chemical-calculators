import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Atomic Structure Calculators | Quantum Numbers, Electron Configuration & Energy Levels',
  description: 'Calculate quantum numbers, electron configurations, atomic orbitals, and energy levels for atoms and ions.',
};

export default function AtomicStructureCalculatorsPage() {
  const clusterData = getClusterPageBySlug('atomic-structure-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'general-chemistry');
  const relatedClusters = getRelatedClusterPages('atomic-structure-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="primary" />;
}
