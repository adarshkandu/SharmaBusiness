import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiPlay, HiTruck, HiTrendingUp } from 'react-icons/hi';

interface BrandsProps {
  isDark: boolean;
}

const Brands: React.FC<BrandsProps> = ({ isDark }) => {
  const brands = [
    {
      name: 'First Movers Entertainment',
      acronym: 'FME',
      slogan: 'Your Expectation, Our Perfection',
      description:
        'FME is a premier entertainment company merging creativity and technology to deliver outstanding multimedia content. With the slogan "Your Expectation, Our Perfection," FME ensures every project exceeds client expectations, offering captivating and inspiring entertainment experiences.',
      color: 'from-blue-600 to-indigo-600',
      icon: HiPlay,
      features: ['Multimedia Content', 'Creative Solutions', 'Technology Integration', 'Client Excellence'],
    },
    {
      name: 'VaHaN by Pragati Tours and Travels',
      acronym: 'VaHaN',
      slogan: 'Comfort, Safety, Luxury',
      description:
        'VaHaN offers passenger logistics including cabs, buses, and travel packages. We focus on comfort, safety, and luxury, ensuring all vehicles are under seven years old. Whether short or long-distance, VaHaN guarantees a reliable and enjoyable journey.',
      color: 'from-blue-500 to-blue-700',
      icon: HiTruck,
      features: ['Premium Vehicles', 'Safety First', 'Travel Packages', 'Luxury Experience'],
    },
    {
      name: 'Growth Consultancy',
      acronym: 'GC',
      slogan: 'Empowering Financial Growth',
      description:
        'Growth Consultancy offers tailored investment and insurance solutions including mutual funds, SIPs, and insurance in life, general, and health categories. We empower clients to make informed financial decisions for long-term growth and stability.',
      color: 'from-indigo-600 to-blue-800',
      icon: HiTrendingUp,
      features: ['Investment Solutions', 'Insurance Coverage', 'Financial Planning', 'Long-term Growth'],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="brands" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
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
                <HiStar className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <motion.h2
              className={`text-3xl md:text-4xl font-bold ml-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Brands
            </motion.h2>
          </div>
          <motion.p
            className={`text-lg ${isDark ? 'text-gray-300' : 'text-blue-700'} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Three distinct brands, one unified vision of excellence across entertainment, travel, and financial consulting.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className={`group p-6 rounded-3xl ${
                isDark ? 'bg-gray-800/50 border border-gray-700' : 'bg-white border border-blue-200'
              } shadow-xl hover:shadow-2xl relative overflow-hidden`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${brand.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    <brand.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {brand.acronym}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {brand.name}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}
                >
                  {brand.slogan}
                </p>
                <p
                  className={`${isDark ? 'text-gray-300' : 'text-blue-800'} leading-relaxed mb-4 text-sm`}
                >
                  {brand.description}
                </p>
                <div className="space-y-2">
                  {brand.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${brand.color}`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                      />
                      <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-blue-700'}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;