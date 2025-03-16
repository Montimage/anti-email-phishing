import React from 'react';

function SecurityTips() {
  const tips = [
    {
      title: "Verify Email Sender",
      description: "Always check the sender's email address, not just the display name. Look for slight misspellings in domain names (e.g., 'paypa1.com' vs 'paypal.com').",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Be Wary of Urgent Requests",
      description: "Phishing emails often create a sense of urgency to trick you into acting quickly without thinking. Take your time to verify any urgent requests.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Hover Before Clicking",
      description: "Always hover over links to preview the URL before clicking. Check if the domain matches the supposed sender's organization.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      title: "Don't Open Unexpected Attachments",
      description: "Be suspicious of attachments you weren't expecting, even if they appear to come from someone you know.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="security-tips" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Security Best Practices
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Follow these tips to protect yourself from phishing attacks
          </p>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-10">
            {tips.map((tip, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {tip.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{tip.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base text-gray-500">
              When in doubt about an email, forward it to our Anti-Phishing Email Service for a comprehensive analysis.
            </p>
            <div className="mt-6">
              <a
                href="#try-it-now"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Try Our Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecurityTips;