# Don Wallet Concept - Architecture Portfolio

A premium, minimalist architecture portfolio website built with SvelteKit and Tailwind CSS.

## Design Philosophy

This website embodies:
- **Precision** - Every element serves a purpose
- **Space** - Generous whitespace and breathing room
- **Minimalism** - Clean, uncluttered design
- **Structural Elegance** - Apple-level UI quality

## Tech Stack

- **SvelteKit** - Modern web framework
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type-safe development

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Global layout with nav/footer
│   ├── +page.svelte             # Home page
│   ├── projects/
│   │   ├── +page.svelte         # Projects grid
│   │   └── [slug]/
│   │       ├── +page.ts         # Project data loader
│   │       └── +page.svelte     # Single project page
│   ├── about/+page.svelte       # About page
│   ├── services/+page.svelte    # Services page
│   └── contact/+page.svelte     # Contact page
├── lib/
│   ├── components/
│   │   ├── Nav.svelte           # Navigation with scroll effect
│   │   ├── Footer.svelte        # Site footer
│   │   └── ProjectCard.svelte   # Project card component
│   └── data/
│       └── projects.ts          # Project data
└── app.css                      # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Adding Content

### Projects

Edit `src/lib/data/projects.ts` to add or modify projects. Each project requires:
- slug (URL-friendly identifier)
- title
- location
- year
- category
- thumbnail image
- hero image
- description
- gallery images

### Images

Place images in `static/images/` following the structure in `static/images/.gitkeep`

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:
- Primary: White (#FFFFFF)
- Off-White: #F5F5F7
- Charcoal: #111111
- Accent: #C6A75E (warm beige) or #8A8A8E (cool gray)

### Typography

The site uses Inter font (with SF Pro Display as inspiration). To use SF Pro Display:
1. Obtain the font files
2. Add to `static/fonts/`
3. Update `src/app.css` with @font-face declarations

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'build' directory
```

### Other Platforms

The site is a static SvelteKit app and can be deployed to any static hosting service.

## Performance

- Lighthouse score target: 90+
- Images should be optimized (WebP format recommended)
- Lazy loading implemented for images
- Smooth animations (300-500ms transitions)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Touch-friendly navigation

## License

All rights reserved - Don Wallet Concept

---

Built with precision and care.
