import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Solutions', to: '/solutions' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar({ onOpenContact, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`relative sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/92 dark:bg-[#06080F]/95 backdrop-blur-xl shadow-sm border-b border-slate-200/80 dark:border-white/[0.07] py-3'
          : 'bg-white/80 dark:bg-transparent backdrop-blur-sm border-b border-slate-100/80 dark:border-transparent py-4'
      }`}
    >
      {/* Gradient glow line — dark mode, on scroll */}
      {isScrolled && (
        <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />
      )}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">

        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 flex-shrink-0"
          aria-label="CodeForge home"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-400 rounded-full border-2 border-white dark:border-[#06080F]" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white font-sans">
            Code<span className="text-blue-600 font-extrabold">Forge</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-600/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.05]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Active underline indicator */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="flex items-center gap-1 p-1 rounded-full bg-slate-100 dark:bg-white/[0.07] border border-slate-200 dark:border-white/[0.1] shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-amber-100 text-amber-600' : 'text-slate-400'}`}>
              <Sun className="w-3.5 h-3.5" />
            </div>
            <div className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.7)]' : 'text-slate-400'}`}>
              <Moon className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Let's Talk */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-600/25 hover:shadow-lg hover:-translate-y-px transition-all duration-200 cursor-pointer group"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.07] transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.07] transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200/80 dark:border-white/[0.07] bg-white/98 dark:bg-[#07090F]/98 backdrop-blur-xl px-5 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-1 mb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 text-base font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-600/15 text-blue-600 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-white/[0.05]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => { setMobileOpen(false); onOpenContact(); }}
            className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
