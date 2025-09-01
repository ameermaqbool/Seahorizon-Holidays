import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { Toaster } from "@/components/ui/sonner";
import { ClientSideScripts } from "@/components/client-side-scripts";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seahorizonholidays.com"),
  title: {
    default: "Lakshadweep Tours & Packages — Sea Horizon Holidays (Local DMC)",
    template: "%s | Sea Horizon Holidays",
  },
  description:
    "Plan your perfect Lakshadweep holiday with Sea Horizon Holidays - Local DMC with permits handled, end-to-end planning, and customized packages.",
  keywords:
    "Lakshadweep tour packages, Lakshadweep DMC, Agatti island, Bangaram island, Lakshadweep travel, coral islands, scuba diving",
  authors: [{ name: "Sea Horizon Holidays" }],
  creator: "Sea Horizon Holidays",
  publisher: "Sea Horizon Holidays",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://seahorizonholidays.com",
    siteName: "Sea Horizon Holidays",
    title:
      "Lakshadweep Tours & Packages — Sea Horizon Holidays (Local DMC)",
    description:
      "Plan your perfect Lakshadweep holiday with Sea Horizon Holidays - Local DMC with permits handled, end-to-end planning, and customized packages.",
    images: [
      {
        url: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Beautiful Lakshadweep lagoon with crystal clear waters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@seahorizonindia",
    creator: "@seahorizonindia",
    title: "Lakshadweep Tours & Packages — Sea Horizon Holidays",
    description:
      "Plan your perfect Lakshadweep holiday with local experts. Permits handled, 24×7 support.",
    images: [
      "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://seahorizonholidays.com",
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "travel",
};

// ✅ JSON-LD structured data
const organizationLD = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness", "Organization"],
  name: "Sea Horizon Holidays",
  alternateName: "Sea Horizon India",
  description:
    "Premier Lakshadweep tour operator and destination management company specializing in coral island experiences, permits, and customized trips.",
  url: "https://seahorizonholidays.com",
  logo: "https://seahorizonholidays.com/logo.png",
  image:
    "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  telephone: "+91-8075301729",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Lakshadweep",
  },
  areaServed: {
    "@type": "Place",
    name: "Lakshadweep Islands, India",
  },
  serviceType: [
    "Travel Agency",
    "Tour Operator",
    "Destination Management Company",
  ],
  knowsAbout: [
    "Lakshadweep Tourism",
    "Coral Island Travel",
    "Agatti Island",
    "Bangaram Island",
    "Scuba Diving",
    "Island Permits",
  ],
  sameAs: ["https://www.instagram.com/seahorizonindia/"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8075301729",
    contactType: "Customer Service",
    availableLanguage: ["English", "Hindi"],
    contactOption: "TollFree",
  },
  foundingDate: "2020",
  slogan: "Lakshadweep, planned end-to-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ✅ JSON-LD Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLD) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <Toaster />
        <ClientSideScripts />
      </body>
    </html>
  );
}
