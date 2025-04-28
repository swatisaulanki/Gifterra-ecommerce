import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HomeSlider2 = () => {
  const categoriesData = [
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

  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto scroll every 2 seconds for all screens (mobile, md, lg)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categoriesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to active item (for all screens)
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const items = slider.children;
      const activeItem = items[activeIndex];
      if (activeItem) {
        const offsetLeft = activeItem.offsetLeft - slider.clientWidth / 2 + activeItem.clientWidth / 2;
        slider.scrollTo({ left: offsetLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <div className="w-full bg-gradient-to-r from-blue-500 font-poppins via-purple-500 to-pink-500 py-5 shadow-lg border-t border-b border-gray-100">
      <div className="w-full overflow-hidden px-4">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categoriesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex-shrink-0 flex flex-col items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] 
                transition-transform duration-300 hover:scale-105 relative p-2 rounded-lg shadow-xl bg-gradient-to-br 
                from-indigo-300 via-blue-300 to-purple-400 hover:from-purple-400 hover:via-indigo-300 hover:to-pink-300
                hover:shadow-2xl`}
            >
              <img
                src={category.img}
                alt={category.name}
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 
                  ${category.highlight ? "border-yellow-500 shadow-xl" : "border-white"}`}
              />
              <p
                className={`mt-2 text-xs sm:text-sm font-semibold text-white text-center transition-all duration-300
                  ${category.highlight ? "text-yellow-800" : "text-gray-800"} `}
              >
                {category.name}
              </p>
              {category.highlight && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-xs px-2 py-0.5 rounded-bl-lg rounded-tr-md text-white font-bold shadow-md">
                  NEW
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSlider2;
