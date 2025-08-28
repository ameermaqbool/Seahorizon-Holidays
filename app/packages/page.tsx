import { Metadata } from 'next';
import { packages } from '@/lib/data/packages';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lakshadweep Tour Packages | Sea Horizon Holidays',
  description: 'Explore our comprehensive Lakshadweep tour packages. From budget-friendly trips to luxury honeymoon packages, find the perfect island getaway.',
  keywords: 'Lakshadweep packages, Lakshadweep tours, island packages, honeymoon packages, budget tours',
};

export default function PackagesPage() {
  const categories = ['All', 'Honeymoon', 'Adventure', 'Budget', 'Luxury', 'Family'];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lakshadweep Tour Packages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover paradise with our carefully crafted tour packages. From romantic honeymoons to thrilling adventures.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                    {pkg.duration}
                  </Badge>
                </div>
                {pkg.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white">
                      Popular
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{pkg.islands.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Perfect for {pkg.category.toLowerCase()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="text-lg font-semibold text-blue-600">
                      Contact for Quote
                    </div>
                    <div className="text-sm text-gray-500">Personalized pricing</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700 ml-1">4.8</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href={`/packages/${pkg.slug}`}>
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white"
                  >
                    <a
                      href={`https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon, I'm interested in the ${pkg.title} package. Can you provide a detailed quote?`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}