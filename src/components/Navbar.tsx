import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Moon, Sun } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Default to dark mode unless explicitly set to 'light' in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldBeDark = savedTheme !== 'light';
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Experience', href: isHome ? '#experience' : '/#experience' },
    { label: 'Learning', href: isHome ? '#learning' : '/#learning' },
    { label: 'Beyond work', href: isHome ? '#beyond-work' : '/#beyond-work' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/85 dark:bg-[#0C0C0E]/85 backdrop-blur-md border-b border-[#E8E8ED] dark:border-[#27272A] transition-colors">
      <div className="max-w-[1100px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between gap-6">
        {/* Brand */}
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-white hover:text-black dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Bharat Kalra
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6E73] dark:text-[#A1A1A8]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side Actions: Theme Toggle, Resume button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1E1E22] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume button */}
          <a
            href="/docs/resume.pdf"
            download="Bharat_Kalra_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black dark:hover:bg-neutral-200 px-4 py-2 rounded-full transition-all duration-200 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-[#6E6E73] dark:text-[#A1A1A8] hover:bg-[#F5F5F7] dark:hover:bg-[#1E1E22] transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-[#1D1D1F] dark:text-white hover:bg-[#F5F5F7] dark:hover:bg-[#1E1E22] rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#121214] border-b border-[#E8E8ED] dark:border-[#27272A] px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#1D1D1F] dark:text-white">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="py-1 text-[#6E6E73] dark:text-[#A1A1A8] hover:text-[#1D1D1F] dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8E8ED] dark:border-[#27272A]">
              <a
                href="/docs/resume.pdf"
                download="Bharat_Kalra_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-white bg-[#1D1D1F] dark:bg-white dark:text-[#1D1D1F] hover:bg-black px-4 py-2.5 rounded-xl transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
