import { ProjectItem, ServiceItem, SkillItem } from '../types';

import maanPortrait from '../assets/images/maan_real_photo_1790537220114.jpg';
import brandIdentityImg from '../assets/images/brand_identity_project_1790535078567.jpg';
import promoVideoImg from '../assets/images/promo_video_project_1790535089112.jpg';
import businessWebImg from '../assets/images/business_web_project_1790535099880.jpg';
import socialMediaImg from '../assets/images/social_media_project_1790535112525.jpg';
import cabdiraxmanLogoImg from '../assets/images/cabdiraxman_logo_1790539667449.jpg';

export {
  maanPortrait,
  brandIdentityImg,
  promoVideoImg,
  businessWebImg,
  socialMediaImg,
  cabdiraxmanLogoImg,
};

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    description: 'Modern and clean logo design for a brand identity project.',
    image: brandIdentityImg,
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    deliverables: ['Logo System & Variations', 'Brand Guidelines', 'Stationery & Business Cards', 'Vector Assets (SVG, AI, EPS)'],
    details: 'A comprehensive branding system crafted for a forward-thinking modern company. Includes refined typography hierarchy, luxury monochrome palettes with metallic foil accents, and complete corporate stationery.'
  },
  {
    id: '2',
    title: 'Promotional Video',
    category: 'Video Editing',
    description: 'Engaging promotional video with smooth transitions and effects.',
    image: promoVideoImg,
    tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
    deliverables: ['Cinematic Color Grading', 'Motion Graphics & Titles', 'Sound Design & SFX', 'Multi-Platform Formats (16:9, 9:16)'],
    details: 'Dynamic promotional showcase produced with rhythmic cut-to-beat pacing, color-matched grading, custom lower-thirds typography, and high-impact visual effects for maximum audience retention.'
  },
  {
    id: '3',
    title: 'Business Website',
    category: 'Web Development',
    description: 'Modern and responsive business website design.',
    image: businessWebImg,
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    deliverables: ['Responsive Web App', 'High-Converting Landing Page', 'Custom UI/UX Components', 'SEO & Fast Performance'],
    details: 'A high-performance modern business website with bespoke dark-mode interface, ultra-smooth micro-interactions, responsive grid layout, and seamless cross-device mobile optimization.'
  },
  {
    id: '4',
    title: 'Social Media Graphics',
    category: 'Graphic Design',
    description: 'Eye-catching social media post designs for brand promotion.',
    image: socialMediaImg,
    tools: ['Photoshop', 'Illustrator', 'Canva Pro'],
    deliverables: ['Instagram Carousels & Reels Covers', 'Promotional Banners', 'Story Templates', 'Engagement Graphic Assets'],
    details: 'Vibrant, conversion-focused social media kit engineered for multi-platform brand storytelling. Features bold typographic hooks, consistent visual styling, and high-impact layouts.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    iconName: 'design',
    description: 'Crafting memorable visual identities, marketing collateral, and digital graphics that elevate brand authority.',
    services: [
      'Logo Design',
      'Social Media Design',
      'Business Advertisements',
      'Branding',
      'Posters & Promotional Materials'
    ],
    image: brandIdentityImg
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    iconName: 'video',
    description: 'Transforming raw footage into captivating visual stories with cinematic pacing, sound design, and motion graphics.',
    services: [
      'Social Media Videos',
      'Promotional Videos',
      'Business Advertisements',
      'Short-form Videos',
      'Cinematic Editing'
    ],
    image: promoVideoImg
  },
  {
    id: 'web-development',
    title: 'Web Development',
    iconName: 'code',
    description: 'Building fast, responsive, and aesthetically distinctive websites that convert visitors into loyal clients.',
    services: [
      'Portfolio Websites',
      'Business Websites',
      'Responsive Web Design',
      'Landing Pages',
      'Modern UI Design'
    ],
    image: businessWebImg
  }
];

export const SKILLS: SkillItem[] = [
  { id: '1', name: 'Graphic Design', icon: 'PenTool', tools: 'Photoshop, Illustrator' },
  { id: '2', name: 'Video Editing', icon: 'Film', tools: 'Premiere Pro, DaVinci' },
  { id: '3', name: 'Web Design', icon: 'Monitor', tools: 'Figma, Wireframing' },
  { id: '4', name: 'Web Development', icon: 'Code', tools: 'React, TypeScript, CSS' },
  { id: '5', name: 'UI Design', icon: 'Layout', tools: 'Design Systems, UX' },
  { id: '6', name: 'Branding', icon: 'Sparkles', tools: 'Identity, Typography' },
  { id: '7', name: 'Social Media Design', icon: 'Megaphone', tools: 'Ad Creatives, Posts' },
  { id: '8', name: 'Responsive Design', icon: 'Smartphone', tools: 'Mobile-first, Flexbox' }
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
  { name: 'X', url: 'https://x.com', icon: 'Twitter' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' }
];
