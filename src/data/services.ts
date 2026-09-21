import type { LucideIcon } from 'lucide-react';
import { Layers, Smartphone, Code2, Palette, Search } from 'lucide-react';

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
  color: string;
  bg: string;
  border: string;
  hoverBorder: string;
};

export const SERVICES: Service[] = [
  {
    number: '01',
    icon: Search,
    title: 'UX Research & Strategy',
    description:
      'I conduct user interviews, competitive audits, and heuristic evaluations to uncover real pain points. Research findings are translated into actionable insights that inform every design decision.',
    deliverables: ['User Interviews', 'Competitive Analysis', 'Personas & Journey Maps', 'Information Architecture'],
    color: '#A259FF',
    bg: 'from-[#A259FF]/10 to-[#A259FF]/5',
    border: 'border-[#A259FF]/20',
    hoverBorder: 'hover:border-[#A259FF]/50',
  },
  {
    number: '02',
    icon: Layers,
    title: 'UI/UX Design',
    description:
      'From low-fidelity wireframes to polished high-fidelity screens — I design clean, accessible, and visually strong interfaces using Figma with structured component libraries and design tokens.',
    deliverables: ['Wireframes', 'High-Fidelity UI', 'Design Systems', 'Component Libraries'],
    color: '#F24E1E',
    bg: 'from-[#F24E1E]/10 to-[#FF7262]/5',
    border: 'border-[#F24E1E]/20',
    hoverBorder: 'hover:border-[#F24E1E]/50',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Prototyping & Interaction',
    description:
      'Interactive prototypes that simulate real product behavior. Using Figma and Framer, I create clickable flows and micro-interactions that communicate design intent clearly to developers and stakeholders.',
    deliverables: ['Clickable Prototypes', 'Micro-interactions', 'Animated Flows', 'User Testing Assets'],
    color: '#0099FF',
    bg: 'from-[#0099FF]/10 to-[#33AAFF]/5',
    border: 'border-[#0099FF]/20',
    hoverBorder: 'hover:border-[#0099FF]/50',
  },
  {
    number: '04',
    icon: Palette,
    title: 'Visual & Brand Design',
    description:
      'Crafting visual identities, illustration systems, and brand-aligned UI that create memorable user experiences. I balance aesthetics with function for interfaces that feel both beautiful and purposeful.',
    deliverables: ['Brand UI Kits', 'Iconography', 'Color Systems', 'Typography Scale'],
    color: '#0ACF83',
    bg: 'from-[#0ACF83]/10 to-[#0ACF83]/5',
    border: 'border-[#0ACF83]/20',
    hoverBorder: 'hover:border-[#0ACF83]/50',
  },
  {
    number: '05',
    icon: Code2,
    title: 'Front-End Development',
    description:
      'Bridging the gap between design and code. I implement UI components in HTML, CSS, and JavaScript (React), ensuring that designs are brought to life with precision and responsiveness.',
    deliverables: ['HTML / CSS / JS', 'React Components', 'Responsive Layouts', 'Design-to-Code Handoff'],
    color: '#F7DF1E',
    bg: 'from-[#F7DF1E]/10 to-[#F7DF1E]/5',
    border: 'border-[#F7DF1E]/30',
    hoverBorder: 'hover:border-[#F7DF1E]/60',
  },
];
