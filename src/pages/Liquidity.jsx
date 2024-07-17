// import heroImg from '../assets/images/Hero-image.png';
// import scrollImg from '../assets/images/srcoll.svg';
import Hero from '../components/Hero';
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });
import { useEffect, useState } from 'react';
import busdImg from '../assets/BUSD.svg';
import usdcImg from '../assets/USDC.svg';
import usdtImg from '../assets/USDT.svg';
import ghcImg from '../assets/ghana.svg';
import c2f from '../assets/icons/c2f.svg';
import liquidity from '../assets/icons/liquidity.svg';
import reporting from '../assets/icons/reporting.svg';
import transaction from '../assets/icons/transaction.svg';
import kesImg from '../assets/kenya.svg';
import heroImg from '../assets/liquidity.svg';
import ngnImg from '../assets/nigeria.svg';
import Article from '../components/AContent';
import BusinessNeeds from '../components/BusinessNeeds';
import TableofContent from '../components/TOC';
import Tools from '../components/Tools';

const Liquidity = () => {
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

		if (scrollTop >= 1900) {
			chatEl.classList.remove('is-sticky');
		}
	};
	return (
		<>
			<Hero
				minTitle='LIQUIDITY'
				title='Liquidity for peer-to-peer crypto exchanges and marketplaces'
				subTitle='Take your customers global with our payments API'
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
							Benefits
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] pb-[24px]'>
							Lorem ipsum dolor sit amet consectetur. Felis viverra habitasse
							semper cursus pretium neque.
						</p>
					</div>
				</div>
				<Tools
					toolsData={[
						{
							icon: liquidity,
							title: 'Multi-currency Support',
							subTitle:
								'Integrate with a wide array of banks and payment processors across multiple countries'
						},
						{
							icon: transaction,
							title: 'Fast transactions',
							subTitle:
								'Intelligently routed transactions to ensure increased speed and deliverability'
						},
						{
							icon: c2f,
							title: 'Crypto to Fiat',
							subTitle:
								'Crypto/Fiat settlement solutions to eliminate complex conversion bottlenecks'
						},
						{
							icon: reporting,
							title: 'Reporting',
							subTitle:
								'Advanced reporting to smoothen your accounting operations'
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
									// {
									// 	level: 1,
									// 	text: 'Payout Types',
									// 	id: 'payout'
									// },
									{
										level: 2,
										text: 'Supported currencies',
										id: 'currency'
									}
								]}
							/>
						</div>
						<Article
							// payoutText='We offer a range of payout types to suit your preferences'
							// payoutData={['Banks', 'Mobile Money', 'Crypto', 'Third Party']}
							currency='Our platform supports a wide range of  currencies to enable you stay ahead of the curve'
							currencyData={[
								{ name: 'Tether (USDT)', img: usdtImg },
								{ name: 'Binance USD (BUSD)', img: busdImg },
								{ name: 'USD Coin (USDC)', img: usdcImg },
								{ name: 'Nigerian Naira (NGN)', img: ngnImg },
								{ name: 'Kenya Shillings (KES)', img: kesImg },
								{ name: 'Ghana Cedis (GHC)', img: ghcImg }
							]}
						/>
					</div>
				</div>
			</section>

			<BusinessNeeds />
		</>
	);
};

export default Liquidity;
