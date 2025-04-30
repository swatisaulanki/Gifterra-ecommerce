import React from 'react';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems = [], // default value to prevent undefined
  onUpdateQuantity,
  onDeleteItem,
}) => {
  const navigate = useNavigate();

  // Handle proceeding to checkout
  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[700px] font-poppins max-w-full bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-medium text-gray-800">Your Cart</h2>
        <AiOutlineClose onClick={onClose} className="cursor-pointer text-xl text-gray-600" />
      </div>

      {/* Cart Items */}
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty. Add some items!</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 items-start mb-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                <div className="mt-1">
                  <span className="line-through text-gray-400 mr-2">
                    Rs. {Math.floor(item.price * 83) + 200}
                  </span>
                  <span className="text-[#a8783f] font-semibold">
                    Rs. {Math.floor(item.price * 83)}
                  </span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center mt-3 gap-2">
                  <button
                    className="border px-2 py-1 rounded"
                    onClick={() => onUpdateQuantity(item.id, 'decrement')}
                  >
                    <FiMinus />
                  </button>
                  <span className="px-3 border py-1">{item.quantity}</span>
                  <button
                    className="border px-2 py-1 rounded"
                    onClick={() => onUpdateQuantity(item.id, 'increment')}
                  >
                    <FiPlus />
                  </button>
                  <AiOutlineDelete
                    className="ml-4 text-gray-500 hover:text-red-500 cursor-pointer"
                    onClick={() => onDeleteItem(item.id)}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total and Checkout */}
      {cartItems.length > 0 && (
        <div className="border-t pt-4 mt-4 px-4 pb-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg text-[#a8783f] font-bold">
              Rs.{' '}
              {cartItems.reduce(
                (total, item) => total + Math.floor(item.price * 83) * item.quantity,
                0
              )}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[#a8783f] hover:bg-[#946b39] text-white py-3 rounded-lg text-center font-medium text-lg transition duration-300"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
