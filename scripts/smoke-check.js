// HTTP integration checks against a running production build; never submits leads.
const assert = require('node:assert/strict');
const base = process.env.SITE_URL || 'http://127.0.0.1:3000';
(async () => {
  const sitemap = await fetch(`${base}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  assert.ok(urls.length >= 20, 'Expected package, blog and guide pages');
  for (const canonical of urls) {
    const path = new URL(canonical).pathname;
    const response = await fetch(new URL(path, base));
    assert.equal(response.status, 200, path);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path);
    const html = await response.text();
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `Canonical: ${path}`);
    assert.ok(/<title>[^<]+<\/title>/.test(html), `Title: ${path}`);
    assert.ok(/<meta name="description" content="[^"]+"/.test(html), `Description: ${path}`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `Heading: ${path}`);
    assert.ok(!/src="http:\/\//.test(html), `Mixed content: ${path}`);
    for (const [, href] of html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)) {
      const url = new URL(href.replaceAll('&amp;', '&'));
      assert.equal(url.pathname, '/918075301729');
      assert.ok(!url.searchParams.get('text')?.includes('undefined'), 'Malformed WhatsApp URL');
    }
  }
  assert.equal((await fetch(`${base}/this-page-does-not-exist-check`)).status, 404);
  const unavailable = await fetch(`${base}/api/contact`, { method: 'POST', body: '{}' });
  assert.equal(unavailable.status, 503, 'Unconfigured API must never claim delivery');
  // Native HTTP preserves an explicit Host header for this virtual-host test.
  const redirected = await new Promise((resolve, reject) => {
    const request = require(new URL(base).protocol === 'https:' ? 'node:https' : 'node:http')
      .get(new URL('/packages?source=check', base), { headers: { host: 'www.seahorizonholidays.com' } }, response => {
        response.resume(); resolve(response);
      });
    request.on('error', reject);
    request.setTimeout(15000, () => request.destroy(new Error('Redirect test timed out')));
  });
  assert.equal(redirected.statusCode, 308);
  assert.equal(redirected.headers.location, 'https://seahorizonholidays.com/packages?source=check');
  for (const path of ['/robots.txt', '/favicon.jpg', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png']) {
    assert.equal((await fetch(`${base}${path}`)).status, 200, path);
  }
  console.log(`PASS: ${urls.length} sitemap pages, titles, descriptions, canonicals, headings, WhatsApp URLs, headers, 404, icons, API safety and www redirect.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
