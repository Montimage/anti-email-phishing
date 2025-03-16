import React from 'react';

function TryItNow() {
  return (
    <section id="try-it-now" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Try Our Anti Email Phishing Service Now
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Experience the power of our service with a free demonstration
          </p>
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Forward a Suspicious Email</h3>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl">
                Forward any suspicious email to <span className="font-mono bg-primary-50 text-primary-600 px-2 py-1 rounded border border-primary-200">antiphishing@montimage.eu</span> and receive a detailed analysis report identifying potential threats.
              </p>
              
              <div className="w-full max-w-3xl">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">How it works:</h4>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li className="text-gray-700">
                      <span className="font-medium">Forward the suspicious email</span> you received to our analysis address.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Wait a few minutes</span> while our system analyzes the email content, links, and attachments.
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Receive a detailed report</span> with our findings and recommendations.
                    </li>
                  </ol>
                  
                  <div className="mt-6 bg-primary-50 p-4 rounded-lg border border-primary-100">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-primary-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h5 className="text-sm font-medium text-primary-800">Note</h5>
                        <div className="text-sm text-primary-700">
                          This demonstration service is available for individuals and organizations interested in evaluating our Anti Phishing solution.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TryItNow;