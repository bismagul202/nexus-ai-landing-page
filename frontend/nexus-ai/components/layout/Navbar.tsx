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
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#0a1128]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        
        {/* Unified Branding Style */}
        <a href="#home" className="text-2xl font-black tracking-tighter text-white">
          NEXUS <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-blue-100/70 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button href="#contact" variant="primary" className="hidden md:flex rounded-xl bg-blue-600 hover:bg-blue-500">
          Request a Demo
        </Button>

        {/* Mobile Menu Toggle */}
        <button type="button" onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`overflow-hidden border-t border-blue-900/30 bg-[#0a1128] transition-all duration-300 md:hidden ${isOpen ? "max-h-[400px]" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-3 text-lg font-medium text-blue-100 hover:bg-blue-900/20 rounded-lg">
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <Button href="#contact" variant="primary" className="w-full rounded-xl">
              Request a Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}