import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const companyLinks = [
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 dark:bg-[#05070D] border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Code<span className="text-blue-600">Forge</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed max-w-xs">
              A software and technology company building thoughtful, scalable digital solutions for modern businesses.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              Incubated at DYPCOEI Incubation Center.
            </p>
          </div>

          {/* Column 2: Company links */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-5">Company</div>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-600 mb-5">Connect</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://linkedin.com/company/codeforge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@codeforge.com"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors group"
                >
                  <span>hello@codeforge.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 dark:border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <span>&copy; {new Date().getFullYear()} CodeForge. All rights reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
