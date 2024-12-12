import Image from 'next/image';

export default function Testimonials() {
	return (
		<div className='mt-36 flex flex-col justify-center items-center container mx-auto px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>
				Trusted by Businesses Worldwide
			</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				See what our clients have to say about their experience with our
				services
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl'>
				<TestimonialCard
					name='Sarah Wilson'
					role='Marketing Director'
					company='TechCorp Inc.'
					content='The platform has completely transformed how we handle our operations. The efficiency gains are remarkable, and the support team is exceptional.'
					image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
					rating={5}
				/>
				<TestimonialCard
					name='Michael Chen'
					role='CEO'
					company='InnovateLabs'
					content='Implementing this solution was the best decision we made this year. Our productivity has increased by 150%, and our team loves using it.'
					image='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3'
					rating={5}
				/>
				<TestimonialCard
					name='Emily Parker'
					role='Operations Manager'
					company='GlobalTech'
					content='Outstanding service and incredible results. The platform is intuitive, and the features are exactly what we needed for our growing business.'
					image='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3'
					rating={5}
				/>
			</div>

			{/* Stats Section */}
			<div className='mt-20 w-full max-w-4xl'>
				<div className='group relative block'>
					<span className='absolute inset-0 border-2 border-dashed border-black'></span>
					<div className='relative transform border-2 border-black bg-yellow-50 p-8 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div>
								<h3 className='text-4xl font-bold mb-2'>
									500+
								</h3>
								<p className='text-gray-600'>Happy Clients</p>
							</div>
							<div>
								<h3 className='text-4xl font-bold mb-2'>98%</h3>
								<p className='text-gray-600'>
									Satisfaction Rate
								</p>
							</div>
							<div>
								<h3 className='text-4xl font-bold mb-2'>
									150+
								</h3>
								<p className='text-gray-600'>Countries</p>
							</div>
							<div>
								<h3 className='text-4xl font-bold mb-2'>
									24/7
								</h3>
								<p className='text-gray-600'>Support</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function TestimonialCard({
	name,
	role,
	content,
	image,
	rating,
}: {
	name: string;
	role: string;
	company: string;
	content: string;
	image: string;
	rating: number;
}) {
	return (
		<div className='group relative block'>
			<span className='absolute inset-0 border-2 border-dashed border-black'></span>
			<div className='relative h-full transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
				<div className='p-6'>
					{/* Rating */}
					<div className='flex gap-1 mb-4'>
						{[...Array(rating)].map((_, i) => (
							<i
								key={i}
								className='fas fa-star text-yellow-400'></i>
						))}
					</div>

					{/* Content */}
					<p className='text-gray-700 mb-6'>{content}</p>

					{/* Profile */}
					<div className='flex items-center gap-4 border-t border-gray-100 pt-6'>
						<Image
							src={image}
							alt={name}
							width={48}
							height={48}
							className='rounded-full object-cover w-12 h-12'
						/>
						<div className='flex flex-col'>
							<h3 className='font-bold'>{name}</h3>
							<p className='text-gray-600 text-sm'>{role}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
