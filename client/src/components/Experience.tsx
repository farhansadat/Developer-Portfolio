import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fallbackExperiences } from '../data/fallbackData';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const experiences = [
    {
      title: "Exam Proctor & Customer Support",
      company: "Rosalyn.ai",
      period: "May 2022 - Present",
      color: "blue",
      description: "Supporting AI-powered exam proctoring platform with advanced artificial intelligence capabilities. Ensuring seamless user experience and resolving technical issues.",
      achievements: [
        "Managed customer support for AI proctoring platform",
        "Resolved technical issues improving user satisfaction by 90%",
        "Collaborated with AI team to enhance proctoring algorithms"
      ]
    },
    {
      title: "Network Engineering Intern",
      company: "Rakort Information Technologies",
      period: "September 2020 - June 2021",
      color: "emerald",
      description: "Built DHCP-DNS Server and Hotspot Application. Gained hands-on experience with network infrastructure and server management.",
      achievements: [
        "Developed DHCP-DNS server infrastructure",
        "Created hotspot application for network management",
        "Improved network efficiency and user connectivity"
      ]
    },
    {
      title: "Embedded Software Intern",
      company: "OGUZKAGAN Savunma Teknolojileri A.Ş.",
      period: "September 2019 - June 2020",
      color: "purple",
      description: "Developed an embedded encryption system for autonomous vehicle. Worked on security-critical systems for defense technology applications.",
      achievements: [
        "Designed embedded encryption system for autonomous vehicles",
        "Implemented security protocols for defense applications",
        "Collaborated with hardware engineers on system integration"
      ]
    },
    {
      title: "Web Development Intern",
      company: "Is Teknoloji Ltd. Sti.",
      period: "September 2018 - June 2019",
      color: "orange",
      description: "Developed full responsive website using HTML, CSS and JavaScript. Built foundational web development skills and learned modern frontend technologies.",
      achievements: [
        "Created responsive websites using HTML, CSS, JavaScript",
        "Implemented modern frontend design patterns",
        "Delivered pixel-perfect user interfaces"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="text-xl text-slate-600 dark:text-gray-300"
            variants={itemVariants}
          >
            My professional journey and achievements
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative timeline-line pl-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative mb-12"
                variants={itemVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`absolute left-[-23px] top-2 w-4 h-4 bg-${exp.color}-500 rounded-full border-4 border-white shadow-lg`}></div>
                
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-semibold`}>{exp.company}</p>
                    </div>
                    <span className="text-slate-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div 
                        key={achievementIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.2) + (achievementIndex * 0.1) + 0.5 }}
                      >
                        <i className="fas fa-chevron-right text-emerald-500 text-sm mt-1 mr-3"></i>
                        <span className="text-slate-600 dark:text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
