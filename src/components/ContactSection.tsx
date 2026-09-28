import React, { useState } from 'react';
import { Send, Mail, CheckCircle2, MessageSquare } from 'lucide-react';

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

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in all fields before sending.');
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
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        onShowToast('Thank you! Your message has been sent successfully to Cabdiraxman.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 7000);
      } else {
        const errorData = await response.json().catch(() => null);
        const errMsg =
          errorData?.errors?.map((err: { message: string }) => err.message).join(', ') ||
          'Failed to send message. Please try again.';
        onShowToast(`Error: ${errMsg}`);
      }
    } catch {
      onShowToast('Network error while sending message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0b0c0e] border-t border-zinc-850/60">
      {/* Background orange highlight */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[2px] bg-orange-500" />
            <span className="text-zinc-400 font-medium text-sm tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Contact <span className="text-orange-500">Me</span>
          </h2>
        </div>

        {/* 3-Column Layout Matching Reference Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Availability Card */}
          <div className="lg:col-span-4 bg-[#141519] border border-zinc-800/80 rounded-3xl p-6 sm:p-7 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-heading mb-1">
                  Available for freelance projects
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Let's work together and bring your ideas to life.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-zinc-850">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Response Time:</span>
                <span className="text-zinc-200 font-medium">Within 24 Hours</span>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Direct Email:</span>
                <a
                  href="mailto:maacali07@gmail.com"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  maacali07@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>Location:</span>
                <span className="text-zinc-200 font-medium">Available Worldwide (Remote)</span>
              </div>
            </div>
          </div>

          {/* Center: Contact Form */}
          <div className="lg:col-span-5 bg-[#141519] border border-zinc-800/80 rounded-3xl p-6 sm:p-7 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400 text-sm max-w-xs">
                  Thank you for reaching out. Cabdiraxman will review your message and reply promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-[#0d0e11] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-[#0d0e11] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full bg-[#0d0e11] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Connect With Me & Socials */}
          <div className="lg:col-span-3 bg-[#141519] border border-zinc-800/80 rounded-3xl p-6 sm:p-7 shadow-xl flex flex-col items-center justify-center text-center">
            <h3 className="font-heading text-lg font-bold text-white mb-6">
              Connect With Me
            </h3>
            
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
                  className="w-10 h-10 rounded-full bg-[#0d0e11] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-orange-400 hover:border-orange-500/50 hover:bg-[#181a20] transition-all shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="text-zinc-500 text-xs mt-6">
              Direct inbox or social DMs welcome anytime.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
