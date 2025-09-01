/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  swcMinify: false,

  // 🚀 Force a unique build ID on every deploy → busts cache
  generateBuildId: async () => {
    return Date.now().toString();
  },

  // 🚀 Disable aggressive caching in dev/export mode
  onDemandEntries: {
    maxInactiveAge: 0,
    pagesBufferLength: 0,
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize bundle splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    };

    return config;
  },
};

module.exports = nextConfig;
