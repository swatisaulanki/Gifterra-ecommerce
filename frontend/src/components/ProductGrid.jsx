import React, { useState, useEffect } from 'react';
import { FaCartPlus, FaSearch, FaTimes } from 'react-icons/fa';
import CartSidebar from '../pages/CartSidebar';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 8)); // Fetch only 4 products
        setLoading(false);
      });
  }, []);

  const handleChoose = (productId) => {
    setExpandedProductId(productId);
  };

  const handleClose = () => {
    setExpandedProductId(null);
  };

  const handleAddToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId, action) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const newQty = action === "increment" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  const handleDeleteItem = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const handleViewDetails = (product) => {
    alert(`Viewing details of ${product.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 p-4 sm:p-6 font-poppins relative">
      <h1 className="text-3xl sm:text-4xl font-extrabold  text-gray-800 mb-8">Top Picks for You</h1>

      {loading ? (
        <div className="text-center text-lg font-medium text-gray-600">Loading products...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 sm:h-56 object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4 bg-white text-center">
                  <h2 className="text-sm font-semibold text-gray-700 line-clamp-2">{product.title}</h2>
                  <p className="text-pink-600 font-bold text-sm mt-1">Rs. {Math.floor(product.price * 83)}</p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button
                    onClick={() => handleChoose(product.id)}
                    className="bg-white text-pink-600 font-semibold px-4 py-2 rounded-md text-xs hover:bg-pink-100"
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expanded View */}
      {expandedProductId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white max-w-md w-full rounded-xl shadow-xl p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              <FaTimes />
            </button>
            {(() => {
              const product = products.find(p => p.id === expandedProductId);
              return (
                <>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 sm:h-52 object-contain mx-auto mb-4"
                  />
                  <h2 className="text-lg font-bold text-center text-gray-800">{product.title}</h2>
                  <p className="text-pink-600 font-bold mt-2 text-sm text-center">Rs. {Math.floor(product.price * 83)}</p>
                  <p className="text-gray-600 text-sm text-center mt-2">{product.description.slice(0, 120)}...</p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm"
                    >
                      <FaCartPlus /> Add to Cart
                    </button>
                    <button
                      onClick={() => handleViewDetails(product)}
                      className="border border-pink-600 text-pink-600 px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm hover:bg-pink-100"
                    >
                      <FaSearch /> View
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Cart Sidebar component */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default ProductGrid;
