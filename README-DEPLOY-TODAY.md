# CKEFA Software Solutions — production release package

## Changes implemented (20 November 2026)

- Responsive homepage redesign retaining the original CKEFA logo/colour identity.
- Company brand icon, favicons, Apple touch icon and LinkedIn/Open Graph share image.
- Main navigation, mobile menu, accessibility skip-link, focus states and reduced-motion support.
- Explicit Cybersecurity and AI Readiness positioning and six service descriptions.
- Product and project portfolio: TournamentHQ, FCFS.app, De Franco Foundation, CKEFA Studio1, AssureLink Compliance and CKEFA Media.
- BHMFF 2026 TournamentHQ case-study spotlight.
- Retained professional experience logos with clarification that they do not imply CKEFA client relationships or endorsements.
- Contact form changed from Formspree to Netlify Forms with a static HTML form blueprint, anti-spam honeypot, validation, success/error UI and mailto fallback.
- Cloudflare Web Analytics conditional beacon (requires site token).
- Privacy notice, sitemap, robots.txt, SEO descriptions, social metadata and basic Netlify response headers.

## Local verification

```powershell
npm ci
npm run build
npm run lint
npm run dev
```

Inspect desktop and mobile before deployment. Test that all portfolio links are valid and approved for public use. Check the original consultant experience logos are permitted for use; remove those without permission.

## Deploy on existing Netlify site

1. Extract this ZIP to a separate folder. Run `APPLY-CKEFA-TO-REPO.ps1 -RepoPath 'C:\\path\\to\\your\\existing-repository'` from that folder; the script backs up original files and copies the new homepage, metadata and public assets. Alternatively, copy the files manually. Do not create a new Netlify site or change DNS.
2. Inspect `git diff` and commit the modified files to the EXISTING GitHub repository connected to Netlify.
3. In Netlify, confirm Base directory is the repository root, Build command `npm run build`, Publish directory `dist`.
4. For first release, deploy to a Netlify Deploy Preview/branch deployment, review and then promote to production.
5. In Netlify, ensure **Forms > Form detection** is enabled for this site and redeploy. Verify that `ckefa-enquiry` appears in **Forms**.
6. Submit a REAL test enquiry through the DEPLOYED form. Check **Forms > ckefa-enquiry > Submissions**.
7. In **Forms > Form notifications** configure email notification to `info@ckefa.co.uk`. This notification requires Netlify account access and cannot be configured by source code alone.
8. Confirm the mailbox receives the notification; test with a second distinct enquiry; check spam if needed.
9. For analytics, register `ckefa.co.uk` at Cloudflare **Web Analytics** and copy the website's public beacon token into Netlify env variable `VITE_CF_WEB_ANALYTICS_TOKEN`, then redeploy. No dashboard data or visitor count exists until this is configured.
10. Verify site from phone/desktop, favicon, links, `/privacy.html`, contact success and LinkedIn preview (may cache previous data).
11. Keep the existing Netlify deploy available for immediate rollback.

## Read this before publishing

- The contact form has NOT been proven live until Netlify detects and processes the deployed form and you enable notifications. Local preview explicitly does not submit.
- Analytics is READY TO CONNECT, not yet counting, until the Cloudflare beacon token has been configured. Cloudflare's private dashboard is the visitor counter; no artificial public visit count is displayed.
- CKEFA Studio1 and AssureLink Compliance are marked as in development, not completed products. Ensure public listing of AssureLink is authorised by the project owner.
- The work-experience logos from the supplied source code have been retained with an explicit disclaimer; check permission before production use.
- A locked-down authenticated bespoke CKEFA admin CRM portal has NOT been developed. Netlify Forms dashboard supplies the interim enquiries portal.
- Personal or secret environment configuration should never be committed to Git.

## Rollback

Use Netlify's **Deploys** page to publish the immediately preceding successful production deploy if any critical check fails. Preserve a backup of the previous Git commit and never replace existing production DNS settings during this upgrade.

See `RELEASE-STATUS.md` for exactly which tests were completed and what still blocks production release.
