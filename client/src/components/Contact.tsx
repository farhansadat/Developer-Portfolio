import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: "fab fa-github",
      title: "GitHub",
      info: "github.com/farhansadat",
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-800",
      hoverColor: "hover:from-slate-800 hover:to-slate-900",
      link: "https://github.com/farhansadat",
      description: "Check out my repositories"
    },
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      info: "linkedin.com/in/alimullahsadat",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      link: "https://www.linkedin.com/in/alimullahsadat/",
      description: "Connect professionally"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      info: "farhansadatx@gmail.com",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700",
      link: "mailto:farhansadatx@gmail.com",
      description: "Send me an email"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      info: "+1 579 469-9912",
      bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
      hoverColor: "hover:from-emerald-600 hover:to-emerald-700",
      link: "https://wa.me/15794699912",
      description: "Message me on WhatsApp"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      info: "Germany",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      link: null,
      description: "Based in Germany"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full mb-3 sm:mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Contact Info */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 hover:border-transparent transition-all duration-300 group shadow-lg hover:shadow-xl">
                        <motion.div 
                          className={`w-12 h-12 sm:w-16 sm:h-16 ${contact.bgColor} ${contact.hoverColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{ rotate: 5 }}
                        >
                          <i className={`${contact.icon} text-white text-lg sm:text-2xl`}></i>
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {contact.title}
                          </h4>
                          <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mb-1">{contact.description}</p>
                          <p className="text-blue-500 dark:text-blue-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors text-sm sm:text-base truncate">
                            {contact.info}
                          </p>
                        </div>
                        <motion.i 
                          className="fas fa-arrow-right text-slate-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base"
                          whileHover={{ x: 5 }}
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 shadow-lg">
                      <motion.div 
                        className={`w-12 h-12 sm:w-16 sm:h-16 ${contact.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <i className={`${contact.icon} text-white text-lg sm:text-2xl`}></i>
                      </motion.div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{contact.title}</h4>
                        <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mb-1">{contact.description}</p>
                        <p className="text-slate-600 dark:text-gray-300 font-medium text-sm sm:text-base">{contact.info}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Contact Message */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-800/30"
              variants={itemVariants}
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-rocket text-white text-2xl"></i>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's Build Something Amazing</h3>
                
                <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                  I'm always excited to discuss new projects, innovative ideas, or potential collaborations. 
                  Whether you're looking for an AI engineer, full-stack developer, or just want to chat about technology, 
                  I'd love to hear from you!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-slate-600 dark:text-gray-300">
                    <i className="fas fa-clock mr-2 text-blue-500"></i>
                    <span className="text-sm">Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-600 dark:text-gray-300">
                    <i className="fas fa-globe mr-2 text-blue-500"></i>
                    <span className="text-sm">Available for remote work worldwide</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-600 dark:text-gray-300">
                    <i className="fas fa-handshake mr-2 text-blue-500"></i>
                    <span className="text-sm">Open to freelance & full-time opportunities</span>
                  </div>
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
