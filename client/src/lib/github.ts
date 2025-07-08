// GitHub API utilities for fetching repository data
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  archived: boolean;
  disabled: boolean;
  private: boolean;
}

export interface GitHubLanguages {
  [key: string]: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string | null;
  language: string;
  stars: number;
  forks: number;
  topics: string[];
  lastUpdated: string;
  featured: boolean;
}

const GITHUB_API_BASE = 'https://api.github.com';

// Fetch user repositories
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos = await response.json();
    
    // Filter out archived, disabled, and private repos
    return repos.filter((repo: GitHubRepo) => 
      !repo.archived && 
      !repo.disabled && 
      !repo.private
    );
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}

// Fetch languages for a specific repository
export async function fetchRepoLanguages(username: string, repoName: string): Promise<GitHubLanguages> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repoName}/languages`);
    
    if (!response.ok) {
      return {};
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error);
    return {};
  }
}

// Transform GitHub repo to Project format
export async function transformRepoToProject(repo: GitHubRepo, username: string): Promise<Project> {
  const languages = await fetchRepoLanguages(username, repo.name);
  const techStack = Object.keys(languages);
  
  // Determine if project is featured
  const featured = repo.topics.includes('featured');
  
  return {
    id: repo.id,
    title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: repo.description || 'No description provided',
    techStack: techStack.length > 0 ? techStack : [repo.language || 'Unknown'],
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || null,
    language: repo.language || 'Unknown',
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics,
    lastUpdated: repo.updated_at,
    featured
  };
}

// Main function to get all projects from GitHub
export async function getGitHubProjects(username: string): Promise<Project[]> {
  try {
    const repos = await fetchGitHubRepos(username);
    
    // Transform repos to projects with language data
    const projects = await Promise.all(
      repos.map(repo => transformRepoToProject(repo, username))
    );
    
    // Sort by last updated (most recent first)
    return projects.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
  } catch (error) {
    console.error('Error getting GitHub projects:', error);
    throw error;
  }
}

// Get featured projects only
export async function getFeaturedGitHubProjects(username: string): Promise<Project[]> {
  const projects = await getGitHubProjects(username);
  return projects.filter(project => project.featured);
}