import { Link } from 'react-router-dom';
import { FadeIn } from './Motion';

const DescriptionComp = ({ minTitle, title, subTitle, link, linkText }) => {
	return (
		<section
			className='
            pt-16
			lg:pt-28
			bg-[#f7f7f5]'
			// lg:pb-[150px]
		>
			<FadeIn
				className='container
				mx-auto
			px-7
			'
			>
				<div className='lg:w-[665px]'>
					{minTitle && (
						<h5 className='pb-[11px] text-[20px] leading-[35px] font-[600] '>
							{minTitle}
						</h5>
					)}
					<h2 className='font-semibold text-[36px] lg:text-[58px] lg:leading-[1.08] tracking-[-0.04em] text-[#101828]'>
						{title}
					</h2>

					<p className='font-[400px] text-[22px] text-[#101828] leading-[36px] py-[16px] `pb-[24px]'>
						{subTitle}
					</p>

					{link === true && (
						<Link
							to='#'
							className='flex items-center text-[#0074FF] text-[20px] gap-4 leading-[35px] underline'
						>
							{linkText}
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
					)}
				</div>
			</FadeIn>
		</section>
	);
};

export default DescriptionComp;
