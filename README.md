# Nagy & Sons Builders — Website

A high-fidelity, fully-interactive prototype for **Nagy & Sons Builders**, a Florida Certified General Contractor (CGC1513757) based in Hollywood, FL, specializing in condo, kitchen, and bathroom renovations across South Florida.

This is delivered as a single-file HTML/React prototype (no build step). It's production-ready for review and presentation, and ready to be ported to Next.js + Tailwind by a developer when you're ready to ship.

---

## Running locally

No build step. Just serve the folder as static files:

```bash
# any static server works
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

Opening `index.html` directly via `file://` works too, but Babel is loaded from a CDN, so you do need an internet connection on first run.

---

## Pages

The prototype includes all 6 pages with internal hash-based routing:

| Route | Page |
|---|---|
| `#home` | Home (hero, services, why CGC, process, project types, testimonials, service area, estimate form) |
| `#condo` | Condo Renovations |
| `#kitchen` | Kitchen Remodeling |
| `#bathroom` | Bathroom Remodeling |
| `#about` | About |
| `#contact` | Contact (form + FAQ) |

---

## Tweaks panel

Toggle the **Tweaks** button in the toolbar to open the panel. It controls:

- **Palette** — `default` / `warm` / `forest` / `modern`
- **Type pairing** — `serif` (Cormorant Garamond + DM Sans) / `sans` (Outfit + DM Sans) / `modern` (DM Serif Display + Outfit)
- **Hero variant (home page)** — `dark` / `split` / `image`
- **Sticky estimate bar** — on/off

---

## File structure

```
index.html        ← entry, font loading, schema markup
styles.css        ← full design system (tokens, components, responsive)
app.jsx           ← router + tweaks panel
components.jsx    ← Header, Footer, CTAButton, ServiceCard, ProcessStep,
                    LeadForm, SectionHeading, ImagePlaceholder, FAQItem,
                    ServiceAreaGrid, StickyEstimateBar, PageHero, ContentCTA,
                    TrustBadge
home.jsx          ← Home page composition
pages.jsx         ← Condo / Kitchen / Bathroom / About / Contact
tweaks-panel.jsx  ← Tweaks shell (TweaksPanel, useTweaks, controls)
```

---

## Where to update business info

| Thing | File | Note |
|---|---|---|
| **Phone number** | `components.jsx`, `pages.jsx`, `home.jsx`, `index.html` | Search project for `(XXX) XXX-XXXX` and `tel:+1XXXXXXXXXX`. Replace both. |
| **Email** | Already wired to `info@nagysonsbuilders.com` — search for it if you change it. |
| **License number** | Search for `CGC1513757` — appears in header subtitle, footer, hero trust row, license pills, banners, and schema markup. |
| **Service areas** | `components.jsx` → `ServiceAreaGrid` component (`areas` array). Also referenced in footer (`Footer` component) and contact page. |
| **Schema.org JSON-LD** | `index.html` `<script type="application/ld+json">` blocks. Update phone, URL, areas served, and image once you have a domain + hero image. |
| **Page metadata** | `index.html` `<title>`, `<meta name="description">`, OG tags. Per-page meta would be added per route during the Next.js port. |

---

## Where to update form handling

`components.jsx` → `LeadForm` component. The current `handleSubmit` validates client-side and shows a success state in-app — it does not POST anywhere yet.

To wire it up, replace the body of `handleSubmit` with a `fetch()` to your backend / form service (Formspree, Resend, Make, HubSpot, etc.). The fields collected are:

```
name, phone, email, address, projectType, budget, timeline, message
```

Keep the success-state UI as-is; just gate `setSubmitted(true)` on a successful API response.

---

## Where to replace placeholder photos

Every visual is an `<ImagePlaceholder>` — a striped SVG with a monospace caption like `↳ luxury kitchen — replace`. Find them with project search for `ImagePlaceholder` or for the placeholder labels.

When you have real photos:

1. Drop them into an `images/` folder.
2. Replace `<ImagePlaceholder label="..." tone="..." ratio="..." />` with `<img src="images/your-photo.jpg" alt="..." />` (or build a small `<Image>` wrapper that preserves the rounded corners / aspect ratio).

Recommended shots:
- Hero — one luxury kitchen or condo interior, vertical 4:5
- 3 service cards — kitchen, bathroom, condo interior
- 8 project-type grid tiles — before/after or finished shots
- Founder portrait (About)
- 3 in-progress / on-site shots (condo, kitchen, bathroom service pages)

---

## Where to add testimonials

`home.jsx` → "TESTIMONIAL PLACEHOLDERS" section. Three placeholder cards are clearly marked with a `placeholder — replace before launch` badge. Replace the `c` (context), `n` (name), and the body copy. **Do not** invent testimonials — only use real client feedback.

---

## SEO

Already wired:
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- `<title>` + `<meta name="description">` (site-level)
- Open Graph tags
- `GeneralContractor` JSON-LD (LocalBusiness extension) with services, area served, and license credential
- `FAQPage` JSON-LD covering the contact page FAQ
- Service-area mentions throughout copy targeting local SEO keywords

To add per-page metadata, port to Next.js and use `generateMetadata()` per route.

---

## Recommended next steps before launch

1. **Replace placeholders** — phone, email, photos, testimonials.
2. **Wire the form** to a real submission endpoint.
3. **Add Google Business Profile** + ensure NAP (name, address, phone) matches across site, Google, and DBPR records.
4. **Port to Next.js** with one route per page so each gets a real URL, per-page `<title>` and meta, and server-rendered HTML for SEO.
5. **Add an analytics + lead-tracking stack** (GA4 + a call-tracking number, optionally HubSpot or similar).
6. **Get a few real photos** of recent projects — even 6–8 will outperform any stock.
7. **Verify** all license claims and area served match your DBPR record.

---

## What this prototype is **not**

- It's not a Next.js project. A dev can convert in a day — the components, design system, and copy are all here.
- It doesn't make any unsupported claims (no "best", no "guaranteed", no fake reviews). Testimonials are clearly labeled as placeholders.
- Photos are placeholders, by design.
