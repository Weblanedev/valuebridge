// import { DM_Sans } from 'next/font/google';
import Footer from './Footer';
import Navbar from './Navbar';

// const dm_serif_display = DM_Sans({
// 	display: 'swap',
// 	subsets: ['latin'],
// 	weight: ['400', '500', '700']
// });
// const dm_sans = DM_Sans({
// 	display: 'swap',
// 	subsets: ['latin'],
// 	weight: ['400', '500', '700']
// });

const Layout = ({ children }) => (
	<>
		<Navbar />
		<main className=''>{children}</main>
		<Footer />
	</>
);
export default Layout;
