// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { Link } from 'react-router-dom';

import heroImg from '../assets/all-apis.svg';
import buildImg from '../assets/build.svg';
import cash from '../assets/icons/cash.svg';
import liquidity from '../assets/icons/liquidity.svg';
import OffRamp from '../assets/icons/off-ramp.svg';
import payout from '../assets/icons/payout.svg';
import settlement from '../assets/icons/settlements.svg';
import swaps from '../assets/icons/swaps.svg';
import treasury from '../assets/icons/treasury.svg';
import wallets from '../assets/icons/wallet.svg';
import stremline from '../assets/stremline.svg';
// import coinprofileLogo from '../assets/coinprofile.svg';
// import lazerpayLogo from '../assets/lazerpay.svg';
import paymentrails from '../assets/paymentrails.svg';
import BusinessNeeds from '../components/BusinessNeeds';
import Tools from '../components/Tools';
const AllAPIs = () => {
	return (
		<>
			<Hero
				minTitle='ALL APIS'
				title='Build multi-currency experiences'
				subTitle='Primeswitch all-in-one asset independent infrastructure, empowers financial service providers with the tools that they need to build and scale.'
				buttonTxt='Learn More'
				heroImg={heroImg}
			/>
			<section
				// py-[71px]
				className='
				py-[101px]
			lg:px-[61px]
			bg-[#F9FAFB]
			'
			>
				<div
					className='container

					mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			'
				>
					<div className='lg:w-[665px]'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
							All the tools you need to build on crypto
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] `pb-[24px]'>
							Build and launch global financial services quickly and seamlessly
							with our all in one product suite of treasury, payments, and
							last-mile settlement services
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: OffRamp,
							title: 'Crypto on/off ramp',
							subTitle: 'Buy and sell crypto via our dashboard or via API'
						},
						{
							icon: swaps,
							title: 'Crypto swaps',
							subTitle: 'Perform crypto-to-crypto swaps easily and on demand'
						},
						{
							icon: payout,
							title: 'Payouts',
							subTitle:
								'Make both single and bulk fiat payouts to 20+ countries easily'
						},
						{
							icon: settlement,
							title: 'Settlements',
							subTitle: 'Settle your global partners in their local currency'
						},
						{
							icon: treasury,
							title: 'Treasury',
							subTitle: 'Manage all your assets all from one place'
						},
						{
							icon: liquidity,
							title: 'Liquidity',
							subTitle: 'Perform crypto-to-crypto swaps easily and on demand'
						},
						{
							icon: wallets,
							title: 'Digital Wallets',
							subTitle:
								'Issue account numbers, track balances, and initiate and receive payments'
						},
						{
							icon: cash,
							title: 'Cash Management',
							subTitle:
								'Settle your global partners in their local currency. Manage your assets and segregate accounts across multiple bank accounts.'
						}
					]}
				/>
			</section>
			<section
				className='
				py-[72px]
			lg:px-[61px]
			bg-blue-950
			'
			>
				<div
					className='container
				mx-auto px-7'
				>
					<div
						className='grid lg:grid-cols-2 gap-[25px] lg:gap-[50px]
						items-center
						'
					>
						<div className='text-white lg:w-[510px] pt-[20px]'>
							<h2 className='font-[500] text-[36px] leading-[40px]'>
								Build on Primeswitch
							</h2>
							<p className='pt-[14px] pb-[24px] font-[400] text-[18px] leading-[30px] text-[#F6F7F8] lg:w-[508px]'>
								Automate payment processes and abstract away complexity so you
								can build new product experiences faster
							</p>
							<p className='pb-[16px] font-[400] text-[16px] leading-[30px] text-[#F6F7F8]'>
								With our APIs you can;
							</p>
							<div className='px-7 pb-[24px]'>
								<ul className='list-disc'>
									<li className='font-[400] text-[16px] leading-[30px] '>
										Make payins and payouts
									</li>
									<li className='font-[400] text-[16px] leading-[30px] py-[16px]'>
										Create and manage wallets and virtual accounts
									</li>
									<li className='font-[400] text-[16px] leading-[30px]'>
										Access multi-currency accounts
									</li>
									<li className='font-[400] text-[16px] leading-[30px] py-[16px]'>
										Perform crypto-fiat swaps and vice versa
									</li>
									<li className='font-[400] text-[16px] leading-[30px]'>
										Manage payments across all supported accounts
									</li>
								</ul>
							</div>
							<Link
								to='#'
								// pb-[71px]
								className='
								 flex items-center text-[#84ADFF] text-[18px] gap-4 leading-[35px] underline font-[500]'
							>
								Explore our docs
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
										fill='#84ADFF'
									/>
								</svg>
							</Link>
						</div>
						<div className='h-fit'>
							<img src={buildImg} alt='build primeswitch' className='h-full' />
						</div>
					</div>
				</div>
			</section>
			<section
				// py-[100px]
				className='
				pt-[100px]
			lg:px-[61px]
			'
				// bg-blue-950
			>
				<div
					className='container
				mx-auto px-7'
				>
					<div
						className='grid lg:grid-cols-2
						gap-[50px]
						items-center
						'
					>
						<div
							className='lg:h-[644px]'
							// w-[674px]
						>
							<div>
								<h4 className='font-[500] leading-[15px] text-[14px] uppercase text-[#00297A]'>
									Payment Rails
								</h4>
								<h2 className='mt-[16px] mb-[24px] font-[500] text-[16px] lg:text-[32px] leading-[35px] text-[#101828]'>
									Move fiat easily and confidently
								</h2>
							</div>
							<img
								src={paymentrails}
								alt='payment rails'
								// className='h-full'
							/>
							<div className='px-7 pt-[23px] pb-[31px]'>
								<ul className='list-disc'>
									<li className='font-[400] text-[16px] leading-[18px] '>
										Centralize and automate payments across banks, payment
										methods
									</li>
									<li className='font-[400] text-[16px] leading-[18px] py-[16px]'>
										Track returned payments in real time using webhooks, and API
									</li>
									<li className='font-[400] text-[16px] leading-[18px] '>
										Easy to integrate, reducing your time to market
									</li>
								</ul>
							</div>
							<Link
								to='#'
								// pb-[71px]
								className='
								px-3
								 flex items-center text-[#0074FF] text-[16px] gap-4 leading-[18px] underline font-[400]'
							>
								Learn more
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
										fill='#0074FF'
									/>
								</svg>
							</Link>
						</div>
						<div className='lg:h-[644px]'>
							<div>
								<h4 className='font-[500] leading-[15px] text-[14px] uppercase text-[#00297A]'>
									SETTLEMENTS
								</h4>
								<h2 className='mt-[16px] mb-[24px] font-[500] text-[16px] lg:text-[32px] leading-[35px] text-[#101828]'>
									Streamline your settlement processes
								</h2>
							</div>
							<div className='lg:h-[310px]'>
								<img
									src={stremline}
									alt='settlements'
									className='lg:h-[310px]'
								/>
							</div>
							<div className='ps-7 pt-[23px] pb-[31px]'>
								<ul className='list-disc'>
									<li className='font-[400] text-[16px] leading-[18px] '>
										Easy API Integration to settlement your customers In 115+
										Countries
									</li>
									<li className='font-[400] text-[16px] leading-[18px] py-[16px]'>
										Competitive, Volume-Based pricing you can always rely on
									</li>
									<li className='font-[400] text-[16px] leading-[18px] '>
										Direct payouts to the local currency of your recipient,
										business or vendor
									</li>
								</ul>
							</div>
							<Link
								to='#'
								// pb-[71px]
								className='
								px-3
								 flex items-center text-[#0074FF] text-[16px] gap-4 leading-[18px] underline font-[400]'
							>
								Learn more
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
										fill='#0074FF'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<BusinessNeeds />
		</>
	);
};

export default AllAPIs;
