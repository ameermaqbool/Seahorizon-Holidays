import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Clock, Users, MapPin, Phone, Star, CheckCircle, Heart, Anchor } from 'lucide-react';

export const metadata = {
  title: 'Why Book with Sea Horizon Holidays — Local Experts, Permits, 24×7 Support',
  description: 'Discover why Sea Horizon Holidays is Lakshadweep\'s trusted DMC. Local expertise, government permits handled, 24×7 WhatsApp support, and 500+ happy travelers.',
  keywords: 'Lakshadweep DMC, local tour operator, permits handled, WhatsApp support, trusted travel company',
};

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Official Local DMC',
    description: 'We are an officially registered Destination Management Company with deep local expertise and government connections.',
    benefits: [
      'Licensed tour operator in Lakshadweep',
      'Direct relationships with local authorities',
      'In-depth knowledge of all islands',
      'Emergency support network on ground'
    ],
    color: 'text-green-600 bg-green-100'
  },
  {
    icon: Award,
    title: 'Permits & Documentation',
    description: 'We handle all entry permits, documentation, and government formalities so you can focus on enjoying your vacation.',
    benefits: [
      'Entry permits processed hassle-free',
      'All government documentation handled',
      'Compliance with local regulations',
      'Fast-track processing for urgent bookings'
    ],
    color: 'text-blue-600 bg-blue-100'
  },
  {
    icon: Clock,
    title: '24×7 WhatsApp Support',
    description: 'Round-the-clock assistance via WhatsApp before, during, and after your trip. Real humans, not bots.',
    benefits: [
      'Instant responses on WhatsApp',
      'Pre-trip planning assistance',
      'On-ground support during your stay',
      'Post-trip follow-up and feedback'
    ],
    color: 'text-primary-600 bg-primary-100'
  },
  {
    icon: Users,
    title: '500+ Happy Travelers',
    description: 'Join hundreds of satisfied customers who trusted us with their dream Lakshadweep vacation.',
    benefits: [
      '4.8/5 average customer rating',
      'Verified reviews from real travelers',
      'High repeat customer rate',
      'Strong word-of-mouth referrals'
    ],
    color: 'text-purple-600 bg-purple-100'
  },
  {
    icon: MapPin,
    title: 'End-to-End Planning',
    description: 'Complete trip planning from permits to transfers to accommodations. One point of contact for everything.',
    benefits: [
      'Customized itinerary planning',
      'Airport transfers included',
      'Accommodation booking assistance',
      'Activity and excursion coordination'
    ],
    color: 'text-orange-600 bg-orange-100'
  },
  {
    icon: Phone,
    title: 'Best Price Guarantee',
    description: 'Transparent pricing with no hidden costs. We guarantee the best value for your Lakshadweep experience.',
    benefits: [
      'No hidden fees or surprise charges',
      'Competitive pricing on all packages',
      'Value-added services included',
      'Flexible payment options available'
    ],
    color: 'text-pink-600 bg-pink-100'
  }
];

const testimonials = [
  {
    name: 'Priya & Rahul Sharma',
    location: 'Mumbai',
    rating: 5,
    quote: 'Sea Horizon made our honeymoon absolutely magical! From permits to the romantic dinner setup, everything was perfect.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'The Gupta Family',
    location: 'Delhi',
    rating: 5,
    quote: 'Traveling with kids was worry-free thanks to their family coordinator. The shallow lagoons were perfect for our children.',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    name: 'Adventure Squad',
    location: 'Bangalore',
    rating: 5,
    quote: 'Eight friends, endless fun! The group activities and bonfire nights were perfectly organized. Already planning our next trip!',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];

const stats = [
  { number: '500+', label: 'Happy Travelers', icon: Users },
  { number: '4.8/5', label: 'Average Rating', icon: Star },
  { number: '100%', label: 'Permit Success', icon: CheckCircle },
  { number: '24×7', label: 'Support Available', icon: Clock }
];

const certifications = [
  {
    title: 'Government Registered',
    description: 'Licensed tour operator with all necessary government approvals',
    icon: Shield
  },
  {
    title: 'Local Partnerships',
    description: 'Strong relationships with hotels, transport, and activity providers',
    icon: Heart
  },
  {
    title: 'Safety Certified',
    description: 'All water activities conducted with certified safety protocols',
    icon: Anchor
  }
];

export default function WhyUsPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I'd like to know more about why I should choose you for my Lakshadweep trip.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Trusted Local Experts
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose Sea Horizon Holidays?
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              As Lakshadweep's trusted local DMC, we bring unmatched expertise, 
              seamless permit handling, and 24×7 support to make your island dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get Instant Quote
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                <a href="/packages">
                  View Our Packages
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="inline-flex p-3 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the Sea Horizon difference with our comprehensive approach 
              to Lakshadweep travel planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group bg-white hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className={`inline-flex p-4 rounded-lg ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Certified & Trusted
            </h2>
            <p className="text-lg text-gray-600">
              Our credentials and partnerships ensure your safety and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex p-3 rounded-full bg-primary-100 text-primary-600 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from real people who chose Sea Horizon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-white hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-ocean-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Experience the Sea Horizon Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join 500+ happy travelers who chose us for their Lakshadweep adventure. 
            Get your personalized quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get WhatsApp Quote Now
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <a href="/#trip-planner">
                Plan My Trip
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}