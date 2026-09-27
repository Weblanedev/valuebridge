import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownNavLink = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative inline-block text-center'>
			<NavLink
				// type='button'
				// inline-flex
				className='hidden sm:block justify-center w-full text-[20px] font-medium
					menu-hover

					'
				// text-sm text-gray-700 hover:bg-gray-50
				// px-4 py-2
				// onClick={() => setIsOpen(!isOpen)}
				onMouseOver={() => setIsOpen(true)}
				// onMouseLeave={() => setIsOpen(false)}
			>
				Products
			</NavLink>

			<AnimatePresence>
				{isOpen && (
				<motion.div
					className='absolute right-0 z-50 w-[280px] pt-3 text-left'
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -8 }}
					transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
					onMouseLeave={() => setIsOpen(false)}
				>
					<div
						className='rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(7,18,56,0.18)]'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'
					>
						<NavLink
							to='products/pay-ins'
							className='block rounded-xl px-4 py-3 text-[#101828] hover:bg-[#f4f6fb] hover:text-[#0c2474]'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							<span className='block text-[18px] font-semibold'>Pay-ins</span>
							<span className='mt-1 block text-[15px] font-normal leading-5 text-[#667085]'>
								Accept payments from customers
							</span>
						</NavLink>
						<NavLink
							to='products/settlements'
							className='block rounded-xl px-4 py-3 text-[#101828] hover:bg-[#f4f6fb] hover:text-[#0c2474]'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							<span className='block text-[18px] font-semibold'>Settlements</span>
							<span className='mt-1 block text-[15px] font-normal leading-5 text-[#667085]'>
								Settle partners in local currency
							</span>
						</NavLink>
						<NavLink
							to='products/payouts'
							className='block rounded-xl px-4 py-3 text-[#101828] hover:bg-[#f4f6fb] hover:text-[#0c2474]'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							<span className='block text-[18px] font-semibold'>Payouts</span>
							<span className='mt-1 block text-[15px] font-normal leading-5 text-[#667085]'>
								Send money to bank accounts
							</span>
						</NavLink>
						{/* <NavLink
							to='products/crypto-swaps'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							Crypto Swaps
						</NavLink> */}
						{/* <NavLink
							to='products/liquidity'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							Liquidity
						</NavLink> */}
					</div>
				</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
const DropdownNavLinkMobile = ({ close }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative inline-block text-left'>
			<NavLink
				// type='button'
				// inline-flex
				// rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50
				className='block sm:hidden justify-center w-full
					'
				onClick={() => setIsOpen(!isOpen)}
			>
				Products
			</NavLink>
			{isOpen && (
				<div
					className='absolute z-50 mt-2 w-[130px] rounded-md shadow-lg
						bg-white
						text-center'
					// bg-red-600
					onMouseLeave={() => setIsOpen(false)}
				>
					<div
						className='py-1'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'
					>
						<NavLink
							to='products/all-apis'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							All APIs
						</NavLink>
						<NavLink
							to='products/buy-crypto'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							Buy Crypto
						</NavLink>
						<NavLink
							to='products/settlements'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							Settlements
						</NavLink>
						<NavLink
							to='products/payouts'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							Payouts
						</NavLink>
						<NavLink
							to='products/crypto-swaps'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							Crypto Swaps
						</NavLink>
						<NavLink
							to='products/liquidity'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => {
								setIsOpen(false);
								close();
							}}
						>
							Liquidity
						</NavLink>
					</div>
				</div>
			)}
		</div>
	);
};

export { DropdownNavLink, DropdownNavLinkMobile };
