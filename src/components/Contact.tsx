import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Facebook, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Code2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    serviceType: 'Full-time Role',
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const serviceOptions = [
    'Full-time Role',
    'Project Collaboration',
    'UI/UX Design',
    'Mobile Development',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('romsreyneath4@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate interactive submission state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ 
          name: '', 
          email: '', 
          serviceType: 'Full-time Role',
          message: '' 
        });
      }, 5000);
    }, 800);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@Sreyneath-Rom',
      url: 'https://github.com/Sreyneath-Rom',
      icon: <Github size={20} />,
      color: 'text-purple-400',
    },
    {
      name: 'LinkedIn',
      handle: 'Sreyneath Rom',
      url: 'https://www.linkedin.com/in/sreyneath-rom-69b2a5321/',
      icon: <Linkedin size={20} />,
      color: 'text-sky-400',
    },
    {
      name: 'Facebook',
      handle: 'Sreyneath Rom',
      url: 'https://www.facebook.com/flamingo1fly/',
      icon: <Facebook size={20} />,
      color: 'text-blue-400',
    },
    {
      name: 'Direct Email',
      handle: 'romsreyneath4@gmail.com',
      url: 'mailto:romsreyneath4@gmail.com',
      icon: <Mail size={20} />,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative overflow-hidden bg-app-bg transition-colors duration-500">
      {/* Background Decor Ambient Spheres */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-secondary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-pill text-xs font-bold text-brand-primary uppercase tracking-[0.25em] mb-4">
            <Sparkles size={14} className="text-brand-primary animate-pulse" />
            Get In Touch
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-app-text mb-4">
            Let&apos;s Build Something Exceptional.
          </h2>
          
          <p className="text-app-text/70 text-sm md:text-base leading-relaxed">
            Whether you are seeking a skilled Frontend Engineer, UI/UX Designer, or looking to discuss prospective projects and engineering roles — my inbox is always open.
          </p>
        </div>

        {/* Main Interactive Grid: Info Card on Left, Form on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Details & Status (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status & Availability Card */}
            <div className="neu-card p-6 sm:p-8 rounded-3xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-app-text/50 flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-brand-primary" />
                  Current Availability
                </span>
                
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full neu-pill-inset text-emerald-500 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Open to Opportunities
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-app-text mb-2">
                  Ready to contribute from Day One
                </h3>
                <p className="text-xs sm:text-sm text-app-text/70 leading-relaxed">
                  Available for full-time frontend developer roles, mobile app engineering, and freelance design system consultations.
                </p>
              </div>

              {/* Direct Email with Quick Copy */}
              <div className="p-4 rounded-2xl neu-inset flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl neu-circle-btn text-brand-primary flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] uppercase font-bold text-app-text/40">Email Address</div>
                    <div className="text-xs sm:text-sm font-bold text-app-text font-mono truncate">
                      romsreyneath4@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="neu-btn px-3 py-2 rounded-xl text-xs font-bold text-app-text hover:text-brand-primary flex items-center gap-1.5 shrink-0 cursor-pointer transition-all"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Timezone info */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl neu-card-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-app-text mb-1">
                    <MapPin size={15} className="text-brand-primary" />
                    Location
                  </div>
                  <div className="text-xs text-app-text/70">Phnom Penh, Cambodia</div>
                </div>

                <div className="p-4 rounded-2xl neu-card-sm">
                  <div className="flex items-center gap-2 text-xs font-bold text-app-text mb-1">
                    <Clock size={15} className="text-brand-secondary" />
                    Timezone
                  </div>
                  <div className="text-xs text-app-text/70">ICT &bull; UTC+7</div>
                </div>
              </div>
            </div>

            {/* Tactile Social Links Bento */}
            <div className="neu-card p-6 sm:p-8 rounded-3xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-app-text/50">
                Connect via Social Platforms
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-3.5 rounded-2xl neu-card-sm flex items-center justify-between group cursor-pointer transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl neu-circle-btn flex items-center justify-center ${social.color}`}>
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-app-text group-hover:text-brand-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-[10px] text-app-text/50 font-mono truncate max-w-[110px]">
                          {social.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-app-text/40 group-hover:text-brand-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Neumorphic Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="neu-card p-6 sm:p-10 rounded-3xl relative overflow-hidden"
            >
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-app-text flex items-center gap-2 mb-1">
                  <MessageSquare size={22} className="text-brand-primary" />
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-app-text/60">
                  Fill in your details below and I&apos;ll get back to you promptly within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-app-text/60 mb-2">
                    Inquiry Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((opt) => {
                      const isSelected = formData.serviceType === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, serviceType: opt })}
                          className={`
                            text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer
                            ${isSelected ? 'neu-btn-purple text-white shadow-md' : 'neu-pill text-app-text/70 hover:text-app-text'}
                          `}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-text/60 mb-2">
                      Your Name <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="neu-capsule-input w-full px-5 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-text/60 mb-2">
                      Your Email <span className="text-brand-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="neu-capsule-input w-full px-5 py-3 text-xs sm:text-sm font-medium focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-app-text/60">
                      Message <span className="text-brand-primary">*</span>
                    </label>
                    <span className="text-[10px] text-app-text/40 font-mono">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    required
                    rows={5}
                    placeholder="Hello Sreyneath, I am reaching out regarding a frontend developer role / project collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="neu-input w-full p-4 sm:p-5 text-xs sm:text-sm font-medium resize-none focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Submit Action & Status Alerts */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="neu-btn-purple px-8 py-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide inline-flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md self-start sm:self-auto disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="p-3.5 rounded-2xl neu-inset flex items-center gap-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      >
                        <CheckCircle2 size={18} className="shrink-0" />
                        <div>
                          <span>Thank you! Your message has been received.</span>
                          <div className="text-[10px] opacity-75 font-normal">I will get back to you shortly.</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
