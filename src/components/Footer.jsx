import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from './Motion';

const companyLinks = [
	{ name: 'Home', to: '/' },
	{ name: 'About', to: '/company' },
	{ name: 'Contact', to: '/contact' }
];

const serviceLinks = [
	{ name: 'Corporate Treasury', to: '#' },
	{ name: 'Payments', to: '#' },
	{ name: 'Foreign Exchange', to: '#' }
];

const Footer = () => {
	const [email, setEmail] = useState('');
	const [subscribed, setSubscribed] = useState(false);

	const handleSubscribe = (event) => {
		event.preventDefault();
		if (!email.trim()) return;
		setSubscribed(true);
		setEmail('');
	};

	return (
		<footer className='bg-[#f7f7f5] pt-20 text-[#101828]'>
			<div className='container mx-auto px-7'>
				<FadeIn className='relative z-10 overflow-hidden rounded-[28px] bg-[#0c2474] px-8 py-10 text-white md:px-14 md:py-12'>
					<div className='pointer-events-none absolute inset-0' aria-hidden='true'>
						<div className='absolute -left-10 top-6 h-28 w-24 rounded-[1.75rem] bg-[#16348f]/80' />
						<div className='absolute left-[8%] -top-8 h-40 w-36 rounded-[2rem] bg-[#14307f]' />
						<div className='absolute right-[6%] -top-6 h-44 w-40 rounded-[2rem] bg-[#1a3d9e]/80' />
						<div className='absolute -right-8 bottom-0 h-24 w-40 rounded-t-[1.75rem] bg-[#102a78]' />
						<div className='absolute left-[18%] -bottom-6 h-16 w-36 rounded-[1.5rem] bg-[#1c429e]/70' />
					</div>
					<div className='relative z-10 mx-auto max-w-xl text-center'>
						<h3 className='text-[31px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]'>
							Subscribe to our newsletter
						</h3>
						<p className='mt-3 text-[19px] leading-7 text-white/80'>
							Get updates on ValueBridge payments, settlements, and payouts.
						</p>
						<form
							onSubmit={handleSubscribe}
							className='mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row'
						>
							<input
								type='email'
								required
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								placeholder='Enter your email'
								className='h-11 flex-1 rounded-full border border-white/30 bg-white/10 px-5 text-[17px] text-white outline-none placeholder:text-white/60'
							/>
							<motion.button
								type='submit'
								whileHover={{ scale: 1.04, y: -2 }}
								whileTap={{ scale: 0.98 }}
								transition={{ duration: 0.2 }}
								className='h-11 rounded-full bg-white px-6 text-[17px] font-medium text-[#0c2474]'
							>
								Subscribe
							</motion.button>
						</form>
						<p className='mt-4 text-[17px] text-white/70'>
							{subscribed
								? 'Thanks for subscribing.'
								: 'We will only use your email for this newsletter.'}
						</p>
					</div>
				</FadeIn>

				<FadeIn className='-mt-8 rounded-b-[28px] bg-[#f7f7f5] px-8 pb-8 pt-16 md:px-14'>
					<div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
						<div>
							<Link
								to='/'
								className='text-[34px] font-semibold tracking-[-0.04em] text-[#101828] hover:text-[#101828]'
							>
								ValueBridge.
							</Link>
							<p className='mt-4 max-w-[240px] text-[18px] leading-6 text-[#667085]'>
								Expand your business globally with our multi-currency payment
								processing services.
							</p>
						</div>

						<div>
							<h6 className='text-[20px] font-semibold'>Company</h6>
							<div className='mt-4 grid gap-3'>
								{companyLinks.map((item) => (
									<Link
										key={item.name}
										to={item.to}
										className='text-[18px] text-[#475467] transition-colors hover:text-[#7eb6ff] hover:underline'
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>

						<div>
							<h6 className='text-[20px] font-semibold'>Services</h6>
							<div className='mt-4 grid gap-3'>
								{serviceLinks.map((item) => (
									<Link
										key={item.name}
										to={item.to}
										className='text-[18px] text-[#475467] transition-colors hover:text-[#7eb6ff] hover:underline'
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>

						<div>
							<h6 className='text-[20px] font-semibold'>Contact Us</h6>
							<a
								href='mailto:info@Valuebridgehq.com'
								className='mt-4 block text-[18px] text-[#475467] transition-colors hover:text-[#7eb6ff] hover:underline'
							>
								info@Valuebridgehq.com
							</a>
						</div>
					</div>

					<div className='mt-10 flex flex-col gap-3 border-t border-[#eaecf0] pt-6 text-[18px] text-[#667085] sm:flex-row sm:items-center sm:justify-between'>
						<p>© {new Date().getFullYear()} ValueBridge HQ Inc. All rights reserved.</p>
					</div>
				</FadeIn>
			</div>
			<div className='h-8' />
		</footer>
	);
};

export default Footer;
