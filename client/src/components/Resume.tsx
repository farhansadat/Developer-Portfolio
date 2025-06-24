import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/skills';

const Resume = () => {
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

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);
  
  const groupedSkills = skillsByCategory;

  return (
    <section id="resume" className="py-12 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Resume
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full mb-3 sm:mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 px-4 sm:px-0"
            variants={itemVariants}
          >
            My professional background and technical expertise
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Resume Header */}
          <div className="text-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Alimullah Sadat</h1>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-4">AI Engineer & Full-Stack Developer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-gray-300">
              <span><i className="fas fa-envelope mr-2"></i>farhansadatx@gmail.com</span>
              <span><i className="fas fa-phone mr-2"></i>+49 176 219 06634</span>
              <span><i className="fas fa-map-marker-alt mr-2"></i>Germany</span>
            </div>
          </div>

          {/* Professional Summary */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <i className="fas fa-user mr-3 text-blue-500"></i>Professional Summary
            </h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
              Advanced AI Engineer and Full-Stack Developer with expertise in Machine Learning, Cybersecurity, and modern web technologies. 
              Problem solver and technophile with experience in autonomous systems, network infrastructure, and AI-powered applications.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <i className="fas fa-code mr-3 text-blue-500"></i>Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(groupedSkills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3 capitalize">
                    {category === 'Frontend' ? 'Frontend' : 
                     category === 'Backend' ? 'Backend' : 
                     category === 'Database' ? 'Database' : 
                     category === 'Cloud' ? 'Cloud' : 
                     category === 'DevOps' ? 'DevOps' : 
                     category === 'AI/ML' ? 'AI & ML' : category}
                  </h4>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <span className="text-slate-600 dark:text-gray-300">{skill.name}</span>
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <motion.div 
                            className={`h-2 rounded-full ${
                              category === 'Frontend' ? 'bg-blue-500' :
                              category === 'Backend' ? 'bg-emerald-500' : 
                              category === 'Database' ? 'bg-yellow-500' :
                              category === 'Cloud' ? 'bg-orange-500' :
                              category === 'DevOps' ? 'bg-red-500' :
                              category === 'AI/ML' ? 'bg-purple-500' : 'bg-gray-500'
                            }`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <i className="fas fa-globe mr-3 text-blue-500"></i>Languages
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🇦🇫</span>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">Dari</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-gray-400">Native</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🇦🇫</span>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">Pashto</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-gray-400">Native</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🇺🇸</span>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">English</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-gray-400">Fluent</span>
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🇹🇷</span>
                  <span className="text-slate-700 dark:text-gray-300 font-medium">Turkish</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-gray-400">Fluent</span>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <i className="fas fa-graduation-cap mr-3 text-blue-500"></i>Education
            </h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Bachelor of Computer Engineering</h4>
                  <p className="text-slate-600 dark:text-gray-300">Ostim Technical University</p>
                </div>
                <span className="text-slate-500 dark:text-gray-400 text-sm mt-2 md:mt-0">2019 - 2023</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
              <i className="fas fa-certificate mr-3 text-blue-500"></i>Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-google text-blue-500 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">Google Cloud Professional ML Engineer</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-microsoft text-blue-600 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">Microsoft Azure AI Engineer Associate</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-aws text-orange-500 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">AWS Certified Solutions Architect</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-react text-blue-500 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">Meta Front-End Developer Professional Certificate</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-node-js text-green-500 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">Full Stack JavaScript Developer (MongoDB University)</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fas fa-database text-blue-600 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">PostgreSQL Professional Certification</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fab fa-docker text-blue-400 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">Docker Certified Associate (DCA)</span>
              </div>
              <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <i className="fas fa-shield-alt text-red-500 text-xl mr-3"></i>
                <span className="text-slate-700 dark:text-gray-300">CISSP - Certified Information Systems Security Professional</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
