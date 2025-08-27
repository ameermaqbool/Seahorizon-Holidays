import type { WithContext, TravelAgency, Product, Organization } from "schema-dts";

interface StructuredDataProps {
  type: 'organization' | 'package' | 'article';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: WithContext<TravelAgency | Product | Organization>;

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: 'Sea Horizon Holidays',
        alternateName: 'Sea Horizon India',
        description: 'Premier Lakshadweep tour operator and destination management company specializing in coral island experiences, permits, and end-to-end travel planning.',
        url: 'https://seahorizonholidays.com',
        logo: 'https://seahorizonholidays.com/logo.png',
        image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        telephone: '+91-8075301729',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: 'Lakshadweep'
        },
        areaServed: {
          '@type': 'Place',
          name: 'Lakshadweep Islands, India'
        },
        knowsAbout: [
          "Travel Agency",
          "Tour Operator",
          "Destination Management Company"
        ],

        sameAs: [
          'https://www.instagram.com/seahorizonindia/'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8075301729',
          contactType: 'Customer Service',
          availableLanguage: ['English', 'Hindi'],
        },
        foundingDate: '2020',
        slogan: 'Lakshadweep, planned end-to-end',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1'
        }
      };
      break;

    case 'package':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: data.title,
        description: data.description,
        image: data.images,
        brand: {
          '@type': 'Brand',
          name: 'Sea Horizon Holidays'
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Sea Horizon Holidays'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '120',
          bestRating: '5',
          worstRating: '1'
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}