import React, { useState } from 'react';
import logo from '../assets/new-logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Anti Email Phishing Logo" className="h-10" />
              <span className="font-bold text-xl text-primary-600 ml-2 hidden sm:inline-block">Anti Email Phishing</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Features</a>
            <a href="#security-tips" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Security Tips</a>
            <a href="#try-it-now" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Try It Now</a>
            <a href="#contact-us" 
               className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              Contact Us
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Home</a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Features</a>
            <a href="#security-tips" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Security Tips</a>
            <a href="#try-it-now" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50">Try It Now</a>
            <a href="#contact-us" 
               className="block px-3 py-2 text-base font-medium text-primary-600 hover:bg-gray-50">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;