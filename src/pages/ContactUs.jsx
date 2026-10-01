import { motion } from 'framer-motion';
import { Button } from '../components/CustomButtons';
import { FadeIn } from '../components/Motion';

const fieldClass =
	'mt-1 block h-10 w-full rounded-xl border border-[#e6e8ee] bg-[#f7f7f5] px-3.5 text-[15px] text-[#101828] outline-none transition placeholder:text-[#98a2b3] focus:border-[#7eb6ff] focus:bg-white focus:ring-2 focus:ring-[#7eb6ff]/40';

const ContactUs = () => {
	return (
		<>
			<section
				className='relative flex min-h-[calc(100svh-5.5rem)] flex-col justify-center overflow-hidden bg-[#0c2474] py-8 text-white'
			>
				<div className='pointer-events-none absolute inset-0' aria-hidden='true'>
					<motion.div
						className='absolute -left-8 top-12 h-32 w-16 rounded-[1.5rem] bg-[#16348f]/70 md:-left-16 md:top-16 md:h-64 md:w-36 md:rounded-[2.5rem]'
						animate={{ x: [0, 18, 0], y: [0, 22, 0] }}
						transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className='absolute left-[8%] top-14 h-44 w-36 rounded-[1.75rem] bg-[#14307f] md:top-10 md:h-[340px] md:w-[260px] md:rounded-[2.75rem]'
						animate={{ x: [0, -16, 0], y: [0, 18, 0] }}
						transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className='absolute -right-6 top-8 h-40 w-32 rounded-[1.75rem] bg-[#1a3d9e]/80 md:right-[4%] md:h-72 md:w-64 md:rounded-[3rem]'
						animate={{ x: [0, 14, 0], y: [0, -20, 0] }}
						transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
					/>
					<motion.div
						className='absolute left-[12%] -bottom-4 h-14 w-28 rounded-[1.25rem] bg-[#102a78] md:left-[18%] md:-bottom-8 md:h-24 md:w-72 md:rounded-[2rem]'
						animate={{ y: [0, -14, 0] }}
						transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
					/>
				</div>
				<div
					className='relative z-10 container mx-auto
			px-7
			'
				>
					<div
						className='grid w-full items-stretch gap-8 lg:grid-cols-2 lg:gap-10'
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
								<motion.div
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.45, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
								>
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
								</motion.div>
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
										1901, 48 Burj Gate tower,
										<br />
										Downtown - Sheikh Zayed Rd -
										<br />
										Dubai - United Arab Emirates
									</p>
								</div> */}
							</div>
							<FadeIn delay={0.12}>
								<div className='mt-5 w-full rounded-[24px] bg-white px-5 py-5 text-[#101828] shadow-[0_24px_60px_rgba(8,20,70,0.22)]'>
									<div className='grid grid-cols-1 gap-x-3 gap-y-2.5 sm:grid-cols-6'>
										<motion.div
											className='sm:col-span-3'
											initial={{ opacity: 0, y: 16 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
										>
											<label htmlFor='first-name' className='block text-[14px] font-medium'>
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
											<label htmlFor='last-name' className='block text-[14px] font-medium'>
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
											<label htmlFor='company' className='block text-[14px] font-medium'>
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
											<label htmlFor='email' className='block text-[14px] font-medium'>
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
											<label htmlFor='phone' className='block text-[14px] font-medium'>
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
											<label htmlFor='about' className='block text-[14px] font-medium'>
												I want to enquire
												<span className='text-[#7eb6ff]'>*</span>
											</label>
											<textarea
												id='about'
												name='about'
												rows='2'
												placeholder='Tell us about cross-border rails, payments, stablecoins, or AI.'
												className={`${fieldClass} h-auto resize-none py-2`}
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
							</FadeIn>
						</div>
						<motion.div
							className='w-full self-start'
							initial='hidden'
							whileInView='show'
							viewport={{ once: true, amount: 0.15 }}
							variants={{
								hidden: { opacity: 0, x: 28 },
								show: {
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.7,
										delay: 0.15,
										ease: [0.22, 1, 0.36, 1],
										staggerChildren: 0.08,
										delayChildren: 0.28
									}
								}
							}}
						>
							<div className='overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_rgba(8,20,70,0.22)]'>
								<iframe
									title='Valuebridge office at Burj Gate, Dubai'
									src='https://maps.google.com/maps?q=1901%2C%2048%20Burj%20Gate%20tower%2C%20Downtown%20-%20Sheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates&z=16&output=embed'
									className='h-[560px] w-full border-0 lg:h-[720px]'
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
								/>
								<div className='px-6 py-5 text-[#101828]'>
									<motion.p
										className='text-[16px] font-[600]'
										variants={{
											hidden: { opacity: 0, y: 10 },
											show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
										}}
									>
										Visit us
									</motion.p>
									<motion.p
										className='mt-1 text-[16px] leading-7 text-[#475467]'
										variants={{
											hidden: { opacity: 0, y: 10 },
											show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
										}}
									>
										1901, 48 Burj Gate tower, Downtown, Sheikh Zayed Rd, Dubai, United Arab Emirates
									</motion.p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
