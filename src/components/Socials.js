import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Socials() {
  return (
    <div className="bg-gray-100 p-8">
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">TheBookStore</h2>
            <p className="text-gray-600">Developed by Sambit Kumar...</p>
          </div>

          
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-2">
              <li className="hover:underline text-gray-700">Sitemap</li>
              <li className="hover:underline text-gray-700">Privacy Policy</li>
              <li className="hover:underline text-gray-700">Careers</li>
              <li className="hover:underline text-gray-700">Unsubscribe</li>
              <li className="hover:underline text-gray-700">Sales Enquiry</li>
            </ul>

            <ul className="space-y-2">
              <li className="hover:underline text-gray-700">Terms & Conditions</li>
              <li className="hover:underline text-gray-700">Blog</li>
              <li className="hover:underline text-gray-700">Testimonials</li>
              <li className="hover:underline text-gray-700">Help Center</li>
              <li className="hover:underline text-gray-700">Buy Our Services</li>
            </ul>
          </div>
        </div>

        
        <div className="flex justify-center space-x-6">
          <FaFacebook size={30} className="text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FaTwitter size={30} className="text-blue-400 hover:text-blue-600 cursor-pointer" />
          <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 cursor-pointer" />
          <FaYoutube size={30} className="text-red-500 hover:text-red-700 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Socials;
