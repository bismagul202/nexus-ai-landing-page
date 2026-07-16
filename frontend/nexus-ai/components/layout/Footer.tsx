export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-800/30 bg-gradient-to-b from-[#0a1128] to-[#0f1b3d]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Branding */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              NEXUS <span className="text-blue-400">AI</span>
            </h2>
            <p className="text-sm leading-relaxed text-blue-200/70">
              Full-Stack Developer building robust, intelligent web solutions with Laravel and React.
            </p>
          </div>

          {/* Section 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li>
                <a href="mailto:bismagul580@gmail.com" className="transition hover:text-blue-300">
                  bismagul580@gmail.com
                </a>
              </li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>

          {/* Section 3: Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Follow Me</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200/70 transition hover:text-blue-300">
                LinkedIn
              </a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-200/70 transition hover:text-blue-300">
                GitHub
              </a>
            </div>
          </div>

          {/* Section 4: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li>
                <a href="#about" className="transition hover:text-blue-300">About</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-blue-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-blue-800/30 pt-8 text-center text-xs text-blue-300/50">
          © {new Date().getFullYear()} NEXUS AI. All rights reserved. Built by Bisma Gul.
        </div>
      </div>
    </footer>
  );
}
