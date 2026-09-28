import React from 'react';
import { PenTool, Play, Code2, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'design':
        return <PenTool className="w-6 h-6 text-orange-400" />;
      case 'video':
        return <Play className="w-6 h-6 text-orange-400 fill-orange-400" />;
      case 'code':
        return <Code2 className="w-6 h-6 text-orange-400" />;
      default:
        return <PenTool className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-[#0b0c0e]">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-orange-500" />
              <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
                My Services
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What <span className="text-orange-500">I Do</span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            I offer professional services in design, video editing and web development to help your brand grow.
          </p>
        </div>

        {/* 3 Large Premium Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#141519] border border-zinc-800/80 hover:border-orange-500/50 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10 group"
            >
              <div>
                {/* Header Icon + Action */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center group-hover:scale-105 group-hover:bg-orange-500/20 transition-all">
                    {getIcon(service.iconName)}
                  </div>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-10 h-10 rounded-full bg-zinc-850 group-hover:bg-orange-500 text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                    title={`Request ${service.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-zinc-850 pt-5">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full py-3 px-4 rounded-xl bg-zinc-850 hover:bg-orange-500 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer text-center group-hover:shadow-lg group-hover:shadow-orange-500/20"
              >
                Request Service
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
