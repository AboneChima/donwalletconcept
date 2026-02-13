# Admin Panel Guide

## Accessing the Admin Panel

1. **Via Navigation**: Click "Admin" in the top navigation menu
2. **Direct URL**: Navigate to `/admin` (e.g., `http://localhost:5173/admin`)

## Current Functionality

The admin panel is **fully functional** for the frontend interface. Here's what works:

### ✅ What Works Now:

1. **View All Projects**
   - See all 19 projects in a scrollable list
   - Each project shows thumbnail, title, category, and year

2. **Add New Project**
   - Fill out the form with all project details
   - Choose from 4 categories: Bungalow, Duplex, Mansion, Interiors
   - Add thumbnail and 3 gallery images
   - Form validation ensures all required fields are filled

3. **Edit Projects**
   - Click "Edit" on any project
   - Form auto-fills with existing data
   - Update any field and save

4. **Delete Projects**
   - Click "Delete" on any project
   - Confirmation modal prevents accidental deletion
   - Project is removed from the list

5. **User Interface**
   - Clean, modern design
   - Smooth animations
   - Responsive layout
   - Real-time updates

### ⚠️ What Needs Backend Integration:

Currently, the admin panel works with **local state only**. This means:
- Changes are visible immediately in the admin panel
- Changes are **NOT saved** when you refresh the page
- Changes are **NOT reflected** on the main website

### 🔧 To Make It Fully Persistent:

You need to connect it to a database. Here are your options:

#### Option 1: Supabase (Recommended - Free & Easy)
```bash
npm install @supabase/supabase-js
```

#### Option 2: Firebase
```bash
npm install firebase
```

#### Option 3: Your Own Backend API
- Create a REST API with Node.js/Express
- Connect to PostgreSQL, MongoDB, etc.

## Next Steps for Production

1. **Add Authentication**
   - Protect the `/admin` route
   - Add login/logout functionality
   - Use Supabase Auth or similar

2. **Connect to Database**
   - Replace local state with API calls
   - Save projects to database
   - Fetch projects from database

3. **Add Image Upload**
   - Instead of URLs, allow file uploads
   - Use Cloudinary, Supabase Storage, or AWS S3
   - Auto-generate thumbnails

4. **Add More Features**
   - Bulk delete
   - Search/filter projects
   - Drag-and-drop image reordering
   - Category management

## Current Admin Panel Features

### Form Fields:
- **Project Title** (required)
- **Location** (required)
- **Year** (required, 2000-2030)
- **Category** (dropdown: Bungalow, Duplex, Mansion, Interiors)
- **Size** (optional, e.g., "280 sqm")
- **Description** (required, textarea)
- **Thumbnail Image URL** (required)
- **Gallery Images** (3 URLs required)

### Actions:
- **Add Project**: Creates new project
- **Edit Project**: Updates existing project
- **Delete Project**: Removes project (with confirmation)
- **Cancel Edit**: Resets form to add mode

## Design Philosophy

The admin panel follows these principles:
- **Non-technical**: Simple language, no jargon
- **Modern**: Clean, minimal interface
- **Futuristic**: Smooth animations, modern UI patterns
- **User-friendly**: Clear labels, helpful placeholders
- **Responsive**: Works on all screen sizes

## Tips for Using the Admin Panel

1. **Image URLs**: Use full URLs (e.g., `/images/project1.jpg` or `https://...`)
2. **Categories**: Stick to the 4 main categories for consistency
3. **Descriptions**: Keep them concise but informative (2-3 sentences)
4. **Year**: Use the actual completion year
5. **Size**: Include units (sqm, sq ft, etc.)

## Support

For questions or issues, the admin panel code is located at:
- Main file: `src/routes/admin/+page.svelte`
- Project data: `src/lib/data/projects.ts`
