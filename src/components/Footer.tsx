export default function Footer() {
	return (
		<footer className='border-t-2 border-black bg-gray-50'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Brand Section */}
					<div>
						<i className='fa-brands fa-bandcamp text-4xl'></i>
						<p className='mt-4 text-gray-600'>
							Making the world a better place through innovative solutions.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='font-bold text-lg mb-4'>Quick Links</h3>
						<ul className='space-y-2'>
							<li><a href='#' className='text-gray-600 hover:text-black'>Home</a></li>
							<li><a href='#' className='text-gray-600 hover:text-black'>About</a></li>
							<li><a href='#' className='text-gray-600 hover:text-black'>Services</a></li>
							<li><a href='#' className='text-gray-600 hover:text-black'>Contact</a></li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className='font-bold text-lg mb-4'>Legal</h3>
						<ul className='space-y-2'>
							<li><a href='#' className='text-gray-600 hover:text-black'>Privacy Policy</a></li>
							<li><a href='#' className='text-gray-600 hover:text-black'>Terms of Service</a></li>
							<li><a href='#' className='text-gray-600 hover:text-black'>Cookie Policy</a></li>
						</ul>
					</div>

					{/* Social Media */}
					<div>
						<h3 className='font-bold text-lg mb-4'>Connect With Us</h3>
						<div className='flex gap-4'>
							<a href='#' className='text-gray-600 hover:text-black text-xl'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='#' className='text-gray-600 hover:text-black text-xl'>
								<i className='fab fa-facebook'></i>
							</a>
							<a href='#' className='text-gray-600 hover:text-black text-xl'>
								<i className='fab fa-instagram'></i>
							</a>
							<a href='#' className='text-gray-600 hover:text-black text-xl'>
								<i className='fab fa-linkedin'></i>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-200 mt-12 pt-8 text-center text-gray-600'>
					<p>&copy; 2024 Yusup Supriyadi. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
