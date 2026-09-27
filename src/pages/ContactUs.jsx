import { motion } from 'framer-motion';
import { Button } from '../components/CustomButtons';
import { FadeIn } from '../components/Motion';

const fieldClass =
	'mt-1.5 block h-11 w-full rounded-2xl border border-[#e6e8ee] bg-[#f7f7f5] px-4 text-[16px] text-[#101828] outline-none transition placeholder:text-[#98a2b3] focus:border-[#7eb6ff] focus:bg-white focus:ring-2 focus:ring-[#7eb6ff]/40';

const ContactUs = () => {
	return (
		<>
			<section
				className='relative flex min-h-[calc(100svh-5.5rem)] flex-col justify-center overflow-hidden bg-[#0c2474] py-8 text-white'
			>
				<div className='pointer-events-none absolute inset-0' aria-hidden='true'>
					<div className='absolute -left-16 top-16 h-64 w-36 rounded-[2.5rem] bg-[#16348f]/70' />
					<div className='absolute left-[8%] top-10 h-[340px] w-[260px] rounded-[2.75rem] bg-[#14307f]' />
					<div className='absolute right-[4%] top-8 h-72 w-64 rounded-[3rem] bg-[#1a3d9e]/80' />
					<div className='absolute left-[18%] -bottom-8 h-24 w-72 rounded-[2rem] bg-[#102a78]' />
				</div>
				<div
					className='relative z-10 container mx-auto
			px-7
			'
				>
					<div
						className='grid w-full items-center gap-8 lg:grid-cols-2 lg:gap-10'
					>
						<div
							className='
							py-[12px]
					md:py-[24px]
					lg:pr-[45px]
					'
						>
							<p className='font-[600] text-[18px] leading-[35px]'>
								CONTACT US
							</p>
							<h1
								className='text-[31px]
					lg:text-[54px] font-[600] lg:leading-[53px]
					 '
							>
								Get in touch with our team
							</h1>
							<p
								className='pb-5 pt-4 text-[18px] font-[400] leading-8 lg:text-[22px]'
							>
								Have a question about cross-border rails, payments, stablecoins, or AI? Our team is here to help.
							</p>
							<div className='grid grid-cols-1'>
								<div>
									<h4
										className='text-[22px] font-[600] lg:leading-[35px]
					 '
									>
										Send us a mail
									</h4>
									<p
										className='
									font-[400]
									text-[20px] leading-[35px]'
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
										className='text-[22px] font-[600] lg:leading-[35px]
					 '
									>
										Call us
									</h4>
									<p
										className='
									font-[400]
									text-[20px] leading-[35px]'
									>
										+234 913 935 1682
									</p>
								</div> */}
								{/* <div>
									<h4
										className='text-[22px] font-[600] lg:leading-[35px]
					 '
									>
										Visit us
									</h4>
									<p
										className='
									font-[400]
									text-[20px] leading-[35px]
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
						<FadeIn className='order-first lg:order-last' delay={0.12}>
							<div>
								<div className='w-full rounded-[28px] bg-white px-7 py-7 text-[#101828] shadow-[0_24px_60px_rgba(8,20,70,0.22)]'>
									<div className='grid grid-cols-1 gap-x-4 gap-y-3.5 sm:grid-cols-6'>
										<motion.div
											className='sm:col-span-3'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='first-name' className='block text-[15px] font-medium'>
												First name<span className='text-[#7eb6ff]'>*</span>
											</label>
											<input
												type='text'
												name='first-name'
												id='first-name'
												placeholder='Ada'
												className={fieldClass}
											/>
										</motion.div>

										<motion.div
											className='sm:col-span-3'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='last-name' className='block text-[15px] font-medium'>
												Last name<span className='text-[#7eb6ff]'>*</span>
											</label>
											<input
												type='text'
												name='last-name'
												id='last-name'
												placeholder='Okeke'
												className={fieldClass}
											/>
										</motion.div>

										<motion.div
											className='sm:col-span-full'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='company' className='block text-[15px] font-medium'>
												Company name<span className='text-[#7eb6ff]'>*</span>
											</label>
											<input
												id='company'
												name='company'
												type='text'
												placeholder='Your company'
												className={fieldClass}
											/>
										</motion.div>
										<motion.div
											className='sm:col-span-full'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='email' className='block text-[15px] font-medium'>
												Email address<span className='text-[#7eb6ff]'>*</span>
											</label>
											<input
												id='email'
												name='email'
												type='email'
												placeholder='you@company.com'
												className={fieldClass}
											/>
										</motion.div>

										<motion.div
											className='col-span-full'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.33, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='phone' className='block text-[15px] font-medium'>
												Phone number<span className='text-[#7eb6ff]'>*</span>
											</label>
											<input
												type='text'
												name='phone'
												id='phone'
												placeholder='+234'
												className={fieldClass}
											/>
										</motion.div>

										<motion.div
											className='col-span-full'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='about' className='block text-[15px] font-medium'>
												I want to enquire
												<span className='text-[#7eb6ff]'>*</span>
											</label>
											<textarea
												id='about'
												name='about'
												rows='3'
												placeholder='Tell us about cross-border rails, payments, stablecoins, or AI.'
												className={`${fieldClass} h-auto resize-none py-3`}
											></textarea>
										</motion.div>

										<motion.div
											className='col-span-full'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
										>
											<Button
												bgColor={true}
												btnText='Submit Request'
												icon={true}
												fullWidth={true}
											/>
										</motion.div>
									</div>
								</div>
							</div>
						</FadeIn>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
