# Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Add Your Content

#### Essential Images (place in `static/images/`)
- `hero-bg.jpg` - Homepage hero background
- `architect-portrait.jpg` - Your portrait for About page
- `projects/` folder - Project images (see structure below)

#### Project Images Structure
```
static/images/projects/
├── villa-thumb.jpg
├── villa-hero.jpg
├── villa-1.jpg
├── villa-2.jpg
├── villa-3.jpg
├── office-thumb.jpg
├── office-hero.jpg
... (and so on)
```

#### Update Project Data
Edit `src/lib/data/projects.ts` with your actual projects.

#### Update Contact Info
- Footer: `src/lib/components/Footer.svelte`
- Contact page: `src/routes/contact/+page.svelte`

## 📝 What You Get

✅ Fully responsive design  
✅ 5 pages: Home, Projects, About, Services, Contact  
✅ Project detail pages with dynamic routing  
✅ Smooth animations and transitions  
✅ Mobile-friendly navigation  
✅ SEO-ready structure  
✅ TypeScript support  
✅ Production-ready build system  

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change brand colors.

### Content
All content is in `src/routes/` - edit the `.svelte` files directly.

### Projects
Add/edit projects in `src/lib/data/projects.ts`.

## 🚢 Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📚 Need More Help?

- Full setup guide: `SETUP.md`
- SvelteKit docs: https://kit.svelte.dev
- Tailwind docs: https://tailwindcss.com

---

**You're ready to build something exceptional!**
