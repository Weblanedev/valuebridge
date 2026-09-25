import { Link } from 'react-router-dom';
import settlementImg from '../assets/last-mile.svg';
import layersImg from '../assets/layers.svg';
import trustImg from '../assets/trust.svg';
import { Button } from '../components/CustomButtons';
import DescriptionComp from '../components/DescriptionComp';
import { FadeIn } from '../components/Motion';

const Company = () => {
	return (
		<>
			<section
				className={`
			relative overflow-hidden
			bg-[#0c2474]
			 lg:pt-[120px]
			lg:pb-[150px]
			text-white

	`}
			>
				<div className='pointer-events-none absolute inset-0' aria-hidden='true'>
					<div className='absolute -left-16 top-16 h-64 w-36 rounded-[2.5rem] bg-[#16348f]/70' />
					<div className='absolute left-[12%] top-10 h-[340px] w-[280px] rounded-[2.75rem] bg-[#14307f]' />
					<div className='absolute right-[8%] top-8 h-80 w-72 rounded-[3rem] bg-[#1a3d9e]/80' />
					<div className='absolute left-[20%] -bottom-8 h-24 w-72 rounded-[2rem] bg-[#102a78]' />
				</div>
				<div
					className='relative z-10 container mx-auto


			px-7
			'
				>
					<div
						className='flex justify-center
					 gap-4
		text-center

					'
					>
						<div
							className='
					py-24
					lg:w-[866px]
					md:py-0
					'
							// lg:pr-[45px]
						>
							<p className='font-[600] text-[18px] leading-[35px]'>
								WHO WE ARE
							</p>
							<h1
								className='text-[31px]
								lg:w-[710px]
								mx-auto
					lg:text-[54px] font-[600] lg:leading-[53px]
					 '
							>
								The company behind the future of money
							</h1>
							<p
								className='pt-[16px]
							lg:pb-[38px]
							lg:pt-[38px]
							font-[400]
							pb-[25px]
							text-[18px] lg:text-[22px] lg:leading-[35px]'
							>
								ValueBridge is the company behind the products building the future of money, from cross-border rails to payments, stablecoins, and AI.
							</p>
							<p
								// pt-[16px]
								// lg:pt-[38px]
								className='
						pb-[25px]
						lg:pb-[38px]
						font-[400]
						text-[18px] lg:text-[22px] lg:leading-[35px]'
							>
							We bring those products together so businesses can move money across borders, settle in local currency and stablecoins, and reach customers in chat.
							</p>
							<div
								className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2
								items-center'
								//  lg
							>
								<Link to='#' className='mx-auto'>
									<Button
										type='primary'
										btnText='Explore careers'
										icon={true}
									/>
								</Link>
							</div>
						</div>
						{/* <div className='order-first lg:order-last '>
							<img
								src={heroImg}
								alt='hero-img'
								className='h-full w-full'
								// className='w-full
								// '
								// h-[471.03px]
							/>
						</div> */}
					</div>
				</div>
			</section>

			<DescriptionComp
				minTitle='WHY US?'
				title='Helping our customers build for scale and impact'
				subTitle='ValueBridge helps businesses build on cross-border rails, payments, stablecoins, and AI.'
				link={false}
			/>
			<section
				className='container
			mx-auto px-7 pt-[45px] pb-[70px]'
			>
				<FadeIn className='grid lg:grid-cols-3 gap-8 lg:gap-[50px]'>
					<div
						className='grid grid-cols-1
						gap-[8.97px]
					 '
					>
						<div className='h-[134px]'>
							<img
								src={settlementImg}
								alt='Settlement'
								className='w-full
							h-full
							'
								// h-[186px]
							/>
						</div>
						<div
							className='text-center
						'
						>
							<h3 className='font-[500] text-[24px] leading-[32px] text-black pb-[4px]'>
								Fast track last-mile settlements
							</h3>
							<p className='font-[400] leading-[28px] text-[#344363] text-[18px]'>
								Settle your global partners and users in their local currency or in stablecoins, without complicated treasury operations.
							</p>
						</div>
					</div>
					<div
						className='grid grid-cols-1
						gap-[8.97px]
					'
					>
						<div className='h-[134px]'>
							<img
								src={layersImg}
								alt='Automate financial layers'
								className='w-full h-full'
								// h-[227px]
							/>
						</div>
						<div
							className='text-center
						'
							// pt-[34px]
						>
							<h3 className='font-[500] text-[24px] leading-[32px] text-black pb-[4px]'>
								Automate financial layers
							</h3>

							<p className='font-[400] leading-[28px] text-[#344363] text-[18px]'>
								Build for scale from the beginning by using our APIs to automate
								all your financial transactions and processes.
							</p>
						</div>
					</div>
					<div
						className='grid grid-cols-1
						gap-[8.97px]
						'
					>
						<div className='h-[134px]'>
							<img
								src={trustImg}
								alt='Build trust and transparency'
								className='w-full
h-full
								'
								// h-[227px]
								// h-[186px]
							/>
						</div>
						<div
							className='text-center
							'
							// pt-[34px]
						>
							<h3 className='font-[500] text-[24px] leading-[32px] text-black pb-[4px]'>
								Build trust and transparency
							</h3>

							<p className='font-[400] leading-[28px] text-[#344363] text-[18px]'>
								Provide more data points and analytics than your competitors
								with our suite of open transaction services.
							</p>
						</div>
					</div>
				</FadeIn>
			</section>

			<section
				className='
				py-[71px]
			lg:px-[61px]
			bg-[#F9FAFB]
			'
			>
				<div
					className='container mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			text-center
			'
				>
					<FadeIn className='flex flex-col lg:w-[716px] items-center mx-auto justify-center'>
						<h2 className='font-[600] text-[34px] lg:text-[45px] lg:leading-[59px]'>
							Come work with us
						</h2>

						<p className='font-[400px] text-[22px] text-[#101828] leading-[35px] py-[16px] pb-[24px]'>
							We are always on the lookout for talented individuals who share
							our vision. Check our Careers page to explore opportunities to
							join our exceptional team
						</p>
						<Link to='#'>
							<Button
								type='primary'
								btnText='Explore careers'
								icon={true}
								bgColor={true}
							/>
						</Link>
					</FadeIn>
				</div>
			</section>
		</>
	);
};

export default Company;
