import Button from "@/components/ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#features", label: "Features" }, 
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-16">
        
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-blue-950">
          <div className="h-8 w-8 rounded-lg bg-blue-600 shadow-lg shadow-blue-600/20" />
          Nexus<span className="text-blue-600">AI</span>
        </a>

        {/* Navigation */}
        <nav className="hidden gap-8 md:flex items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 transition-all duration-200 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Button 
          href="#contact" 
          variant="primary" 
          className="hidden md:flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
        >
          Request a Demo
        </Button>
      </div>
    </header>
  );
}