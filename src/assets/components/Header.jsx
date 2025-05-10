import { useState } from 'react';
import { Link } from 'react-router';

const Header = ({isDark,setIsDark}) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDarkMode(){
    setIsDark(prev => !prev)
    document.body.classList.toggle('darkMode')
  }

  return (
    <header className=" box-border w-[calc(100%-16px)] mx-2 bg-white shadow-md rounded">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Soft<span className="text-black">Sell</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 text-sm font-medium">
          <a href="#working" className="hover:text-blue-600 transition-colors duration-200">How It Works</a>
          <a href="#chooseus" className="hover:text-blue-600 transition-colors duration-200">Why Us</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors duration-200">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
        </nav>

        {/* Dark mode */}
        {/* <i class="fa-solid fa-sun"></i> */}
        {/* <i class="fa-solid fa-moon"></i> */}
        <div onClick={toggleDarkMode} className='hidden md:block text-3xl cursor-pointer hover:scale-125 transition-all duration-200'>
          <li className={`${isDark ? 'fa-solid fa-sun text-slate-300' : 'fa-solid fa-moon'}` }></li>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-x-2.5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transform transition-transform duration-200"
              style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div onClick={toggleDarkMode} className='md:hidden text-3xl cursor-pointer hover:scale-125 transition-all duration-200'>
          <li className={`${isDark ? 'fa-solid fa-sun text-slate-300' : 'fa-solid fa-moon'}` }></li>
        </div>

          
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        md:hidden 
        overflow-hidden 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <nav className="px-2 pt-2 pb-4 space-y-1">
          <a
            href="#working"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#chooseus"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Why Us
          </a>
          <a
            href="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;