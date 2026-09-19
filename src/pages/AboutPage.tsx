import { useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ResumeModal } from '../components/ResumeModal';
import { DesignProcess } from '../components/DesignProcess';

export function AboutPage() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 space-y-12">
      <AboutSection onOpenResumeModal={() => setResumeModalOpen(true)} />
      <DesignProcess />
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
