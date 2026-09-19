# Mohomed Askan — Personal Portfolio & Product Design Case Studies

A premium, production-quality personal portfolio website built for **Mohomed Askan**, UI/UX Designer & Aspiring UI/UX Engineer based in Sri Lanka.

## 🌟 Tech Stack & Architecture

- **Core**: React 19, TypeScript
- **Styling**: Tailwind CSS v3/v4, Custom CSS variables, Dark/Light theme system
- **Motion & Micro-interactions**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build production bundle
npm run build
```

---

## 📁 Centralized Project Management System

Projects are defined in a central data file: [`src/data/projects.ts`](file:///c:/Users/USER/Downloads/portfolio/src/data/projects.ts).

### Adding a New Project:

To add a new project, simply open `src/data/projects.ts` and add a new project object to the `PROJECTS` array:

```ts
{
  id: 'my-new-project',
  slug: 'my-new-project',
  title: 'My New Project Title',
  category: 'Mobile UX/UI Design',
  filterCategory: ['UX/UI', 'Mobile'],
  description: 'A brief 1-2 sentence description of the project...',
  year: '2026',
  role: 'Sole UX/UI Designer',
  timeline: '4 Weeks',
  platform: 'Mobile (iOS)',
  tools: ['Figma', 'Framer'],
  tags: ['UX Design', 'User Flow', 'UI Design'],
  type: 'Personal Project',
  featured: true,
  status: 'completed', // 'completed' | 'coming-soon' | 'concept'
  thumbnail: '/assets/projects/my-new-project/thumbnail.svg',
  heroImage: '/assets/projects/my-new-project/hero.svg',
  caseStudy: {
    overview: '...',
    problem: '...',
    goals: ['Goal 1', 'Goal 2'],
    research: { ... },
    persona: { ... },
    userFlow: { ... },
    designSystem: { ... },
    finalScreens: [ ... ],
    outcome: { ... },
    reflection: { ... }
  }
}
```

The website will **automatically generate**:
- Work Cards on Homepage & `/work`
- Category Filtering on `/work`
- Dynamic Case Study Route at `/work/my-new-project`
- Next / Previous Project Navigation

---

## 🖼️ Uploading Screenshots & Images

Drop project images into `public/assets/projects/<project-slug>/` (e.g., `.png`, `.jpg`, `.webp`, `.svg`). Update the corresponding image paths in `src/data/projects.ts`.

---

## 📄 Updating Resume & Contact Details

- **Resume File**: Replace the placeholder at `public/Mohomed_Askan_Resume.pdf` with your actual PDF resume.
- **Contact Details**: Update email and LinkedIn links in `src/components/ContactSection.tsx` and `src/components/Footer.tsx`.
