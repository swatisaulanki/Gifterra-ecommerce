import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access passed state

const CheckoutPage = () => {
  const location = useLocation(); // Get location from React Router
  const { cartItems } = location.state || { cartItems: [] }; // Default to empty array if no data

  // Calculate the total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + Math.floor(item.price * 83) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-6 font-poppins">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Billing Form */}
          <form className="space-y-4">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-pink-200"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 border rounded-md"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md"
            />
            <input
              name="pincode"
              type="text"
              required
              placeholder="Pin Code"
              className="w-full p-3 border rounded-md"
            />
            <textarea
              name="address"
              required
              placeholder="Full Address"
              className="w-full p-3 border rounded-md resize-none h-24"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md transition"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-md shadow-inner">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Subtotal</span>
              <span>₹{totalAmount}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Shipping</span>
              <span>Free</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
