import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FileText, Shield, AlertCircle, CheckCircle, Users, Clock } from 'lucide-react';

export const metadata = {
  title: 'Lakshadweep Permits & Rules — Entry Requirements Guide | Sea Horizon Holidays',
  description: 'Complete guide to Lakshadweep entry permits, documentation requirements, and local rules. We handle all permit formalities for hassle-free travel.',
  keywords: 'Lakshadweep permits, entry permit, documentation, travel rules, restricted areas, permit requirements',
};

const permitTypes = [
  {
    type: 'Tourist Permit',
    description: 'Required for all tourists visiting Lakshadweep islands',
    validity: '30 days',
    islands: ['Agatti', 'Bangaram', 'Thinnakara', 'Kadmat', 'Kalpeni'],
    requirements: [
      'Valid photo ID (Passport/Aadhaar/Voter ID)',
      'Confirmed accommodation booking',
      'Return flight/ship tickets',
      'Medical fitness certificate (if required)',
      'Passport size photographs'
    ]
  },
  {
    type: 'Special Permit',
    description: 'For visiting restricted islands or extended stays',
    validity: 'As specified',
    islands: ['Minicoy', 'Kavaratti (certain areas)'],
    requirements: [
      'All tourist permit documents',
      'Special application with purpose',
      'Local sponsor/guide arrangement',
      'Additional security clearance',
      'Extended processing time'
    ]
  }
];

const restrictedAreas = [
  {
    area: 'Military Installations',
    description: 'All defense-related areas are strictly off-limits',
    penalty: 'Legal action under Official Secrets Act'
  },
  {
    area: 'Certain Beaches',
    description: 'Some beaches are restricted for environmental protection',
    penalty: 'Fine and permit cancellation'
  },
  {
    area: 'Local Residential Areas',
    description: 'Respect privacy of local communities',
    penalty: 'Warning and possible permit issues'
  },
  {
    area: 'Coral Reefs',
    description: 'No touching, standing, or damaging coral formations',
    penalty: 'Heavy fines and legal action'
  }
];

const localRules = [
  {
    category: 'Cultural Respect',
    icon: Users,
    rules: [
      'Dress modestly, especially in inhabited islands',
      'Respect local Islamic customs and traditions',
      'No public display of affection',
      'Remove shoes when entering mosques or homes',
      'Ask permission before photographing locals'
    ]
  },
  {
    category: 'Environmental Protection',
    icon: Shield,
    rules: [
      'No littering - carry back all waste',
      'Use only reef-safe sunscreen',
      'No collection of shells, corals, or marine life',
      'No feeding of fish or marine animals',
      'Stay on designated paths and areas'
    ]
  },
  {
    category: 'Activities & Behavior',
    icon: AlertCircle,
    rules: [
      'No alcohol in inhabited islands (allowed in resorts)',
      'No smoking in public areas',
      'Water activities only in designated areas',
      'Follow guide instructions during excursions',
      'Maintain noise levels, especially at night'
    ]
  }
];

const documents = [
  {
    document: 'Photo Identification',
    details: 'Passport, Aadhaar Card, Voter ID, or Driving License',
    mandatory: true
  },
  {
    document: 'Accommodation Proof',
    details: 'Hotel booking confirmation or resort voucher',
    mandatory: true
  },
  {
    document: 'Travel Tickets',
    details: 'Confirmed return flight or ship tickets',
    mandatory: true
  },
  {
    document: 'Photographs',
    details: '2 passport size color photographs',
    mandatory: true
  },
  {
    document: 'Medical Certificate',
    details: 'Fitness certificate for certain activities',
    mandatory: false
  },
  {
    document: 'Travel Insurance',
    details: 'Recommended for medical emergencies',
    mandatory: false
  }
];

export default function PermitsRulesPage() {
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I need help with Lakshadweep permits and documentation. Can you assist me?`;

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
            <span className="text-gray-900">Permits & Rules</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Entry Requirements
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Lakshadweep Permits & Rules
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Essential information about entry permits, documentation requirements, and local 
              regulations. We handle all permit formalities for our guests.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* We Handle Everything */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                We Handle All Permits for You!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Skip the paperwork hassle. When you book with Sea Horizon Holidays, 
                we process all entry permits and documentation on your behalf.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Get Permit-Free Booking
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Permit Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Permits
            </h2>
            <p className="text-lg text-gray-600">
              Understanding different permit categories for Lakshadweep
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {permitTypes.map((permit, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-primary-100 text-primary-600 mr-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{permit.type}</h3>
                      <p className="text-gray-600">Valid for {permit.validity}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{permit.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Accessible Islands:</h4>
                      <div className="flex flex-wrap gap-2">
                        {permit.islands.map((island, islandIndex) => (
                          <Badge key={islandIndex} variant="secondary">{island}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
                      <ul className="space-y-2">
                        {permit.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Document Checklist */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Document Checklist
            </h2>
            <p className="text-lg text-gray-600">
              Essential documents required for Lakshadweep entry permit
            </p>
          </div>

          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg ${
                    doc.mandatory ? 'bg-red-50 border border-red-200' : 'bg-gray-50 border border-gray-200'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    {doc.mandatory ? (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-gray-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {doc.document}
                      {doc.mandatory && <span className="text-red-600 ml-1">*</span>}
                    </h3>
                    <p className="text-sm text-gray-600">{doc.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Documents marked with * are mandatory. 
                We'll provide you with a complete checklist when you book with us.
              </p>
            </div>
          </Card>
        </section>

        {/* Local Rules */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Local Rules & Guidelines
            </h2>
            <p className="text-lg text-gray-600">
              Important rules to follow during your stay in Lakshadweep
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {localRules.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex p-2 rounded-full bg-primary-100 text-primary-600 mr-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {category.rules.map((rule, ruleIndex) => (
                        <li key={ruleIndex} className="flex items-start text-sm text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Restricted Areas */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Restricted Areas & Penalties
            </h2>
            <p className="text-lg text-gray-600">
              Areas to avoid and consequences of violations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restrictedAreas.map((area, index) => (
              <Card 
                key={index}
                className="border-red-200 bg-red-50 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{area.area}</h3>
                      <p className="text-sm text-gray-700 mb-3">{area.description}</p>
                      <div className="bg-red-100 border border-red-200 rounded p-2">
                        <p className="text-xs text-red-800">
                          <strong>Penalty:</strong> {area.penalty}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processing Time */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Permit Processing Timeline
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Individual Applications:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Tourist Permit: 7-10 working days</li>
                        <li>• Special Permit: 15-20 working days</li>
                        <li>• Peak season: Additional 3-5 days</li>
                        <li>• Document verification: 2-3 days</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Through Sea Horizon:</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Processed with booking confirmation</li>
                        <li>• Expedited processing available</li>
                        <li>• Real-time status updates</li>
                        <li>• 100% success rate</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Skip the Permit Hassle
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Let our experts handle all permit formalities while you focus on planning 
            your dream vacation. We guarantee 100% permit approval for all our guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Get Permit-Free Booking
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/packages">
                View All-Inclusive Packages
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}