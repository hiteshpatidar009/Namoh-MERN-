import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import gif1 from '../../public/image/Puweb-Development Logo.gif';

function Footer() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-6 px-8 transition-all duration-300">
      <hr className="border-gray-300 dark:border-gray-700 mb-6" />
      
      {/* Flex container */}
      <div className="ml-36 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row md:space-x-6 mb-4">
            <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-400 transition-all mb-2 md:mb-0">About Us</a>
            <a href="/contact_us" className="hover:text-gray-600 dark:hover:text-gray-400 transition-all mb-2 md:mb-0">Contact</a>
            <a className="hover:text-gray-600 dark:hover:text-gray-400 transition-all">Jobs</a>
          </nav>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 text-xl mb-4">
            <a href="https://www.instagram.com/namoh_organic_spices/profilecard/?igsh=d3pwMWdha2ticGph" className="hover:text-pink-500 transition-all">
              <FontAwesomeIcon icon={faInstagram} beat />
            </a>
            <a href="https://wa.me/qr/HG44CGRCDHVJJ1" className="hover:text-green-500 transition-all">
              <FontAwesomeIcon icon={faWhatsapp} beat />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} NamohSpices Industries Ltd. All rights reserved.
          </p>
        </div>

        {/* Right Side - GIF */}
        <div>
          <img 
            src={gif1}
            alt="Animated Gif"
            className="h-36 w-40 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
