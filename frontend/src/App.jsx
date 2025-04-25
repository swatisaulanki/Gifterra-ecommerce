import CategorySlider from "./components/CategorySlider";
import GiftSlider from "./components/GiftSlider";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import TopSlider from "./components/TopSlider";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TopSlider/>
      <Navbar />
      <CategorySlider/>
      {/* Other content */}
      <Slider/>
      <GiftSlider/>
      <Home/>
    </div>
  );
}

export default App;
