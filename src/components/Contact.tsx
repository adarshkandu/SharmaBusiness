import React from 'react';
import { motion } from 'framer-motion';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="contact" className={`py-16 ${isDark ? 'bg-gray-800/50' : 'bg-blue-50/30'} scroll-mt-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <motion.p 
            className={`text-lg ${isDark ? 'text-gray-300' : 'text-blue-800'} max-w-3xl mx-auto leading-relaxed`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your business? Let's discuss how Sharma Business can help you achieve your goals 
            through our comprehensive suite of services.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h3>
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: HiPhone, title: 'Phone', info: '+91 98765 43210', color: 'bg-blue-600' },
                { icon: HiMail, title: 'Email', info: 'info@sharmabusiness.com', color: 'bg-blue-500' },
                { icon: HiLocationMarker, title: 'Address', info: 'Business District, Mumbai, India', color: 'bg-indigo-600' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-4 p-4 rounded-2xl ${
                    isDark ? 'bg-gray-700/50 border border-gray-600' : 'bg-white border border-blue-200'
                  } shadow-lg hover:shadow-xl`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div 
                    className={`p-3 ${contact.color} rounded-xl shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{contact.title}</p>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-blue-700'}`}>{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Follow Our Journey
            </h3>
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: FaFacebook, name: 'Facebook', color: 'hover:bg-blue-600', textColor: 'text-blue-600' },
                { icon: FaTwitter, name: 'Twitter', color: 'hover:bg-blue-400', textColor: 'text-blue-400' },
                { icon: FaLinkedin, name: 'LinkedIn', color: 'hover:bg-blue-700', textColor: 'text-blue-700' },
                { icon: FaInstagram, name: 'Instagram', color: 'hover:bg-pink-600', textColor: 'text-pink-600' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`group flex items-center space-x-3 p-4 rounded-2xl ${
                    isDark ? 'bg-gray-700/50 border border-gray-600' : 'bg-white border border-blue-200'
                  } shadow-lg hover:shadow-xl ${social.color} hover:text-white`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon className={`w-6 h-6 ${social.textColor} group-hover:text-white transition-colors duration-300`} />
                  </motion.div>
                  <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-white transition-colors duration-300`}>
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className={`mt-6 p-4 rounded-2xl ${
                isDark ? 'bg-gray-700/50 border border-gray-600' : 'bg-white border border-blue-200'
              } shadow-lg`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className={`text-base font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-gray-300' : 'text-blue-800'}`}>Monday - Friday</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-gray-300' : 'text-blue-800'}`}>Saturday</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className={`${isDark ? 'text-gray-300' : 'text-blue-800'}`}>Sunday</span>
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
