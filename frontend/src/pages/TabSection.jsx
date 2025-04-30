import React, { useState } from "react";
import ShopProductCard from "./ShopProductCard";

const tabs = ["Best Selling", "Kids Zone", "Birthday Special"];

const sampleProducts = [
  {
    id: 1,
    title: "Custom Metal Photo Pendant",
    price: 219,
    oldPrice: 243,
    discount: 10,
    description: "Stylish Chain, Elegant design",
    images: [
      "https://linktoimage1.jpg",
      "https://linktoimage2.jpg",
    ],
  },
  // (Add 7 more sample products)
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full py-10 px-4 sm:px-10 font-poppins">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Top-Trending</h2>

      {/* Tabs */}
      <div className="flex gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-full text-sm font-medium ${
              activeTab === tab
                ? "bg-rose-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="">
        {sampleProducts.map((product) => (
            <ShopProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
