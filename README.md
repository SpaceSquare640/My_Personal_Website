# SpaceSquare Personal Website

A dark-themed personal website for SpaceSquare — Hong Kong-based YouTuber, creator, and shop owner.

## Features

- Dark colour scheme with subtle noise grain and ambient glow
- Smooth fade-up entrance animations
- Three-language support: **English** (default), **Traditional Chinese**, **Simplified Chinese**
- Language preference persisted via `localStorage`
- Password-protected Résumé page
- Modular structure: shared CSS, i18n system, and component builder
- Ready for GitHub Pages deployment (no build step required)

## Pages

| File | URL | Description |
|---|---|---|
| `index.html` | `/` | Homepage with hero and navigation cards |
| `pages/about.html` | `/pages/about.html` | About this website |
| `pages/community.html` | `/pages/community.html` | YouTube + Discord overview |
| `pages/community-game.html` | `/pages/community-game.html` | Game sub-page |
| `pages/community-blog.html` | `/pages/community-blog.html` | Blog sub-page |
| `pages/shop.html` | `/pages/shop.html` | Shop (own + promoted products) |
| `pages/freelance.html` | `/pages/freelance.html` | Freelance services |
| `pages/programs.html` | `/pages/programs.html` | GitHub programs |
| `pages/resume.html` | `/pages/resume.html` | Password-protected résumé |
| `pages/product-bloxfruit-account.html` | `/pages/product-bloxfruit-account.html` | Shop product: Blox Fruits Account (HKD 700) |
| `pages/post-city-contrast.html` | `/pages/post-city-contrast.html` | Blog post: 城市縫隙 · City in Contrast |

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
    ├── community-game.html
    ├── community-blog.html
    ├── shop.html
    ├── freelance.html
    ├── programs.html
    └── resume.html
```

## Setup & Customisation

### 1. Update links
- **YouTube** — already set to `https://www.youtube.com/channel/UChmwTSclAf-m1z5DemiakUQ` in `community.html` and `components.js` ✓
- **Discord** — already set to `https://discord.gg/KjUsGBFYwF` in `community.html` and `components.js` ✓
- **GitHub** — still placeholder (`href="#"`) in `programs.html` and `components.js` — replace with your real GitHub profile URL

### 2. Set up résumé 2FA (TOTP)

The résumé is protected by TOTP (Time-based One-Time Password). Each 6-digit code is valid for 30 seconds. Set up using the secret key stored in `js/components.js` (`TOTP_SECRET`) with Google Authenticator or Authy.

To change the secret: replace `TOTP_SECRET` in `js/components.js` with a new base32 key and re-add it to your authenticator app.

> **Note:** This is a client-side check — it prevents casual access but not a developer who inspects the source. Do not store truly sensitive data on the résumé page. TOTP requires HTTPS; it works on GitHub Pages but not from `file://`.

### 3. Add products to the shop
In `pages/shop.html`, follow the HTML comment instructions to add product cards.
Each product should have its own sub-page (e.g. `pages/product-item-name.html`).

### 4. Add blog/game posts
In `pages/community-blog.html` and `pages/community-game.html`, follow the comment instructions to add post list items.

### 5. Deploy to GitHub Pages
Repository: [SpaceSquare640/My_Personal_Website](https://github.com/SpaceSquare640/My_Personal_Website)
**Live URL: https://spacesquare640.github.io/My_Personal_Website/**

Deployed from `main` branch root via GitHub Pages.

## Tech Stack

- Pure HTML / CSS / Vanilla JavaScript
- No build tools, no dependencies, no npm
- Google Fonts: [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)
