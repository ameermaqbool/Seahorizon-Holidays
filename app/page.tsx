import { Hero } from '@/components/sections/hero';
import { TripPlanner } from '@/components/sections/trip-planner';
import { FeaturedPackages } from '@/components/sections/featured-packages';
import { TrustBadges } from '@/components/sections/trust-badges';
import { ReviewsCarousel } from '@/components/sections/reviews-carousel';
import { BlogTeaser } from '@/components/sections/blog-teaser';
import { PromoCarousel } from '@/components/sections/promo-carousel';

export default function Home() {

  return (
    <div className="min-h-screen">
      <Hero />
      <PromoCarousel />
      
      <TripPlanner />
      <FeaturedPackages />
      <TrustBadges />
      <ReviewsCarousel />
      <BlogTeaser />
    </div>
  );
}