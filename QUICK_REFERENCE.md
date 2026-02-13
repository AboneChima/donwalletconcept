# Quick Reference Guide

## 🚀 Development

```bash
# Start dev server
npm run dev
# Visit: http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Key Files to Edit

### Content
- **Projects**: `src/lib/data/projects.ts`
- **Homepage**: `src/routes/+page.svelte`
- **About**: `src/routes/about/+page.svelte`
- **Services**: `src/routes/services/+page.svelte`
- **Contact**: `src/routes/contact/+page.svelte`

### Styling
- **Colors**: `tailwind.config.js`
- **Global CSS**: `src/app.css`

### Components
- **Navigation**: `src/lib/components/Nav.svelte`
- **Footer**: `src/lib/components/Footer.svelte`
- **Project Card**: `src/lib/components/ProjectCard.svelte`
- **Page Loader**: `src/lib/components/PageLoader.svelte`

### Images
- **Location**: `static/images/`
- **Hero**: `hero section image banner.jpg`
- **Architect**: `About the Architect photo.jpg`
- **Projects**: `project.jpg`, `project1.jpg`, etc.

## 🎨 Customization

### Change Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  charcoal: '#111111',    // Change this
  accent: '#C6A75E',      // Change this
  // ...
}
```

### Update Logo
Edit `src/lib/components/Nav.svelte` and `src/lib/components/Footer.svelte`:
```svelte
<span class="text-white font-bold text-lg">DW</span>
<!-- Change "DW" to your initials -->
```

### Modify Hero Height
Edit `src/routes/+page.svelte`:
```svelte
<section class="relative min-h-[60vh] lg:min-h-[70vh]">
<!-- Adjust 60vh and 70vh values -->
```

### Change Animation Speed
Edit any page:
```svelte
in:fly={{ y: 30, duration: 800, delay: 200 }}
<!-- Adjust duration and delay values -->
```

## 📱 Responsive Breakpoints

- **sm**: 640px (small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)

Example usage:
```svelte
<h1 class="text-4xl sm:text-5xl lg:text-6xl">
<!-- 4xl on mobile, 5xl on tablets, 6xl on laptops -->
```

## 🖼️ Adding New Projects

Edit `src/lib/data/projects.ts`:
```typescript
{
  slug: 'project-name',
  title: 'Project Title',
  location: 'City, Country',
  year: 2024,
  category: 'Residential',
  size: '450 sqm',
  thumbnail: '/images/thumb.jpg',
  hero: '/images/hero.jpg',
  description: 'Project description...',
  images: ['/images/1.jpg', '/images/2.jpg']
}
```

## 🎯 Common Tasks

### Change Contact Info
Edit `src/lib/components/Footer.svelte` and `src/routes/contact/+page.svelte`

### Update Page Titles
Each page has:
```svelte
<svelte:head>
  <title>Page Title - Don Wallet Concept</title>
</svelte:head>
```

### Adjust Loader Duration
Edit `src/lib/components/PageLoader.svelte`:
```typescript
setTimeout(() => {
  loading = false;
}, 1500); // Change 1500 to desired milliseconds
```

## 🐛 Troubleshooting

### CSS not loading?
```bash
# Clear cache and restart
rm -rf .svelte-kit
npm run dev
```

### Images not showing?
- Check file paths in `static/images/`
- Ensure filenames match exactly (case-sensitive)
- Verify image format (jpg, png, webp)

### Build errors?
```bash
# Check for TypeScript errors
npm run check

# Rebuild
npm run build
```

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Auto-deploys on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `build`

### Other Platforms
- Build output is in `build/` folder
- Upload to any static host

## 💡 Tips

- Use WebP images for better performance
- Keep images under 500KB
- Test on real mobile devices
- Check Lighthouse scores
- Optimize for Core Web Vitals

---

**Need help? Check UPDATES_SUMMARY.md for detailed changes!**
