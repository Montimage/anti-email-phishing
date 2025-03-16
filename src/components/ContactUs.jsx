import React from 'react';

function ContactUs() {
  return (
    <section id="contact-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch to learn more about our Anti Email Phishing solutions
          </p>
        </div>
        
        <div className="mt-16 md:grid md:grid-cols-2 md:gap-8">
          <div className="relative h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-10 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-primary-100 mb-6">
                Looking to protect your organization from sophisticated phishing threats? We offer tailored enterprise-grade solutions to meet your security needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom deployments for your IT infrastructure</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integration with existing email security systems</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated support and threat intelligence updates</span>
                </li>
              </ul>
              <div className="inline-flex rounded-md shadow">
                <a
                  href="mailto:contact@montimage.com?subject=Anti Email Phishing Enterprise Solution Inquiry"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100"
                >
                  Request Enterprise Info
                </a>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern)" />
              </svg>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <div className="bg-gray-50 rounded-lg p-10 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our Anti Email Phishing service? We're here to help. Reach out to our team for more information.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-primary-100 flex items-center justify-center text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-500">
                      <a href="mailto:contact@montimage.com" className="text-primary-600 hover:text-primary-500">
                        contact@montimage.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-md bg-primary-100 flex items-center justify-center text-primary-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Support</p>
                    <p className="text-sm text-gray-500">
                      Our team is available to answer your questions and provide technical assistance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex">
                <a
                  href="mailto:contact@montimage.com?subject=Anti Email Phishing Service Inquiry"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;