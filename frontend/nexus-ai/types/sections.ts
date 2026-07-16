export type SectionId =
  | "hero"
  | "about"
  | "services"
  | "features"
  | "portfolio"
  | "testimonials"
  | "team"
  | "faq"
  | "contact";

export interface Service {
  id: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormInput {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}
