import { Link } from 'react-router-dom';
import settlementImg from '../assets/last-mile.svg';
import layersImg from '../assets/layers.svg';
import trustImg from '../assets/trust.svg';
import { Button } from '../components/CustomButtons';
import DescriptionComp from '../components/DescriptionComp';

const Company = () => {
	return (
		<>
			<section
				className={`
			bg-blue-950
			 lg:pt-[120px]
			lg:pb-[150px]
			text-white

	`}
			>
				<div
					className='container mx-auto


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
							<p className='font-[600] text-[16px] leading-[35px]'>
								WHO WE ARE
							</p>
							<h1
								className='text-[28px]
								lg:w-[710px]
								mx-auto
					lg:text-[48px] font-[600] lg:leading-[53px]
					 '
							>
								Empowering Businesses with Global Payment Solutions
							</h1>
							<p
								className='pt-[16px]
							lg:pb-[38px]
							lg:pt-[38px]
							font-[400]
							pb-[25px]
							text-[16px] lg:text-[20px] lg:leading-[35px]'
							>
								At ValueBridge HQ, we pride ourselves on having a talented and diverse team dedicated to advancing our mission and delivering exceptional payment solutions to our valued clients.
							</p>
							<p
								// pt-[16px]
								// lg:pt-[38px]
								className='
						pb-[25px]
						lg:pb-[38px]
						font-[400]
						text-[16px] lg:text-[20px] lg:leading-[35px]'
							>
							We believe that the best innovations stem from diverse perspectives and collective intelligence. By fostering a collaborative environment, we empower our team members to excel, ensuring that our clients have access to state-of-the-art payment solutions.
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
				subTitle='To bridge the gap between businesses and their financial success by providing innovative, secure, and efficient payment processing services that cater to the unique needs of our clients globally.'
				link={false}
			/>
			<section
				className='container
			mx-auto px-7 pt-[45px] pb-[70px]'
			>
				<div className='grid lg:grid-cols-3 gap-8 lg:gap-[50px]'>
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
							<h3 className='font-[500] text-[21px] leading-[32px] text-black pb-[4px]'>
								Fast track last-mile settlements
							</h3>
							<p className='font-[400] leading-[28px] text-[#344363] text-[16px]'>
								Settle your global partners and users in their local currency
								easily and quickly without complicated treasury management ops.
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
							<h3 className='font-[500] text-[21px] leading-[32px] text-black pb-[4px]'>
								Automate financial layers
							</h3>

							<p className='font-[400] leading-[28px] text-[#344363] text-[16px]'>
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
							<h3 className='font-[500] text-[21px] leading-[32px] text-black pb-[4px]'>
								Build trust and transparency
							</h3>

							<p className='font-[400] leading-[28px] text-[#344363] text-[16px]'>
								Provide more data points and analytics than your competitors
								with our suite of open transaction services.
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
					className='container mx-auto
			px-7 pb-[28px] lg:pb-[48px]
			text-center
			'
				>
					<div className='flex flex-col lg:w-[716px] items-center mx-auto justify-center'>
						<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[59px]'>
							Come work with us
						</h2>

						<p className='font-[400px] text-[20px] text-[#101828] leading-[35px] py-[16px] pb-[24px]'>
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
					</div>
				</div>
			</section>
		</>
	);
};

export default Company;
