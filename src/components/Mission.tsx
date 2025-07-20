import React from 'react';
import { motion } from 'framer-motion';
import { HiFlag } from 'react-icons/hi';

interface MissionProps {
  isDark: boolean;
}

const Mission: React.FC<MissionProps> = ({ isDark }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="mission" className={`py-12 ${isDark ? 'bg-gray-800/50' : 'bg-blue-50/40'} scroll-mt-20`}>
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75" />
              <div className="relative p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full">
                <HiFlag className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ml-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
          </div>
          <motion.div 
            className={`max-w-4xl mx-auto p-6 rounded-3xl ${
              isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/50 border border-blue-200'
            } backdrop-blur-sm shadow-2xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <p className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-blue-800'} leading-relaxed mb-6`}>
              Sharma Business is dedicated to providing superior service through <span className="font-bold text-indigo-600">innovation, 
              reliability, and integrity</span>. We aim to understand and anticipate client needs, offering tailored solutions 
              with a client-first approach, and fostering lasting relationships with customers, partners, and communities.
            </p>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges' },
                { title: 'Reliability', desc: 'Consistent excellence in every interaction' },
                { title: 'Integrity', desc: 'Transparent and ethical business practices' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-2xl ${
                    isDark ? 'bg-gray-700/50 border border-gray-600' : 'bg-white border border-blue-200'
                  } shadow-lg hover:shadow-xl`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <h4 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-blue-700'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
