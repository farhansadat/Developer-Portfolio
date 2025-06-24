// GitHub configuration
export const GITHUB_CONFIG = {
  username: 'farhansadat', // Replace with your GitHub username
  
  // Optional: Specify repositories to exclude from portfolio
  excludeRepos: [
    'farhansadat', // Profile README repo
    '.github',     // GitHub special repo
    'devportfolio', // This portfolio repo itself
    'mydevportfolio', // Hide mydevportfolio project
    'developer-portfolio', // New portfolio repo
    'testingdev', // Testing repo
  ],
  
  // Optional: Force certain repositories to be featured
  featuredRepos: [
    'testrepo', // Your test repository
    'Luna-Expense-Tracker', // Luna expense tracker (exact repo name)
  ],
  
  // Cache duration in milliseconds (5 minutes)
  cacheDuration: 5 * 60 * 1000,
};