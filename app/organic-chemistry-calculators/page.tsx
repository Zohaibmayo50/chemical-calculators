import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Organic Chemistry Calculators | Functional Groups, Reactions & Mechanisms',
  description: 'Calculate organic reaction parameters, functional group properties, stereochemistry, and molecular structure characteristics.',
};

export default function OrganicChemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('organic-chemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'organic-chemistry');
  const relatedClusters = getRelatedClusterPages('organic-chemistry-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="secondary" />;
}
