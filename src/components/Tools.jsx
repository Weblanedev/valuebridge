const Tools = ({ toolsData }) => {
	return (
		<div className='container mx-auto px-7'>
			<div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px] xl:gap-[50px]'>
				{toolsData?.map((item, index) => (
					<div className='lg:w-[261px]' key={index}>
						<img src={item?.icon} />

						<h4 className='font-[500] text-[18px] leading-[35px]  text-[#101828] mt-[16px]'>
							{item?.title}
						</h4>
						<p
							className='font-[400px] text-[16px] leading-[26px]
                         text-[#101828]
                        '
						>
							{item?.subTitle}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tools;
