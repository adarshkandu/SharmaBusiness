import React from 'react';
import { motion } from 'framer-motion';
import { HiEye } from 'react-icons/hi';

interface VisionProps {
  isDark: boolean;
}

const Vision: React.FC<VisionProps> = ({ isDark }) => {
  return (
    <section id="vision" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-75" />
              <div className="relative p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                <HiEye className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ml-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.h2>
          </div>
          <motion.div 
            className={`max-w-4xl mx-auto p-6 rounded-3xl ${
              isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50/60 border border-blue-200'
            } backdrop-blur-sm shadow-2xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-blue-800'} leading-relaxed`}>
              Dr. Ankit P. Sharma envisions Sharma Business achieving <span className="font-bold text-blue-600">global recognition</span> by 
              delivering exceptional services and groundbreaking solutions across multiple industries. The goal is to create a 
              sustainable, customer-centric ecosystem where each brand reaches its full potential and contributes to long-term growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
