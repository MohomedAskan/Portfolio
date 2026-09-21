import { useState } from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { EngineerSection } from '../components/EngineerSection';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';
import { ResumeModal } from '../components/ResumeModal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="space-y-0">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <AboutSection onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* 3. Stack / Skills & Tools */}
      <div className="relative">
        <SkillsSection />
        <div className="pb-8 flex justify-center">
          <Link
            to="/stack"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
          >
            <span>View Full Stack</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 4. Projects preview */}
      <div className="relative">
        <EngineerSection />
        <div className="pb-8 flex justify-center bg-slate-900 dark:bg-slate-950">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5. Services */}
      <ServicesSection />

      {/* 6. Contact Section */}
      <ContactSection />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
