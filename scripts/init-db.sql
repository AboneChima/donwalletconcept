-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
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

-- Create index on category for faster filtering
CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Insert initial projects
INSERT INTO projects (slug, title, location, year, category, size, thumbnail, hero, description, images) VALUES
('modern-bungalow-1', 'Contemporary Bungalow', 'Lagos, Nigeria', 2024, 'Bungalow', '280 sqm', '/images/project24.jpg', '/images/project24.jpg', 'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow. Perfect for comfortable family living.', '["/ images/project24.jpg", "/images/project25.jpg", "/images/project26.jpg"]'),

('elegant-bungalow-2', 'Minimalist Bungalow', 'Abuja, Nigeria', 2024, 'Bungalow', '250 sqm', '/images/project25.jpg', '/images/project25.jpg', 'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.', '["/ images/project25.jpg", "/images/project26.jpg", "/images/project19.jpg"]'),

('luxury-bungalow-3', 'Premium Bungalow', 'Port Harcourt, Nigeria', 2023, 'Bungalow', '300 sqm', '/images/project26.jpg', '/images/project26.jpg', 'A premium bungalow with sophisticated design elements. Features spacious rooms, modern amenities, and beautiful landscaping.', '["/ images/project26.jpg", "/images/project19.jpg", "/images/project17.jpg"]'),

('executive-bungalow-4', 'Executive Bungalow', 'Enugu, Nigeria', 2024, 'Bungalow', '270 sqm', '/images/project19.jpg', '/images/project19.jpg', 'An executive bungalow designed for modern living. Features include home office, entertainment area, and smart home technology.', '["/ images/project19.jpg", "/images/project17.jpg", "/images/project24.jpg"]'),

('signature-bungalow-5', 'Signature Bungalow', 'Calabar, Nigeria', 2023, 'Bungalow', '290 sqm', '/images/project17.jpg', '/images/project17.jpg', 'A signature bungalow showcasing our design excellence. Features premium finishes, open spaces, and contemporary architecture.', '["/ images/project17.jpg", "/images/project24.jpg", "/images/project25.jpg"]'),

('modern-duplex-1', 'Modern Duplex Villa', 'Lagos, Nigeria', 2024, 'Duplex', '420 sqm', '/images/project12.jpg', '/images/project12.jpg', 'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.', '["/ images/project12.jpg", "/images/project13.jpg", "/images/project14.jpg"]'),

('executive-duplex-2', 'Executive Duplex', 'Abuja, Nigeria', 2023, 'Duplex', '450 sqm', '/images/project13.jpg', '/images/project13.jpg', 'An executive duplex designed for sophisticated living. Features include home theater, gym, and rooftop terrace.', '["/ images/project13.jpg", "/images/project14.jpg", "/images/project16.jpg"]'),

('luxury-duplex-3', 'Luxury Duplex', 'Port Harcourt, Nigeria', 2024, 'Duplex', '480 sqm', '/images/project14.jpg', '/images/project14.jpg', 'A luxury duplex with contemporary design, featuring high ceilings, large windows, and sophisticated interior spaces.', '["/ images/project14.jpg", "/images/project16.jpg", "/images/project5.jpg"]'),

('premium-duplex-4', 'Premium Duplex', 'Enugu, Nigeria', 2023, 'Duplex', '440 sqm', '/images/project16.jpg', '/images/project16.jpg', 'A premium duplex blending modern architecture with functional design. Features smart home automation and energy-efficient systems.', '["/ images/project16.jpg", "/images/project5.jpg", "/images/project20.jpg"]'),

('contemporary-duplex-5', 'Contemporary Duplex', 'Calabar, Nigeria', 2024, 'Duplex', '410 sqm', '/images/project5.jpg', '/images/project5.jpg', 'A contemporary duplex with sleek design and modern amenities. Features include spacious balconies and premium materials.', '["/ images/project5.jpg", "/images/project20.jpg", "/images/project12.jpg"]'),

('elegant-duplex-6', 'Elegant Duplex', 'Ibadan, Nigeria', 2023, 'Duplex', '430 sqm', '/images/project20.jpg', '/images/project20.jpg', 'An elegant duplex showcasing refined architecture. Features include designer interiors, landscaped gardens, and modern facilities.', '["/ images/project20.jpg", "/images/project12.jpg", "/images/project13.jpg"]'),

('grand-mansion-1', 'Grand Mansion', 'Lagos, Nigeria', 2023, 'Mansion', '750 sqm', '/images/project15.jpg', '/images/project15.jpg', 'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.', '["/ images/project15.jpg", "/images/project10.jpg", "/images/project7.jpg"]'),

('luxury-mansion-2', 'Luxury Mansion', 'Abuja, Nigeria', 2024, 'Mansion', '820 sqm', '/images/project10.jpg', '/images/project10.jpg', 'A luxury mansion with state-of-the-art amenities. Features include infinity pool, wine cellar, and smart home automation.', '["/ images/project10.jpg", "/images/project7.jpg", "/images/project22.jpg"]'),

('contemporary-mansion-3', 'Contemporary Mansion', 'Port Harcourt, Nigeria', 2023, 'Mansion', '680 sqm', '/images/project7.jpg', '/images/project7.jpg', 'A contemporary mansion representing modern luxury. Features include private spa, entertainment wing, and landscaped gardens.', '["/ images/project7.jpg", "/images/project22.jpg", "/images/project21.jpg"]'),

('signature-mansion-4', 'Signature Mansion', 'Enugu, Nigeria', 2024, 'Mansion', '790 sqm', '/images/project22.jpg', '/images/project22.jpg', 'Our signature mansion design representing the pinnacle of luxury living. Features include home theater, gym, and premium finishes.', '["/ images/project22.jpg", "/images/project21.jpg", "/images/project23.jpg"]'),

('executive-mansion-5', 'Executive Mansion', 'Calabar, Nigeria', 2023, 'Mansion', '710 sqm', '/images/project21.jpg', '/images/project21.jpg', 'An executive mansion with sophisticated architecture. Features include multiple suites, entertainment areas, and outdoor pavilion.', '["/ images/project21.jpg", "/images/project23.jpg", "/images/project15.jpg"]'),

('premium-mansion-6', 'Premium Mansion', 'Ibadan, Nigeria', 2024, 'Mansion', '760 sqm', '/images/project23.jpg', '/images/project23.jpg', 'A premium mansion showcasing exceptional design. Features include grand entrance, luxury amenities, and expansive grounds.', '["/ images/project23.jpg", "/images/project15.jpg", "/images/project10.jpg"]'),

('modern-interior-1', 'Modern Interior Design', 'Lagos, Nigeria', 2024, 'Interiors', 'Full Home', '/images/project8.jpg', '/images/project8.jpg', 'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes. Perfect blend of style and functionality.', '["/ images/project8.jpg", "/images/project9.jpg", "/images/project8.jpg"]'),

('luxury-interior-2', 'Luxury Interior Design', 'Abuja, Nigeria', 2024, 'Interiors', 'Full Home', '/images/project9.jpg', '/images/project9.jpg', 'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail. Creating spaces that inspire.', '["/ images/project9.jpg", "/images/project8.jpg", "/images/project9.jpg"]')

ON CONFLICT (slug) DO NOTHING;
