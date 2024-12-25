import React from 'react';

function Footer() {
  return (
    <footer className="w-full text-white py-4 px-4 bg-gradient-to-r from-[#905e52] via-[#7c4a3e] to-[#50352c]" >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start  space-y-4 md:space-y-0">
     
        <div>
          <h2 className="text-2xl font-bold">GoldenKey</h2>
          <p className="text-sm mt-2">
            Example St. No:123, City, Country <br />
            Phone: +1 123 456 7890
          </p>
        </div>

      
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#rooms" className="hover:underline">Rooms</a>
            </li>
            <li>
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>

      
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-gray-200">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
      </div>

   
      <div className="mt-8 text-center text-sm border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} GoldenKey. All rights reserved.
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/edainal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Eda-Inal"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
