# Cloudflare Pages migration

## Verified local settings

- Repository: ameermaqbool/Seahorizon-Holidays
- Production branch: main
- Framework: Next.js 13.5.1, `output: 'export'`
- Package manager: npm, package-lock.json; existing .npmrc enables legacy-peer-deps
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: repository root
- Build variable: `NODE_VERSION=22.23.1`
- Public site variable: `NEXT_PUBLIC_SITE_URL=https://seahorizonholidays.com`
- Public contact variable: `NEXT_PUBLIC_WHATSAPP_NUMBER=+918075301729`
- Use the Free plan and GitHub integration. Do not select a server-rendered Next.js adapter.

Node 22.23.1 dependency installation, production build, TypeScript checks and
postbuild sitemap generation passed locally. Next.js generated 39 static entries
and the export contains 34 HTML files, including 404.html. The postbuild now writes
sitemap/robots files directly into out. Lint remains skipped by the existing build
configuration. No dependency versions or page designs were changed.

The public contact form prepares a WhatsApp draft; the visitor must send it in
WhatsApp. Phone and floating WhatsApp links have been repaired. Next.js API
handlers in app/api do not provide a runtime backend in a static export. The
existing analytics demo is not a production analytics service.

Service-worker HTML requests now prefer fresh network responses, with offline
fallback, so old cached pages do not hide migration updates. Hashed Next.js assets
receive immutable caching; sw.js is revalidated. Focused checks passed for cache
cleanup, network refresh, offline fallback and WhatsApp draft URL encoding.

## Required dashboard work — NOT completed

1. Create a Cloudflare Pages project using GitHub and main with the settings above.
2. Verify the build logs show Node 22.23.1 and test the pages.dev deployment before DNS changes.
3. Export and compare ALL GoDaddy DNS records, including mail, TXT, DKIM, SPF,
   DMARC, SRV, CAA and service verification records. Public lookups are not a full inventory.
4. Check DNSSEC/DS at the registrar before a nameserver change. Preserve records
   in the Cloudflare Free zone before changing delegation.
5. Use only the actual nameservers assigned by Cloudflare. Verify authoritative activation.
6. Attach seahorizonholidays.com and www.seahorizonholidays.com to the same Pages
   project. Replace only conflicting Netlify web records when Pages is ready.
7. Configure a Cloudflare domain redirect for www to HTTPS apex with paths and
   query strings preserved. Do not rely on a Netlify-style host rule in _redirects.
8. Enable Always Use HTTPS. Verify certificate validity, hostname coverage and
   trusted chain externally for both hostnames.
9. Test all four HTTP/HTTPS apex/www variants, routing, assets, contact actions,
   mobile/desktop layouts, browser errors, and an actual GitHub-triggered deploy.
10. Keep Netlify until production and automatic deployment are verified.

## Current blockers and unresolved verification

Cloudflare dashboard access encountered a repeated human-verification challenge
in the cloud browser. No Pages project, GitHub-to-Cloudflare connection, DNS change
or certificate configuration was completed in this preparation step.

The export audit found existing footer links to /privacy and /terms without
corresponding pages. These need owner-approved policy content. No policy was
invented or unrelated page content removed. Live/browser mixed-content checks,
mobile/desktop testing and all custom-domain checks remain pending.

Local build success is not proof that migration or production HTTPS is complete.
