import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white mt-20">
      <div className="container-max py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              Royal<span className="text-gold-400">Sarees</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Bringing authentic Banarasi heritage to the world with premium quality and traditional craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold-400 transition"><FiFacebook size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition"><FiInstagram size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition"><FiTwitter size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition"><FiLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/shop" className="hover:text-gold-400 transition">Shop</Link></li>
              <li><Link to="/collections" className="hover:text-gold-400 transition">Collections</Link></li>
              <li><Link to="/about" className="hover:text-gold-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition">Contact</Link></li>
              <li><a href="#" className="hover:text-gold-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-gold-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold-400 transition">Care Instructions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex gap-2 items-start">
                <FiMapPin className="mt-1" />
                <p>Varanasi, Uttar Pradesh, India</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiPhone size={18} />
                <p>+91 7355018138</p>
              </div>
              <div className="flex gap-2 items-center">
                <FiMail size={18} />
                <p>vinarmbanarsirithee@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary-900 to-navy rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-serif font-bold mb-4">Join Our Newsletter</h3>
          <p className="text-gray-300 mb-4">Get exclusive offers, new arrivals, and styling tips delivered to your inbox.</p>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm">
            <p>&copy; 2024 VINARM BANARSI RITHEE. All rights reserved.</p>
            <div className="flex gap-4 md:justify-end">
              <a href="#" className="hover:text-gold-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition">Terms & Conditions</a>
              <a href="#" className="hover:text-gold-400 transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

