export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  variant: "cyan" | "pink" | "yellow";
  skills: string[];
}

export interface Certification {
  name: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  graduated: string;
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  contact: {
    email: string;
    // phone: string;
    github: string;
    website: string;
    location: string;
  };
  experience: Experience[];
  skillGroups: SkillGroup[];
  certifications: Certification[];
  education: Education;
}
