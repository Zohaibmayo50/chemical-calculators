import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Thermodynamics Calculators | Enthalpy, Entropy & Gibbs Free Energy',
  description: 'Calculate thermodynamic properties including enthalpy, entropy, Gibbs free energy, and heat capacity. Predict reaction spontaneity and equilibrium.',
};

export default function ThermodynamicsCalculatorsPage() {
  const clusterData = getClusterPageBySlug('thermodynamics-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'thermodynamics');
  const relatedClusters = getRelatedClusterPages('thermodynamics-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="tertiary" />;
}
