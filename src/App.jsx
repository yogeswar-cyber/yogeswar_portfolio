import React, { useState } from 'react';
import CyberBackground from './components/CyberBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import JourneyPathway from './components/JourneyPathway';
import FoundationBlocks from './components/FoundationBlocks';
import SkillOrbit from './components/SkillOrbit';
import Experience from './components/Experience';
import ProjectShowcase from './components/ProjectShowcase';
import CertificationsGallery from './components/CertificationsGallery';
import CertificateModal from './components/CertificateModal';
import Education from './components/Education';
import InterestsAndStrengths from './components/InterestsAndStrengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCertId, setSelectedCertId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-[#FF5E0E] selection:text-black">
      {/* Dynamic Cyber Background */}
      <CyberBackground />

      {/* High-tech Custom Cursor */}
      <CustomCursor />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <JourneyPathway />
        <FoundationBlocks />
        <SkillOrbit />
        <Experience onOpenCert={(id) => setSelectedCertId(id)} />
        <ProjectShowcase />
        <CertificationsGallery onSelectCert={(id) => setSelectedCertId(id)} />
        <Education />
        <InterestsAndStrengths />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Certificate Lightbox Modal */}
      {selectedCertId && (
        <CertificateModal
          certId={selectedCertId}
          onClose={() => setSelectedCertId(null)}
        />
      )}

      {/* Floating Cyber Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#0D1017] border border-[#FF5E0E]/50 text-white font-mono text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-[#FF5E0E]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
