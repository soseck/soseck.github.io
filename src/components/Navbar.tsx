
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold">Ndeye Sokhna SECK</h1>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('home')} className="px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('about')} className="px-3 py-2 text-gray-700 hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('experience')} className="px-3 py-2 text-gray-700 hover:text-blue-600">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="px-3 py-2 text-gray-700 hover:text-blue-600">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="px-3 py-2 text-gray-700 hover:text-blue-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <svg 
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('home')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">About</button>
          <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
