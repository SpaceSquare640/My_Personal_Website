# Change Log

All notable changes to the SpaceSquare website are recorded here.

---

## [1.0.37] — 2026-06-12

### Changed — Copenhagen post GUI polish (page-scoped)

- `pages/post-pokemon-go-copenhagen.html` visual upgrade (no other pages touched):
  - **Quick-jump bar** — five icon chips (🏟️🎡⚓🏰🏖️) under the intro that anchor-scroll to each
    spot card (`scroll-margin-top` compensates for the fixed nav; labels localized per language).
  - **Spot cards** — gradient circular number badges, per-spot emoji icon next to the name,
    accent left-border + soft shadow lift on hover.
  - **Pokémon pill chips** — featured-Pokémon lists now render as individual rounded chips
    (split from the localized list at runtime; plain text kept in static HTML for SEO).
  - **Closing note** — upgraded from a dashed box to a gradient banner with a 🎯 icon.
- No functional/structural changes — same IDs, i18n tables and `applyPageText()` flow.

---

## [1.0.36] — 2026-06-12

### Added — Blog post: Copenhagen Top 5 Pokémon GO Hotspot Coordinates

- New blog post `pages/post-pokemon-go-copenhagen.html` — a five-spot Copenhagen catch guide:
  Fælledparken, Tivoli Gardens, Nyhavn, Kongens Have and Amager Beach Park. Each spot has its own
  card with coordinates (copy button + Google Maps link), featured Pokémon list and a "why go" note,
  plus a three-card Trainer Tips section (weather, event rotation, bag management).
- Fully trilingual (EN / zh-hant / zh-hans) via the established `PAGE_TEXT` + `applyPageText()` pattern;
  spot/tip content is data-driven (arrays) to keep the i18n table compact.
- Registered in `pages/community-blog.html` with new `denmark` and `copenhagen` filter tags
  (translated in all three languages, added to `SLUG_TO_KEY`).
- SEO: per-page meta/OG/Twitter/canonical + JSON-LD `BlogPosting` with Copenhagen `GeoCoordinates`;
  new entry in `sitemap.xml`.
- `README.md` pages table updated.

---

## [1.0.35] — 2026-06-06

### Added / Changed — Golden-Ratio GUI rebuild, Gold & Silver themes, Settings modal

**Design & aesthetic overhaul (Golden Ratio, φ = 1.618)**
- New φ-based token system in `:root` (`css/main.css`): spacing scale `--sp-1…7` (ratio φ),
  type scale `--fs-1…8` (ratio √φ ≈ 1.272, so two type steps = one golden step), plus
  φ-derived `--radius` (0.618rem) / `--radius-lg` (1rem), `--lh-body` (1.618) and `--nav-h` (4.236rem).
- Re-pointed the shared component layer (nav, sections, cards, buttons, tags, footer, modals, divider,
  body line-height) and the homepage hero/nav-cards (`index.html`) to these tokens — values only,
  no markup or selector changes.

**New theme — Gold & Silver (two variants)**
- `[data-theme="gold-dark"]` — warm near-black base, metallic gold accent (`#d4af37`), silver text/secondary.
- `[data-theme="gold-light"]` — ivory base, brushed-silver surfaces, deep contrast-safe gold (`#9a7d1e`).
- Both include contrast fixes (nav links, ghost buttons, toggle icons) mirroring the existing light-theme
  block, plus a gold→silver→gold recolour of the animated headline gradient.

**New feature — Settings modal**
- ⚙️ button added to the nav on every page (`js/components.js`). Opens a settings panel
  (reusing the existing `.modal-overlay`/`.modal-box` infrastructure) with: **Theme** (4-way segmented
  control), **Language** (EN / 繁中 / 简中), **Liquid Glass** switch, **Reduce Motion** switch, and
  **Reset to defaults**. Fully translated (EN / zh-hant / zh-hans, new `settings` i18n block).
- **Reduce Motion** is a new opt-in UI parameter (`[data-motion="reduce"]`, key `ss-motion`) that damps
  animations/transitions site-wide.

**Persistence**
- All preferences persist in `localStorage` (`theme`, `ss-lang`, `ss-glass`, `ss-motion`) and are applied
  on script load for a correct first paint. Verified across reloads and across pages (homepage + shop).

**Architecture**
- Purely additive / value-swaps — no existing functional code removed. `applyTheme`/`getTheme` were
  generalized to support the two gold themes (the nav 🌙/☀️ quick-toggle keeps its dark↔light behavior);
  `setTheme` / `applyMotion`/`getMotion`/`setMotion` / `buildSettingsModal` added alongside the existing
  glass + résumé-modal patterns.

---

## [1.0.34] — 2026-06-06

### Added — Liquid Glass visual effect (opt-in)

- **New 🫧 nav toggle button** (`js/components.js`) — sits next to the theme toggle in `.nav-right`. Lets each visitor turn a frosted "liquid glass" look on or off. Preference is saved in `localStorage` under `ss-glass` and re-applied on every page load.
- **Off by default** — the site looks exactly as before unless a visitor opts in. Nothing global is forced on; the effect is purely additive and reversible.
- **Scoped styling** (`css/main.css`) — all glass rules live under the `[data-glass="on"]` attribute on `<html>`, so they apply *only* when enabled and touch nothing when off. Frosted translucent surfaces (`backdrop-filter: blur + saturate`, layered top-sheen gradient, soft border + shadow) are applied to: nav bar, mobile menu, `.card`, `.nav-card`, `.platform-*`, `.prog-card`, `.product-card`, `.modal-box`, `.code-card`, `.stat-card`, `.qr-img`, `.post-item`, `.post-tag`, `.sub-hero`, `.posts-body`, `.post-body`.
- **Theme-aware** — separate `--glass-*` CSS variables for dark and light themes so the frost reads correctly in both.
- **Graceful fallback** — an `@supports not (backdrop-filter)` block falls back to a solid `--surface` tint on browsers without backdrop-filter support.
- Button active state glows teal (`--accent2`) when the effect is on; `aria-pressed` reflects state for accessibility.

---

## [1.0.33] — 2026-05-28

### Added
- **New blog post — "Chicago Lincoln Park — Pokémon GO Hotspot Coordinates"** (`pages/post-pokemon-go-chicago.html`)
  - Text-only post built around coords `41.916425, -87.631556` (Lincoln Park, Chicago, Illinois, USA — open green space on the north side of downtown)
  - Same component family as the Taipei/Ikebukuro posts: coordinates card with Copy + Google Maps + Apple Maps CTAs, location/terrain card, 3 numbered highlight cards (**01 Route — Lakefront Trail · 02 Open Sky · Accurate GPS · 03 Gym Density · Weekend Raids**)
  - Coordinate Portal footer + hashtag row (#PokemonGO #PokemonGOCoordinates #ChicagoGrinding #LincolnPark #LakefrontTrail #GameGuide #PokemonGOHotspot #USA)
  - Four tags: **Pokémon Go Coordinate** (purple) · **USA** (teal) · **Chicago** (teal) · **Game** (red)
  - Full EN / 繁中 / 简中 i18n — 繁中 mirrors the user-supplied source verbatim and keeps the original Pokémon GO Taiwan/HK community terminology (補給站、誘餌、團體戰)
  - Full SEO meta (description, keywords, OG, Twitter Card, canonical, `article:tag` ×4) + **BlogPosting JSON-LD** with `contentLocation` `GeoCoordinates` (lat 41.916425, lon -87.631556)
- **Blog tag filter — two new tag slugs added**
  - `usa` ("USA" / "美國" / "美国")
  - `chicago` ("Chicago" / "芝加哥" / "芝加哥")
  - Wired into `SLUG_TO_KEY` + trilingual tag dictionary in `pages/community-blog.html`
- Post inserted at top of the blog list (now spans 4 cities: Hong Kong · Tokyo · Taipei · Chicago)
- `sitemap.xml` + README pages table updated

---

## [1.0.32] — 2026-05-28

### Added — Copyright protection (proprietary license)

This repository is published as **source-available, not open-source.** Three layers of explicit notice added to deter unauthorised copying / forking / hosting of the site.

- **`LICENSE`** — new full proprietary "All Rights Reserved" notice at the repo root (GitHub auto-displays this on the repo page). Spells out exactly what's prohibited (downloading, cloning, re-deploying, copying design/code/copy/media, training AI on the content, etc.), what's permitted (personal viewing in a browser), exempts the binaries in `downloads/` (those carry their own licenses), and notes third-party material (Google Fonts, game screenshots) remains under its original owners' rights. Lists contact channels for licensing requests (email · Discord · WhatsApp +852 6400 1277).
- **`README.md`** — new ⚠️ Copyright callout right under the title, linking to `LICENSE`, making the "source-available, not open-source" stance unmissable.
- **`<meta name="copyright" content="© 2026 SpaceSquare. All Rights Reserved.">`** — added to every HTML page (19 files total: `index.html` + all 18 pages under `pages/`). Sits next to the existing `<meta name="author">` tag in each `<head>`.
- Footer i18n string `footer.rights` already reads "© 2026 SpaceSquare. All rights reserved." / "© 2026 SpaceSquare。保留所有權利。" / "© 2026 SpaceSquare。保留所有权利。" — left as-is.

> Note: This is a deterrent / clarification, not legal advice. By default any work published on GitHub without an open-source license is already "All Rights Reserved" under copyright law — these additions just make the intent unmistakable to anyone who lands on the repo or views the page source.

---

## [1.0.31] — 2026-05-28

### Added
- **New blog post — "Caught Shiny Mewtwo at a Raid · Tokyo"** (`pages/post-pokemon-go-mewtwo.html`)
  - Photo: `img/blog/PokemonGo/PokemonGO_Mewtwo_20260528.JPG` (181 KB) — in-game catch card showing Mewtwo, CP 3658, Raid Battle, 豐島區 · 東京 · 日本, 2026-05-28
  - 4-stat catch grid (✨ Shiny Mewtwo / CP 3658 / Raid Battle / Location) — first stat row gets a sparkle prefix + accent colour to mark the shiny variant
  - Body identifies the shiny markers explicitly (green tail + green underbelly, vs. normal Mewtwo's purple) and cross-links to both the Groudon catch and the Ikebukuro coordinates posts
  - Two CTAs: **View Ikebukuro Coordinates →** and **See the Groudon catch →**
  - Same 3 tags as the Groudon post: **Pokémon Go** · **Japan** · **Game** (no new slugs)
  - Full EN / 繁中 (團戰捉到色違超夢) / 简中 (团战捉到色违超梦) i18n
  - Full SEO meta + 3× `article:tag` + BlogPosting JSON-LD with `contentLocation` (Toshima, Tokyo) + `keywords` including "Shiny"
- Post inserted at top of `pages/community-blog.html` post list (newest)
- `sitemap.xml` + README pages table updated

---

## [1.0.30] — 2026-05-28

### Changed — img/blog/ reorganised into per-topic subfolders
Flat `img/blog/` was getting noisy. All existing blog images moved into themed subfolders (paths in HTML `src`, `og:image`, and JSON-LD `image` updated accordingly via `git mv` so file history is preserved):

| New path | What |
|---|---|
| `img/blog/Road_Bike/Bike_20260522_19.46.jpg` | Nam Sang Wai night ride hero |
| `img/blog/PokemonGo/PokemonGo_SpaceSquare.png` | Trainer-code QR for the "Let's Play Pokémon GO!" post |
| `img/blog/PokemonGo/PokemonGO_Groudon_20260528.JPG` | **NEW** — Groudon catch card |
| `img/blog/Pikmin_Bloom/pikmin-bloom-invite.jpg` | Pikmin Bloom invite QR card |
| `img/blog/Photography/city-contrast.jpg` | 城市縫隙 photography hero |
| `img/blog/Icon/My_Watermark_&_Icon_[20260527].png` | Channel icon / watermark |
| `img/blog/Banner/My_YouTube_channel_banner_[20260527].png` | YouTube banner |

> Note: subfolder named `Pikmin_Bloom/` (matches the full game name and the existing `post-pikmin-bloom.html` slug). User-provided list said `Pikemin/`; renamed to the full `Pikmin_Bloom/` at user request.

Updated paths in: `post-nam-sang-wai-night-ride.html`, `post-pokemon-go.html`, `post-pikmin-bloom.html`, `post-city-contrast.html`, `post-new-youtube-banner-icon.html` (covers both `src` and absolute `og:image` URLs).

### Added
- **New blog post — "Caught Groudon at a Primal Raid · Tokyo"** (`pages/post-pokemon-go-groudon.html`)
  - Photo: `img/blog/PokemonGo/PokemonGO_Groudon_20260528.JPG` (in-game catch card — Groudon, CP 2275, caught at a Primal Raid in 豐島區 · 東京 · 日本 on 2026-05-28)
  - 4-stat catch grid (Pokémon / CP / Caught at / Location) under the photo
  - 2-paragraph body that cross-links to the Ikebukuro Pokémon GO coordinates post (same neighbourhood as the catch)
  - Two CTAs: "View Ikebukuro Coordinates →" (internal) and "Visit Pokémon GO →" (external)
  - Click-to-enlarge lightbox on the catch photo
  - Three tags (all existing slugs, no new ones): **Pokémon Go** (purple) · **Japan** (teal) · **Game** (red)
  - Full EN / 繁中 (Primal 團戰捉到固拉多) / 简中 (Primal 团战捉到固拉多) i18n
  - Full SEO meta + 3× `article:tag` + BlogPosting JSON-LD with `contentLocation` (Toshima, Tokyo)
- Post inserted at top of `pages/community-blog.html` post list (newest)
- `sitemap.xml` + README pages table updated

---

## [1.0.29] — 2026-05-27

### Added
- **New blog post — "Taipei Main Station — Top-Tier Pokémon GO Coordinates"** (`pages/post-pokemon-go-taipei.html`)
  - Text-only post built around coords `25.047989, 121.516793` (Datong District, Taipei City; intersection of Chengde Rd Sec.1 × Civic Boulevard Sec.1, next to Taipei Main Station + Q Square / 京站時尚廣場)
  - Same component family as the Ikebukuro post: coordinates card with copy + Google Maps + Apple Maps CTAs; location/terrain card; 3 numbered advantage cards (PokéStop Density · Cherry-Blossom Rain 24/7 Lures · Raid Efficiency)
  - **Coordinate Portal** footer note + hashtag row (#PokemonGO #PokemonGOCoordinates #TaipeiGrinding #TaipeiMainStation #GameGuide #PokemonGOHotspot #Taiwan)
  - Four tags: **Pokémon Go Coordinate** (purple) · **Taiwan** (teal) · **Taipei** (teal) · **Game** (red)
  - Full EN / 繁中 / 简中 i18n — content matches the user-supplied 繁中 source (retains official game terminology: 補給站／精靈球／傷藥／誘餌模組／團體戰／星碎)
  - Full SEO meta (description, keywords, OG, Twitter Card, canonical, `article:tag` ×4) + **BlogPosting JSON-LD** with `contentLocation` `GeoCoordinates` (lat 25.047989, lon 121.516793)
- **Blog tag filter — two new tag slugs added**
  - `taiwan` ("Taiwan" / "台灣" / "台湾")
  - `taipei` ("Taipei" / "台北" / "台北")
  - Wired into `SLUG_TO_KEY` + trilingual tag dictionary in `pages/community-blog.html`
- New post added at the top of the blog list (5 of 7 posts now tagged with at least one geographic tag)
- `sitemap.xml` + README pages table updated

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
