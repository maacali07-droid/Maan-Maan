import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  onShowToast: (msg: string) => void;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  onShowToast,
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    defaultService || 'Graphic Design'
  );
  const [selectedBudget, setSelectedBudget] = useState<string>('$1,000 - $2,500');
  const [timeline, setTimeline] = useState<string>('Standard (2-3 weeks)');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setSelectedService(defaultService);
    }
  }, [defaultService]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail || !projectBrief) {
      onShowToast('Please fill out your name, email, and a short brief.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mjykpjdw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: clientName,
          email: clientEmail,
          service: selectedService,
          budget: selectedBudget,
          timeline: timeline,
          message: projectBrief,
          _subject: `New Project Request: ${selectedService} from ${clientName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        onShowToast('Hire request submitted successfully! Cabdiraxman will respond shortly.');
        setClientName('');
        setClientEmail('');
        setProjectBrief('');
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => null);
        const errMsg =
          errorData?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Failed to submit request. Please try again.';
        onShowToast(`Error: ${errMsg}`);
      }
    } catch {
      onShowToast('Network error while sending request. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Graphic Design',
    'Video Editing',
    'Web Development',
    'Complete Package (Design + Video + Web)',
  ];

  const budgets = ['$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000+'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#141519] border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-850 bg-[#101114]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white">Hire Cabdiraxman Xuseen</h3>
              <p className="text-xs text-zinc-400">Start your next creative project</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-zinc-400 text-sm max-w-sm">
                Thank you, <span className="text-white font-medium">{clientName}</span>. Cabdiraxman has received your project inquiry and will contact you at <span className="text-orange-400">{clientEmail}</span> within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Service */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  What service do you need?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((srv) => (
                    <button
                      type="button"
                      key={srv}
                      onClick={() => setSelectedService(srv)}
                      className={`text-xs p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedService === srv
                          ? 'bg-orange-500/15 border-orange-500 text-white font-semibold'
                          : 'bg-[#0e0f12] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Project Budget
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`text-xs py-2 px-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedBudget === b
                          ? 'bg-orange-500/15 border-orange-500 text-white font-semibold'
                          : 'bg-[#0e0f12] border-zinc-800 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Project Brief */}
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Tell me about your project</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your goals, requirements, or links to references..."
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  className="w-full bg-[#0e0f12] border border-zinc-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Request...' : 'Send Hire Request'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
