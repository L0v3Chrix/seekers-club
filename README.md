# The Seekers Club

> A Sanctuary for the Soul

[![Next.js](https://img.shields.io/badge/Next.js-15.5.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-ff0055?logo=framer)](https://www.framer.com/motion/)

A cosmic-designed sanctuary website for The Seekers Club—a welcoming meditation and healing space in Austin, TX. Features an immersive gallery of 18 sacred spaces, all rendered with custom CSS/SVG placeholders and sacred geometry.

🌐 **Live Site:** [Coming Soon]
📍 **Location:** 1203 Quail Park Dr, Austin, TX 78758
⏰ **Hours:** Daily, 8 AM - 8 PM

---

## ✨ Features

### 🎨 Cosmic Design System
- **Stunning Visual Aesthetic:** Deep cosmic purples, blues, and golden accents
- **Sacred Geometry:** Custom SVG implementations (Flower of Life, Metatron's Cube, Sri Yantra, etc.)
- **Animated Placeholders:** 18 unique CSS/SVG placeholders with particles and animations
- **Glassmorphism UI:** Modern backdrop blur effects throughout
- **Custom Typography:** Cinzel (display), Inter (body), Philosopher (accent)

### 📸 Gallery System
- **18 Sacred Spaces:** Complete gallery of sanctuary areas
- **Category Filtering:** Filter by Common Areas, Outdoor Spaces, or Activity Spaces
- **Lightbox Modal:** Full-screen viewing with keyboard navigation
- **Responsive Grid:** Beautiful layouts on all device sizes

### 🌟 Key Pages
- **Home:** Hero section, featured spaces, activities overview
- **Gallery:** Full gallery with filtering and lightbox
- **About:** Andy's story and the vision behind the space
- **Activities:** Detailed offerings (meditation, breathwork, book studies, etc.)
- **Contact:** Location info with "Text Andy" SMS integration

### 📱 SMS Integration
- **Text Andy Button:** Pre-fills "seeker seeking seeker" message
- **Platform Detection:** iOS/Android SMS URI format handling
- **Fallback Display:** Phone number copy functionality

### 🚀 Performance & Technical
- **Next.js 15 App Router:** Modern React with server components
- **TypeScript:** Full type safety throughout
- **Framer Motion:** Smooth animations and transitions
- **Static Generation:** Fast page loads with SSG
- **Accessibility:** WCAG 2.1 AA compliant

---

## 🛠️ Tech Stack

```yaml
Framework: Next.js 15.5.5 (App Router)
Language: TypeScript 5.x (strict mode)
Styling: Tailwind CSS 3.4+ with custom design system
Animation: Framer Motion 11+
Fonts: Google Fonts (Cinzel, Inter, Philosopher)
Deployment: Vercel (recommended)
```

---

## 📦 Project Structure

```
/site/
├── app/                       # Next.js App Router pages
│   ├── layout.tsx            # Root layout with fonts, Header, Footer
│   ├── page.tsx              # Landing page
│   ├── about/page.tsx        # About page
│   ├── activities/page.tsx   # Activities page
│   ├── contact/page.tsx      # Contact page
│   └── gallery/page.tsx      # Gallery with filtering
│
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── CosmicBackground.tsx
│   │   ├── SacredGeometry.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── PlaceholderImage.tsx
│   │   └── TextAndyButton.tsx
│   │
│   ├── layout/               # Layout components
│   │   ├── Header.tsx        # Navigation with mobile menu
│   │   └── Footer.tsx        # Site footer
│   │
│   └── gallery/              # Gallery-specific components
│       ├── CategoryFilter.tsx
│       ├── GalleryCard.tsx
│       ├── GalleryGrid.tsx
│       └── Lightbox.tsx
│
├── lib/                      # Core utilities and data
│   ├── constants.ts          # Site constants (location, hours, activities)
│   ├── types.ts              # TypeScript definitions
│   └── placeholders.ts       # All 18 space configurations
│
├── docs/                     # Project documentation
│   ├── 2025-10-15-project-kickoff.md
│   ├── 2025-10-15-scope.md
│   ├── 2025-10-15-design-system.md
│   ├── 2025-10-15-technical-spec.md
│   ├── 2025-10-15-placeholder-specifications.md
│   ├── 2025-10-15-content-structure.md
│   └── 2025-10-15-client-feedback-updates.md
│
└── public/                   # Static assets (when needed)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/L0v3Chrix/seekers-club.git
   cd seekers-club/site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Color Palette

**Cosmic Purples:**
- `cosmic-purple-950`: #1a0b2e (Deepest space)
- `cosmic-purple-900`: #2d1b4e (Dark matter)
- `cosmic-purple-800`: #3f2a6b (Nebula core)
- `cosmic-purple-700`: #5c3d99 (Purple haze)
- `cosmic-purple-600`: #7c4dbd (Vibrant purple)

**Cosmic Blues:**
- `cosmic-blue-900`: #0a1128 (Deep space)
- `cosmic-blue-800`: #1a2f78 (Galaxy core)
- `cosmic-blue-700`: #2541a1 (Stellar blue)
- `cosmic-blue-600`: #3b5bdb (Bright star)

**Ethereal Golds:**
- `cosmic-gold-500`: #d4a947 (Golden light)
- `cosmic-gold-400`: #e6c566 (Warm glow)
- `cosmic-gold-300`: #f5e099 (Soft radiance)

### Typography

- **Display Font:** Cinzel (headings, titles)
- **Body Font:** Inter (paragraphs, UI)
- **Accent Font:** Philosopher (taglines, special text)

### Sacred Geometry

Available types:
- Flower of Life
- Seed of Life
- Metatron's Cube
- Sri Yantra
- Vesica Piscis
- Torus
- Hexagon
- Crescent Moon

---

## 📸 Gallery Spaces

### Common Areas (7 spaces)
1. Living Room Meditation Space
2. Secondary Meditation Space
3. Main Gathering Room
4. Cozy Gathering Space
5. Crystal Healing Bowl Room
6. Wisdom Library
7. Reading Nook

### Outdoor Spaces (6 spaces)
8. Sacred Backyard Space
9. Sacred Fire Circle
10. Healing Sauna
11. Garden Meditation Area
12. Secluded Meditation Nook
13. Community Garden

### Activity Spaces (5 spaces)
14. Play & Connection Space (Ping Pong)
15. Movement & Strength Space
16. Private Meditation Room
17. Quiet Reflection Room
18. Dance & Flow Space

---

## 🔧 Configuration

### Site Constants

Edit `/lib/constants.ts` to update:
- Location and address
- Open hours
- Contact information
- Activities offered
- Navigation links

### Placeholder Spaces

Edit `/lib/placeholders.ts` to modify:
- Space configurations
- Color palettes
- Animation patterns
- Sacred geometry settings
- Particle effects

---

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with zero configuration

### Manual Deployment

```bash
npm run build
# Deploy the .next folder and required files
```

---

## 🤝 Contributing

This is a custom website for The Seekers Club sanctuary. If you have suggestions or find issues, please reach out to Andy at **(737) 703-2243**.

---

## 📄 License

Custom website built for The Seekers Club. All rights reserved.

---

## 🙏 Acknowledgments

- **Andy** - Custodian and visionary behind The Seekers Club
- **Sacred Geometry** - Ancient wisdom informing modern design
- **Open Source Community** - Next.js, React, Tailwind CSS teams

---

## 📞 Contact

**The Seekers Club**
1203 Quail Park Dr
Austin, TX 78758

**Text Andy:** (737) 703-2243
**Hours:** Daily, 8 AM - 8 PM

*"seeker seeking seeker"* ✨

---

**Built with intention** | **Powered by cosmic energy** | **Made with ❤️ in Austin**
