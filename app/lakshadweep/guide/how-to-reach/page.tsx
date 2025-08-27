import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Plane, Ship, MapPin, Clock, Users, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'How to Reach Lakshadweep — Flights, Ships & Transport Guide | Sea Horizon Holidays',
  description: 'Complete guide to reaching Lakshadweep. Fly to Agatti Airport from Kochi or take ships from mainland. Inter-island transfers and booking information included.',
  keywords: 'Lakshadweep transport, Agatti Airport, flights to Lakshadweep, ships to Lakshadweep, how to reach',
};

const transportOptions = [
  {
    type: 'By Air',
    icon: Plane,
    color: 'bg-blue-100 text-blue-600',
    duration: '1.5 hours from Kochi',
    frequency: 'Daily flights',
    description: 'Fastest and most convenient way to reach Lakshadweep via Agatti Airport.',
    details: [
      'Only airport in Lakshadweep is at Agatti Island',
      'Operated by Alliance Air and IndiGo',
      'Flights from Kochi (Cochin) only',
      'Advance booking essential',
      'Baggage restrictions apply (15kg)',
      'Weather dependent operations'
    ],
    pros: ['Fast travel time', 'Daily availability', 'Comfortable journey'],
    cons: ['Higher cost', 'Baggage limits', 'Weather dependent', 'Limited seats']
  },
  {
    type: 'By Ship',
    icon: Ship,
    color: 'bg-green-100 text-green-600',
    duration: '14-20 hours from Kochi',
    frequency: '4-6 sailings per month',
    description: 'Budget-friendly option with overnight journey from Kochi to various islands.',
    details: [
      'Ships operate from Kochi port',
      'Multiple destinations: Kavaratti, Agatti, Minicoy',
      'Different classes available',
      'Seasonal operations (Oct-May)',
      'Advance booking required',
      'Can carry more luggage'
    ],
    pros: ['Lower cost', 'More luggage allowed', 'Scenic journey', 'Multiple islands'],
    cons: ['Longer travel time', 'Limited frequency', 'Weather dependent', 'Can be rough']
  }
];

const airports = [
  {
    name: 'Kochi (Cochin) Airport',
    code: 'COK',
    description: 'Main gateway to Lakshadweep with direct flights to Agatti.',
    connections: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad'],
    facilities: ['International airport', '24/7 operations', 'Multiple airlines', 'Good connectivity']
  }
];

const interIslandTransport = [
  {
    method: 'Helicopter',
    description: 'Fastest inter-island transport, weather permitting.',
    duration: '10-15 minutes',
    availability: 'Limited, advance booking'
  },
  {
    method: 'Speed Boat',
    description: 'Regular service between major islands.',
    duration: '30-60 minutes',
    availability: 'Daily, weather dependent'
  },
  {
    method: 'Traditional Boat',
    description: 'Local boats for short distances and sightseeing.',
    duration: '1-2 hours',
    availability: 'On demand'
  }
];

export default function HowToReachPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I need help with transportation to Lakshadweep. Can you assist with flight/ship bookings?`;

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
            <Link href="/lakshadweep/guide" className="hover:text-primary-600">Guide</Link>
            <span>/</span>
            <span className="text-gray-900">How to Reach</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Transportation Guide
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              How to Reach Lakshadweep
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Complete guide to reaching the coral paradise. Choose between flights to Agatti 
              or ships from Kochi based on your budget and preferences.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Overview */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Two Ways to Reach Lakshadweep
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                    <Plane className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">By Air (Recommended)</h3>
                  <p className="text-sm text-gray-600">1.5 hours from Kochi to Agatti Airport</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-3">
                    <Ship className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">By Ship (Budget)</h3>
                  <p className="text-sm text-gray-600">14-20 hours from Kochi port</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transport Options */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transportation Options
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach Lakshadweep based on your preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex p-3 rounded-full ${option.color} mr-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{option.type}</h3>
                        <p className="text-gray-600">{option.duration} • {option.frequency}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{option.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Details:</h4>
                        <ul className="space-y-2">
                          {option.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Advantages:</h4>
                          <ul className="space-y-1">
                            {option.pros.map((pro, proIndex) => (
                              <li key={proIndex} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Considerations:</h4>
                          <ul className="space-y-1">
                            {option.cons.map((con, conIndex) => (
                              <li key={conIndex} className="flex items-center text-sm text-gray-700">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Gateway Airport */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gateway to Lakshadweep
            </h2>
            <p className="text-lg text-gray-600">
              Kochi Airport is your main connection point to Lakshadweep
            </p>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kochi (Cochin) International Airport
                </h3>
                <p className="text-gray-700 mb-6">
                  The only airport with direct flights to Lakshadweep. Well-connected 
                  to major Indian cities with excellent facilities.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Connections:</h4>
                    <div className="flex flex-wrap gap-2">
                      {airports[0].connections.map((city, index) => (
                        <Badge key={index} variant="secondary">{city}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Facilities:</h4>
                    <ul className="space-y-1">
                      {airports[0].facilities.map((facility, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                          {facility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Flight Information</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Route:</span>
                    <span className="font-medium">Kochi (COK) → Agatti (AGX)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">1 hour 30 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Airlines:</span>
                    <span className="font-medium">Alliance Air, IndiGo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">Daily (weather permitting)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Baggage:</span>
                    <span className="font-medium">15kg limit</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Inter-Island Transport */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Inter-Island Transportation
            </h2>
            <p className="text-lg text-gray-600">
              Moving between islands once you reach Lakshadweep
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interIslandTransport.map((transport, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {transport.method}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{transport.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{transport.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium">{transport.availability}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Notes */}
        <section className="mb-16">
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Important Travel Notes
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Entry permits are mandatory - we handle this for all our guests',
                      'Flights are weather dependent and may be cancelled during rough weather',
                      'Book transportation well in advance, especially during peak season',
                      'Baggage restrictions are strictly enforced on flights to Agatti',
                      'Ships operate only during favorable weather (October to May)',
                      'Inter-island transfers are included in our tour packages'
                    ].map((note, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let Us Handle Your Transportation
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Skip the hassle of booking flights and permits separately. Our packages include 
            all transportation, permits, and transfers for a seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Transportation Help
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/packages">
                View All-Inclusive Packages
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}