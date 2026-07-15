export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white py-10 text-slate-600">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-blue-50 pt-8">
          
          {/* Copyright */}
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-blue-600 font-bold">Nexus AI</span>. All rights reserved.
          </p>

          {/* Credits */}
          <p className="text-sm text-slate-400">
            Built with <span className="text-blue-500">Next.js</span> and <span className="text-blue-500">Tailwind CSS</span>.
          </p>
          
        </div>
      </div>
    </footer>
  );
}