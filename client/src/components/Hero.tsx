import { motion } from 'framer-motion';
// Removed heavy 3D components for better performance
import TypingEffect from './TypingEffect';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: "fab fa-github",
      url: "https://github.com/farhansadat",
      hoverColor: "hover:text-gray-800 dark:hover:text-gray-300"
    },
    {
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/alimullahsadat/", 
      hoverColor: "hover:text-blue-600"
    },
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com/farhan_sadat1532",
      hoverColor: "hover:text-pink-500"
    },
    {
      icon: "fas fa-envelope",
      url: "mailto:farhansadatx@gmail.com",
      hoverColor: "hover:text-emerald-600"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Removed 3D Background for better performance */}
      
      {/* 3D Floating background elements */}
      <motion.div 
        className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-blue-200 rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover={{
          scale: 1.3,
          rotateZ: 45,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
        }}
      />
      <motion.div 
        className="absolute top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-emerald-200 rounded-full opacity-40"
        animate={{ 
          y: [0, 15, 0],
          rotateX: [0, 180, 360],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        whileHover={{
          scale: 1.4,
          rotateZ: -45,
          boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)"
        }}
      />
      <motion.div 
        className="absolute bottom-40 left-8 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 bg-purple-200 rounded-full opacity-50"
        animate={{ 
          x: [0, 10, 0],
          rotateZ: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{
          scale: 1.5,
          rotateY: 180,
          boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <TypingEffect 
                text="Hi, I'm Alimullah"
                speed={150}
                className="inline-block font-black tracking-wide"
              />
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-6 sm:mb-8 font-light px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Advanced AI Engineer & Full-Stack Developer passionate about Machine Learning and Cybersecurity
            </motion.p>

            {/* Social Links with 3D Effects */}
            <motion.div 
              className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-200 dark:border-gray-600 flex items-center justify-center text-slate-600 dark:text-gray-400 transition-all duration-300 hover:border-transparent bg-white dark:bg-gray-800 hover:shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <i className={`${social.icon} text-sm sm:text-lg transition-colors duration-300 ${social.hoverColor}`}></i>
                </motion.a>
              ))}
            </motion.div>
            
            {/* 3D Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button 
                onClick={scrollToProjects}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: -5,
                  rotateY: 5,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95, rotateX: 0, rotateY: 0 }}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  <i className="fas fa-rocket mr-2"></i>
                  View My Work
                </span>
              </motion.button>
              
              <motion.button 
                onClick={scrollToContact}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-slate-300 dark:border-gray-600 hover:border-blue-500 text-slate-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700 text-sm sm:text-base relative overflow-hidden bg-white dark:bg-gray-800"
              >
                <span className="flex items-center">
                  <i className="fas fa-paper-plane mr-2"></i>
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-2xl text-slate-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              scale: 1.2,
              rotateX: 15,
              color: "#3b82f6"
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <i className="fas fa-chevron-down"></i>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
