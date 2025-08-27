'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight, Star, MapPin, Calendar, Users, Phone, Instagram } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img
            src="https://images.pexels.com/photos/33485180/pexels-photo-33485180.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Lakshadweep Islands Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          Discover
          <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">
            Lakshadweep
          </span>
          <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">Paradise</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-95 font-light">
          Your trusted local destination management company for unforgettable island adventures. 
          <span className="block mt-3 text-lg font-medium bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
            Permits handled • Local expertise • 24×7 support
          </span>
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Calendar className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium">All Permits Included</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Users className="h-4 w-4 text-green-400" />
            <span className="text-sm font-medium">Local Island Guides</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-3 border border-white/20">
            <Phone className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">24×7 WhatsApp Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <Link href="/packages">
              Explore Packages
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 text-xl font-semibold rounded-full backdrop-blur-md bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <a
              href="https://wa.me/918075301729?text=Hi Sea Horizon! I'd like to plan my Lakshadweep trip."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Now
            </a>
          </Button>
        </div>

        {/* Enhanced Reviews Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            {/* Google Reviews */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-blue-600">G</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Google Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">4.9/5</span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-sm">Based on 500+ verified reviews</p>
            </div>

            {/* TripAdvisor Reviews */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">TripAdvisor</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">4.8/5</span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-sm">Certificate of Excellence 2024</p>
            </div>

            {/* Instagram Community */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Instagram</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-semibold">@seahorizonindia</span>
                  </div>
                </div>
              </div>
              <a
                href="https://www.instagram.com/seahorizonindia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 text-sm hover:text-white transition-colors underline"
              >
                Follow for daily island updates
              </a>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">10,000+</div>
            <div className="text-sm opacity-90 font-medium">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-2">12+</div>
            <div className="text-sm opacity-90 font-medium">Islands Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent mb-2">8+</div>
            <div className="text-sm opacity-90 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-2">24×7</div>
            <div className="text-sm opacity-90 font-medium">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </div>
    </section>
  );
}