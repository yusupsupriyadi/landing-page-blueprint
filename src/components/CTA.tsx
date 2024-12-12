export default function CTA() {
	return (
		<div className='mt-28 mb-28'>
			<div className='container mx-auto px-4'>
				<div className='relative block'>
					<div className='relative flex flex-col md:flex-row items-center justify-between border-2 border-black bg-yellow-200 p-8'>
						<div className='text-center md:text-left mb-6 md:mb-0'>
							<h2 className='text-3xl font-bold mb-2'>Ready to Get Started?</h2>
							<p className='text-gray-700 text-lg'>
								Join thousands of satisfied customers today
							</p>
						</div>
						<div className='flex gap-4'>
							<a
								href='#'
								className='relative inline-block text-sm font-semibold text-black focus:outline-none focus:ring active:text-black'>
								<span className='relative block border border-current bg-white px-8 py-3 rounded'>
									Learn More
								</span>
							</a>
							<a
								href='#'
								className='relative inline-block text-sm font-semibold text-black focus:outline-none focus:ring active:text-black'>
								<span className='relative block border border-current bg-black text-white px-8 py-3 rounded'>
									Get Started
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
