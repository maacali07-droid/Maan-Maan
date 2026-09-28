/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { HireModal } from './components/HireModal';
import { AddProjectModal } from './components/AddProjectModal';
import { Toast } from './components/Toast';
import { INITIAL_PROJECTS, brandIdentityImg, maanPortrait } from './data/portfolioData';
import { ProjectItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [portraitSrc, setPortraitSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('maan_custom_portrait');
      if (saved) return saved;
    } catch {
      // ignore
    }
    return maanPortrait;
  });

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('maan_portfolio_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [hireService, setHireService] = useState('Graphic Design');
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 4500);
  };

  // Persist projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maan_portfolio_projects', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  // Section observer for active navbar indicator
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'portfolio', 'skills', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const elem = document.getElementById(id);
        if (elem) {
          const top = elem.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const handleSaveProject = (updated: ProjectItem) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setSelectedProject(updated);
  };

  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProject = (newProject: ProjectItem) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const handleResetProjects = () => {
    if (confirm('Reset portfolio projects back to initial reference showcase?')) {
      setProjects(INITIAL_PROJECTS);
      try {
        localStorage.removeItem('maan_portfolio_projects');
      } catch {
        // ignore
      }
      showToast('Projects reset to default showcase.');
    }
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    setHireService(serviceName);
    setHireModalOpen(true);
  };

  const handleUploadPortrait = (dataUrl: string) => {
    setPortraitSrc(dataUrl);
    try {
      localStorage.setItem('maan_custom_portrait', dataUrl);
    } catch {
      // ignore
    }
    showToast('Sawirkaaga dhabta ah si guul leh ayaa loo galiyay / Real photo updated!');
  };

  const handleResetPortrait = () => {
    setPortraitSrc(maanPortrait);
    try {
      localStorage.removeItem('maan_custom_portrait');
    } catch {
      // ignore
    }
    showToast('Sawirkii hore ayaa dib loogu soo celiyay / Reset to default portrait.');
  };

  const isCustomPortrait = portraitSrc !== maanPortrait;

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] relative selection:bg-orange-500/30 selection:text-orange-200">
      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenHire={() => {
          setHireService('Graphic Design');
          setHireModalOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          portraitSrc={portraitSrc}
          onUploadPortrait={handleUploadPortrait}
          onResetPortrait={handleResetPortrait}
          isCustomPortrait={isCustomPortrait}
          onContactClick={() => {
            const contactElem = document.getElementById('contact');
            if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 2. About Section */}
        <AboutSection
          portraitSrc={portraitSrc}
          onUploadPortrait={handleUploadPortrait}
          isCustomPortrait={isCustomPortrait}
          onLearnMoreClick={() => {
            const servElem = document.getElementById('services');
            if (servElem) servElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Services Section */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* 4. Portfolio Section */}
        <PortfolioSection
          projects={projects}
          onSelectProject={handleOpenProject}
          onEditProject={handleOpenProject}
          onAddNewProject={() => setAddProjectOpen(true)}
          onResetProjects={handleResetProjects}
        />

        {/* 5. Skills Section */}
        <SkillsSection />

        {/* 6. Experience Section */}
        <ExperienceSection />

        {/* 7. Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details & Editor Modal */}
      <ProjectModal
        isOpen={projectModalOpen}
        project={selectedProject}
        onClose={() => setProjectModalOpen(false)}
        onSaveProject={handleSaveProject}
        onDeleteProject={handleDeleteProject}
        onShowToast={showToast}
      />

      {/* Hire Me Dialog */}
      <HireModal
        isOpen={hireModalOpen}
        defaultService={hireService}
        onClose={() => setHireModalOpen(false)}
        onShowToast={showToast}
      />

      {/* Add Custom Project Dialog */}
      <AddProjectModal
        isOpen={addProjectOpen}
        defaultImage={brandIdentityImg}
        onClose={() => setAddProjectOpen(false)}
        onAddProject={handleAddProject}
        onShowToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
