export default function SocialProof() {
	const brands = [
		{ name: 'Microsoft', icon: 'fab fa-microsoft' },
		{ name: 'Google', icon: 'fab fa-google' },
		{ name: 'Amazon', icon: 'fab fa-amazon' },
		{ name: 'Apple', icon: 'fab fa-apple' },
		{ name: 'Spotify', icon: 'fab fa-spotify' },
		{ name: 'Netflix', icon: 'fab fa-netflix' },
		{ name: 'Slack', icon: 'fab fa-slack' },
		{ name: 'Adobe', icon: 'fab fa-adobe' },
	];

	return (
		<div className='mt-20 mx-auto'>
			{/* Brands Marquee */}
			<div className='relative flex overflow-hidden py-8 bg-gray-50 border-y-2 border-black'>
				{/* First Marquee */}
				<div className='animate-marquee flex items-center space-x-12'>
					{brands.map((brand, index) => (
						<div
							key={index}
							className='group flex flex-col items-center space-y-2 min-w-[120px]'>
							<div className='w-16 h-16 flex items-center justify-center bg-white border-2 border-black rounded-lg transform transition-transform group-hover:-translate-y-1'>
								<i className={`${brand.icon} text-3xl`}></i>
							</div>
							<span className='text-sm font-medium'>
								{brand.name}
							</span>
						</div>
					))}
				</div>

				{/* Second Marquee (Clone) */}
				<div className='animate-marquee2 absolute top-0 flex items-center space-x-12 py-8'>
					{brands.map((brand, index) => (
						<div
							key={`clone-${index}`}
							className='group flex flex-col items-center space-y-2 min-w-[120px]'>
							<div className='w-16 h-16 flex items-center justify-center bg-white border-2 border-black rounded-lg transform transition-transform group-hover:-translate-y-1'>
								<i className={`${brand.icon} text-3xl`}></i>
							</div>
							<span className='text-sm font-medium'>
								{brand.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
