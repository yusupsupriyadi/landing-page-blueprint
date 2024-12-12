'use client';
import { useState } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showAnnouncement, setShowAnnouncement] = useState(true);

	return (
		<>
			{/* Announcement Bar */}
			{showAnnouncement && (
				<div className='bg-black text-white py-2 relative'>
					<div className='container mx-auto px-8 flex items-center justify-center md:justify-between'>
						<p className='text-sm text-center md:text-left'>
							<span className='hidden md:inline'>
								🚀 Need a custom landing page for your brand or
								company?{' '}
							</span>
							Let&apos;s collaborate and create something amazing!
						</p>
						<div className='flex items-center gap-4'>
							<a
								href='https://www.yusupsupriyadi.com/'
								className='hidden md:inline-block text-sm bg-yellow-300 text-black px-4 py-1 rounded border-2 border-yellow-300 hover:bg-yellow-400 hover:border-yellow-400 font-medium'>
								Contact Me
							</a>
							<button
								onClick={() => setShowAnnouncement(false)}
								className='absolute right-2 top-1/2 -translate-y-1/2 md:static md:translate-y-0 text-white hover:text-yellow-300'>
								<i className='fas fa-times'></i>
							</button>
						</div>
					</div>
				</div>
			)}

			<nav className='border-b-2 border-black sticky top-0 bg-white z-50'>
				<div className='container mx-auto flex justify-between items-center py-4 px-8'>
					{/* Logo */}
					<div className='flex items-center gap-2'>
						<i className='fa-brands fa-bandcamp text-4xl'></i>
						<span className='font-bold text-xl'>Brand</span>
					</div>

					{/* Navigation Links - Desktop */}
					<ul className='hidden md:flex items-center gap-8 text-lg'>
						<li>
							<a
								href='#'
								className='text-gray-700 hover:text-black font-medium'>
								Home
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-700 hover:text-black font-medium'>
								Features
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-700 hover:text-black font-medium'>
								Pricing
							</a>
						</li>
						<li>
							<a
								href='#'
								className='text-gray-700 hover:text-black font-medium'>
								About
							</a>
						</li>
					</ul>

					{/* CTA Button - Desktop */}
					<div className='hidden md:flex items-center gap-4'>
						<a
							href='#'
							className='group relative inline-block text-sm font-semibold text-black focus:outline-none focus:ring active:text-black'>
							<span className='relative block border-2 border-black bg-yellow-300 px-8 py-3 rounded'>
								Get Started
							</span>
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-gray-700 hover:text-black'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<i
							className={`fas ${
								isMenuOpen ? 'fa-times' : 'fa-bars'
							} text-2xl`}></i>
					</button>
				</div>

				{/* Mobile Menu */}
				<div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
					<div className='border-t-2 border-black bg-white'>
						<ul className='flex flex-col py-4'>
							<li>
								<a
									href='#'
									className='block px-8 py-3 text-gray-700 hover:bg-gray-50 font-medium'>
									Home
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-8 py-3 text-gray-700 hover:bg-gray-50 font-medium'>
									Features
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-8 py-3 text-gray-700 hover:bg-gray-50 font-medium'>
									Pricing
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block px-8 py-3 text-gray-700 hover:bg-gray-50 font-medium'>
									About
								</a>
							</li>
							<li className='px-8 py-3'>
								<a
									href='#'
									className='block text-center border-2 border-black bg-yellow-300 px-8 py-3 rounded font-semibold'>
									Get Started
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
