#!/usr/bin/env node
const fs = require('node:fs');
const assert = require('node:assert/strict');
const config = require('../next.config.js');
assert.notEqual(config.output, 'export', 'Use the Netlify Next.js runtime');
assert.equal(typeof config.headers, 'function');
assert.equal(typeof config.redirects, 'function');
for (const file of ['package-lock.json', 'netlify.toml', 'public/robots.txt', 'app/sitemap.ts']) {
  assert.ok(fs.existsSync(file), `Missing ${file}`);
}
console.log('Deployment configuration checks passed. No credentials are needed for WhatsApp enquiries.');
