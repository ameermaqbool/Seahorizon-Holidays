#!/usr/bin/env node
// Run after publishing; this command does not deploy anything.
const base = process.env.SITE_URL || 'https://seahorizonholidays.com';
(async () => {
  for (const path of ['/', '/packages', '/contact', '/blog', '/faq', '/sitemap.xml', '/robots.txt']) {
    const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
    console.log(`${path}: ${response.status}`);
    await response.body?.cancel();
  }
  const missing = await fetch(new URL('/this-page-does-not-exist-check', base), { signal: AbortSignal.timeout(15000) });
  if (missing.status !== 404) throw new Error(`Missing page returned ${missing.status}, expected 404`);
  console.log('HTTP smoke checks passed; separately verify browser UX, certificates and regional access.');
})().catch(error => { console.error(error.message); process.exitCode = 1; });
