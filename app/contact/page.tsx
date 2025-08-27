import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail, MapPin, Clock, Users } from 'lucide-react';

export const metadata = {
  title: 'Contact Sea Horizon Holidays — 24×7 WhatsApp Support | Lakshadweep Experts',
  description: 'Contact Sea Horizon Holidays for Lakshadweep travel planning. 24×7 WhatsApp support, phone, email. Local experts ready to help plan your perfect coral island vacation.',
  keywords: 'contact Sea Horizon Holidays, Lakshadweep travel support, WhatsApp booking, travel experts, customer service',
};

const contactMethods = [
  {
    method: 'WhatsApp',
    icon: MessageCircle,
    title: '24×7 WhatsApp Support',
    description: 'Instant responses from our local experts',
    contact: '+91 8075301729',
    action: 'Chat Now',
    color: 'bg-[#25d366] hover:bg-[#128c7e] text-white',
    available: '24 hours, 7 days a week'
  },
  {
    method: 'Phone',
    icon: Phone,
    title: 'Direct Phone Call',
    description: 'Speak directly with our travel consultants',
    contact: '+91 8075301729',
    action: 'Call Now',
    color: 'bg-blue-600 hover:bg-blue-700 text-white',
    available: '9:00 AM - 9:00 PM IST'
  },
  {
    method: 'Email',
    icon: Mail,
    title: 'Email Support',
    description: 'Detailed inquiries and documentation',
    contact: 'info@seahorizonholidays.com',
    action: 'Send Email',
    color: 'bg-purple-600 hover:bg-purple-700 text-white',
    available: 'Response within 2-4 hours'
  }
];

const officeInfo = {
  address: 'Lakshadweep Islands, India',
  coordinates: { lat: 10.5667, lng: 72.6417 },
  workingHours: [
    { day: 'Monday - Friday', hours: '9:00 AM - 9:00 PM IST' },
    { day: 'Saturday - Sunday', hours: '10:00 AM - 8:00 PM IST' },
    { day: 'WhatsApp Support', hours: '24×7 Available' }
  ]
};

const whyContactUs = [
  {
    icon: Users,
    title: 'Local Experts',
    description: 'Born and raised in Lakshadweep, we know every island intimately'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Average response time under 5 minutes on WhatsApp'
  },
  {
    icon: MessageCircle,
    title: 'Personalized Service',
    description: 'Customized recommendations based on your preferences'
  },
  {
    icon: Phone,
    title: 'Multiple Channels',
    description: 'Reach us via WhatsApp, phone, email, or contact form'
  }
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I'd like to get in touch regarding my Lakshadweep travel plans.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Contact Our Local Experts
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ready to plan your Lakshadweep adventure? Our local experts are here to help 
              with personalized recommendations, instant quotes, and 24×7 support.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600">
              Multiple ways to reach our Lakshadweep travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isWhatsApp = method.method === 'WhatsApp';
              const isPhone = method.method === 'Phone';
              const isEmail = method.method === 'Email';
              
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 animate-fade-in text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-full bg-gray-100 text-gray-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {method.description}
                    </p>
                    <div className="mb-4">
                      <p className="font-semibold text-gray-900 mb-1">{method.contact}</p>
                      <p className="text-sm text-gray-500">{method.available}</p>
                    </div>
                    <Button 
                      asChild
                      className={method.color}
                      size="lg"
                    >
                      {isWhatsApp ? (
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                          <Icon className="h-4 w-4 mr-2" />
                          {method.action}
                        </a>
                      ) : isPhone ? (
                        <a href={`tel:${method.contact}`}>
                          <Icon className="h-4 w-4 mr-2" />
                          {method.action}
                        </a>
                      ) : (
                        <a href={`mailto:${method.contact}`}>
                          <Icon className="h-4 w-4 mr-2" />
                          {method.action}
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 9876543210" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                    <Input id="travelDates" placeholder="e.g., 15-20 March 2025" />
                  </div>
                  
                  <div>
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Input id="travelers" placeholder="e.g., 2 adults, 1 child" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your travel preferences, interests, budget, or any specific questions..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" size="lg">
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll respond within 2-4 hours during business hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Office
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">{officeInfo.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Working Hours</h4>
                        <div className="space-y-2">
                          {officeInfo.workingHours.map((schedule, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span className="text-gray-600">{schedule.day}:</span>
                              <span className="font-medium text-gray-900">{schedule.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Contact Us */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Contact Us?
                  </h3>
                  
                  <div className="space-y-4">
                    {whyContactUs.map((reason, index) => {
                      const Icon = reason.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="inline-flex p-2 rounded-lg bg-primary-100 text-primary-600">
                              <Icon className="h-5 w-5" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{reason.title}</h4>
                            <p className="text-sm text-gray-600">{reason.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mb-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Emergency Contact During Your Trip
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If you're currently traveling with us and need immediate assistance, 
                    our 24×7 emergency support is always available.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Emergency WhatsApp
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-red-300 text-red-700 hover:bg-red-100"
                    >
                      <a href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Emergency Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Don't wait! Our local experts are standing by to help you create the perfect 
            Lakshadweep experience. Get your personalized quote in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Start WhatsApp Chat
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <a href="/packages">
                Browse Tour Packages
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}