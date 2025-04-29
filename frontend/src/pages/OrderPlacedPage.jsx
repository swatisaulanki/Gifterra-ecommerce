import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';

const OrderPlacedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 px-4 font-poppins">
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-green-500 mb-4 flex justify-center"
        >
          <BsCheckCircle size={72} />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h2>
        <p className="text-gray-600 mb-4">Your order has been placed successfully.</p>

        <div className="text-sm text-gray-700 mb-6">
          <p><strong>Order ID:</strong> #{Math.floor(100000 + Math.random() * 900000)}</p>
          <p><strong>Estimated Delivery:</strong> 3–5 Business Days</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Continue Shopping
        </button>
      </motion.div>
    </div>
  );
};

export default OrderPlacedPage;
