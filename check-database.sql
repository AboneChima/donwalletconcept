-- Run this in Neon SQL Editor to see what's currently in your database

-- Check how many projects you have
SELECT COUNT(*) as total_projects FROM projects;

-- See all projects with their categories
SELECT id, title, category, thumbnail FROM projects ORDER BY id;

-- Count by category
SELECT category, COUNT(*) as count FROM projects GROUP BY category;
