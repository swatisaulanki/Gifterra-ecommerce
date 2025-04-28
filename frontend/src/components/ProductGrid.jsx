import React, { useState } from "react";

const products = [
  {
    id: 1,
    title: "Personalized 12-Piece Pencil Set",
    price: "Rs. 168.00",
    oldPrice: "Rs. 200.00",
    image: "https://lovecraftgift.com/cdn/shop/files/7_7113f721-e16a-41c1-8cf8-6b9f87e851f9.jpg?v=1743137301&width=750",
    designs: ["Floral Pink", "Cool Blue", "Sunshine Yellow"],
  },
  {
    id: 2,
    title: " Kids Thermo Bottle",
    price: "Rs. 469.00",
    oldPrice: "Rs. 586.00",
    image: "https://lovecraftgift.com/cdn/shop/files/7_7113f721-e16a-41c1-8cf8-6b9f87e851f9.jpg?v=1743137301&width=750",
    designs: ["Bamboo Panda (Cream Color)", "Walnut Duck (Blue Color)"],
  },
  {
    id: 3,
    title: "Custom Kids Name Keychain",
    price: "Rs. 99.00",
    oldPrice: "Rs. 129.00",
    image: "https://lovecraftgift.com/cdn/shop/files/7_7113f721-e16a-41c1-8cf8-6b9f87e851f9.jpg?v=1743137301&width=750",
    designs: ["Spiderman", "Unicorn", "Dino Green"],
  },
  {
    id: 4,
    title: "Kids Cartoon School Bag",
    price: "Rs. 699.00",
    oldPrice: "Rs. 899.00",
    image: "https://lovecraftgift.com/cdn/shop/files/7_7113f721-e16a-41c1-8cf8-6b9f87e851f9.jpg?v=1743137301&width=750",
    designs: ["Mickey Mouse", "Peppa Pig", "Doraemon"],
  },
];

const ProductGrid = () => {
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [cart, setCart] = useState([]);

  const handleChoose = (productId) => {
    setExpandedProductId(productId);
  };

  const handleClose = () => {
    setExpandedProductId(null);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleViewDetails = (product) => {
    alert(`Viewing details of ${product.title}`);
  };

  return (
    <div className="  md:h-128 bg-gradient-to-br from-pink-50 font-poppins to-blue-100 p-6">
      <h1 className="text-3xl font-bold  text-gray-800 mb-8">
        Explore Our Exclusive Products
      </h1>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative rounded-xl overflow-hidden bg-white shadow-lg transform transition-all duration-500 ${
              expandedProductId === product.id ? "scale-105 z-20" : ""
            }`}
          >
            {/* Expanded view */}
            {expandedProductId === product.id ? (
              <div className="absolute inset-0 flex h-[280px] flex-col items-center justify-center bg-white p-6 space-y-4 animate-fadeIn">
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-pink-600"
                >
                  ✕
                </button>
                <h2 className="text-lg font-semibold text-center text-gray-800">
                  {product.title}
                </h2>
                <p className="text-pink-600 text-md font-bold">{product.price}</p>
                <h3 className="text-sm font-medium">Choose Design:</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {product.designs.map((design, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 text-xs rounded-full border border-pink-400 text-pink-600 hover:bg-pink-100 transition"
                    >
                      {design}
                    </button>
                  ))}
                </div>
                <div className="flex flex-row gap-4 w-full justify-center mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 text-sm w-1/2"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleViewDetails(product)}
                    className="border border-pink-600 text-pink-600 px-4 py-2 rounded-md hover:bg-pink-100 text-sm w-1/2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ) : (
              // Normal product card
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 bg-white text-center">
                  <h2 className="text-sm font-semibold text-gray-800">
                    {product.title}
                  </h2>
                  <div className="flex justify-center items-center gap-2 mt-1">
                    <span className="text-pink-600 font-bold text-sm">{product.price}</span>
                    <span className="line-through text-gray-400 text-xs">
                      {product.oldPrice}
                    </span>
                  </div>
                </div>
                {/* Hover Choose Button */}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button
                    onClick={() => handleChoose(product.id)}
                    className="bg-white text-pink-600 font-semibold px-4 py-2 rounded-md text-xs hover:bg-pink-100"
                  >
                    Choose
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

  
    </div>
  );
};

export default ProductGrid;
