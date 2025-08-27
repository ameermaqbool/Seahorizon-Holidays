'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { reviews } from '@/lib/data/reviews';

const getTripTypeDisplay = (tripType: 'family' | 'couple' | 'group' | 'solo') => {
  const displays = {
    family: { label: '👨‍👩‍👧‍👦 Family Trip', color: 'bg-green-100 text-green-700' },
    couple: { label: '💕 Couple', color: 'bg-pink-100 text-pink-700' },
    group: { label: '👥 Friends Group', color: 'bg-blue-100 text-blue-700' },
    solo: { label: '🧳 Solo Travel', color: 'bg-purple-100 text-purple-700' }
  };
  return displays[tripType] || displays.couple;
};

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
    setIsAutoPlaying(false);
  };

  const currentReviews = reviews.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary-600 border-primary-200">
            Customer Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from real travelers who chose Sea Horizon for their 
            Lakshadweep adventures
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-600">({reviews.length} reviews)</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to review set ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="hover:bg-primary-50"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="hover:bg-primary-50"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {currentReviews.map((review, index) => {
            const tripTypeDisplay = getTripTypeDisplay(review.tripType);
            return (
              <Card 
                key={review.id}
                className="bg-white hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary-200 mb-4" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{review.quote}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback className="bg-primary-100 text-primary-700">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {review.location} • {new Date(review.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          year: 'numeric' 
                        })}
                      </p>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${tripTypeDisplay.color}`}
                      >
                        {tripTypeDisplay.label}
                      </Badge>
                      {review.packageName && (
                        <p className="text-xs text-gray-500 mt-1 truncate">
                          {review.packageName}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join these happy travelers and create your own Lakshadweep memories
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-[#25d366] hover:bg-[#128c7e] text-white"
          >
            <a
              href={`https://wa.me/8075301729?text=Hi Sea Horizon! I've read the amazing reviews and would like to plan my Lakshadweep trip too. Can you help me?`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Planning Your Trip
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}