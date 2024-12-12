export default function FloatButton() {
	return (
		<div className='fixed bottom-4 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-4'>
			{/* LinkedIn Button */}
			<a
				href='https://www.linkedin.com/in/yusup-supriyd'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Connect on LinkedIn'
				className='group relative block'>
				<span className='absolute inset-0 border-2 border-dashed border-black'></span>
				<div className='relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10  border-2 border-black bg-blue-600 text-white transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1'>
					<i className='fab fa-linkedin-in text-xl'></i>
				</div>
			</a>

			{/* GitHub Button */}
			<a
				href='https://github.com/yusupsupriyadi/landing-page-blueprint'
				target='_blank'
				rel='noopener noreferrer'
				aria-label='View source on GitHub'
				className='group relative block'>
				<span className='absolute inset-0 border-2 border-dashed border-black hover:border-white'></span>
				<div className='relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10  border-2 border-black bg-black text-white hover:bg-white hover:text-black transform transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1'>
					<i className='fab fa-github text-xl'></i>
				</div>
			</a>
		</div>
	);
}
