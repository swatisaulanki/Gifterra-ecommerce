import { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSnapchatGhost } from "react-icons/fa";

const TopSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const startAutoScroll = () => {
      if (!slider) return;
      stopAutoScroll();
      intervalRef.current = setInterval(() => {
        if (!slider) return;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1; // Scroll to the right
        }
      }, 15); // speed
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        startAutoScroll();
      } else {
        stopAutoScroll();
        if (slider) slider.scrollLeft = 0; // Reset scroll position on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run initially when page loads

    return () => {
      stopAutoScroll();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r font-poppins from-primary via-red-500 to-secondary text-white w-full py-3 px-4 overflow-hidden">

      {/* Social Icons (Desktop only) */}
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

      {/* Scrolling Content */}
      <div
        ref={sliderRef}
        className="flex items-center gap-8 whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar
          justify-center md:justify-start"
      >
        {/* Always visible Buttons */}
        <div className="flex-shrink-0 flex items-center gap-4">
          <button className="bg-primary text-white px-5 py-2 text-sm rounded hover:bg-secondary transition">
            Car Manager
          </button>
          <a href="/shop">
          <button className="bg-primary text-white px-5 py-2 text-sm rounded hover:bg-secondary transition">
            Shop Now
          </button>
</a>
        </div>

        {/* Desktop Only Content */}
        <div className="hidden md:flex flex-shrink-0 text-sm">
          📞 Call/WhatsApp: <span className="text-yellow-300 font-semibold ml-2">244584084573</span>
        </div>

        <div className="hidden md:flex flex-shrink-0 text-sm font-semibold animate-pulse text-yellow-300">
          🔥 Hurry Up! 30% Sale Off Soon
        </div>

      </div>
    </div>
  );
};

export default TopSlider;
