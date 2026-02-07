import { Metadata } from 'next';
import { calculatorCategories } from '@/data/calculators';
import { getClusterPageBySlug, getRelatedClusterPages } from '@/data/clusterPages';
import ClusterPageTemplate from '@/components/ClusterPageTemplate';

export const metadata: Metadata = {
  title: 'Organic Chemistry Calculators | Functional Groups, Reactions & Mechanisms',
  description: 'Calculate organic reaction parameters, functional group properties, stereochemistry, and molecular structure characteristics.',
  alternates: {
    canonical: 'https://chemsolved.com/organic-chemistry-calculators',
  },
};

export default function OrganicChemistryCalculatorsPage() {
  const clusterData = getClusterPageBySlug('organic-chemistry-calculators');
  const category = calculatorCategories.find(cat => cat.id === 'organic-chemistry');
  const relatedClusters = getRelatedClusterPages('organic-chemistry-calculators');

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
            "name": "Organic Chemistry Calculators",
            "description": "Calculate degree of unsaturation, stereochemistry, and organic properties.",
            "url": "https://chemsolved.com/organic-chemistry-calculators",
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
                "name": "Organic Chemistry Calculators",
                "item": "https://chemsolved.com/organic-chemistry-calculators"
              }
            ]
          })
        }}
      />

      <ClusterPageTemplate clusterData={clusterData} category={category} relatedClusters={relatedClusters} colorScheme="secondary" />
    </>);
}
