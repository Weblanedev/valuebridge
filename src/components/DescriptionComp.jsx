import { Link } from 'react-router-dom';

const DescriptionComp = ({ minTitle, title, subTitle, link, linkText }) => {
	return (
		<section
			className='
            pt-[40px]
			lg:pt-[80px]'
			// lg:pb-[150px]
		>
			<div
				// md:max-w-6xl
				className='container
				mx-auto
			px-7
			'
			>
				<div className='lg:w-[665px]'>
					{minTitle && (
						<h5 className='pb-[11px] text-[18px] leading-[35px] font-[600] '>
							{minTitle}
						</h5>
					)}
					<h2 className='font-[600] text-[30px] lg:text-[40px] lg:leading-[50px]'>
						{title}
					</h2>

					<p className='font-[400px] text-[20px] text-[#101828] leading-[36px] py-[16px] `pb-[24px]'>
						{subTitle}
					</p>

					{link === true && (
						<Link
							to='#'
							className='flex items-center text-[#0074FF] text-[18px] gap-4 leading-[35px] underline'
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
			</div>
		</section>
	);
};

export default DescriptionComp;
