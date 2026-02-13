# Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your images**
   - Place images in `static/images/` following the structure in `static/images/.gitkeep`
   - Use high-quality architectural photography
   - Optimize for web (recommended: under 500KB per image)

3. **Customize content**
   - Edit project data in `src/lib/data/projects.ts`
   - Update contact info in `src/lib/components/Footer.svelte` and `src/routes/contact/+page.svelte`
   - Modify about page content in `src/routes/about/+page.svelte`

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm run preview  # Test production build locally
   ```

## Image Requirements

### Critical Images Needed:
1. **Hero Background** (`/images/hero-bg.jpg`)
   - Dimensions: 1920x1080 or larger
   - Should be a stunning architectural shot
   - Will be darkened with overlay

2. **Architect Portrait** (`/images/architect-portrait.jpg`)
   - Dimensions: 800x800 (square)
   - Professional headshot or portrait

3. **Project Images** (for each project)
   - Thumbnail: 800x600
   - Hero: 1920x1080
   - Gallery: 1200x800 each

### Image Optimization Tips:
- Use WebP format for best performance
- Compress with tools like TinyPNG, ImageOptim, or Squoosh
- Maintain aspect ratios specified above
- Use descriptive filenames

## Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  charcoal: '#111111',      // Dark text/backgrounds
  'off-white': '#F5F5F7',   // Light backgrounds
  accent: '#C6A75E',        // Accent color (change to your brand)
  'gray-accent': '#8A8A8E'  // Muted text
}
```

### Typography
To use SF Pro Display (Apple's font):
1. Obtain font files legally
2. Place in `static/fonts/`
3. Update `src/app.css`:
```css
@font-face {
  font-family: 'SF Pro Display';
  src: url('/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

### Contact Form
The contact form in `src/routes/contact/+page.svelte` currently logs to console.
To make it functional:
1. Set up a backend API endpoint
2. Or use a service like Formspree, Netlify Forms, or Web3Forms
3. Update the `handleSubmit` function

Example with Formspree:
```svelte
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Vercel will auto-detect SvelteKit and deploy
4. Note: The adapter-auto will automatically use Vercel adapter when deployed

### Netlify
1. Build: `npm run build`
2. Publish directory: `build`
3. Deploy

### Manual Deployment
```bash
npm run build
# Upload contents of 'build' directory to your host
```

## SEO Optimization

1. **Add meta descriptions** to each page's `<svelte:head>`
2. **Create sitemap.xml** in `static/`
3. **Add Open Graph images** for social sharing
4. **Update robots.txt** in `static/`

## Performance Checklist

- [ ] All images optimized and compressed
- [ ] WebP format used where possible
- [ ] Lazy loading enabled (already implemented)
- [ ] Fonts loaded efficiently
- [ ] Lighthouse score 90+ achieved
- [ ] Mobile performance tested

## Support

For issues or questions about the codebase, refer to:
- SvelteKit docs: https://kit.svelte.dev
- Tailwind CSS docs: https://tailwindcss.com
- TypeScript docs: https://www.typescriptlang.org

---

Ready to launch your premium architecture portfolio!
