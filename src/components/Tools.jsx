import { FadeIn } from './Motion';

const Tools = ({ toolsData }) => {
	return (
		<div className='container mx-auto px-7'>
			<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-[25px] xl:gap-[50px]'>
				{toolsData?.map((item, index) => (
					<FadeIn className='lg:w-[261px]' delay={index * 0.08} key={index}>
						<img src={item?.icon} className='h-10 w-auto md:h-auto' />

						<h4 className='mt-2 font-[500] text-[16px] leading-6 text-[#101828] md:mt-[16px] md:text-[20px] md:leading-[35px]'>
							{item?.title}
						</h4>
						<p
							className='text-[14px] font-[400] leading-5 text-[#101828] md:text-[18px] md:leading-[26px]'
						>
							{item?.subTitle}
						</p>
					</FadeIn>
				))}
			</div>
		</div>
	);
};

export default Tools;
