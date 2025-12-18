import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Concentration & Solution Calculators | Molarity, Dilution & Normality',
  description: 'Precise concentration and solution calculators for molarity, molality, dilution, normality, and percent composition. Calculate solution properties accurately.',
};

export default function ConcentrationSolutionCalculatorsPage() {
  const clusterData = getClusterPageBySlug('concentration-and-solution-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'solutions-concentrations');
  const relatedClusters = getRelatedClusterPages('concentration-and-solution-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="accent" />;
}
