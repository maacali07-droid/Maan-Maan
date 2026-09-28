import React, { useRef } from 'react';
import { ArrowRight, Mail, PenTool, Play, Code2, Camera, RotateCcw } from 'lucide-react';
import { cabdiraxmanLogoImg } from '../data/portfolioData';

// Custom SVG Icons for social platforms
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

interface HeroSectionProps {
  onContactClick: () => void;
  portraitSrc: string;
  onUploadPortrait: (dataUrl: string) => void;
  onResetPortrait: () => void;
  isCustomPortrait: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  portraitSrc,
  onUploadPortrait,
  onResetPortrait,
  isCustomPortrait,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUploadPortrait(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting and subtle gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call-to-actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Official Logo Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#141519]/90 border border-orange-500/30 backdrop-blur-md mb-5 w-fit shadow-md shadow-orange-500/10">
              <div className="w-6 h-6 rounded-lg overflow-hidden flex-shrink-0 bg-black/60 border border-orange-500/40 p-0.5">
                <img src={cabdiraxmanLogoImg} alt="Cabdiraxman Xuseen Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xs font-semibold text-zinc-300 tracking-wide">
                Cabdiraxman <span className="text-orange-400 font-bold">— Xuseen —</span>
              </span>
            </div>

            {/* Small Label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm sm:text-base tracking-wide uppercase">
                Hello, I'm
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
              Cabdiraxman <span className="text-orange-500">Xuseen</span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-300 mb-6 flex flex-wrap items-center gap-2">
              <span>Graphic Designer</span>
              <span className="text-orange-500/70">|</span>
              <span>Video Editor</span>
              <span className="text-orange-500/70">|</span>
              <span>Web Developer</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-9">
              I create modern designs, engaging videos, and responsive websites that help businesses build a strong digital presence.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('portfolio')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 bg-[#16171b] hover:bg-[#1f2026] text-zinc-200 hover:text-white font-medium px-6 py-3.5 rounded-full border border-zinc-750 hover:border-zinc-600 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: 'Facebook', icon: <FacebookIcon />, href: 'https://facebook.com' },
                { name: 'X', icon: <TwitterXIcon />, href: 'https://x.com' },
                { name: 'Instagram', icon: <InstagramIcon />, href: 'https://instagram.com' },
                { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com' },
                { name: 'YouTube', icon: <YouTubeIcon />, href: 'https://youtube.com' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-full bg-[#16171b] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-[#1d1f25] transition-all duration-200 shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Framed Portrait with Floating Cards & Decorative Accents */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none lg:w-[480px]">
              
              {/* Dot Grid Decorative Accent (top left) */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 grid grid-cols-5 gap-2.5 z-0 pointer-events-none opacity-40">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
                ))}
              </div>

              {/* Handwritten signature in top right */}
              <div className="absolute -top-7 right-4 sm:right-8 z-30 pointer-events-none transform -rotate-6 select-none">
                <span className="font-signature text-3xl sm:text-4xl text-amber-400 tracking-wider drop-shadow-md">
                  Cabdiraxman Xuseen
                </span>
                <div className="w-16 h-1 bg-amber-400/40 rounded-full mt-0.5 ml-auto" />
              </div>

              {/* Glowing card container behind portrait */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-2.5 bg-gradient-to-b from-orange-500/30 via-zinc-800/40 to-transparent border border-zinc-800/90 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.25)] group/card">
                
                {/* Secondary inner backdrop frame with subtle warm gradient */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18191f] via-[#121316] to-[#0c0d10] border border-zinc-800">
                  {/* Subtle inner radial glow */}
                  <div className="absolute inset-0 bg-radial from-orange-500/15 via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* High Quality Portrait Photo */}
                  <div className="relative z-10 w-full aspect-[4/5] overflow-hidden flex items-end justify-center">
                    <img
                      src={portraitSrc}
                      alt="Cabdiraxman Xuseen - Graphic Designer, Video Editor, Web Developer"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                    />

                    {/* Interactive Real Photo Uploader Badge / Button */}
                    <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 bg-black/75 hover:bg-orange-600 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium border border-white/20 hover:border-orange-500 transition-all shadow-lg cursor-pointer"
                        title="Upload your exact original photo"
                      >
                        <Camera className="w-3.5 h-3.5 text-orange-400 group-hover:text-white" />
                        <span>Upload Real Photo</span>
                      </button>

                      {isCustomPortrait && (
                        <button
                          type="button"
                          onClick={onResetPortrait}
                          className="bg-black/75 hover:bg-zinc-800 text-zinc-300 hover:text-white p-1.5 rounded-full text-xs border border-white/20 transition-all cursor-pointer"
                          title="Reset to default"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Service Card 1: Design / Creative Visuals (Top Right) */}
              <div className="absolute top-12 -right-4 sm:-right-8 z-30 bg-[#16171b]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-3.5 sm:p-4 shadow-xl shadow-black/60 flex items-center gap-3.5 hover:border-orange-500/40 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold">Design</div>
                  <div className="text-sm font-semibold text-white">Creative Visuals</div>
                </div>
              </div>

              {/* Floating Service Card 2: Edit / Engaging Videos (Center Right) */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-10 z-30 bg-[#16171b]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-3.5 sm:p-4 shadow-xl shadow-black/60 flex items-center gap-3.5 hover:border-orange-500/40 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Play className="w-5 h-5 fill-orange-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold">Edit</div>
                  <div className="text-sm font-semibold text-white">Engaging Videos</div>
                </div>
              </div>

              {/* Floating Service Card 3: Develop / Modern Websites (Bottom Right) */}
              <div className="absolute bottom-10 -right-4 sm:-right-8 z-30 bg-[#16171b]/95 backdrop-blur-md border border-zinc-800/90 rounded-2xl p-3.5 sm:p-4 shadow-xl shadow-black/60 flex items-center gap-3.5 hover:border-orange-500/40 transition-all hover:-translate-y-1">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold">Develop</div>
                  <div className="text-sm font-semibold text-white">Modern Websites</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
