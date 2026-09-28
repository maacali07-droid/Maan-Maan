import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] border-t border-zinc-850 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-850/80">
          {/* Brand Logo */}
          <div className="flex items-center">
            <Logo size="md" />
          </div>

          {/* Subtitle */}
          <div className="text-xs sm:text-sm text-zinc-400 font-medium">
            Graphic Designer <span className="text-orange-500 mx-1">|</span> Video Editor <span className="text-orange-500 mx-1">|</span> Web Developer
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs sm:text-sm text-zinc-400 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: Copyright & Back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            © 2026 Cabdiraxman Xuseen. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-orange-400 transition-colors py-1 px-3 rounded-lg hover:bg-zinc-850 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
