import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const workflowMilestones = [
    {
      phase: '01',
      title: 'Discovery & Creative Direction',
      desc: 'Defining project objectives, brand aesthetic, target audience, and moodboards to align creative strategy.',
    },
    {
      phase: '02',
      title: 'Visual Design & Prototyping',
      desc: 'Crafting pixel-perfect layouts, typography systems, vector logos, and intuitive UI wireframes in Figma & Illustrator.',
    },
    {
      phase: '03',
      title: 'Video Production & Motion',
      desc: 'Pacing narrative cuts, dynamic color grading, motion graphics, and audio mixing for high-impact social and commercial videos.',
    },
    {
      phase: '04',
      title: 'Modern Web Development & Launch',
      desc: 'Engineering clean, responsive, high-performance web applications with semantic code and smooth animations.',
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#0b0c0e] border-t border-zinc-850/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
                Freelance Experience
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Skills in <span className="text-orange-500">Action</span>
            </h2>
          </div>
        </div>

        {/* Highlight Card Matching Reference Image */}
        <div className="bg-[#141519] border border-zinc-800/80 rounded-3xl p-6 sm:p-8 mb-12 shadow-xl hover:border-orange-500/40 transition-colors">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0 shadow-md">
              <Briefcase className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal">
                Worked on digital design, video editing, website design, and web development projects, creating professional visual content and modern digital experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Process / Execution Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowMilestones.map((item) => (
            <div
              key={item.phase}
              className="bg-[#121316] border border-zinc-800/70 rounded-2xl p-6 relative hover:border-orange-500/30 transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md">
                  PHASE {item.phase}
                </span>
                <CheckCircle2 className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="font-heading text-base font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
