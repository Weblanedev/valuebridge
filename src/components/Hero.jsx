import { Link } from 'react-router-dom';
import kucoin from '../assets/KUCOIN.svg';
import TTFCX from '../assets/TTFCX.svg';
import binanceLogo from '../assets/binance.svg';
import bundleLogo from '../assets/bundle.svg';
import scalex from '../assets/scalex-logo.svg';
import { Button } from './CustomButtons';
const logo = [binanceLogo, kucoin, bundleLogo, TTFCX, scalex];

const Hero = ({ title, subTitle, subTitle2, buttonTxt, heroImg, minTitle }) => {
	return (
		<section
			className={`
			bg-blue-950
			${subTitle2 ? 'pt-[60px] lg:pt-[120px]' : 'lg:pt-[60px]'}
			${logo ? 'pb-[34px] lg:pb-[68px]' : 'lg:pb-[150px]'}
			text-white
			`}
		>
			<div className='container mx-auto px-7'>
				<div
					className='grid
					lg:grid-cols-2
					gap-4
					lg:gap-8
					items-center
					'
				>
					<div
						className={`
						py-[12px]
					lg:py-[24px]
					`}
						// ${location?.split('/')[2] === 'all-apis' && 'xl:w-[627px]'}
						// ${(location?.split('/')[2] === 'settlements' || 'payouts') && 'xl:w-[651px]'}
						// lg:w-[651px]
						// lg:w-[487px]
						// col-start-1
						// end-6
						// pr-[45px]
						// px-6z
					>
						{minTitle && (
							<p className='font-[500] text-[16px] leading-[35px]'>
								{minTitle}
							</p>
						)}
						<h1
							className='text-[32px]
					lg:text-[64px] font-[700] lg:leading-[70px]
					 '
						>
							{title}
						</h1>
						<p
							// lg:pb-[38px]
							// lg:pt-[38px]
							className='pt-[16px]
							font-[400]
							pb-[25px]
							text-[18px] lg:text-[20px] leading-[35px]'
						>
							{subTitle}
						</p>
						{subTitle2 && (
							<p
								// pt-[16px]
								// lg:pt-[38px]
								className='
						pb-[25px]
						lg:pb-[38px]
						font-[400]
						text-[18px] lg:text-[20px] leading-[35px]'
							>
								{subTitle2}
							</p>
						)}
						<div
							className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2
					lg:items-center'
						>
							<Link to='#'>
								<Button type='primary' btnText={buttonTxt} icon={true} />
							</Link>
						</div>
					</div>
					<div
						className={`order-first lg:order-last
						pr-0
						justify-end
						lg:flex
						`}
					>
						<img src={heroImg} alt='hero-img' className='md:w-full' />
					</div>
				</div>
				{/* {logo && (
					<div
						className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 mt-[60px] lg:mt-[120px]
						lg:w-[1120px]
					mx-auto items-center
					justify-center
					gap-8
					'
					>
						{logo.map((i, index) => (
							<img src={i} key={index} />
						))}
					</div>
				)} */}
			</div>
		</section>
	);
};
export default Hero;
