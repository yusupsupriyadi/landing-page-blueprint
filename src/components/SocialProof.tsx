export default function SocialProof() {
	const socialMedia = [
		{ name: 'Facebook', icon: 'fab fa-facebook' },
		{ name: 'Twitter', icon: 'fab fa-twitter' },
		{ name: 'Instagram', icon: 'fab fa-instagram' },
		{ name: 'LinkedIn', icon: 'fab fa-linkedin' },
		{ name: 'YouTube', icon: 'fab fa-youtube' },
		{ name: 'Facebook', icon: 'fab fa-facebook' },
		{ name: 'Twitter', icon: 'fab fa-twitter' },
		{ name: 'Instagram', icon: 'fab fa-instagram' },
		{ name: 'LinkedIn', icon: 'fab fa-linkedin' },
		{ name: 'YouTube', icon: 'fab fa-youtube' },
	];

	return (
		<div className='mt-12 overflow-hidden'>
			<div className='relative flex'>
				<div className='animate-marquee flex items-center space-x-8'>
					{socialMedia.map((social, index) => (
						<div
							key={index}
							className='flex items-center space-x-4 px-4'>
							<i
								className={`${social.icon} text-3xl text-gray-600`}></i>
							<span className='text-gray-600 text-lg'>{social.name}</span>
						</div>
					))}
				</div>

				<div className='animate-marquee2 flex items-center space-x-8 absolute top-0'>
					{socialMedia.map((social, index) => (
						<div
							key={`clone-${index}`}
							className='flex items-center space-x-4 px-4'>
							<i
								className={`${social.icon} text-3xl text-gray-600`}></i>
							<span className='text-gray-600 text-lg'>{social.name}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
