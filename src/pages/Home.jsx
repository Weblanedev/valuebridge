// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import DescriptionComp from '../components/DescriptionComp';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { Link } from 'react-router-dom';
import corporateImg from '../assets/corporate-treasury.svg';
import heroImg from '../assets/hero-img.svg';
import cash from '../assets/icons/cash.svg';
import liquidity from '../assets/icons/liquidity.svg';
import OffRamp from '../assets/icons/off-ramp.svg';
import payout from '../assets/icons/payout.svg';
import settlement from '../assets/icons/settlements.svg';
import swaps from '../assets/icons/swaps.svg';
import treasury from '../assets/icons/treasury.svg';
import wallets from '../assets/icons/wallet.svg';

import currencyImg from '../assets/trust.svg';
import psImg from '../assets/layers.svg';
import rateImg from '../assets/rate.svg';
import settlementImg from '../assets/settlement.svg';
import vipImg from '../assets/vip.svg';
import worldImg from '../assets/world.svg';
import { Button } from '../components/CustomButtons';
import Tools from '../components/Tools';

export default function Home() {
	return (
		<>
			<section
				// ${subTitle2 ? 'lg:pt-[120px]' : 'lg:pt-[150px]'}
				// ${logo ? 'lg:pb-[68px]' : 'lg:pb-[150px]'}
				className={`
			bg-blue-950
			text-white
			py-[40px]
			lg:pb-[0px]
			lg:pt-[60px]

	`}
			>
				<div
					// md:max-w-6xl
					className='
				container
				mx-auto
				lg:items-center
				px-7
				lg:ps-7
				'
				// justify-center
				>
					<div
						// grid-flow-row-dense
						// 	grid
						// lg:grid-cols-2
						className='
						flex
						flex-col
						justify-between
						gap-12
						lg:gap-16
items-center
						'
					// w-full
					>
						<div
							// flex
							// flex-col
							className='
							py-[14px]
							md:pb-[27px] md:pt-[0px]
							text-center
							'
						// pr-[95px]
						// lg:w-[387px]
						// justify-center
						// col-start-1
						// end-6
						// pr-[45px]
						// px-6z
						>
							<h1
								className='text-[32px]
					lg:text-[64px] font-[700] lg:leading-[70px]
					 '
							>
								Seamless Payment Solutions
							</h1>
							<p
								// lg:pb-[38px]
								// lg:pt-[38px]
								className='pt-[16px]
							font-[400]
							pb-[25px]
							text-[18px] lg:text-[20px] leading-[35px] w-[90%] mx-auto'
							>
								At ValueBridge HQ, we specialize in providing top-tier payment processing solutions tailored to meet the unique needs of your business.
								Our mission is to bridge the gap between your business and financial success through innovative, secure, and efficient payment services.
							</p>

							<div
								className='flex flex-col lg:flex-row justify-center space-y-2 lg:space-y-0 lg:space-x-2
								'
							// items-center
							>
								<Link to='/contact'>
									<Button type='primary' btnText='Talk to us' icon={true} />
								</Link>
							</div>
						</div>
						<div
							className={`order-first lg:order-last
							`}
						// w-full
						// lg:pr-0
						// lg:col-span-2
						// bg-red-900
						// ${location === '/' && 'overflow-visible'}

						// col-start-6
						//  w-fit
						>
							<img
								src={"https://cdn.prod.website-files.com/62dc80e748e94840febe84c5/639b1e29634eb2c32d000316_dashboard-img.svg"}
								alt='hero-img'
								// className='w-full'
								// className='lg:h-full lg:w-full'
								className='w-full'
							// h-[471.03px]
							/>
						</div>
					</div>
				</div>
			</section>

			<DescriptionComp
				title='Global access to international enterprises'
				subTitle='Our advanced payment platform is designed to handle transactions quickly and securely, ensuring a seamless experience for both you and your customers. Our streamlined payment processes help you save time and reduce operational costs, allowing you to focus on growing your business.'
				link={true}
				linkText='Learn more about us'
			/>
			<section
				// md:max-w-6xl
				className='container

			mx-auto px-7 pt-[32px] pb-[59px]'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-2'>
					<div className='grid grid-cols-1 gap-[8.97px]'>
						<div className='h-[118px]'>
							<img
								src={settlementImg}
								alt='Settlement'
								className='w-full h-full'
							// h-[186px]
							/>
						</div>
						<div className='text-center '>
							<h3 className='font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]'>
								Recurring Billing
							</h3>

							<p className='font-[400] leading-[24px] text-[#475467]'>
								Simplify subscription management with our automated recurring billing options.
							</p>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-[8.97px] lg:h-[233px]'>
						<div className='h-[118px]'>
							<img
								src={rateImg}
								alt='Rates'
								className='w-full
							h-full

							'
							// h-[186px]
							/>
						</div>
						<div className='text-center '>
							<h3 className='font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]'>
								Payment Gateway
							</h3>

							<p className='font-[400] leading-[24px] text-[#475467]'>
								Our secure payment gateway integrates with your website or app.
							</p>
						</div>
					</div>
					<div className='grid grid-cols-1  gap-[8.97px] lg:h-[233px]'>
						<div className='h-[118px]'>
							<img
								src={currencyImg}
								alt='Multi-currency support'
								className='w-full h-full'
							// h-[208px]
							/>
						</div>
						<div className='text-center mt-[22px]'>
							<h3 className='font-[500] text-[18px] leading-[35px] text-[#101828] pb-[3px]'>
								International Payments
							</h3>

							<p className='font-[400] leading-[24px] text-[#475467]'>
								Expand your business globally with our multi-currency payment processing services.
							</p>
						</div>
					</div>
					<div className='grid grid-cols-1 gap-[8.97px] lg:h-[233px]'>
						<div className='h-[118px]'>
							<img
								src={psImg}
								alt='support'
								className='w-full
							h-full
							'
							/>
						</div>
						<div className='text-center'>
							<h3
								className='font-[500] text-[18px] leading-[35px] text-[#101828]
							pb-[3px]
							'
							>
								VIP customer support
							</h3>

							<p className='font-[400] leading-[24px] text-[#475467]'>
								Rapid settlement within 48 hours.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div
					// md:max-w-6xl
					className='container

					mx-auto
    px-7
    '
				>
					<div
						className='grid grid-cols-1 lg:grid-cols-2
					items-center
                    '
					>
						<div className='w-full'>
							<img src={worldImg} />
						</div>
						<div className='xl:ml-[130px] lg:w-[442px] py-[78px]'>
							<h4 className='font-[400] leading-[32px] text-[14px] uppercase text-[#00611B]'>
							How It Works
							</h4>
							<h2 className='mt-[8px] mb-[24px] font-[600] text-[24px] leading-[36px] text-[#101828]'>
							Expand your business globally with our multi-currency payment processing services.
							</h2>

							<div>
								{list2.map((item, index) => (
									<div
										className='flex gap-[9px] items-start pb-[19px]'
										key={index}
									>
										<svg
											width='29'
											height='29'
											viewBox='0 0 29 29'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M14.5 0C6.49237 0 0 6.49237 0 14.5C0 22.5076 6.49237 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 6.49237 22.5076 0 14.5 0ZM21.2171 10.4889L14.2716 21.1047C14.2698 21.1066 14.2662 21.1084 14.2662 21.1102C14.2299 21.1646 14.21 21.2262 14.1647 21.2769C14.1012 21.3458 14.0197 21.3821 13.9472 21.4346C13.9291 21.4473 13.9109 21.4618 13.891 21.4745C13.7786 21.5452 13.6626 21.5923 13.5358 21.6231C13.4941 21.634 13.456 21.6449 13.4125 21.6521C13.3115 21.666 13.2093 21.6672 13.108 21.6558C13.0365 21.6512 12.9655 21.6403 12.8959 21.6231C12.8242 21.6015 12.7544 21.5736 12.6875 21.5397C12.6295 21.5126 12.5679 21.5053 12.5135 21.4709C12.4736 21.4455 12.4519 21.4056 12.4174 21.3748C12.4029 21.3621 12.3848 21.3585 12.3703 21.3458L8.32663 17.6066C8.08694 17.3765 7.94711 17.0615 7.93719 16.7293C7.92727 16.3972 8.04805 16.0744 8.27358 15.8304C8.4991 15.5863 8.81137 15.4405 9.14327 15.4242C9.47516 15.408 9.80019 15.5226 10.0485 15.7434L12.9757 18.4513L19.0929 9.10056C19.277 8.81887 19.5655 8.62185 19.8948 8.55285C20.2242 8.48385 20.5675 8.54851 20.8492 8.73263C21.1309 8.91673 21.3279 9.20521 21.3969 9.53458C21.4659 9.86395 21.4012 10.2072 21.2171 10.4889Z'
												fill='blue'
											/>
										</svg>
										<div>
											<h5 className='font-[500] text-[18px] leading-[32px] text-[#101828]'>
												{item?.title}
											</h5>

											<p className='font-[400] text-[16px] leading-[32px] text-[#344054]'>
												{item.subTitle}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section
				className='
				py-[60px]
				lg:px-[49px]
			'
			>
				<div
					// md:max-w-6xl
					className='container mx-auto

					px-7
    '
				>
					<div
						className='grid grid-cols-1 lg:grid-cols-2
						items-center
						'
					>
						<div
							className='
						 lg:w-[442px]
						 '
						//  lg:ps-[56px]
						//  py-[78px]
						>
							<h4 className='font-[400] leading-[32px] text-[14px] uppercase text-[#4C00EE]'>
								Payments							</h4>
							<h2 className='mt-[8px] mb-[24px] font-[600] text-[24px] leading-[36px] text-[#101828]'>
							Accept payments on the go with our mobile payment solutions, perfect for businesses of all sizes
							</h2>

							<div>
								{list3.map((item, index) => (
									<div
										className='flex gap-[9px] items-start pb-[19px]'
										key={index}
									>
										<svg
											width='29'
											height='29'
											viewBox='0 0 29 29'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M14.5 0C6.49237 0 0 6.49237 0 14.5C0 22.5076 6.49237 29 14.5 29C22.5076 29 29 22.5076 29 14.5C29 6.49237 22.5076 0 14.5 0ZM21.2171 10.4889L14.2716 21.1047C14.2698 21.1066 14.2662 21.1084 14.2662 21.1102C14.2299 21.1646 14.21 21.2262 14.1647 21.2769C14.1012 21.3458 14.0197 21.3821 13.9472 21.4346C13.9291 21.4473 13.9109 21.4618 13.891 21.4745C13.7786 21.5452 13.6626 21.5923 13.5358 21.6231C13.4941 21.634 13.456 21.6449 13.4125 21.6521C13.3115 21.666 13.2093 21.6672 13.108 21.6558C13.0365 21.6512 12.9655 21.6403 12.8959 21.6231C12.8242 21.6015 12.7544 21.5736 12.6875 21.5397C12.6295 21.5126 12.5679 21.5053 12.5135 21.4709C12.4736 21.4455 12.4519 21.4056 12.4174 21.3748C12.4029 21.3621 12.3848 21.3585 12.3703 21.3458L8.32663 17.6066C8.08694 17.3765 7.94711 17.0615 7.93719 16.7293C7.92727 16.3972 8.04805 16.0744 8.27358 15.8304C8.4991 15.5863 8.81137 15.4405 9.14327 15.4242C9.47516 15.408 9.80019 15.5226 10.0485 15.7434L12.9757 18.4513L19.0929 9.10056C19.277 8.81887 19.5655 8.62185 19.8948 8.55285C20.2242 8.48385 20.5675 8.54851 20.8492 8.73263C21.1309 8.91673 21.3279 9.20521 21.3969 9.53458C21.4659 9.86395 21.4012 10.2072 21.2171 10.4889Z'
												fill='blue'
											/>
										</svg>
										<div>
											<h5 className='font-[500] text-[18px] leading-[32px] text-[#101828]'>
												{item?.title}
											</h5>

											<p className='font-[400] text-[16px] leading-[32px] text-[#344054]'>
												{item.subTitle}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div
							className='order-first lg:order-last
						'
						// lg:py-5
						>
							<img src={heroImg} />
						</div>
					</div>
				</div>
			</section>

			<section
				className='
				py-[60px]
			lg:px-[49px]
			'
			>
				<div
					// md:max-w-6xl
					className='container

				px-6
					mx-auto'
				>
					<div
						// flex-col
						// lg:flex-row
						// flex
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0
						'
					// justify-between items-center
					// lg:justify-end
					// gap-12px-8
					>
						<div className='grid grid-cols-1 gap-[16px] lg:pr-16 lg:border-r-[0.5px] lg:border-[#B3B3B3] '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								20M+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Transactions processed
							</p>
						</div>
						<div className='grid grid-cols-1 gap-[16px] lg:px-16 lg:border-r-[0.5px] lg:backdrop:order-[#B3B3B3] '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								2K+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Awesome Customers
							</p>
						</div>

						<div className='grid grid-cols-1 gap-[16px] lg:px-16 lg:border-r-[0.5px] lg:border-[#B3B3B3]  '>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								45+
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Global Markets
							</p>
						</div>

						<div className='grid grid-cols-1 gap-[16px]'>
							<h4 className='font-[400] text-[56px] leading-[68px] text-center text-[#1D2939]'>
								20K
							</h4>
							<p
								className='font-[500px] text-[18px] leading-[24px]
									text-center text-[#475467]
									'
							>
								Daily API Calls
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				className='
				py-[71px]
			lg:px-[61px]
			bg-[#F9FAFB]
			'
			>
				<div
					// md:max-w-6xl
					className='container

					mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			'
				>
					<div className='lg:w-[665px]'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
							All the tools you need to setup payments for your business						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] `pb-[24px]'>
							In today's interconnected world, reaching new markets is crucial for growth. At ValueBridge HQ,
							we enable international enterprises to access local markets effortlessly
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
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
		</>
	);
}

const list = [
	{
		title: 'Multiple Currencies',
		subTitle: 'Provide payment services to and from multiple countries.'
	},
	{
		title: 'Cross-Border Transfer & Settlement',
		subTitle: 'Settle your global partners in their local currency.'
	},
	{
		title: 'Large-Volume Transactions',
		subTitle:
			'Our infrastructure is designed to take the pressure off your business.'
	}
];
const list2 = [
	{
		title: 'Fraud Prevention',
		subTitle: ' Advanced fraud detection tools to keep your business and customers safe.'
	},
	{
		title: 'Cheap Rates',
		subTitle: 'Our transaction fees are transparent and unbeatable.'
	},
	{
		title: 'POS Systems:',
		subTitle: 'Enhance your in-store experience with our state-of-the-art Point of Sale systems.'
	}
];
const list3 = [
	{
		title: 'Localized Payment Methods',
		subTitle:
			'Provide your customers with their preferred payment options, boosting trust and sales.'
	},
	{
		title: 'Collect Funds Instantly',
		subTitle: 'Collect deposits from multiple countries easily and seamlessly.'
	},
	{
		title: 'Cross-Border Transaction',
		subTitle:
			'Simplify cross-border transactions with our efficient and cost-effective solutions.'
	}
];
