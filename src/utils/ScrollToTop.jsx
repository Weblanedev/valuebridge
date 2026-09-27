import { AnimatePresence } from 'framer-motion';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { PageFade } from '../components/Motion';

const ScrollToTop = (props) => {
	const { pathname } = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<AnimatePresence mode='wait'>
			<PageFade key={pathname}>{props.children}</PageFade>
		</AnimatePresence>
	);
};

export default ScrollToTop;
