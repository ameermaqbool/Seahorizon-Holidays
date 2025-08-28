import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Sea Horizon Holidays Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/918075301729?text=Hi%20Sea%20Horizon!%20I%20want%20to%20plan%20a%20Lakshadweep%20trip. Sea Horizon! I read your blog post "${post.title}" and would like to plan my Lakshadweep trip. Can you help me?`;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-6 text-white/90">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric',
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Content */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  This comprehensive guide will help you understand everything you need to know about this topic. 
                  Our local experts have compiled years of experience to bring you the most accurate and up-to-date information.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Points to Remember</h2>
                
                <ul className="space-y-2">
                  <li>• Plan your trip during the optimal season for the best experience</li>
                  <li>• Book accommodations and permits well in advance</li>
                  <li>• Pack appropriate gear for island activities</li>
                  <li>• Respect local customs and environmental guidelines</li>
                  <li>• Consider working with local experts for seamless planning</li>
                </ul>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Expert Recommendations</h2>
                
                <p>
                  Based on our extensive experience in Lakshadweep tourism, we recommend taking a comprehensive approach 
                  to your travel planning. The islands offer unique experiences that require careful consideration of 
                  timing, logistics, and local conditions.
                </p>
                
                <p>
                  Our team of local experts can help you navigate all aspects of your Lakshadweep journey, from permits 
                  and transportation to activities and accommodations. We ensure that every detail is taken care of so 
                  you can focus on enjoying your tropical paradise experience.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ready to Plan Your Trip?</h2>
                
                <p>
                  Don&apos;t let the complexities of island travel planning overwhelm you. Our experienced team handles 
                  everything from permits to itineraries, ensuring your Lakshadweep adventure is everything you&apos;ve 
                  dreamed of and more.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary-50 to-ocean-50 border-primary-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Turn This Knowledge Into Your Adventure?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our local experts help you plan the perfect Lakshadweep experience based on the insights 
              from this guide. Get personalized recommendations and hassle-free booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[#25d366] hover:bg-[#128c7e] text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Plan My Trip on WhatsApp
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary-300 text-primary-700 hover:bg-primary-100"
              >
                <Link href="/packages">
                  View Tour Packages
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.cover}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{relatedPost.readTime}</span>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}