import React, { useState } from 'react';
import { certifications } from '../data/portfolio';
import { Award, ExternalLink, ZoomIn, CheckCircle2, Shield } from 'lucide-react';

export default function CertificationsGallery({ onSelectCert }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Cyber Security', 'Artificial Intelligence', 'Data Science', 'IoT & Embedded', 'Industry Internship'];

  const filteredCerts = activeFilter === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeFilter || (activeFilter === 'Industry Internship' && c.id === 'elysium-internship'));

  return (
    <section id="certificates" className="py-24 relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="font-mono text-xs font-semibold text-[#FF5E0E] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
            <span>07 // Verified Credentials</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Certifications <span className="text-[#FF5E0E]">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl">
            Official credentials earned across Cyber Security, Artificial Intelligence, Data Science, IoT, and Web Development. Click any card to preview the full certificate.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all interactive-element ${
                activeFilter === cat
                  ? 'bg-[#FF5E0E] text-black font-bold shadow-[0_0_15px_rgba(255,94,14,0.3)]'
                  : 'glass-panel text-gray-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => onSelectCert(cert.id)}
              className="group cursor-pointer rounded-2xl glass-panel glass-panel-hover overflow-hidden transition-all duration-300 flex flex-col justify-between interactive-element hover:-translate-y-1.5"
            >
              {/* Thumbnail Container with hover zoom */}
              <div className="relative aspect-[16/11] bg-black/60 overflow-hidden border-b border-white/[0.06]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Issuer pill */}
                <div className="absolute top-3 left-3 z-10 font-mono text-[10px] font-semibold px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-white">
                  {cert.issuer}
                </div>

                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF5E0E] text-black font-mono text-xs font-bold shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#FF7A29] mb-1.5">
                    <span>{cert.category}</span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF5E0E] transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {cert.score && (
                    <div className="inline-block px-2.5 py-1 rounded bg-[#FF5E0E]/15 border border-[#FF5E0E]/30 text-[#FF9436] font-mono text-xs font-bold mb-2">
                      Score: {cert.score}
                    </div>
                  )}

                  <p className="text-xs text-gray-400 line-clamp-2 font-light mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom verification status */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified
                  </span>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#FF7A29] hover:text-white flex items-center gap-1 font-semibold"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
