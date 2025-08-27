#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Running pre-deployment checks...\n');

const checks = [
  {
    name: 'Environment Variables',
    check: () => {
      const requiredEnvVars = [
        'NEXT_PUBLIC_WHATSAPP_NUMBER',
        'NEXT_PUBLIC_SITE_URL'
      ];
      
      const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
      
      if (missing.length > 0) {
        throw new Error(`Missing environment variables: ${missing.join(', ')}`);
      }
      
      return 'All required environment variables are set';
    }
  },
  {
    name: 'Build Configuration',
    check: () => {
      const nextConfig = require('../next.config.js');
      
      if (nextConfig.output !== 'export') {
        throw new Error('Next.js output should be set to "export" for static deployment');
      }
      
      return 'Build configuration is correct';
    }
  },
  {
    name: 'Security Headers',
    check: () => {
      const nextConfig = require('../next.config.js');
      
      if (!nextConfig.headers) {
        throw new Error('Security headers are not configured');
      }
      
      return 'Security headers are configured';
    }
  },
  {
    name: 'Static Files',
    check: () => {
      const requiredFiles = [
        'public/robots.txt',
        'public/manifest.json',
        'public/sw.js',
        'public/offline.html'
      ];
      
      const missing = requiredFiles.filter(file => !fs.existsSync(path.join(__dirname, '..', file)));
      
      if (missing.length > 0) {
        throw new Error(`Missing static files: ${missing.join(', ')}`);
      }
      
      return 'All required static files are present';
    }
  },
  {
    name: 'Package Dependencies',
    check: () => {
      const packageJson = require('../package.json');
      const lockFile = fs.existsSync(path.join(__dirname, '..', 'package-lock.json'));
      
      if (!lockFile) {
        throw new Error('package-lock.json is missing');
      }
      
      return 'Dependencies are properly locked';
    }
  }
];

let allPassed = true;

for (const check of checks) {
  try {
    const result = check.check();
    console.log(`✅ ${check.name}: ${result}`);
  } catch (error) {
    console.log(`❌ ${check.name}: ${error.message}`);
    allPassed = false;
  }
}

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('🎉 All pre-deployment checks passed! Ready to deploy.');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please fix the issues before deploying.');
  process.exit(1);
}