export interface Island {
  name: string;
  slug: string;
  description: string;
  image: string;
  highlights: string[];
  detailedDescription: string;
  activities: string[];
  bestTimeToVisit: string;
  howToReach: string;
  accommodation: string[];
  localCulture: string;
  importantNotes: string[];
}

export const islands: Island[] = [
  {
    name: 'Agatti Island',
    slug: 'agatti',
    description: 'Gateway to Lakshadweep with the only airport. Perfect for first-time visitors.',
    image: 'https://images.pexels.com/photos/3426870/pexels-photo-3426870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Airport connectivity', 'Beautiful lagoon', 'Water sports hub', 'Local culture'],
    detailedDescription: 'Agatti Island serves as the main gateway to Lakshadweep, housing the archipelago\'s only airport. This coral island is surrounded by a stunning lagoon with crystal-clear turquoise waters, making it perfect for water sports and marine activities. The island offers a perfect blend of modern amenities and traditional island life, with friendly locals who welcome visitors warmly.',
    activities: [
      'Snorkeling in the lagoon',
      'Scuba diving at nearby reefs',
      'Kayaking through calm waters',
      'Beach volleyball and games',
      'Sunset photography',
      'Cultural interactions with locals',
      'Traditional fishing experiences',
      'Island hopping to nearby atolls'
    ],
    bestTimeToVisit: 'October to March offers the best weather conditions with calm seas and clear skies.',
    howToReach: 'Agatti is accessible by daily flights from Kochi (Cochin) operated by Alliance Air and IndiGo. Flight duration is approximately 1.5 hours.',
    accommodation: [
      'Agatti Island Beach Resort',
      'Government guest houses',
      'Local homestays',
      'Beach cottages'
    ],
    localCulture: 'The island has a predominantly Muslim population with rich maritime traditions. Locals are involved in fishing, coconut cultivation, and tourism. The culture is deeply rooted in Islamic values with a strong sense of community.',
    importantNotes: [
      'Entry permits are mandatory and handled by tour operators',
      'Respect local customs and dress modestly',
      'Limited ATM facilities - carry sufficient cash',
      'Use reef-safe sunscreen to protect marine life',
      'Follow designated paths to protect coral formations'
    ]
  },
  {
    name: 'Bangaram Island',
    slug: 'bangaram',
    description: 'Exclusive uninhabited island paradise for luxury travelers.',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Pristine beaches', 'Luxury resorts', 'Scuba diving', 'Complete privacy'],
    detailedDescription: 'Bangaram is an uninhabited coral island that epitomizes tropical paradise. With pristine white sand beaches, crystal-clear lagoons, and vibrant coral reefs, it offers an exclusive retreat for those seeking luxury and tranquility. The island is surrounded by a shallow lagoon perfect for swimming and water sports.',
    activities: [
      'World-class scuba diving',
      'Snorkeling in pristine reefs',
      'Deep-sea fishing',
      'Kayaking and windsurfing',
      'Beach picnics and barbecues',
      'Sunset cruises',
      'Photography and nature walks',
      'Spa treatments by the beach'
    ],
    bestTimeToVisit: 'November to April provides ideal conditions for water activities and diving.',
    howToReach: 'Accessible by helicopter or speedboat from Agatti Island. Helicopter transfers take 10 minutes while speedboat transfers take 45 minutes.',
    accommodation: [
      'Bangaram Island Resort',
      'Luxury beach villas',
      'Eco-friendly cottages',
      'Exclusive tented accommodations'
    ],
    localCulture: 'As an uninhabited island, Bangaram offers a pure natural experience without permanent residents. The culture is shaped by visiting staff and the pristine marine environment.',
    importantNotes: [
      'Uninhabited island with limited facilities',
      'All supplies come from mainland',
      'Weather-dependent transfers',
      'Advance booking essential',
      'Respect the pristine environment'
    ]
  },
  {
    name: 'Thinnakara Island',
    slug: 'thinnakara',
    description: 'Small coral island perfect for day trips and snorkeling.',
    image: 'https://images.pexels.com/photos/7502475/pexels-photo-7502475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Day trip destination', 'Excellent snorkeling', 'Coral gardens', 'Peaceful atmosphere'],
    detailedDescription: 'Thinnakara is a small, uninhabited coral island known for its exceptional snorkeling opportunities and pristine coral gardens. The island is surrounded by shallow lagoons with excellent visibility, making it perfect for underwater exploration and marine life observation.',
    activities: [
      'Snorkeling in coral gardens',
      'Swimming in shallow lagoons',
      'Beach combing and shell collection',
      'Photography of marine life',
      'Picnic lunches on the beach',
      'Coral reef exploration',
      'Bird watching',
      'Relaxation and sunbathing'
    ],
    bestTimeToVisit: 'October to March offers calm seas and excellent underwater visibility.',
    howToReach: 'Accessible by speedboat from Agatti or Bangaram. Journey time is approximately 30-45 minutes depending on sea conditions.',
    accommodation: [
      'Day trip destination - no overnight stays',
      'Temporary beach shelters',
      'Picnic facilities'
    ],
    localCulture: 'Uninhabited island with pristine natural environment. The culture is defined by its untouched marine ecosystem and visiting tourists.',
    importantNotes: [
      'Day trip destination only',
      'No permanent facilities',
      'Carry all supplies including water',
      'Protect coral reefs - no touching',
      'Weather-dependent access'
    ]
  },
  {
    name: 'Kavaratti Island',
    slug: 'kavaratti',
    description: 'Administrative capital with rich cultural heritage and marine museum.',
    image: 'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    highlights: ['Administrative center', 'Marine museum', 'Cultural sites', 'Local markets'],
    detailedDescription: 'Kavaratti serves as the administrative capital of Lakshadweep and offers the most comprehensive cultural experience. The island features the famous Marine Aquarium, beautiful mosques, and vibrant local markets. It provides insight into the traditional life and governance of the archipelago.',
    activities: [
      'Visit Marine Aquarium',
      'Explore local mosques',
      'Shopping at local markets',
      'Cultural interactions',
      'Traditional handicraft workshops',
      'Lagoon swimming',
      'Local cuisine tasting',
      'Government building tours'
    ],
    bestTimeToVisit: 'November to March provides pleasant weather for sightseeing and cultural activities.',
    howToReach: 'Accessible by helicopter from Agatti or by ship from Kochi. Special permits required for visits.',
    accommodation: [
      'Government guest houses',
      'Tourist hostels',
      'Local homestays',
      'Administrative quarters'
    ],
    localCulture: 'Rich Islamic culture with traditional architecture, local crafts, and maritime heritage. The island serves as the cultural and administrative heart of Lakshadweep.',
    importantNotes: [
      'Special permits required for visits',
      'Respect Islamic customs and traditions',
      'Dress modestly in public areas',
      'Photography restrictions in some areas',
      'Limited tourist facilities compared to other islands'
    ]
  }
];

export function getIslandBySlug(slug: string): Island | undefined {
  return islands.find(island => island.slug === slug);
}