// Frontend-only types for portfolio application

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  gradient: string;
  icon: string;
  color: string;
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  icon: string;
  color: string;
  description?: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  isRead?: boolean;
  createdAt?: string;
}

export interface Certification {
  id: number;
  name: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
  location?: string;
  technologies?: string[];
  achievements?: string[];
}

export interface PageView {
  id: number;
  page: string;
  userAgent?: string;
  referrer?: string;
  createdAt?: string;
}

export interface User {
  id: number;
  username: string;
}

// Form types
export type InsertProject = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;
export type InsertSkill = Omit<Skill, 'id'>;
export type InsertContactMessage = Omit<ContactMessage, 'id' | 'isRead' | 'createdAt'>;
export type InsertCertification = Omit<Certification, 'id'>;
export type InsertExperience = Omit<Experience, 'id'>;
export type InsertPageView = Omit<PageView, 'id' | 'createdAt'>;
export type InsertUser = Omit<User, 'id'>;