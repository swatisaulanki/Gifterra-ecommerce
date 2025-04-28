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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categoriesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-6 shadow-lg border-t border-b border-gray-100">
      <div className="w-full overflow-hidden px-4">
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categoriesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 flex flex-col items-center 
                w-[150px] sm:w-[170px] md:w-[190px] lg:w-[220px] 
                p-4 bg-white rounded-3xl shadow-xl hover:shadow-2xl 
                transition-all duration-500 border-2 border-gray-200 relative"
            >
              <img
                src={category.img}
                alt={category.name}
                className={`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 
                  object-cover rounded-2xl border-4 p-1
                  ${category.highlight 
                    ? "border-yellow-400 shadow-lg" 
                    : "border-gradient-to-br from-purple-400 via-blue-400 to-pink-400"
                  }
                  transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl
                `}
              />
              <p
                className={`mt-3 text-sm sm:text-base font-semibold text-center
                  ${category.highlight ? "text-yellow-700" : "text-gray-700"}`}
              >
                {category.name}
              </p>
              {category.highlight && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-[10px] px-2 py-1 rounded-full text-white font-bold shadow-md">
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
