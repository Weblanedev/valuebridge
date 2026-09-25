import { Link } from 'react-router-dom';
import { Button } from './CustomButtons';
import { FadeIn } from './Motion';

const companyLinks = [
	{ name: 'Home', to: '/' },
	{ name: 'About', to: '/company' },
	{ name: 'Contact', to: '/contact' }
];

const serviceLinks = [
	{ name: 'Crossborder', href: 'https://goldstack.co/' },
	{ name: 'Payments', href: 'https://www.korahq.com/' },
	{ name: 'Stablecoin', href: 'https://www.trytreasura.com/' },
	{ name: 'AI', href: 'https://www.korahq.com/kovo' }
];

const Footer = () => {
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
					<div className='relative z-10 mx-auto max-w-4xl py-6 text-center md:py-10'>
						<h3 className='text-[32px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[48px]'>
							Ready to build on the future of money?
						</h3>
						<div className='mt-8 flex justify-center'>
							<Link to='/contact'>
								<Button btnText='Talk to us' icon={true} />
							</Link>
						</div>
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
								Cross-border rails, payments, stablecoins, and AI, together under ValueBridge.
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
									<a
										key={item.name}
										href={item.href}
										target='_blank'
										rel='noreferrer'
										className='text-[18px] text-[#475467] transition-colors hover:text-[#7eb6ff] hover:underline'
									>
										{item.name}
									</a>
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
