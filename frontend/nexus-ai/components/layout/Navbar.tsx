"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/40 bg-[#0a1128]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
          <div className="h-8 w-8 rounded-lg bg-blue-500 shadow-lg shadow-blue-500/20" />
          Nexus<span className="text-blue-400">AI</span>
        </a>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-blue-100/80 transition-all duration-200 hover:text-blue-300">{link.label}</a>
          ))}
        </nav>

        {/* CTA */}
        <Button href="#contact" variant="primary" className="hidden md:flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-blue-400/40 active:scale-95">
          Request a Demo
        </Button>

        {/* Mobile Menu Toggle */}
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`overflow-hidden border-t border-blue-900/40 bg-[#0a1128] transition-all duration-300 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-blue-100/80 transition hover:bg-white/5 hover:text-blue-300">{link.label}</a>
          ))}
          <Button href="#contact" variant="primary" onClick={() => setIsOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 active:scale-95">
            Request a Demo
          </Button>
        </nav>
      </div>
    </header>
  );
}
