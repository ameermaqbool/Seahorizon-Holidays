# Sea Horizon Holidays deployment

This is a Next.js App Router application (TypeScript/React/Tailwind), not a Vite SPA.
The recovery branch upgrades Next.js from 13.5.1 to 16.3.5 and React to 19.3.0.

## Production settings

| Setting | Value |
| --- | --- |
| Repository | ameermaqbool/Seahorizon-Holidays |
| Production branch | main (confirm this in Netlify; GitHub default is main) |
| Node | 22.x, pinned by .nvmrc |
| Install | npm ci |
| Build | npm run build |
| Publish directory on Netlify | .next |
| Local preview | npm run start |
| Canonical domain | https://seahorizonholidays.com |
| Other domain | www.seahorizonholidays.com; permanent redirect to canonical |
| Enquiries | Customer reviews and sends the prepared message in WhatsApp |

Use Netlify's automatically maintained Next.js adapter. Do not publish `out` or
add an SPA `/* /index.html 200` rewrite. Next handles routing and genuine 404s.
Static pages and hashed assets can use the provider CDN; Next Image supports
responsive AVIF/WebP. Do not add blanket long-lived HTML or API caches.

No API secrets are needed to render the site or prepare WhatsApp messages. The
public business number is 918075301729. `.env.example` lists optional settings.
Set `GOOGLE_SITE_VERIFICATION` only to the actual Search Console token.
`NEXT_PUBLIC_DEPLOY_ENV=preview` prevents preview builds from being indexed;
Netlify deploy-preview and branch-deploy contexts set it automatically.
Do not set that value on production. Analytics helper IDs are public IDs, not
private keys; those helpers are not enabled automatically by this repair.
There is no working Zoho/email backend in the original code. The unused API
placeholders now return 503 rather than falsely claiming successful delivery or
logging arbitrary enquiry/error payloads. Do not expose real analytics on the
admin route until authentication and a real data source are implemented.

## GitHub workflow

The Production checks workflow runs install, lint, build, typecheck, dependency
audit and HTTP integration checks on pull requests and pushes to main. In Netlify,
connect this repository, select main as production, and enable Deploy Previews.
Make the build check required in branch protection after its first successful run.
These provider/account settings cannot be activated by a repository file alone.

1. Run the repair branch through CI and a Netlify Deploy Preview.
2. Verify desktop/mobile navigation, image optimization and the WhatsApp form.
3. Confirm production domain/SSL settings, then merge the tested repair.
4. Netlify's GitHub integration should deploy each approved main push.
5. Retain the previous published deploy for rollback; record its deploy ID first.

`npm run deploy` validates and builds locally; it does not publish to a provider.
`npm run post-deploy` checks the deployed URL (`SITE_URL` override supported).
`npm run smoke` checks a running local production build on port 3000.

## Hosting decision

Retain Netlify as the initial recovery target. It supports modern Next.js routing,
server handlers, static rendering, previews, CDN caching and image optimization.
An unresolved custom-domain TLS failure does not justify migration by itself.

| Platform | Fit for this repository | Decision |
| --- | --- | --- |
| Netlify | Existing deployment; modern Next.js adapter; no host migration needed | Repair first; account health, quota and certificate status still need inspection |
| Vercel | Native Next.js integration and previews; straightforward alternative | Best migration candidate if Netlify cannot be repaired; commercial use requires a suitable paid plan, not Hobby |
| Cloudflare Workers / Pages | Pages suits a real static export; full Next.js uses a Workers deployment path | Good option if deliberately simplifying to a static site; extra adaptation/testing for the current runtime architecture |

All three can serve a global audience. Actual India/international latency and
Core Web Vitals must be measured after deployment. No regional performance or
availability guarantee has been inferred from CDN branding. Traffic and current
plan usage are unknown, so free-tier sufficiency is not established.

Provider sources checked 2026-09-21:
- https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/
- https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/
- https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/
- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/

## Domain investigation: observations, not a completed repair

Public Google DNS responses on 2026-09-21 returned:
- Apex A: 75.2.60.5 and 99.83.190.102, TTL 600.
- www CNAME: seahorizonholidays.com, TTL 3600 (remaining cache TTL varies).
- Nameservers: ns51.domaincontrol.com and ns52.domaincontrol.com.
- No apex IPv6/AAAA address, restrictive CAA record or DS delegation observed.
- Both HTTPS names failed through the diagnostic proxy with an upstream
  `tlsv1 alert internal error`; the proxy returned HTTP 502.

This establishes a failed TLS handshake from that vantage point. It does NOT
establish certificate expiry, certificate names, account suspension, alias
ownership or the exact underlying Netlify fault. Certificate issuance and domain
assignment must be inspected in the authenticated Netlify dashboard. The local
shell's direct DNS failure also occurred for unrelated domains and is an
execution-environment limitation, not evidence that the site's DNS is absent.

### DNS proposal for review only — nothing applied

| Type | Host | OLD record | NEW record | Keep/delete decision |
| --- | --- | --- | --- | --- |
| A | @ | 75.2.60.5 | 75.2.60.5 | Keep if Netlify confirms standard Edge; this is its documented fallback apex address |
| A | @ | 99.83.190.102 | None proposed for standard Netlify Edge | Candidate for deletion ONLY after checking project-specific domain instructions |
| CNAME | www | seahorizonholidays.com | Pending exact assigned Netlify hostname | Keep until the dashboard supplies the exact verified project target |
| NS | @ | ns51.domaincontrol.com, ns52.domaincontrol.com | Same | Keep; no nameserver migration required for an external-DNS repair |
| AAAA / CAA / DS | @ | None observed | No changes proposed | Do not add/delete records without a specific diagnosed reason |

GitHub reports two connected Netlify projects: `seahorizonholidays` and
`seahorizonholidays1`. Both provider subdomains return HTTPS 200. Both automatically
built PR #1 previews successfully. The project owning the custom domain is still
unconfirmed; do not choose either hostname as a DNS target without inspecting
its domain aliases. High-Performance Edge has account-specific values.
Do not modify MX/TXT or other mail records. Export the complete zone before any
approved change; retain that export and the previous deploy as rollback points.

After account access: verify both custom aliases belong to the intended project,
compare the exact DNS instructions, choose the apex as primary, verify DNS,
provision/retry the Netlify-managed certificate, and confirm automatic renewal.
Verify HTTP-to-HTTPS and www-to-apex redirects without loops. Do not enable HSTS
preload or includeSubDomains until every relevant hostname is known to support TLS.

## Remaining release checks

- Authenticated Netlify project, Git integration, quota, deploy logs and domain aliases.
- Exact certificate SANs, dates, chain, provisioning error and renewal status.
- Registrar zone approval before applying any DNS change.
- Desktop/mobile browser UX, console and lead handoff on a real preview.
- Pexels image delivery: all 43 public asset HEAD requests were refused with 403
  from this test environment. This is not proof those assets fail for visitors;
  verify provider Image CDN access in the preview before release.
- Full Lighthouse diagnostics, Core Web Vitals and independent India + international checks.
- Google Search Console verification and sitemap submission by the property owner.
- Owner-approved privacy/booking terms; broken policy links were replaced with
  a contact enquiry link rather than publishing invented policies.
- Verify any old sample admin password was never reused; rotate it wherever reused.
  The example is removed from the current template, but historical commits remain.

## Verification performed on the repair branch

- Node 22.23.2 production build with Next.js 16.3.5: passed (38 generated pages).
- ESLint: 0 errors and 0 warnings. TypeScript check: passed.
- Dependency audit after updates: 0 known vulnerabilities at the time checked.
- Local production HTTP integration: 31 sitemap pages returned 200, each with
  title, description, matching canonical, one H1 and no HTTP image sources.
- Verified security headers, 404 response, icon routes, 503 from the unconfigured
  contact API, and 308 www-to-apex redirect preserving path/query.
- All 34 internal link paths found in generated HTML mapped to existing routes
  or the sitemap. WhatsApp URLs have the expected number and no undefined values.
- Pattern scan of 22 Git commits found a sample credential in the environment
  example; no matching private-key, GitHub-token or AWS-access-ID patterns found.
  This is a limited pattern scan, not proof that every historical secret is absent.
- Compressed total homepage script payload: approximately 248 KB versus 242 KB
  before the framework/security upgrade (same file-summing method, gzip bytes).
  Images now have responsive sources and CDN optimization, but no measured
  Core Web Vitals improvement is claimed. Browser rendering and image delivery
  remain mandatory release checks for every major route and mobile layout.

## Hosted preview verification (2026-09-21)

- Draft PR: https://github.com/ameermaqbool/Seahorizon-Holidays/pull/1
- Initial repair commit `ee68c153dcc0f555b27a197c06f6543acc465297` passed GitHub
  Production checks and both Netlify Deploy Preview builds.
- Hosted HTTP checks: all 31 sitemap pages returned 200 with preview noindex
  and nosniff headers; robots and favicon returned 200, and an unknown page 404.
- Preview: https://deploy-preview-1--seahorizonholidays.netlify.app/
- Second connected project: https://deploy-preview-1--seahorizonholidays1.netlify.app/
- Both preview homepages and both existing production *.netlify.app homepages
  returned HTTPS 200. Custom-domain TLS remains a separate unresolved issue.
- Browser navigation home → contact → packages → package detail worked. Blank
  enquiry submission was stopped by required-field validation; no enquiry was sent.
- Hero and all seven package-list images loaded through Netlify image optimization.
  The earlier shell-only Pexels 403 response did not reproduce in this browser.
- Observed console errors originated from the browser extension, not the website.
- Netlify's initial one-page Lighthouse comments reported performance 70/75,
  accessibility 90, best practices 92 and SEO 100. These are lab scores, not
  real-user Core Web Vitals or proof of India-wide availability.
- Visual inspection found the hero's white-on-white WhatsApp button, header color
  classes lost through a class-merging conflict, and duplicate title branding.
  A follow-up fix restores contrast and concise titles, names the mobile menu
  control, and removes a redundant external font stylesheet.
- Netlify Google sign-in returned 502 / Connection refused in this cloud browser;
  authentication did not complete. No DNS, domain alias, certificate, production
  branch setting, or existing deployment was changed.
- Existing promotional offers, dated blog content, testimonials and review counts
  were preserved and require owner verification for current accuracy.
