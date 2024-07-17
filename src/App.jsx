import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Company from './pages/Company';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';

import AllAPIs from './pages/AllAPIs';
import BuyCrypto from './pages/BuyCrypto';
import CryptoSwaps from './pages/CryptoSwaps';
import Liquidity from './pages/Liquidity';
import Payouts from './pages/Payouts';
import Settlements from './pages/Settlements';
import ScrollToTop from './utils/ScrollToTop';

function App() {
	return (
		<Router>
			<>
				<Layout>
					<ScrollToTop>
						<Routes path='/'>
							<Route index element={<Home />} />
							<Route path='company' element={<Company />} />
							<Route path='products'>
								<Route path='all-apis' element={<AllAPIs />} />
								<Route path='pay-ins' element={<BuyCrypto />} />
								<Route path='settlements' element={<Settlements />} />
								<Route path='payouts' element={<Payouts />} />
								<Route path='crypto-swaps' element={<CryptoSwaps />} />
								<Route path='liquidity' element={<Liquidity />} />
							</Route>

							<Route path='contact' element={<ContactUs />} />

							<Route path='*' element={<Home />} />
						</Routes>
					</ScrollToTop>
				</Layout>
			</>
			{/* </NavbarProvider> */}
		</Router>
	);
}

export default App;
