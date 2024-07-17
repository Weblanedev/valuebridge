import { Button } from '../components/CustomButtons';

const ContactUs = () => {
	return (
		<>
			<section
				className={`
			bg-blue-950
			 lg:pt-[120px]
			 pb-[50px]
			 text-white
			 lg:mb-[0px]
			 mb-[100px]
			 `}
			>
				<div
					className='container mx-auto
			px-7
			'
				>
					<div
						className='grid lg:grid-cols-2
					w-full gap-0 lg:gap-4
		'
					>
						<div
							className='
							py-[12px]
					md:py-[24px]
					lg:pr-[45px]
					'
						>
							<p className='font-[600] text-[16px] leading-[35px]'>
								CONTACT US
							</p>
							<h1
								className='text-[28px]
					lg:text-[48px] font-[600] lg:leading-[53px]
					 '
							>
								Get in touch with our team
							</h1>
							<p
								className='pt-[16px]
								lg:pt-[38px]
								font-[400]
								pb-[21px]
								text-[16px] lg:text-[20px] lg:leading-[35px]'
								// lg:pb-[38px]
							>
								Have a question, need assistance, or simply want to learn more?
								Our dedicated team is here to provide you with the support you
								need.
							</p>
							<div className='grid grid-cols-1'>
								<div className='pb-[400px]'>
									<h4
										className='text-[20px] font-[600] lg:leading-[35px]
					 '
									>
										Send us a mail
									</h4>
									<p
										className='
									font-[400]
									text-[18px] leading-[35px]'
									>
										info@Valuebridgehq.com
									</p>
								</div>
								{/* <div
									className='
					py-[20px]

					'
								>
									<h4
										className='text-[20px] font-[600] lg:leading-[35px]
					 '
									>
										Call us
									</h4>
									<p
										className='
									font-[400]
									text-[18px] leading-[35px]'
									>
										+234 913 935 1682
									</p>
								</div> */}
								{/* <div>
									<h4
										className='text-[20px] font-[600] lg:leading-[35px]
					 '
									>
										Visit us
									</h4>
									<p
										className='
									font-[400]
									text-[18px] leading-[35px]
									'
									>
										212, King Street West,
										<br />
										6th floor,
										<br />
										Toronto ON M5H 1K5
									</p>
								</div> */}
							</div>
						</div>
						<div className='order-first lg:order-last'>
							<div className='lg:relative'>
								<div
									className='lg:absolute  bg-[#FCFCFD]
									h-fit text-black w-full
									px-[40px]
									border-[#D0D5DD]
									rounded-[8px]
									z-10
									py-[47px]
									'
								>
									<div
										className='grid grid-cols-1 gap-x-6
										gap-y-[24px]

									sm:grid-cols-6'
									>
										<div className='sm:col-span-3'>
											<label
												htmlFor='first-name'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												First name<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<input
													type='text'
													name='first-name'
													id='first-name'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] h-[60px]'
												/>
											</div>
										</div>

										<div className='sm:col-span-3'>
											<label
												htmlFor='last-name'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												Last name<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<input
													type='text'
													name='last-name'
													id='last-name'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] h-[60px]'
												/>
											</div>
										</div>

										<div className='sm:col-span-full'>
											<label
												htmlFor='company'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												Company Name<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<input
													id='company'
													name='company'
													type='text'
													// autocomplete='email'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] h-[60px]'
												/>
											</div>
										</div>
										<div className='sm:col-span-full'>
											<label
												htmlFor='email'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												Email address<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<input
													id='email'
													name='email'
													type='email'
													// autocomplete='email'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] h-[60px]'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='phone'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												Phone number<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<input
													type='text'
													name='phone'
													id='phone'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] h-[60px]'
												/>
											</div>
										</div>

										<div className='col-span-full'>
											<label
												htmlFor='about'
												className='block text-[18px] font-[500] leading-[19px] text-black'
											>
												I want to enquire
												<span className='text-[#E94700]'>*</span>
											</label>
											<div className='mt-[4px]'>
												<textarea
													id='about'
													name='about'
													rows='8'
													className='block w-full rounded-[2px] border-[1px] border-[#D0D5DD] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
													sm:text-sm sm:leading-6
													'
													// focus:ring-2 focus:ring-inset focus:ring-indigo-600
												></textarea>
											</div>
										</div>

										<div className=' col-span-full'>
											<Button
												bgColor={true}
												btnText='Submit Request'
												icon={true}
												fullWidth={true}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
