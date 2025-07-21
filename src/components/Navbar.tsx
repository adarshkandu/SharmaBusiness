import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

interface NavbarProps {
  isDark: boolean;
  isMenuOpen: boolean;
  activeSection: string;
  navbarBg: boolean;
  toggleTheme: () => void;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  isMenuOpen,
  activeSection,
  navbarBg,
  toggleTheme,
  setIsMenuOpen,
  scrollToSection,
}) => {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' },
  ];

  // Fix for mobile scroll + menu close
  const handleMobileClick = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80;

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      // Delay menu close and trigger scroll event to update activeSection correctly
      setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
        setIsMenuOpen(false);
      }, 600); // match scroll duration
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        navbarBg
          ? isDark
            ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800'
            : 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Sharma Business
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  activeSection === link.id
                    ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                    : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      : 'text-gray-600 hover:text-black hover:bg-blue-100/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle + Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`transition duration-300 ${
                isDark ? 'text-white' : 'text-blue-600'
              }`}
            >
              {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition duration-300 ${
                isDark ? 'text-white' : 'text-blue-600'
              }`}
            >
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div
              className={`${
                isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'
              } shadow-xl`}
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleMobileClick(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 shadow-md'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-black hover:bg-blue-100/50'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
