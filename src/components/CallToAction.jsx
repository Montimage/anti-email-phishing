import React from 'react';

function CallToAction() {
  return (
    <section className="bg-primary-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to protect your organization?</span>
          <span className="block text-primary-200">Try our Anti Email Phishing service today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#try-it-now"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100"
            >
              Test the Service
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#contact-us"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;