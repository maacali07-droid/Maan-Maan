import React from 'react';
import {
  PenTool,
  Film,
  Monitor,
  Code,
  Layout,
  Gem,
  Megaphone,
  Smartphone,
} from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  tools: string;
  icon: React.ReactNode;
}

export const SkillsSection: React.FC = () => {
  const skills: SkillItem[] = [
    {
      id: '1',
      name: 'Graphic Design',
      tools: 'Photoshop, Illustrator, InDesign',
      icon: <PenTool className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '2',
      name: 'Video Editing',
      tools: 'Premiere Pro, After Effects, DaVinci',
      icon: <Film className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '3',
      name: 'Web Design',
      tools: 'Figma, Wireframing, UX Flow',
      icon: <Monitor className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '4',
      name: 'Web Development',
      tools: 'React, TypeScript, Tailwind CSS',
      icon: <Code className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '5',
      name: 'UI Design',
      tools: 'Design Systems, Component UI',
      icon: <Layout className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '6',
      name: 'Branding',
      tools: 'Logo Identity, Visual Systems',
      icon: <Gem className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '7',
      name: 'Social Media Design',
      tools: 'Ad Campaigns, Carousels, Stories',
      icon: <Megaphone className="w-6 h-6 text-orange-400" />,
    },
    {
      id: '8',
      name: 'Responsive Design',
      tools: 'Mobile-first, Cross-browser',
      icon: <Smartphone className="w-6 h-6 text-orange-400" />,
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0b0c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
                My Skills
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What I'm <span className="text-orange-500">Good At</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            I work with modern tools and technologies to deliver high-quality results.
          </p>
        </div>

        {/* 8 Skill Cards Grid (Matching the reference mockup layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-3 sm:gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#141519] border border-zinc-800/80 hover:border-orange-500/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/10 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                {skill.icon}
              </div>
              
              <h3 className="font-heading text-xs sm:text-sm font-semibold text-white group-hover:text-orange-400 transition-colors mb-1 leading-snug">
                {skill.name}
              </h3>

              <span className="text-[11px] text-zinc-500 line-clamp-1">
                {skill.tools}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
