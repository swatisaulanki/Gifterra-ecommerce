import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing the up arrow icon from react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
