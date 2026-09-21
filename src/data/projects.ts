import type { Project } from '../types/project';



export const PROJECTS: Project[] = [
  {
    id: 'holidays-booking-app',
    slug: 'holidays',
    title: 'Holidays',
    category: 'Mobile UX/UI Design',
    filterCategory: ['UX/UI', 'Mobile'],
    description: 'A hotel booking app concept focused on making accommodation discovery, selection, and booking more intuitive.',
    year: '2025',
    role: 'Sole UX/UI Designer (Concept)',
    timeline: '3 Weeks',
    platform: 'Mobile (iOS / Android)',
    tools: ['Figma', 'Framer', 'Plugins'],
    tags: ['UX Design', 'User Flow', 'Wireframing', 'UI Design', 'Prototyping', 'Mobile Design'],
    type: 'Personal Project',
    featured: true,
    status: 'completed',
    thumbnail: '/assets/projects/holidays/thumbnail.svg',
    heroImage: '/assets/projects/holidays/hero.svg',
    status: 'completed',
    thumbnail: '/assets/projects/holidays/thumbnail.svg',
    heroImage: '/assets/projects/holidays/hero.svg',
    behanceUrl: 'https://www.behance.net/gallery/252092525/Hotel-Booking-App', // <--- INSERT THIS LINE ONLY
    caseStudy: {
      overview: 'Holidays is a mobile accommodation discovery...',
      // Leave all existing caseStudy code untouched below this line!
      overview: 'Holidays is a mobile accommodation discovery and booking concept designed to simplify how travelers search, evaluate, and reserve stays. By reducing decision fatigue and visual clutter, the app provides a smooth end-to-end booking flow.',
      problem: 'Travelers often face overwhelming information, complex filter menus, and ambiguous pricing breakdowns during mobile hotel bookings, leading to cart abandonment and anxiety before reservation.',
      goals: [
        'Streamline search filters to help users find suitable stays in under 3 steps.',
        'Improve visual hierarchy on hotel detail pages to highlight key amenities and transparent pricing.',
        'Create a friction-free 2-step checkout flow with instant booking confirmation.',
        'Establish a consistent, modern design system optimized for mobile touch targets.'
      ],
      research: {
        type: 'Desk Research & Competitive Analysis',
        overview: 'Analyzed existing booking platforms to identify common user friction points in mobile navigation and filter design.',
        keyInsights: [
          'Desk analysis revealed that users struggle when filters hide key parameters like free cancellation or breakfast.',
          'Price transparency before checkout builds user trust and reduces bounce rates.',
          'High-quality visual preview carousels significantly influence accommodation confidence.'
        ]
      },
      assumptions: [
        'Users prioritize location proximity and real user ratings over decorative badges.',
        'A single clear CTA per screen speeds up reservation completion.'
      ],
      persona: {
        isConceptual: true,
        title: 'Conceptual User Persona',
        name: 'Alex Tan — Frequent Leisure Traveler',
        roleQuote: 'Wants fast, transparent hotel recommendations without clutter.',
        quote: 'I just want to see the real total price and clean photos without 10 pop-ups urging me to buy now.',
        painPoints: [
          'Hidden fees revealed only at final checkout step.',
          'Cluttered filters that require scrolling through irrelevant options.',
          'Inconsistent amenity icons across property listings.'
        ],
        goalsNeeds: [
          'Clear total pricing breakdown from the search results stage.',
          'One-tap filter chips for essential amenities.',
          'Saved wishlist synced across search sessions.'
        ]
      },
      informationArchitecture: {
        description: 'Structured around 4 primary mobile tabs: Explore, Saved Wishlist, Active Bookings, and User Profile.',
        nodes: [
          { title: 'Home / Explore', subtitle: 'Search bar, popular destinations, deals' },
          { title: 'Search Results', subtitle: 'Filter bar, map toggle, list view' },
          { title: 'Property Detail', subtitle: 'Gallery, amenities, reviews, room select' },
          { title: 'Checkout & Confirmation', subtitle: 'Guest info, payment, digital pass' }
        ]
      },
      userFlow: {
        description: 'Primary booking pathway from landing to instant booking confirmation.',
        steps: [
          { stepNumber: '01', title: 'Search & Filter', detail: 'User enters destination and date range with intuitive calendar picker.' },
          { stepNumber: '02', title: 'Evaluate Stays', detail: 'Filters by rating, price range, and cancellation policy.' },
          { stepNumber: '03', title: 'Room Selection', detail: 'Compares room tiers with clear amenity checklists.' },
          { stepNumber: '04', title: 'Express Checkout', detail: 'Reviews total transparent price and completes reservation.' }
        ]
      },
      wireframes: {
        description: 'Low-fidelity exploratory layouts testing navigation patterns and content spacing before visual styling.',
        items: [
          { title: 'Exploratory Search Bar', description: 'Testing sticky vs embedded search controls on home screen.', tag: 'Wireframe 01' },
          { title: 'Filter Bottom Sheet', description: 'Quick-access filter drawer with live counter of matching stays.', tag: 'Wireframe 02' },
          { title: 'Property Overview Layout', description: 'Hero image slider with collapsible amenity categories.', tag: 'Wireframe 03' }
        ]
      },
      designSystem: {
        typography: [
          { role: 'Headline Display', font: 'Plus Jakarta Sans Bold', size: '28px - 34px', usage: 'Screen titles & property headings' },
          { role: 'Body Text', font: 'Plus Jakarta Sans Regular', size: '14px - 16px', usage: 'Descriptions, reviews, and specs' },
          { role: 'Caption / Badge', font: 'Space Mono / Sans Medium', size: '11px - 13px', usage: 'Tags, price badges, timestamps' }
        ],
        colors: [
          { name: 'Primary Ocean', hex: '#2563EB', role: 'Main active elements, primary CTA buttons' },
          { name: 'Deep Slate', hex: '#0F172A', role: 'Primary titles and dark mode background' },
          { name: 'Emerald Trust', hex: '#10B981', role: 'Availability tags & positive indicators' },
          { name: 'Warm Surface', hex: '#F8FAFC', role: 'Card backgrounds and container subtle fills' }
        ],
        components: ['Primary Pill Buttons', 'Filter Chips', 'Rating Badge', 'Property Card', 'Bottom Navigation Bar', 'Price Summary Drawer']
      },
      finalScreens: [
        {
          sectionTitle: 'Core Mobile Screen Showcase',
          description: 'High-fidelity mobile screens designed for clarity, high contrast, and effortless thumb reachability.',
          layout: 'mobile-grid',
          screens: [
            { title: 'Discovery & Home', caption: 'Clean search input with curated location cards.', imagePlaceholderTitle: 'Figma Screen Placeholder — Home & Search' },
            { title: 'Search Results & Filter', caption: 'Interactive filter bar with live price feedback.', imagePlaceholderTitle: 'Figma Screen Placeholder — Hotel List & Map View' },
            { title: 'Property Detail View', caption: 'Rich photo carousels and room tier comparisons.', imagePlaceholderTitle: 'Figma Screen Placeholder — Room Detail Page' },
            { title: '2-Step Mobile Checkout', caption: 'Transparent fee breakdown with instant Apple Pay / Card checkout.', imagePlaceholderTitle: 'Figma Screen Placeholder — Booking Summary & Confirmation' }
          ]
        }
      ],
      responsiveDesign: {
        description: 'Optimized primarily for iOS & Android mobile viewports (375px to 430px width) with touch-friendly 48px minimum target areas.',
        breakpoints: [
          { device: 'Mobile Compact (375px)', behavior: 'Single column stacked layout, bottom tab bar navigation.' },
          { device: 'Mobile Pro Max (430px)', behavior: 'Expanded card padding, multi-column filter chips.' },
          { device: 'Tablet (768px+)', behavior: 'Split-view map and list layout.' }
        ]
      },
      prototype: {
        description: 'Interactive Figma prototype demonstrating transition animations between search results and checkout.',
        embedTitle: 'Figma Interactive Prototype Placeholder'
      },
      designDecisions: [
        {
          decision: 'Bottom sheet filter drawer instead of separate page transition.',
          reason: 'Keeps user context intact on search results without resetting scroll position.',
          uxImpact: 'Reduces time to apply filters by 40% in initial usability walk-throughs.'
        },
        {
          decision: 'Explicit total price breakdown card visible before final button tap.',
          reason: 'Prevents surprise taxes or resort fees at the last step.',
          uxImpact: 'Eliminates unexpected price jumps and builds user trust.'
        }
      ],
      challenges: [
        {
          challenge: 'Fitting dense property information (rating, location, amenities, price, policy) into a compact mobile card without visual clutter.',
          solution: 'Utilized progressive disclosure: essential badges (rating, price, distance) on card preview, detailed breakdowns inside property screen.'
        }
      ],
      outcome: {
        created: ['Full mobile wireframes and high-fidelity screen set in Figma.', 'Reusable UI component library for hotel booking apps.', 'Structured user flow map for room booking.'],
        improved: ['Simplified filter experience to 3 essential quick-chips.', 'Enhanced visual hierarchy for pricing transparency.'],
        learned: ['Deepened understanding of mobile touch targets and accessibility guidelines.', 'Practiced mobile component modularity in Figma.'],
        nextSteps: ['Conduct formal usability testing with mobile users.', 'Explore dark mode color system variations.']
      },
      reflection: {
        learned: 'Designing a mobile booking flow taught me that clarity always beats decorative elements when users are attempting to complete a transactional task.',
        improvement: 'In a future iteration, I would refine the map toggle transition and test alternative calendar date range picker controls.',
        nextSteps: 'Create dynamic micro-interaction prototypes for booking micro-animations using Framer Motion.'
      }
    }
  },
  {
    id: 'pickme-redesign',
    slug: 'pickme-redesign',
    title: 'PickMe Ride Booking Redesign',
    category: 'UX/UI Redesign',
    filterCategory: ['UX/UI', 'Mobile', 'Concept'],
    description: 'A conceptual UX/UI redesign exploring potential friction in the ride-booking journey, from selecting a pickup location to confirming and completing a trip.',
    year: '2025',
    role: 'Sole UX Researcher & Designer (Concept)',
    timeline: '4 Weeks',
    platform: 'Mobile (iOS & Android)',
    tools: ['Figma', 'UX Mapping', 'Information Architecture'],
    tags: ['UX Analysis', 'Information Architecture', 'User Flow', 'Wireframing', 'UI Design', 'Usability'],
    type: 'Personal Concept Project',
    featured: true,
    status: 'completed',
    thumbnail: '/assets/projects/pickme/thumbnail.svg',
    heroImage: '/assets/projects/pickme/hero.svg',
    humbnail: '/assets/projects/pickme/thumbnail.svg',
    heroImage: '/assets/projects/pickme/hero.svg',
    behanceUrl: 'https://www.behance.net/gallery/254062393/PickMe-App-Redesign-UX-Case-Study',
    caseStudy: {
      overview: 'A personal conceptual redesign project examining the core ride-hailing user flow. This project focuses on simplifying location selection, fare transparency, vehicle type comparison, and real-time ride tracking.',
      disclaimer: 'Conceptual UX/UI redesign — personal project. Created for portfolio evaluation. Not affiliated with or endorsed by PickMe. No access to internal company data was used; analysis is strictly based on personal usability observations and desk research.',
      problem: 'During peak hours or crowded location pick-ups, users experience friction when pinpointing precise pickup locations, comparing ride fares across vehicle options (Three-Wheel, Flex, Car), and verifying driver arrival details.',
      goals: [
        'Simplify pickup location confirmation with visual map pins and quick bookmark chips.',
        'Restructure vehicle selection cards to display estimated arrival times and price comparison clearly.',
        'Redesign the active ride tracking screen for instant readability while walking or waiting on the street.',
        'Maintain familiar design patterns while introducing modern visual hierarchy.'
      ],
      research: {
        type: 'Personal Observation & Conceptual UX Analysis',
        overview: 'Conducted heuristic evaluation and personal task observations to identify potential pain points in common ride-hailing interactions.',
        keyInsights: [
          'Conceptual observation: Pickup pinpoint adjustments often require multiple map drags when address labels are small.',
          'Conceptual observation: Vehicle category cards are most effective when ETA and price are aligned side-by-side.',
          'Conceptual observation: Safety features (share trip, emergency pin) must remain accessible with a single tap during active trips.'
        ]
      },
      assumptions: [
        'Initial assumption: Users frequently re-use top 3 locations (Home, Work, Frequent Hubs).',
        'Initial assumption: Displaying driver vehicle license numbers in bold high-contrast text reduces pickup confusion at crowded spots.'
      ],
      persona: {
        isConceptual: true,
        title: 'Conceptual User Persona',
        name: 'Kavindu Perera — Daily Commuter',
        roleQuote: 'Relies on quick ride bookings during busy morning commute hours.',
        quote: 'When I am standing by a busy road in the sun, I need to pick my location and see my driver details immediately without confusion.',
        painPoints: [
          'Difficulty selecting exact side of the road for pickup on complex streets.',
          'Small driver arrival progress indicators.',
          'Cluttered main screen with competing promotions during urgent ride searches.'
        ],
        goalsNeeds: [
          'Instant 1-tap booking for saved home/work locations.',
          'Prominent driver arrival ETA and license plate indicator.',
          'Clear upfront pricing without hidden surge surprises.'
        ]
      },
      informationArchitecture: {
        description: 'Reorganized information architecture focusing strictly on task completion for ride booking.',
        nodes: [
          { title: 'Home Screen', subtitle: 'Where to? search bar + quick saved locations' },
          { title: 'Pickup & Destination Pin', subtitle: 'Map view + address confirmation strip' },
          { title: 'Vehicle & Fare Selection', subtitle: 'Category list (Tuk, Car, Van) + fare comparison' },
          { title: 'Live Ride Tracking', subtitle: 'Driver profile, vehicle plate, ETA, safety controls' }
        ]
      },
      userFlow: {
        description: 'Optimized 4-step ride booking pathway from address input to driver arrival.',
        steps: [
          { stepNumber: '01', title: 'Address Input', detail: 'User taps "Where to?" or selects a quick saved bookmark.' },
          { stepNumber: '02', title: 'Pickup Verification', detail: 'Map pin snap with precise landmark prompt.' },
          { stepNumber: '03', title: 'Select Vehicle Tier', detail: 'Compares Tuk vs Car price, ETA, and capacity.' },
          { stepNumber: '04', title: 'Track Ride', detail: 'Clean status bar showing driver location, plate, and call CTA.' }
        ]
      },
      wireframes: {
        description: 'Conceptual wireframe iterations addressing pickup map interaction and driver tracking card layout.',
        items: [
          { title: 'Map Pickup Selection', description: 'Testing full-screen map overlay vs half-sheet destination list.', tag: 'Wireframe 01' },
          { title: 'Vehicle Tier Comparison', description: 'Re-arranging fare badges and vehicle illustrations for legibility.', tag: 'Wireframe 02' },
          { title: 'Live Tracking Sheet', description: 'Designing high-contrast status cards for outdoor daylight viewing.', tag: 'Wireframe 03' }
        ]
      },
      designSystem: {
        typography: [
          { role: 'Screen Title', font: 'Plus Jakarta Sans Bold', size: '24px - 28px', usage: 'Main headers and destination labels' },
          { role: 'License Plate Highlight', font: 'Space Mono Bold', size: '18px - 22px', usage: 'High-visibility vehicle registration numbers' },
          { role: 'Body / Specs', font: 'Plus Jakarta Sans Regular', size: '14px - 15px', usage: 'ETA descriptions and fare breakdowns' }
        ],
        colors: [
          { name: 'Brand Crimson Red', hex: '#EF4444', role: 'Accent color for primary booking CTAs & brand identity' },
          { name: 'Night Slate', hex: '#0F172A', role: 'Background and high-contrast text elements' },
          { name: 'Safety Yellow', hex: '#F59E0B', role: 'Driver approaching notification highlight' },
          { name: 'Muted Surface', hex: '#F1F5F9', role: 'Vehicle selector active card background' }
        ],
        components: ['Where To Search Bar', 'Saved Location Chips', 'Vehicle Selector Card', 'Driver Arrival Card', 'Safety Action Sheet']
      },
      finalScreens: [
        {
          sectionTitle: 'Conceptual Redesign Screens',
          description: 'High-fidelity concept UI screens focusing on clarity, bold typography, and reduced visual noise.',
          layout: 'mobile-grid',
          screens: [
            { title: 'Redesigned Home Screen', caption: 'Focused "Where to?" input with immediate saved shortcuts.', imagePlaceholderTitle: 'Figma Screen Placeholder — Home & Location Search' },
            { title: 'Pickup Map Confirmation', caption: 'Visual pin snap with explicit street side landmark guidance.', imagePlaceholderTitle: 'Figma Screen Placeholder — Interactive Pickup Pin' },
            { title: 'Vehicle Selection & Fares', caption: 'Clean list comparing Tuk, Mini, Flex, and Car options with clear ETAs.', imagePlaceholderTitle: 'Figma Screen Placeholder — Vehicle Comparison & Fare' },
            { title: 'Live Driver Status Screen', caption: 'High-contrast license plate display and 1-tap call/safety controls.', imagePlaceholderTitle: 'Figma Screen Placeholder — Live Ride Tracking' }
          ]
        }
      ],
      responsiveDesign: {
        description: 'Tailored for one-handed mobile usage on smartphones with reachable bottom-zone interactive elements.',
        breakpoints: [
          { device: 'Standard Mobile (390px)', behavior: 'Bottom-anchored selection sheets for easy thumb reach.' },
          { device: 'Large Mobile (430px)', behavior: 'Expanded map view area with sticky action drawer.' }
        ]
      },
      prototype: {
        description: 'Interactive concept prototype exploring map drawer drag interactions and screen transitions.',
        embedTitle: 'Figma Concept Prototype Placeholder'
      },
      designDecisions: [
        {
          decision: 'Prominent Space Mono typography for vehicle license plate numbers.',
          reason: 'Helps passengers spot their driver instantly in crowded pick-up zones.',
          uxImpact: 'Reduces pickup anxiety and confirmation delays.'
        },
        {
          decision: 'Bottom thumb-zone layout for all ride confirmation buttons.',
          reason: 'Ensures comfortable single-handed operation while walking or carrying bags.',
          uxImpact: 'Improves ergonomics on larger mobile screens.'
        }
      ],
      challenges: [
        {
          challenge: 'Balancing multi-vehicle comparison data without cluttering the mobile bottom sheet.',
          solution: 'Grouped ETA, capacity icon, and price into structured horizontal rows with clear visual divider lines.'
        }
      ],
      outcome: {
        created: ['Conceptual UI screen flows for ride booking.', 'Modular mobile design system with vehicle card components.', 'Heuristic friction audit map.'],
        improved: ['Designed a cleaner, task-focused ride selection screen.', 'Enhanced vehicle license plate contrast for real-world readability.'],
        learned: ['Understood real-world contextual constraints (sunlight, walking, urgent timing) in app design.'],
        nextSteps: ['Conduct peer feedback sessions on map pin interaction details.']
      },
      reflection: {
        learned: 'Re-imagining a popular app requires balancing innovation with user familiarity. Keeping core mental models intact while removing visual clutter yields the best UX.',
        improvement: 'I would like to explore micro-animations for the driver map pin movement during live tracking.',
        nextSteps: 'Test dark mode accessibility contrast for late-night ride booking scenarios.'
      }
    }
  },
  {
    id: 'emergency-response-platform',
    slug: 'emergency-response',
    title: 'Emergency Response Platform',
    category: 'Product Design Concept',
    filterCategory: ['Product Design', 'Concept', 'Mobile'],
    description: 'A concept exploring how digital services could help users request emergency assistance quickly and clearly.',
    year: '2025',
    role: 'Product Designer (Concept)',
    timeline: 'In Progress',
    platform: 'Mobile & Web',
    tools: ['Figma', 'Accessibility Research'],
    tags: ['Product Design', 'Emergency UX', 'Accessibility', 'Concept'],
    type: 'Personal Concept Project',
    featured: false,
    status: 'coming-soon',
    thumbnail: '/assets/projects/emergency-response/thumbnail.svg',
    heroImage: '/assets/projects/emergency-response/hero.svg'
  },
  {
    id: 'salon-appointment-experience',
    slug: 'salon-appointment',
    title: 'Salon Appointment Experience',
    category: 'UX/UI Design',
    filterCategory: ['UX/UI', 'Mobile', 'Web'],
    description: 'A booking experience focused on simplifying service discovery, professional selection, and appointment scheduling.',
    year: '2025',
    role: 'UX/UI Designer (Concept)',
    timeline: 'In Progress',
    platform: 'Mobile App',
    tools: ['Figma'],
    tags: ['Service Design', 'Mobile UX', 'Booking System', 'UI Design'],
    type: 'Personal Project',
    featured: false,
    status: 'coming-soon',
    thumbnail: '/assets/projects/salon/thumbnail.svg',
    heroImage: '/assets/projects/salon/hero.svg'
  }
];

// Helper functions for easy project queries across the website
export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter(project => project.featured || project.status === 'completed');
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(project => project.slug === slug);
}

export function getAdjacentProjects(currentSlug: string): { prevProject: Project | null; nextProject: Project | null } {
  const currentIndex = PROJECTS.findIndex(p => p.slug === currentSlug);
  if (currentIndex === -1) return { prevProject: null, nextProject: null };

  const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (currentIndex + 1) % PROJECTS.length;

  return {
    prevProject: PROJECTS[prevIndex],
    nextProject: PROJECTS[nextIndex]
  };
}
