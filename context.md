# HACKS 2026 — Comprehensive Website Context & Architecture

> **Official Website Specification & Documentation**  
> **Event:** HACKS 2026 — Hub for Advanced Creativity, Knowledge & Solutions  
> **Presented By:** NARI — New Age Research Initiatives  
> **Tagline:** Ideas Today. Impact Tomorrow.  
> **Script Line:** Build. Innovate. Create Change.  
> **Repository:** `nari` (React 19 + Vite + Tailwind CSS v4)  
> **Status:** Production-Ready  

---

## 1. Executive Summary & Brand Identity

**HACKS 2026** is a prestigious 24-hour on-campus offline innovation hackathon organized by **New Age Research Initiatives (NARI)** in Greater Noida, Uttar Pradesh. It gathers undergraduate students, postgraduate researchers, and early-stage innovators from institutions nationwide to build functional hardware, software, IoT, and multidisciplinary prototypes tackling real-world challenges.

### Core Brand Attributes
- **Event Name:** HACKS 2026
- **Acronym Meaning:** Hub for Advanced Creativity, Knowledge & Solutions
- **Institutional Organizer:** New Age Research Initiatives (NARI)
- **NARI Positioning:** *"Connecting Ideas. Enabling Innovation. Delivering Impact."*
- **Event Hashtag:** `#NariHack2026`
- **Format:** 24-Hour Non-Stop Offline / On-Campus Hackathon
- **Location:** Greater Noida, Uttar Pradesh
- **Team Size:** 2 to 5 members per squad
- **Registration Fee:** ₹500 per member (processed via Unstop)

---

## 2. Official URLs & External Integrations

| Platform / Entity | Destination URL | Purpose / Usage |
| :--- | :--- | :--- |
| **Official Unstop Registration** | `https://unstop.com/p/hacks-2026-hub-for-advanced-creativity-knowledge-solutions-nari-nexus-1759592` | All primary CTAs (`Register Now`, Hero button, Navbar button, RegisterBand CTA, Footer button) |
| **Official NARI Organization** | `https://narinexus.com/` | Primary NARI logo link, organizational credits, footer attribution |
| **Official Instagram** | `https://www.instagram.com/nari.hackathons/` | Social media link in footer with stroke-based Instagram brand icon |
| **Official X (Twitter)** | `https://x.com/narihackathons` | Social media link in footer with official vector X icon |
| **Exclusive Talent Partner** | `https://www.makunaiglobal.ai/` | **Makunai Global** (*Best AI CRM Software India with Automation*) — Sole hiring partner providing direct Pre-Placement Offers (PPOs) and paid internships for winners |
| **Live Production Mirror** | `https://hacks-2026.netlify.app/` | Existing public deployment mirror |

---

## 3. Technology Stack & Tooling

- **Core Framework:** React 19 (`react` ^19.2.8, `react-dom` ^19.2.8)
- **Build Tool:** Vite 8 (`vite` ^8.3.0, `@vitejs/plugin-react` ^6.1.1)
- **Routing:** React Router DOM v7 (`react-router-dom` ^7.18.4)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` ^4.3.3, `tailwindcss` ^4.3.3)
- **Utility Libraries:** `clsx`, `tailwind-merge`
- **Animation & Motion:** `framer-motion` ^13.4.0 (for micro-interactions; respects `prefers-reduced-motion`)
- **Icons:** `lucide-react` ^1.47.0 + custom SVG brand icons (Instagram stroke icon, X vector icon, Insignia gold seals)
- **Linter & Code Quality:** Oxlint (`oxlint` ^1.81.0, 0 errors, 0 warnings across 104 rules)
- **Language & Runtime:** JavaScript / TypeScript (Node.js runtime)

---

## 4. Design System & CSS Styling Tokens

All theme tokens are defined in [`src/index.css`](./src/index.css) using Tailwind CSS v4 `@theme` directives.

### 4.1 Color Palette
The color palette represents an academic, high-authority technology event with deep corporate navy grounding, signature magenta accents, and technical blueprints.

| Token | Hex Value | Purpose / Usage |
| :--- | :--- | :--- |
| `--color-navy` | `#0D1240` | Primary brand deep navy; headings, body text, high-contrast backgrounds |
| `--color-navy-2` | `#1E2A5E` | Secondary dark navy; footer background, announcement bar border |
| `--color-plum` | `#8A1C7C` | Signature HACKS magenta/purple accent; buttons, active pills, badges, highlights |
| `--color-plum-dark` | `#721466` | Hover state for buttons and interactive plum links |
| `--color-lavender` | `#EEF0FB` | Soft structural background tint; alternating section backgrounds |
| `--color-sky` | `#C9CFF0` | Subtle muted cool blue; footer text, secondary subtitles |
| `--color-line` | `#DDE2F5` | Hairline structural borders for cards, grids, dividers |
| `--color-gold` | `#F6C978` | Warm gold highlight; prize underline decoration, milestone seals |
| `--color-muted` | `#4A5073` | Accessible secondary body and description text |
| `body-bg` | `#F8F9FD` | Clean off-white background color |

### 4.2 Typography Hierarchy
- **Display & Headings (Serif):** `'Playfair Display', Georgia, serif`
  - Used for large prize displays, major section headings, institutional headers, and event titles.
  - Weights: `600`, `700`.
- **Interface & Body (Sans):** `'Inter', system-ui, -apple-system, sans-serif`
  - Used for body text, technical facts, table rows, button labels, and navigation.
  - Weights: `400`, `500`, `600`, `700`.
- **Human Handwritten Accent (Script):** `'Caveat', cursive, serif`
  - Used exclusively for the event motto: *"Build. Innovate. Create Change."*
  - Weight: `600`.

### 4.3 Shadows & Elevations
- **Resting:** `--shadow-resting: 0 1px 2px 0 rgba(13, 18, 64, 0.05)`
- **Hover:** `--shadow-hover: 0 8px 20px -4px rgba(13, 18, 64, 0.12), 0 2px 6px -1px rgba(13, 18, 64, 0.04)`

### 4.4 Architectural Blueprint Grid
- Generated by the [`Tiles`](./src/components/ui/tiles.tsx) component.
- **Specifications:** `tileSize="xl"` (64px to 80px), `border-line/25` low-contrast lines, `15%` global opacity.
- **Radial Vignette Mask:** `[mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,black_30%,transparent_85%)]` ensures the grid creates a subtle blueprint background without interfering with the hero logo, text, or buttons.

### 4.5 Navigation & Scroll Behavior
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

---

## 5. Architecture & Codebase Structure

```
c:\Users\prakh\nari\
├── public/
│   ├── favicon.png                  # Browser favicon PNG
│   ├── favicon.svg                  # Vector SVG favicon
│   ├── hacks-logo-transparent.png   # High-res transparent official HACKS 2026 logo
│   ├── hacks-logo.png               # Official HACKS 2026 logo
│   ├── makunai-logo.png             # Converted crisp transparent Makunai Global logo
│   ├── makunai-logo.avif            # AVIF source for Makunai Global logo
│   ├── nari-logo.png                # Official NARI emblem
│   └── nari-logo.svg                # Vector NARI emblem
├── src/
│   ├── assets/
│   │   └── makunai-logo.png         # Bundled asset copy
│   ├── components/
│   │   ├── ui/
│   │   │   ├── tiles.tsx            # Technical blueprint background grid
│   │   │   └── demo.tsx             # Component testing harness
│   │   ├── About.jsx                # Hackathon overview & quick-facts table
│   │   ├── AnnouncementBar.jsx      # Fixed 36px top banner
│   │   ├── EligibilityRules.jsx     # Cohorts, team constraints, rulebook
│   │   ├── FAQ.jsx                  # Accessible accordion for FAQs
│   │   ├── Footer.jsx               # Institutional footer with official links
│   │   ├── Hero.jsx                 # Top hero with animated prize counter
│   │   ├── MentorsTeaser.jsx        # Home page callout to mentors
│   │   ├── Navbar.jsx               # 64px sticky navigation with mobile drawer
│   │   ├── Prizes.jsx               # Unified horizontal rewards & Makunai partner card
│   │   ├── RegisterBand.jsx         # Full-width navy registration banner
│   │   ├── RegisterButton.jsx       # Standardized primary Unstop CTA button
│   │   ├── Schedule.jsx             # 6-step milestone timeline
│   │   ├── ScrollToTop.jsx          # Route change and hash scroll coordinator
│   │   ├── Themes.jsx               # 5 technical tracks with expandable focus areas
│   │   └── Venue.jsx                # On-campus location & map block
│   ├── config/
│   │   └── hackathonConfig.js       # SINGLE SOURCE OF TRUTH for all data
│   ├── lib/
│   │   └── utils.ts                 # Classname merge helpers (`cn`)
│   ├── pages/
│   │   ├── HomePage.jsx             # Primary landing page
│   │   └── MentorsPage.jsx          # Dedicated mentor lineup & invitees page
│   ├── App.jsx                      # App root with router & layout
│   ├── index.css                    # Tailwind CSS v4 setup & theme variables
│   └── main.jsx                     # Vite DOM entrypoint
├── index.html                       # HTML shell, fonts, SEO & OpenGraph tags
├── package.json                     # Node dependencies & npm scripts
└── vite.config.js                   # Vite configuration with aliases (@ -> src)
```

---

## 6. Single Source of Truth: `hackathonConfig.js`

All dynamic event facts, fees, limits, and URLs reside strictly in [`src/config/hackathonConfig.js`](./src/config/hackathonConfig.js). Components import and read from this object directly:

```javascript
export const config = {
  brand: {
    organization: "NARI",
    organizationFullName: "New Age Research Initiatives",
    hackathonName: "HACKS",
    edition: "2026",
    acronymExpansion: "Hub for Advanced Creativity, Knowledge & Solutions",
    tagline: "Ideas Today. Impact Tomorrow.",
    scriptLine: "Build. Innovate. Create Change.",
    heroDescription: "A 24-hour, on-campus hackathon for students and early innovators...",
    hashtag: "#NariHack2026",
    logoUrl: "/nari-logo.png",
    nariWebsite: "https://narinexus.com/",
    nariTagline: "Connecting Ideas. Enabling Innovation. Delivering Impact.",
    contactEmail: "",
  },
  event: {
    format: "24-hour, non-stop, on-campus (offline)",
    duration: "24 Hours",
    mode: "Offline / On-Campus",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    dates: "To be announced",
    venue: "To be announced",
    venueLocation: "Greater Noida, Uttar Pradesh",
    mapUrl: "",
    registrationDeadline: "To be announced",
  },
  registration: {
    unstopUrl: "https://unstop.com/p/hacks-2026-hub-for-advanced-creativity-knowledge-solutions-nari-nexus-1759592",
    feePerMember: 500,
    currencySymbol: "₹",
    minTeamSize: 2,
    maxTeamSize: 5,
    openTo: "Undergraduate students, postgraduate students and early innovators",
    rulebookPdfUrl: "",
  },
  prizes: {
    totalPool: "₹1,00,000+",
    subline: "plus exciting rewards and exclusive PPO / internship opportunities by Makunai Global for winners",
    description: "₹1,00,000+ prize pool plus exciting rewards...",
    breakdownAnnounced: false,
    hiringPartnersAnnounced: true,
    hiringPartner: {
      name: "Makunai Global",
      headline: "Best AI CRM Software India with Automation",
      url: "https://www.makunaiglobal.ai/",
      logo: "/makunai-logo.png",
      offer: "Exclusive PPO & Internship Opportunities for Winners",
    },
    tiers: [],
  },
  socials: {
    instagram: "https://www.instagram.com/nari.hackathons/",
    twitter: "https://x.com/narihackathons",
    linkedin: "",
    facebook: "",
  },
  // themes, schedule, eligibility, faqs...
};
```

---

## 7. Detailed Section & Component Breakdown

### 7.1 Announcement Bar (`AnnouncementBar.jsx`)
- **Positioning:** Fixed at `top-0`, 36px height (`h-9`), `z-50`.
- **Background:** Deep navy `#0D1240` with hairline bottom line.
- **Continuous Moving Ticker:**
  - Continuously moving right-to-left ticker with a seamless, infinite loop (30s linear CSS animation).
  - Duplicated dual-track flex structure guaranteeing zero jumps, resets, or gaps on any screen width.
  - Subtle edge-fade gradient mask on left and right borders (`.ticker-mask`).
  - Vertically centered typography with subtle plum separator dots.
  - Full support for `prefers-reduced-motion` (pauses/disables animation) and pause-on-hover.
- **Copy:** `₹1,00,000+ PRIZE POOL • PPO & INTERNSHIP OPPORTUNITIES • 24-HOUR OFFLINE HACKATHON`.

### 7.2 Header & Navbar (`Navbar.jsx`)
- **Positioning:** Fixed at `top-9` (36px offset below announcement bar), 64px height (`h-16`), `z-40`.
- **Styling:** White `bg-white/95` with `backdrop-blur-sm` and hairline bottom border.
- **Brand Logo:** Links to `/` (smoothly scrolls to top if already on homepage) with tactile click micro-interaction.
- **Desktop Navigation Links:** `About`, `Themes`, `Schedule`, `Prizes`, `Rules`, `Mentors` (route), and `FAQ`.
  - **Animated Underline:** Refined CSS pseudo-element `scaleX(0)` → `scaleX(1)` expanding from center on hover.
  - **Scroll Spy Active State:** Automatically detects and highlights the section currently in view with plum text, visible underline, and subtle text glow.
  - **Smooth Direct Navigation:** Section links scroll directly to their respective headings with `scroll-mt-[100px]` without jumping to the top of the page.
- **Primary CTA (`RegisterButton.jsx`):**
  - Subtle plum glowing border (`.glow-btn-plum`: `box-shadow: 0 0 0 1px rgba(138, 28, 124, 0.4), 0 0 18px -2px rgba(138, 28, 124, 0.4)` on hover).
  - Subtle 1.5px upward hover lift.
  - Smooth arrow micro-translation (2–4px to the right) on hover (`group-hover:translate-x-1`).
  - Tactile press compression (`active:scale-[0.97]` for ~90ms).
  - Retains official Unstop registration link (`target="_blank" rel="noopener noreferrer"`).
- **Mobile Menu Drawer:**
  - Accessible hamburger button with animated SVG icon toggle.
  - Backdrop blur overlay on `inset-0 top-[100px]`.
  - Full-screen slide-down drawer with large touch targets (`py-3.5`), active section indicators, automatic body scroll locking/unlocking, and instant smooth navigation on selection.

### 7.3 Hero Section (`Hero.jsx`)
- **Section ID:** `id="hero"`
- **Visual Centerpiece:** Large official transparent HACKS 2026 logo (`/hacks-logo-transparent.png`).
- **Motto Script:** *"Build. Innovate. Create Change."* in gold/plum Caveat script font.
- **Prize Display:**
  - Animated easing count-up counter ending at **`₹1,00,000+`** in bold serif typography with gold underline decoration.
  - Accompanied by bespoke SVG Insignia seal.
- **CTAs:**
  - `REGISTER NOW` (Pill button with shadow, active scale, outbound icon).
  - `Explore themes →` (Smooth scroll anchor link to `#themes`).
- **Key Facts Strip:** 4 columns separated by hairline dividers:
  - 📅 **Dates:** To be announced (24 hours, non-stop)
  - 📍 **Location:** On-campus (Offline)
  - 👥 **Team Size:** 2 to 5 members per team
  - 🎓 **Eligibility:** Open to UG, PG & early innovators

### 7.4 About Section (`About.jsx`)
- **Section ID:** `id="about"`
- **Layout:** 2-column asymmetric layout with generous `py-14 md:py-20` padding.
- **Left Column:** Hackathon mission narrative and NARI ethos.
- **Right Column:** Clean institutional quick-facts table with horizontal hairlines for format, team size, entry fee, prize pool, career opportunities, and eligibility.

### 7.5 Themes & Tracks Section (`Themes.jsx`)
- **Section ID:** `id="themes"`
- **Layout:** Architectural row list with interactive accordions.
- **Tracks:**
  1. `01` · **AI & Software** (Autonomous AI workflows, cybersecurity, scalable cloud tools)
  2. `02` · **Hardware & Robotics** (Embedded systems, robotics, edge computing, physical prototypes)
  3. `03` · **Healthcare & Assistive Tech** (Diagnostic tools, assistive technology, patient wellness)
  4. `04` · **Smart Cities & Sustainability** (Clean energy, IoT resource tracking, intelligent mobility)
  5. `05` · **Open Innovation** (High-impact multidisciplinary projects tackling urgent global issues)
- **Interactivity:** Clicking any track expands its **Target Focus Areas** as clean pill chips.

### 7.6 Timeline & Schedule Section (`Schedule.jsx`)
- **Section IDs:** `id="schedule"`, with aliases `id="how-it-works"` and `id="timeline"`.
- **Layout:** Vertical milestone timeline with centered numbered badges on hairline vertical rule.
- **6 Milestones:**
  1. Register on Unstop
  2. Form your team of 2 to 5
  3. Choose a theme
  4. Build for 24 hours, non-stop
  5. Present to judges and mentors
  6. Results, prizes and opportunities

### 7.7 Prizes & Career Opportunities (`Prizes.jsx`)
- **Section ID:** `id="prizes"`
- **Design Structure:** Single unified horizontal architectural card (`border border-line bg-white rounded-xl shadow-resting`).
- **Upper Horizontal Presentation:**
  - **Left Segment:** `₹1,00,000+` Total Prize Pool in large serif font with gold underline.
  - **Connector:** Elegant serif `+` divider.
  - **Right Segment:** `PPO & Internships` with pills for *Pre-Placement Offers (PPOs)* and *Paid Industry Internships*.
- **Bottom Corner Bar:**
  - **Left Corner:** Status badge: *"Category and position breakdown will be announced shortly."*
  - **Right Corner:** Exclusive partnership credit:
    - Label: *PPO & Internship Partner:*
    - Clickable card for **Makunai Global** with crisp logo (`/makunai-logo.png`), external outbound link to `https://www.makunaiglobal.ai/`, and title *"Makunai Global | Best AI CRM Software India with Automation"*.

### 7.8 Mentors Teaser (`MentorsTeaser.jsx`)
- Subtle transition banner on the home page highlighting industry and academic mentors, linking to `/mentors`.

### 7.9 Eligibility & Rules Section (`EligibilityRules.jsx`)
- **Section IDs:** `id="rules"`, with alias `id="eligibility"`.
- **Layout:** 2 columns:
  - **Eligible Cohorts:** Numbered cards for undergraduate engineers, postgraduate researchers, and interdisciplinary creators.
  - **Core Rules:** Bulleted guidelines on original work, hardware safety, intellectual property, and team conduct.
  - **Rulebook Link:** Download PDF button (gracefully handles pending state).

### 7.10 Frequently Asked Questions (`FAQ.jsx`)
- **Section ID:** `id="faq"` (with `scroll-mt-[100px]` for exact scroll targeting).
- **Interactivity & Micro-Animations:**
  - Accessible accordion with smooth GPU-accelerated CSS grid row expansion (`grid-rows-[0fr]` → `grid-rows-[1fr]`) and opacity fade, eliminating abrupt display jumps.
  - Smooth 45° rotation of the plus indicator (`+` rotates into `×`) with subtle plum glow.
  - Hover state on closed items featuring subtle magenta border glow and light background illumination.
  - Open state highlights the question in plum with an active border highlight.
- **Topics Covered:** Hardware permissions, eligibility across colleges, submission procedures, team formation, and prize distribution.

### 7.11 Registration Banner (`RegisterBand.jsx`)
- Dark navy high-impact banner with gold uppercase subhead *"OFFICIAL REGISTRATION OPEN"*, pricing per member, and prominent Unstop button with glowing border and arrow interaction.

### 7.12 Venue & Location (`Venue.jsx`)
- Clean centered section confirming the Greater Noida, Uttar Pradesh campus venue.

### 7.13 Institutional Footer (`Footer.jsx`)
- **Layout:** Deep navy background with structural 2-column grid.
- **Left Column:** NARI official logo linked to `https://narinexus.com/` (with hover lift and subtle glow), HACKS 2026 title, acronym expansion, tagline, and institutional research description.
- **Right Column:**
  - **Event Navigation:** Smooth scroll anchor links to `#about`, `#themes`, `#schedule`, `#prizes`, `#rules`, `/mentors`, `#faq` with animated underline on hover.
  - **Official Links Pill Strip:**
    - `Register on Unstop ↗` (opens official Unstop portal in new tab, equipped with subtle glowing border and tactile press).
    - `X (Twitter)` with official vector X logo (opens `https://x.com/narihackathons` in new tab, with subtle plum glow, 1px hover lift, and icon scale).
    - `Instagram` with official stroke Instagram icon (opens `https://www.instagram.com/nari.hackathons/` in new tab, with subtle plum glow, 1px hover lift, and icon scale).
- **Bottom Bar:** Copyright notice and hand-drawn script motto *"Build. Innovate. Create Change."*

### 7.14 Dedicated Mentors Page (`MentorsPage.jsx`)
- **Route:** `/mentors`
- Contains header, industry invitees strip (HCLTech, IBM, DRDO, etc.), mentor roster grid (with graceful empty state until announced), and mentor application email mailto.

---

## 8. SEO, Metadata & Accessibility

### Meta Tags (`index.html`)
- **Page Title:** `HACKS 2026 | Hub for Advanced Creativity, Knowledge & Solutions`
- **Description:** `HACKS 2026 is a 24-hour offline innovation hackathon presented by New Age Research Initiatives (NARI), bringing students and innovators together to build solutions for real-world challenges.`
- **OpenGraph & Twitter Cards:** Configured with image `/hacks-logo.png` and title *"HACKS 2026 — IDEAS TODAY. IMPACT TOMORROW."*
- **Theme Color:** `#8A1C7C` (HACKS Magenta).

### Accessibility Best Practices
- **Skip Link:** Accessible `<a href="#main-content">Skip to main content</a>` positioned off-screen until focused.
- **Focus Rings:** Visible custom focus outline in plum (`outline: 2px solid var(--color-plum)`).
- **Screen Readers:** Heading hierarchy starting from semantic `<h1>`, SVGs marked with `aria-hidden="true"`, accordions equipped with `aria-expanded` and `aria-controls`.
- **Motion Controls:** Animations and count-ups immediately short-circuit to static end values when `prefers-reduced-motion` is detected.

---

## 9. Verification & Commands Cheat Sheet

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (starts on http://localhost:5173/)
npm run dev

# 3. Check for linting issues (oxlint)
npm run lint

# 4. Compile production bundle (vite build)
npm run build

# 5. Preview production build locally
npm run preview
```
