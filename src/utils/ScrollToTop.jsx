import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
	const { pathname } = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return <>{props.children}</>;
};

export default ScrollToTop;
