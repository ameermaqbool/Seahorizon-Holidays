import { Shield, Award, Clock, Users, MapPin, Phone } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Local DMC',
    description: 'Official destination management company with deep local expertise',
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Award,
    title: 'Govt Permits Handled',
    description: 'We handle all entry permits and documentation hassle-free',
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Clock,
    title: '24×7 WhatsApp Support',
    description: 'Round-the-clock assistance via WhatsApp before, during & after your trip',
    color: 'text-primary-600 bg-primary-100'
  },
  {
    icon: Users,
    title: '500+ Happy Travelers',
    description: 'Join hundreds of satisfied customers who trusted us with their dreams',
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: MapPin,
    title: 'End-to-End Planning',
    description: 'Complete trip planning from permits to transfers to accommodations',
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Phone,
    title: 'Best Price Guarantee',
    description: 'Transparent pricing with no hidden costs and best value packages',
    color: 'text-pink-600 bg-pink-100'
  }
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Sea Horizon Holidays?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with Lakshadweep's trusted local experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-primary-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-lg ${badge.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-gray-600">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}