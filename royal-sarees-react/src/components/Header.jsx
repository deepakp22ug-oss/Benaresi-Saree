import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiMenu, FiX, FiUser } from 'react-icons/fi';
import { useStore } from '../store/appStore';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, wishlist, currency, setCurrency } = useStore();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top notification bar */}
      <div className="bg-gradient-to-r from-primary-800 to-navy text-white py-2 px-4 text-center text-sm">
        🌟 Free shipping on orders above ₹5,000 | Premium Quality Guaranteed
      </div>

      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
         <Link to="/" className="flex items-center gap-2">
        <div className="text-3xl font-serif font-bold">
        <span className="text-red-600">VINARM</span>
        <span className="text-yellow-400"> BANARSI RITHEE</span>
        </div>
        </Link>


          {/* Navigation - Desktop */}
          <nav className="hidden md:flex gap-8 font-semibold text-gray-700">
            <Link to="/" className="hover:text-primary-800 transition">Home</Link>
            <Link to="/shop" className="hover:text-primary-800 transition">Shop</Link>
            <Link to="/collections" className="hover:text-primary-800 transition">Collections</Link>
            <Link to="/about" className="hover:text-primary-800 transition">About</Link>
            <Link to="/contact" className="hover:text-primary-800 transition">Contact</Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            {/* Currency selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="hidden sm:block border border-gray-300 rounded px-2 py-1 text-sm"
            >
              <option value="INR">INR ₹</option>
              <option value="USD">USD $</option>
              <option value="GBP">GBP £</option>
              <option value="AED">AED د.إ</option>
            </select>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative hover:text-primary-800 transition">
              <FiHeart size={24} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart */}
            <Link to="/cart" className="relative hover:text-primary-800 transition">
              <FiShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link to="/account" className="hover:text-primary-800 transition">
              <FiUser size={24} />
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-4 mt-4 font-semibold text-gray-700">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-primary-800">Home</Link>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-primary-800">Shop</Link>
              <Link to="/collections" onClick={() => setIsOpen(false)} className="hover:text-primary-800">Collections</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-primary-800">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary-800">Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

