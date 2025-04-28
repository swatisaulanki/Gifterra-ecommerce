// Footer.js

import React from 'react';
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaTruck,
  FaBlog,
  FaLock,
  FaUndo,
  FaShippingFast,
  FaQuestionCircle,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Customer Care */}
        <div className="animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaWhatsapp className="mr-2 text-green-500" />
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaPhoneAlt className="mr-2 text-blue-500" />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaEnvelope className="mr-2 text-red-500" />
              <a href="mailto:support@example.com">support@gifterra.com</a>
            </li>
          </ul>
        </div>

        {/* Home */}
        <div className="animate-fade-in delay-100">
          <h2 className="text-xl font-semibold mb-4">Home</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaHome className="mr-2 text-indigo-500" />
              <a href="/">Home</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaHome className="mr-2 text-indigo-500" />
              <a href="#">Collection</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaHome className="mr-2 text-indigo-500" />
              <a href="/contact">Contact Us</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaTruck className="mr-2 text-indigo-500" />
              <a href="#">Track Order</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaBlog className="mr-2 text-indigo-500" />
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>

        {/* Our Policy */}
        <div className="animate-fade-in delay-200">
          <h2 className="text-xl font-semibold mb-4">Our Policy</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaLock className="mr-2 text-yellow-500" />
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaLock className="mr-2 text-yellow-500" />
              <a href="/terms">Terms of Service</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaUndo className="mr-2 text-yellow-500" />
              <a href="/refund">Refund Policy</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaShippingFast className="mr-2 text-yellow-500" />
              <a href="/shipping">Shipping Policy</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaTruck className="mr-2 text-yellow-500" />
              <a href="/track">Track Order</a>
            </li>
          </ul>
        </div>

        {/* Need Help */}
        <div className="animate-fade-in delay-300">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaPhoneAlt className="mr-2 text-pink-500" />
              <a href="tel:+1234567890">Call Us</a>
            </li>
            <li className="flex items-center hover:translate-x-1 transition-transform duration-300">
              <FaQuestionCircle className="mr-2 text-pink-500" />
              <a href="#">Need help with your order?</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
            <a href="#" className="hover:underline">Blog</a>
            <a href="#" className="hover:underline">New Year</a>
            <a href="#" className="hover:underline">Teachers Day</a>
            <a href="#" className="hover:underline">Panda</a>
            <a href="#" className="hover:underline">Gift Option</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
