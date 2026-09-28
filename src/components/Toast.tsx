import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#181920] border border-orange-500/40 text-white px-4 py-3 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-4 h-4" />
      </div>
      <p className="text-xs sm:text-sm font-medium text-zinc-200 leading-snug">
        {message}
      </p>
      <button
        onClick={onClose}
        className="p-1 text-zinc-400 hover:text-white rounded-lg transition-colors ml-auto cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
