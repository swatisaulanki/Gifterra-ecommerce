import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cartItems } = location.state || { cartItems: [] };
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const totalAmount = cartItems.reduce(
    (total, item) => total + Math.floor(item.price * 83) * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Optional: save order data to localStorage or backend

    alert(`Order placed successfully!\nPayment Method: ${paymentMethod}\nTotal: ₹${totalAmount}`);
    navigate('/orderplaced'); // 👈 Navigate to the success page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-6 font-poppins">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Billing Form */}
          <form className="space-y-4" onSubmit={handlePlaceOrder}>
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full p-3 border rounded-md focus:outline-none"
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

            {/* Payment Method */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Payment Method</h3>
              <div className="space-y-2">
                {['COD', 'UPI', 'Card', 'Net Banking'].map((method) => (
                  <label key={method} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      value={method}
                      name="payment"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="accent-pink-600"
                    />
                    {method === 'COD' ? 'Cash on Delivery' : method}
                  </label>
                ))}
              </div>
            </div>

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
            <div className="space-y-2 text-sm">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.title} x {item.quantity}</span>
                  <span>₹{Math.floor(item.price * 83) * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 text-gray-600">
              <span>Shipping</span>
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
