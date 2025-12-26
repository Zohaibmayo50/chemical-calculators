import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Electrochemistry Calculators | Nernst Equation, Cell Potential & pH',
  description: 'Calculate electrode potentials, cell EMF, pH, and electrochemical cell parameters using the Nernst equation and related formulas.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/electrochemistry-calculators',
  },
};

export default function ElectrochemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('electrochemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'electrochemistry');
  const relatedClusters = getRelatedClusterPages('electrochemistry-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  return <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="primary" />;
}
