# Change Log

All notable changes to the SpaceSquare website are recorded here.

---

## [1.0.28] — 2026-05-27

### Changed
- **Blog tag filter is now collapsible behind a button** (`pages/community-blog.html`)
  - The chip row is hidden by default; a new pill button "🏷️ Filter by tag: **All** ▾" appears in its place
  - Click the button → chips slide open (`max-height` + `opacity` transition); chevron rotates 180°
  - Click outside the filter, or click the button again → chips collapse
  - The button's "active tag" label updates every time a chip is clicked, so you can see which filter is on without re-opening the panel
  - Filter button label is fully i18n'd: **Filter by tag** / **依標籤篩選** / **按标签筛选**
- Page loads with a less crowded header — only the toggle button shows until the user wants to filter

---

## [1.0.27] — 2026-05-27

### Added
- **New blog post — "南生圍夜騎 · Nam Sang Wai Night Ride"** (`pages/post-nam-sang-wai-night-ride.html`)
  - Photo-focused post (no body sections — just a hero image + caption + location card)
  - Hero photo `img/blog/Bike_20260522_19.46.jpg` (1.7 MB) — road bike on a bridge over 錦田河 (Kam Tin River), Friday 2026-05-22 at 19:46
  - Click-to-enlarge lightbox on the photo
  - Bilingual title (中文 + English), italicised caption, location card with "Open in Maps →" CTA pointing at 南生圍 / 錦田河 / 元朗
  - Tags: **Road Bike** · **Hong Kong** (both teal)
  - Full EN / 繁中 (公路單車) / 简中 (公路自行车) i18n
  - Full SEO meta (description, keywords, OG, Twitter Card, canonical, `article:tag` ×2) + **BlogPosting JSON-LD** with `contentLocation` referencing 南生圍 / 錦田河 / 元朗 / 香港
- **Blog tag filter — new tag slug added**
  - `road-bike` ("Road Bike" / "公路單車" / "公路自行车") — wired into `SLUG_TO_KEY` and the trilingual tag dict in `pages/community-blog.html`
- Post inserted into the blog list at the chronologically correct slot (between Pikmin Bloom 2026-05-25 and City Contrast 2025-11-08)
- `sitemap.xml` + README pages table updated

---

## [1.0.26] — 2026-05-27

### Added
- **New blog post — "Tokyo Ikebukuro — Top-Tier Pokémon GO Coordinates"** (`pages/post-pokemon-go-ikebukuro.html`)
  - Text-only post (no photo), built around a prominent **coordinates card** showing `35.730105, 139.719079` with copy-to-clipboard button
  - **Two map CTAs** — "Open in Google Maps →" and "Open in Apple Maps →" (both linked to the coordinates)
  - Intro paragraph + Location Overview card + **3 advantage cards** (PokéStop density / instant raid lobbies / weather-proof grinding) with numbered headings and hover lift
  - Hashtag row at the bottom: #PokemonGO #PokemonGOCoordinates #TokyoGrinding #Ikebukuro #GameGuide #PokemonGOHotspot
  - Three tags: **Pokémon Go Coordinate** (purple) · **Japan** (teal) · **Game** (red)
  - Full EN / 繁中 / 简中 i18n (繁中 "Pokémon GO 座標 · 日本 · 遊戲" / 简中 "Pokémon GO 坐标 · 日本 · 游戏")
  - Full SEO meta (description, keywords, OG, Twitter Card, canonical, `article:tag` ×3) + **BlogPosting JSON-LD** with `contentLocation` `GeoCoordinates` (lat 35.730105, lon 139.719079) — eligible for Google Maps integration
- **Blog tag filter — two new tag slugs added**
  - `pokemon-go-coordinate` ("Pokémon Go Coordinate" / "Pokémon GO 座標" / "Pokémon GO 坐标")
  - `japan` ("Japan" / "日本" / "日本")
  - Both wired into `SLUG_TO_KEY` and the trilingual `tag` dictionary in `pages/community-blog.html`
- New post added at the top of `pages/community-blog.html` post list
- `sitemap.xml` + README pages table updated

---

## [1.0.25] — 2026-05-27

### Added
- **New blog post — "Let's Play Pokémon GO!"** (`pages/post-pokemon-go.html`)
  - QR code image (`img/blog/PokemonGo_SpaceSquare.png`, 412 KB) with click-to-enlarge lightbox
  - Trainer Code card showing **8260 6046 5990** with one-click copy → `826060465990`
  - Visit Pokémon GO CTA → `https://pokemongolive.com/`
  - Three tags: **Pokémon Go** (purple) · **Hong Kong** (teal) · **Game** (red)
  - Full EN / 繁中 / 简中 i18n
  - Full SEO meta (description, keywords, OG, Twitter Card, canonical, `article:tag` ×3) + **BlogPosting JSON-LD**
- **Tag search / filter feature** on `pages/community-blog.html`
  - New `.tag-filter` chip row above the post list — automatically built from each post's `data-tags` attribute, with per-tag counts and an **All** chip
  - Click a chip → posts that don't match smoothly collapse (`max-height` + `opacity` transition); active chip is filled in accent purple
  - Empty-state message appears if a filter yields zero posts ("No posts match this tag yet." / 「目前沒有符合此標籤的文章。」 / "目前没有符合此标签的文章。")
  - All chip labels trilingual via a `SLUG_TO_KEY` map (`pokemon-go` → `pokemonGo` etc.)
  - Posts now display **all** their tags inline (was: only one tag visible)
  - Existing posts re-tagged for consistency: Pikmin Bloom → `pikmin-bloom` + `game`; City Contrast → `photography` + `hong-kong`; YouTube Banner → `channel-update`
- `sitemap.xml` — Pokémon GO post added
- README pages table updated

---

## [1.0.24] — 2026-05-27

### Added — Full SEO pass (3 tiers)

**Tier 1 · Per-page meta + favicons + social previews** (13 HTML pages)
- New favicon + apple-touch-icon on every page → `img/icon/site/spacesquare-icon.png` (clean URL copy of `My_Watermark_&_Icon_[20260527].png`)
- New social-share cover → `img/icon/site/og-cover.png` (clean URL copy of the YouTube banner)
- Per-page unique `<meta name="description">` (was: only on index)
- `<meta name="author">`, `<meta name="theme-color" content="#7c6eff">`, `<meta name="keywords">` on all pages
- `<link rel="canonical">` on every page → prevents duplicate-content issues
- **Open Graph** tags: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image` (+ `og:image:width/height` where known); `og:locale` + alternates for `en_US` / `zh_TW` / `zh_CN` on homepage
- **Twitter Card** `summary_large_image` with `twitter:title`, `twitter:description`, `twitter:image`
- Product pages additionally declare `product:price:amount` / `product:price:currency`
- Blog post pages declare `article:published_time`, `article:author`, `article:section`
- `pages/resume.html` declares `<meta name="robots" content="noindex, nofollow">` since it's gated

**Tier 2 · Crawler help** (root files)
- `robots.txt` — allows all; disallows `/pages/resume.html`; declares sitemap location
- `sitemap.xml` — 12 URLs with `lastmod`, `changefreq`, `priority`

**Tier 3 · JSON-LD structured data** (rich-result eligible)
- `index.html` — `Person` (name, jobTitle, nationality, sameAs YouTube/Discord/GitHub) + `WebSite`
- `pages/product-bloxfruit-account.html` — `Product` with `Offer` (HKD 700, InStock, areaServed HK/MO/TW, seller=SpaceSquare)
- `pages/product-firefighting-simulator-ignite.html` — `Product` with **two `Offer` entries** (Plan A HK$148 / Plan B HK$218)
- `pages/programs.html` — three `SoftwareApplication` entries (Disk Speed Tester / PDF Tool / Multimedia Downloader) with `downloadUrl`, `applicationCategory`, free `Offer`
- All 3 blog posts (`pages/post-pikmin-bloom.html`, `pages/post-city-contrast.html`, `pages/post-new-youtube-banner-icon.html`) — `BlogPosting` with headline, datePublished, author, image, mainEntityOfPage, articleSection

### Changed
- `<title>` tags expanded on several pages to be more descriptive (better SERP click-through): index, community, shop, programs, freelance, both products, all 3 blog posts
- README features list updated to mention SEO

---

## [1.0.23] — 2026-05-27

### Added
- **New blog post — "New YouTube Channel Branding — Banner & Icon"**
  - `pages/post-new-youtube-banner-icon.html` — channel-update post with full-width banner display, a side-by-side icon + description block, three explanatory body paragraphs, "Visit YouTube Channel →" CTA, and click-to-enlarge lightbox on both images
  - `img/blog/My_YouTube_channel_banner_[20260527].png` (3.2 MB) — wide 16:9 YouTube channel banner with the SpaceSquare wordmark + gaming/Roblox theme
  - `img/blog/My_Watermark_&_Icon_[20260527].png` (1.5 MB) — square channel avatar / video watermark; neon-blue frame + 4-point star + SpaceSquare wordmark
  - HTML src attributes use percent-encoded paths (`%26` for `&`, `%5B` / `%5D` for `[` `]`) so the exact user-supplied filenames are preserved on disk while remaining valid in markup
  - Full EN / 繁中 (頻道更新 / 全新 YouTube 頻道形象 — 橫額與頭像) / 简中 (频道更新 / 全新 YouTube 频道形象 — 横幅与头像) i18n on title, tag, dates, body paragraphs, icon description, and CTA
  - Listed at the top of `pages/community-blog.html` as the newest post (above Pikmin Bloom and City in Contrast); new `tagP3 / titleP3 / dateP3` keys wired in all three languages
- `README.md` — new post added to the pages table

---

## [1.0.22] — 2026-05-26

### Added
- **Multimedia Downloader** added to `pages/programs.html` as a third downloadable program (sits between PDF Tool and the GitHub Profile card)
  - `downloads/Multimedia_Downloader.zip` — 36 KB bundle (already placed by user) containing the desktop GUI (`Multimedia_Downloader.py`, tkinter), the Flask web app (`web_app.py`, `templates/index.html`, `static/{styles.css,script.js}`), shared engine (`core.py`, `i18n.py`), and project files (README, CHANGELOG, requirements.txt, .gitignore)
  - GitHub repo link: <https://github.com/SpaceSquare640/Multimedia_Downloader>
  - Built on `yt-dlp` + `ffmpeg`; supports 500+ sites (YouTube, TikTok, BiliBili, Facebook, Instagram, etc.); audio extraction to MP3 / FLAC / AAC / WAV / OGG / M4A / Opus / WMA; trilingual UI in both interfaces (English default / 繁中 / 简中)
  - Card uses icon 🎬 and four meta chips (📦 size · 🐍 Python 3.8+ · 📺 500+ sites · 🆓 free & open-source)
  - Dependency note rendered inline below the description: `pip install -r requirements.txt` (yt-dlp, Pillow, requests, Flask) + ffmpeg PATH link for audio/conversion
  - Full trilingual i18n on title, subtitle, body, meta chips, and both action buttons (mdTitle / mdSub / mdBody / mdSize / mdPlatform / mdSites / mdLicense / btnMdDownload / btnMdGithub)
  - GitHub Profile card fade-up class bumped `fade-up-2` → `fade-up-3` so all four cards still stagger correctly
- README pages table updated to list all three downloadable programs

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
