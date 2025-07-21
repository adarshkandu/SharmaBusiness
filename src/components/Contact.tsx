import { motion } from 'framer-motion';
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeInOut' },
};

const ContactSection = ({ isDark }: { isDark: boolean }) => {
  const contactDetails = [
    {
      icon: HiPhone,
      title: 'Phone',
      info: '+91 98765 43210',
      color: 'bg-blue-600',
    },
    {
      icon: HiMail,
      title: 'Email',
      info: 'info@sharmabusiness.com',
      color: 'bg-blue-500',
    },
    {
      icon: HiLocationMarker,
      title: 'Address',
      info: 'Business District, Mumbai, India',
      color: 'bg-indigo-600',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      name: 'Facebook',
      color: 'hover:bg-blue-600',
      textColor: 'text-blue-600',
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      color: 'hover:bg-blue-400',
      textColor: 'text-blue-400',
    },
    {
      icon: FaLinkedinIn,
      name: 'LinkedIn',
      color: 'hover:bg-blue-700',
      textColor: 'text-blue-700',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      color: 'hover:bg-pink-500',
      textColor: 'text-pink-500',
    },
  ];

  return (
    <section id="contact" className="pb-10 px-7">
      {/* Heading Start */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-3 rounded-full shadow-lg">
            <HiPaperAirplane className="w-5 h-5" />
          </div>
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Connect With Us
          </h2>
        </div>
        <p
          className={`mt-3 ml-14 text-base md:text-lg ${
            isDark ? 'text-gray-300' : 'text-blue-700'
          }`}
        >
          We’d love to hear from you!
        </p>
      </motion.div>
      {/* Heading End */}

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="grid gap-4">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-4 p-4 rounded-2xl h-full ${
                isDark
                  ? 'bg-gray-700/50 border border-gray-600'
                  : 'bg-white border border-blue-200'
              } shadow-lg hover:shadow-xl transition-shadow`}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className={`p-3 ${contact.color} rounded-xl shadow-lg`}>
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p
                  className={`font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {contact.title}
                </p>
                <p
                  className={`text-sm ${
                    isDark ? 'text-gray-300' : 'text-blue-700'
                  }`}
                >
                  {contact.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social & Business Hours */}
        <div className="grid gap-4">
          {/* Business Hours */}
          <motion.div
            className={`p-4 rounded-2xl h-full ${
              isDark
                ? 'bg-gray-700/50 border border-gray-600'
                : 'bg-white border border-blue-200'
            } shadow-lg hover:shadow-xl`}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Business Hours
            </h3>
            <ul
              className={`text-sm space-y-1 ${
                isDark ? 'text-gray-300' : 'text-blue-700'
              }`}
            >
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`group flex items-center space-x-3 p-4 rounded-2xl ${
                  isDark
                    ? 'bg-gray-700/50 border border-gray-600'
                    : 'bg-white border border-blue-200'
                } shadow-lg hover:shadow-xl ${social.color} hover:text-white transition`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  className={`w-6 h-6 ${social.textColor} group-hover:text-white transition-colors duration-300`}
                />
                <span
                  className={`font-semibold text-sm ${
                    isDark ? 'text-white' : 'text-gray-800'
                  } group-hover:text-white`}
                >
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
