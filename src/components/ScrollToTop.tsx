import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi';

interface ScrollToTopProps {
  showScrollTop: boolean;
  isDark: boolean;
  scrollToTop: () => void;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ showScrollTop, isDark, scrollToTop }) => {
  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-40 transition-all duration-300 ${
            isDark
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/25'
              : 'bg-blue-500 text-white hover:bg-blue-600 shadow-blue-400/25'
          }`}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <HiChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
