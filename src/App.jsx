import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppShell() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('codeforge-theme') || localStorage.getItem('vasuniti-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('codeforge-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((p) => (p === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-[#06080F] text-slate-900 dark:text-slate-100 flex flex-col antialiased font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">

      <ScrollToTop />

      {/* Sticky Navbar — shared across all pages */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Page Content */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/about" element={<AboutPage onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/solutions" element={<SolutionsPage onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all: redirect to home */}
          <Route path="*" element={<HomePage onOpenContact={() => setIsContactOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer — shared across all pages */}
      <Footer />

      {/* Global Contact Modal (accessible from any page via Navbar CTA) */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
