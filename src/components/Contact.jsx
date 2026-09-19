import React, { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, Download, Send, Terminal } from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');

    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      const response = await fetch('https://formspree.io/f/xjykgbja', {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setFormStatus('sent');
      if (onShowToast) onShowToast('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Formspree submission error:', error);
      setFormStatus('idle');
      if (onShowToast) onShowToast('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>11 // Connect</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Let's Build Something <span className="text-[#FF5E0E]">Meaningful</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            Seeking opportunities in Cyber Security, Applied Machine Learning, and Software Engineering. Let's discuss collaborations or security research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Details & Direct Resume Downloads (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Identity Card */}
            <div className="p-6 rounded-2xl glass-panel border border-[#FF5E0E]/30 relative overflow-hidden">
              <div className="font-mono text-xs text-[#FF7A29] uppercase mb-1">
                CONTACT DIRECTORY
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                {personalInfo.name}
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {/* Email with copy */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex items-center gap-2.5 text-gray-200">
                    <Mail className="w-4 h-4 text-[#FF5E0E]" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-[#FF5E0E] transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors interactive-element"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200">
                  <Phone className="w-4 h-4 text-[#FF5E0E]" />
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#FF5E0E] transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-black/40 border border-white/10 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#FF5E0E]" />
                  <span>{personalInfo.location}</span>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10 text-gray-200">
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#FF5E0E]" />
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#FF5E0E] transition-colors"
                    >
                      {personalInfo.linkedinHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Actions */}
            <div className="p-6 rounded-2xl glass-panel space-y-3">
              <div className="font-mono text-xs text-gray-400 uppercase">
                OFFICIAL RESUME DOWNLOAD
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.resumePdf}
                  download="Yogeswar_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] interactive-element"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Resume</span>
                </a>

                <a
                  href={personalInfo.resumeDocx}
                  download="Yogeswar_Resume.docx"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold transition-all interactive-element"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF5E0E]" />
                  <span>Word DOCX</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Frontend Contact Form (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative">
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-6 pb-3 border-b border-white/[0.06]">
              <Terminal className="w-4 h-4 text-[#FF5E0E]" />
              <span>DISPATCH_MESSAGE_PACKET.sh</span>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-xs text-gray-400 mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-400 mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-gray-400 mb-1.5">
                  MESSAGE CONTENT
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inquiry regarding security internships, developer roles, or projects..."
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5E0E] focus:outline-none text-white font-mono text-xs transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] disabled:opacity-50 interactive-element"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{formStatus === 'sending' ? 'Dispatching...' : formStatus === 'sent' ? 'Dispatched!' : 'Send Message'}</span>
                </button>

                <span className="font-mono text-[11px] text-gray-500 text-center sm:text-right">
                  (Secure contact form • Messages delivered to my email)
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
