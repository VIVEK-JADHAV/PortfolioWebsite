import React, { useState, useEffect } from 'react';
import { Menu, X, Database } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'experience';
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (hash === '#experience') {
      window.location.hash = 'experience';
      window.scrollTo(0, 0);
    } else {
      // If navigating to a section on the home page
      if (currentPage === 'experience') {
        // If currently on experience page, go to home first
        window.location.hash = ''; 
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update URL without scrolling
        window.history.pushState(null, '', hash);
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentPage === 'experience' ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a 
              href="#about" 
              onClick={(e) => handleNavigation(e, '#about')}
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors"
            >
              <Database className="h-8 w-8" />
              <span className="font-bold text-xl tracking-wider text-slate-100">VIVEK<span className="text-blue-500">JADHAV</span></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
                href="#"
                onClick={(e) => handleNavigation(e, '#about')}
                className={`text-sm font-medium transition-colors duration-200 ${currentPage === 'home' ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
            >
                Home
            </a>
            <a
                href="#experience"
                onClick={(e) => handleNavigation(e, '#experience')}
                className={`text-sm font-medium transition-colors duration-200 ${currentPage === 'experience' ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
            >
                Experience
            </a>
            <a
                href="#skills"
                onClick={(e) => handleNavigation(e, '#skills')}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
            >
                Skills
            </a>
            <a
                href="#education"
                onClick={(e) => handleNavigation(e, '#education')}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200"
            >
                Education
            </a>
            
            <a 
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="px-4 py-2 text-sm font-medium text-slate-950 bg-blue-500 hover:bg-blue-400 rounded-md transition-colors cursor-pointer"
            >
                Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <a
                href="#"
                onClick={(e) => handleNavigation(e, '#about')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Home
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavigation(e, '#experience')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Experience
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavigation(e, '#skills')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                Skills
              </a>
             <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-400 hover:text-blue-300"
              >
                Contact
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;