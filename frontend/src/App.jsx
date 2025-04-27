
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import TopSlider from "./components/TopSlider";
import Home from "./pages/Home";
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopSlider/>
      <Navbar />
      {/* Other content */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<ContactUs/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
