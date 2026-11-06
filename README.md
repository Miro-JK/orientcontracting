# Orient Palace website

Static multi-page site for Orient Palace Contracting & Building Maintenance LLC. No build step.

## Layout

- `public/` – **everything that goes on the server** (upload the contents of this folder to `public_html`)
  - `index.html` – Home: introduction, 3D project carousel, advantages + skill bars, project/partner counters, "Hands Together" authorities, "Our Proud" ISO seals
  - `about.html` – Introduction, mission & vision, values, CEO message, certifications
  - `services.html` – 11 services; click a card for full scope (deep link: `/services#masonry`)
  - `projects.html` – Completed projects with filters and lightbox
  - `contact.html` – Contact details, quote form (opens the visitor's email app), map
  - `404.html` – Page-not-found page
  - `styles.css`, `script.js`, `assets/img/` – shared by all pages
  - `.htaccess` – clean URLs, HTTPS, security headers, caching (Apache / LiteSpeed, e.g. Hostinger)
  - `robots.txt`, `sitemap.xml`
- `tools/serve.py` – local preview server that behaves like the live `.htaccess`

## Clean URLs

Pages are linked as `./about`, `./services`, etc. Both GitHub Pages and the `.htaccess` on
Hostinger serve `about.html` for `/about`; Hostinger also redirects old `.html` links to the clean
URL. All links are relative, so the site works at a domain root (orientcontracting.com) and in a
subfolder (miro-jk.github.io/orientcontracting/).

## Deploy: GitHub Pages

`.github/workflows/pages.yml` publishes the `public/` folder on every push to `main`.
One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
(GitHub Pages on a private repo needs a paid GitHub plan; on a free plan make the repo public.)

## Deploy: Hostinger

1. Back up the current site (hPanel → Websites → Manage → Files → Backups), because this replaces the WordPress site.
2. hPanel → **File Manager** → open `public_html`. Delete or move the old WordPress files.
3. Upload the **contents** of `public/` (not the folder itself) into `public_html`, including the
   hidden `.htaccess` file. Easiest: zip the contents of `public/`, upload the zip, then Extract.
4. hPanel → **Security → SSL**: make sure SSL is active (the `.htaccess` forces HTTPS).
5. Clear the cache: hPanel → **Performance → CDN → Purge all** (and LiteSpeed cache if enabled).
6. Check: `https://orientcontracting.com/about.html` should change to `/about`; a made-up page
   should show the 404 page; the contact page map should load.

## Preview locally

```
python3 tools/serve.py
```

Then open http://localhost:8080. Opening the HTML files directly from disk will not work, because
links point to `/about` rather than files.

## Security

`.htaccess` forces HTTPS, blocks hidden/backup files and directory listings, and sends a strict
Content Security Policy plus the usual security headers. Keep scripts and styles in
`script.js` / `styles.css`: inline `<script>`, `style="..."` and `onclick="..."` are blocked by
the CSP. If you add a new outside service (analytics, another embed), add its domain to the
`Content-Security-Policy` line in `.htaccess`.
