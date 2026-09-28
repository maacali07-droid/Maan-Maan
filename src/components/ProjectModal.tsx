import React, { useState, useEffect } from 'react';
import { X, Check, ExternalLink, Edit2, Save, Trash2 } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (updated: ProjectItem) => void;
  onDeleteProject?: (id: string) => void;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  onSaveProject,
  onDeleteProject,
  onShowToast,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<ProjectItem>>({});

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        category: project.category,
        description: project.description,
        details: project.details || project.description,
        tools: project.tools || [],
        deliverables: project.deliverables || [],
      });
      setIsEditing(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleSave = () => {
    if (!formData.title?.trim()) {
      onShowToast('Project title cannot be empty.');
      return;
    }
    onSaveProject({
      ...project,
      title: formData.title || project.title,
      category: (formData.category as ProjectCategory) || project.category,
      description: formData.description || project.description,
      details: formData.details || project.details,
    });
    setIsEditing(false);
    onShowToast('Project details updated successfully!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#141519] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with Close & Edit actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-[#101114]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-orange-400 font-bold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500">· Project Showcase</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-750 px-3 py-1.5 rounded-lg border border-zinc-700 transition-colors cursor-pointer"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Edit' : 'Edit Project Info'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Main Large Image */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] border border-zinc-800 bg-[#0a0b0d] relative shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Edit Mode vs Display Mode */}
          {isEditing ? (
            <div className="space-y-4 bg-[#0d0e11] p-5 rounded-2xl border border-zinc-800">
              <h4 className="text-sm font-semibold text-orange-400">Edit Project Information</h4>
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Project Title</label>
                <input
                  type="text"
                  value={formData.title || ''}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#16171b] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Category</label>
                <select
                  value={formData.category || 'Graphic Design'}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as ProjectCategory })}
                  className="w-full bg-[#16171b] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Web Development">Web Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Short Description</label>
                <input
                  type="text"
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#16171b] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Extended Case Study / Details</label>
                <textarea
                  rows={3}
                  value={formData.details || ''}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#16171b] border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs px-4 py-2 rounded-lg cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>

                {onDeleteProject && (
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to remove this project?')) {
                        onDeleteProject(project.id);
                        onClose();
                        onShowToast('Project removed.');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 py-2 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Project</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
                {project.title}
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed mb-6">
                {project.details || project.description}
              </p>

              {/* Deliverables and Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-800">
                {/* Deliverables */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                      Key Deliverables
                    </h4>
                    <div className="space-y-2">
                      {project.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Software & Tools */}
                {project.tools && project.tools.length > 0 && (
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-zinc-300 bg-zinc-800 px-3 py-1 rounded-md border border-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#101114] border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            Freelance work sample by Cabdiraxman Xuseen
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full cursor-pointer"
            >
              <span>Commission Similar Project</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
