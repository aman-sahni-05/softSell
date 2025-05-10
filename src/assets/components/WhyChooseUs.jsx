import React from 'react'

export default function WhyChooseUs({isDark}) {
  return (
    <section id='chooseus' className={`py-20 ${isDark ? 'bg-gray-700' : ' bg-gradient-to-b from-blue-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-slate-50' : 'text-gray-800 '} `}>
          Why Choose <span className=" bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] bg-clip-text text-transparent">SoftSell</span>
        </h2>
        <p className={`text-lg ${isDark ? 'text-slate-200' : 'text-gray-600'} mb-12 max-w-2xl mx-auto`}>
          We make selling unused software licenses simple, secure, and profitable
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fast Payments */}
          <div className={`p-8 ${isDark ? 'bg-gray-600' : 'bg-white'}  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
            <div className="mb-5 bg-blue-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant Payments</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'} `}>Get paid within 24 hours after verification</p>
          </div>

          {/* Safe & Secure */}
          <div className={`p-8 ${isDark ? 'bg-gray-600' : 'bg-white'}  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
            <div className="mb-5 bg-green-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Bank-Grade Security</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'} `}>Get paid within 24 hours after verification</p>
          </div>

          {/* Fair Price Evaluation */}
          <div className={`p-8 ${isDark ? 'bg-gray-600' : 'bg-white'}  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
            <div className="mb-5 bg-yellow-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Fair Market Prices</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'} `}>Get paid within 24 hours after verification</p>
          </div>

          {/* Quick Process */}
          <div className={`p-8 ${isDark ? 'bg-gray-600' : 'bg-white'}  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100`}>
            <div className="mb-5 bg-purple-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Lightning Fast</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'} `}>Get paid within 24 hours after verification</p>
          </div>
        </div>
      </div>
    </section>
  )
}