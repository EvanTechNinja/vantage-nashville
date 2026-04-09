# VANTAGE COWORKING SITE — BUILD SPEC

## Project Overview

Build a static marketing site for **Vantage**, a premier coworking space in Nashville, TN (Music City office). The site is a lead capture and tour booking tool. Mary-Kate manages sales and tours. The primary goal of every page is to get visitors to **schedule a tour**.

**Tagline:** "Built for those building more."

**Address:** 4101 Charlotte Ave Suite D160, Nashville, TN 37209
**Phone:** 615-425-3600
**Email:** sarastephens@kw.com

---

## Tech Stack

- **Static HTML + Tailwind CSS** (no framework, no build tools beyond Tailwind)
- **Hosting:** Vercel (static deployment)
- **Scheduling:** Cal.com embed (account already exists)
- **Analytics:** Google Analytics GA4 (placeholder script tag only, measurement ID added later)
- **No database, no auth, no server-side logic**

---

## Brand Direction (from official brochure)

**Color palette (extracted from brochure):**
- Primary: Deep navy (#1B2A4A or similar dark navy from brochure headers)
- Accent: Warm bronze/gold (#B8926A or similar from the logo icon and member pricing text)
- Background: White (#FFFFFF)
- Background alternate: Light warm gray (#F5F5F0 or similar)
- Text: Near-black (#1A1A1A)
- Text muted: Medium gray (#6B7280)
- CTA: The bronze/gold accent works as CTA color against navy, OR use a contrasting warm tone

**Typography feel:** The brochure uses a refined serif for large display headings ("WELCOME TO VANTAGE", "VANTAGE MEMBERSHIPS") and clean sans-serif for body copy. Recommend:
- Headings: `'Playfair Display'` or `'Cormorant Garamond'` (serif, elegant)
- Body: `'Inter'` or `'DM Sans'` (clean sans-serif)
- Import via Google Fonts

**Logo:** The Vantage logo is text-based: "VANT GE" with a stylized building/window icon replacing the "A". Until we have the SVG/PNG logo file, render "VANTAGE" in the heading serif font with appropriate letter-spacing. The logo file will be swapped in when Edward provides it.

**Overall vibe:** Clean, elevated, professional. NOT startup-y or techy. Think refined Nashville, not Silicon Valley. White space, navy accents, warm tones. The brochure has zero clutter and that should carry through to the site.

---

## Site Architecture

The brochure reveals more offerings than discussed in the meeting. The site needs to accommodate **three membership tiers** plus **six meeting/event spaces** plus a **day pass option**.

```
/
├── index.html              # Homepage — who we are, membership overview, CTA
├── memberships.html        # All three membership tiers with pricing + details
├── meeting-spaces.html     # All meeting/event spaces with pricing + amenities
├── css/
│   └── styles.css          # Tailwind + custom properties
├── js/
│   └── main.js             # Mobile nav toggle, Cal.com embed, smooth scroll
├── img/                    # Real photos go here when available
│   └── placeholder/        # Placeholder assets
├── tailwind.config.js
├── input.css               # Tailwind directives + CSS custom properties
├── package.json
├── vercel.json
└── README.md               # Deploy instructions + asset swap guide
```

**Why 3 pages instead of 5+:** During the meeting, Sarah and Mary-Kate both emphasized simplicity. The three membership tiers are closely related and best shown side-by-side for comparison (like the brochure does). Splitting them across separate pages creates unnecessary clicks. Same logic for meeting spaces. This gives us:

1. **Homepage** — First impression, who we are, quick overview of offerings, CTA
2. **Memberships** — All three tiers compared side by side with full details
3. **Meeting Spaces** — All six spaces with pricing tables

Every page links to the others and every page has the tour CTA.

---

## Page-by-Page Spec

### All Pages — Shared Elements

**Header/Nav:**
- Logo: "VANTAGE" text treatment (swap with logo file later). Left-aligned.
- Nav links: Home | Memberships | Meeting Spaces
- Persistent CTA button in nav (right-aligned, high contrast): "Schedule a Tour"
- Mobile: hamburger menu, CTA button remains visible outside hamburger
- Nav should be sticky/fixed on scroll with a subtle background blur/opacity

**Footer:**
- Left column: Vantage logo + tagline "Built for those building more."
- Center column: Address (4101 Charlotte Ave Suite D160, Nashville, TN 37209), Phone (615-425-3600), Email (sarastephens@kw.com)
- Right column: Nav links repeated
- Bottom bar: Copyright 2025 Vantage. All rights reserved.
- Keep it clean. No social links yet (add later if needed).

**CTA Pattern (EVERY page, minimum twice):**
- Primary CTA: "Schedule a Tour" button triggering Cal.com popup
- Appears in: hero/top section AND bottom of page (full-width banner before footer)
- Bottom banner copy: "Schedule a Tour Today and Experience Why Our Offices Are the Premier Choice for Your Business in Nashville"
- Style: Navy background with gold/bronze button, or inverted. Must be impossible to miss.

---

### Page 1: Homepage (`index.html`)

**Hero Section:**
- Full-width hero image area (placeholder for now: navy gradient with subtle pattern)
- Headline: "Welcome to Vantage"
- Subheadline: "Discover Nashville's Premier Workspace"
- Body text (from brochure): "Vantage, where elevated workspace meets intention and opportunity. Designed for professionals, we offer an exceptional environment for freelancers, entrepreneurs, and small businesses seeking a refined office experience in Nashville."
- Primary CTA: "Schedule a Tour"

**Who We Are Section:**
- Section heading: "Who We Are"
- Lead text: "Vantage. Built for those building more."
- Body (from brochure): "Designed as a premier workspace community, Vantage is rooted in the belief that exceptional service and an elevated environment go hand in hand. Whether you are hosting events in our state of the art learning facility, leading boardroom meetings, utilizing flexible workspaces, or working on site in a professional office setting where you can confidently welcome your clients, Vantage offers a seamless solution tailored to your success."

**Three Value Props (icon + short text blocks):**

1. **Prime Location**
   "Located in the heart of Nashville, our office space is just minutes away from major business hubs, trendy eateries, and entertainment spots, giving you the perfect blend of work and play."

2. **Membership Services to Fit Your Needs**
   "Whether you are seeking a virtual office with mail and package concierge, an executive office with 24 hour access, or a flexible monthly office solution, we offer a collection of membership experiences designed to align seamlessly with your business needs."

3. **Competitively Priced Event Spaces**
   "From private conferences to our state of the art training room, Vantage offers a collection of thoughtfully designed venues tailored to your needs. Each space is complemented by a variety of premium amenities, creating a seamless and elevated experience for both you and your attendees."

**Membership Overview Section:**
- Section heading: "Membership Options"
- Three cards preview (condensed version of memberships page):
  - Virtual Office — from $49/mo — "Learn More" link to memberships.html
  - Executive Workspace — $299/mo — "Learn More" link to memberships.html
  - Private Offices — from $500/mo — "Learn More" link to memberships.html
- Each card: name, price, 2-3 key features, link
- Below cards: "View All Membership Details" button linking to memberships.html

**Exclusive Enhancements Callout (optional, lightweight):**
- Small section or banner: "All members receive complimentary access to Wealth Building Masterminds, community networking events, and our Leverage to Scale Series."
- This differentiates from competitors.

**Photo Gallery Strip (placeholder):**
- 3 photos in a row (matching the brochure layout)
- Placeholder divs labeled: "Photo: workspace interior", "Photo: Nashville art/mural", "Photo: open office area"

**Bottom CTA Banner:**
- Full-width navy background
- "Schedule a Tour Today and Experience Why Our Offices Are the Premier Choice for Your Business in Nashville"
- CTA button: "Book Your Tour"

---

### Page 2: Memberships (`memberships.html`)

**Hero:**
- Headline: "Vantage Memberships"
- Subheadline: "Membership services to fit your needs"
- Placeholder hero image area (workspace photo)

**Three-Tier Comparison (side by side on desktop, stacked on mobile):**

Each tier is a card with:
- Tier name
- Price
- "INCLUDES" list
- CTA button: "Schedule a Tour"

#### Tier 1: Virtual Office
- **Price:** Starting at $49/mo
- **Includes:**
  - Use of professional mailing address
  - 1 free drop-in coworking day each month with high-speed complimentary wifi and local coffee, premium tea, and filtered water
  - Special member rates on training center and meeting space
  - Digital document scanning
  - Mail and package concierge

#### Tier 2: Executive Workspace
- **Price:** $299/mo
- **Includes:**
  - 24/7 building access
  - Open co-working spaces
  - Complimentary parking
  - High-speed complimentary wifi
  - Local coffee, premium tea, and filtered water
  - Special member rates on training center and meeting space
  - Access to monthly business classes and masterminds
  - Digital document scanning
  - Mail and package concierge

#### Tier 3: Private Offices
- **Price:** Starting at $500/mo
- **Includes:**
  - Lockable private office
  - Front desk receptionist
  - 24/7 building access
  - Complimentary parking
  - High-speed complimentary wifi
  - Local coffee, premium tea, and filtered water
  - Special member rates on training center and meeting space
  - Access to monthly business classes and masterminds
  - Digital document scanning
  - Mail and package concierge

**Visual treatment:** The middle card (Executive Workspace) should be slightly elevated or highlighted as the "popular" option. The brochure positions it as the middle tier and it has the most balanced feature set. Consider a subtle "Most Popular" badge or a slightly different border/shadow treatment.

**Exclusive Complimentary Enhancements Section (below the tiers):**
- Section heading: "Exclusive Complimentary Enhancements"
- All members get:
  - In-person Wealth Building Masterminds
  - One quarterly business mastermind offering a high level networking experience
  - Complimentary community networking opportunities designed to foster meaningful connections
  - Leverage to Scale Series held monthly, with a quarterly focus on career visioning and strategic growth

**Bottom CTA Banner**

---

### Page 3: Meeting Spaces (`meeting-spaces.html`)

**Hero:**
- Headline: "Vantage Meeting Spaces"
- Subheadline: "Thoughtfully designed venues for every need"
- Placeholder hero image (boardroom or training room photo)

**Pricing note at top:** "Rates shown as Non-Member | Member"

**Space Cards (each space gets a card with photo placeholder, details, pricing):**

#### Learning Center
- Capacity: 70 (up to 115 theater style, chairs included for 70)
- Rate: $350/hr | $280/hr (member)
- Amenities: 6x 65" presentation TVs, 3 handheld microphones, clicker, 4K webcam for recording/zoom/streaming, sound system with full room audio and ceiling microphones, whiteboards upon request, large presentation notepads for purchase, outside food and beverage permitted, complimentary parking, high-speed complimentary wifi, local coffee/premium tea/filtered water

#### Board Room
- Capacity: 20 (U-shape seating)
- Rate: $100/hr | $75/hr (member)
- Amenities: 6x 65" presentation TVs, 3 handheld microphones, clicker, 4K webcam for recording/zoom/streaming, sound system with full room audio and ceiling microphones, whiteboards upon request, large presentation notepads for purchase, outside food and beverage permitted, high-speed complimentary wifi, local coffee/premium tea/filtered water, complimentary parking

#### Conference Rooms
- Three available: The Ryman, The Bluebird Cafe, The Grand Ole Opry
- Capacity: 6 each (conference setup)
- Rate: $85/hr | $55/hr (member)
- Amenities: 1x 65" presentation TV, 4K conferencing webcam, whiteboards upon request, large presentation notepads for purchase, outside food and beverage permitted, high-speed complimentary wifi, local coffee/premium tea/filtered water, complimentary parking

#### The Studio
- Capacity: 5
- Rate: $100/hr | $75/hr (member)
- Amenities: Fully decorated studio space, USB-C audio interface, 2 Rode condensers VLR, Rode USB microphone and USBC adapter, 4K webcam, 2 programmable lights, ready for multi-cam setup, high-speed complimentary wifi, local coffee/premium tea/filtered water, complimentary parking

#### The Cafe
- Capacity: 40 (standing room)
- Rate: $150/hr | $75/hr (member)
- Amenities: Modern kitchen space with refrigerator/sink/microwave/food prep space, flex space with chairs/table/65" TV, high-speed complimentary wifi, local coffee/premium tea/filtered water, complimentary parking

#### Drop Zone (Day Pass)
- Rate: $75/day | $25/day (member)
- Available: Monday through Friday 8am-5pm
- Amenities: Reserved workspace, flexible co-working spaces, high-speed complimentary wifi, local coffee/premium tea/filtered water, complimentary parking

**Layout options for this page:**
- Option A: Grid of cards (2 columns desktop, 1 mobile) with expandable amenity lists
- Option B: Full-width stacked sections with alternating background colors
- **Recommend Option A** with amenities collapsed by default behind a "View Amenities" toggle to keep the page scannable. Many amenities repeat across spaces, so showing them all at once is overwhelming.

**Bottom CTA Banner**

---

## Cal.com Integration

**Implementation approach:**
- Use Cal.com's embed snippet in popup mode
- User clicks "Schedule a Tour" button anywhere on the site, Cal.com overlay appears
- Cal.com handles all scheduling logic, calendar sync, and confirmation emails

**Form fields (configure in Cal.com, not on the site):**
- Required: First Name, Last Name, Email, Phone
- Optional: "What are you interested in?" (dropdown: Virtual Office / Executive Workspace / Private Office / Meeting Space Rental / Day Pass / Not Sure)
- Optional: "Tell us a bit about what you're looking for" (text area)

**Embed code placeholder:**
```html
<!-- Cal.com Embed — replace CALCOM_LINK with actual booking link -->
<button
  data-cal-link="CALCOM_LINK"
  data-cal-config='{"layout":"popup"}'
  class="cta-button"
>
  Schedule a Tour
</button>
<script>
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments;
      if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true; }
      if (ar[0] === L) { const api = function () { p(api, arguments); };
        const namespace = ar[1]; api.q = api.q || [];
        if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init");
</script>
```

---

## Google Analytics

**Placeholder only.** Drop this in the `<head>` of every page, commented out:

```html
<!-- Google Analytics GA4 — uncomment and replace GA_MEASUREMENT_ID when ready
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
-->
```

---

## Design Tokens

```css
:root {
  /* VANTAGE BRAND — extracted from official brochure */
  
  /* Primary navy — used in brochure headers, nav bars, hero overlays */
  --color-primary: #1B2A4A;
  --color-primary-light: #2A3F6B;
  --color-primary-dark: #111C33;

  /* Bronze/gold accent — used in brochure logo icon, member pricing, decorative elements */
  --color-accent: #B8926A;
  --color-accent-light: #D4B08C;
  --color-accent-dark: #96754F;

  /* CTA — bronze/gold works as CTA against navy backgrounds */
  --color-cta: #B8926A;
  --color-cta-hover: #96754F;
  --color-cta-text: #FFFFFF;

  /* Neutrals */
  --color-bg: #FFFFFF;
  --color-bg-alt: #F7F6F3;         /* Warm off-white, not cold gray */
  --color-bg-dark: #1B2A4A;        /* Navy sections */
  --color-text: #1A1A1A;
  --color-text-muted: #6B7280;
  --color-text-on-dark: #FFFFFF;
  --color-border: #E5E2DC;         /* Warm border tone */

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Spacing */
  --section-padding-y: 5rem;
  --section-padding-x: 1.5rem;
  --card-radius: 0.5rem;
  --card-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04);
}
```

**Tailwind config extends with these tokens.** When the actual brand guide arrives from Edward, update this ONE block and the Tailwind config. Everything cascades.

---

## Responsive Behavior

- **Desktop (1024px+):** Three membership cards side by side, meeting space cards in 2-col grid, full nav visible
- **Tablet (768-1023px):** Membership cards may go 2+1 or stack, meeting spaces single column, nav collapses to hamburger
- **Mobile (< 768px):** Single column everything, hamburger nav (CTA button stays visible), full-width CTA buttons, touch-friendly tap targets (min 44px height)

---

## Image Handling

Photos are coming from Edward's folder. Until then, use descriptive placeholders:

```html
<!-- PLACEHOLDER: Replace src with real photo. Recommended: workspace interior, 1200x800px -->
<div class="aspect-video bg-stone-100 rounded-lg flex items-center justify-center border border-stone-200">
  <span class="text-stone-400 text-sm">Photo: [description]</span>
</div>
```

**Photo slots needed (document in README for Edward):**
- Hero image: wide interior shot of the main space (1920x800px recommended)
- Membership page hero: coworking area shot
- Meeting spaces hero: boardroom or training room shot
- 3 homepage gallery images (matching brochure layout): workspace, Nashville art/mural, open office
- Individual meeting space photos (6 total): Learning Center, Board Room, Conference Room, Studio, Cafe, Drop Zone
- Individual membership tier photos (3 total): virtual office concept, executive workspace, private office

Use `/img/placeholder/` for any generated placeholder images. Real photos go directly in `/img/`.

---

## Deployment

**Claude Code handles all of this. Full sequence:**

1. Initialize the project in a new directory: `vantage-nashville/`
2. Run `git init`
3. Create the GitHub repo via CLI: `gh repo create vantage-nashville --public --source=. --remote=origin`
   - If `gh` CLI is not authenticated, prompt the user to run `gh auth login` first
4. Build the full site
5. Add `.gitignore` (node_modules, .DS_Store, dist/)
6. `git add . && git commit -m "Initial scaffolding: Vantage coworking site"`
7. `git push -u origin main`
8. Install Vercel CLI if not present: `npm i -g vercel`
9. Run `vercel` to link and deploy (will prompt for Vercel account connection if needed)
10. Confirm live URL and share with user

**`vercel.json`:**
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

**If any step fails (gh auth, Vercel auth, etc.), stop and tell the user what to run manually. Do not skip steps or assume auth is in place.**

---

## README.md Contents

1. What this project is (one paragraph)
2. How to run locally (`npx serve .` or Tailwind watch command)
3. How to deploy (push to main)
4. **Asset Swap Guide:**
   - Where to put photos, what sizes, which placeholder each replaces
   - Where to update brand colors (CSS custom properties in `input.css`)
   - How to swap in the real logo (replace text treatment with SVG/PNG)
   - How to activate Cal.com (replace `CALCOM_LINK` with real booking URL)
   - How to activate Google Analytics (uncomment + add measurement ID)
   - How to update pricing or package details (each clearly marked with HTML comments)
5. Domain setup instructions for Vercel

---

## Build Priorities (for Claude Code)

**Phase 1 — This Build:**
1. Project setup: folder structure, Tailwind config with brand tokens, Google Fonts import
2. Shared header (sticky nav with CTA) and footer (address, phone, email, nav links)
3. Homepage: hero, who we are, three value props, membership preview cards, photo strip, bottom CTA
4. Memberships page: three-tier comparison cards with full details and pricing from brochure
5. Meeting Spaces page: six space cards with pricing, capacity, and collapsible amenity lists
6. Cal.com embed placeholder on every CTA button (all pages)
7. GA4 placeholder in all `<head>` tags
8. Fully responsive across all breakpoints
9. README with asset swap guide
10. vercel.json for clean URLs

**Phase 2 — Asset Integration (when Edward delivers):**
- Swap in SVG/PNG logo
- Confirm/adjust brand colors against official guide
- Replace placeholder photos with real ones
- Activate Cal.com with real booking link
- Activate GA4 with real measurement ID

**Phase 3 — Polish (after Mary-Kate feedback Friday):**
- Layout or content changes based on her input
- SEO meta tags, Open Graph tags for social sharing
- Favicon (from logo)
- Any additional sections or pages requested

---

## Out of Scope

- No CMS
- No blog
- No user accounts or login
- No payment processing or online booking/payment for meeting spaces
- No chatbot or live chat
- No digital marketing funnels (phase 2 of the larger project)
- No MailChimp integration (separate workstream)
- No multi-location support (Nashville only for now)
- No events calendar (mentioned in meeting as possible future addition)
- No KW branding anywhere on the site (this is intentional, Vantage is its own brand)

---

## Important Note: No KW Branding

The brochure has a small KW logo and the contact email is sarastephens@kw.com. For the website, keep it clean Vantage branding only. The email can remain as-is (it's a contact address), but do NOT include KW logos, KW colors, or any Keller Williams branding on the site. Vantage is positioned as an independent coworking brand.

---

## Notes for Claude Code

- Keep it simple. This is a 3-page static site with a booking widget. Do not overengineer.
- Use semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- All placeholder content should be wrapped in HTML comments like `<!-- PLACEHOLDER: Replace with real hero image -->` so find-and-replace is painless
- Tailwind utility classes as primary styling. Custom CSS only for the brand tokens and any animation.
- Test all pages at mobile, tablet, and desktop breakpoints
- Every page must have at least two visible "Schedule a Tour" CTAs
- The meeting spaces page amenity lists should be collapsible (toggle open/closed) to prevent wall-of-text
- The overall feel should be: clean, elevated, warm, professional. Lots of white space. Navy and gold accents. Serif headings. Think upscale Nashville, not generic WeWork.
- The brochure uses Nashville-themed conference room names (The Ryman, The Bluebird Cafe, The Grand Ole Opry). Lean into this Nashville identity in any microcopy or design touches.
- Do NOT include any Keller Williams branding, logos, or color schemes.
