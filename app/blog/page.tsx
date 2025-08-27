import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';

export const metadata = {
  title: 'Lakshadweep Travel Blog — Tips, Guides & Stories | Sea Horizon Holidays',
  description: 'Discover Lakshadweep through our travel blog. Expert tips, destination guides, travel stories, and insider insights from local experts.',
  keywords: 'Lakshadweep blog, travel tips, destination guides, coral islands, travel stories, local insights',
};

const categories = [
  { name: 'All Posts', count: blogPosts.length, active: true },
  { name: 'Travel Tips', count: 4, active: false },
  { name: 'Photography', count: 2, active: false },
  { name: 'Culture', count: 2, active: false },
  { name: 'Planning', count: 3, active: false }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const whatsappUrl = `https://wa.me/918075301729?text=Hi Sea Horizon! I read your blog and would like to plan my Lakshadweep trip. Can you help me?`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Travel Insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Lakshadweep Travel Blog
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover insider tips, destination guides, and travel stories from our local experts. 
              Everything you need to plan your perfect coral island adventure.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${category.active ? 'bg-primary-600' : 'hover:bg-primary-50'}`}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and comprehensive travel guides
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-80' : 'h-48'}`}>
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary-500 text-white border-0 shadow-md">
                      Featured
                    </Badge>
                  </div>

                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-white/90 text-gray-800 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardContent className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <div className="mb-4">
                    <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="ghost" className="w-full justify-between p-0 h-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular Posts */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Fresh insights and tips for your Lakshadweep adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.slug}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-white/90 text-gray-800 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <Button asChild variant="ghost" className="w-full justify-between p-0 h-auto">
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary-50 to-ocean-50 border-primary-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated with Travel Tips
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest Lakshadweep travel insights, exclusive tips, and special offers 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Button className="bg-primary-600 hover:bg-primary-700">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-ocean-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Lakshadweep Adventure?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Turn your travel inspiration into reality. Our local experts are ready to help 
            you create the perfect Lakshadweep experience based on our insider knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Start Planning Now
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              <Link href="/packages">
                View Tour Packages
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}