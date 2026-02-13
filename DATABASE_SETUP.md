# Database Setup Guide - Neon (Vercel's Recommended Database)

## Why Neon?

- ✅ **Never Expires** - Free tier doesn't expire
- ✅ **Vercel Integration** - One-click setup in Vercel
- ✅ **PostgreSQL** - Full-featured, reliable
- ✅ **Serverless** - Auto-scales, pay for what you use
- ✅ **Fast** - Optimized for serverless functions

## Setup Steps

### Step 1: Deploy to Vercel First

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo: `AboneChima/donwalletconcept`
3. Click "Deploy"
4. Wait for deployment to complete

### Step 2: Add Neon Database in Vercel

1. In your Vercel project dashboard, go to **Storage** tab
2. Click **Create Database**
3. Select **Neon Postgres**
4. Click **Continue**
5. Name your database: `donwallet-db`
6. Select region closest to you
7. Click **Create**

Vercel will automatically:
- Create the database
- Add `POSTGRES_URL` environment variable
- Redeploy your app

### Step 3: Initialize Database

1. Go to your Neon dashboard: [console.neon.tech](https://console.neon.tech)
2. Select your `donwallet-db` database
3. Click **SQL Editor**
4. Copy and paste the contents of `scripts/init-db.sql`
5. Click **Run**

This will:
- Create the `projects` table
- Add indexes for performance
- Insert all 19 initial projects

### Step 4: Test the Admin Panel

1. Go to your deployed site: `https://your-site.vercel.app/admin`
2. Try adding a new project
3. Try editing a project
4. Try deleting a project

Everything should now save permanently!

## Alternative: Manual Neon Setup

If you prefer to set up Neon separately:

### 1. Create Neon Account

1. Go to [neon.tech](https://neon.tech)
2. Sign up (free)
3. Create a new project: `donwallet-db`

### 2. Get Connection String

1. In Neon dashboard, click your project
2. Go to **Connection Details**
3. Copy the connection string (starts with `postgresql://`)

### 3. Add to Vercel

1. In Vercel project, go to **Settings** → **Environment Variables**
2. Add new variable:
   - Name: `POSTGRES_URL`
   - Value: Your Neon connection string
3. Click **Save**
4. Redeploy your app

### 4. Initialize Database

Follow Step 3 from above (SQL Editor)

## Database Schema

```sql
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    location TEXT NOT NULL,
    year INTEGER NOT NULL,
    category TEXT NOT NULL,
    size TEXT,
    thumbnail TEXT NOT NULL,
    hero TEXT NOT NULL,
    description TEXT NOT NULL,
    images JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

Your app now has these API endpoints:

- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project

## Features

✅ **Persistent Storage** - All changes saved to database
✅ **Real-time Updates** - Changes appear immediately
✅ **Automatic Backups** - Neon handles backups
✅ **Scalable** - Handles thousands of projects
✅ **Secure** - Environment variables keep credentials safe

## Troubleshooting

### "Failed to connect to database"

1. Check `POSTGRES_URL` is set in Vercel environment variables
2. Make sure you redeployed after adding the variable
3. Verify the connection string is correct in Neon dashboard

### "Table doesn't exist"

1. Run the `init-db.sql` script in Neon SQL Editor
2. Make sure you're connected to the right database

### "Projects not loading"

1. Check Vercel function logs for errors
2. Verify database has data: Run `SELECT * FROM projects` in Neon SQL Editor
3. Check browser console for errors

## Cost

**Neon Free Tier:**
- ✅ 0.5 GB storage (enough for thousands of projects)
- ✅ 100 hours compute per month (plenty for this app)
- ✅ Never expires
- ✅ No credit card required

**Vercel Free Tier:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth per month
- ✅ Automatic HTTPS
- ✅ No credit card required

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add Neon database
3. ✅ Run init script
4. ✅ Test admin panel
5. 🔒 Add authentication (optional but recommended)

## Security Note

The admin panel is currently open to anyone who knows the URL (`/admin`). For production, you should add authentication:

- Use Vercel's built-in authentication
- Or add a simple password protection
- Or use Auth0, Clerk, or similar

See `SECURITY.md` for authentication setup guide.

---

**Your database is now set up and will never expire! 🎉**
