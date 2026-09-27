import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { Button } from '../components/CustomButtons';
import { DropdownNavLinkMobile } from './DropdownNavLink';
// {
// 	name: 'Products',
// 	to: '/products',
// 	current: true
// },
// {
// 	name: 'Developers',
// 	to: '/developers',
// 	current: true
// }
// { name: 'Use cases', to: '/use-cases', current: true },
const navigation = [{ name: 'Company', to: '/company', current: true }];

const Navbar = () => {
	return (
		<>
			<Disclosure
				as='nav'
				className='sticky top-0 w-full py-1 z-50
				relative
				bg-[#0c2474]
				text-white
				font-medium
				tracking-[-0.02em]
			'
			>
				{({ open, close }) => (
					<>
						<div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
							<div className='absolute -left-6 top-1 h-16 w-14 rounded-[1.25rem] bg-[#16348f]/80' />
							<div className='absolute left-[22%] -top-6 h-20 w-28 rounded-[1.5rem] bg-[#14307f]' />
							<div className='absolute right-[18%] -top-8 h-24 w-32 rounded-[1.5rem] bg-[#1a3d9e]/80' />
							<div className='absolute -right-4 bottom-0 h-14 w-24 rounded-t-[1.25rem] bg-[#102a78]' />
						</div>
						<div
							className='relative z-10 container mx-auto  py-2 px-2 sm:px-6 lg:px-7

							items-center
							'
							// md:max-w-6xl
						>
							<div className='relative flex items-center justify-between h-16 py-2'>
								<div
									className='
									flex-1
								flex items-center'
								>
									<div
										className='flex-shrink-0 flex items-center
									mr-auto lg:mr-0
									'
									>
										<NavLink to='/' onClick={() => close()} className="font-semibold not-italic text-[31px] tracking-[-0.04em] -ml-5 lg:-ml-11 hover:text-white">
											{/* <img src={logo} alt='Primeswitch logo' /> */}
											ValueBridge.
										</NavLink>
									</div>
									<div className='hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-[20px] font-medium text-white'>
										<a href='https://goldstack.co/' target='_blank' rel='noreferrer' className='transition-colors hover:text-[#7eb6ff]'>
											Crossborder
										</a>
										<a href='https://www.korahq.com/' target='_blank' rel='noreferrer' className='transition-colors hover:text-[#7eb6ff]'>
											Payments
										</a>
										<a href='https://www.trytreasura.com/' target='_blank' rel='noreferrer' className='transition-colors hover:text-[#7eb6ff]'>
											Stablecoin
										</a>
										<a href='https://www.korahq.com/kovo' target='_blank' rel='noreferrer' className='transition-colors hover:text-[#7eb6ff]'>
											AI
										</a>
									</div>
								</div>

								<div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
									<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='block w-6 h-6'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M6 18L18 6M6 6l12 12'
												/>
											</svg>
										) : (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='block w-6 h-6'
												aria-hidden='true'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
												/>
											</svg>
										)}
									</Disclosure.Button>
								</div>
							</div>
						</div>

						<AnimatePresence>
							{open && (
							<motion.div
								className='flex flex-col mx-auto block lg:hidden px-5 overflow-hidden'
								initial={{ opacity: 0, y: -24 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -24 }}
								transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
							>
								<div
									className='
							 space-y-2 flex flex-col
							 mx-auto
							 justify-center
							 text-center
							 '
								>
									<DropdownNavLinkMobile close={close} />

									{navigation.map((navigationItem) => (
										<Disclosure.Button
											key={navigationItem.name}
											as={NavLink}
											to={navigationItem.to}
										>
											{navigationItem.name}
										</Disclosure.Button>
									))}
								</div>
								<div className='pt-2'>
									<div
										className='flex flex-col
										items-center
										mx-auto
										space-y-2
							 text-center'
									>
										<NavLink to='contact' onClick={() => close()}>
											<Button btnText='Contact Sales' icon={false} />
										</NavLink>
									</div>
								</div>
							</motion.div>
							)}
						</AnimatePresence>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default Navbar;
