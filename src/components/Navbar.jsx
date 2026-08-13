import React, { useState } from 'react';
import { 
  Infinity, Menu, X, ChevronDown, 
  Linkedin, Facebook, Twitter, Instagram, Sparkles 
} from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('EN');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navMenuItems = [
    {
      name: 'About Us',
      href: '#about-us',
      submenu: [
        { name: 'Gozonixa Advantage', href: '#advantage' },
        { name: 'Great Place to Work', href: '#work' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Awards & Recognitions', href: '#awards' }
      ]
    },
    {
      name: 'Our Solutions',
      href: '#our-solutions',
      submenu: [
        { name: 'Contingent Staffing Solutions', href: '#contingent-staffing' },
        { name: 'Project Staffing & MVP', href: '#project-staffing' },
        { name: 'Recruitment Process Outsourcing (RPO)', href: '#rpo' },
        { name: 'Direct Hire & Executive Search', href: '#direct-hire' },
        { name: 'Payroll & Transition Services', href: '#payroll' },
        { name: 'Managed Services & Project Delivery', href: '#managed-services' },
        { name: 'Digital Experience & UI/UX', href: '#digital-exp' },
        { name: 'Technical Operations & DevOps', href: '#tech-ops' },
        { name: 'Diversity and Inclusion Programs', href: '#diversity' }
      ]
    },
    {
      name: 'Careers',
      href: '#careers',
      submenu: [
        { name: 'Corporate Jobs', href: '#corporate-jobs' },
        { name: 'Consultant Opportunities', href: '#consultant-jobs' }
      ]
    },
    {
      name: 'Community First',
      href: '#community'
    },
    {
      name: 'Resources',
      href: '#resources',
      submenu: [
        { name: 'Articles & Blogs', href: '#blogs' },
        { name: 'Whitepapers & Reports', href: '#whitepapers' },
        { name: 'Case Studies', href: '#case-studies' },
        { name: 'Webinars & Ebooks', href: '#webinars' },
        { name: 'Insights from Gozonixa', href: '#insights' }
      ]
    },
    {
      name: 'Contact Us',
      href: '#contact-us'
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-md">
      
      {/* 🔵 TOP HEADER BAR (Navy Blue #253e91) */}
      <div className="bg-[#253e91] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          
          {/* Left Announcement / Tagline */}
          <div className="hidden sm:flex items-center gap-2 text-blue-100 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#fba91e]" />
            <span>Global Staffing, Workforce & IT Solutions Partner</span>
          </div>

          {/* Right Controls: Social Links & Language Pill Switcher */}
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-3 text-blue-200">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* EN/FR Language Switcher Pill */}
            <div className="flex items-center bg-blue-950/60 rounded-full p-0.5 border border-blue-400/30">
              <button 
                onClick={() => setActiveLang('EN')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  activeLang === 'EN' ? 'bg-[#fba91e] text-slate-950 shadow-sm' : 'text-blue-200 hover:text-white'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setActiveLang('FR')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                  activeLang === 'FR' ? 'bg-[#fba91e] text-slate-950 shadow-sm' : 'text-blue-200 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ⚪ MAIN NAVIGATION BAR (White Sticky Header) */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200" id="navbar">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-8 py-3">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#253e91] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform duration-300">
              <Infinity className="w-6 h-6 text-[#fba91e]" />
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-[#253e91]">
              Gozon<span className="text-[#fba91e]">ixa</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-700">
            {navMenuItems.map((item, idx) => (
              <div 
                key={idx} 
                className="relative py-2 group"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className="flex items-center gap-1 hover:text-[#253e91] transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#253e91] transition-transform group-hover:rotate-180" />}
                </a>

                {/* Submenu Dropdown */}
                {item.submenu && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.submenu.map((sub, sIdx) => (
                      <a 
                        key={sIdx}
                        href={sub.href}
                        className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#253e91] transition-colors"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#our-solutions" className="text-xs font-bold bg-[#253e91] hover:bg-blue-900 text-white px-5 py-2 rounded-lg shadow-sm hover:shadow transition-all border border-blue-900">
              GET STARTED
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-4 shadow-2xl">
            <div className="flex flex-col space-y-3 text-xs font-bold uppercase tracking-wider">
              {navMenuItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#253e91] block py-1 font-extrabold"
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1 border-l-2 border-slate-200">
                      {item.submenu.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-slate-600 hover:text-[#253e91] py-1 text-[11px] normal-case"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200">
              <a 
                href="#our-solutions" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#253e91] text-white py-2.5 rounded-lg font-bold text-xs"
              >
                GET STARTED
              </a>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};

