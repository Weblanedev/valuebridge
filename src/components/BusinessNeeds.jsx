import apiImg from '../assets/api.svg';
import fastImg from '../assets/fast.svg';
import instantImg from '../assets/instant.svg';
import marketImg from '../assets/market.svg';
const BusinessNeeds = () => {
	return (
		<section
			// py-[100px]
			className='
			py-[50px]
    lg:py-[100px]
lg:px-[61px]
'
			// bg-blue-950
		>
			<div className='container mx-auto px-7'>
				<div
					className='grid lg:grid-cols-1 gap-[25px] lg:gap-[50px]
            items-center
            '
				>
					<div className='h-fit'>
						<h2 className=' mb-[46px] font-[500] text-[16px] lg:text-[32px] leading-[35px] text-[#101828]'>
							Everything your business needs
						</h2>

						<div
							className='grid md:grid-cols-2 lg:grid-cols-4
							items-center
							gap-[25px]
							'
							// gap-[12px]
						>
							<div
								className='grid grid-cols-1 items-center justify-center
                            gap-[23px]
                                '
								// mt-[23px]
							>
								<div className='flex  justify-center h-[146px]'>
									<img src={marketImg} alt='' className='h-full' />
								</div>
								<div className='h-[72px] text-center'>
									<h3 className='pb-[6px] text-[19px] leading-[21px] font-[500] text-[#101828]'>
										Expand into new markets
									</h3>
									<p className='font-[400] text-[16px] leading-[24px] text-[#344363]'>
										Easily grow into new markets while keeping your business
										compliant.
									</p>
								</div>
							</div>
							<div
								className='grid grid-cols-1
								items-center
                                justify-center
								gap-[23px]
                                '
							>
								<div className='flex justify-center h-[146px]'>
									<img src={instantImg} alt='' className='h-full' />
								</div>
								<div
									className=' h-[72px]
								text-center'
									// mt-[23px]
								>
									<h3 className='pb-[6px] text-[19px] leading-[21px] font-[500] text-[#101828]'>
										Move assets at scale instantly
									</h3>
									<p className='font-[400] text-[16px] leading-[24px] text-[#344363]'>
										Transfer any asset in real-time, 24x7, within our network
									</p>
								</div>
							</div>
							<div
								className='grid grid-cols-1
                                justify-center
                                gap-[23px]
								items-center
                                '
								// h-[276px]
							>
								<div className='flex  justify-center h-[146px]'>
									<img src={fastImg} alt='' className='h-full' />
								</div>
								<div className='h-[72px] text-center'>
									<h3 className='pb-[6px] text-[19px] leading-[21px] font-[500] text-[#101828]'>
										Fast Settlements
									</h3>
									<p className='font-[400] text-[16px] leading-[24px] text-[#344363]'>
										Settle your global partners in their local currency
									</p>
								</div>
							</div>
							<div
								className='grid grid-cols-1
                                justify-center
                                gap-[23px]
								items-center'
							>
								<div className='flex  justify-center h-[146px]'>
									<img
										src={apiImg}
										alt=''
										className='h-full'
										// className='h-[178px]'
									/>
								</div>
								<div className='h-[72px] text-center'>
									<h3 className='pb-[6px] text-[19px] leading-[21px] font-[500] text-[#101828]'>
										API Documentation
									</h3>
									<p className='font-[400] text-[16px] leading-[24px] text-[#344363]'>
										Dive into the details of our APIs and see how they can work
										for your business.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='h-fit'></div>
				</div>
			</div>
		</section>
	);
};

export default BusinessNeeds;
