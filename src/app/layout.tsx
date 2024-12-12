import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Modern Landing Page',
		default: 'Modern Landing Page - Professional Website Template',
	},
	description:
		'A modern, responsive landing page template built with Next.js 15, TypeScript, and Tailwind CSS. Perfect for SaaS, products, and services.',
	keywords: [
		'landing page',
		'next.js template',
		'business website',
		'responsive design',
		'modern UI',
		'typescript',
		'tailwind css',
		'web development',
		'SEO friendly',
	],
	authors: [{ name: 'Yusup Supriyadi', url: 'https://yusupsupriyadi.com' }],
	creator: 'Yusup Supriyadi',
	publisher: 'Yusup Supriyadi',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://landing-page-blueprint.yusupsupriyadi.com',
		siteName: 'Modern Landing Page',
		title: 'Modern Landing Page - Professional Website Template',
		description:
			'A modern, responsive landing page template built with Next.js 15, TypeScript, and Tailwind CSS.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Modern Landing Page - Professional Website Template',
		description:
			'A modern, responsive landing page template built with Next.js 15, TypeScript, and Tailwind CSS.',
		creator: '@yourusername',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code',
	},
	category: 'technology',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
				<link
					rel='canonical'
					href='https://your-domain.com'
				/>
				{/* Add any additional meta tags or scripts here */}
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
