import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Thermodynamics Calculators | Enthalpy, Entropy & Gibbs Free Energy',
  description: 'Calculate thermodynamic properties including enthalpy, entropy, Gibbs free energy, and heat capacity. Predict reaction spontaneity and equilibrium.',
  alternates: {
    canonical: 'https://chemicalcalculators.com/thermodynamics-calculators',
  },
};

export default function ThermodynamicsCalculatorsPage() {
  const clusterData = getClusterPageBySlug('thermodynamics-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'thermodynamics');
  const relatedClusters = getRelatedClusterPages('thermodynamics-calculators');

  if (!clusterData || !category) {
    return <div>Error loading page data</div>;
  }

  
  return (<>
      {/* Structured Data - CollectionPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Thermodynamics Calculators",
            "description": "Calculate enthalpy, entropy, Gibbs free energy, and thermodynamic properties.",
            "url": "https://chemsolved.com/thermodynamics-calculators",
            "publisher": {
              "@type": "EducationalOrganization",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            },
            "isPartOf": {
              "@type": "WebSite",
              "name": "ChemSolved",
              "url": "https://chemsolved.com"
            }
          })
        }}
      />

      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://chemsolved.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Thermodynamics Calculators",
                "item": "https://chemsolved.com/thermodynamics-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="tertiary" />
    </>);
}
