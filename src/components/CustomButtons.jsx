import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

const className = (...classes) => {
	return classes.filter(Boolean).join('');
};

export const Button = ({ btnText, bgColor, icon, fullWidth }) => (
	<button
		type={fullWidth === true ? 'submit' : 'button'}
		className={className(
			fullWidth === true
				? 'w-full flex bg-blue-950 text-white items-center justify-center font-[500] text-[18px] rounded-3xl leading-[24px] py-[12px] px-[16px] gap-[12px]'
				: bgColor === true
				? 'flex bg-blue-950 text-white items-center font-[500] text-[18px] leading-[24px] py-[12px] rounded-3xl px-[16px] gap-[12px]'
				: 'flex bg-white text-black items-center font-[500] text-[18px] leading-[24px] py-[12px] rounded-3xl px-[16px] gap-[12px]'
		)}
	>
		{btnText}
		{icon === true && (
			<svg
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
					fill={bgColor ? 'white' : 'black'}
				/>
			</svg>
		)}
	</button>
);
export const SignUpButton = () => (
	<Disclosure.Button
		as={NavLink}
		className='text-[#DFDDE3]
            font-medium
            inline-flex items-center

            '
		// px-5 py-2.5
		to='sign-up'
	>
		<svg
			className='w-5 h-5 mr-2 -ml-1'
			width='19'
			height='19'
			viewBox='0 0 19 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1ZM5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5ZM3.00873 10C1.90315 10 1 10.8869 1 12C1 13.6912 1.83281 14.9663 3.13499 15.7966C4.41697 16.614 6.14526 17 8 17C8.41085 17 8.8155 16.9811 9.21047 16.9427C8.97298 16.6472 8.7654 16.3266 8.59233 15.9855C8.39798 15.9951 8.20041 16 8 16C6.26489 16 4.74318 15.636 3.67262 14.9534C2.62226 14.2837 2 13.3088 2 12C2 11.4467 2.44786 11 3.00873 11L8.59971 11C8.7826 10.6422 9.00353 10.3071 9.25716 10L3.00873 10ZM13.5 18C15.9853 18 18 15.9853 18 13.5C18 11.0147 15.9853 9 13.5 9C11.0147 9 9 11.0147 9 13.5C9 15.9853 11.0147 18 13.5 18ZM13.5 11C13.7761 11 14 11.2239 14 11.5V13H15.5C15.7761 13 16 13.2239 16 13.5C16 13.7761 15.7761 14 15.5 14H14V15.5C14 15.7761 13.7761 16 13.5 16C13.2239 16 13 15.7761 13 15.5V14H11.5C11.2239 14 11 13.7761 11 13.5C11 13.2239 11.2239 13 11.5 13H13V11.5C13 11.2239 13.2239 11 13.5 11Z'
				fill='#DFDDE3'
				stroke='#DFDDE3'
				strokeWidth='0.5'
			/>
		</svg>
		Sign Up
	</Disclosure.Button>
);
export const SignInButton = () => (
	<Disclosure.Button
		as={NavLink}
		className='text-[#DFDDE3]
            font-medium
            inline-flex items-center

            '
		to='sign-in'
		// px-5 py-2.5
	>
		<svg
			className='w-5 h-5 mr-2 -ml-1'
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.7334 12.1833L11.8667 10.05L9.7334 7.91663'
				stroke='#DFDDE3'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.3335 10.05H11.8085'
				stroke='#DFDDE3'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 3.33337C13.6833 3.33337 16.6667 5.83337 16.6667 10C16.6667 14.1667 13.6833 16.6667 10 16.6667'
				stroke='#DFDDE3'
				strokeWidth='1.6'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
		Sign In
	</Disclosure.Button>
);
