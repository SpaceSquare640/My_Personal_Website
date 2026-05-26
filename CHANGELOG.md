# Change Log

All notable changes to the SpaceSquare website are recorded here.

---

## [1.0.21] — 2026-05-26

### Added
- **PDF Tool** added to `pages/programs.html` as a second downloadable program (sits between Disk Speed Tester and the GitHub Profile card)
  - `downloads/PDF_Tool.zip` — 9 KB ZIP containing `PDF_Tool.py`, `README.md`, and `CHANGELOG.md` (no `.git` history)
  - Source bundled from `D:\Code\Python Code\PDF_Tool` — a Python desktop GUI built with CustomTkinter that supports: Add PDF, Merge, Alternate Mix, Split Pages, Compress, Encrypt, To Image, Extract Text, Rotate Pages, plus list management (sort / remove / clear)
  - GitHub repo link: <https://github.com/SpaceSquare640/PDF_Tool>
  - Trilingual i18n (EN / 繁中 / 简中) for the program title, subtitle, description, meta chips (size / platform 🐍 / license), and both action buttons
  - Dependency note rendered inline below the description: `pip install customtkinter pypdf pdf2image Pillow` + Poppler link for the PDF→image feature
  - GitHub Profile card fade-up class bumped `fade-up-1` → `fade-up-2` so all three cards still stagger correctly
- README pages table updated to list both downloadable programs

---

## [1.0.20] — 2026-05-26

### Added — four page-scoped polish effects (no global / site-wide changes)
All four effects honor `prefers-reduced-motion: reduce`; nothing was added to `css/main.css` or `js/components.js`.

- **Effect A · Stats counter on Blox Fruits page** — when the stats grid scrolls into view, all numeric `.stat-value` elements (Level 2618, Bounty 6.7M, Beli 21M, Fragments 1,700) animate from 0 to their final values over ~950ms with ease-out cubic. IntersectionObserver fires once per visit; non-numeric values (Angel V4, Shipwright) are skipped. Snaps to exact text on completion.
  - Scoped inline to `pages/product-bloxfruit-account.html` only
- **Effect B · Scroll-to-top floating button** — small 44×44 circular `↑` button appears in the bottom-right corner after 400 px of scroll, smooth-scrolls back to top on click. Glassy `backdrop-filter`, theme-aware via existing CSS variables, hover state turns purple.
  - Inline in `pages/product-bloxfruit-account.html` and `pages/product-firefighting-simulator-ignite.html` only (the two longest pages)
- **Effect C · Typewriter homepage greeting** — `<p id="hero-greeting">` types itself out letter-by-letter at 65 ms/char on first visit per browser session, then sits still. Uses `sessionStorage.seenTypewriter` flag so reloading the same tab skips the animation. Layout-stable (`min-height: 1.6em` reserved).
  - Inline in `index.html` only
- **Effect D · Hover preview overlay on shop cards** — slides a dark gradient strip up from the bottom of each thumbnail on hover, showing the price + "View product →" CTA (trilingual). Pointer-events disabled so it doesn't block the card link. Desktop only (`(hover: hover) and (pointer: fine)`).
  - New `.product-overlay` markup + CSS + `viewProduct` i18n key (EN: "View product →" / 繁中: "查看商品 →" / 简中: "查看商品 →")
  - Inline in `pages/shop.html` only

### Backups
- Full project backup created at `E:\[BackUp]\[My_Personal_website Backup]\My_Personal_website_2026-05-26_233232` (11.34 MB, 244 files, including `.git`) — pre-v1.0.20 snapshot

---

## [1.0.18] — 2026-05-26

### Changed
- **Firefighting Simulator: Ignite — promotional pricing removed** (取消優惠價). Plans now show their regular prices only:
  - Plan A · Standard: **HK$148** (previously HK$148 strikethrough → HK$138)
  - Plan B · Deluxe: **HK$218** (previously HK$218 strikethrough → HK$208)
- `pages/product-firefighting-simulator-ignite.html` — removed `.plan-price-orig` strikethrough span + `.plan-save` "Save HK$10" tag from both plan cards; cleaned up corresponding `planASave` / `planBSave` i18n keys and `applyPageText` wiring for all three languages
- `pages/shop.html` — product card price strap updated **From HKD 138 → From HKD 148** in EN / 繁中 / 简中

---

## [1.0.17] — 2026-05-26

### Added
- **New shop product — Firefighting Simulator: Ignite (Steam CDK)**
  - `img/icon/product/Firefighting_Simulator_Ignite_Steam_CDK.jpg` (180 KB) — listing banner image, used as both the shop-card icon and the product-page gallery photo
  - `pages/product-firefighting-simulator-ignite.html` — full detail page:
    - Status badge "In Stock · Instant Delivery"
    - Gallery with click-to-enlarge lightbox (same component as Blox Fruits page)
    - **Two-tier plan grid** with strikethrough original price + discounted price + "Save HK$10" tag:
      - Plan A · Standard (Just the Game) — HK$148 → **HK$138**
      - Plan B · Deluxe (Game + All DLC) — HK$218 → **HK$208** (highlighted as best value)
    - "Why Buy From Me" checklist — 100% genuine, instant delivery, language support, local seller
    - Payment & Delivery — FPS / 八達通 / AlipayHK / Alipay pills; WhatsApp delivery note
    - Buyer Terms (warning card) — no refunds, faulty-key handling, **region lock: HK / MO / TW only**
    - Buyer Protection Tips — chat-log preservation, dispute screenshots
    - WhatsApp + Email contact CTAs
    - Full EN / 繁中 / 简中 i18n with content adapted from the user-supplied Carousell listing
  - `pages/shop.html` — new product card under "My Own Products"; trilingual name / description / "From HKD 138" price strap
- `README.md` — new product page added to the pages table

---

## [1.0.16] — 2026-05-26

### Fixed — Bug Report 2026-05-26
- **Bug 1 · Light mode "Shop" hero button nearly invisible** — `[data-theme="light"] .btn-ghost` now uses an explicit darker border (`rgba(15,15,30,0.32)`, hover `0.55`) so the button is clearly outlined against the near-white hero background
- **Bug 2 · Nav links low contrast in light mode** — nav links in light mode now render in `#2e2e44` (was `var(--muted)` = medium gray); hover/active states tinted with `rgba(90,77,219,0.08)` for clear feedback
- **Bug 3 · Shop card image cropped** — `.product-img` aspect-ratio changed from `1` to `16 / 9` (option B); the 480×270 icon now displays uncropped, full "Roblox Account" text visible
- **Bug 4 · Card CTA arrows + 🔒 badge not translated** — added IDs to all six `.nav-card-arrow` + the `.nav-card-locked` badge on `index.html`; added 6 new keys to `PAGE_TEXT` (`arrowRead`, `arrowExplore`, `arrowShop`, `arrowHire`, `arrowGithub`, `lockedBadge`) × 3 languages; wired in `applyPageText()`
- **Bug 5 · "Scroll" not translated** — added `id="scroll-hint"`; new `scroll` key in `PAGE_TEXT` translated as 向下捲動 / 向下滚动
- **Bug 6 · Light-mode hero washed out** — added a soft purple→teal radial gradient backdrop only under `[data-theme="light"] .hero`; retuned `.hero h1 .accent` drop-shadow with two stacked filters for light backgrounds; `.hero-greeting` + `.hero-sub` now render in `#3a3a4e` in light mode for better contrast

### Not reproduced
- **Bug 7 · Console "message channel closed" exceptions** — dismissed as third-party browser-extension noise (classic `chrome.runtime.sendMessage` async leak). Confirmed no scripts on the site (`i18n.js`, `components.js`, page-level inline scripts) use `chrome.runtime`, `runtime.onMessage`, or async message channels

### Changed
- `css/main.css` light theme — `--muted` darkened from `#5c5c70` → `#424256` (better readability on white); `--border2` bumped from `0.14α` → `0.22α`; `--dim` darkened from `#c4c4d6` → `#b0b0c4`; `--nav-bg` opacity raised from `0.78` → `0.82`; `--ambient-glow` slightly stronger
- These global light-theme tweaks also improve readability of muted text on the footer, post lists, and product page

---

## [1.0.15] — 2026-05-26

### Added
- **Disk Speed Tester** added to `pages/programs.html`
  - `downloads/Disk_Speed_Tester.zip` — 25 KB Windows utility, served directly by GitHub Pages
  - New `.prog-card` component (replaces the old single `.github-card`): icon + title + subtitle header, body with description, meta chips (size / platform / license), and an action row with **⬇ Download (ZIP)** primary CTA and **View on GitHub →** secondary CTA
  - GitHub repo link: <https://github.com/SpaceSquare640/Disk_Speed_Tester>
  - Full trilingual i18n (EN / 繁中 / 简中) for title, subtitle, description, meta chips, and both buttons — incl. CJK product name "硬碟/硬盘速度測試/测试工具"
  - Existing GitHub Profile card kept as a second `.prog-card` underneath, now pointing at `https://github.com/SpaceSquare640` (no longer placeholder `#`)
- `downloads/` — new top-level folder for distributable binaries / archives
- README §5 — new "Add downloadable programs" subsection documenting the `downloads/` convention

### Changed
- `js/components.js` — footer **GitHub** link no longer `#`; now points to `https://github.com/SpaceSquare640`
- README §1 — GitHub setup checkbox flipped to ✓ (URL now wired)
- README §5 → §6 — "Deploy to GitHub Pages" renumbered to make room for the new downloads section

---

## [1.0.14] — 2026-05-26

### Added
- **Product icon folder convention** — `img/icon/product/` for square thumbnails (1:1, sized for the shop card grid) — separate from `img/shop/` which holds full-size product screenshots used in the on-page gallery
- `img/icon/product/blox-fruits-account.jpg` — dedicated 1:1 icon for the Blox Fruits Account shop card (26 KB)
- `README.md` — new "Product image layout" subsection under §3 documenting the icon-vs-screenshot folder split

### Changed
- `pages/shop.html` — Blox Fruits Account card thumbnail now points to `img/icon/product/blox-fruits-account.jpg` instead of the (16:9, mis-cropped) gallery shot

### Fixed
- Shop card thumbnail no longer gets mis-cropped — the 16:9 banner that was being squished into the 1:1 card slot is replaced by a properly-proportioned square icon

---

## [1.0.13] — 2026-05-26

### Added
- **Shop card thumbnail** — Blox Fruits Account card on `pages/shop.html` now uses `blox-fruits-account-1.jpg` instead of the 🎮 placeholder
  - `.product-img` updated to host an `<img>` (object-fit: cover, hover scale 1.06)
- **Blox Fruits Account — 4-photo gallery** with hover zoom + click-to-enlarge lightbox
  - `img/shop/` — new directory for shop product images
  - `img/shop/blox-fruits-account-1.jpg` — fighting styles / fruits / races progress (161 KB)
  - `img/shop/blox-fruits-account-2.jpg` — listing banner "Sell HKD 700" (173 KB)
  - `img/shop/blox-fruits-account-3.jpg` — gamepasses · permanent fruit · sword · gun summary (281 KB)
  - `img/shop/blox-fruits-account-4.jpg` — in-game (Dragon / T-Rex / Dough / races V4 / Pale Scarf) (111 KB)
  - `pages/product-bloxfruit-account.html`:
    - new `.gallery-section` between hero and stats grid; 2×2 responsive grid → 1 column ≤600px
    - `.gallery-item` with `aspect-ratio: 16/9`, `object-fit: cover`, hover scale 1.06, magnifier icon overlay
    - native lightbox (no library) — click any image to open full-size on a blurred dark overlay; click again or press `Esc` to close; `loading="lazy"` on all images
    - new trilingual i18n key `galLabel` ("Account Screenshots" / "帳號實機截圖" / "账号实机截图")

---

## [1.0.12] — 2026-05-26

### Changed
- **Display font swap — Syne → Big Shoulders Display** (taller, more vertical proportions; fixes "字體太過扁")
  - `css/main.css` — Google Fonts import updated; `--font-h` now resolves to `'Big Shoulders Display', 'Syne', sans-serif`
  - Bumped display weights across the board (700 → 800, 800 → 900) and tightened line-heights to take advantage of the taller x-height
  - `.nav-logo` — weight 900, +0.25rem size, `text-transform: uppercase`, `line-height: 1`
  - `.section-title` — weight 900, clamp raised to `2rem–2.85rem`, `line-height: 1.0`
  - `.card-title` / `.nav-card-title` — weight 800, +0.2rem size
  - `.modal-box h3` — weight 800, +0.25rem size
  - `index.html` — hero `h1` weight 900, clamp raised to `4rem–9rem`, `line-height: 0.88`, `text-transform: uppercase`; mobile clamp lifted to `2.8rem–4.6rem` with `0.92` leading
  - `pages/post-pikmin-bloom.html` / `post-city-contrast.html` / `product-bloxfruit-account.html` — `.post-title` and `.product-title` / `.big-price` bumped to weight 900 with tighter leading and -0.01em tracking
  - `pages/community.html` — `.platform-info h2` and `.sub-page-title` bumped (weight 800, larger)
  - `pages/community-blog.html` — `.post-title` bumped (weight 800, larger)

---

## [1.0.11] — 2026-05-26

### Added
- **Light / Dark theme toggle** — default dark
  - `css/main.css` — new `[data-theme="light"]` palette layered on top of the dark default; new theme-aware variables (`--nav-bg`, `--menu-bg`, `--noise-opacity`, `--ambient-glow`); smooth `transition` between palettes; `color-scheme` declared for native form/scrollbar colors
  - `js/components.js` — `toggleTheme()`, `applyTheme()`, `getTheme()`; preference persisted in `localStorage` (`theme` = `light` / `dark`); applied at script load so the page paints in the correct theme on refresh
  - Nav now shows a circular sun/moon button (next to the language switcher); icons swap with a spring-eased Y-translate; the button itself rotates slightly + scales on hover
- **Motion polish — site-wide micro-interactions**
  - Animated gradient on the hero `SpaceSquare` accent (4-stop, 250% background-size, gentle 8s ease loop)
  - Card hover lift (translateY(-4px)) + purple glow + subtle border tint for `.card`, `.nav-card`, `.platform-card`, `.sub-page-card`, `.code-card`, `.stat-card`, `.post-item`
  - Button sheen on hover (diagonal highlight sweep) + 1px lift; active-press returns to baseline
  - Nav link underline-grow on hover and on `.active`
  - Tag dot now pulses with a radiating ring (`box-shadow` expansion)
  - **Scroll progress bar** at the top of every page — gradient bar (purple → teal) with soft glow, driven by JS scroll listener; built into `initPage()`
  - All animations honor `@media (prefers-reduced-motion: reduce)`

### Changed
- `pages/product-bloxfruit-account.html` — **shop contact now uses WhatsApp instead of Discord**
  - Both CTA buttons (hero price row + payment section) switched from `https://discord.gg/...` → `https://wa.me/85264001277`; label changed to **"WhatsApp +852 6400 1277"** in all three languages
  - `id`s renamed `btn-discord-*` → `btn-whatsapp-*`; i18n key `btnDiscord` → `btnWhatsApp`

---

## [1.0.10] — 2026-05-26

### Added
- **Full responsive support — mobile · tablet · desktop**
- `js/components.js` — new hamburger nav (`nav-toggle` button + `nav-menu` wrapper); `toggleMobileNav()` opens/closes the panel; tap-outside and resize-to-desktop auto-close handlers
- `css/main.css` — 3-tier breakpoints (≤640 mobile · 641–1024 tablet · >1024 desktop):
  - Hamburger reveals only ≤768; animated bars → X when open; nav-menu turns into a glassy dropdown panel anchored under the bar
  - Tablet shrinks nav padding, nav-link font-size, and section padding
  - Mobile (≤640) tightens `.section` padding, scales `.section-title` to `clamp(1.4rem, 6.5vw, 1.9rem)` with `word-break`, smaller buttons + modals
  - Catch-all `body .sub-hero / .comm-hero / .post-page / .posts-body / .comm-body / .post-body` padding shrink so every page wrapper respects the narrow viewport without per-page edits
- `index.html` — mobile-specific hero overrides: `h1` clamp dropped to `2.1rem–3.6rem` with `word-break` to keep "SpaceSquare" on one line in the viewport; tighter padding, smaller greeting/sub, full-width CTA buttons; nav-card paddings shrunk on tablet + mobile

### Fixed
- Mobile homepage no longer overflows horizontally — hero gradient text now fits within the viewport, section title `"What would you like to explore?"` no longer clips the `?`, and the nav no longer cuts off menu items
- iOS notch + status bar safer with smaller hero top padding and reduced min-height on mobile

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
- `pages/post-pikmin-bloom.html` — back-link changed from "← Game" → "← Blog" and now points to `community-blog.html`; trilingual i18n updated to match; QR image path moved from `img/game/pikmin-bloom-invite.jpg` → `img/blog/pikmin-bloom-invite.jpg` for consistency with other blog assets
- `README.md` — pages table, file-structure block, and "add posts" instructions updated; `community-game.html` row removed

### Added
- `img/blog/pikmin-bloom-invite.jpg` — friend invite QR card photo (74 KB) now served on the Pikmin Bloom post page

### Removed
- `pages/community-game.html` — redundant listing page (no unique content; the Pikmin Bloom post itself is preserved in `pages/post-pikmin-bloom.html`)
- `img/game/` — redundant directory (post images now live under `img/blog/`)

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
