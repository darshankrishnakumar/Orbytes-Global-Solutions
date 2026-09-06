# RBit Global Infosolution — Enterprise Digital Technology Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/darshankrishnakumar/RBit-Global-Infosolution-)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premier enterprise-grade web platform engineered for **RBit Global Infosolution / Technosprint Info Solutions**. The platform merges the structured information architecture of **TCS**, the outcome-driven storytelling of **Cognizant**, the high-conversion consultation pathways of **F12.net**, and the modular ecosystem visualization of **Zoho** into a unified, high-performance web experience.

---

## 🌟 Key Architecture & Capabilities

### 1. Unified Alternating Dark & Light Section Cadence
- **Single-Experience Design Pattern**: Replaces conventional manual theme toggles with an intentional, rhythmic alternation between immersive dark rooms (for authority, telemetry, and cyber security depth) and crisp light canvases (for reading comfort, tables, and human case studies).
- **Translucent Obsidian Glass Navigation**: Permanent frosted obsidian header (`backdrop-blur-md`, `bg-[#030712]/95`) maintaining 100% legibility and enterprise branding across dark and light sections.
- **Dark Telemetry Consoles inside Light Sections**: Complex interactive simulations and diagrams are framed within executive consoles to ensure vibrant neon contrast and visual focus.

### 2. Auto-Cycling Hero: Ambient Video ⟷ Environmental Mesh
- **1.4-Second Liquid Cross-Dissolve**: Seamless cubic-bezier transition between pure high-definition video playback (6.5s) and an interactive holographic 3D Ecosystem Mesh (8.5s).
- **Persistent Canvas Mounting**: The interactive canvas stays permanently mounted in the DOM to eliminate canvas re-initialization lag, frame stutter, or WebKit compositor flashes.
- **Interactive Hover-Pause**: Hovering over the mesh pauses the transition timer so visitors can explore node connections and service cards uninterrupted.
- **Enterprise Accessibility**: Signature bottom-corner ambient pause control with automatic detection of OS `prefers-reduced-motion`.

### 3. Zero-Lag 120fps GPU Custom Cursor
- **Direct GPU Value Interpolation**: Coordinates stream directly through Framer Motion `useMotionValue` and `useSpring` (`damping: 25`, `stiffness: 600`, `mass: 0.15`), bypassing React Virtual DOM reconciliation for smooth 120fps tracking.
- **Boundary-Triggered Hover Detection**: Element targeting via `mouseover`/`mouseout` events eliminates main-thread CPU overhead on every pixel of movement.

### 4. Zero-Failure Local Asset Architecture
- **Offline-First Bundling**: Case study visuals and background media are bundled locally under `public/images/` and `public/videos/` with zero reliance on third-party CDNs, preventing 404s or broken image icons.
- **Resilient Image Fallbacks**: Integrated `onError` fallbacks and `loading="eager"` attributes for instantaneous rendering across all browsers (Chrome, Safari, Firefox, Edge).

### 5. Comprehensive Route Coverage (30 Pre-rendered Static Pages)
- **100% Static Site Generation (SSG)**: Sub-second page loads with zero runtime server bottlenecks.
- Complete hubs for **Solutions**, **Industries**, **Success Stories**, **Insights**, **Company/About**, and **Interactive Inquiries**.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) | Hybrid static generation, optimized routing, and SEO |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety and enterprise maintainability |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) | Responsive design system, custom themes, and glassmorphism |
| **Animation** | [Framer Motion 11](https://www.framer.com/motion/) | Orchestrated page transitions, spring physics, and telemetry |
| **Smooth Scroll** | [Lenis 1.1](https://lenis.darkroom.engineering/) | Inertial smooth scrolling and scroll-linked reveals |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG iconography |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Automated linting, type-checking, and build validation |

---

## 📁 Repository Structure

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated GitHub Actions CI workflow
├── public/
│   ├── images/
│   │   └── case-studies/        # Bundled high-resolution enterprise case study photography
│   │       ├── ecommerce-cloud.jpg
│   │       ├── legal-cybersecurity.jpg
│   │       └── manufacturing.jpg
│   └── videos/
│       ├── hero-background.mp4  # HD enterprise ambient hero video
│       └── hero-poster.jpg      # Video poster fallback image
├── src/
│   ├── app/                     # Next.js 14 App Router (30 static routes)
│   │   ├── about/               # About, Leadership, and Strategic Partners
│   │   ├── contact/             # Enterprise consultation booking flow
│   │   ├── industries/          # 6 vertical sector solution pages
│   │   ├── insights/            # Thought leadership and dynamic insight articles
│   │   ├── solutions/           # 6 core service and managed IT pages
│   │   ├── success/             # Quantified customer transformation case studies
│   │   ├── layout.tsx           # Global RootLayout with SmoothScroll & CustomCursor
│   │   └── page.tsx             # Homepage orchestrator
│   ├── components/
│   │   ├── home/                # HeroSection, Solutions, WhyTechnosprint, CaseStudyHero
│   │   ├── layout/              # Navbar (obsidian glass), Footer, MobileNav
│   │   ├── motion/              # CustomCursor (120fps GPU spring physics), SmoothScroll
│   │   └── visuals/             # Specialized interactive telemetry and canvas instruments
│   └── data/                    # Type-safe structured data layers (services, case studies, insights)
├── .editorconfig                # Universal indentation and charset rules
├── .gitattributes               # Cross-platform LF line endings and binary filters
├── .gitignore                    # Production Next.js and macOS ignore rules
├── CONTRIBUTING.md              # Contribution standards and PR guidelines
├── LICENSE                      # MIT Open Source License
├── package.json                 # Project scripts and dependencies
├── SECURITY.md                  # Security vulnerability reporting policy
├── tailwind.config.ts           # Custom color scales, fonts, and animations
└── tsconfig.json                # TypeScript strict configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.17.0` or later (Node.js 20 LTS recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darshankrishnakumar/RBit-Global-Infosolution-.git
   cd RBit-Global-Infosolution-
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles an optimized production build across all 30 static pages |
| `npm run start` | Runs the production Next.js server locally (`next start`) |
| `npm run start -- -p 3005` | Runs the production server on custom port `3005` |
| `npm run lint` | Runs ESLint and TypeScript checks across all source files |

---

## 🌐 Site Route Map

| Section | Route | Description |
| :--- | :--- | :--- |
| **Home** | `/` | Flagship enterprise experience with auto-cycling ambient hero |
| **Managed IT** | `/solutions/managed-it` | 24/7 proactive infrastructure operations & SLA management |
| **Cybersecurity** | `/solutions/managed-security` | MSSP defense, SOC operations, zero-trust architecture |
| **Cloud Services** | `/solutions/cloud` | Multi-cloud migration, AWS/Azure FinOps, disaster recovery |
| **Digital Solutions** | `/solutions/digital-solutions` | Modern web applications, API integrations, enterprise portals |
| **ITSM** | `/solutions/itsm` | ITIL v4 service desk, ticket lifecycle, SLA governance |
| **Consulting** | `/solutions/consulting` | Strategic CIO advisory, cybersecurity auditing, compliance |
| **Industries** | `/industries/*` | Dedicated hubs for Manufacturing, Finance, Healthcare, Retail, Education, and Legal |
| **Case Studies** | `/success` | Quantified ROI metrics, before/after telemetry, and testimonials |
| **Insights** | `/insights/*` | Deep-dive whitepapers and technology architectures |
| **Company** | `/about`, `/about/leadership`, `/about/partners` | Executive bios, global office locations, technology partner marquee |
| **Contact** | `/contact` | High-conversion consultation and audit request interface |

---

## 🔒 Security & Compliance
- Refer to [SECURITY.md](SECURITY.md) for our responsible disclosure guidelines.
- Compliant with enterprise security standards: zero hardcoded secrets, sanitized forms, and strict CSP-ready script headers.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE) — see the LICENSE file for details.

Developed with precision for **RBit Global Infosolution / Technosprint**.
