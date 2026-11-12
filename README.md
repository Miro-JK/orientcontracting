# Orient Palace website

Static multi-page site for Orient Palace Contracting & Building Maintenance LLC. No build step.

## Layout

- `public/` – **everything that goes on the server** (upload the contents of this folder to `public_html`)
  - `index.html` – Home: full-screen photo hero with key facts, dark intro, "What we do" (three discipline cards), selected projects grid, advantages + sectors, four-step process, "Hands Together" authorities, certification seals. Design references: Emaar / Binghatti (type, dark sections) and Multiplex / ALEC / Turner / Khansaheb (structure: discipline cards, labelled project tiles, process, proof)
  - `about.html` – Introduction, mission & vision, values, CEO message, certifications
  - `services.html` – 11 services; click a card for full scope (deep link: `/services#masonry`)
  - `projects.html` – Completed projects with filters and lightbox
  - `contact.html` – Contact details, call/email quote card, map
  - `404.html` – Page-not-found page
  - `styles.css`, `script.js`, `assets/img/` – shared by all pages
  - `.htaccess` – clean URLs, HTTPS, security headers, caching (Apache / LiteSpeed, e.g. Hostinger)
  - `robots.txt`, `sitemap.xml`
- `tools/serve.py` – local preview server that behaves like the live `.htaccess`

## Clean URLs

Pages are linked as `./about`, `./services`, etc. Both GitHub Pages and the `.htaccess` on
Hostinger serve `about.html` for `/about`; Hostinger also redirects old `.html` links to the clean
URL. All links are relative, so the site works at a domain root (orientcontracting.com) and in a
subfolder (miro-jk.github.io/orientcontracting/). The one exception is `404.html`: it can be shown at
any address, so its links start at the site root (`/about`), and the GitHub Pages workflow adds
the `/orientcontracting` prefix to them when it deploys.

## Deploy: GitHub Pages

`.github/workflows/pages.yml` publishes the `public/` folder on every push to `main`.
One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
(GitHub Pages on a private repo needs a paid GitHub plan; on a free plan make the repo public.)

## Deploy: Hostinger (replacing the WordPress site)

The new site is plain HTML, CSS and JS: it needs no WordPress, PHP or database (there are no forms;
quote requests go by phone or email). It replaces WordPress completely.

1. **Back up WordPress first.** hPanel → Websites → Manage → **Files → Backups**: download a
   files backup and the database backup, and keep them offline. Do not restore them later:
   the WordPress site has spam pages injected into it (see Security below).
2. hPanel → **File Manager** → `public_html`: delete everything in it, including `wp-config.php`,
   `index.php`, the `wp-*` folders and hidden files such as the old `.htaccess` and `.user.ini`.
   Keep `.well-known` if it is there.
3. Upload the **contents** of `public/` (not the folder itself) into `public_html`, including the
   hidden `.htaccess`. Easiest: zip the contents of `public/`, upload the zip, then Extract and
   delete the zip.
4. hPanel → **Databases → Management**: delete the WordPress database and its user.
5. hPanel → **Security → SSL**: make sure SSL is active (the `.htaccess` forces HTTPS).
6. hPanel → **Performance → CDN → Purge all** so the CDN stops serving old WordPress pages.
7. Check:
   - `/about.html` changes to `/about`
   - old WordPress addresses forward to the new pages (`/about-us/` → `/about`,
     `/contact-us/` → `/contact`, `/electrical-serives/` → `/services`)
   - `/wp-admin/` shows the "page not found" page
   - a made-up address shows the "page not found" page
   - the contact page map loads

To update the site later, upload only the changed files and purge the CDN.

## Hostinger panel security checklist

Do these once, in hPanel:

- **Hostinger account:** a strong, unique password and two-factor login
  (top-right profile → Account → Security).
- **The old site was hacked.** Its page list links to an injected casino spam page. After
  removing WordPress:
  - change the passwords of the Hostinger account, FTP accounts and email accounts
  - run **Security → Malware Scanner** and fix anything it finds
  - under **Advanced → Cron Jobs**, delete any job you didn't create
  - under **Files → FTP Accounts**, delete accounts you don't use
  - under **Advanced → SSH Access**, delete unknown SSH keys and turn SSH off if you don't use it
- **Google Search Console** (search.google.com/search-console):
  - add the domain
  - check **Security & Manual actions**
  - submit `https://orientcontracting.com/sitemap.xml`
  - use **Removals** for any spam URLs still showing in Google; they now return 410 Gone
- **Email:** in **Domains → DNS / Nameservers**, make sure SPF, DKIM and DMARC records exist, so
  nobody can send mail pretending to be `@orientcontracting.com`. Hostinger email adds SPF and
  DKIM; add DMARC as `TXT _dmarc  v=DMARC1; p=quarantine; rua=mailto:info@orientcontracting.com`.
- **Domain:** turn on auto-renew, transfer lock and privacy protection.
- **Backups:** keep automatic backups on, and download one after every big change.
- **CDN:** keep Hostinger CDN on; it absorbs bot traffic and attacks before they reach the site.

## Preview locally

```
python3 tools/serve.py
```

Then open http://localhost:8080. Opening the HTML files directly from disk will not work, because
links point to `/about` rather than files.

## Security

`.htaccess` does the following:
- forces HTTPS
- allows only GET/HEAD requests
- blocks hidden and backup files and directory listings
- answers old WordPress paths, any `.php` file and the injected spam pages with 410 Gone
- forwards old WordPress page addresses to the new pages
- sends a strict Content Security Policy plus the usual security headers Keep scripts and styles in
`script.js` / `styles.css`: inline `<script>`, `style="..."` and `onclick="..."` are blocked by
the CSP. If you add a new outside service (analytics, another embed), add its domain to the
`Content-Security-Policy` line in `.htaccess`.
