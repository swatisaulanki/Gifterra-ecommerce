import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import TopSlider from "./components/TopSlider";
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import BlogPage from './pages/BlogPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TrackOrders from './pages/TrackOrders';
import ScrollToTopButton from './components/ScrollToTopButton';
import CountdownBanner from './components/CountdownBanner';
import ShopProductpage from './pages/ShopProductpage';
import CheckoutPage from './pages/CheckoutPage';

function App() {

  return (
    <div>
      <TopSlider />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfService />} />
        <Route path='/refund' element={<RefundPolicy />} />
        <Route path='/shipping' element={<ShippingPolicy />} />
        <Route path='/track' element={<TrackOrders />} />
        <Route path='/count' element={<CountdownBanner />} />
        <Route path='/shop' element={<ShopProductpage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
