import React, { useState } from 'react';
import { ArrowRight, Edit3, Plus, RotateCcw } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';

interface PortfolioSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onEditProject: (project: ProjectItem) => void;
  onAddNewProject: () => void;
  onResetProjects: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
  onSelectProject,
  onEditProject,
  onAddNewProject,
  onResetProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showManageBar, setShowManageBar] = useState(false);

  const categories = ['All', 'Graphic Design', 'Video Editing', 'Web Development'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-[#0b0c0e] border-t border-zinc-850/60">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
                My Portfolio
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
          </div>

          {/* Interactive Category Filter Pills (Matching reference image) */}
          <div className="flex flex-wrap items-center gap-2 bg-[#141519] p-1.5 rounded-full border border-zinc-800">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-850'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Customizable work notice & edit bar for Cabdiraxman */}
        <div className="flex items-center justify-between gap-4 mb-8 bg-[#141519]/70 border border-zinc-800/80 px-4 py-3 rounded-2xl">
          <p className="text-xs sm:text-sm text-zinc-400">
            <span className="text-orange-400 font-medium">Portfolio Customizer:</span> You can edit any project title, description, or image anytime to match your actual client deliverables.
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setShowManageBar(!showManageBar)}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-orange-400 bg-zinc-850 hover:bg-zinc-800 px-3 py-1.5 rounded-lg border border-zinc-750 transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{showManageBar ? 'Done Editing' : 'Manage Projects'}</span>
            </button>
            {showManageBar && (
              <>
                <button
                  onClick={onAddNewProject}
                  className="inline-flex items-center gap-1 text-xs text-white bg-orange-600 hover:bg-orange-500 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
                <button
                  onClick={onResetProjects}
                  title="Reset to default reference projects"
                  className="p-1.5 text-zinc-400 hover:text-zinc-200 bg-zinc-850 hover:bg-zinc-800 rounded-lg border border-zinc-750 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#141519] border border-zinc-800/80 hover:border-orange-500/40 rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-orange-500/10 group relative"
            >
              {showManageBar && (
                <button
                  onClick={() => onEditProject(project)}
                  className="absolute top-6 right-6 z-20 bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-xl shadow-lg cursor-pointer"
                  title="Edit this project"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              )}

              <div>
                {/* Large Thumbnail */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0c0d10] border border-zinc-800/80 mb-5 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                      Click to expand
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  onClick={() => onSelectProject(project)}
                  className="font-heading text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                {/* Category Badge / Indicator */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20">
                    {project.category}
                  </span>
                </div>

                {/* Short Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* View Project Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-orange-400 transition-colors cursor-pointer py-1.5"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#141519] border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 text-base mb-4">No projects found in this category.</p>
            <button
              onClick={() => setActiveCategory('All')}
              className="text-xs text-orange-400 font-semibold underline underline-offset-4"
            >
              View All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
