import React from "react";

export default function ContactForm({isDark}) {
  return (
    <section
      id="contact"
      className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${isDark ? 'text-slate-200' : 'text-gray-900'}  mb-4`}>
            Get in{" "}
            <span className="bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-gray-600'} max-w-xl mx-auto`}>
            Have questions about selling your software licenses? Contact us
            today.
          </p>
        </div>

        <div className={` ${isDark ? 'bg-gray-600' : 'bg-gradient-to-br from-blue-50 to-white'}  p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100`}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Adiya Adhana"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="adiya@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Inc."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* License Type */}
              <div>
                <label
                  htmlFor="license"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  License Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="license"
                  name="license"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjY3YjhlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+')] bg-no-repeat bg-[center_right_1rem]"
                >
                  <option value="">Select license type</option>
                  <option value="windows">Windows</option>
                  <option value="msoffice">Microsoft Office</option>
                  <option value="adobe">Adobe Creative Suite</option>
                  <option value="antivirus">Antivirus</option>
                  <option value="other">Other Software</option>
                </select>
              </div>

              {/* Phone (new field) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about the licenses you want to sell..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full md:w-auto bg-blue-800 hover:bg-blue-900 cursor-pointer hover:scale-105 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
