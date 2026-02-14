-- RESET DATABASE - Run this to start completely fresh
-- This will delete ALL projects and add the correct 13 projects

-- Step 1: Delete all existing projects
DELETE FROM projects;

-- Step 2: Reset the ID counter
ALTER SEQUENCE projects_id_seq RESTART WITH 1;

-- Step 3: Insert all 13 projects with correct categories
INSERT INTO projects (slug, title, location, year, category, size, description, thumbnail, hero, images) VALUES

-- 1 MANSION (project1)
('grand-mansion-1', 'Grand Mansion', 'Lagos, Nigeria', 2024, 'Mansion', '750 sqm', 
'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.', 
'/images/project1.jpg', '/images/project1.jpg', '["/images/project1.jpg", "/images/project8.jpg", "/images/project9.jpg"]'),

-- 1 DUPLEX (project2)
('modern-duplex-1', 'Modern Duplex Villa', 'Abuja, Nigeria', 2024, 'Duplex', '420 sqm', 
'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.', 
'/images/project2.jpg', '/images/project2.jpg', '["/images/project2.jpg", "/images/project3.jpg", "/images/project4.jpg"]'),

-- 2 BUNGALOWS (project3, project4)
('modern-bungalow-1', 'Contemporary Bungalow', 'Port Harcourt, Nigeria', 2024, 'Bungalow', '280 sqm', 
'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow.', 
'/images/project3.jpg', '/images/project3.jpg', '["/images/project3.jpg", "/images/project4.jpg", "/images/project3.jpg"]'),

('elegant-bungalow-2', 'Minimalist Bungalow', 'Enugu, Nigeria', 2023, 'Bungalow', '250 sqm', 
'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.', 
'/images/project4.jpg', '/images/project4.jpg', '["/images/project4.jpg", "/images/project3.jpg", "/images/project4.jpg"]'),

-- 9 INTERIORS (project5, 6, 7, 8, 9, 10, 11, 12, 13)
('modern-interior-1', 'Modern Interior Design', 'Lagos, Nigeria', 2024, 'Interiors', 'Full Home', 
'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes.', 
'/images/project5.jpg', '/images/project5.jpg', '["/images/project5.jpg", "/images/project6.jpg", "/images/project7.jpg"]'),

('luxury-interior-2', 'Luxury Interior Design', 'Abuja, Nigeria', 2024, 'Interiors', 'Full Home', 
'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail.', 
'/images/project6.jpg', '/images/project6.jpg', '["/images/project6.jpg", "/images/project7.jpg", "/images/project8.jpg"]'),

('contemporary-interior-3', 'Contemporary Interior', 'Port Harcourt, Nigeria', 2023, 'Interiors', 'Full Home', 
'Contemporary interior design with clean lines and modern aesthetics. Features include custom lighting and designer furniture.', 
'/images/project7.jpg', '/images/project7.jpg', '["/images/project7.jpg", "/images/project8.jpg", "/images/project9.jpg"]'),

('elegant-interior-4', 'Elegant Interior', 'Enugu, Nigeria', 2024, 'Interiors', 'Full Home', 
'Elegant interior spaces designed for comfort and style. Features sophisticated color schemes and luxury finishes.', 
'/images/project8.jpg', '/images/project8.jpg', '["/images/project8.jpg", "/images/project9.jpg", "/images/project10.jpg"]'),

('premium-interior-5', 'Premium Interior', 'Calabar, Nigeria', 2023, 'Interiors', 'Full Home', 
'Premium interior design showcasing exceptional craftsmanship. Features include bespoke furniture and designer lighting.', 
'/images/project9.jpg', '/images/project9.jpg', '["/images/project9.jpg", "/images/project10.jpg", "/images/project11.jpg"]'),

('signature-interior-6', 'Signature Interior', 'Ibadan, Nigeria', 2024, 'Interiors', 'Full Home', 
'Our signature interior design representing the pinnacle of luxury living. Features include custom millwork and premium finishes.', 
'/images/project10.jpg', '/images/project10.jpg', '["/images/project10.jpg", "/images/project11.jpg", "/images/project12.jpg"]'),

('executive-interior-7', 'Executive Interior', 'Lagos, Nigeria', 2023, 'Interiors', 'Full Home', 
'Executive interior design with sophisticated aesthetics. Features include home office and entertainment areas.', 
'/images/project11.jpg', '/images/project11.jpg', '["/images/project11.jpg", "/images/project12.jpg", "/images/project13.jpg"]'),

('deluxe-interior-8', 'Deluxe Interior', 'Abuja, Nigeria', 2024, 'Interiors', 'Full Home', 
'Deluxe interior spaces designed for modern living. Features include smart home integration and custom furniture.', 
'/images/project12.jpg', '/images/project12.jpg', '["/images/project12.jpg", "/images/project13.jpg", "/images/project5.jpg"]'),

('refined-interior-9', 'Refined Interior', 'Port Harcourt, Nigeria', 2023, 'Interiors', 'Full Home', 
'Refined interior design showcasing timeless elegance. Features include designer furniture and custom lighting.', 
'/images/project13.jpg', '/images/project13.jpg', '["/images/project13.jpg", "/images/project5.jpg", "/images/project6.jpg"]');

-- Step 4: Verify the insert
SELECT COUNT(*) as total_projects FROM projects;
SELECT category, COUNT(*) as count FROM projects GROUP BY category ORDER BY category;

-- You should see:
-- total_projects: 13
-- Bungalow: 2
-- Duplex: 1
-- Interiors: 9
-- Mansion: 1
