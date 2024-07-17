// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { useEffect, useState } from 'react';
import auImg from '../assets/australia.svg';
import bank from '../assets/bankImg.svg';
import heroImg from '../assets/buycrypto.svg';
import canImg from '../assets/canada.svg';
import cnyImg from '../assets/china.svg';
import crypto from '../assets/crypto.svg';
import eurImg from '../assets/euro.svg';
import custody from '../assets/icons/custody.svg';
import liquidity from '../assets/icons/liquidity.svg';
import reporting from '../assets/icons/reporting.svg';
import transaction from '../assets/icons/transaction.svg';
import mobile from '../assets/mobile-money.svg';
import third from '../assets/thirdparty.svg';
import ukImg from '../assets/united-kingdom.svg';
import usImg from '../assets/united-state.svg';
import Article from '../components/AContent';
import BusinessNeeds from '../components/BusinessNeeds';
import TableofContent from '../components/TOC';
import Tools from '../components/Tools';
const BuyCrypto = () => {
	const [sidebarTop, setSidebarTop] = useState(undefined);

	useEffect(() => {
		const chatEl = document.querySelector('.sidebar')?.getBoundingClientRect();
		setSidebarTop(chatEl?.top);
	}, []);

	useEffect(() => {
		if (!sidebarTop) return;
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	}, [sidebarTop]);

	const isSticky = () => {
		const chatEl = document.querySelector('.sidebar');
		const scrollTop = window.scrollY;
		if (scrollTop >= sidebarTop - 10) {
			chatEl.classList.add('is-sticky');
		} else {
			chatEl.classList.remove('is-sticky');
		}

		if (scrollTop >= 2284) {
			chatEl.classList.remove('is-sticky');
		}
	};
	return (
		<>
			<Hero
				minTitle='Global Payments'
				title='Simplifying Global Payments for International Enterprises'
				subTitle='Our Pay-In services are designed to simplify the process, enabling your business to receive payments from customers around the world effortlessly and securely.'
				buttonTxt='Learn More'
				heroImg={heroImg}
			/>
			<section
				className='
				py-[71px]
			lg:px-[61px]
			'
			// bg-[#F9FAFB]
			>
				<div
					className='container mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			'
				>
					<div className='lg:w-[665px]'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
							Key Features
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] pb-[24px]'>
							Improve customer experience and satisfaction by providing a seamless and secure payment process.
							Streamline your payment processing, reduce administrative overhead, and enhance your operational efficiency.
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: liquidity,
							title: 'Multi-Currency Support',
							subTitle: 'Accept payments in multiple currencies, providing a seamless experience for your international customers.'
						},
						{
							icon: custody,
							title: 'Transparent Fees',
							subTitle:
								'Enjoy competitive and transparent pricing with no hidden charges, allowing you to manage your costs effectively.'
						},
						{
							icon: transaction,
							title: 'Fast transactions',
							subTitle:
								'Ensure quick and efficient payment processing, reducing delays and improving cash flow.'
						},
						{
							icon: reporting,
							title: 'Comprehensive Reporting',
							subTitle:
								'Access detailed reports and analytics to gain insights into your payment activities and optimize your operations.'
						}
					]}
				/>
				<div
					className='container mx-auto
					px-7
					'
				>
					<div
						className='flex flex-col lg:flex-row lg:grid-cols-2
						items-start pt-[112px]'
					>
						<div
							className={`hidden lg:block lg:grid-cols-1

							 lg:w-[338px]
							 `}
						//  ${ref?.current?.offsetTop > window?.scrollY && 'fixed'}
						//  sticky
						>
							<TableofContent
								headings={[
									{
										level: 1,
										text: 'Payout Types',
										id: 'payout'
									},
									{
										level: 2,
										text: 'Supported currencies',
										id: 'currency'
									}
								]}
							/>
						</div>
						<Article
							payoutText='We offer a range of payout types to suit your preferences'
							payoutData={[
								{ name: 'Banks', img: bank },
								{ name: 'Mobile Money', img: mobile },
								{ name: 'Third Party', img: third }
							]}
							currency='Our platform supports a wide range of  currencies to enable you stay ahead of the curve'
							currencyData={[
								{ name: 'US Dollar (USD)', img: usImg },
								{ name: 'Euro (EUR)', img: eurImg },
								{ name: 'Pound sterling (GBP)', img: ukImg },
								{ name: 'Canadian dollar (CAD)', img: canImg },
								{ name: 'Australian dollar (AUD)', img: auImg },
								{ name: 'Chinese yen (CNY)', img: cnyImg }
							]}
						/>
					</div>
				</div>
			</section>

			{/* <BusinessNeeds /> */}
		</>
	);
};

export default BuyCrypto;
