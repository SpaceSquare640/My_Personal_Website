# SpaceSquare Personal Website

A dark-themed personal website for SpaceSquare — Hong Kong-based YouTuber, creator, and shop owner.

## Features

- Dark colour scheme with subtle noise grain and ambient glow
- Smooth fade-up entrance animations
- Three-language support: **English** (default), **Traditional Chinese**, **Simplified Chinese**
- Language preference persisted via `localStorage`
- 2FA-protected Résumé page (rotating TOTP codes via authenticator app)
- Gradient display headings with soft glow (purple → teal accent)
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
| `pages/programs.html` | `/pages/programs.html` | Downloadable programs + GitHub profile (Disk Speed Tester) |
| `pages/resume.html` | `/pages/resume.html` | Password-protected résumé |
| `pages/product-bloxfruit-account.html` | `/pages/product-bloxfruit-account.html` | Shop product: Blox Fruits Account (HKD 700) |
| `pages/product-firefighting-simulator-ignite.html` | `/pages/product-firefighting-simulator-ignite.html` | Shop product: Firefighting Simulator: Ignite Steam CDK (HKD 138 / 208) |
| `pages/post-city-contrast.html` | `/pages/post-city-contrast.html` | Blog post: 城市縫隙 · City in Contrast |
| `pages/post-pikmin-bloom.html` | `/pages/post-pikmin-bloom.html` | Blog post: Let's Play Pikmin Bloom! (with QR invite + friend code) |

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

## Tech Stack

- Pure HTML / CSS / Vanilla JavaScript
- No build tools, no dependencies, no npm
- Google Fonts: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display) (display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (body)
