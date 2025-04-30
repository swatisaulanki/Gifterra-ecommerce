import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartSidebar from './CartSidebar';

const EmptyCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Start with an empty cart
  const [cartItems, setCartItems] = useState([]);

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleUpdateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increment'
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleDeleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <button
        onClick={handleCartOpen}
        className="bg-[#a8783f] hover:bg-[#946b39] text-white px-4 py-2 rounded"
      >
        <FaShoppingCart className="inline mr-2" /> Open Cart
      </button>

      {/* Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={handleCartClose}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onDeleteItem={handleDeleteItem}
      />
    </div>
  );
};

export default EmptyCart;
