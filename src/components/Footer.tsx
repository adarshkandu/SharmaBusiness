import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiTruck, HiTrendingUp } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from "../assets/logo.png"

interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'vision', label: 'Vision' },
    { id: 'mission', label: 'Mission' },
    { id: 'brands', label: 'Brands' },
    { id: 'contact', label: 'Contact' }
  ];

  const brands = [
    { name: 'FME', icon: HiPlay },
    { name: 'VaHaN', icon: HiTruck },
    { name: 'GC', icon: HiTrendingUp }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c1b30] text-white py-12 border-t border-[#1e2f4a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
                <img className="h-12 text-white" src={logo} alt="logo" />
              <div>
                <span className="text-xl font-bold text-white">Sharma Business</span>
                <p className="text-sm text-gray-300">Excellence in Innovation</p>
              </div>
            </div>
            <p className="mb-4 leading-relaxed max-w-md text-sm text-gray-300">
              A dynamic, multi-tasking company housing multiple successful brands under one umbrella.
              Founded by Dr. Ankit P. Sharma with a vision for global excellence.
            </p>
            <div className="flex space-x-3">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-xl bg-[#1e2f4a] text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4">Our Brands</h4>
            <ul className="space-y-2">
              {brands.map((brand, index) => (
                <li key={index}>
                  <a href="#brands" className="text-sm flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                    <brand.icon className="w-4 h-4" />
                    <span>{brand.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t mt-8 pt-6 border-[#1e2f4a]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Sharma Business. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
