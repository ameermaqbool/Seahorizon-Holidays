'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { packages } from '@/lib/data/packages';

export function FeaturedPackages() {
  // Get first 6 packages for featured section
  const featuredPackages = packages.slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Lakshadweep Packages</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover our handpicked collection of Lakshadweep tour packages, designed to give you the perfect island experience with local expertise and seamless planning.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.images[0]}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Package Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{pkg.islands.join(', ')}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Perfect for {pkg.category.toLowerCase()}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600 ml-2">4.8 (120+ reviews)</span>
                </div>

                {/* CTA Button */}
                <div className="flex gap-2">
                  <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Link href={`/packages/${pkg.slug}`}>
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="px-4 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <a
                      href={`https://wa.me/8075301729?text=Hi Sea Horizon, I'm interested in the ${pkg.title} package. Can you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
            <Link href="/packages">
              View All Packages
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm text-slate-600">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">12+</div>
              <div className="text-sm text-slate-600">Islands Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}