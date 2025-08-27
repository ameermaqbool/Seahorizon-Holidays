interface Review {
  id: string;
  name: string;
  tripType: 'family' | 'couple' | 'group' | 'solo';
  rating: number;
  quote: string;
  date: string;
  avatar: string;
  packageName?: string;
  location?: string;
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya & Rahul Sharma',
    tripType: 'couple',
    rating: 5,
    quote: 'Our honeymoon in Lakshadweep was absolutely magical! Sea Horizon handled everything perfectly - from permits to the romantic candlelight dinner on the beach. The crystal-clear waters and private sandbank experience made it unforgettable.',
    date: '2024-12-15',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Lakshadweep Honeymoon 5D/4N',
    location: 'Mumbai'
  },
  {
    id: '2',
    name: 'Rajesh Family',
    tripType: 'family',
    rating: 5,
    quote: 'Traveled with our two kids (8 & 12) and it was perfect! The shallow lagoons were safe for children, and the cultural programs were educational. Sea Horizon\'s family coordinator made sure every detail was covered. Kids are already asking to go back!',
    date: '2024-12-10',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Family Escape 5D/4N',
    location: 'Delhi'
  },
  {
    id: '3',
    name: 'Amit & Gang',
    tripType: 'group',
    rating: 5,
    quote: 'Six friends, four days of pure adventure! The kayaking competitions, beach volleyball, and bonfire nights were incredible. Sea Horizon organized everything perfectly and we made memories for a lifetime. Already planning our next trip!',
    date: '2024-12-08',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Friends & Adventure 4D/3N',
    location: 'Bangalore'
  },
  {
    id: '4',
    name: 'Kavya Menon',
    tripType: 'solo',
    rating: 4,
    quote: 'My first solo trip to Lakshadweep was amazing! The budget package was perfect for exploring the island culture. Met wonderful people and the local food walk was a highlight. Sea Horizon\'s WhatsApp support was always available.',
    date: '2024-12-05',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Budget Explorer 4D/3N',
    location: 'Chennai'
  },
  {
    id: '5',
    name: 'Dr. Vikram & Sunita',
    tripType: 'couple',
    rating: 5,
    quote: 'The Premium Lagoon Retreat was worth every penny! Butler service, gourmet dining, and the exclusive Bangaram experience were outstanding. The speedboat island hopping and spa treatments were the perfect luxury escape we needed.',
    date: '2024-11-28',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Premium Lagoon Retreat 6D/5N',
    location: 'Pune'
  },
  {
    id: '6',
    name: 'Sarah Johnson',
    tripType: 'couple',
    rating: 5,
    quote: 'As international travelers, we were amazed by the pristine beauty of Lakshadweep. Sea Horizon made everything seamless - permits, transfers, and the most incredible scuba diving experience. The coral reefs are world-class!',
    date: '2024-11-25',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Scuba Focus 6D/5N',
    location: 'London, UK'
  },
  {
    id: '7',
    name: 'The Gupta Family',
    tripType: 'family',
    rating: 5,
    quote: 'Three generations traveling together and everyone loved it! From grandparents enjoying the sunset cruise to grandchildren playing in safe lagoons. Sea Horizon understood our multi-generational needs perfectly.',
    date: '2024-11-20',
    avatar: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Family Escape 5D/4N',
    location: 'Kolkata'
  },
  {
    id: '8',
    name: 'Adventure Squad Hyderabad',
    tripType: 'group',
    rating: 5,
    quote: 'Eight friends, endless adventures! The group activities, competitions, and that final bonfire night - everything was perfectly organized. Sea Horizon knows how to make group trips special. Can\'t wait for round two!',
    date: '2024-11-18',
    avatar: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Friends & Adventure 4D/3N',
    location: 'Hyderabad'
  },
  {
    id: '9',
    name: 'Meera & Arjun',
    tripType: 'couple',
    rating: 4,
    quote: 'The honeymoon package exceeded our expectations! Private sandbank, champagne sunset cruise, and the most romantic candlelight dinner. Only wish we could have stayed longer. Thank you Sea Horizon for the perfect start to married life!',
    date: '2024-11-15',
    avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Lakshadweep Honeymoon 5D/4N',
    location: 'Jaipur'
  },
  {
    id: '10',
    name: 'Ravi Backpacker',
    tripType: 'solo',
    rating: 4,
    quote: 'Budget-friendly but not budget on experience! Met amazing fellow travelers, learned about island culture, and the snorkeling was incredible. Sea Horizon proves you don\'t need to spend a fortune to experience paradise.',
    date: '2024-11-12',
    avatar: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Budget Explorer 4D/3N',
    location: 'Kochi'
  },
  {
    id: '11',
    name: 'Divya Scuba Enthusiast',
    tripType: 'solo',
    rating: 5,
    quote: 'As a certified diver, I can say Lakshadweep\'s underwater world is phenomenal! Four guided dives, night diving, and even a shipwreck - Sea Horizon\'s dive team is professional and safety-focused. Best diving experience in India!',
    date: '2024-11-08',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Scuba Focus 6D/5N',
    location: 'Goa'
  },
  {
    id: '12',
    name: 'The Malhotra Clan',
    tripType: 'family',
    rating: 5,
    quote: 'Four families, 16 people total, and Sea Horizon managed everything flawlessly! Kids had blast with cultural programs, adults enjoyed the spa treatments, and grandparents loved the peaceful beach time. Truly a family paradise!',
    date: '2024-11-05',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    packageName: 'Family Escape 5D/4N',
    location: 'Chandigarh'
  }
];

const getRecentReviews = (limit = 6): Review[] => {
  return reviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

const getReviewsByTripType = (tripType: Review['tripType']): Review[] => {
  return reviews.filter(review => review.tripType === tripType);
};

const getReviewsByPackage = (packageName: string): Review[] => {
  return reviews.filter(review => review.packageName === packageName);
};

const getAverageRating = (): number => {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};

export { getRecentReviews, getReviewsByTripType, getReviewsByPackage, getAverageRating };