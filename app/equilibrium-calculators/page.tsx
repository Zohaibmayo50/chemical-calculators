import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Equilibrium Calculators | Solubility Product & Ksp',
  description: 'Calculate solubility product constants (Ksp), predict precipitation, and analyze chemical equilibrium in saturated solutions.',
  alternates: {
    canonical: 'https://chemsolved.com/equilibrium-calculators',
  },
};

export default function EquilibriumCalculatorsPage() {
  const clusterData = getClusterPageBySlug('equilibrium-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'equilibrium');
  const relatedClusters = getRelatedClusterPages('equilibrium-calculators');

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
            "name": "Equilibrium Calculators",
            "description": "Calculate solubility product constants and chemical equilibrium.",
            "url": "https://chemsolved.com/equilibrium-calculators",
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
                "name": "Equilibrium Calculators",
                "item": "https://chemsolved.com/equilibrium-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="accent" />
    </>);
}
