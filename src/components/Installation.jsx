import React, { useState } from 'react';

function Installation() {
  const [activeTab, setActiveTab] = useState('configuration');
  
  const tabs = [
    { id: 'configuration', label: 'Configuration' },
    { id: 'installation', label: 'Installation' },
    { id: 'starting', label: 'Starting the Service' },
  ];
  
  return (
    <section id="installation" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Started
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Follow these steps to set up the Anti-Phishing Email Service
          </p>
        </div>
        
        <div className="mt-6 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-10">
          {activeTab === 'configuration' && (
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold mb-4">Configuration</h3>
              <ol className="space-y-6">
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">1</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Copy the sample environment file and adjust the settings</h4>
                      <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                        <code>cp .env.example .env</code>
                      </pre>
                    </div>
                  </div>
                </li>
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">2</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Edit .env to set:</h4>
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Email Server Settings:</strong> IMAP and SMTP server details</li>
                        <li><strong>Authentication:</strong> Email username, app-specific password, and API keys if using LLM analysis</li>
                        <li><strong>Email Filters:</strong> <code>ALLOWED_SENDERS</code> (supports exact emails or domain matching, e.g., <code>@montimage.eu</code>) and <code>SUBJECT_PREFIXES</code></li>
                        <li><strong>Database and Analysis Options:</strong> MongoDB configuration, analyzer timeouts, and weights</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          )}
          
          {activeTab === 'installation' && (
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold mb-4">Installation</h3>
              <ol className="space-y-6">
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">1</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Clone the repository</h4>
                      <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                        <code>git clone https://github.com/montimage/anti-phishing-email-service.git
cd anti-phishing-email-service</code>
                      </pre>
                    </div>
                  </div>
                </li>
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">2</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Create and activate a virtual environment</h4>
                      <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                        <code>python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate</code>
                      </pre>
                    </div>
                  </div>
                </li>
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">3</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Install dependencies</h4>
                      <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                        <code>pip install -r requirements.txt</code>
                      </pre>
                    </div>
                  </div>
                </li>
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">4</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Alternatively, install using the setup script</h4>
                      <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                        <code>python setup.py install</code>
                      </pre>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          )}
          
          {activeTab === 'starting' && (
            <div className="prose max-w-none">
              <h3 className="text-2xl font-bold mb-4">Starting the Service</h3>
              <ol className="space-y-6">
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">1</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Ensure your .env file is properly configured</h4>
                    </div>
                  </div>
                </li>
                <li className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex h-8 w-8 rounded-full bg-primary-100 items-center justify-center text-primary-600 font-bold text-lg">2</div>
                    <div className="ml-4">
                      <h4 className="font-bold">Run the service using one of the following methods:</h4>
                      <div className="mt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold">Using the main module:</h5>
                          <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                            <code>python -m src.main</code>
                          </pre>
                        </div>
                        <div>
                          <h5 className="font-semibold">Or, using the run.py file:</h5>
                          <pre className="mt-2 p-4 bg-gray-800 text-gray-100 rounded overflow-x-auto whitespace-pre-wrap">
                            <code>python run.py</code>
                          </pre>
                        </div>
                        <p className="text-gray-600 mt-4">
                          The service will connect to the email server, process incoming emails based on your filters, and generate analysis reports.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Installation;