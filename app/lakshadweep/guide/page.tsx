import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Clock, MapPin, Users, FileText, Plane, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Lakshadweep Travel Guide — Complete Planning Information | Sea Horizon Holidays',
  description: 'Complete Lakshadweep travel guide with best time to visit, how to reach, permits, rules, and essential travel information.',
  keywords: 'Lakshadweep travel guide, permits, best time to visit, how to reach, travel tips',
};

const guides = [
  {
    title: 'Best Time to Visit',
    slug: 'best-time-to-visit',
    description: 'Discover the perfect months for your Lakshadweep vacation with weather insights and seasonal activities.',
    icon: Clock,
    color: 'bg-blue-100 text-blue-600',
    highlights: ['October to March ideal', 'Calm seas & clear skies', 'Perfect for water sports', 'Avoid monsoon season']
  },
  {
    title: 'How to Reach',
    slug: 'how-to-reach',
    description: 'Complete guide to reaching Lakshadweep including flights, ships, and transportation options.',
    icon: Plane,
    color: 'bg-green-100 text-green-600',
    highlights: ['Fly to Agatti Airport', 'Ships from Kochi', 'Inter-island transfers', 'Booking procedures']
  },
  {
    title: 'Permits & Rules',
    slug: 'permits-rules',
    description: 'Essential information about entry permits, documentation, and local regulations.',
    icon: FileText,
    color: 'bg-orange-100 text-orange-600',
    highlights: ['Entry permits required', 'Document checklist', 'Restricted areas', 'Local guidelines']
  }
];

export default function LakshadweepGuidePage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I need help with Lakshadweep travel planning and permits.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/lakshadweep" className="hover:text-primary-600">Lakshadweep</Link>
            <span>/</span>
            <span className="text-gray-900">Travel Guide</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Travel Planning
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Lakshadweep Travel Guide
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Everything you need to know for planning your perfect Lakshadweep vacation. 
              From permits to weather, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Guide Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full ${guide.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {guide.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {guide.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/lakshadweep/guide/${guide.slug}`}>
                      Read Full Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Travel Tips
            </h2>
            <p className="text-lg text-gray-600">
              Essential tips for first-time visitors to Lakshadweep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Book in Advance',
                description: 'Limited accommodations mean early booking is essential, especially during peak season.',
                icon: Calendar
              },
              {
                title: 'Pack Light',
                description: 'Baggage restrictions apply on flights. Pack reef-safe sunscreen and essentials.',
                icon: Users
              },
              {
                title: 'Respect Local Culture',
                description: 'Lakshadweep has a rich Islamic culture. Dress modestly and respect local customs.',
                icon: Users
              },
              {
                title: 'Stay Hydrated',
                description: 'Tropical climate requires extra hydration. Carry water bottles and stay in shade.',
                icon: Clock
              },
              {
                title: 'Protect Marine Life',
                description: 'Use reef-safe products and avoid touching corals. Help preserve this ecosystem.',
                icon: MapPin
              },
              {
                title: 'Cash is King',
                description: 'Limited ATMs and card acceptance. Carry sufficient cash for your entire trip.',
                icon: FileText
              }
            ].map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-2 rounded-lg bg-primary-100 text-primary-600">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Planning Your Trip?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Our local experts handle all the complexities - from permits to itineraries. 
            Focus on enjoying your vacation while we take care of everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Expert Help
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/packages">
                View Packages
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}