'use client';
import { useState } from 'react';

export default function Faq() {
	return (
		<div className='mt-28 flex flex-col justify-center items-center container mx-auto px-4'>
			<h1 className='text-4xl font-bold text-center mb-4'>
				Frequently Asked Questions
			</h1>
			<p className='text-gray-600 text-center max-w-2xl mb-12'>
				Got questions? We&apos;ve got answers. If you have some other questions, feel free to contact us.
			</p>
			<div className='w-full max-w-3xl space-y-4'>
				<FaqItem 
					question="How does the platform work?"
					answer="Our platform provides an intuitive interface where you can easily manage your business operations. After signing up, you'll get immediate access to all features with a step-by-step guide to help you get started."
				/>
				<FaqItem 
					question="What kind of support do you offer?"
					answer="We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you with any questions or technical issues."
				/>
				<FaqItem 
					question="Is my data secure?"
					answer="Yes, we take security very seriously. We use bank-level encryption to protect your data, regular security audits, and comply with all major data protection regulations including GDPR."
				/>
				<FaqItem 
					question="Can I cancel my subscription?"
					answer="Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Simply go to your account settings and click on the cancel subscription button."
				/>
				<FaqItem 
					question="Do you offer a free trial?"
					answer="Yes, we offer a 14-day free trial with full access to all features. No credit card required. You can upgrade to a paid plan at any time during or after the trial period."
				/>
			</div>

			{/* Contact Section */}
			<div className='mt-12 w-full max-w-3xl'>
				<div className='group relative block'>
					<span className='absolute inset-0 border-2 border-dashed border-black'></span>
					<div className='relative transform border-2 border-black bg-yellow-50 p-8 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
						<div className='text-center'>
							<h3 className='text-xl font-bold mb-2'>Still have questions?</h3>
							<p className='text-gray-600 mb-4'>
								Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team.
							</p>
							<button className='inline-block border-2 border-black bg-yellow-300 px-8 py-3 font-semibold rounded'>
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='group relative block'>
			<span className='absolute inset-0 border-2 border-dashed border-black'></span>
			<div className='relative transform border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
				<button 
					onClick={() => setIsOpen(!isOpen)}
					className='w-full p-6 flex justify-between items-center'
				>
					<h3 className='font-bold text-lg text-left'>{question}</h3>
					<i className={`fas fa-chevron-down transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
				</button>
				<div 
					className={`overflow-hidden transition-all duration-300 ease-in-out ${
						isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
					}`}
				>
					<p className='text-gray-600 px-6 pb-6'>{answer}</p>
				</div>
			</div>
		</div>
	);
}
