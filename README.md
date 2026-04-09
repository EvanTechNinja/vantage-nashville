# Vantage — Nashville's Premier Workspace

Static marketing site for Vantage coworking space at 4101 Charlotte Ave Suite D160, Nashville, TN 37209. Three pages: homepage, memberships, and meeting spaces. Primary goal: drive visitors to schedule a tour via Cal.com.

## Run Locally

```bash
# Install dependencies
npm install

# Watch Tailwind for changes during development
npm run dev

# Then serve the site (in another terminal)
npx serve .
```

## Deploy

The site is deployed on Vercel. Push to `main` to auto-deploy:

```bash
git add . && git commit -m "your message" && git push
```

For manual deploy: `npx vercel --prod`

## Asset Swap Guide

### Photos

Replace placeholder `<div>` blocks with real `<img>` tags. Each placeholder is labeled with what photo it needs. Search for `<!-- PLACEHOLDER:` in the HTML files.

**Photo slots needed:**

| Slot | File | Recommended Size |
|------|------|-----------------|
| Hero image (wide interior shot) | `index.html` | 1920x800px |
| Membership hero (coworking area) | `memberships.html` | 1920x600px |
| Meeting spaces hero (boardroom) | `meeting-spaces.html` | 1920x600px |
| 3 homepage gallery images | `index.html` | 1200x800px each |
| Virtual office concept | `memberships.html` | 800x450px |
| Executive workspace | `memberships.html` | 800x450px |
| Private office | `memberships.html` | 800x450px |
| Learning Center | `meeting-spaces.html` | 800x450px |
| Board Room | `meeting-spaces.html` | 800x450px |
| Conference Room | `meeting-spaces.html` | 800x450px |
| The Studio | `meeting-spaces.html` | 800x450px |
| The Cafe | `meeting-spaces.html` | 800x450px |
| Drop Zone | `meeting-spaces.html` | 800x450px |

Place real photos in `/img/`. Optimize for web (compress, use WebP if possible).

### Logo

The logo is currently rendered as text "VANTAGE" in the heading font. To swap in the real logo:

1. Place the SVG or PNG in `/img/logo.svg` (or `.png`)
2. In each HTML file, find `<!-- PLACEHOLDER: Replace with SVG/PNG logo when available -->` and replace the text `VANTAGE` with an `<img>` tag

### Brand Colors

All brand colors are defined as CSS custom properties in `input.css` under `:root`. Update these values and rebuild Tailwind:

```bash
npm run build:css
```

The Tailwind config (`tailwind.config.js`) also defines `navy` and `bronze` color scales — update those to match.

### Cal.com Booking Link

The Cal.com embed is already wired up with `agent-services-a0784h/30min`. To change the booking link, search for `data-cal-link` across all HTML files and update the value.

### Google Analytics

In each HTML file's `<head>`, there's a commented-out GA4 snippet. To activate:

1. Uncomment the script block
2. Replace `GA_MEASUREMENT_ID` with your actual GA4 measurement ID

### Pricing & Package Details

Membership pricing is in `memberships.html`. Meeting space pricing is in `meeting-spaces.html`. Homepage preview cards are in `index.html`. Search for dollar amounts to find all pricing references.

## Tech Stack

- Static HTML + Tailwind CSS v3
- Google Fonts (Playfair Display + Inter)
- Cal.com embed (popup mode)
- Hosted on Vercel

## Custom Domain (Vercel)

1. Go to your Vercel project settings
2. Navigate to Domains
3. Add your custom domain
4. Update DNS records as instructed by Vercel
