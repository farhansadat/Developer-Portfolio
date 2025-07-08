import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { getGitHubProjects, type Project } from '../lib/github';
import { GITHUB_CONFIG } from '../config/github';

// Function to get project-specific images
const getProjectImage = (projectTitle: string) => {
  // Convert project title to GitHub repo name format
  const repoName = projectTitle.replace(/\s+/g, '-');
  
  const projectImages: { [key: string]: string } = {
    'Luna-Expense-Tracker': 'https://raw.githubusercontent.com/farhansadat/Luna-Expense-Tracker/main/screenshots/Dashboard.png',
    'luna-expense-tracker': 'https://raw.githubusercontent.com/farhansadat/Luna-Expense-Tracker/main/screenshots/Dashboard.png',
    'Luna Expense Tracker': 'https://raw.githubusercontent.com/farhansadat/Luna-Expense-Tracker/main/screenshots/Dashboard.png',
    'lunaexpensetracker': 'https://raw.githubusercontent.com/farhansadat/Luna-Expense-Tracker/main/screenshots/Dashboard.png',
    // Future projects will follow this pattern:
    // 'project-name': `https://raw.githubusercontent.com/farhansadat/${repoName}/main/screenshots/main.png`,
  };
  
  // Try multiple variations of the project name
  const variations = [
    projectTitle,
    projectTitle.toLowerCase(),
    projectTitle.replace(/\s+/g, '-'),
    projectTitle.replace(/\s+/g, '-').toLowerCase(),
    projectTitle.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
    projectTitle.replace(/\s+/g, ''),
    projectTitle.toLowerCase().replace(/\s+/g, '')
  ];
  
  console.log('Looking for image for project:', projectTitle, 'Variations:', variations);
  
  for (const variation of variations) {
    if (projectImages[variation]) {
      console.log('Found image for variation:', variation, 'URL:', projectImages[variation]);
      return projectImages[variation];
    }
  }
  
  // Auto-detect screenshot for future projects
  // Try common screenshot file names in the repo
  const repoSlug = projectTitle.replace(/\s+/g, '-');
  const autoImageUrl = `https://raw.githubusercontent.com/farhansadat/${repoSlug}/main/screenshots/main.png`;
  
  console.log('No manual image mapping found, trying auto-detection for:', repoSlug, 'URL:', autoImageUrl);
  
  // For now, return null for projects without manual mapping to avoid 404s
  // In the future, when you add screenshots, they should follow the pattern:
  // /screenshots/main.png or /screenshots/screenshot.png
  return null;
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const githubProjects = await getGitHubProjects(GITHUB_CONFIG.username);
        
        console.log('All GitHub projects fetched:', githubProjects.map(p => p.title));
        
        // Filter out excluded repositories
        const filteredProjects = githubProjects.filter(project => {
          const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
          const isExcluded = GITHUB_CONFIG.excludeRepos.includes(projectSlug);
          return !isExcluded;
        });
        
        // Mark featured projects - check multiple name variations
        const projectsWithFeatured = filteredProjects.map(project => {
          const projectVariations = [
            project.title,
            project.title.toLowerCase(),
            project.title.replace(/\s+/g, '-'),
            project.title.replace(/\s+/g, '-').toLowerCase(),
            project.title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
          ];
          
          const isFeatured = GITHUB_CONFIG.featuredRepos.some(featuredRepo => 
            projectVariations.includes(featuredRepo) || 
            featuredRepo === project.title.toLowerCase().replace(/\s+/g, '-')
          );
          
          return {
            ...project,
            featured: project.featured || isFeatured
          };
        });
        // Remove duplicate projects by id
        const uniqueProjects = projectsWithFeatured.filter((proj, idx, arr) =>
          arr.findIndex(p => p.id === proj.id) === idx
        );
        setProjectsData(uniqueProjects);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch GitHub projects:', err);
        setError('Failed to load projects from GitHub');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

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

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
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
            Featured Projects
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full mb-3 sm:mb-4"
            variants={itemVariants}
          />
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            {loading ? 'Loading projects from GitHub...' : 
             error ? error : 
             'A collection of projects that showcase my skills and passion for development'}
          </motion.p>
          
          {/* Animated GitHub Logo */}
          <motion.div
            className="flex justify-center mt-6"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-lg overflow-hidden relative"
                initial={{ background: "#f3f4f6" }}
                animate={{ 
                  background: [
                    "#f3f4f6",
                    "#24292e"
                  ]
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ 
                    background: "radial-gradient(circle at center, transparent 0%, transparent 100%)"
                  }}
                  animate={{
                    background: [
                      "radial-gradient(circle at center, transparent 0%, transparent 100%)",
                      "radial-gradient(circle at center, #24292e 0%, #24292e 100%)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
                <motion.i 
                  className="fab fa-github text-xl relative z-10"
                  initial={{ color: "#6b7280" }}
                  animate={{ color: "#ffffff" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}

                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 sm:space-x-4">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      title="View Code"
                    >
                      <i className="fab fa-github text-lg sm:text-xl"></i>
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        title="Live Demo"
                      >
                        <i className="fas fa-external-link-alt text-lg sm:text-xl"></i>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-3 text-xs text-slate-500 dark:text-gray-400">
                    <span className="flex items-center">
                      <i className="fas fa-star mr-1"></i>
                      {project.stars}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-code-branch mr-1"></i>
                      {project.forks}
                    </span>
                  </div>
                </div>
              </div>

                {project.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold z-10">
                    Featured
                  </div>
                )}
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
