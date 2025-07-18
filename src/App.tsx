import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  Building2,
  Eye,
  Target,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronUp,
  Play,
  TrendingUp,
  Car,
  Globe,
} from "lucide-react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "vision",
        "mission",
        "brands",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 400);

      // Change navbar background on scroll
      setNavbarBg(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "vision", label: "Vision" },
    { id: "mission", label: "Mission" },
    { id: "brands", label: "Brands" },
    { id: "contact", label: "Contact" },
  ];

  const brands = [
    {
      name: "First Movers Entertainment",
      acronym: "FME",
      slogan: "Your Expectation, Our Perfection",
      description:
        "A premier entertainment company merging creativity and technology to deliver outstanding multimedia content. FME ensures every project exceeds client expectations, offering captivating and inspiring entertainment experiences.",
      color: "from-purple-600 to-pink-600",
      icon: Play,
      features: [
        "Multimedia Content",
        "Creative Solutions",
        "Technology Integration",
        "Client Excellence",
      ],
    },
    {
      name: "VaHaN by Pragati Tours and Travels",
      acronym: "VaHaN",
      slogan: "Comfort, Safety, Luxury",
      description:
        "Offering comprehensive passenger logistics including cabs, buses, and travel packages. We focus on comfort, safety, and luxury, ensuring all vehicles are under seven years old for reliable and enjoyable journeys.",
      color: "from-blue-600 to-cyan-600",
      icon: Car,
      features: [
        "Premium Vehicles",
        "Safety First",
        "Travel Packages",
        "Luxury Experience",
      ],
    },
    {
      name: "Growth Consultancy",
      acronym: "GC",
      slogan: "Empowering Financial Growth",
      description:
        "Offering tailored investment and insurance solutions including mutual funds, SIPs, and comprehensive insurance coverage. We empower clients to make informed financial decisions for long-term growth and stability.",
      color: "from-emerald-600 to-teal-600",
      icon: TrendingUp,
      features: [
        "Investment Solutions",
        "Insurance Coverage",
        "Financial Planning",
        "Long-term Growth",
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDark ? "dark bg-gray-900" : "bg-white"
      }`}
    >
      {/* Custom Scrollbar Styles */}
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: ${isDark ? "#1f2937" : "#f3f4f6"};
        }
        ::-webkit-scrollbar-thumb {
          background: ${isDark ? "#4f46e5" : "#3b82f6"};
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? "#6366f1" : "#2563eb"};
        }
        
        /* Firefox */
        html {
          scrollbar-width: thin;
          scrollbar-color: ${isDark ? "#4f46e5 #1f2937" : "#3b82f6 #f3f4f6"};
        }
      `}</style>

      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarBg
            ? isDark
              ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800"
              : "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>
                <div className="relative p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <span
                  className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                >
                  Sharma Business
                </span>
                <p
                  className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  } -mt-1`}
                >
                  Excellence in Innovation
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    activeSection === link.id
                      ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 shadow-lg"
                      : isDark
                      ? "text-gray-300 hover:text-white hover:bg-gray-800/50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                      layoutId="activeIndicator"
                    ></motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-lg"
                }`}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 text-white hover:bg-gray-700 shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-lg"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div
                className={`${
                  isDark
                    ? "bg-gray-800/95 backdrop-blur-xl border-t border-gray-700"
                    : "bg-white/95 backdrop-blur-xl border-t border-gray-200"
                } shadow-2xl`}
              >
                <motion.div
                  className="px-4 py-6 space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === link.id
                          ? "text-blue-600 bg-blue-50 dark:bg-blue-900/30 shadow-lg transform scale-105"
                          : isDark
                          ? "text-gray-300 hover:text-white hover:bg-gray-700/50"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                      }`}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-teal-600/10"></div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="text-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  isDark
                    ? "bg-gray-800/50 text-blue-400 border border-gray-700"
                    : "bg-blue-50 text-blue-600 border border-blue-200"
                } backdrop-blur-sm`}
              >
                <Globe className="w-4 h-4 mr-2" />
                Founded by Dr. Ankit P. Sharma
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Sharma Business
            </motion.h1>

            <motion.p
              className={`text-xl md:text-2xl mb-12 ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A dynamic, multi-tasking company housing multiple successful
              brands under one umbrella. Serving over{" "}
              <span className="font-bold text-blue-600">800+ clients</span>{" "}
              across various industries with excellence and innovation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25"
                {...scaleOnHover}
              >
                <span className="flex items-center justify-center">
                  Discover Our Story
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronUp className="w-5 h-5 rotate-90" />
                  </motion.div>
                </span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("brands")}
                className={`px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white shadow-xl ${
                  isDark ? "hover:bg-blue-600" : ""
                }`}
                {...scaleOnHover}
              >
                Explore Our Brands
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section
        id="about"
        className={`py-24 ${isDark ? "bg-gray-800/50" : "bg-gray-50/50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                isDark
                  ? "bg-gray-700/50 text-blue-400 border border-gray-600"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              }`}
            >
              <Building2 className="w-4 h-4 mr-2" />
              About Sharma Business
            </div>
            <h2
              className={`text-5xl md:text-6xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Excellence Through Innovation
            </h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-4xl mx-auto leading-relaxed`}
            >
              Founded by Dr. Ankit P. Sharma, a visionary entrepreneur
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3
                  className={`text-3xl font-bold mb-6 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Our Foundation
                </h3>
                <p
                  className={`text-lg mb-6 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  Sharma Business is a dynamic, multi-tasking company housing
                  multiple successful brands under one umbrella. Founded by Dr.
                  Ankit P. Sharma, a visionary entrepreneur, the company has
                  grown to serve over 800 clients across various industries with
                  a strong commitment to excellence and innovation.
                </p>
                <p
                  className={`text-lg ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } leading-relaxed`}
                >
                  Our diverse portfolio spans entertainment, travel, and
                  financial consulting, allowing us to offer comprehensive
                  solutions that drive success across multiple sectors while
                  maintaining the highest standards of quality and customer
                  satisfaction.
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {["Innovation", "Excellence", "Reliability", "Growth"].map(
                  (value, index) => (
                    <motion.div
                      key={index}
                      className={`px-6 py-3 rounded-full ${
                        isDark
                          ? "bg-gray-700 text-gray-300 border border-gray-600"
                          : "bg-white text-gray-700 border border-gray-200"
                      } shadow-lg hover:shadow-xl`}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {value}
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className={`p-8 rounded-3xl ${
                  isDark
                    ? "bg-gray-700/50 border border-gray-600"
                    : "bg-white border border-gray-200"
                } shadow-2xl`}
              >
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Building2 className="w-12 h-12 text-white" />
                  </motion.div>
                  <h4
                    className={`text-2xl font-bold mb-4 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    800+ Happy Clients
                  </h4>
                  <p
                    className={`${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Trusted by businesses across multiple industries for
                    exceptional service and innovative solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section id="vision" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75"></div>
                <div className="relative p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Eye className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
            <motion.h2
              className={`text-5xl md:text-6xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Vision
            </motion.h2>
            <motion.div
              className={`max-w-5xl mx-auto p-8 rounded-3xl ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/50 border border-gray-200"
              } backdrop-blur-sm shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <p
                className={`text-xl md:text-2xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } leading-relaxed`}
              >
                Dr. Ankit P. Sharma envisions Sharma Business achieving{" "}
                <span className="font-bold text-blue-600">
                  global recognition
                </span>{" "}
                by delivering exceptional services and groundbreaking solutions
                across multiple industries. The goal is to create a sustainable,
                customer-centric ecosystem where each brand reaches its full
                potential and contributes to long-term growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section
        id="mission"
        className={`py-24 ${isDark ? "bg-gray-800/50" : "bg-gray-50/50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full blur opacity-75"></div>
                <div className="relative p-6 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
            <motion.h2
              className={`text-5xl md:text-6xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.div
              className={`max-w-5xl mx-auto p-8 rounded-3xl ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/50 border border-gray-200"
              } backdrop-blur-sm shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <p
                className={`text-xl md:text-2xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } leading-relaxed mb-8`}
              >
                Sharma Business is dedicated to providing superior service
                through{" "}
                <span className="font-bold text-teal-600">
                  innovation, reliability, and integrity
                </span>
                . We aim to understand and anticipate client needs, offering
                tailored solutions with a client-first approach, and fostering
                lasting relationships with customers, partners, and communities.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Innovation",
                    desc: "Cutting-edge solutions for modern challenges",
                  },
                  {
                    title: "Reliability",
                    desc: "Consistent excellence in every interaction",
                  },
                  {
                    title: "Integrity",
                    desc: "Transparent and ethical business practices",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-700/50 border border-gray-600"
                        : "bg-white border border-gray-200"
                    } shadow-lg hover:shadow-xl`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h4
                      className={`text-lg font-bold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Brands Section */}
      <section id="brands" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
                <div className="relative p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                  <Star className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
            <motion.h2
              className={`text-5xl md:text-6xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Brands
            </motion.h2>
            <motion.p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Three distinct brands, one unified vision of excellence across
              entertainment, travel, and financial consulting.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className={`group p-8 rounded-3xl ${
                  isDark
                    ? "bg-gray-800/50 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-xl hover:shadow-2xl relative overflow-hidden`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                ></motion.div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${brand.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <brand.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {brand.acronym}
                    </div>
                  </div>

                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {brand.name}
                  </h3>

                  <p
                    className={`text-sm font-medium mb-4 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}
                  >
                    {brand.slogan}
                  </p>

                  <p
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } leading-relaxed mb-6`}
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
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${brand.color}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2,
                          }}
                        ></motion.div>
                        <span
                          className={`text-sm ${
                            isDark ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
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

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className={`py-24 ${isDark ? "bg-gray-800/50" : "bg-gray-50/50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className={`text-5xl md:text-6xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Connect With Us
            </motion.h2>
            <motion.p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to transform your business? Let's discuss how Sharma
              Business can help you achieve your goals through our comprehensive
              suite of services.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className={`text-3xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+91 98765 43210",
                    color: "bg-blue-500",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@sharmabusiness.com",
                    color: "bg-teal-500",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    info: "Business District, Mumbai, India",
                    color: "bg-purple-500",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-6 p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-700/50 border border-gray-600"
                        : "bg-white border border-gray-200"
                    } shadow-lg hover:shadow-xl`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <motion.div
                      className={`p-4 ${contact.color} rounded-xl shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {contact.title}
                      </p>
                      <p
                        className={`${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {contact.info}
                      </p>
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
              <h3
                className={`text-3xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Our Journey
              </h3>

              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {[
                  {
                    icon: Facebook,
                    name: "Facebook",
                    color: "hover:bg-blue-600",
                    textColor: "text-blue-600",
                  },
                  {
                    icon: Twitter,
                    name: "Twitter",
                    color: "hover:bg-blue-400",
                    textColor: "text-blue-400",
                  },
                  {
                    icon: Linkedin,
                    name: "LinkedIn",
                    color: "hover:bg-blue-700",
                    textColor: "text-blue-700",
                  },
                  {
                    icon: Instagram,
                    name: "Instagram",
                    color: "hover:bg-pink-600",
                    textColor: "text-pink-600",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`group flex items-center space-x-4 p-6 rounded-2xl ${
                      isDark
                        ? "bg-gray-700/50 border border-gray-600"
                        : "bg-white border border-gray-200"
                    } shadow-lg hover:shadow-xl ${
                      social.color
                    } hover:text-white`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon
                        className={`w-8 h-8 ${social.textColor} group-hover:text-white transition-colors duration-300`}
                      />
                    </motion.div>
                    <span
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      } group-hover:text-white transition-colors duration-300`}
                    >
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                className={`mt-8 p-6 rounded-2xl ${
                  isDark
                    ? "bg-gray-700/50 border border-gray-600"
                    : "bg-white border border-gray-200"
                } shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h4
                  className={`text-lg font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Business Hours
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Monday - Friday
                    </span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Saturday
                    </span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Sunday
                    </span>
                    <span
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Closed
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    Sharma Business
                  </span>
                  <p className="text-gray-400 text-sm">
                    Excellence in Innovation
                  </p>
                </div>
              </motion.div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                A dynamic, multi-tasking company housing multiple successful
                brands under one umbrella. Founded by Dr. Ankit P. Sharma with a
                vision for global excellence.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="p-3 bg-gray-800 rounded-xl text-gray-400 hover:text-white hover:bg-gray-700"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Our Brands</h4>
              <ul className="space-y-3">
                {brands.map((brand, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                    >
                      <brand.icon className="w-4 h-4" />
                      <span>{brand.acronym}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.slice(1).map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-12 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Sharma Business. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl z-40 ${
              isDark
                ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
            }`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
