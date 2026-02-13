-- Create projects table in your Neon database
-- Run this SQL in your Neon console

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    category VARCHAR(50) NOT NULL,
    size VARCHAR(100),
    description TEXT NOT NULL,
    thumbnail TEXT NOT NULL,
    hero TEXT NOT NULL,
    images JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_year ON projects(year DESC);

-- Insert the 13 existing projects
INSERT INTO projects (slug, title, location, year, category, size, description, thumbnail, hero, images) VALUES
('grand-mansion-1', 'Grand Mansion', 'Lagos, Nigeria', 2024, 'Mansion', '750 sqm', 'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.', '/images/project1.jpg', '/images/project1.jpg', '["/ images/project1.jpg", "/images/project8.jpg", "/images/project9.jpg"]'),
('modern-duplex-1', 'Modern Duplex Villa', 'Abuja, Nigeria', 2024, 'Duplex', '420 sqm', 'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.', '/images/project2.jpg', '/images/project2.jpg', '["/images/project2.jpg", "/images/project3.jpg", "/images/project4.jpg"]'),
('modern-bungalow-1', 'Contemporary Bungalow', 'Port Harcourt, Nigeria', 2024, 'Bungalow', '280 sqm', 'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow. Perfect for comfortable family living.', '/images/project3.jpg', '/images/project3.jpg', '["/images/project3.jpg", "/images/project4.jpg", "/images/project3.jpg"]'),
('elegant-bungalow-2', 'Minimalist Bungalow', 'Enugu, Nigeria', 2023, 'Bungalow', '250 sqm', 'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.', '/images/project4.jpg', '/images/project4.jpg', '["/images/project4.jpg", "/images/project3.jpg", "/images/project4.jpg"]'),
('modern-interior-1', 'Modern Interior Design', 'Lagos, Nigeria', 2024, 'Interiors', 'Full Home', 'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes. Perfect blend of style and functionality.', '/images/project5.jpg', '/images/project5.jpg', '["/images/project5.jpg", "/images/project6.jpg", "/images/project7.jpg"]'),
('luxury-interior-2', 'Luxury Interior Design', 'Abuja, Nigeria', 2024, 'Interiors', 'Full Home', 'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail. Creating spaces that inspire.', '/images/project6.jpg', '/images/project6.jpg', '["/images/project6.jpg", "/images/project7.jpg", "/images/project8.jpg"]'),
('contemporary-interior-3', 'Contemporary Interior', 'Port Harcourt, Nigeria', 2023, 'Interiors', 'Full Home', 'Contemporary interior design with clean lines and modern aesthetics. Features include custom lighting, designer furniture, and premium materials.', '/images/project7.jpg', '/images/project7.jpg', '["/images/project7.jpg", "/images/project8.jpg", "/images/project9.jpg"]'),
('elegant-interior-4', 'Elegant Interior', 'Enugu, Nigeria', 2024, 'Interiors', 'Full Home', 'Elegant interior spaces designed for comfort and style. Features sophisticated color schemes, luxury finishes, and thoughtful space planning.', '/images/project8.jpg', '/images/project8.jpg', '["/images/project8.jpg", "/images/project9.jpg", "/images/project10.jpg"]'),
('premium-interior-5', 'Premium Interior', 'Calabar, Nigeria', 2023, 'Interiors', 'Full Home', 'Premium interior design showcasing exceptional craftsmanship. Features include bespoke furniture, designer lighting, and luxury materials.', '/images/project9.jpg', '/images/project9.jpg', '["/images/project9.jpg", "/images/project10.jpg", "/images/project11.jpg"]'),
('signature-interior-6', 'Signature Interior', 'Ibadan, Nigeria', 2024, 'Interiors', 'Full Home', 'Our signature interior design representing the pinnacle of luxury living. Features include custom millwork, designer pieces, and premium finishes.', '/images/project10.jpg', '/images/project10.jpg', '["/images/project10.jpg", "/images/project11.jpg", "/images/project12.jpg"]'),
('executive-interior-7', 'Executive Interior', 'Lagos, Nigeria', 2023, 'Interiors', 'Full Home', 'Executive interior design with sophisticated aesthetics. Features include home office, entertainment areas, and luxury amenities.', '/images/project11.jpg', '/images/project11.jpg', '["/images/project11.jpg", "/images/project12.jpg", "/images/project13.jpg"]'),
('deluxe-interior-8', 'Deluxe Interior', 'Abuja, Nigeria', 2024, 'Interiors', 'Full Home', 'Deluxe interior spaces designed for modern living. Features include smart home integration, custom furniture, and premium materials.', '/images/project12.jpg', '/images/project12.jpg', '["/images/project12.jpg", "/images/project13.jpg", "/images/project5.jpg"]'),
('refined-interior-9', 'Refined Interior', 'Port Harcourt, Nigeria', 2023, 'Interiors', 'Full Home', 'Refined interior design showcasing timeless elegance. Features include designer furniture, custom lighting, and sophisticated color palettes.', '/images/project13.jpg', '/images/project13.jpg', '["/images/project13.jpg", "/images/project5.jpg", "/images/project6.jpg"]');
