# SpaceSquare Personal Website

A dark-themed personal website for SpaceSquare — Hong Kong-based YouTuber, creator, and shop owner.

> **⚠️ Copyright © 2026 SpaceSquare. All Rights Reserved.**
> This repository is **source-available, NOT open-source.** Viewing the source on GitHub does *not* grant permission to download, copy, fork, modify, redistribute, or deploy this site or any of its content, design, code, or media. See [`LICENSE`](LICENSE) for the full notice. Unauthorised use is a violation of copyright. For licensing requests, contact `chin52696411@gmail.com`.

## Features

- Dark colour scheme with subtle noise grain and ambient glow
- Smooth fade-up entrance animations
- **Golden-Ratio design system** — all shared spacing, type scale, radii, line-height and nav height are derived from φ (1.618). Spacing steps ×φ, type steps ×√φ (so every two type steps = one golden step), exposed as `--sp-*` / `--fs-*` CSS variables in `css/main.css`
- **Four themes** — Dark (default), Light, **Gold & Silver · Dark** (warm near-black + metallic gold + silver), and **Gold & Silver · Light** (ivory + brushed silver + deep gold). All driven by `[data-theme]` CSS-variable palettes
- **Settings modal** — ⚙️ nav button (every page) opens a settings panel to pick theme + language and toggle Liquid Glass and Reduce Motion; every choice persists in `localStorage`
- Three-language support: **English** (default), **Traditional Chinese**, **Simplified Chinese**
- Language preference persisted via `localStorage`
- **Liquid Glass** opt-in visual effect — 🫧 nav toggle frosts surfaces (`backdrop-filter` blur + sheen); off by default, saved per-visitor in `localStorage`
- **Reduce Motion** opt-in parameter — damps animations/transitions site-wide (`[data-motion="reduce"]`), toggled from Settings
- 2FA-protected Résumé page (rotating TOTP codes via authenticator app)
- Gradient display headings with soft glow (purple → teal accent)
- **Full SEO** — per-page meta + Open Graph + Twitter Card, canonical URLs, favicon, theme-color, JSON-LD structured data (Person, WebSite, Product, BlogPosting, SoftwareApplication), `robots.txt` and `sitemap.xml`
- Modular structure: shared CSS, i18n system, and component builder
- Ready for GitHub Pages deployment (no build step required)

## Pages

| File | URL | Description |
|---|---|---|
| `index.html` | `/` | Homepage with hero and navigation cards |
| `pages/about.html` | `/pages/about.html` | About this website |
| `pages/community.html` | `/pages/community.html` | YouTube + Discord overview |
| `pages/community-blog.html` | `/pages/community-blog.html` | Blog sub-page (gaming, photography, personal posts) |
| `pages/shop.html` | `/pages/shop.html` | Shop (own + promoted products) |
| `pages/freelance.html` | `/pages/freelance.html` | Freelance services |
| `pages/programs.html` | `/pages/programs.html` | Downloadable programs + GitHub profile (Disk Speed Tester, PDF Tool, Multimedia Downloader) |
| `pages/resume.html` | `/pages/resume.html` | Password-protected résumé |
| `pages/product-bloxfruit-account.html` | `/pages/product-bloxfruit-account.html` | Shop product: Blox Fruits Account (HKD 700) |
| `pages/product-firefighting-simulator-ignite.html` | `/pages/product-firefighting-simulator-ignite.html` | Shop product: Firefighting Simulator: Ignite Steam CDK (HKD 138 / 208) |
| `pages/post-city-contrast.html` | `/pages/post-city-contrast.html` | Blog post: 城市縫隙 · City in Contrast |
| `pages/post-pikmin-bloom.html` | `/pages/post-pikmin-bloom.html` | Blog post: Let's Play Pikmin Bloom! (with QR invite + friend code) |
| `pages/post-new-youtube-banner-icon.html` | `/pages/post-new-youtube-banner-icon.html` | Blog post: New YouTube Channel Branding — Banner & Icon |
| `pages/post-pokemon-go.html` | `/pages/post-pokemon-go.html` | Blog post: Let's Play Pokémon GO! (trainer code + QR) |
| `pages/post-pokemon-go-ikebukuro.html` | `/pages/post-pokemon-go-ikebukuro.html` | Blog post: Tokyo Ikebukuro Pokémon GO Hotspot Coordinates |
| `pages/post-pokemon-go-taipei.html` | `/pages/post-pokemon-go-taipei.html` | Blog post: Taipei Main Station Pokémon GO Hotspot Coordinates |
| `pages/post-pokemon-go-groudon.html` | `/pages/post-pokemon-go-groudon.html` | Blog post: Caught Groudon at a Primal Raid · Tokyo |
| `pages/post-pokemon-go-mewtwo.html` | `/pages/post-pokemon-go-mewtwo.html` | Blog post: Caught Shiny Mewtwo at a Raid · Tokyo |
| `pages/post-pokemon-go-chicago.html` | `/pages/post-pokemon-go-chicago.html` | Blog post: Chicago Lincoln Park Pokémon GO Hotspot Coordinates |
| `pages/post-pokemon-go-copenhagen.html` | `/pages/post-pokemon-go-copenhagen.html` | Blog post: Copenhagen Top 5 Pokémon GO Hotspot Coordinates |
| `pages/post-nam-sang-wai-night-ride.html` | `/pages/post-nam-sang-wai-night-ride.html` | Blog post: 南生圍夜騎 · Nam Sang Wai Night Ride |

## File Structure

```
spacesquare/
├── index.html
├── css/
│   └── main.css          # Shared design system
├── js/
│   ├── i18n.js           # Translation engine
│   └── components.js     # Nav, footer, modal builder
└── pages/
    ├── about.html
    ├── community.html
    ├── community-blog.html  # Unified blog (gaming, photography, personal)
    ├── shop.html
    ├── freelance.html
    ├── programs.html
    └── resume.html
```

## Setup & Customisation

### 1. Update links
- **YouTube** — already set to `https://www.youtube.com/channel/UChmwTSclAf-m1z5DemiakUQ` in `community.html` and `components.js` ✓
- **Discord** — already set to `https://discord.gg/KjUsGBFYwF` in `community.html` and `components.js` ✓
- **GitHub** — set to `https://github.com/SpaceSquare640` in `programs.html` and `components.js` footer ✓

### 2. Set up résumé 2FA (TOTP)

The résumé is protected by TOTP (Time-based One-Time Password). Each 6-digit code is valid for 30 seconds. Set up using the secret key stored in `js/components.js` (`TOTP_SECRET`) with Google Authenticator or Authy.

To change the secret: replace `TOTP_SECRET` in `js/components.js` with a new base32 key and re-add it to your authenticator app.

> **Note:** This is a client-side check — it prevents casual access but not a developer who inspects the source. Do not store truly sensitive data on the résumé page. TOTP requires HTTPS; it works on GitHub Pages but not from `file://`.

### 3. Add products to the shop
In `pages/shop.html`, follow the HTML comment instructions to add product cards.
Each product should have its own sub-page (e.g. `pages/product-item-name.html`).

**Product image layout**
- `img/icon/product/<slug>.jpg` — **square thumbnail** shown on the shop card (1:1, ~400×400, < 200 KB)
- `img/shop/<slug>-{1..N}.jpg` — **product detail screenshots** shown in the gallery on the product page (16:9 cropped, full-size lightbox on click)

### 5. Add downloadable programs
Drop the binary into `downloads/` (e.g. `downloads/My_Tool.zip`) and add a `prog-card` to `pages/programs.html` linking to it with the `download` attribute. The GitHub repo URL goes on the secondary "View on GitHub" button. Files in `downloads/` are served directly by GitHub Pages.

### 4. Add blog posts
In `pages/community-blog.html`, add a new `<a class="post-item">` entry inside `.post-list` and a matching `tagP*` / `titleP*` / `dateP*` group inside `PAGE_TEXT`. Each post should have its own sub-page (e.g. `pages/post-slug.html`). Gaming, photography, and personal posts all live here — use the `.post-tag.game` modifier for purple game tags or the default teal for everything else.

### 6. Deploy to GitHub Pages
Repository: [SpaceSquare640/My_Personal_Website](https://github.com/SpaceSquare640/My_Personal_Website)
**Live URL: https://spacesquare640.github.io/My_Personal_Website/**

Deployed from `main` branch root via GitHub Pages.

## Design System (Golden Ratio)

The shared UI is built on the Golden Ratio (φ = 1.618). Tokens live in `:root` in `css/main.css`:

- **Spacing** `--sp-1 … --sp-7` — ratio φ: `0.382 · 0.618 · 1.000 · 1.618 · 2.618 · 4.236 · 6.854` rem
- **Type** `--fs-1 … --fs-8` — ratio √φ (1.272): `0.618 · 0.786 · 1.000 · 1.272 · 1.618 · 2.058 · 2.618 · 4.236` rem (two type steps = one golden step)
- **Geometry** — `--radius 0.618rem` / `--radius-lg 1rem` (ratio φ), `--lh-body 1.618`, `--nav-h 4.236rem`

### Themes & preferences (persisted in `localStorage`)

| Key | Values | Default |
|---|---|---|
| `theme` | `dark` · `light` · `gold-dark` · `gold-light` | `dark` |
| `ss-lang` | `en` · `zh-hant` · `zh-hans` | `en` |
| `ss-glass` | `on` · `off` | `off` |
| `ss-motion` | `normal` · `reduce` | `normal` |

All four are applied on `js/components.js` / `js/i18n.js` load so the first paint is correct, and are editable from the ⚙️ Settings modal (built once in `components.js`, available on every page).

## Tech Stack

- Pure HTML / CSS / Vanilla JavaScript
- No build tools, no dependencies, no npm
- Google Fonts: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
