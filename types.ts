export interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  title: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  year: string;
}