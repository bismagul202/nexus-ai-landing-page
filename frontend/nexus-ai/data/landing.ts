import type {
  Service,
  Feature,
  PortfolioItem,
  Testimonial,
  TeamMember,
  FAQItem,
} from "@/types/sections";

export const intro = {
  title: "Powering intelligent experiences for modern enterprises",
  subtitle:
    "Nexus AI fuses strategy, design, and scalable AI infrastructure to deliver landing pages and connected product experiences that convert.",
};

export const services: Service[] = [
  {
    id: "strategy",
    title: "AI Strategy",
    description: "Roadmaps, use-case validation, and implementation planning for enterprise AI initiatives.",
  },
  {
    id: "design",
    title: "Design Systems",
    description: "Human-centered interfaces and reusable component systems built for performance and conversion.",
  },
  {
    id: "integration",
    title: "API Integration",
    description: "Laravel REST API and frontend connection patterns for secure, maintainable data flows.",
  },
];

export const features: Feature[] = [
  {
    id: "scalable-architecture",
    title: "Scalable Architecture",
    description: "Designed to grow with your product: modular sections, reusable components, and API-driven data.",
  },
  {
    id: "performance",
    title: "Performance-first",
    description: "Tailwind CSS and Next.js App Router deliver fast loading experiences for visitors and search engines.",
  },
  {
    id: "conversion",
    title: "Conversion-focused",
    description: "Section layouts and CTAs crafted to turn interest into qualified leads.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "nexus-enterprise",
    title: "Nexus Enterprise Portal",
    category: "AI platform",
    description: "A polished brand experience for a high-growth SaaS product launch.",
    imageAlt: "Screenshot of Nexus Enterprise landing page",
  },
  {
    id: "launch-campaign",
    title: "Launch Campaign",
    category: "Marketing site",
    description: "Campaign landing page built for rapid iteration and high engagement.",
    imageAlt: "Illustration of launch page analytics.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "caroline",
    quote: "The Nexus team translated our AI vision into a beautiful landing page with a seamless API connection.",
    name: "Caroline Byrne",
    role: "VP of Product",
    company: "Orion Labs",
  },
  {
    id: "diego",
    quote: "Clear structure, reusable sections, and a fast frontend made onboarding our platform much easier.",
    name: "Diego Martinez",
    role: "Founder",
    company: "Flux AI",
  },
];

export const team: TeamMember[] = [
  {
    id: "amanda",
    name: "Amanda Lee",
    title: "Chief Product Officer",
    bio: "Guides strategy, user experience, and go-to-market alignment for each product launch.",
  },
  {
    id: "nathan",
    name: "Nathan Brooks",
    title: "Lead Engineer",
    bio: "Builds high-performance frontend experiences and connects them to backend APIs.",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "api-integration",
    question: "Can the site connect to a Laravel 12 REST API?",
    answer: "Yes. The frontend architecture is built to consume REST endpoints and submit contact data using secure API routes.",
  },
  {
    id: "custom-branding",
    question: "Can this system support custom branding and multiple landing pages?",
    answer: "Absolutely. Each section is reusable and the project is structured for easy theming and campaign-specific variations.",
  },
];
