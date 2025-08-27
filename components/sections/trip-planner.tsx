'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, MapPin, Heart, Camera, Waves } from 'lucide-react';
import { packages } from '@/lib/data/packages';
import { toast } from 'sonner';

interface FormData {
  dates: string;
  pax: string;
  budget: string;
  islands: string[];
  interests: string[];
  phone: string;
  city: string;
}

interface Package {
  title: string;
  slug: string;
  priceFromINR: number;
  durationDays: number;
  durationNights: number;
  islands: string[];
  highlights: string[];
  tags: string[];
  gallery: { src: string }[];
}

export function TripPlanner() {
  const [formData, setFormData] = useState<FormData>({
    dates: '',
    pax: '',
    budget: '',
    islands: [],
    interests: [],
    phone: '',
    city: ''
  });
  const [recommendedPackage, setRecommendedPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interests = [
    { id: 'honeymoon', label: 'Honeymoon/Romance', icon: Heart },
    { id: 'family', label: 'Family Fun', icon: Users },
    { id: 'scuba', label: 'Scuba Diving', icon: Waves }, // This line was previously identified as line 39 in the error logs, but the actual error is on the next line.
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'culture', label: 'Local Culture', icon: MapPin },
    { id: 'adventure', label: 'Adventure Sports', icon: Waves }
  ];

  const islands = ['Agatti', 'Bangaram', 'Thinnakara', 'Kavaratti'];
  const budgetRanges = ['₹20-40k', '₹40-60k', '₹60-80k', '₹80k+'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simple recommendation logic
      let recommended = packages[0]; // Default

      if (formData.interests.includes('honeymoon')) {
        recommended = packages.find(p => p.tags.includes('honeymoon')) || packages[0];
      } else if (formData.interests.includes('family')) {
        recommended = packages.find(p => p.tags.includes('family')) || packages[1];
      } else if (formData.interests.includes('scuba')) {
        recommended = packages.find(p => p.tags.includes('scuba-diving')) || packages[3];
      } else if (formData.budget === '₹20-40k') {
        recommended = packages.find(p => p.priceFromINR < 40000) || packages[2];
      } else if (formData.budget === '₹80k+') {
        recommended = packages.find(p => p.priceFromINR > 80000) || packages[4];
      }

      setRecommendedPackage(recommended);

      // Prepare WhatsApp message
      const whatsappMessage = `Hi Sea Horizon! I've planned my trip details:
      
📅 Travel Dates: ${formData.dates}
👥 Travelers: ${formData.pax} people
💰 Budget: ${formData.budget}
🏝️ Preferred Islands: ${formData.islands.join(', ') || 'Open to suggestions'}
❤️ Interests: ${formData.interests.join(', ')}
📍 From: ${formData.city}
📱 Phone: ${formData.phone}

Recommended Package: ${recommended.title}

Please share detailed itinerary and final pricing. Thank you!`;

      // Send to Zoho CRM (mock)
      const crmData = {
        ...formData,
        recommendedPackage: recommended.title,
        timestamp: new Date().toISOString(),
        source: 'website_trip_planner'
      };

      // In a real app, this would call your API route
      console.log('CRM Data:', crmData);

      // Open WhatsApp
      const whatsappUrl = `https://wa.me/8075301729?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      toast.success('Trip planned! WhatsApp opened with your details.');

      // Track analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_submit', {
          event_category: 'engagement',
          event_label: 'trip_planner',
          value: recommended.priceFromINR
        });
      }

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Trip planner error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Plan Your Perfect Lakshadweep Trip
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your dream vacation and get a personalized package recommendation 
            with instant WhatsApp quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-primary-600" />
                <span>Trip Details</span>
              </CardTitle>
              <CardDescription>
                Share your preferences and get personalized recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dates">Travel Dates</Label>
                    <Input
                      id="dates"
                      type="text"
                      placeholder="e.g., 15-20 March 2025"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="pax">Number of Travelers</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, pax: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travelers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-4">3-4 People</SelectItem>
                        <SelectItem value="5-8">5-8 People</SelectItem>
                        <SelectItem value="8+">8+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="budget">Budget Range (per person)</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgetRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">From City</Label>
                    <Input
                      id="city"
                      type="text"
                      placeholder="e.g., Mumbai, Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Preferred Islands (optional)</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {islands.map((island) => (
                      <div key={island} className="flex items-center space-x-2">
                        <Checkbox
                          id={island}
                          checked={formData.islands.includes(island)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                islands: [...formData.islands, island]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                islands: formData.islands.filter(i => i !== island)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={island} className="text-sm">{island}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Your Interests</Label>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {interests.map((interest) => {
                      const Icon = interest.icon;
                      return (
                        <div key={interest.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest.id}
                            checked={formData.interests.includes(interest.id)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  interests: [...formData.interests, interest.id]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  interests: formData.interests.filter(i => i !== interest.id)
                                });
                              }
                            }}
                          />
                          <Label htmlFor={interest.id} className="text-sm flex items-center">
                            <Icon className="h-3 w-3 mr-1" />
                            {interest.label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">WhatsApp Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Planning Your Trip...' : 'Get Personalized Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recommended Package */}
          {recommendedPackage && (
            <Card className="shadow-xl border-primary-200 bg-primary-50">
              <CardHeader>
                <CardTitle className="text-primary-900">Perfect Match Found! 🎉</CardTitle>
                <CardDescription className="text-primary-700">
                  Based on your preferences, we recommend:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <img
                    src={recommendedPackage.gallery[0]?.src}
                    alt={recommendedPackage.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {recommendedPackage.title}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary-600">
                        ₹{recommendedPackage.priceFromINR.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">
                        {recommendedPackage.durationDays}D/{recommendedPackage.durationNights}N
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                        Islands: {recommendedPackage.islands.join(', ')}
                      </div>
                      <div className="text-sm text-gray-700">
                        <strong>Highlights:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {recommendedPackage.highlights.slice(0, 3).map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-4 bg-[#25d366] hover:bg-[#128c7e]">
                      <a
                        href={`/packages/${recommendedPackage.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Full Details
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Default Call-to-Action */}
          {!recommendedPackage && (
            <Card className="shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Instant Recommendations
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form to get personalized package recommendations 
                  based on your preferences and budget.
                </p>
                <ul className="text-sm text-gray-700 space-y-2 text-left max-w-sm mx-auto">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Personalized package matching
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    Instant WhatsApp quote
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    24×7 planning support
                  </li>
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}