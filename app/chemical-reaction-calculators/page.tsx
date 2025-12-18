import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Chemical Reaction Calculators | Equilibrium, Kinetics & Rates',
  description: 'Calculate reaction rates, equilibrium constants, activation energy, and reaction quotients. Tools for chemical kinetics and equilibrium analysis.',
};

export default function ChemicalReactionCalculatorsPage() {
  const clusterData = getClusterPageBySlug('chemical-reaction-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'chemical-reactions');
  const relatedClusters = getRelatedClusterPages('chemical-reaction-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="secondary" />;
}
