import { useState } from "react";
import swatiss from "../assets/gifterras.jpeg";
import { Link } from "react-router-dom"; // Make sure this import is at the top

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaMicrophone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import CartSidebar from "../pages/CartSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Start with an empty cart
  const [cartItems, setCartItems] = useState([]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

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
              quantity:
                action === "increment"
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
    <>
      <header className="  bg-black shadow-md sticky text-white top-0 z-50 w-full font-poppins">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
          {/* Left - Navigation Links (Desktop) */}
          {!searchOpen && (
            <nav className="hidden md:flex space-x-6 text-white items-center">
              <a
                href="/"
                onClick={handleLinkClick}
                className="hover:text-pink-600  transition"
              >
                Home
              </a>
              <div className="relative group">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:text-pink-600 transition flex items-center gap-1"
                >
                  Collection{" "}
                  <span className="transform group-hover:rotate-180 transition-transform">
                    ▾
                  </span>
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-8 left-0 bg-white text-black shadow-md rounded-md p-2 space-y-2 z-40 w-48">
                    <li>
                      <a
                        href="/count"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        All Collections
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Best Selling
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Kids Items
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Oil Painting
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <a
                href="/contact"
                onClick={handleLinkClick}
                className="hover:text-pink-600 transition"
              >
                Contact
              </a>
              <a
                href="/track"
                onClick={handleLinkClick}
                className="hover:text-pink-600 transition"
              >
                Track Order
              </a>
              <a
                href="/blog"
                onClick={handleLinkClick}
                className="hover:text-pink-600 transition"
              >
                Blog
              </a>
            </nav>
          )}

          {/* Center - Brand */}
          {!searchOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-gray-800">
              <img
                src={swatiss}
                alt="Gifterra Logo"
                className="w-36 h-20 sm:w-24 sm:h-24 md:w-36 md:h-15 object-contain"
              />
            </div>
          )}

          {/* Right - Icons */}
          <div className="flex items-center gap-4 ml-auto md:ml-0 text-white">
            {!searchOpen && (
              <>
                <button
                  onClick={() => setSearchOpen(true)}
                  className="text-xl text-white"
                >
                  <FaSearch />
                </button>
                <div className="hidden md:flex gap-4">
                  <Link to="/login" className="text-xl text-gray-800">
                    <button className="text-xl text-white">
                      {" "}
                      <FaUser />
                    </button>
                  </Link>

                  <button
                    onClick={handleCartOpen}
                    className="text-xl text-white"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-xl text-white md:hidden"
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              </>
            )}
          </div>

          {/* Search Bar */}
          {searchOpen && (
            <div className="absolute top-0 left-0 right-0 bg-white z-50 flex items-center justify-center px-4 py-4">
              <div className="flex items-center w-full max-w-4xl mx-auto border border-gray-300 rounded-full overflow-hidden">
                <select className="bg-gray-100 px-3 py-2 text-sm outline-none border-r border-gray-300">
                  <option>All Types</option>
                  <option>Birthday Gifts</option>
                  <option>Kids Items</option>
                </select>
                <input
                  type="text"
                  placeholder="Try ‘Birthday Gifts’, ‘Kids Items’..."
                  className="flex-1 px-4 py-2 outline-none text-sm"
                />
                <button className="px-4 text-gray-500 hover:text-gray-800">
                  <FaMicrophone />
                </button>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="px-4 text-gray-500 hover:text-gray-800"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Sidebar */}
        {isOpen && !searchOpen && (
          <div className="md:hidden bg-white text-black px-4 pb-6 pt-2 absolute w-full shadow-md z-40">
            <a
              href="#"
              onClick={handleLinkClick}
              className="block py-2 hover:text-pink-600"
            >
              Home
            </a>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full text-left py-2 hover:text-pink-600"
            >
              Collection
            </button>
            {dropdownOpen && (
              <ul className="pl-4 space-y-1">
                <li>
                  <a
                    href="/count"
                    onClick={handleLinkClick}
                    className="block hover:text-pink-600"
                  >
                    All Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block hover:text-pink-600"
                  >
                    Best Selling
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block hover:text-pink-600"
                  >
                    Kids Items
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="block hover:text-pink-600"
                  >
                    Oil Painting
                  </a>
                </li>
              </ul>
            )}
            <a
              href="/contact"
              onClick={handleLinkClick}
              className="block py-2 hover:text-pink-600"
            >
              Contact
            </a>
            <a
              href="/track"
              onClick={handleLinkClick}
              className="block py-2 hover:text-pink-600"
            >
              Track Order
            </a>
            <a
              href="/blog"
              onClick={handleLinkClick}
              className="block py-2 hover:text-pink-600"
            >
              Blog
            </a>

            {/* Account and Cart Icons inside Sidebar */}
            <div className="flex items-center gap-4 mt-6">
              <Link to="/login" className="text-xl text-gray-800">
                <button className="text-xl text-gray-800">
                  <FaUser />
                </button>
              </Link>
              <button className="text-xl text-gray-800">
                <FaShoppingCart />
              </button>
            </div>

            {/* Social Media Icons in Sidebar */}
            <div className="flex justify-center gap-5 mt-6 text-pink-600">
              <a href="#" className="hover:text-pink-400 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition">
                <FaSnapchatGhost size={20} />
              </a>
            </div>
          </div>
        )}
      </header>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={handleCartClose}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onDeleteItem={handleDeleteItem}
      />
    </>
  );
};

export default Navbar;
