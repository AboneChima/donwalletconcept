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
	// Bungalows - project 1, 2, 3
	{
		slug: 'modern-bungalow-1',
		title: 'Contemporary Bungalow',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '280 sqm',
		thumbnail: '/images/project1.jpg',
		hero: '/images/project1.jpg',
		description:
			'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow. Perfect for comfortable family living.',
		images: ['/images/project1.jpg', '/images/project2.jpg', '/images/project3.jpg']
	},
	{
		slug: 'elegant-bungalow-2',
		title: 'Minimalist Bungalow',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '250 sqm',
		thumbnail: '/images/project2.jpg',
		hero: '/images/project2.jpg',
		description:
			'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.',
		images: ['/images/project2.jpg', '/images/project3.jpg', '/images/project1.jpg']
	},
	{
		slug: 'luxury-bungalow-3',
		title: 'Premium Bungalow',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Bungalow',
		size: '300 sqm',
		thumbnail: '/images/project3.jpg',
		hero: '/images/project3.jpg',
		description:
			'A premium bungalow with sophisticated design elements. Features spacious rooms, modern amenities, and beautiful landscaping.',
		images: ['/images/project3.jpg', '/images/project1.jpg', '/images/project2.jpg']
	},
	// Duplex - project 4, 5, 6, 7
	{
		slug: 'modern-duplex-1',
		title: 'Modern Duplex Villa',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '420 sqm',
		thumbnail: '/images/project4.jpg',
		hero: '/images/project4.jpg',
		description:
			'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.',
		images: ['/images/project4.jpg', '/images/project5.jpg', '/images/project6.jpg']
	},
	{
		slug: 'executive-duplex-2',
		title: 'Executive Duplex',
		location: 'Abuja, Nigeria',
		year: 2023,
		category: 'Duplex',
		size: '450 sqm',
		thumbnail: '/images/project5.jpg',
		hero: '/images/project5.jpg',
		description:
			'An executive duplex designed for sophisticated living. Features include home theater, gym, and rooftop terrace.',
		images: ['/images/project5.jpg', '/images/project6.jpg', '/images/project7.jpg']
	},
	{
		slug: 'luxury-duplex-3',
		title: 'Luxury Duplex',
		location: 'Port Harcourt, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '480 sqm',
		thumbnail: '/images/project6.jpg',
		hero: '/images/project6.jpg',
		description:
			'A luxury duplex with contemporary design, featuring high ceilings, large windows, and sophisticated interior spaces.',
		images: ['/images/project6.jpg', '/images/project7.jpg', '/images/project4.jpg']
	},
	{
		slug: 'premium-duplex-4',
		title: 'Premium Duplex',
		location: 'Enugu, Nigeria',
		year: 2023,
		category: 'Duplex',
		size: '440 sqm',
		thumbnail: '/images/project7.jpg',
		hero: '/images/project7.jpg',
		description:
			'A premium duplex blending modern architecture with functional design. Features smart home automation and energy-efficient systems.',
		images: ['/images/project7.jpg', '/images/project4.jpg', '/images/project5.jpg']
	},
	// Mansion - project 8, 9, 10, 11
	{
		slug: 'grand-mansion-1',
		title: 'Grand Mansion',
		location: 'Lagos, Nigeria',
		year: 2023,
		category: 'Mansion',
		size: '750 sqm',
		thumbnail: '/images/project8.jpg',
		hero: '/images/project8.jpg',
		description:
			'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.',
		images: ['/images/project8.jpg', '/images/project9.jpg', '/images/project10.jpg']
	},
	{
		slug: 'luxury-mansion-2',
		title: 'Luxury Mansion',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '820 sqm',
		thumbnail: '/images/project9.jpg',
		hero: '/images/project9.jpg',
		description:
			'A luxury mansion with state-of-the-art amenities. Features include infinity pool, wine cellar, and smart home automation.',
		images: ['/images/project9.jpg', '/images/project10.jpg', '/images/project11.jpg']
	},
	{
		slug: 'contemporary-mansion-3',
		title: 'Contemporary Mansion',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Mansion',
		size: '680 sqm',
		thumbnail: '/images/project10.jpg',
		hero: '/images/project10.jpg',
		description:
			'A contemporary mansion representing modern luxury. Features include private spa, entertainment wing, and landscaped gardens.',
		images: ['/images/project10.jpg', '/images/project11.jpg', '/images/project8.jpg']
	},
	{
		slug: 'signature-mansion-4',
		title: 'Signature Mansion',
		location: 'Enugu, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '790 sqm',
		thumbnail: '/images/project11.jpg',
		hero: '/images/project11.jpg',
		description:
			'Our signature mansion design representing the pinnacle of luxury living. Features include home theater, gym, and premium finishes.',
		images: ['/images/project11.jpg', '/images/project8.jpg', '/images/project9.jpg']
	},
	// Interiors - project 12, 13
	{
		slug: 'modern-interior-1',
		title: 'Modern Interior Design',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project12.jpg',
		hero: '/images/project12.jpg',
		description:
			'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes. Perfect blend of style and functionality.',
		images: ['/images/project12.jpg', '/images/project13.jpg', '/images/project12.jpg']
	},
	{
		slug: 'luxury-interior-2',
		title: 'Luxury Interior Design',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project13.jpg',
		hero: '/images/project13.jpg',
		description:
			'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail. Creating spaces that inspire.',
		images: ['/images/project13.jpg', '/images/project12.jpg', '/images/project13.jpg']
	}
];
