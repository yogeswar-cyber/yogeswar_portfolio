import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Building2, Award, Download, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolio';

export default function CertificateModal({ certId, onClose }) {
  const cert = certifications.find((c) => c.id === certId);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Box */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0D14] border border-[#FF5E0E]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/50">
          <div>
            <div className="font-mono text-[10px] text-[#FF7A29] uppercase">
              {cert.issuer} • {cert.category}
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white">
              {cert.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors interactive-element"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Certificate Image Preview */}
          <div className="rounded-xl overflow-hidden bg-black/70 border border-white/10 flex items-center justify-center p-2">
            <img
              src={cert.image}
              alt={cert.title}
              className="max-h-[58vh] w-auto object-contain rounded-lg shadow-xl"
            />
          </div>

          {/* Details & Verification Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF5E0E]" />
                <span>Issue Date: <strong className="text-white">{cert.issueDate}</strong></span>
              </div>
              <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#FF5E0E]" />
                <span>Issuer: <strong className="text-white">{cert.issuer}</strong></span>
              </div>
              {cert.score && (
                <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#FF5E0E]" />
                  <span>Consolidated Score: <strong className="text-[#FF9436]">{cert.score}</strong></span>
                </div>
              )}
              {cert.scoreBreakdown && (
                <div className="font-mono text-[11px] text-gray-500 pl-6">
                  {cert.scoreBreakdown}
                </div>
              )}
              {cert.certId && (
                <div className="font-mono text-[11px] text-gray-400">
                  Cert ID: <span className="text-white select-all">{cert.certId}</span>
                </div>
              )}
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
              <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">
                {cert.description}
              </p>

              {cert.verifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF5E0E] hover:bg-[#FF7A29] text-black font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(255,94,14,0.3)] interactive-element"
                >
                  <span>Verify Credential Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Document from Academic Records</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
