import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Sun, Cloud, Waves, Thermometer, Wind, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Best Time to Visit Lakshadweep — Weather Guide 2025 | Sea Horizon Holidays',
  description: 'Complete weather guide for Lakshadweep. October to March is ideal with calm seas, clear skies, and perfect conditions for water sports and island hopping.',
  keywords: 'Lakshadweep weather, best time to visit, October to March, monsoon season, water sports weather',
};

const monthlyWeather = [
  {
    month: 'January',
    temp: '24-30°C',
    rainfall: 'Very Low',
    seaCondition: 'Calm',
    rating: 5,
    description: 'Perfect weather with cool breeze and crystal clear waters.',
    activities: ['Scuba diving', 'Snorkeling', 'Photography', 'Island hopping']
  },
  {
    month: 'February',
    temp: '25-31°C',
    rainfall: 'Very Low',
    seaCondition: 'Calm',
    rating: 5,
    description: 'Excellent conditions for all water activities and sightseeing.',
    activities: ['Water sports', 'Beach activities', 'Sunset cruises', 'Fishing']
  },
  {
    month: 'March',
    temp: '26-32°C',
    rainfall: 'Low',
    seaCondition: 'Calm',
    rating: 5,
    description: 'Warm and pleasant with minimal rainfall and great visibility.',
    activities: ['Diving', 'Kayaking', 'Cultural tours', 'Relaxation']
  },
  {
    month: 'April',
    temp: '27-33°C',
    rainfall: 'Low',
    seaCondition: 'Slightly Rough',
    rating: 4,
    description: 'Getting warmer but still good for most activities.',
    activities: ['Swimming', 'Snorkeling', 'Beach walks', 'Photography']
  },
  {
    month: 'May',
    temp: '28-34°C',
    rainfall: 'Moderate',
    seaCondition: 'Rough',
    rating: 2,
    description: 'Pre-monsoon heat and occasional showers. Limited activities.',
    activities: ['Indoor activities', 'Spa treatments', 'Cultural experiences']
  },
  {
    month: 'June',
    temp: '26-32°C',
    rainfall: 'High',
    seaCondition: 'Very Rough',
    rating: 1,
    description: 'Monsoon season begins. Heavy rains and rough seas.',
    activities: ['Indoor relaxation', 'Reading', 'Local cuisine tasting']
  },
  {
    month: 'July',
    temp: '25-31°C',
    rainfall: 'Very High',
    seaCondition: 'Very Rough',
    rating: 1,
    description: 'Peak monsoon with heavy rainfall and strong winds.',
    activities: ['Resort activities', 'Spa treatments', 'Cultural programs']
  },
  {
    month: 'August',
    temp: '25-31°C',
    rainfall: 'Very High',
    seaCondition: 'Very Rough',
    rating: 1,
    description: 'Continued monsoon conditions with limited outdoor activities.',
    activities: ['Indoor entertainment', 'Wellness programs', 'Local interactions']
  },
  {
    month: 'September',
    temp: '25-31°C',
    rainfall: 'High',
    seaCondition: 'Rough',
    rating: 2,
    description: 'Monsoon starts retreating but seas remain rough.',
    activities: ['Light water activities', 'Beach walks', 'Photography']
  },
  {
    month: 'October',
    temp: '25-31°C',
    rainfall: 'Moderate',
    seaCondition: 'Calm',
    rating: 4,
    description: 'Post-monsoon freshness with improving weather conditions.',
    activities: ['Snorkeling', 'Kayaking', 'Island exploration', 'Diving']
  },
  {
    month: 'November',
    temp: '24-30°C',
    rainfall: 'Low',
    seaCondition: 'Calm',
    rating: 5,
    description: 'Excellent weather returns with clear skies and calm seas.',
    activities: ['All water sports', 'Photography', 'Sunset cruises', 'Fishing']
  },
  {
    month: 'December',
    temp: '23-29°C',
    rainfall: 'Very Low',
    seaCondition: 'Calm',
    rating: 5,
    description: 'Perfect holiday weather with cool temperatures and clear waters.',
    activities: ['Scuba diving', 'Island hopping', 'Beach activities', 'Relaxation']
  }
];

const seasons = [
  {
    name: 'Peak Season',
    months: 'October - March',
    icon: Sun,
    color: 'bg-green-100 text-green-600 border-green-200',
    description: 'Perfect weather with calm seas, clear skies, and ideal conditions for all activities.',
    pros: ['Excellent weather', 'Calm seas', 'Perfect for water sports', 'Clear visibility', 'Cool breeze'],
    cons: ['Higher prices', 'More crowded', 'Advance booking required']
  },
  {
    name: 'Shoulder Season',
    months: 'April - May',
    icon: Cloud,
    color: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    description: 'Getting warmer with occasional pre-monsoon showers. Some activities may be limited.',
    pros: ['Lower prices', 'Fewer crowds', 'Still good for swimming'],
    cons: ['Increasing heat', 'Occasional rain', 'Rougher seas', 'Limited water sports']
  },
  {
    name: 'Monsoon Season',
    months: 'June - September',
    icon: Waves,
    color: 'bg-red-100 text-red-600 border-red-200',
    description: 'Heavy rainfall and rough seas make outdoor activities challenging. Not recommended for tourism.',
    pros: ['Lowest prices', 'Lush green landscapes', 'Peaceful atmosphere'],
    cons: ['Heavy rainfall', 'Rough seas', 'Limited activities', 'Transport disruptions', 'Closed facilities']
  }
];

export default function BestTimeToVisitPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I'd like to plan my Lakshadweep trip for the best weather. Can you help me choose the right dates?`;

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
            <span className="text-gray-900">Best Time to Visit</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Weather Guide
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Best Time to Visit Lakshadweep
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Plan your perfect island getaway with our comprehensive weather guide. 
              October to March offers ideal conditions for all activities.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Answer */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                <Sun className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                October to March is Perfect!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The ideal time to visit Lakshadweep is during the winter months when you'll enjoy 
                calm seas, clear skies, and perfect weather for all water activities.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Plan My Trip Now
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Seasonal Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Seasonal Overview
            </h2>
            <p className="text-lg text-gray-600">
              Understanding Lakshadweep's three distinct seasons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {seasons.map((season, index) => {
              const Icon = season.icon;
              return (
                <Card 
                  key={index}
                  className={`border-2 ${season.color} animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`inline-flex p-3 rounded-full ${season.color.replace('border-', 'bg-').replace('text-', 'text-')} mb-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{season.name}</h3>
                      <p className="text-sm font-medium text-gray-600">{season.months}</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{season.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                        <ul className="space-y-1">
                          {season.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                        <ul className="space-y-1">
                          {season.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-center text-sm text-gray-700">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Monthly Weather Guide */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Month-by-Month Weather Guide
            </h2>
            <p className="text-lg text-gray-600">
              Detailed weather conditions and recommended activities for each month
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monthlyWeather.map((month, index) => (
              <Card 
                key={index}
                className={`hover:shadow-lg transition-shadow animate-fade-in ${
                  month.rating >= 4 ? 'border-green-200 bg-green-50' : 
                  month.rating >= 3 ? 'border-yellow-200 bg-yellow-50' : 
                  'border-red-200 bg-red-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{month.month}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            i < month.rating ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-medium">{month.temp}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rainfall:</span>
                      <span className="font-medium">{month.rainfall}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Sea Condition:</span>
                      <span className="font-medium">{month.seaCondition}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{month.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Best Activities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {month.activities.map((activity, activityIndex) => (
                        <Badge key={activityIndex} variant="secondary" className="text-xs">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Planning Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planning Tips
            </h2>
            <p className="text-lg text-gray-600">
              Make the most of your Lakshadweep vacation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Peak Season Tips</h3>
              <ul className="space-y-3">
                {[
                  'Book accommodations 3-6 months in advance',
                  'Expect higher prices during December-January',
                  'Perfect weather for all water activities',
                  'Ideal for photography and sightseeing',
                  'Best visibility for scuba diving'
                ].map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Avoid</h3>
              <ul className="space-y-3">
                {[
                  'Avoid June to September (monsoon season)',
                  'Limited flights during rough weather',
                  'Many water activities suspended in monsoon',
                  'Rough seas make boat transfers difficult',
                  'Some resorts may close during peak monsoon'
                ].map((tip, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Perfect Trip?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Let our local experts help you choose the best dates and create an unforgettable 
            Lakshadweep experience based on weather conditions and your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Weather-Based Recommendations
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/packages">
                View Seasonal Packages
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}