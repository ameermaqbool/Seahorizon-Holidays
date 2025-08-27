export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  publishedAt: string;
  readTime: string;
  author: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-time-visit-lakshadweep-2025',
    title: 'Best Time to Visit Lakshadweep in 2025: Month-by-Month Guide',
    excerpt: 'Discover the perfect time for your Lakshadweep vacation with our comprehensive weather guide, seasonal activities, and insider tips for each month.',
    cover: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-20',
    readTime: '8 min read',
    author: 'Sea Horizon Team',
    tags: ['Travel Tips', 'Weather', 'Planning'],
    featured: true
  },
  {
    slug: 'complete-lakshadweep-packing-guide',
    title: 'Complete Lakshadweep Packing Guide: What to Bring & What to Leave',
    excerpt: 'Essential packing checklist for your Lakshadweep trip including reef-safe products, island-appropriate clothing, and must-have travel gear.',
    cover: 'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-18',
    readTime: '6 min read',
    author: 'Travel Expert',
    tags: ['Packing', 'Travel Tips', 'Essentials'],
    featured: true
  },
  {
    slug: 'lakshadweep-underwater-photography-guide',
    title: 'Underwater Photography in Lakshadweep: Capturing Marine Magic',
    excerpt: 'Master the art of underwater photography in Lakshadweep\'s crystal-clear waters. Tips, techniques, and best spots for stunning marine shots.',
    cover: 'https://images.pexels.com/photos/6189571/pexels-photo-6189571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-15',
    readTime: '10 min read',
    author: 'Photography Expert',
    tags: ['Photography', 'Scuba Diving', 'Marine Life'],
    featured: true
  },
  {
    slug: 'lakshadweep-permits-complete-guide',
    title: 'Lakshadweep Permits: Complete Guide for 2025',
    excerpt: 'Everything you need to know about Lakshadweep entry permits, documentation requirements, and how to avoid common mistakes.',
    cover: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-12',
    readTime: '7 min read',
    author: 'Local Expert',
    tags: ['Permits', 'Documentation', 'Travel Tips'],
    featured: false
  },
  {
    slug: 'budget-travel-lakshadweep-tips',
    title: 'Budget Travel to Lakshadweep: How to Save Money Without Compromising Experience',
    excerpt: 'Practical tips for experiencing Lakshadweep on a budget. From accommodation to activities, discover how to make your money go further.',
    cover: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-10',
    readTime: '9 min read',
    author: 'Budget Travel Expert',
    tags: ['Budget Travel', 'Money Saving', 'Tips'],
    featured: false
  },
  {
    slug: 'lakshadweep-honeymoon-planning-guide',
    title: 'Planning the Perfect Lakshadweep Honeymoon: A Romantic Guide',
    excerpt: 'Create unforgettable honeymoon memories in Lakshadweep. From romantic activities to intimate dining, plan your perfect romantic getaway.',
    cover: 'https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-08',
    readTime: '8 min read',
    author: 'Romance Travel Specialist',
    tags: ['Honeymoon', 'Romance', 'Couples'],
    featured: false
  },
  {
    slug: 'lakshadweep-marine-life-guide',
    title: 'Marine Life of Lakshadweep: A Snorkeler\'s Paradise',
    excerpt: 'Discover the incredible marine biodiversity of Lakshadweep. From colorful fish to coral gardens, explore what awaits beneath the waves.',
    cover: 'https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-05',
    readTime: '11 min read',
    author: 'Marine Biologist',
    tags: ['Marine Life', 'Snorkeling', 'Nature'],
    featured: false
  },
  {
    slug: 'lakshadweep-local-culture-traditions',
    title: 'Lakshadweep Culture: Traditions, Food, and Local Life',
    excerpt: 'Immerse yourself in the rich culture of Lakshadweep. Learn about local traditions, cuisine, and the warm hospitality of island communities.',
    cover: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-03',
    readTime: '7 min read',
    author: 'Cultural Expert',
    tags: ['Culture', 'Local Life', 'Food'],
    featured: false
  },
  {
    slug: 'sustainable-tourism-lakshadweep',
    title: 'Sustainable Tourism in Lakshadweep: How to Travel Responsibly',
    excerpt: 'Learn how to minimize your environmental impact while visiting Lakshadweep. Tips for responsible tourism and coral reef conservation.',
    cover: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    publishedAt: '2024-12-01',
    readTime: '6 min read',
    author: 'Sustainability Expert',
    tags: ['Sustainability', 'Environment', 'Conservation'],
    featured: false
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getRecentBlogPosts(limit: number = 6): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}