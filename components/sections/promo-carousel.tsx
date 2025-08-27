'use client';

import { useState, useEffect } from 'react';
import { X, Percent, Calendar, Gift } from 'lucide-react';

const promos = [
  {
    icon: Percent,
    title: 'Winter Special 2025',
    description: 'Save up to 25% on all packages booked by Jan 31st',
    color: 'bg-blue-600',
    cta: 'Book Now',
  },
  {
    icon: Calendar,
    title: 'Early Bird Offers',
    description: 'Book 60 days in advance and save 15%',
    color: 'bg-green-600',
    cta: 'Plan Ahead',
  },
  {
    icon: Gift,
    title: 'Honeymoon Package',
    description: 'Complimentary sunset cruise for couples',
    color: 'bg-pink-600',
    cta: 'View Romance',
  },
];

export function PromoCarousel() {
  const [currentPromo, setCurrentPromo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasScrolled) {
        setHasScrolled(true);
        // Auto-dismiss after scrolling
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  if (!isVisible) return null;

  const currentPromoData = promos[currentPromo];
  const Icon = currentPromoData.icon;
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I'm interested in the ${currentPromoData.title} offer. Can you share more details?`;

  const handlePromoClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'promo_click', {
        event_category: 'engagement',
        event_label: currentPromoData.title,
      });
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative ${currentPromoData.color} text-white py-3 animate-slide-up`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1 min-w-0">
            <Icon className="h-5 w-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm sm:text-base truncate">
                {currentPromoData.title}
              </p>
              <p className="text-xs sm:text-sm text-white/90 truncate">
                {currentPromoData.description}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 ml-4">
            <button
              onClick={handlePromoClick}
              className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap focus-ring"
            >
              {currentPromoData.cta}
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors focus-ring"
              aria-label="Close promotion banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-0 left-0 right-0 flex">
        {promos.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 transition-all duration-300 ${
              index === currentPromo ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}