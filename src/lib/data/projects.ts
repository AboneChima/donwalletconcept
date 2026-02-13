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
	// Mansion - project 1
	{
		slug: 'grand-mansion-1',
		title: 'Grand Mansion',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Mansion',
		size: '750 sqm',
		thumbnail: '/images/project1.jpg',
		hero: '/images/project1.jpg',
		description:
			'A grand mansion showcasing architectural excellence. Features include multiple living areas, home cinema, gym, and expansive outdoor spaces.',
		images: ['/images/project1.jpg', '/images/project8.jpg', '/images/project9.jpg']
	},
	// Duplex - project 2
	{
		slug: 'modern-duplex-1',
		title: 'Modern Duplex Villa',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Duplex',
		size: '420 sqm',
		thumbnail: '/images/project2.jpg',
		hero: '/images/project2.jpg',
		description:
			'A stunning two-story duplex with spacious living areas, modern kitchen, and luxurious master suite. Features premium finishes throughout.',
		images: ['/images/project2.jpg', '/images/project3.jpg', '/images/project4.jpg']
	},
	// Bungalows - project 3, 4
	{
		slug: 'modern-bungalow-1',
		title: 'Contemporary Bungalow',
		location: 'Port Harcourt, Nigeria',
		year: 2024,
		category: 'Bungalow',
		size: '280 sqm',
		thumbnail: '/images/project3.jpg',
		hero: '/images/project3.jpg',
		description:
			'A modern single-story bungalow featuring open-plan living spaces, large windows for natural light, and seamless indoor-outdoor flow. Perfect for comfortable family living.',
		images: ['/images/project3.jpg', '/images/project4.jpg', '/images/project3.jpg']
	},
	{
		slug: 'elegant-bungalow-2',
		title: 'Minimalist Bungalow',
		location: 'Enugu, Nigeria',
		year: 2023,
		category: 'Bungalow',
		size: '250 sqm',
		thumbnail: '/images/project4.jpg',
		hero: '/images/project4.jpg',
		description:
			'Clean lines and minimalist aesthetics define this contemporary bungalow. Features include smart home integration and energy-efficient design.',
		images: ['/images/project4.jpg', '/images/project3.jpg', '/images/project4.jpg']
	},
	// Interiors - project 5, 6, 7, 8, 9, 10, 11, 12, 13
	{
		slug: 'modern-interior-1',
		title: 'Modern Interior Design',
		location: 'Lagos, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project5.jpg',
		hero: '/images/project5.jpg',
		description:
			'A stunning modern interior design featuring contemporary furniture, sophisticated color palettes, and luxurious finishes. Perfect blend of style and functionality.',
		images: ['/images/project5.jpg', '/images/project6.jpg', '/images/project7.jpg']
	},
	{
		slug: 'luxury-interior-2',
		title: 'Luxury Interior Design',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project6.jpg',
		hero: '/images/project6.jpg',
		description:
			'An elegant interior design showcasing premium materials, custom furniture, and exquisite attention to detail. Creating spaces that inspire.',
		images: ['/images/project6.jpg', '/images/project7.jpg', '/images/project8.jpg']
	},
	{
		slug: 'contemporary-interior-3',
		title: 'Contemporary Interior',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project7.jpg',
		hero: '/images/project7.jpg',
		description:
			'Contemporary interior design with clean lines and modern aesthetics. Features include custom lighting, designer furniture, and premium materials.',
		images: ['/images/project7.jpg', '/images/project8.jpg', '/images/project9.jpg']
	},
	{
		slug: 'elegant-interior-4',
		title: 'Elegant Interior',
		location: 'Enugu, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project8.jpg',
		hero: '/images/project8.jpg',
		description:
			'Elegant interior spaces designed for comfort and style. Features sophisticated color schemes, luxury finishes, and thoughtful space planning.',
		images: ['/images/project8.jpg', '/images/project9.jpg', '/images/project10.jpg']
	},
	{
		slug: 'premium-interior-5',
		title: 'Premium Interior',
		location: 'Calabar, Nigeria',
		year: 2023,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project9.jpg',
		hero: '/images/project9.jpg',
		description:
			'Premium interior design showcasing exceptional craftsmanship. Features include bespoke furniture, designer lighting, and luxury materials.',
		images: ['/images/project9.jpg', '/images/project10.jpg', '/images/project11.jpg']
	},
	{
		slug: 'signature-interior-6',
		title: 'Signature Interior',
		location: 'Ibadan, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project10.jpg',
		hero: '/images/project10.jpg',
		description:
			'Our signature interior design representing the pinnacle of luxury living. Features include custom millwork, designer pieces, and premium finishes.',
		images: ['/images/project10.jpg', '/images/project11.jpg', '/images/project12.jpg']
	},
	{
		slug: 'executive-interior-7',
		title: 'Executive Interior',
		location: 'Lagos, Nigeria',
		year: 2023,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project11.jpg',
		hero: '/images/project11.jpg',
		description:
			'Executive interior design with sophisticated aesthetics. Features include home office, entertainment areas, and luxury amenities.',
		images: ['/images/project11.jpg', '/images/project12.jpg', '/images/project13.jpg']
	},
	{
		slug: 'deluxe-interior-8',
		title: 'Deluxe Interior',
		location: 'Abuja, Nigeria',
		year: 2024,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project12.jpg',
		hero: '/images/project12.jpg',
		description:
			'Deluxe interior spaces designed for modern living. Features include smart home integration, custom furniture, and premium materials.',
		images: ['/images/project12.jpg', '/images/project13.jpg', '/images/project5.jpg']
	},
	{
		slug: 'refined-interior-9',
		title: 'Refined Interior',
		location: 'Port Harcourt, Nigeria',
		year: 2023,
		category: 'Interiors',
		size: 'Full Home',
		thumbnail: '/images/project13.jpg',
		hero: '/images/project13.jpg',
		description:
			'Refined interior design showcasing timeless elegance. Features include designer furniture, custom lighting, and sophisticated color palettes.',
		images: ['/images/project13.jpg', '/images/project5.jpg', '/images/project6.jpg']
	}
];
