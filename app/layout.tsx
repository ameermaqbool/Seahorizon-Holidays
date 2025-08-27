import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';
import { Toaster } from '@/components/ui/sonner';
import { ClientSideScripts } from '@/components/client-side-scripts';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seahorizonholidays.com"),
  title: {
    default: 'Lakshadweep Tours & Packages — Sea Horizon Holidays (Local DMC)',
    template: '%s | Sea Horizon Holidays'
  },
  description: 'Plan your perfect Lakshadweep holiday with Sea Horizon Holidays - Local DMC with permits handled, end-to-end planning & 24×7 WhatsApp support. Best packages from ₹24,999.',
  keywords: 'Lakshadweep tour packages, Lakshadweep DMC, Agatti island, Bangaram island, Lakshadweep travel, coral islands, scuba diving, honeymoon packages',
  authors: [{ name: 'Sea Horizon Holidays' }],
  creator: 'Sea Horizon Holidays',
  publisher: 'Sea Horizon Holidays',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://seahorizonholidays.com',
    siteName: 'Sea Horizon Holidays',
    title: 'Lakshadweep Tours & Packages — Sea Horizon Holidays (Local DMC)',
    description: 'Plan your perfect Lakshadweep holiday with Sea Horizon Holidays - Local DMC with permits handled, end-to-end planning & 24×7 WhatsApp support.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Beautiful Lakshadweep lagoon with crystal clear waters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seahorizonindia',
    creator: '@seahorizonindia',
    title: 'Lakshadweep Tours & Packages — Sea Horizon Holidays',
    description: 'Plan your perfect Lakshadweep holiday with local experts. Permits handled, 24×7 support.',
    images: ['https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop'],
  },
  alternates: {
    canonical: 'https://seahorizonholidays.com',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  category: 'travel',
};

// Structured data for the organization
const organizationLD = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness", "Organization"],
  "name": "Sea Horizon Holidays",
  "alternateName": "Sea Horizon India",
  "description": "Premier Lakshadweep tour operator and destination management company specializing in coral island experiences, permits, and end-to-end travel planning.",
  "url": "https://seahorizonholidays.com",
  "logo": "https://seahorizonholidays.com/logo.png",
  "image": "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  "telephone": "+91-8075301729",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "Lakshadweep"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Lakshadweep Islands, India"
  },
  "serviceType": [
    "Travel Agency",
    "Tour Operator",
    "Destination Management Company"
  ],
  "knowsAbout": [
    "Lakshadweep Tourism",
    "Coral Island Travel",
    "Agatti Island",
    "Bangaram Island",
    "Scuba Diving",
    "Island Permits"
  ],
  "sameAs": [
    "https://www.instagram.com/seahorizonindia/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8075301729",
    "contactType": "Customer Service",
    "availableLanguage": ["English", "Hindi"],
    "contactOption": "TollFree"
  },
  "foundingDate": "2020",
  "slogan": "Lakshadweep, planned end-to-end"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style" />
        <link rel="preload" href="https://images.pexels.com/photos/33485180/pexels-photo-33485180.jpeg?auto=compress&cs=tinysrgb&w=1920" as="image" />
        <link rel="preload" href="https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://images.pexels.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <Toaster />
        <ClientSideScripts />
      </body>
    </html>
  );
}