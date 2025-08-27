export interface Package {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  category: 'Honeymoon' | 'Family' | 'Adventure' | 'Budget' | 'Luxury' | 'Group';
  priceFromINR: number;
  featured: boolean;
  islands: string[];
  images: string[];
  highlights: string[];
  tags: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  inclusions: string[];
  exclusions: string[];
  bookingRequirements: string[];
  documentsRequired: string[];
  termsAndConditions: string[];
  policies: string[];
  travelTips: string[];
  accommodationNotes: string[];
  importantInformation: string[];
  insuranceNotice: string[];
  disclaimer: string[];
  notes: string[];
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
}

export const packages: Package[] = [
  {
    id: '1',
    slug: 'lakshadweep-honeymoon-5d4n',
    title: 'Lakshadweep Honeymoon Package',
    description: 'Perfect romantic getaway with pristine beaches, crystal-clear lagoons, and intimate experiences designed for couples.',
    duration: '5D/4N',
    durationDays: 5,
    durationNights: 4,
    category: 'Honeymoon',
    priceFromINR: 45000,
    featured: true,
    islands: ['Agatti', 'Bangaram'],
    images: [
      'https://images.pexels.com/photos/2549082/pexels-photo-2549082.jpeg',
      'https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Private candlelight dinner on the beach',
      'Sunset cruise for couples',
      'Snorkeling in pristine lagoons',
      'Romantic beach walks',
      'Professional couple photography session'
    ],
    tags: ['honeymoon', 'romantic', 'couples', 'luxury', 'beach'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise',
        description: 'Arrive at Agatti Airport and transfer to your romantic beachfront accommodation.',
        activities: [
          'Airport pickup and welcome drinks',
          'Check-in to beachfront resort',
          'Welcome couple spa session',
          'Romantic dinner by the beach'
        ]
      },
      {
        day: 2,
        title: 'Island Romance',
        description: 'Explore the pristine beauty of Agatti with your loved one.',
        activities: [
          'Sunrise beach walk',
          'Snorkeling in crystal-clear lagoons',
          'Private beach picnic lunch',
          'Sunset photography session',
          'Candlelight dinner under the stars'
        ]
      },
      {
        day: 3,
        title: 'Bangaram Bliss',
        description: 'Day trip to the exclusive Bangaram Island.',
        activities: [
          'Boat transfer to Bangaram Island',
          'Beach activities and water sports',
          'Romantic lunch on the island',
          'Couple massage by the beach',
          'Return to Agatti for dinner'
        ]
      },
      {
        day: 4,
        title: 'Leisure & Love',
        description: 'Relaxing day with optional activities and romantic experiences.',
        activities: [
          'Late breakfast in bed',
          'Optional scuba diving or kayaking',
          'Shopping for local handicrafts',
          'Sunset cruise with champagne',
          'Farewell dinner with cultural show'
        ]
      },
      {
        day: 5,
        title: 'Departure',
        description: 'Check out and departure with beautiful memories.',
        activities: [
          'Leisurely breakfast',
          'Final beach moments',
          'Check out and airport transfer',
          'Departure from Agatti'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '4 nights accommodation in beachfront resort',
      'All meals (breakfast, lunch, dinner)',
      'Airport transfers and local transportation',
      'Entry permits and documentation',
      'Snorkeling equipment and basic water sports',
      'Sunset cruise for couples',
      'Professional photography session',
      'Welcome spa session',
      '24×7 local support'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Personal expenses and shopping',
      'Alcoholic beverages (available at resort)',
      'Scuba diving (available at extra cost)',
      'Travel insurance',
      'Tips and gratuities',
      'Any activities not mentioned in inclusions'
    ],
    bookingRequirements: [
      'Minimum 45 days advance booking required',
      '50% advance payment to confirm booking',
      'Valid photo ID for all travelers',
      'Confirmed return flight tickets',
      'Travel insurance recommended'
    ],
    documentsRequired: [
      'Valid passport or Aadhaar card',
      'Marriage certificate (for honeymoon packages)',
      '2 passport size photographs per person',
      'Confirmed accommodation voucher',
      'Return flight/ship tickets'
    ],
    termsAndConditions: [
      'Booking confirmation subject to permit approval',
      'Rates are per couple and subject to change',
      'Check-in time: 2:00 PM, Check-out time: 12:00 PM',
      'Cancellation charges apply as per policy',
      'Weather conditions may affect activities',
      'Management reserves right to modify itinerary'
    ],
    policies: [
      'Free cancellation up to 15 days before travel',
      '50% refund for cancellation 7-15 days before travel',
      '25% refund for cancellation 3-7 days before travel',
      'No refund for cancellation within 3 days of travel',
      'Rescheduling allowed once without charges (subject to availability)'
    ],
    travelTips: [
      'Pack light due to flight baggage restrictions',
      'Bring reef-safe sunscreen and sun protection',
      'Carry sufficient cash as ATMs are limited',
      'Respect local customs and dress modestly',
      'Book spa treatments and special dinners in advance'
    ],
    accommodationNotes: [
      'Beachfront rooms with ocean views',
      'Air-conditioned rooms with modern amenities',
      'Private balconies overlooking the lagoon',
      'Room service available during specified hours',
      'Honeymoon decorations and special amenities included'
    ],
    importantInformation: [
      'Weather dependent activities - alternative arrangements made if needed',
      'Alcohol available only at licensed resorts',
      'Swimming ability recommended for water activities',
      'Medical facilities limited - carry personal medications',
      'Photography restrictions in certain areas'
    ],
    insuranceNotice: [
      'Travel insurance strongly recommended',
      'Coverage should include medical emergencies and trip cancellation',
      'Water sports activities at own risk',
      'Company not liable for personal belongings',
      'Emergency evacuation insurance recommended'
    ],
    disclaimer: [
      'Itinerary subject to change due to weather conditions',
      'Prices subject to change without prior notice',
      'Company not responsible for flight delays or cancellations',
      'Activities depend on weather and sea conditions',
      'Management decisions are final in case of disputes'
    ],
    notes: [
      'Best time to visit: October to March',
      'Advance booking essential during peak season',
      'Vegetarian and special dietary requirements can be accommodated',
      'Professional photography services available at extra cost',
      'Spa treatments and special experiences can be pre-booked'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Pristine Lakshadweep lagoon',
        caption: 'Crystal clear waters perfect for romantic moments'
      },
      {
        src: 'https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Romantic beach dinner setup',
        caption: 'Candlelight dinner by the beach'
      },
      {
        src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Couple enjoying sunset',
        caption: 'Magical sunsets every evening'
      }
    ]
  },
  {
    id: '2',
    slug: 'budget-explore-lakshadweep',
    title: 'Budget Explore Lakshadweep',
    description: 'Affordable Lakshadweep experience without compromising on the beauty and essential island experiences.',
    duration: '4D/3N',
    durationDays: 4,
    durationNights: 3,
    category: 'Budget',
    priceFromINR: 24999,
    featured: true,
    islands: ['Agatti'],
    images: [
      'https://images.pexels.com/photos/12243684/pexels-photo-12243684.png',
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Affordable accommodation with essential amenities',
      'All major island experiences included',
      'Group activities to reduce costs',
      'Local food experiences',
      'Basic snorkeling and beach activities'
    ],
    tags: ['budget', 'affordable', 'backpacker', 'group', 'essential'],
    itinerary: [
      {
        day: 1,
        title: 'Budget Arrival',
        description: 'Arrive and settle into budget-friendly accommodation.',
        activities: [
          'Airport pickup (shared transfer)',
          'Check-in to budget accommodation',
          'Orientation and island briefing',
          'Group dinner with fellow travelers'
        ]
      },
      {
        day: 2,
        title: 'Island Essentials',
        description: 'Experience the must-see attractions of Agatti.',
        activities: [
          'Morning beach exploration',
          'Snorkeling in lagoon (group activity)',
          'Local lunch at village eatery',
          'Sunset viewing at best spots',
          'Cultural interaction with locals'
        ]
      },
      {
        day: 3,
        title: 'Adventure Day',
        description: 'Full day of activities and exploration.',
        activities: [
          'Island hopping to nearby sandbanks',
          'Beach games and group activities',
          'Traditional fishing experience',
          'Local handicraft shopping',
          'Group bonfire and music evening'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Final moments and departure.',
        activities: [
          'Early morning beach walk',
          'Check out and luggage storage',
          'Last-minute souvenir shopping',
          'Shared airport transfer and departure'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '3 nights budget accommodation (shared/twin rooms)',
      'Daily breakfast and dinner',
      'Shared airport transfers',
      'Entry permits and basic documentation',
      'Group snorkeling equipment',
      'Basic island hopping',
      'Cultural programs and local interactions',
      'Group coordinator',
      'Basic travel support'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Lunch meals (available at local eateries)',
      'Personal expenses and shopping',
      'Alcoholic beverages',
      'Private transportation',
      'Single room supplement',
      'Travel insurance',
      'Tips and gratuities'
    ],
    bookingRequirements: [
      'Minimum 15 days advance booking',
      '30% advance payment for confirmation',
      'Shared accommodation basis (twin sharing)',
      'Flexible with group activities and timings',
      'Basic fitness level required'
    ],
    documentsRequired: [
      'Valid photo identification',
      '2 passport size photographs',
      'Accommodation confirmation',
      'Return flight tickets',
      'Emergency contact details'
    ],
    termsAndConditions: [
      'Budget package with shared facilities',
      'Group activities with fixed timings',
      'Limited customization options',
      'Weather dependent activities',
      'Management reserves right to club groups'
    ],
    policies: [
      'Free cancellation up to 10 days before travel',
      '50% refund for cancellation 5-10 days before',
      'No refund for cancellation within 5 days',
      'Group changes may affect pricing',
      'Rescheduling subject to availability'
    ],
    travelTips: [
      'Pack light and carry essentials only',
      'Bring personal snorkeling gear if preferred',
      'Carry sufficient cash for meals and shopping',
      'Be flexible with group activities and timings',
      'Respect shared accommodation and facilities'
    ],
    accommodationNotes: [
      'Clean and basic accommodation with essential amenities',
      'Shared/twin rooms with attached bathrooms',
      'Common areas for socializing',
      'Basic room service during limited hours',
      'Luggage storage facilities available'
    ],
    importantInformation: [
      'Budget package with essential services only',
      'Group activities may have waiting times',
      'Limited customization and private services',
      'Weather may affect some activities',
      'Shared facilities require cooperation'
    ],
    insuranceNotice: [
      'Travel insurance recommended for budget travelers',
      'Basic medical coverage advised',
      'Personal belongings insurance suggested',
      'Activity participation at own risk',
      'Emergency evacuation coverage recommended'
    ],
    disclaimer: [
      'Budget package with limited services',
      'Group activities subject to minimum numbers',
      'Weather conditions may affect itinerary',
      'Company not liable for shared accommodation issues',
      'Management decisions final for group activities'
    ],
    notes: [
      'Perfect for solo travelers and backpackers',
      'Great way to meet fellow travelers',
      'Essential Lakshadweep experience at affordable price',
      'Local food experiences included',
      'Flexible and adventurous travelers preferred'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Budget travelers enjoying beach',
        caption: 'Affordable doesn\'t mean compromising on beauty'
      },
      {
        src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Group activities and bonding',
        caption: 'Meet fellow travelers and make friends'
      },
      {
        src: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Local food and cultural experience',
        caption: 'Authentic local experiences'
      }
    ]
  },
  {
    id: '3',
    slug: 'scuba-focus-lakshadweep',
    title: 'Scuba Focus Lakshadweep',
    description: 'Dedicated scuba diving package for certified divers with multiple dive sites and marine exploration.',
    duration: '6D/5N',
    durationDays: 6,
    durationNights: 5,
    category: 'Adventure',
    priceFromINR: 55000,
    featured: true,
    islands: ['Agatti', 'Bangaram', 'Thinnakara'],
    images: [
      'https://images.pexels.com/photos/3098936/pexels-photo-3098936.jpeg',
      'https://images.pexels.com/photos/2825689/pexels-photo-2825689.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Multiple dive sites with diverse marine life',
      'Professional PADI certified instructors',
      'Underwater photography opportunities',
      'Night diving experiences',
      'Marine conservation education'
    ],
    tags: ['scuba-diving', 'marine-life', 'underwater', 'adventure', 'certified'],
    itinerary: [
      {
        day: 1,
        title: 'Diving Preparation',
        description: 'Arrival and diving preparation with equipment check.',
        activities: [
          'Airport pickup and transfer to dive resort',
          'Check-in and diving equipment fitting',
          'Diving briefing and site orientation',
          'Equipment check and safety procedures',
          'Welcome dinner with dive group'
        ]
      },
      {
        day: 2,
        title: 'Agatti Dive Sites',
        description: 'Explore the diverse dive sites around Agatti Island.',
        activities: [
          'Morning dive at Agatti Coral Garden',
          'Surface interval and dive log completion',
          'Afternoon dive at Agatti Wall',
          'Underwater photography session',
          'Evening dive theory and marine life discussion'
        ]
      },
      {
        day: 3,
        title: 'Bangaram Underwater',
        description: 'Discover the pristine underwater world of Bangaram.',
        activities: [
          'Boat transfer to Bangaram dive sites',
          'Deep dive at Bangaram Drop-off',
          'Lunch break on Bangaram Island',
          'Drift dive along Bangaram Reef',
          'Night dive preparation and briefing'
        ]
      },
      {
        day: 4,
        title: 'Advanced Diving',
        description: 'Advanced diving experiences and specialties.',
        activities: [
          'Early morning night dive experience',
          'Advanced diving techniques workshop',
          'Wreck diving at local shipwreck site',
          'Underwater navigation practice',
          'Marine life identification session'
        ]
      },
      {
        day: 5,
        title: 'Thinnakara Exploration',
        description: 'Explore the unique dive sites of Thinnakara.',
        activities: [
          'Boat journey to Thinnakara',
          'Multi-level diving at Thinnakara Reef',
          'Underwater photography competition',
          'Marine conservation awareness session',
          'Certification ceremony and celebration'
        ]
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Final diving activities and departure.',
        activities: [
          'Final dive and equipment return',
          'Dive log completion and certification',
          'Souvenir shopping and group photos',
          'Airport transfer and departure'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '5 nights accommodation at dive resort',
      'All meals with dive-friendly timing',
      'Airport transfers and boat transportation',
      'Entry permits and diving documentation',
      'All diving equipment and safety gear',
      'Professional PADI certified instructors',
      'Multiple dives at various sites',
      'Diving certification and logbook',
      'Underwater photography guidance',
      'Marine life identification materials',
      'Diving insurance and safety support'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Personal diving equipment (available for rent)',
      'Advanced diving certifications (available)',
      'Underwater camera rental',
      'Personal expenses and shopping',
      'Alcoholic beverages',
      'Travel insurance beyond diving coverage',
      'Tips for dive instructors'
    ],
    bookingRequirements: [
      'Valid diving certification (Open Water or higher)',
      'Recent diving medical certificate',
      'Minimum 10 logged dives experience',
      'Advance booking of 45 days recommended',
      '50% advance payment for confirmation'
    ],
    documentsRequired: [
      'Valid diving certification card',
      'Diving medical certificate (within 1 year)',
      'Diving logbook with recent dives',
      'Valid photo identification',
      'Travel and diving insurance documents'
    ],
    termsAndConditions: [
      'Diving activities subject to weather and sea conditions',
      'Valid diving certification mandatory',
      'Medical fitness required for all diving activities',
      'Safety protocols must be followed strictly',
      'Diving insurance coverage required'
    ],
    policies: [
      'Diving-specific cancellation policies apply',
      'Weather cancellations will be rescheduled',
      'Medical issues may affect diving participation',
      'Equipment damage charges apply',
      'Diving violations may result in trip termination'
    ],
    travelTips: [
      'Bring personal diving logbook and certifications',
      'Avoid alcohol 24 hours before diving',
      'Stay hydrated and maintain diving fitness',
      'Bring underwater camera if desired',
      'Follow diving safety protocols strictly'
    ],
    accommodationNotes: [
      'Dive resort with equipment drying facilities',
      'Rooms designed for diving gear storage',
      'Dive boat access directly from resort',
      'Equipment rental and service facilities',
      'Diving library and educational materials'
    ],
    importantInformation: [
      'Diving activities require medical fitness',
      'Weather conditions may affect diving schedules',
      'Professional supervision for all dives',
      'Emergency diving medical support available',
      'Marine conservation guidelines must be followed'
    ],
    insuranceNotice: [
      'Diving insurance mandatory for all participants',
      'Coverage for diving accidents and decompression',
      'Medical evacuation insurance recommended',
      'Equipment insurance available',
      'Emergency diving medical coverage required'
    ],
    disclaimer: [
      'Diving activities involve inherent risks',
      'Participants dive at their own risk',
      'Weather and sea conditions may affect diving',
      'Company not liable for diving accidents',
      'Safety protocols must be followed without exception'
    ],
    notes: [
      'Perfect for certified diving enthusiasts',
      'Professional instruction and safety standards',
      'Diverse marine life and coral formations',
      'Underwater photography opportunities',
      'Marine conservation awareness included'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/6189571/pexels-photo-6189571.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Scuba diving in crystal clear waters',
        caption: 'Explore the underwater paradise of Lakshadweep'
      },
      {
        src: 'https://images.pexels.com/photos/2825689/pexels-photo-2825689.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Diverse marine life and coral reefs',
        caption: 'Discover vibrant coral reefs and marine biodiversity'
      },
      {
        src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Professional diving instruction',
        caption: 'Professional PADI certified instructors ensure safety'
      }
    ]
  },
  {
    id: '4',
    slug: '1-night-bangaram-2-night-agatti',
    title: '1 Night Bangaram 2 Night Agatti',
    description: 'Perfect short getaway combining the luxury of Bangaram with the accessibility of Agatti Island.',
    duration: '3D/2N',
    durationDays: 3,
    durationNights: 2,
    category: 'Luxury',
    priceFromINR: 35000,
    featured: false,
    islands: ['Bangaram', 'Agatti'],
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2539395/pexels-photo-2539395.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Exclusive Bangaram Island experience',
      'Pristine beaches and crystal-clear lagoons',
      'Luxury accommodation on both islands',
      'Seamless inter-island transfers',
      'Perfect for weekend getaways'
    ],
    tags: ['luxury', 'short-trip', 'bangaram', 'agatti', 'weekend'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Bangaram Transfer',
        description: 'Arrive at Agatti and transfer to exclusive Bangaram Island.',
        activities: [
          'Arrival at Agatti Airport',
          'Welcome and refreshments',
          'Speedboat transfer to Bangaram Island',
          'Check-in to luxury beach resort',
          'Sunset viewing and welcome dinner'
        ]
      },
      {
        day: 2,
        title: 'Bangaram to Agatti',
        description: 'Morning at Bangaram, afternoon transfer to Agatti.',
        activities: [
          'Early morning beach walk',
          'Snorkeling in Bangaram lagoon',
          'Checkout and transfer to Agatti',
          'Check-in to Agatti accommodation',
          'Evening cultural program'
        ]
      },
      {
        day: 3,
        title: 'Agatti Exploration & Departure',
        description: 'Explore Agatti Island before departure.',
        activities: [
          'Island tour and local village visit',
          'Beach activities and water sports',
          'Souvenir shopping',
          'Airport transfer and departure'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '1 night luxury accommodation in Bangaram',
      '1 night accommodation in Agatti',
      'All meals during the stay',
      'Inter-island transfers by speedboat',
      'Airport transfers',
      'Entry permits and documentation',
      'Basic water sports equipment',
      'Local guide services'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Personal expenses',
      'Alcoholic beverages',
      'Scuba diving activities',
      'Travel insurance',
      'Tips and gratuities'
    ],
    bookingRequirements: [
      'Minimum 30 days advance booking',
      '40% advance payment required',
      'Valid photo ID for all travelers',
      'Confirmed flight bookings'
    ],
    documentsRequired: [
      'Valid photo identification',
      'Passport size photographs',
      'Travel insurance (recommended)',
      'Medical fitness certificate if required'
    ],
    termsAndConditions: [
      'Subject to weather conditions',
      'Inter-island transfers depend on sea conditions',
      'Luxury accommodation subject to availability',
      'Rates may vary during peak season'
    ],
    policies: [
      'Free cancellation up to 15 days before travel',
      'Partial refund for cancellation within 15 days',
      'Weather-related changes will be accommodated'
    ],
    travelTips: [
      'Pack light for easy inter-island transfers',
      'Bring reef-safe sunscreen',
      'Carry cash for personal expenses',
      'Respect marine environment'
    ],
    accommodationNotes: [
      'Luxury beachfront accommodation in Bangaram',
      'Comfortable stay in Agatti with modern amenities',
      'All rooms with ocean views',
      'Room service available'
    ],
    importantInformation: [
      'Weather dependent transfers',
      'Limited facilities on Bangaram Island',
      'Medical facilities available on Agatti',
      'Photography restrictions in certain areas'
    ],
    insuranceNotice: [
      'Travel insurance recommended',
      'Coverage for inter-island transfers',
      'Medical evacuation insurance advised'
    ],
    disclaimer: [
      'Weather conditions may affect itinerary',
      'Company not liable for weather delays',
      'Activities subject to local conditions'
    ],
    notes: [
      'Perfect for luxury short breaks',
      'Ideal for couples and small groups',
      'Best time: October to March',
      'Advance booking essential'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Bangaram Island luxury resort',
        caption: 'Exclusive luxury accommodation on Bangaram'
      },
      {
        src: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Crystal clear lagoon',
        caption: 'Pristine waters perfect for snorkeling'
      }
    ]
  },
  {
    id: '5',
    slug: '1-night-kavaratti-3-night-agatti',
    title: '1 Night Kavaratti 3 Night Agatti',
    description: 'Cultural immersion in Kavaratti combined with extended relaxation in Agatti Island.',
    duration: '4D/3N',
    durationDays: 4,
    durationNights: 3,
    category: 'Adventure',
    priceFromINR: 32000,
    featured: false,
    islands: ['Kavaratti', 'Agatti'],
    images: [
      'https://images.pexels.com/photos/33430995/pexels-photo-33430995.jpeg',
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Cultural exploration of Kavaratti',
      'Marine museum and aquarium visit',
      'Extended stay in Agatti for relaxation',
      'Local community interactions',
      'Traditional fishing experiences'
    ],
    tags: ['cultural', 'kavaratti', 'agatti', 'marine-museum', 'local-experience'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Kavaratti Transfer',
        description: 'Arrive and explore the administrative capital of Lakshadweep.',
        activities: [
          'Arrival at Agatti Airport',
          'Transfer to Kavaratti by helicopter/boat',
          'Check-in to accommodation',
          'Visit to Marine Aquarium',
          'Evening cultural program'
        ]
      },
      {
        day: 2,
        title: 'Kavaratti to Agatti',
        description: 'Morning exploration of Kavaratti, transfer to Agatti.',
        activities: [
          'Visit to local markets and mosques',
          'Traditional handicraft workshop',
          'Transfer back to Agatti',
          'Check-in to beachfront accommodation',
          'Sunset beach walk'
        ]
      },
      {
        day: 3,
        title: 'Agatti Island Activities',
        description: 'Full day of water sports and island exploration.',
        activities: [
          'Snorkeling in Agatti lagoon',
          'Kayaking and water sports',
          'Beach volleyball and games',
          'Traditional fishing with locals',
          'Bonfire and cultural evening'
        ]
      },
      {
        day: 4,
        title: 'Departure',
        description: 'Final island moments and departure.',
        activities: [
          'Morning beach relaxation',
          'Souvenir shopping',
          'Check-out and airport transfer',
          'Departure from Agatti'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '1 night accommodation in Kavaratti',
      '2 nights accommodation in Agatti',
      'All meals during the stay',
      'Inter-island transfers',
      'Entry permits and documentation',
      'Marine aquarium entry fees',
      'Cultural program tickets',
      'Basic water sports equipment'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Personal expenses and shopping',
      'Alcoholic beverages',
      'Advanced water sports',
      'Travel insurance',
      'Tips and gratuities'
    ],
    bookingRequirements: [
      'Minimum 30 days advance booking',
      '35% advance payment required',
      'Valid identification documents',
      'Special permits for Kavaratti visit'
    ],
    documentsRequired: [
      'Valid photo ID',
      'Passport size photographs',
      'Special entry permit for Kavaratti',
      'Medical fitness certificate'
    ],
    termsAndConditions: [
      'Kavaratti visit subject to permit approval',
      'Cultural sites have dress code requirements',
      'Photography restrictions apply',
      'Weather dependent transfers'
    ],
    policies: [
      'Free cancellation up to 20 days before travel',
      'Permit processing takes 15-20 days',
      'Weather delays will be accommodated'
    ],
    travelTips: [
      'Dress modestly for cultural sites',
      'Respect local customs and traditions',
      'Carry sufficient cash',
      'Learn basic local greetings'
    ],
    accommodationNotes: [
      'Government guest house in Kavaratti',
      'Beachfront resort in Agatti',
      'Basic amenities in Kavaratti',
      'Modern facilities in Agatti'
    ],
    importantInformation: [
      'Kavaratti has limited tourist facilities',
      'Alcohol not available in Kavaratti',
      'Medical facilities available on both islands',
      'Cultural sensitivity required'
    ],
    insuranceNotice: [
      'Travel insurance recommended',
      'Medical coverage important',
      'Inter-island transfer insurance advised'
    ],
    disclaimer: [
      'Cultural sites may have restricted access',
      'Weather may affect helicopter transfers',
      'Local customs must be respected'
    ],
    notes: [
      'Unique cultural experience',
      'Perfect for culture enthusiasts',
      'Educational and recreational',
      'Advance planning essential'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Kavaratti marine aquarium',
        caption: 'Educational marine life experience'
      },
      {
        src: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Cultural interactions',
        caption: 'Meet local communities and learn traditions'
      }
    ]
  },
  {
    id: '6',
    slug: 'agatti-island-adventure',
    title: 'Agatti Island Adventure',
    description: 'Action-packed adventure focusing on Agatti Island with water sports, exploration, and island activities.',
    duration: '3D/2N',
    durationDays: 3,
    durationNights: 2,
    category: 'Adventure',
    priceFromINR: 28000,
    featured: false,
    islands: ['Agatti'],
    images: [
      'https://images.pexels.com/photos/1430676/pexels-photo-1430676.jpeg',
      'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2825689/pexels-photo-2825689.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Comprehensive Agatti Island exploration',
      'Multiple water sports activities',
      'Adventure-focused itinerary',
      'Local fishing expeditions',
      'Sandbank excursions'
    ],
    tags: ['adventure', 'agatti', 'water-sports', 'exploration', 'short-trip'],
    itinerary: [
      {
        day: 1,
        title: 'Adventure Begins',
        description: 'Arrival and immediate adventure activities.',
        activities: [
          'Airport pickup and quick check-in',
          'Welcome briefing and safety instructions',
          'Kayaking in Agatti lagoon',
          'Snorkeling at coral gardens',
          'Beach volleyball and games'
        ]
      },
      {
        day: 2,
        title: 'Full Adventure Day',
        description: 'Packed day of water sports and exploration.',
        activities: [
          'Early morning fishing expedition',
          'Sandbank excursion and picnic',
          'Jet skiing and banana boat rides',
          'Scuba diving (for certified divers)',
          'Sunset cruise and beach bonfire'
        ]
      },
      {
        day: 3,
        title: 'Final Adventures',
        description: 'Last adventure activities and departure.',
        activities: [
          'Morning beach cycling',
          'Final snorkeling session',
          'Adventure certificate ceremony',
          'Souvenir shopping',
          'Airport transfer and departure'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '2 nights adventure resort accommodation',
      'All meals with energy-rich options',
      'All water sports equipment',
      'Professional adventure guides',
      'Safety equipment and training',
      'Sandbank excursion',
      'Adventure certificates',
      'Group photos and videos'
    ],
    exclusions: [
      'Flights to/from Kochi',
      'Personal adventure gear',
      'Alcoholic beverages',
      'Advanced scuba diving courses',
      'Personal expenses',
      'Travel insurance',
      'Tips for guides'
    ],
    bookingRequirements: [
      'Basic swimming ability required',
      'Age limit: 12-60 years',
      'Medical fitness certificate',
      'Advance booking of 20 days',
      '40% advance payment'
    ],
    documentsRequired: [
      'Valid photo ID',
      'Swimming ability certificate',
      'Medical fitness certificate',
      'Emergency contact details'
    ],
    termsAndConditions: [
      'All activities weather dependent',
      'Safety briefings mandatory',
      'Age and fitness restrictions apply',
      'Adventure waiver required'
    ],
    policies: [
      'Free cancellation up to 10 days',
      'Weather cancellations rescheduled',
      'Medical issues partial refund',
      'Adventure gear damage charges apply'
    ],
    travelTips: [
      'Bring personal adventure gear if preferred',
      'Stay hydrated during activities',
      'Follow safety instructions strictly',
      'Wear appropriate clothing',
      'Bring waterproof bags'
    ],
    accommodationNotes: [
      'Adventure-focused accommodation',
      'Equipment storage facilities',
      'Quick access to beach and activities',
      'Group dining arrangements'
    ],
    importantInformation: [
      'Weather conditions affect all activities',
      'Professional supervision provided',
      'Emergency medical support available',
      'Adventure activities involve risks'
    ],
    insuranceNotice: [
      'Adventure travel insurance mandatory',
      'Coverage for water sports required',
      'Medical evacuation insurance recommended'
    ],
    disclaimer: [
      'Adventure activities at own risk',
      'Weather may affect itinerary',
      'Safety instructions must be followed',
      'Company not liable for accidents'
    ],
    notes: [
      'Perfect for adventure enthusiasts',
      'Great for team building',
      'Professional safety standards',
      'Memorable adventure experience'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Water sports adventure',
        caption: 'Exciting water sports activities'
      },
      {
        src: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Adventure group activities',
        caption: 'Team adventures and group fun'
      }
    ]
  },
  {
    id: '7',
    slug: 'bangaram-island-luxury-package',
    title: 'Bangaram Island Luxury Package',
    description: 'Exclusive luxury experience on pristine Bangaram Island with premium accommodations and personalized services.',
    duration: '4D/3N',
    durationDays: 4,
    durationNights: 3,
    category: 'Luxury',
    priceFromINR: 65000,
    featured: true,
    islands: ['Bangaram', 'Agatti'],
    images: [
      'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg',
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    highlights: [
      'Exclusive Bangaram Island access',
      'Luxury beachfront villas',
      'Personal butler service',
      'Gourmet dining experiences',
      'Private beach and lagoon access'
    ],
    tags: ['luxury', 'exclusive', 'bangaram', 'premium', 'private'],
    itinerary: [
      {
        day: 1,
        title: 'Luxury Arrival',
        description: 'VIP arrival and transfer to exclusive Bangaram Island.',
        activities: [
          'VIP reception at Agatti Airport',
          'Private speedboat to Bangaram',
          'Check-in to luxury beachfront villa',
          'Welcome champagne and spa treatment',
          'Gourmet dinner under the stars'
        ]
      },
      {
        day: 2,
        title: 'Exclusive Island Experience',
        description: 'Full day of luxury experiences on Bangaram.',
        activities: [
          'Private sunrise yoga session',
          'Exclusive snorkeling with marine guide',
          'Gourmet beach picnic',
          'Couples spa treatment',
          'Private sunset cruise with champagne'
        ]
      },
      {
        day: 3,
        title: 'Personalized Luxury',
        description: 'Customized luxury experiences based on preferences.',
        activities: [
          'Personal choice of activities',
          'Private fishing expedition',
          'Gourmet cooking class',
          'Professional photography session',
          'Farewell gala dinner'
        ]
      },
      {
        day: 4,
        title: 'Luxury Departure',
        description: 'VIP departure with lasting memories.',
        activities: [
          'Late checkout with final spa treatment',
          'Private transfer to Agatti',
          'VIP airport lounge access',
          'Departure with luxury gift hamper'
        ]
      }
    ],
    inclusions: [
      'Round-trip flights from Kochi to Agatti',
      '3 nights luxury villa accommodation',
      'Personal butler service',
      'All gourmet meals and beverages',
      'Private speedboat transfers',
      'Exclusive spa treatments',
      'Private guided activities',
      'Professional photography',
      'Luxury amenities and gifts',
      'VIP airport services'
    ],
    exclusions: [
      'Flights to/from Kochi (business class upgrade available)',
      'Premium alcoholic beverages',
      'Personal shopping',
      'Extended spa treatments',
      'Helicopter transfers',
      'Gratuities for exceptional service'
    ],
    bookingRequirements: [
      'Minimum 45 days advance booking',
      '60% advance payment required',
      'Luxury travel insurance recommended',
      'Dietary preferences and special requests'
    ],
    documentsRequired: [
      'Valid passport for VIP services',
      'Luxury travel insurance',
      'Special occasion details',
      'Dietary restriction information'
    ],
    termsAndConditions: [
      'Luxury services subject to availability',
      'Weather-dependent activities have luxury alternatives',
      'Exclusive access may be limited',
      'Premium pricing during peak season'
    ],
    policies: [
      'Flexible cancellation up to 30 days',
      'Luxury rescheduling options available',
      'Weather changes include equivalent alternatives',
      'VIP modification services'
    ],
    travelTips: [
      'Pack formal wear for fine dining',
      'Bring luxury resort wear',
      'Inform about special occasions',
      'Prepare for exclusive photography'
    ],
    accommodationNotes: [
      'Luxury beachfront villas with private pools',
      'Premium amenities and furnishings',
      'Private beach access',
      '24×7 butler service',
      'Exclusive dining arrangements'
    ],
    importantInformation: [
      'Exclusive access to private areas',
      'Limited facilities on uninhabited island',
      'Weather alternatives maintain luxury standards',
      'Privacy and exclusivity guaranteed'
    ],
    insuranceNotice: [
      'Comprehensive luxury travel insurance required',
      'High-value coverage recommended',
      'Premium medical and evacuation coverage'
    ],
    disclaimer: [
      'Luxury services subject to weather',
      'Exclusive access weather dependent',
      'Premium standards maintained for alternatives'
    ],
    notes: [
      'Ultimate luxury island experience',
      'Perfect for special occasions',
      'Exclusive and private',
      'Unforgettable memories guaranteed'
    ],
    gallery: [
      {
        src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Luxury beachfront villa',
        caption: 'Exclusive villa with private pool and beach access'
      },
      {
        src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Gourmet dining experience',
        caption: 'Fine dining with personalized service'
      }
    ]
  },
];