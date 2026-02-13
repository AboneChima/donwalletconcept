export interface Project {
	slug: string;
	title: string;
	location: string;
	year: number;
	category: string;
	size?: string;
	thumbnail: string;
	hero: string;
	description: string;
	images: string[];
}

export const projects: Project[] = [
	// Bungalows - project 24, 25, 26, 19, 17
	{
		slug: 'modern-bungalow-1',
		title: 'Contemporary Bungalow',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '280 sqm',
		thumbnail: '/images/project24.jpg',
		hero: '/images/project24.jpg',
		description:
			'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow. Perfect for comfortable family living.',
		images: ['/images/project24.jpg', '/images/project25.jpg', '/images/project26.jpg']
	},
	{
		slug: 'elegant-bungalow-2',
		title: 'Minimalist Bungalow',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '250 sqm',
		thumbnail: '/images/project25.jpg',
		hero: '/images/project25.jpg',
		description:
			'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.',
		images: ['/images/project25.jpg', '/images/project26.jpg', '/images/project19.jpg']
	},
	{
		slug: 'luxury-bungalow-3',
		title: 'Premium Bungalow',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Bungalow',
		size: '300 sqm',
		thumbnail: '/images/project26.jpg',
		hero: '/images/project26.jpg',
		description:
			'A premium bungalow with sophisticated design elements. Features spacious rooms, modern amenities, and beautiful landscaping.',
		images: ['/images/project26.jpg', '/images/project19.jpg', '/images/project17.jpg']
	},
	{
		slug: 'executive-bungalow-4',
		title: 'Executive Bungalow',
		location: 'Enugu, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '270 sqm',
		thumbnail: '/images/project19.jpg',
		hero: '/images/project19.jpg',
		description:
			'An executive bungalow designed for modern living. Features include home office, entertainment area, and smart home technology.',
		images: ['/images/project19.jpg', '/images/project17.jpg', '/images/project24.jpg']
	},
	{
		slug: 'signature-bungalow-5',
		title: 'Signature Bungalow',
		location: 'Calabar, Nigeria',
		year: 2023,
		category: 'Bungalow',
		size: '290 sqm',
		thumbnail: '/images/project17.jpg',
		hero: '/images/project17.jpg',
		description:
			'A signature bungalow showcasing our design excellence. Features premium finishes, open spaces, and contemporary architecture.',
		images: ['/images/project17.jpg', '/images/project24.jpg', '/images/project25.jpg']
	},
	// Duplex - project 12, 13, 14, 16, 5, 20
	{
		slug: 'modern-duplex-1',
		title: 'Modern Duplex Villa',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '420 sqm',
		thumbnail: '/images/project12.jpg',
		hero: '/images/project12.jpg',
		description:
			'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.',
		images: ['/images/project12.jpg', '/images/project13.jpg', '/images/project14.jpg']
	},
	{
		slug: 'executive-duplex-2',
		title: 'Executive Duplex',
		location: 'Abuja, Nigeria',
		year: 2023,
		category: 'Duplex',
		size: '450 sqm',
		thumbnail: '/images/project13.jpg',
		hero: '/images/project13.jpg',
		description:
			'An executive duplex designed for sophisticated living. Features include home theater, gym, and rooftop terrace.',
		images: ['/images/project13.jpg', '/images/project14.jpg', '/images/project16.jpg']
	},
	{
		slug: 'luxury-duplex-3',
		title: 'Luxury Duplex',
		location: 'Port Harcourt, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '480 sqm',
		thumbnail: '/images/project14.jpg',
		hero: '/images/project14.jpg',
		description:
			'A luxury duplex with contemporary design, featuring high ceilings, large windows, and sophisticated interior spaces.',
		images: ['/images/project14.jpg', '/images/project16.jpg', '/images/project5.jpg']
	},
	{
		slug: 'premium-duplex-4',
		title: 'Premium Duplex',
		location: 'Enugu, Nigeria',
		year: 2023,
		category: 'Duplex',
		size: '440 sqm',
		thumbnail: '/images/project16.jpg',
		hero: '/images/project16.jpg',
		description:
			'A premium duplex blending modern architecture with functional design. Features smart home automation and energy-efficient systems.',
		images: ['/images/project16.jpg', '/images/project5.jpg', '/images/project20.jpg']
	},
	{
		slug: 'contemporary-duplex-5',
		title: 'Contemporary Duplex',
		location: 'Calabar, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '410 sqm',
		thumbnail: '/images/project5.jpg',
		hero: '/images/project5.jpg',
		description:
			'A contemporary duplex with sleek design and modern amenities. Features include spacious balconies and premium materials.',
		images: ['/images/project5.jpg', '/images/project20.jpg', '/images/project12.jpg']
	},
	{
		slug: 'elegant-duplex-6',
		title: 'Elegant Duplex',
		location: 'Ibadan, Nigeria',
		year: 2023,
		category: 'Duplex',
		size: '430 sqm',
		thumbnail: '/images/project20.jpg',
		hero: '/images/project20.jpg',
		description:
			'An elegant duplex showcasing refined architecture. Features include designer interiors, landscaped gardens, and modern facilities.',
		images: ['/images/project20.jpg', '/images/project12.jpg', '/images/project13.jpg']
	},
	// Mansion - project 15, 10, 7, 22, 21, 23
	{
		slug: 'grand-mansion-1',
		title: 'Grand Mansion',
		location: 'Lagos, Nigeria',
		year: 2023,
		category: 'Mansion',
		size: '750 sqm',
		thumbnail: '/images/project15.jpg',
		hero: '/images/project15.jpg',
		description:
			'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.',
		images: ['/images/project15.jpg', '/images/project10.jpg', '/images/project7.jpg']
	},
	{
		slug: 'luxury-mansion-2',
		title: 'Luxury Mansion',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '820 sqm',
		thumbnail: '/images/project10.jpg',
		hero: '/images/project10.jpg',
		description:
			'A luxury mansion with state-of-the-art amenities. Features include infinity pool, wine cellar, and smart home automation.',
		images: ['/images/project10.jpg', '/images/project7.jpg', '/images/project22.jpg']
	},
	{
		slug: 'contemporary-mansion-3',
		title: 'Contemporary Mansion',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Mansion',
		size: '680 sqm',
		thumbnail: '/images/project7.jpg',
		hero: '/images/project7.jpg',
		description:
			'A contemporary mansion representing modern luxury. Features include private spa, entertainment wing, and landscaped gardens.',
		images: ['/images/project7.jpg', '/images/project22.jpg', '/images/project21.jpg']
	},
	{
		slug: 'signature-mansion-4',
		title: 'Signature Mansion',
		location: 'Enugu, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '790 sqm',
		thumbnail: '/images/project22.jpg',
		hero: '/images/project22.jpg',
		description:
			'Our signature mansion design representing the pinnacle of luxury living. Features include home theater, gym, and premium finishes.',
		images: ['/images/project22.jpg', '/images/project21.jpg', '/images/project23.jpg']
	},
	{
		slug: 'executive-mansion-5',
		title: 'Executive Mansion',
		location: 'Calabar, Nigeria',
		year: 2023,
		category: 'Mansion',
		size: '710 sqm',
		thumbnail: '/images/project21.jpg',
		hero: '/images/project21.jpg',
		description:
			'An executive mansion with sophisticated architecture. Features include multiple suites, entertainment areas, and outdoor pavilion.',
		images: ['/images/project21.jpg', '/images/project23.jpg', '/images/project15.jpg']
	},
	{
		slug: 'premium-mansion-6',
		title: 'Premium Mansion',
		location: 'Ibadan, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '760 sqm',
		thumbnail: '/images/project23.jpg',
		hero: '/images/project23.jpg',
		description:
			'A premium mansion showcasing exceptional design. Features include grand entrance, luxury amenities, and expansive grounds.',
		images: ['/images/project23.jpg', '/images/project15.jpg', '/images/project10.jpg']
	},
	// Interiors - project 8, 9
	{
		slug: 'modern-interior-1',
		title: 'Modern Interior Design',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project8.jpg',
		hero: '/images/project8.jpg',
		description:
			'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes. Perfect blend of style and functionality.',
		images: ['/images/project8.jpg', '/images/project9.jpg', '/images/project8.jpg']
	},
	{
		slug: 'luxury-interior-2',
		title: 'Luxury Interior Design',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project9.jpg',
		hero: '/images/project9.jpg',
		description:
			'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail. Creating spaces that inspire.',
		images: ['/images/project9.jpg', '/images/project8.jpg', '/images/project9.jpg']
	}
];
