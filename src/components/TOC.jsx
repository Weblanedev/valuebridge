import { useEffect, useRef, useState } from 'react';

const TableofContent = (props) => {
	const { headings } = props;
	const [activeId, setActiveId] = useState('');
	const scrollRef = useRef(0);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const id = entry?.target?.getAttribute('id');
					if (entry.isIntersecting) {
						setActiveId(id);
						scrollRef.current = window.scrollY;
					} else {
						const diff = scrollRef.current - window.scrollY;
						const isScrollingUp = diff > 0;
						const currentIndex = headings.findIndex((h) => h.id === id);
						const prevEntry = headings[currentIndex - 1];
						const prevId = prevEntry?.id;
						if (isScrollingUp && prevId) {
							setActiveId(id);
						}
					}
				});
			},
			{
				rootMargin: '0% 0% -85% 0%'
			}
		);
		headings.forEach((heading) => {
			const elem = document.getElementById(heading.id);
			if (elem) {
				observer.observe(elem);
			}
		});
	}, [headings]);
	return (
		<ul className='sidebar'>
			{headings.map((heading) => {
				const id = heading.id;
				const activeClass = activeId === id ? ' font-[500] ' : '';
				const indentation = {
					3: ' pl-4',
					4: ' pl-8'
				};
				const level = heading?.level;
				const paddingClass = indentation[level] ?? '';

				// console.log(id, activeId === id ? 'true' : 'false');
				return (
					<li
						key={id}
						onClick={() => {
							setActiveId(id);
							console.log(id);
						}}
					>
						<a
							href={`#${id}`}
							className={
								`flex text-[20px] leading-[35px]  text-[#101828] ${
									headings?.length < 2 ? '' : 'mt-[16px]'
								} gap-8 items-center link-hover transition-all  text-lg ` +
								activeClass +
								paddingClass
							}
						>
							{heading.text}{' '}
							{activeId === id ? (
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8 0L6.585 1.415L12.17 7H0V9H12.17L6.585 14.585L8 16L16 8L8 0Z'
										fill='black'
									/>
								</svg>
							) : null}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default TableofContent;
