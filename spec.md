# SBJ Portfolio

## Current State
The project has a basic scaffold. No frontend components have been built yet. A previous attempt existed but failed to deploy. Starting fresh with a complete portfolio site.

## Requested Changes (Diff)

### Add
- Full single-page portfolio website for Shanti Bhushan Jha (ERP Business Analyst)
- Hero section: dark background, orange accent, "Hi I am / Shanti Bhushan Jha / ERP Business Analyst & Consultant", generated professional avatar on right side in circular frame, social icons (LinkedIn, Email), "Hire Me" + "Download CV" buttons, animated stat counters (4.5+ Years, 50+ Tickets/Month, 95% UAT Rate)
- Navigation: fixed top nav, logo "SBJ" in orange, links (About, Expertise, Case Studies, AI Workflow, Skills, Impact, Contact), dark/light theme toggle
- About section: storytelling timeline (2020, 2021-2022, 2023, 2024-Present) with animated nodes + descriptive text
- Core Expertise section: 6 interactive cards (ERP Functional Design, Process Optimization, UAT & QA, API Integration, AI-Enabled BA, SQL & Data Validation) with hover scale + glow effects
- Case Studies section: 5 cards (SSO Implementation, OTP Discount Authorization, Excel Bulk Import, API Integration, Alteration Master) each opening animated modal with Problem/Analysis/Solution/Flow/Before-After/Impact/Role/Tools
- NEW WMS App case study card: operations (Suggestive Put Away, Take Away, Picklist, Bin Count, Bin Audit) with dashboard analytics section
- M-POS (Queue Buster) case study card: Mobile billing, queue reduction at checkout
- AI-Enabled Workflow section: animated node diagram (Requirement → AI Brainstorm → FRD Draft → Edge Cases → UAT Creation → Dev Handoff → Validation), sequential glow animation, impact metrics
- Skills section: 4 groups with animated progress bars (ERP & Domain, Business Analysis, Technical, AI & Tools)
- Impact Metrics section: animated counters (50+ tickets, 5+ features, ~50% effort reduced, 95% UAT, 30% doc time saved, 4.5+ years)
- Portfolio Artifacts section: cards for FRD Sample, UAT Plan, Process Flow, RTM, Feature Enhancement Proposal
- Contact section: glassmorphism form + contact links (email, LinkedIn, location, resume download)
- Footer with copyright
- Particle background animation on hero
- Scroll reveal animations (fadeIn + translateY 40px → 0) triggered at 25% visibility
- Staggered child animations at 100ms delay
- Dark/light theme toggle with CSS variables
- Glow cursor effect
- Skill bar animations on scroll
- Animated counters on scroll

### Modify
- Design system: orange accent (#F97316 / similar warm orange) replacing blue, dark base (#0A0A0A / #111111), high contrast B&W photo style

### Remove
- Nothing (new build)

## Implementation Plan
1. Set up index.css with CSS variables for dark/light theme, orange accent, typography (Syne + DM Sans + JetBrains Mono from Google Fonts)
2. Create main App.tsx as single-page layout with all section components
3. Build NavBar component with theme toggle
4. Build HeroSection with avatar image, animated stats, social icons, CTAs
5. Build AboutSection with animated timeline
6. Build ExpertiseSection with hover cards
7. Build CaseStudiesSection with modal system (7 case studies including WMS and M-POS)
8. Build AIWorkflowSection with animated node diagram
9. Build SkillsSection with animated progress bars
10. Build ImpactSection with animated counters
11. Build ArtifactsSection with preview cards
12. Build ContactSection with glass form
13. Implement scroll reveal via IntersectionObserver
14. Implement particle canvas animation
15. Implement counter animations
16. Implement glow cursor
17. Ensure responsive design (mobile breakpoints)
