import { useState } from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { EngineerSection } from '../components/EngineerSection';
import { ProjectGrid } from '../components/ProjectGrid';
import { ContactSection } from '../components/ContactSection';
import { ResumeModal } from '../components/ResumeModal';
import { getFeaturedProjects } from '../data/projects';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const featuredProjects = getFeaturedProjects();

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

      {/* 4. Services */}
      <div className="relative">
        <EngineerSection />
        <div className="pb-8 flex justify-center bg-slate-900 dark:bg-slate-950">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* 5. Projects */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Selected Work
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-400">
                A selection of projects where I explored user problems, structured experiences, and designed practical digital interfaces.
              </p>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ProjectGrid projects={featuredProjects} />

        </div>
      </section>

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
