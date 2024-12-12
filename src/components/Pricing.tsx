export default function Pricing() {
	return (
		<div className='mt-28 flex flex-col justify-center items-center container mx-auto px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>Simple, Transparent Pricing</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				Choose the perfect plan that suits your business needs
			</p>
			<div className='flex flex-col md:flex-row items-stretch gap-8 justify-center w-full max-w-6xl'>
				<PricingCard
					type='Starter'
					price={29}
					billing="monthly"
					description="Perfect for small businesses and startups"
					features={[
						"Up to 5 team members",
						"Basic analytics",
						"24/7 email support",
						"10GB storage",
						"API access"
					]}
					active={false}
					buttonText="Get Started"
				/>
				<PricingCard
					type='Professional'
					price={99}
					billing="monthly"
					description="Ideal for growing businesses"
					features={[
						"Up to 20 team members",
						"Advanced analytics",
						"Priority support",
						"50GB storage",
						"API access",
						"Custom integrations",
						"Team collaboration"
					]}
					active={true}
					buttonText="Try Pro"
					badge="Most Popular"
				/>
				<PricingCard
					type='Enterprise'
					price={299}
					billing="monthly"
					description="For large-scale operations"
					features={[
						"Unlimited team members",
						"Enterprise analytics",
						"24/7 phone support",
						"Unlimited storage",
						"API access",
						"Custom integrations",
						"Team collaboration",
						"Custom solutions",
						"Dedicated manager"
					]}
					active={false}
					buttonText="Contact Sales"
				/>
			</div>
		</div>
	);
}

function PricingCard({
	type,
	price,
	billing,
	description,
	features,
	active,
	buttonText,
	badge
}: {
	type: string;
	price: number;
	billing: string;
	description: string;
	features: string[];
	active: boolean;
	buttonText: string;
	badge?: string;
}) {
	return (
		<div className={`group relative block w-full md:w-[350px] ${active ? 'md:-mt-4' : ''}`}>
			<span className='absolute inset-0 border-2 border-dashed border-black'></span>
			<div className={`relative h-full transform border-2 border-black transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2 ${
				active ? 'bg-yellow-50' : 'bg-white'
			}`}>
				{/* Badge */}
				{badge && (
					<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
						<div className='bg-yellow-300 border-2 border-black rounded-full px-4 py-1'>
							<p className='text-sm font-bold'>{badge}</p>
						</div>
					</div>
				)}

				{/* Header */}
				<div className='p-6 border-b-2 border-black'>
					<h3 className='text-xl font-bold mb-2'>{type}</h3>
					<p className='text-gray-600 text-sm mb-4'>{description}</p>
					<div className='flex items-baseline gap-1'>
						<span className='text-4xl font-bold'>${price}</span>
						<span className='text-gray-600'>/{billing}</span>
					</div>
				</div>

				{/* Features */}
				<div className='p-6'>
					<ul className='space-y-4'>
						{features.map((feature, index) => (
							<li key={index} className='flex items-center gap-3'>
								<i className='fas fa-check text-green-500'></i>
								<span className='text-gray-700'>{feature}</span>
							</li>
						))}
					</ul>

					{/* CTA Button */}
					<button className='w-full mt-8 group relative inline-block text-sm font-semibold text-black focus:outline-none focus:ring'>
						<span className={`relative block border-2 border-black ${
							active ? 'bg-yellow-300' : 'bg-white'
						} px-8 py-3 rounded`}>
							{buttonText}
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
