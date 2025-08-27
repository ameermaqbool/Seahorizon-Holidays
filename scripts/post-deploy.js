#!/usr/bin/env node

const https = require('https');
const fs = require('fs');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seahorizonholidays.com';

console.log('🔍 Running post-deployment checks...\n');

const checks = [
  {
    name: 'Site Accessibility',
    check: () => {
      return new Promise((resolve, reject) => {
        https.get(SITE_URL, (res) => {
          if (res.statusCode === 200) {
            resolve(`Site is accessible (Status: ${res.statusCode})`);
          } else {
            reject(new Error(`Site returned status: ${res.statusCode}`));
          }
        }).on('error', (err) => {
          reject(new Error(`Site is not accessible: ${err.message}`));
        });
      });
    }
  },
  {
    name: 'Critical Pages',
    check: async () => {
      const criticalPages = [
        '/',
        '/packages',
        '/lakshadweep',
        '/contact',
        '/blog'
      ];
      
      const results = await Promise.allSettled(
        criticalPages.map(page => 
          new Promise((resolve, reject) => {
            https.get(`${SITE_URL}${page}`, (res) => {
              if (res.statusCode === 200) {
                resolve(page);
              } else {
                reject(new Error(`${page} returned status: ${res.statusCode}`));
              }
            }).on('error', (err) => {
              reject(new Error(`${page} failed: ${err.message}`));
            });
          })
        )
      );
      
      const failed = results.filter(result => result.status === 'rejected');
      
      if (failed.length > 0) {
        throw new Error(`Failed pages: ${failed.map(f => f.reason.message).join(', ')}`);
      }
      
      return `All ${criticalPages.length} critical pages are accessible`;
    }
  },
  {
    name: 'Security Headers',
    check: () => {
      return new Promise((resolve, reject) => {
        https.get(SITE_URL, (res) => {
          const requiredHeaders = [
            'x-frame-options',
            'x-content-type-options',
            'referrer-policy'
          ];
          
          const missing = requiredHeaders.filter(header => !res.headers[header]);
          
          if (missing.length > 0) {
            reject(new Error(`Missing security headers: ${missing.join(', ')}`));
          } else {
            resolve('All security headers are present');
          }
        }).on('error', (err) => {
          reject(new Error(`Failed to check headers: ${err.message}`));
        });
      });
    }
  },
  {
    name: 'Sitemap Accessibility',
    check: () => {
      return new Promise((resolve, reject) => {
        https.get(`${SITE_URL}/sitemap.xml`, (res) => {
          if (res.statusCode === 200) {
            resolve('Sitemap is accessible');
          } else {
            reject(new Error(`Sitemap returned status: ${res.statusCode}`));
          }
        }).on('error', (err) => {
          reject(new Error(`Sitemap check failed: ${err.message}`));
        });
      });
    }
  },
  {
    name: 'Robots.txt',
    check: () => {
      return new Promise((resolve, reject) => {
        https.get(`${SITE_URL}/robots.txt`, (res) => {
          if (res.statusCode === 200) {
            resolve('Robots.txt is accessible');
          } else {
            reject(new Error(`Robots.txt returned status: ${res.statusCode}`));
          }
        }).on('error', (err) => {
          reject(new Error(`Robots.txt check failed: ${err.message}`));
        });
      });
    }
  }
];

async function runChecks() {
  let allPassed = true;

  for (const check of checks) {
    try {
      const result = await check.check();
      console.log(`✅ ${check.name}: ${result}`);
    } catch (error) {
      console.log(`❌ ${check.name}: ${error.message}`);
      allPassed = false;
    }
  }

  console.log('\n' + '='.repeat(50));

  if (allPassed) {
    console.log('🎉 All post-deployment checks passed! Site is live and healthy.');
    
    // Log deployment success
    const deploymentLog = {
      timestamp: new Date().toISOString(),
      status: 'success',
      url: SITE_URL,
      checks: checks.map(c => c.name)
    };
    
    fs.writeFileSync('deployment.log', JSON.stringify(deploymentLog, null, 2));
    
  } else {
    console.log('❌ Some post-deployment checks failed. Please investigate.');
    process.exit(1);
  }
}

runChecks().catch(console.error);