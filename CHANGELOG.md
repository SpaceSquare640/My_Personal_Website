# Change Log

All notable changes to the SpaceSquare website are recorded here.

---

## [1.0.9] — 2026-05-25

### Changed
- **Typography refresh — more display impact**
  - `css/main.css` — added antialiased rendering, optimizeLegibility, font-weight 400 baseline
  - `css/main.css` — new `.accent-gradient` utility (purple → teal text gradient with soft glow); auto-applied to `.hero h1 .accent`
  - `css/main.css` — `.section-title` bumped to weight 800, larger clamp, tighter -0.025em tracking, line-height 1.1
  - `css/main.css` — `.nav-logo` slightly larger with tighter tracking
  - `css/main.css` — `.card-title` larger with tighter tracking
  - `index.html` — hero `h1` tightened (-0.04em tracking, line-height 0.98, larger clamp); `.hero-greeting` switched to DM Sans italic 300 for variety; `.hero-sub` slightly larger; `.nav-card-title` matched to the new card hierarchy

---

## [1.0.8] — 2026-05-25

### Changed
- **Merged Game section into Blog** — the Community area now has a single unified Blog sub-page that holds gaming, photography, and personal posts
- `pages/community-blog.html` — Pikmin Bloom post added at the top of the list with a new purple `.post-tag.game` modifier; existing City in Contrast entry preserved; i18n updated (EN / 繁中 / 简中) and Blog description rephrased to mention gaming, photography, and personal posts
- `pages/community.html` — Game sub-page card removed from "Community Sections"; Blog card now spans the full row; related i18n keys (`gameTitle`, `gameDesc`) removed
- `pages/post-pikmin-bloom.html` — back-link changed from "← Game" → "← Blog" and now points to `community-blog.html`; trilingual i18n updated to match
- `README.md` — pages table, file-structure block, and "add posts" instructions updated; `community-game.html` row removed

### Removed
- `pages/community-game.html` — redundant listing page (no unique content; the Pikmin Bloom post itself is preserved in `pages/post-pikmin-bloom.html`)

---

## [1.0.7] — 2026-05-25

### Added
- `pages/post-pikmin-bloom.html` — Game post: Let's Play Pikmin Bloom!
  - Friend code card (1453 5828 7803) + Invite code card (WDHYDVZFV) with one-click copy
  - QR invite image served from `img/game/pikmin-bloom-invite.jpg`
  - Download CTA linking to Pikmin Bloom app store page
  - Full EN / 繁中 / 简中 i18n support
- `img/game/` — New directory for game images
- `pages/community-game.html` — Replaced empty state with Pikmin Bloom post list entry; full i18n for post tag, title, and date

---

## [1.0.6] — 2026-05-25

### Changed
- `js/components.js` — Replaced all absolute nav/logo/resume paths (`/index.html`, `/pages/*`) with relative paths using `_R` prefix; site now works correctly whether deployed at root or a subpath (e.g. `/My_Personal_Website/`)
- GitHub repo renamed from `SpaceSquare640.github.io` to `My_Personal_Website`
- Live URL updated to **https://spacesquare640.github.io/My_Personal_Website/**

### Added
- `.gitignore` — excludes `.claude/` settings directory

---

## [1.0.5] — 2026-05-25

### Deployment
- Pushed to GitHub: `SpaceSquare640/SpaceSquare640.github.io`
- Live at **https://spacesquare640.github.io/**
- Added `.nojekyll` to disable Jekyll processing
- Added `img/blog/` directory for blog post photos

---

## [1.0.4] — 2026-05-25

### Added
- `pages/post-city-contrast.html` — Blog post: 城市縫隙 · City in Contrast
  - Mobile street photography competition entry, shot 2025-11-08 15:48
  - Full EN / 繁中 / 简中 i18n; photo served from `img/blog/city-contrast.jpg`
- `community-blog.html` — Replaced empty state with post list; first entry linked

---

## [1.0.3] — 2026-05-25

### Added
- `pages/product-bloxfruit-account.html` — Product detail page for Blox Fruits Account (HKD 700)
  - Full account stats: Level 2618, Angel V4, 6.7M Bounty, Beli 21M
  - 5 gamepasses, 10 permanent fruits (Dragon/Dough/T-Rex etc.), weapons & mastery, abilities & progress
  - Payment methods: FPS / AlipayHK / WeChat Pay HK / Octopus
  - Contact via Discord and Email
  - Full EN / 繁中 / 简中 i18n support

### Changed
- `pages/shop.html` — Replaced "My Own Products" empty state with Blox Fruits Account product card; updated i18n for all three languages

---

## [1.0.2] — 2026-05-25

### Changed
- Replaced static résumé password with TOTP (Time-based One-Time Password) in `js/components.js` and `pages/resume.html`
- Nav modal and page-level gate both now verify a 6-digit rotating code via Web Crypto API (HMAC-SHA-1, RFC 6238)
- Removed all plaintext password references from source files, README, and CHANGELOG
- Updated gate UI text and i18n strings (EN / 繁中 / 简中) to reflect authenticator code entry

### Security
- No static password stored anywhere in the codebase or documentation
- Each code is valid for ≤ 30 seconds and requires the authenticator app to generate

---

## [1.0.1] — 2026-05-25

### Changed
- Set real YouTube channel URL (`https://www.youtube.com/channel/UChmwTSclAf-m1z5DemiakUQ`) in `pages/community.html` and the shared footer in `js/components.js`
- Discord invite link (`https://discord.gg/KjUsGBFYwF`) was already correct in both locations — no change needed

---

## [1.0.0] — 2026-05-25

### Added
- Initial release of all core pages
- `index.html` — Homepage with hero section, animated tag, navigation card grid
- `pages/about.html` — About this website (3-card layout)
- `pages/community.html` — YouTube + Discord platform cards with contact emails and sub-page links
- `pages/community-game.html` — Game sub-page (template with add-post instructions)
- `pages/community-blog.html` — Blog sub-page (template with add-post instructions)
- `pages/shop.html` — Shop with own products + promoted products sections (template)
- `pages/freelance.html` — Two freelance services: video editing and shop advertising (15% commission)
- `pages/programs.html` — GitHub programs page
- `pages/resume.html` — Password-protected résumé with client-side gate
- `css/main.css` — Full dark-theme design system (CSS variables, nav, cards, buttons, animations, modal)
- `js/i18n.js` — Language switching engine supporting EN / 繁中 / 简中 with localStorage persistence
- `js/components.js` — Shared nav, footer, and résumé modal builder
- `README.md` — Setup and customisation guide

### Notes
- YouTube and GitHub URLs are placeholders (`#`) — update before deployment
- Shop and blog/game post sections are empty templates — add content when ready
