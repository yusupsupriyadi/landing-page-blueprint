import Navbar from '@/components/Navbar';
import Heading from '@/components/Heading';
import SocialProof from '@/components/SocialProof';
import Comparision from '@/components/Comparision';
import Benefit from '@/components/Benefit';
import HowWork from '@/components/HowWork';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Heading />
			<SocialProof />
			<Comparision />
			<Benefit />
			<HowWork />
			<Pricing />
			<Testimonials />
			<Faq />
			<CTA />
			<Footer />
		</>
	);
}
