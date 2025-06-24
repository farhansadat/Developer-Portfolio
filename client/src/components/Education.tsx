import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
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

  const educationData = [
    {
      degree: "Bachelor of Computer Engineering",
      school: "Ostim Technical University",
      period: "2019 - 2023",
      gpa: "Computer Engineering",
      description: "Comprehensive program covering software engineering, computer systems, and emerging technologies with focus on practical applications.",
      achievements: [
        "Specialized in Machine Learning and Cybersecurity",
        "Completed projects in embedded systems and AI",
        "Strong foundation in algorithms and data structures"
      ],
      color: "blue",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "High School Diploma",
      school: "Çankaya High School",
      period: "2017 - 2019",
      gpa: "Mathematics and Computer Science",
      description: "Mathematics and Computer Science track with advanced coursework in programming and analytical thinking.",
      achievements: [
        "Specialized in Mathematics and Computer Science",
        "Early exposure to programming concepts",
        "Built strong analytical and problem-solving skills"
      ],
      color: "emerald",
      icon: "fas fa-school"
    },
    {
      degree: "High School Diploma",
      school: "Benjamin N Cardozo High School",
      period: "2015 - 2017",
      gpa: "Mathematics and Computer Science",
      description: "International education experience with focus on STEM subjects and computer science fundamentals.",
      achievements: [
        "International educational experience",
        "Strong foundation in STEM subjects",
        "Developed multicultural perspective"
      ],
      color: "purple",
      icon: "fas fa-globe"
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800" ref={ref}>
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
            Education & Learning
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-3 sm:mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 px-4 sm:px-0"
            variants={itemVariants}
          >
            Continuous learning and professional development journey
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="w-16 h-16 bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl flex items-center justify-center mr-4 p-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {edu.logo ? (
                      <>
                        <img 
                          src={edu.logo} 
                          alt={`${edu.school} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            // Fallback to icon if logo fails to load
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full bg-${edu.color}-500 rounded-xl hidden items-center justify-center`}>
                          <i className={`${edu.icon} text-white text-2xl`}></i>
                        </div>
                      </>
                    ) : (
                      <div className={`w-full h-full bg-${edu.color}-500 rounded-xl flex items-center justify-center`}>
                        <i className={`${edu.icon} text-white text-2xl`}></i>
                      </div>
                    )}
                  </motion.div>
                  <div>
                    <span className="text-sm text-slate-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                  {edu.degree}
                </h3>
                <p className={`text-${edu.color}-600 dark:text-${edu.color}-400 font-semibold mb-1`}>
                  {edu.school}
                </p>
                <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">
                  {edu.gpa}
                </p>

                <p className="text-slate-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 dark:text-gray-200 text-sm">Key Achievements:</h4>
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <motion.div 
                      key={achievementIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: (index * 0.2) + (achievementIndex * 0.1) + 0.5 }}
                    >
                      <motion.i 
                        className={`fas fa-check-circle text-${edu.color}-500 text-sm mt-1 mr-3`}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: (index * 0.2) + (achievementIndex * 0.1) + 0.7 }}
                      />
                      <span className="text-slate-600 dark:text-gray-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;