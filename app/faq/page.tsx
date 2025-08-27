import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Lakshadweep Travel FAQ — Common Questions Answered | Sea Horizon Holidays',
  description: 'Get answers to frequently asked questions about Lakshadweep travel, permits, packages, weather, activities, and booking with Sea Horizon Holidays.',
  keywords: 'Lakshadweep FAQ, travel questions, permits, booking, weather, activities, Sea Horizon Holidays',
};

const faqCategories = [
  {
    category: 'General Travel',
    icon: '🏝️',
    faqs: [
      {
        q: 'Do I need a permit to visit Lakshadweep?',
        a: 'Yes, all visitors to Lakshadweep require an entry permit. The good news is that when you book with Sea Horizon Holidays, we handle all permit formalities for you at no extra cost. We have a 100% success rate in permit approvals.'
      },
      {
        q: 'What is the best time to visit Lakshadweep?',
        a: 'October to March is the ideal time to visit Lakshadweep. During these months, you\'ll enjoy calm seas, clear skies, perfect weather for water activities, and excellent visibility for diving and snorkeling. Avoid the monsoon season (June-September) when seas are rough and many activities are suspended.'
      },
      {
        q: 'How do I reach Lakshadweep?',
        a: 'You can reach Lakshadweep by air or ship from Kochi (Cochin). Flights to Agatti Airport take 1.5 hours and operate daily (weather permitting). Ships take 14-20 hours and operate 4-6 times per month during the season. We recommend flights for convenience and include all transfers in our packages.'
      },
      {
        q: 'Is Lakshadweep safe for tourists?',
        a: 'Absolutely! Lakshadweep is one of India\'s safest destinations with very low crime rates. The local community is welcoming and helpful. All our packages include 24×7 support, and we have local contacts on every island for any assistance you might need.'
      },
      {
        q: 'What languages are spoken in Lakshadweep?',
        a: 'The local language is Malayalam, but Hindi and English are widely understood, especially in tourist areas. Our guides are fluent in English and Hindi, ensuring smooth communication throughout your trip.'
      }
    ]
  },
  {
    category: 'Booking & Packages',
    icon: '📦',
    faqs: [
      {
        q: 'How far in advance should I book my Lakshadweep trip?',
        a: 'We recommend booking at least 45-60 days in advance, especially for peak season (December-February). This ensures permit processing time, better accommodation availability, and flight bookings. For last-minute bookings, contact us on WhatsApp - we often have solutions!'
      },
      {
        q: 'What is included in your tour packages?',
        a: 'Our packages typically include entry permits, airport transfers, accommodation, breakfast, inter-island transfers, basic sightseeing, snorkeling equipment, and 24×7 WhatsApp support. Specific inclusions vary by package - check individual package details or ask our team.'
      },
      {
        q: 'Can I customize a package according to my preferences?',
        a: 'Absolutely! We specialize in customized itineraries. Whether you want to add extra islands, upgrade accommodations, include special activities, or adjust the duration, our local experts will create a personalized package just for you.'
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellation policies vary by package and season. Generally, we offer free cancellation up to 15 days before travel, partial refunds for 7-15 days, and limited refunds within 7 days due to permit and accommodation restrictions. Full details are provided at booking.'
      },
      {
        q: 'Do you offer group discounts?',
        a: 'Yes! We offer attractive group discounts for 6+ people. Groups of 10+ get additional benefits like complimentary group activities and dedicated coordinators. Contact us with your group size for a customized quote.'
      }
    ]
  },
  {
    category: 'Activities & Experiences',
    icon: '🤿',
    faqs: [
      {
        q: 'What water activities are available in Lakshadweep?',
        a: 'Lakshadweep offers incredible water activities including snorkeling, scuba diving, kayaking, glass-bottom boat tours, fishing, sailing, and swimming in pristine lagoons. Most basic equipment is included in our packages, with professional diving available at additional cost.'
      },
      {
        q: 'Do I need to know swimming for water activities?',
        a: 'Not necessarily! Many activities like glass-bottom boat tours and shallow lagoon experiences don\'t require swimming. For snorkeling, we provide life jackets and basic training. However, knowing swimming enhances your experience and opens up more activity options.'
      },
      {
        q: 'Are there cultural experiences available?',
        a: 'Yes! We arrange cultural interactions including visits to local villages, traditional fishing demonstrations, local cuisine tastings, handicraft workshops, and cultural performances. These experiences provide insight into the unique island lifestyle and Islamic culture of Lakshadweep.'
      },
      {
        q: 'What should I pack for water activities?',
        a: 'Pack reef-safe sunscreen, quick-dry clothing, water shoes, underwater camera, and personal snorkeling gear if preferred. We provide basic snorkeling equipment, but many guests prefer their own masks. Avoid regular sunscreen as it damages coral reefs.'
      },
      {
        q: 'Is scuba diving suitable for beginners?',
        a: 'Absolutely! Lakshadweep has excellent conditions for beginner divers with calm, clear waters and shallow reefs. We work with PADI-certified instructors who provide training and guided dives. Discover Scuba programs are available for first-time divers.'
      }
    ]
  },
  {
    category: 'Accommodation & Food',
    icon: '🏨',
    faqs: [
      {
        q: 'What types of accommodation are available?',
        a: 'Lakshadweep offers various accommodations from budget guesthouses to luxury beach resorts. Options include government rest houses, private beach resorts, eco-friendly stays, and exclusive island resorts. We match accommodations to your budget and preferences.'
      },
      {
        q: 'What kind of food is available in Lakshadweep?',
        a: 'Local cuisine features fresh seafood, coconut-based dishes, and traditional South Indian flavors. Most accommodations serve both local and Indian cuisine. Vegetarian options are available, though seafood is the specialty. We can arrange special dietary requirements with advance notice.'
      },
      {
        q: 'Is alcohol available in Lakshadweep?',
        a: 'Alcohol is available only at licensed resorts and tourist facilities, not in inhabited islands due to local regulations. Some premium resorts have bars and serve alcohol to guests. We can advise on alcohol availability based on your chosen accommodation.'
      },
      {
        q: 'Are there medical facilities available?',
        a: 'Basic medical facilities are available on major islands, with a hospital in Kavaratti. For serious medical emergencies, evacuation to the mainland may be necessary. We strongly recommend comprehensive travel insurance and carry basic medications with you.'
      },
      {
        q: 'What about internet and mobile connectivity?',
        a: 'Mobile connectivity is available on major islands with BSNL and Airtel networks. Internet speeds can be slow compared to mainland standards. Most resorts offer WiFi, though it may be limited. Consider it a digital detox opportunity!'
      }
    ]
  },
  {
    category: 'Practical Information',
    icon: '💡',
    faqs: [
      {
        q: 'What currency is used and are ATMs available?',
        a: 'Indian Rupee (INR) is the currency. ATMs are very limited in Lakshadweep, so carry sufficient cash for your entire trip. Credit cards are accepted at some resorts but not widely. We recommend carrying cash for all expenses including tips and shopping.'
      },
      {
        q: 'What should I know about local customs and dress code?',
        a: 'Lakshadweep has a predominantly Islamic culture. Dress modestly, especially in inhabited islands - cover shoulders and knees. Bikinis and swimwear are fine at beaches and resorts. Remove shoes when entering mosques or local homes. Respect local customs and traditions.'
      },
      {
        q: 'Are there shopping opportunities in Lakshadweep?',
        a: 'Shopping is limited but you can find local handicrafts, coconut products, shell items, and traditional textiles. The main shopping is in Kavaratti. Don\'t expect extensive shopping - focus on experiences rather than retail therapy!'
      },
      {
        q: 'What about power supply and charging facilities?',
        a: 'Power supply is generally reliable on major islands, though occasional outages can occur. Most accommodations have charging facilities and backup power. Bring a power bank for day trips and excursions. Voltage is 230V with Indian-style plugs.'
      },
      {
        q: 'Can I bring my drone to Lakshadweep?',
        a: 'Drone usage is heavily restricted in Lakshadweep due to security reasons. Special permits are required and rarely granted for tourists. We recommend leaving drones at home and enjoying the natural beauty with regular cameras and underwater photography instead.'
      }
    ]
  }
];

export default function FAQPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I have some questions about Lakshadweep travel that aren't covered in your FAQ. Can you help me?`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Help Center
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Get answers to common questions about Lakshadweep travel, our packages, 
              and booking process. Can't find what you're looking for? We're here to help!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Contact */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Immediate Help?
                </h2>
                <p className="text-gray-600">
                  Our local experts are available 24×7 to answer your questions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Chat</h3>
                  <p className="text-sm text-gray-600 mb-3">Instant responses, 24×7</p>
                  <Button asChild size="sm" className="bg-[#25d366] hover:bg-[#128c7e]">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Call</h3>
                  <p className="text-sm text-gray-600 mb-3">Direct conversation</p>
                  <Button asChild size="sm" variant="outline">
                    <a href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>
                      Call Now
                    </a>
                  </Button>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-purple-100 text-purple-600 mb-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-sm text-gray-600 mb-3">Detailed inquiries</p>
                  <Button asChild size="sm" variant="outline">
                    <a href="mailto:info@seahorizonholidays.com">
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Categories */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions & Answers
            </h2>
            <p className="text-lg text-gray-600">
              Browse by category to find the information you need
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <div className="flex items-start space-x-3">
                            <HelpCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="font-medium text-gray-900">{faq.q}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 pl-8">
                          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary-50 to-ocean-50 border-primary-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our local experts are standing by 
                to provide personalized assistance and detailed information about your Lakshadweep trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-[#25d366] hover:bg-[#128c7e] text-white"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask on WhatsApp
                  </a>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-300 text-primary-700 hover:bg-primary-100"
                >
                  <Link href="/contact">
                    View All Contact Options
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Popular Resources */}
        <section className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Resources
            </h3>
            <p className="text-gray-600">
              Quick links to helpful information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Travel Guide', href: '/lakshadweep/guide', description: 'Complete planning information' },
              { title: 'Best Time to Visit', href: '/lakshadweep/guide/best-time-to-visit', description: 'Weather and seasonal guide' },
              { title: 'Permits Info', href: '/lakshadweep/guide/permits-rules', description: 'Entry requirements' },
              { title: 'Tour Packages', href: '/packages', description: 'All-inclusive options' }
            ].map((resource, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={resource.href}>
                    Learn More
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}