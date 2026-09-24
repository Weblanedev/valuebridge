import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export const FadeIn = ({ children, className = '', delay = 0 }) => (
	<motion.div
		className={className}
		initial={{ opacity: 0, y: 28 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
		transition={{ duration: 0.85, delay, ease }}
	>
		{children}
	</motion.div>
);

export const PageFade = ({ children }) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.45, ease }}
	>
		{children}
	</motion.div>
);

export const CountUp = ({ to, suffix = '', className = '' }) => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, amount: 0.6 });
	const [value, setValue] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration: 1.6,
			ease,
			onUpdate: (latest) => setValue(Math.round(latest))
		});
		return () => controls.stop();
	}, [inView, to]);

	return (
		<span ref={ref} className={className}>
			{value}
			{suffix}
		</span>
	);
};
