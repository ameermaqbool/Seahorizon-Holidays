import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { packages } from '@/lib/data/packages';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Phone, 
  Mail,
  Calendar,
  Camera,
  Utensils,
  Bed,
  Car,
  Plane
} from 'lucide-react';

interface PackageDetailsPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackageDetailsPageProps): Promise<Metadata> {
  const pkg = packages.find(p => p.slug === params.slug);
  
  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${pkg.title} | Sea Horizon Holidays`,
    description: pkg.description,
    keywords: `${pkg.title}, Lakshadweep, ${pkg.islands.join(', ')}, ${pkg.category}`,
  };
}

export default function PackageDetailsPage({ params }: PackageDetailsPageProps) {
  const pkg = packages.find(p => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-blue-600 text-white">{pkg.category}</Badge>
              <Badge className="bg-green-600 text-white">{pkg.duration}</Badge>
              {pkg.featured && (
                <Badge className="bg-orange-500 text-white">Popular</Badge>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{pkg.title}</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{pkg.islands.join(' • ')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Package Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-6">{pkg.description}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{pkg.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <MapPin className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{pkg.islands.length}</div>
                    <div className="text-sm text-gray-600">Islands</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">{pkg.category}</div>
                    <div className="text-sm text-gray-600">Perfect For</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">4.8/5</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="itinerary" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                <TabsTrigger value="booking-info">Booking Info</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="itinerary" className="space-y-4">
                {pkg.itinerary.map((day, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                        Day {day.day}: {day.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{day.description}</p>
                      <div className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="inclusions">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.inclusions.map((inclusion, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{inclusion}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">What's Not Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.exclusions.map((exclusion, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{exclusion}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="booking-info" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-600">Booking Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.bookingRequirements.map((requirement, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-purple-600">Documents Required</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.documentsRequired.map((document, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{document}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-orange-600">Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.termsAndConditions.map((term, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{term}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">Cancellation Policies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.policies.map((policy, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{policy}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">Travel Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.travelTips.map((tip, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-indigo-600">Accommodation Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.accommodationNotes.map((note, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{note}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardHeader>
                      <CardTitle className="text-yellow-700">📌 Important Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.importantInformation.map((info, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{info}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-700">Insurance & Personal Belongings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.insuranceNotice.map((notice, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{notice}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-50 border-gray-200">
                    <CardHeader>
                      <CardTitle className="text-gray-700">Disclaimer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.disclaimer.map((item, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-700">General Notes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {pkg.notes.map((note, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{note}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center p-6 bg-gradient-to-r from-primary-50 to-ocean-50 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Get ready for an extraordinary island escape!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Filled with adventure, serenity, and unforgettable experiences
                  </p>
                  <Button asChild className="bg-[#25d366] hover:bg-[#128c7e] text-white" size="lg">
                    <a
                      href={`https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I'd like to get a detailed quote for the ${pkg.title} package. Please share pricing and availability.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote on WhatsApp
                    </a>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.images.map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${pkg.title} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  <div className="text-center p-8 bg-gray-100 rounded-lg">
                    <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8 out of 5</h3>
                    <p className="text-gray-600">Based on 150+ customer reviews</p>
                  </div>
                  <p className="text-center text-gray-600">
                    Customer reviews will be displayed here. Contact us to see detailed reviews and testimonials.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-4">
              <CardHeader>
                  Get Package Quote
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  Contact for Quote
                  <span className="text-sm font-normal text-gray-500 block">Personalized pricing available</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  asChild 
                  className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white"
                >
                  <a
                    href={`https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon, I'm interested in the ${pkg.title} package. Can you provide a detailed quote with pricing?`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote on WhatsApp
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full"
                >
                  <a href="tel:8075301729">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full"
                >
                  <a href="mailto:info@seahorizonholidays.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Inquiry
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Package Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Package Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}