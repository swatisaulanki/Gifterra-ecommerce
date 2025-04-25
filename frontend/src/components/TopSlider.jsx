import { useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSnapchatGhost } from 'react-icons/fa';

const TopSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const scrollStep = 0.5;

    const updateScroll = () => {
      // If the slider has been scrolled to the start, reset to end
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth;
      } else {
        slider.scrollLeft -= scrollStep;
      }
    };

    const autoScroll = setInterval(updateScroll, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-primary via-red-500 to-secondary text-white w-full py-2 px-4 overflow-hidden">
      {/* Social Media Icons – Desktop Only */}
      <div className="hidden md:flex fixed top-4 right-4 z-50 gap-3 bg-black/20 p-2 rounded-md">
        <a href="#" className="text-white hover:text-gray-300 transition">
          <FaFacebookF size={18} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition">
          <FaInstagram size={18} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition">
          <FaLinkedinIn size={18} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition">
          <FaSnapchatGhost size={18} />
        </a>
      </div>

      {/* Auto-scrolling Content */}
      <div
        ref={sliderRef}
        className="flex items-center gap-6 sm:gap-10 whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar"
        style={{ width: '100%' }}
      >
        {/* Buttons */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-4">
          <button className="bg-primary text-white px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm rounded hover:bg-secondary transition">
            Car Manager
          </button>
          <button className="bg-primary text-white px-3 py-1 sm:px-5 sm:py-2 text-xs sm:text-sm rounded hover:bg-secondary transition">
            Shop Now
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex-shrink-0 text-xs sm:text-sm">
          📞 Call/WhatsApp: <span className="text-yellow-300 font-semibold">244584084573</span>
        </div>

        {/* Sale Message */}
        <div className="flex-shrink-0 text-xs sm:text-base font-semibold animate-pulse text-yellow-300">
          🔥 Hurry Up! 30% Sale Off Soon
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
