import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DropdownNavLink = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='relative inline-block text-center'>
			<NavLink
				// type='button'
				// inline-flex
				className='hidden sm:block justify-center w-full
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

			{isOpen && (
				<div
					className='absolute z-50 mt-2
					rounded-md shadow-lg
					bg-white
					w-[130px]
					text-left'
					// px-[20px]
					// bg-red-600
					onMouseLeave={() => setIsOpen(false)}
				>
					<div
						className='py-1'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='options-menu'
					>
						{/* <NavLink
							to='products/all-apis'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							All APIs
						</NavLink> */}
						<NavLink
							to='products/pay-ins'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							Pay-ins
						</NavLink>
						<NavLink
							to='products/settlements'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							Settlements
						</NavLink>
						<NavLink
							to='products/payouts'
							className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
							role='menuitem'
							onClick={() => setIsOpen(false)}
						>
							Payouts
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
				</div>
			)}
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
