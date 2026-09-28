import React from 'react';
import { cabdiraxmanLogoImg } from '../data/portfolioData';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  useImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  useImage = true,
}) => {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[9px]', img: 'w-9 h-9' },
    md: { icon: 'w-10 h-10', textTitle: 'text-lg', textSub: 'text-[10px]', img: 'w-11 h-11' },
    lg: { icon: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-xs', img: 'w-16 h-16' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Logo Mark: Orbital C Icon */}
      <div className={`relative ${currentSize.img} rounded-xl overflow-hidden flex-shrink-0 bg-[#0f1013] border border-orange-500/30 p-0.5 shadow-md shadow-orange-500/20 group-hover:border-orange-500/60 group-hover:scale-105 transition-all duration-300`}>
        {useImage ? (
          <img
            src={cabdiraxmanLogoImg}
            alt="Cabdiraxman Xuseen Logo"
            className="w-full h-full object-contain filter contrast-110"
          />
        ) : (
          /* High-fidelity Vector SVG Fallback */
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="cGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="swooshGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#ea580c" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            {/* The bold C */}
            <path
              d="M 68 25 C 60 17 40 17 30 26 C 18 37 18 63 30 74 C 40 83 60 83 68 75 C 73 70 75 66 76 60 L 62 60 C 60 63 56 68 49 70 C 40 72 32 68 28 60 C 24 52 24 48 28 40 C 32 32 40 28 49 30 C 56 32 60 37 62 40 L 76 40 C 75 34 73 30 68 25 Z"
              fill="url(#cGrad)"
            />
            {/* Orbital Swoosh Ring */}
            <path
              d="M 12 48 C 12 36 30 46 55 46 C 75 46 92 38 92 38 C 92 38 72 56 50 56 C 26 56 12 48 12 48 Z"
              fill="url(#swooshGrad)"
              opacity="0.95"
            />
          </svg>
        )}
      </div>

      {/* Brand Typography matching the logo */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className={`font-heading font-black ${currentSize.textTitle} text-white tracking-tight leading-tight group-hover:text-zinc-100 transition-colors`}>
            Cabdiraxman
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1.5px] w-2.5 sm:w-3.5 bg-orange-500 rounded-full" />
            <span className={`font-heading font-extrabold ${currentSize.textSub} text-orange-500 tracking-[0.18em] uppercase`}>
              Xuseen
            </span>
            <span className="h-[1.5px] w-2.5 sm:w-3.5 bg-orange-500 rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
};
