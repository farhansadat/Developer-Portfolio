import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create Gmail-compatible mailto link
    const { name, email, subject, message } = formData;
    const emailBody = encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    );
    const emailSubject = encodeURIComponent(subject || 'Portfolio Contact Form');
    const mailtoUrl = `mailto:farhansadatx@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open Gmail/default email client
    window.open(mailtoUrl, '_blank');
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show Gmail-style success message
    const successMsg = document.createElement('div');
    successMsg.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center';
    successMsg.innerHTML = `
      <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.273L12 9.545l10.091-5.724h.273c.904 0 1.636.749 1.636 1.636z"/>
      </svg>
      Opening email client to send your message...
    `;
    document.body.appendChild(successMsg);
    
    setTimeout(() => {
      if (document.body.contains(successMsg)) {
        document.body.removeChild(successMsg);
      }
    }, 3000);
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
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
                      <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-300 group">
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
                    <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
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

              {/* Quick social actions */}
              <motion.div 
                className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-center text-sm sm:text-base">Let's Connect!</h4>
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  {contactInfo.filter(item => item.link).map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className={`${social.icon} text-slate-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm sm:text-base`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Gmail Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-red-100 dark:border-red-900/20"
              variants={itemVariants}
              whileHover={{ y: -2, boxShadow: "0 20px 40px rgba(234, 67, 53, 0.1)" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fab fa-google text-white text-lg sm:text-xl"></i>
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Contact</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1 sm:mb-2">
                      <i className="fas fa-user mr-1 sm:mr-2 text-red-500"></i>Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1 sm:mb-2">
                      <i className="fas fa-envelope mr-1 sm:mr-2 text-red-500"></i>Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1 sm:mb-2">
                    <i className="fas fa-tag mr-1 sm:mr-2 text-red-500"></i>Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 mb-1 sm:mb-2">
                    <i className="fas fa-comment mr-1 sm:mr-2 text-red-500"></i>Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all duration-200 resize-none hover:border-gray-300 dark:hover:border-gray-500 text-sm sm:text-base"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>
                
                <motion.button 
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(234, 67, 53, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 focus:ring-4 focus:ring-red-500/30 shadow-lg text-sm sm:text-base flex items-center justify-center group"
                >
                  <motion.div
                    className="flex items-center"
                    whileHover={{ x: 2 }}
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.887.732-1.636 1.636-1.636h.273L12 9.545l10.091-5.724h.273c.904 0 1.636.749 1.636 1.636z"/>
                    </svg>
                    <span>Send Email</span>
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
