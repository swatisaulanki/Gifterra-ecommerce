import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Using react-icons
import TabSection from "./TabSection";

const ShopProductpage = () => {
  const images = [
    "https://lovecraftgift.com/cdn/shop/files/rose-1_1.jpg?v=1741687709&width=1100",
    "https://lovecraftgift.com/cdn/shop/files/rose-2.jpg?v=1741687709&width=1100",
    "https://lovecraftgift.com/cdn/shop/files/rose-3.jpg?v=1741687709&width=1100",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-poppins">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Image Section */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={images[currentImage]}
            alt="Product"
            className="rounded-2xl w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <BsChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
          >
            <BsChevronRight size={24} />
          </button>
        </motion.div>

        {/* Right Content Section */}
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* (Your title, price, delivery, etc. stay SAME) */}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Personalized Real Red Rose with Custom Name – Elegant & Everlasting Gift
          </h1>

          {/* Price */}
          <div className="text-2xl font-semibold text-rose-600">
            Rs. 595.00
          </div>

          {/* Delivery Info */}
          <div className="bg-blue-100 text-blue-700 p-2 rounded-md text-sm w-fit">
            Estimated delivery between <span className="font-semibold">May 02 and May 05</span>.
          </div>

          {/* Input */}
          <div>
            <label className="block text-gray-600 mb-1">Enter Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Stock Info */}
          <div className="text-pink-600 text-sm">
            ● 96 in stock
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button className="border rounded-md p-2 px-4 hover:bg-gray-100">-</button>
            <span className="text-lg">1</span>
            <button className="border rounded-md p-2 px-4 hover:bg-gray-100">+</button>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-md transition">
            Add to Cart
          </button>

          {/* Frequently Bought Together */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Frequently Bought Together</h2>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src="https://lovecraftgift.com/cdn/shop/files/IMG_00.jpg?v=1743759392"
                  alt="Related Product"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="text-gray-700 font-medium">Custom Acrylic Table Stand</div>
                <div className="text-sm text-gray-400 line-through">Rs. 599.00</div>
                <div className="text-rose-500 font-semibold">Rs. 349.00</div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>

    <TabSection/>  
    </>

  );
};

export default ShopProductpage;
