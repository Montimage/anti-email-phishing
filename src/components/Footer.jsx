import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Anti Email Phishing</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive solution for detecting and analyzing potential phishing threats in emails.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="#security-tips" className="text-gray-300 hover:text-white">Security Tips</a>
              </li>
              <li>
                <a href="#try-it-now" className="text-gray-300 hover:text-white">Try It Now</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 mb-4">
              Have questions or need more information about the Anti-Phishing Email Service?
            </p>
            <p className="text-gray-300">
              Email us at <a href="mailto:contact@montimage.com" className="text-primary-400 hover:text-primary-300">contact@montimage.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} Montimage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;