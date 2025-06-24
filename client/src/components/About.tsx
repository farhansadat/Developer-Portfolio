import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
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
              About Me
            </motion.h2>
            <motion.div 
              className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full"
              variants={itemVariants}
            />
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-6 leading-relaxed">
                I've always been a great problem solver, an independent introvert, and a technophile obsessed with the latest devices. 
                With a Computer Science education and years of experience, I've worked on countless freelance projects and 
                been involved with notable startups.
              </p>
              <p className="text-lg text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                The fields that interest me most are Machine Learning and Cybersecurity. I'm familiar with JavaScript, 
                Python, C#, TypeScript, and many other technologies, always adding new skills to my repertoire.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <motion.div 
                  className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-code text-blue-500 text-3xl mb-3"></i>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">AI & ML</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300">Python, TensorFlow, PyTorch</p>
                </motion.div>
                
                <motion.div 
                  className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl text-center"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className="fas fa-server text-emerald-500 text-3xl mb-3"></i>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Full-Stack</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-300">TypeScript, React, Node.js</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
