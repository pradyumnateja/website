export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

export interface Skill {
  name: string;
  proficiency: number;
}

export interface SkillSet {
  [key: string]: string[];
}

export interface SkillProficiency {
  [key: string]: Skill[];
}