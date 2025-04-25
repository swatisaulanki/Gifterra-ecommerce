import React from 'react'
import { useEffect, useRef, useState } from "react";

const Home = () => {
    const categories = [
        { name: "Collection", img: "https://royceindia.com/cdn/shop/files/RedRosetteBox-SignatureRedGiftCollection.webp?v=1712058240" },
        { name: "Gift on Sale", img: "https://img.freepik.com/free-photo/black-friday-arrangement-red-background-with-copy-space_23-2148665558.jpg?semt=ais_hybrid&w=740" },
        { name: "Bottle", img: "https://homafy.com/wp-content/uploads/2023/10/Diwali-Cheers-Gift-Combo-Bottle-and-2-Glasses.jpg" },
        { name: "Couple", img: "https://m.media-amazon.com/images/I/61uZqg-h6OL.jpg" },
        { name: "Anniversary", img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/showpiece-figurine/d/e/n/0-7-15-iph0572-1-key-impactgift-15-original-imagh57ftaucgcy5.jpeg?q=90&crop=false" },
        { name: "Birthday", img: "https://ocakes.in/storage/app/public/images/item/item-644a3ceba52b4.jpg" },
        { name: "Kids Zone", img: "https://media.istockphoto.com/id/991816670/photo/happy-kids-playing-in-ball-pit.jpg?s=612x612&w=0&k=20&c=L72_URZEuuBg1hzO_VhegzDOXGEHn1cvl5X8J7tFWWk=" },
        { name: "Corporate", img: "https://m.media-amazon.com/images/I/7178AGk9vAL.jpg" },
        {
          name: "T-shirt Corporate",
          img: "https://media.istockphoto.com/id/1285407854/photo/close-up-view-of-hands-of-unrecognizable-woman-giving-red-gift-box-tied-to-bow-handed-to-man.jpg?s=612x612&w=0&k=20&c=bZg2SVMYwQKbBSJlbwoDmkZ_9ypSalqx-2dP7eES0kw=",
          highlight: true,
        },
      ];

      const containerRef = useRef(null);
      const [isMobile, setIsMobile] = useState(false);
      const [index, setIndex] = useState(0);
    
      // Detect mobile screens
      useEffect(() => {
        const checkIfMobile = () => {
          setIsMobile(window.innerWidth <= 768); // Adjust this value based on your needs
        };
    
        checkIfMobile(); // Check on mount
        window.addEventListener("resize", checkIfMobile); // Check on resize
    
        return () => window.removeEventListener("resize", checkIfMobile); // Clean up
      }, []);
    
      // Auto slide every 2 seconds for mobile
      useEffect(() => {
        if (isMobile) {
          const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % categories.length);
          }, 2000);
          return () => clearInterval(interval);
        }
      }, [isMobile]);
    
      // Scroll to active item (only if mobile)
      useEffect(() => {
        if (isMobile && containerRef.current) {
          const container = containerRef.current;
          const children = container.children;
          const activeItem = children[index];
          if (activeItem) {
            const offsetLeft = activeItem.offsetLeft - container.clientWidth / 2 + activeItem.clientWidth / 2;
            container.scrollTo({ left: offsetLeft, behavior: "smooth" });
          }
        }
      }, [index, isMobile]);
    
    
      
  return (
    <>
    <div className="w-full bg-gradient-to-b from-[#1f0036] via-[#2a0b4a] to-[#1f0036] px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 tracking-wide">
        🛍️ Top <span className="text-purple-400">Selling</span> Products
      </h2>

      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6">
        {/* Bottle Card */}
        <div className="flex-1 bg-gradient-to-br from-[#5a189a] to-[#7b2cbf] p-10 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-6 left-6 text-white text-2xl">✨</div>
          <div className="absolute top-12 right-10 text-white text-xl">⭐</div>

          <h3 className="text-lg md:text-xl text-white/90 font-semibold tracking-wider">
            Personalized
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white my-2">
            Bottle
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Eco-Friendly & BPA-Free <br className="hidden md:block" />
            for a Healthier You
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-purple-800 font-bold rounded-full hover:shadow-purple-500/50 hover:scale-105 transition duration-300">
            Shop Now
          </button>
          <img
            src="https://i.ibb.co/wRbdLfM/bottle.png"
            alt="Bottle"
            className="w-40 md:w-60 mt-10 z-10"
          />
        </div>

        {/* Kinder Joy Card */}
        <div className="flex-1 bg-gradient-to-br from-[#ff6a3d] to-[#ff9248] p-10 rounded-[40px] shadow-xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-6 right-6 text-white text-xl">🌟</div>
          <div className="absolute bottom-10 left-6 text-white text-2xl">✨</div>

          <h3 className="text-lg md:text-xl text-white/90 font-semibold tracking-wider">
            Customized
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white my-2">
            Kinder <span className="block md:inline">Joy</span>
          </h1>
          <p className="text-base md:text-lg text-white/70 leading-relaxed">
            Eco-Friendly & BPA-Free <br className="hidden md:block" />
            for a Healthier You
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-orange-600 font-bold rounded-full hover:shadow-orange-300/60 hover:scale-105 transition duration-300">
            Shop Now
          </button>
          <img
            src="https://i.ibb.co/Pz5bdKt/kinder-joy.png"
            alt="Kinder Joy"
            className="w-40 md:w-60 mt-10 z-10"
          />
        </div>
      </div>



    </div>

    <section className="relative w-full bg-gradient-to-br from-[#fff4ec] via-[#ffe6f7] to-[#fde2ff] overflow-hidden rounded-b-[80px] shadow-inner">
      {/* Decorative glow orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-yellow-100 opacity-30 blur-2xl rounded-full z-0" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h4 className="text-md md:text-lg text-gray-700 font-semibold uppercase tracking-widest">
            Top Selling
          </h4>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            Personalized Rose
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-md">
            A touch of nature, personally yours. Eco-friendly & BPA-free to make your gifting healthier & sustainable.
          </p>

          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-pink-500 via-red-400 to-yellow-400 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <img
            src="https://i.ibb.co/k5YFX8k/rose.png"
            alt="Rose"
            className="w-[300px] md:w-[380px] object-contain drop-shadow-xl"
          />

          {/* Floating text (e.g., names) */}
          <span className="absolute top-[30%] left-[60%] rotate-[10deg] text-white text-sm md:text-md font-semibold drop-shadow-md">
            krush
          </span>
          <span className="absolute bottom-[15%] left-[45%] rotate-[12deg] text-white text-sm md:text-md font-semibold drop-shadow-md">
            swati
          </span>
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-5 shadow-md border-t border-b border-gray-100">
      <div className="w-full overflow-hidden px-4">
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] 
                transition-transform duration-300 hover:scale-105 relative ${cat.highlight ? "bg-gradient-to-br from-yellow-100 to-red-100 rounded-xl shadow-lg p-3" : ""}`}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-2 ${cat.highlight ? "border-yellow-500 shadow-xl" : "border-primary"}`}
              />
              <p
                className={`mt-2 text-xs sm:text-sm font-semibold ${cat.highlight ? "text-yellow-800" : "text-gray-800"} text-center`}
              >
                {cat.name}
              </p>
              {cat.highlight && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-xs px-2 py-0.5 rounded-bl-lg rounded-tr-md text-white font-bold shadow-md">
                  NEW
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>


</>
  );

  
}

export default Home