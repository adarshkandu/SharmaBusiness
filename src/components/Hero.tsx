import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiChevronUp } from 'react-icons/hi';

interface HeroProps {
  isDark: boolean;
  scrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isDark, scrollToSection }) => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sharma Business
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A dynamic, multi-tasking company housing multiple successful brands under one umbrella. 
            Serving over <span className="font-bold text-blue-500">800+ clients</span> across various industries with 
            excellence and innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-700 shadow-2xl hover:shadow-blue-500/25"
              {...scaleOnHover}
            >
              <span className="flex items-center justify-center">
                Discover Our Story
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiChevronUp className="w-5 h-5 rotate-90" />
                </motion.div>
              </span>
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('brands')}
              className="px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white shadow-xl"
              {...scaleOnHover}
            >
              Explore Our Brands
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
