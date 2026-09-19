export type ProjectCategory = 
  | 'Mobile UX/UI Design' 
  | 'UX/UI Redesign' 
  | 'Product Design Concept' 
  | 'UX/UI Design';

export type FilterCategory = 'All' | 'UX/UI' | 'Product Design' | 'Mobile' | 'Web' | 'Concept';

export type ProjectStatus = 'completed' | 'coming-soon' | 'concept' | 'featured';

export interface PersonaData {
  title: string;
  name: string;
  roleQuote: string;
  quote: string;
  avatarPlaceholder?: string;
  painPoints: string[];
  goalsNeeds: string[];
  isConceptual: boolean;
}

export interface DesignSystemColor {
  name: string;
  hex: string;
  role: string;
}

export interface DesignSystemTypography {
  role: string;
  font: string;
  size: string;
  usage: string;
}

export interface DesignSystemData {
  typography: DesignSystemTypography[];
  colors: DesignSystemColor[];
  components: string[];
}

export interface DesignDecision {
  decision: string;
  reason: string;
  uxImpact: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface UserFlowStep {
  stepNumber: string;
  title: string;
  detail: string;
}

export interface HighFiScreen {
  title: string;
  caption: string;
  tag?: string;
  imagePlaceholderTitle: string;
}

export interface CaseStudyData {
  overview: string;
  disclaimer?: string;
  problem: string;
  goals: string[];
  research?: {
    overview: string;
    keyInsights: string[];
    type: string;
  };
  assumptions?: string[];
  persona?: PersonaData;
  informationArchitecture?: {
    description: string;
    nodes: { title: string; subtitle: string }[];
  };
  userFlow?: {
    description: string;
    steps: UserFlowStep[];
  };
  wireframes?: {
    description: string;
    items: { title: string; description: string; tag: string }[];
  };
  designSystem?: DesignSystemData;
  finalScreens?: {
    sectionTitle: string;
    description: string;
    layout: 'mobile-grid' | 'desktop-hero' | 'responsive';
    screens: HighFiScreen[];
  }[];
  responsiveDesign?: {
    description: string;
    breakpoints: { device: string; behavior: string }[];
  };
  prototype?: {
    description: string;
    embedTitle: string;
    link?: string;
  };
  designDecisions?: DesignDecision[];
  challenges?: ChallengeSolution[];
  outcome: {
    created: string[];
    improved: string[];
    learned: string[];
    nextSteps: string[];
  };
  reflection: {
    learned: string;
    improvement: string;
    nextSteps: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  filterCategory: FilterCategory[];
  description: string;
  year: string;
  role: string;
  timeline: string;
  platform: string;
  tools: string[];
  tags: string[];
  thumbnail: string;
  heroImage: string;
  featured: boolean;
  status: ProjectStatus;
  type: string; // e.g. "Personal Project", "Personal Concept Project"
  caseStudy?: CaseStudyData;
}
