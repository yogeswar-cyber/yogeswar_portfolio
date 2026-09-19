import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Foundation', href: '#foundation' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Project', href: '#project' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Active section spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.07] shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group interactive-element focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#FF5E0E]/10 border border-[#FF5E0E]/40 flex items-center justify-center text-[#FF5E0E] font-mono font-bold text-sm tracking-wider transition-all duration-300 group-hover:bg-[#FF5E0E] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,94,14,0.5)]">
            YS
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-wide text-white group-hover:text-[#FF5E0E] transition-colors">
              Yogeswar S
            </span>
            <span className="font-mono text-[10px] text-gray-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Cyber Security
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-full backdrop-blur-md px-3">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 interactive-element ${
                  isActive
                    ? 'bg-[#FF5E0E] text-black font-semibold shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalInfo.resumePdf}
            download="Yogeswar_Resume.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#FF5E0E]/10 hover:bg-[#FF5E0E] border border-[#FF5E0E]/40 text-[#FF7A29] hover:text-black transition-all duration-200 shadow-sm interactive-element group"
          >
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-semibold transition-all duration-200 shadow-[0_0_18px_rgba(255,94,14,0.3)] hover:shadow-[0_0_25px_rgba(255,94,14,0.5)] interactive-element"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white focus:outline-none interactive-element"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5E0E]" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#08090D]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 transition-all">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF5E0E] text-black font-semibold'
                      : 'text-gray-300 hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <a
              href={personalInfo.resumePdf}
              download="Yogeswar_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium bg-white/[0.06] border border-white/10 text-white hover:bg-white/10"
            >
              <Download className="w-4 h-4 text-[#FF5E0E]" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#FF5E0E] text-black hover:bg-[#FF7A29]"
            >
              Contact Yogeswar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
