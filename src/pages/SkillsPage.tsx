import { SkillsSection } from '../components/SkillsSection';
import { EngineerSection } from '../components/EngineerSection';

export function SkillsPage() {
  return (
    <div className="pt-28 pb-20 space-y-12">
      <SkillsSection />
      <EngineerSection />
    </div>
  );
}
