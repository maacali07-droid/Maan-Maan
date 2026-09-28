export type ProjectCategory = 'Graphic Design' | 'Video Editing' | 'Web Development';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tags?: string[];
  deliverables?: string[];
  tools?: string[];
  liveUrl?: string;
  details?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'design' | 'video' | 'code';
  description: string;
  services: string[];
  image: string;
}

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
  tools: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
