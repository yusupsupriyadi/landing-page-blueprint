export default function HowWork() {
	return (
		<div className='mt-28 flex flex-col justify-center items-center container mx-auto px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>
				How It Works
			</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				Simple steps to get started with our service
			</p>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative'>
				{/* Connector Line (visible only on desktop) */}
				<div className='hidden md:block absolute top-[100px] left-[200px] right-[200px] h-1 border-2 border-dashed border-black'></div>

				<Step
					index={1}
					icon='fa-solid fa-user-plus'
					color='bg-blue-100'
					title='Sign Up'
					description='Create your account in less than 2 minutes'
				/>
				<Step
					index={2}
					icon='fa-solid fa-gear'
					color='bg-yellow-100'
					title='Configure'
					description='Customize settings to match your needs'
				/>
				<Step
					index={3}
					icon='fa-solid fa-rocket'
					color='bg-green-100'
					title='Launch'
					description='Start using our powerful features'
				/>
			</div>
		</div>
	);
}

function Step({
	index,
	icon,
	color,
	title,
	description,
}: {
	index: number;
	icon: string;
	color: string;
	title: string;
	description: string;
}) {
	return (
		<div className='group relative block max-w-sm w-full '>
			<span className='absolute inset-0 border-2 border-dashed border-black '></span>
			<div className='relative transform border-2 border-black h-full bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
				{/* Number Badge */}
				<div className='absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 border-2 border-black rounded-full flex items-center justify-center font-bold'>
					{index}
				</div>

				{/* Content */}
				<div className='p-6'>
					<div
						className={`w-20 h-20 ${color} border-2 border-black rounded-lg flex items-center justify-center mb-4 mx-auto`}>
						<i className={`${icon} text-3xl`}></i>
					</div>
					<h2 className='text-xl font-bold text-center mb-2'>
						{title}
					</h2>
					<p className='text-gray-600 text-center'>{description}</p>
				</div>
			</div>
		</div>
	);
}
