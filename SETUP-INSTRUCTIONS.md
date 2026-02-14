# Setup Instructions for Don Wallet Website

## ✅ Current Status
- Website is deployed on Vercel: https://donwalletconcept.vercel.app
- Admin panel is at: https://donwalletconcept.vercel.app/admin
- Database: Neon PostgreSQL (connected)

## 🔧 To Fix Missing Images Issue

### Step 1: Run Database Setup
1. Go to your Neon dashboard: https://console.neon.tech
2. Select your database
3. Click on "SQL Editor"
4. Copy ALL the SQL from `database-setup.sql` file
5. Paste it into the SQL Editor
6. Click "Run" or press Ctrl+Enter
7. You should see: "13 rows inserted"

This will:
- Create the projects table
- Add all 13 projects with correct images
- Set up proper categories

### Step 2: Verify Environment Variable
1. Go to Vercel dashboard
2. Go to your project → Settings → Environment Variables
3. Make sure `DATABASE_URL` is set to your Neon connection string
4. If you changed it, redeploy the site

## 📊 Project Structure (13 Projects)

### Categories:
- **1 Mansion** - project1.jpg
- **1 Duplex** - project2.jpg  
- **2 Bungalows** - project3.jpg, project4.jpg
- **9 Interiors** - project5.jpg through project13.jpg

### Featured on Home Page:
- Project 1 (Mansion)
- Project 3 (Bungalow)
- Project 6 (Interior)

### Slider on Projects Page:
- Project 8 (Interior)
- Project 9 (Interior)
- Project 13 (Interior)
- Project 5 (Interior)

## 🎨 Admin Panel Features

### How to Add a Project:
1. Go to /admin
2. Click "Add New Project"
3. Fill in the form:
   - Title, Location, Year
   - Category (Bungalow, Duplex, Mansion, Interiors)
   - Size (optional)
   - Description
4. Click "Choose File" to select main image
5. Optionally add 3 gallery images
6. Click "Add Project"
7. Project appears on website immediately!

### How Images Work:
- Images are converted to base64 and stored in database
- Works from any device (phone, tablet, computer)
- No need to manually upload to folders
- Just select photos and they're saved automatically

### Edit/Delete:
- Click "Edit" on any project to modify it
- Click "Delete" to remove it (with confirmation)
- Changes sync to website instantly

## 🔍 Troubleshooting

### If projects don't show on website:
1. Check Vercel logs for errors
2. Verify DATABASE_URL is set correctly
3. Make sure you ran the SQL setup
4. Try redeploying on Vercel

### If admin panel shows "Failed to load":
1. Check DATABASE_URL environment variable
2. Make sure Neon database is running
3. Check Vercel function logs

### If images don't load:
1. Make sure you ran the database setup SQL
2. Check that image files exist in /static/images/
3. Verify filenames match (project1.jpg, project2.jpg, etc.)

## 📝 Important Notes

- Admin panel and website are now synced via Neon database
- Any changes in admin panel appear on website immediately
- All 13 projects must be in database for website to work properly
- Images project1.jpg through project13.jpg must exist in /static/images/

## 🚀 Next Steps

1. Run the database setup SQL (most important!)
2. Verify all 13 projects appear in admin panel
3. Check that website shows all projects correctly
4. Test adding a new project from admin panel
5. Verify it appears on the website

---

**Need Help?** Check Vercel deployment logs or Neon database logs for specific error messages.
