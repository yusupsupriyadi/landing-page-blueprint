export default function Heading() {
	return (
		<div className='container mx-auto flex flex-col items-center justify-center mt-24 px-4'>
			{/* Badge */}
			<div className='bg-yellow-100 border-2 border-black rounded-full px-4 py-1 mb-6'>
				<p className='text-sm font-semibold'>✨ Your Success Starts Here</p>
			</div>

			{/* Main Heading */}
			<h1 className='text-5xl md:text-7xl font-bold text-center leading-tight mb-6'>
				Transform Your Business{' '}
				<span className='text-yellow-400'>With Innovation</span>
			</h1>

			{/* Subheading */}
			<p className='text-xl text-gray-600 text-center max-w-2xl mb-12'>
				Empower your business with cutting-edge solutions that drive growth, 
				efficiency, and success in today&apos;s digital world.
			</p>

			{/* CTA Buttons */}
			<div className='flex flex-col sm:flex-row gap-4 mb-16'>
				<a
					href='#'
					className='relative inline-block text-lg font-semibold text-black focus:outline-none focus:ring'>
					<span className='relative block border-2 border-black bg-yellow-300 px-8 py-3 rounded'>
						Get Started Now
					</span>
				</a>
				<a
					href='#'
					className='relative inline-block text-lg font-semibold text-black focus:outline-none focus:ring'>
					<span className='relative block border-2 border-black px-8 py-3 rounded'>
						Watch Demo <i className="fas fa-play-circle ml-2"></i>
					</span>
				</a>
			</div>

			{/* Stats Section */}
			<div className='flex flex-wrap justify-center gap-8 md:gap-16 mb-16'>
				<div className='text-center'>
					<h3 className='text-4xl font-bold mb-2'>2M+</h3>
					<p className='text-gray-600'>Active Users</p>
				</div>
				<div className='text-center'>
					<h3 className='text-4xl font-bold mb-2'>98%</h3>
					<p className='text-gray-600'>Success Rate</p>
				</div>
				<div className='text-center'>
					<h3 className='text-4xl font-bold mb-2'>24/7</h3>
					<p className='text-gray-600'>Support</p>
				</div>
			</div>

			{/* Hero Image/Video Section */}
			<div className='relative w-full max-w-5xl'>
				<div className='aspect-video bg-gray-100 rounded-lg border-2 border-black overflow-hidden'>
					<div className='absolute inset-0 bg-gradient-to-br from-yellow-100/50 to-transparent'></div>
					<div className='absolute inset-0 flex items-center justify-center'>
						<button className='w-20 h-20 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center hover:scale-105 transition-transform'>
							<i className='fa-solid fa-play text-3xl'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
