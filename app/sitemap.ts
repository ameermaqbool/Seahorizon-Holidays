import { MetadataRoute } from 'next';
import { packages } from '@/lib/data/packages';
import { blogPosts } from '@/lib/data/blog';

const baseUrl = 'https://seahorizonholidays.com';

export default function sitemap(): MetadataRoute.Sitemap {

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/packages`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lakshadweep`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lakshadweep/guide`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lakshadweep/guide/best-time-to-visit`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lakshadweep/guide/how-to-reach`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lakshadweep/guide/permits-rules`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lakshadweep/islands/agatti`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/lakshadweep/islands/bangaram`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/lakshadweep/islands/thinnakara`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/lakshadweep/islands/kavaratti`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-us`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Package pages
  const packagePages = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts from actual data
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...packagePages, ...blogPages];
}
