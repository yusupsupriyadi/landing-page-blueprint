export default function Benefit() {
	return (
		<div className='mt-28 flex flex-col justify-center items-center container mx-auto px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>Why Choose Us?</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				Discover the advantages that set us apart and make us the perfect choice for your business
			</p>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl'>
				<BenefitItem 
					icon="fa-solid fa-bolt"
					color="bg-yellow-100"
					title="Lightning Fast"
					description="Experience blazing-fast performance with our optimized solutions"
				/>
				<BenefitItem 
					icon="fa-solid fa-shield-halved"
					color="bg-blue-100"
					title="Secure & Reliable"
					description="Bank-grade security to keep your data safe and protected 24/7"
				/>
				<BenefitItem 
					icon="fa-solid fa-chart-line"
					color="bg-green-100"
					title="Scalable Growth"
					description="Easily scale your operations as your business grows"
				/>
			</div>
		</div>
	);
}

function BenefitItem({ 
	icon, 
	color,
	title, 
	description 
}: { 
	icon: string;
	color: string;
	title: string;
	description: string;
}) {
	return (
		<div className='group relative block'>
			<span className='absolute inset-0 border-2 border-dashed border-black'></span>
			<div className='relative h-full transform border-2 border-black bg-white p-6 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
				<div className={`w-16 h-16 ${color} border-2 border-black rounded-lg flex items-center justify-center mb-4`}>
					<i className={`${icon} text-2xl`}></i>
				</div>
				<h2 className='text-xl font-bold mb-2'>{title}</h2>
				<p className='text-gray-600'>{description}</p>
			</div>
		</div>
	);
}
