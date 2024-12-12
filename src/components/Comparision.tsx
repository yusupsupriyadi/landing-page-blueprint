export default function Comparision() {
	return (
		<div className='container mx-auto flex flex-col items-center justify-center mt-28 px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>Traditional vs Modern Approach</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				See how our innovative solution transforms your business processes
			</p>
			<section className='flex flex-col md:flex-row gap-8 mt-8'>
				<Card 
					type="Traditional Way"
					title="Manual Process"
					description="Time-consuming traditional methods"
					image="bg-red-100"
					features={[
						"Time-consuming manual data entry",
						"Prone to human errors",
						"Limited scalability",
						"Delayed reporting",
						"Higher operational costs"
					]}
					icon="fa-solid fa-clock text-red-400"
				/>
				<div className='hidden md:flex items-center'>
					<div className='w-16 h-16 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center'>
						<i className='fas fa-arrow-right text-2xl'></i>
					</div>
				</div>
				<Card 
					type="Modern Solution"
					title="Automated System"
					description="Efficient digital transformation"
					image="bg-green-100"
					features={[
						"Automated data processing",
						"99.9% accuracy rate",
						"Unlimited scalability",
						"Real-time reporting",
						"Cost-effective solution"
					]}
					icon="fa-solid fa-rocket text-green-400"
				/>
			</section>
		</div>
	);
}

function Card({ 
	type, 
	title, 
	description, 
	image,
	features,
	icon
}: { 
	type: string;
	title: string;
	description: string;
	image: string;
	features: string[];
	icon: string;
}) {
	return (
		<div className='group relative block w-full md:w-[400px]'>
			<span className='absolute inset-0 border-2 border-dashed border-black'></span>
			<div className='relative transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
				<div
					className={`h-[200px] ${image} relative border-b-2 border-black`}>
					<i className={`${icon} text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}></i>
				</div>
				<div className='p-6'>
					<div className='inline-block bg-yellow-100 border-2 border-black rounded-full px-3 py-1 text-sm font-medium mb-2'>
						{type}
					</div>
					<h1 className='text-2xl font-bold mb-2'>{title}</h1>
					<p className='text-gray-600 mb-4'>{description}</p>
					<ul className='space-y-3'>
						{features.map((feature, index) => (
							<li key={index} className='flex items-center gap-3'>
								<i className={`${icon} text-xl`}></i>
								<p className='text-gray-700'>{feature}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
