import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Clock, Users, Star, Waves, Camera, Heart, Anchor } from 'lucide-react';

export const metadata = {
  title: 'Lakshadweep Travel Guide — Islands, Culture, Activities | Sea Horizon Holidays',
  description: 'Complete Lakshadweep travel guide covering all islands, best time to visit, permits, culture, activities, and local insights from Sea Horizon Holidays.',
  keywords: 'Lakshadweep guide, coral islands, Agatti, Bangaram, travel tips, permits, best time to visit',
};

const islands = [
  {
    name: 'Agatti Island',
    slug: 'agatti',
    description: 'Gateway to Lakshadweep with the only airport. Perfect for first-time visitors.',
    image: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Airport connectivity', 'Beautiful lagoon', 'Water sports hub', 'Local culture']
  },
  {
    name: 'Bangaram Island',
    slug: 'bangaram',
    description: 'Exclusive uninhabited island paradise for luxury travelers.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Pristine beaches', 'Luxury resorts', 'Scuba diving', 'Complete privacy']
  },
  {
    name: 'Thinnakara Island',
    slug: 'thinnakara',
    description: 'Small coral island perfect for day trips and snorkeling.',
    image: 'https://images.pexels.com/photos/7502475/pexels-photo-7502475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Day trip destination', 'Excellent snorkeling', 'Coral gardens', 'Peaceful atmosphere']
  },
  {
    name: 'Kavaratti Island',
    slug: 'kavaratti',
    description: 'Administrative capital with rich cultural heritage and marine museum.',
    image: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Administrative center', 'Marine museum', 'Cultural sites', 'Local markets']
  }
];

const quickGuides = [
  {
    title: 'Best Time to Visit',
    slug: 'best-time-to-visit',
    description: 'October to March offers perfect weather with calm seas and clear skies.',
    icon: Clock,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'How to Reach',
    slug: 'how-to-reach',
    description: 'Fly to Agatti Airport from Kochi. Ships also available from mainland.',
    icon: MapPin,
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Permits & Rules',
    slug: 'permits-rules',
    description: 'Entry permits required. We handle all documentation for you.',
    icon: Users,
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function LakshadweepPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I'd like to know more about Lakshadweep and plan my trip.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Coral Paradise
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Discover Lakshadweep Islands
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Pristine coral atolls, crystal-clear lagoons, and untouched beaches await. 
              Explore India's tropical paradise with our comprehensive travel guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Plan My Trip
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
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Guides */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Travel Information
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know before visiting Lakshadweep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex p-4 rounded-full ${guide.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {guide.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/lakshadweep/guide/${guide.slug}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Islands Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore the Islands
            </h2>
            <p className="text-lg text-gray-600">
              Each island offers unique experiences and natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {islands.map((island, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={island.image}
                    alt={island.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{island.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{island.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {island.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/lakshadweep/islands/${island.slug}`}>
                      Explore {island.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Activities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Things to Do
            </h2>
            <p className="text-lg text-gray-600">
              Adventure, relaxation, and cultural experiences await
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Scuba Diving', icon: Waves, description: 'Explore vibrant coral reefs' },
              { name: 'Snorkeling', icon: Waves, description: 'Swim with tropical fish' },
              { name: 'Photography', icon: Camera, description: 'Capture pristine beauty' },
              { name: 'Island Hopping', icon: Anchor, description: 'Visit multiple atolls' },
              { name: 'Cultural Tours', icon: Users, description: 'Meet local communities' },
              { name: 'Sunset Cruises', icon: Heart, description: 'Romantic evening sails' },
              { name: 'Kayaking', icon: Waves, description: 'Paddle crystal lagoons' },
              { name: 'Beach Relaxation', icon: Star, description: 'Unwind on white sands' }
            ].map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-4 hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 rounded-full bg-primary-100 text-primary-600 mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore Lakshadweep?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Let our local experts create the perfect itinerary for your coral island adventure. 
            From permits to activities, we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <Link href="/packages">
                View Tour Packages
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Custom Quote
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}