const Article = (props) => {
	// useEffect(()=>{
	//     const getScrollValue = getD;
	// })

	return (
		<div
			className='pax prose grid grid-cols-1 lg:ms-[130px] w-full overflow-y-scroll'
			id='pax'
		>
			{props?.payoutText && (
				<>
					<div>
						<h4
							id='payout'
							className='font-[600] text-[20px] leading-[35px]  text-[#101828] mt-[16px]'
						>
							Payout Types
						</h4>
						<p
							className='font-[400px] text-[20px] leading-[35px]
									 text-[#101828]
									'
						>
							{props?.payoutText}
							{/* Lorem ipsum dolor sit amet consectetur. Felis viverra habitasse
						semper. */}
						</p>

						<div className='grid md:grid-cols-2 lg:grid-cols-4 pt-[24px] gap-[12px]'>
							{props?.payoutData?.map((item, index) => (
								<div
									className='flex flex-col bg-[#F9FAFB] h-[156px] rounded-[5px] items-center justify-center
								py-[20px]
								'
									// px-[72px]
									key={index}
								>
									<img src={item?.img} alt={item?.name} />
									<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px] '>
										{item?.name}
									</p>
								</div>
							))}
						</div>
					</div>
					<hr className='border-t-[0.4px] border-t-[#B0B6C3] my-[48px]' />
				</>
			)}
			<h4
				id='currency'
				className='font-[600] text-[24px] leading-[35px]  text-[#101828] mt-0'
			>
				Supported Currencies
			</h4>
			<p
				className='font-[400px] text-[20px] leading-[35px]
									 text-[#101828]
									'
			>
				{props?.currency}
				{/* Lorem ipsum dolor sit amet consectetur. Felis viverra habitasse
					semper. */}
			</p>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 pt-[24px] gap-[12px]'>
				{props?.currencyData?.map((item) => (
					<div
						className='flex flex-col bg-[#F9FAFB]  rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
						key={item?.name}
					>
						<img src={item?.img} alt='euro icon' />

						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px] '>
							{item?.name}
						</p>
					</div>
				))}
				{/* <div
						className='flex flex-col bg-[#F9FAFB]  rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
					>
						<img src={eurImg} alt='euro icon' />
						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px]'>
							Euro (EUR)
						</p>
					</div>
					<div
						className='flex flex-col bg-[#F9FAFB] rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
					>
						<img src={ukImg} alt='euro icon' />

						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px]'>
							Pound sterling (GBP)
						</p>
					</div>
					<div
						className='flex flex-col bg-[#F9FAFB]
									 rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
					>
						<img src={canImg} alt='euro icon' />
						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px]'>
							Canadian dollar (CAD)
						</p>
					</div>
					<div
						className='flex flex-col bg-[#F9FAFB]
									 rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
					>
						<img src={auImg} alt='euro icon' />
						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px]'>
							Australian dollar (AUD)
						</p>
					</div>
					<div
						className='flex flex-col bg-[#F9FAFB]
									 rounded-[5px] items-center justify-center
								py-[21px]
								'
						// px-[72px]
					>
						<img src={cnyImg} alt='euro icon' />
						<p className='font-[500px] text-[16px] text-black leading-[35px] pt-[16px] '>
							Chinese yen (CNY)
						</p>
					</div> */}
			</div>
		</div>
	);
};

export default Article;
