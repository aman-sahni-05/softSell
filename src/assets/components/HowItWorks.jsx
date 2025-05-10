import React from "react";

export default function HowItWorks({isDark}) {
  return (
    <section id="working" className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-slate-50' : 'bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] bg-clip-text text-transparent'} `}>
            How It Works
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-slate-600' }  max-w-2xl mx-auto`}>
            Simple 3-step process to turn your unused licenses into cash
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 */}
          <div className={`group relative flex flex-col items-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b ${isDark ? 'bg-gray-600' : 'from-white to-blue-50'} `}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1">
              <div className="bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] p-4 rounded-full text-white">
                <span className="text-xl font-bold">1</span>
              </div>
            </div>
            <div className="bg-blue-100/80 p-6 rounded-full mb-6 group-hover:bg-blue-200/80 transition-colors duration-300">
              <svg
                className="w-10 h-10 text-blue-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Upload License</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'}`}>
              Submit your unused software license with just a few clicks.
            </p>
          </div>

          {/* Step 2 */}
          <div className={`group relative flex flex-col items-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b ${isDark ? 'bg-gray-600' : 'from-white to-blue-50'} `}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1">
              <div className="bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] p-4 rounded-full text-white">
                <span className="text-xl font-bold">2</span>
              </div>
            </div>
            <div className="bg-blue-100/80 p-6 rounded-full mb-6 group-hover:bg-blue-200/80 transition-colors duration-300">
              <svg
                className="w-10 h-10 text-blue-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path d="M12 1v3m6.364 1.636l-2.121 2.121M21 12h-3m-1.636 6.364l-2.121-2.121M12 23v-3m-6.364-1.636l2.121-2.121M3 12h3m1.636-6.364l2.121 2.121" />
                <path d="M8 12h.01M12 12h.01M16 12h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Get Valuation</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'}`}>
              Our team quickly evaluates your license and offers a price.
            </p>
          </div>

          {/* Step 3 */}
          <div className={`group relative flex flex-col items-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b ${isDark ? 'bg-gray-600' : 'from-white to-blue-50'} `}>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-md p-1">
              <div className="bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] p-4 rounded-full text-white">
                <span className="text-xl font-bold">3</span>
              </div>
            </div>
            <div className="bg-blue-100/80 p-6 rounded-full mb-6 group-hover:bg-blue-200/80 transition-colors duration-300">
              <i className="w-10 h-10 text-4xl fa-solid text-blue-800 fa-money-check-dollar"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Get Paid</h3>
            <p className={`${isDark ? 'text-slate-200' : 'text-gray-600'}`}>
              Accept the offer and get paid directly to your account.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="hidden md:flex justify-between w-full absolute left-0 right-0 px-12">
          <div className="w-1/3 border-t-2 border-dashed border-gray-200 mt-16"></div>
          <div className="w-1/3 border-t-2 border-dashed border-gray-200 mt-16"></div>
        </div>
      </div>
    </section>
  );
}