import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import { Button } from '../components/CustomButtons';
import { DropdownNavLink, DropdownNavLinkMobile } from './DropdownNavLink';
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
				className='w-full py-2 z-50
				bg-blue-950
				text-white
			'
			>
				{({ open, close }) => (
					<>
						<div
							className='container mx-auto  py-2 px-2 sm:px-6 lg:px-7

							items-center
							'
							// md:max-w-6xl
						>
							<div className='relative flex items-center justify-between h-16 py-2'>
								<div
									className='
									flex-1
								flex justify-between items-center'
								>
									<div
										className='flex-shrink-0 flex items-center
									mr-auto lg:mr-0
									'
									>
										<NavLink to='/' onClick={() => close()} className="font-extrabold italic text-[30px]">
											{/* <img src={logo} alt='Primeswitch logo' /> */}
											ValueBridge.
										</NavLink>
									</div>
									<div
										// sm:mx-auto
										// text-center
										className='hidden lg:block


									'
									>
										<div
											className='flex space-x-16
											ps-10
											text-center
											mx-auto
											items-center
											'
										>
											<DropdownNavLink />

											{/* <div className=' text-white'>
												<button
													className='font-[400]
												text-[16px]
												leading-[24px] peer
												'
													// transition-all duration-200
												>
													Products
												</button>
												<div
													// w-80
													// after:w-full
													className='  absolute top-5 z-10
													after:bg-[#2579FA]
												after:content-[""] after:inline-block after:absolute after:top-0
												 after:h-full after:-z-20 after:blur-[2px] after:rounded-lg
											peer-focus:top-12 peer-focus:opacity-100 peer-focus:visible
											invisible
											opacity-0
											'
													// transition-all
													// duration-300
												>
													<ul className='py-6 px-3 flex flex-col gap-3 items-start bg-[#2579FA]'>
														<NavLink
															// as={NavLink}
															className='cursor-pointer'
															to='products/all-apis'
														>
															All APIs
														</NavLink>
														<NavLink
															// as='li'
															className='cursor-pointer'
															to='products/buy-crypto'
														>
															Buy Crypto
														</NavLink>

														<NavLink
															// as='li'
															className='cursor-pointer'
															to='product/settlements'
														>
															Settlements
														</NavLink>
														<NavLink
															// as='li'
															className='cursor-pointer'
															to='product/'
														>
															Payouts
														</NavLink>
														<NavLink
															// as='li'
															className='cursor-pointer'
															to='product/'
														>
															Swaps
														</NavLink>
														<NavLink
															// as='li'
															className='cursor-pointer'
															to='product/'
														>
															Liquidity
														</NavLink>
													</ul>
												</div>
											</div> */}
											{navigation.map((navigationItem) => (
												<NavLink
													key={navigationItem.name}
													to={navigationItem.to}
													// to={navigationItem.to}
													aria-current={
														navigationItem.current ? 'page' : undefined
													}
												>
													{navigationItem.name}
												</NavLink>
											))}
											<NavLink to='contact' onClick={() => close()}>
												<Button btnText='Contact Sales' icon={false} />
											</NavLink>
										</div>
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

						<Disclosure.Panel className='block lg:hidden 	px-5'>
							<div className='flex flex-col mx-auto'>
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
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default Navbar;
