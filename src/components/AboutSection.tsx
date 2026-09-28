import React, { useRef } from 'react';
import { ArrowRight, Lightbulb, ShieldCheck, Target, Camera } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
  portraitSrc: string;
  onUploadPortrait: (dataUrl: string) => void;
  isCustomPortrait: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onLearnMoreClick,
  portraitSrc,
  onUploadPortrait,
  isCustomPortrait,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    <section id="about" className="py-24 relative bg-[#0b0c0e] border-t border-zinc-850/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Section label */}
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              Turning Ideas Into <br className="hidden sm:inline" />
              <span className="text-orange-500">Digital Reality</span>
            </h2>

            {/* Description */}
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              I am a creative Graphic Designer, Video Editor, and Web Developer who helps businesses create professional visual content and modern websites. I focus on clean design, engaging visuals, and user-friendly digital experiences.
            </p>

            {/* Button */}
            <div>
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium px-6 py-3 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Portrait in a Smaller Card with Subtle Golden Swirl */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl p-2 bg-gradient-to-b from-orange-500/25 via-zinc-800/40 to-zinc-900/80 border border-zinc-800 shadow-2xl group">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#141519] relative">
                <img
                  src={portraitSrc}
                  alt="Cabdiraxman Xuseen"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Photo Change button */}
                <div className="absolute top-2.5 right-2.5 z-20">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-1.5 rounded-full bg-black/70 hover:bg-orange-600 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
                    title="Change / Upload real photo"
                  >
                    <Camera className="w-3.5 h-3.5 text-orange-400 hover:text-white" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {/* Subtle golden signature squiggle in bottom right of photo */}
                <div className="absolute bottom-3 right-4 select-none pointer-events-none text-amber-400/80 font-signature text-2xl transform -rotate-6">
                  ~ Cabdiraxman
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-orange-500/20 blur-sm pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Three Feature Items */}
          <div className="lg:col-span-4 flex flex-col gap-5 justify-center">
            
            {/* Feature 1: Creative */}
            <div className="bg-[#141519] border border-zinc-800/80 rounded-2xl p-5 hover:border-orange-500/40 transition-all hover:-translate-y-0.5 shadow-sm group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 font-heading">
                    Creative
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Bringing ideas to life with design, video and code.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Reliable */}
            <div className="bg-[#141519] border border-zinc-800/80 rounded-2xl p-5 hover:border-orange-500/40 transition-all hover:-translate-y-0.5 shadow-sm group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 font-heading">
                    Reliable
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Focused on clear communication and on-time delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Detail Oriented */}
            <div className="bg-[#141519] border border-zinc-800/80 rounded-2xl p-5 hover:border-orange-500/40 transition-all hover:-translate-y-0.5 shadow-sm group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5 font-heading">
                    Detail Oriented
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Focused on quality, consistency and professional results.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
