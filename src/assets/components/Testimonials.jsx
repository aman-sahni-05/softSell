import React from 'react'

export default function Testimonials({isDark}) {
  return (
    <section id='testimonials' className={`py-20 ${isDark ? 'bg-gray-800': 'bg-gradient-to-b from-blue-50 to-white'} `}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] bg-clip-text text-transparent">
            Trusted by <span className={`${isDark ? 'text-slate-50' : 'text-gray-800'} `}>Businesses</span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-200' : 'text-gray-600'}  max-w-2xl mx-auto`}>
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                  AV
                </div>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-lg">Ananya Verma</p>
                <p className="text-sm text-gray-500">IT Manager, TechNova</p>
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed relative">
              <span className="absolute -top-4 -left-4 text-5xl text-blue-100 font-serif">"</span>
              <p className="relative z-10">
                SoftSell helped us recover value from old software licenses we had completely forgotten about. The process was simple, fast, and trustworthy.
              </p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </blockquote>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold text-xl">
                  RM
                </div>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-lg">Rahul Mehta</p>
                <p className="text-sm text-gray-500">CFO, ByteSoft Pvt. Ltd.</p>
              </div>
            </div>
            <blockquote className="text-gray-700 text-lg leading-relaxed relative">
              <span className="absolute -top-4 -left-4 text-5xl text-blue-100 font-serif">"</span>
              <p className="relative z-10">
                I was surprised how quickly we got our valuation and payment. Great support and a fantastic experience overall!
              </p>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}