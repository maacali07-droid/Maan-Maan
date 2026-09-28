import React, { useState, useEffect } from 'react';
import { X, Plus, Upload } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (newProject: ProjectItem) => void;
  onShowToast: (msg: string) => void;
  defaultImage: string;
}

export const AddProjectModal: React.FC<AddProjectModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
  onShowToast,
  defaultImage,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectCategory>('Graphic Design');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [toolsString, setToolsString] = useState('Photoshop, Illustrator, Figma');
  const [deliverablesString, setDeliverablesString] = useState('Design Assets, Vector Files, Guidelines');

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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      onShowToast('Please provide at least a title and description.');
      return;
    }

    const newProject: ProjectItem = {
      id: Date.now().toString(),
      title,
      category,
      description,
      details: details || description,
      image: imageUrl.trim() || defaultImage,
      tools: toolsString.split(',').map((s) => s.trim()).filter(Boolean),
      deliverables: deliverablesString.split(',').map((s) => s.trim()).filter(Boolean),
    };

    onAddProject(newProject);
    onShowToast(`Project "${title}" added to portfolio!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#141519] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-850 bg-[#101114]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Plus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Add New Project</h3>
              <p className="text-xs text-zinc-400">Add custom work to your portfolio showcase</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <div>
            <label className="block text-xs text-zinc-400 mb-1">Project Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Minimalist Coffee Branding"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as ProjectCategory)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            >
              <option value="Graphic Design">Graphic Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Short Description (for card) *</label>
            <input
              type="text"
              required
              placeholder="e.g. Modern and clean visual identity system."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Full Project Overview</label>
            <textarea
              rows={3}
              placeholder="Detailed description of process, goals, and results..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Custom Image URL (optional)</label>
            <input
              type="url"
              placeholder="https://... (Leave blank to use default portfolio artwork)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Tools Used (comma separated)</label>
            <input
              type="text"
              value={toolsString}
              onChange={(e) => setToolsString(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1">Deliverables (comma separated)</label>
            <input
              type="text"
              value={deliverablesString}
              onChange={(e) => setDeliverablesString(e.target.value)}
              className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
            >
              <Plus className="w-4 h-4" />
              <span>Create Project</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
