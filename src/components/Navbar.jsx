import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Infinity, Menu, X, ChevronDown 
} from 'lucide-react';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navMenuItems = [
    {
      name: 'About Us',
      href: '/#about-us'
    },
    {
      name: 'Our Solutions',
      href: '/#our-solutions',
      submenu: [
        { name: 'Contingent Staffing', href: '/contingent-staffing' },
        { name: 'Contract & Project Staffing', href: '/contract-project-staffing' },
        { name: 'Direct Hire & Executive Search', href: '/#direct-hire' },
        { name: 'Recruitment Process Outsourcing (RPO)', href: '/#rpo' },
        { name: 'Candidate Screening & Assessment', href: '/#candidate-screening' },
        { name: 'Talent Training & Development', href: '/#talent-training' }
      ]
    },
    {
      name: 'Community First',
      href: '/#community'
    },
    {
      name: 'Contact Us',
      href: '/#contact-us'
    }
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-md">
      
      {/* ⚪ MAIN NAVIGATION BAR (White Sticky Header) */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-200" id="navbar">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-8 py-3">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#253e91] flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform duration-300">
              <Infinity className="w-6 h-6 text-[#fba91e]" />
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-[#253e91]">
              Talent<span className="text-[#fba91e]">raw</span>
            </span>
          </Link>

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
                    {item.submenu.map((sub, sIdx) => 
                      sub.href.startsWith('/') && !sub.href.includes('#') ? (
                        <Link 
                          key={sIdx}
                          to={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#253e91] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ) : (
                        <a 
                          key={sIdx}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-[#253e91] transition-colors"
                        >
                          {sub.name}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/#our-solutions" className="text-xs font-bold bg-[#253e91] hover:bg-blue-900 text-white px-5 py-2 rounded-lg shadow-sm hover:shadow transition-all border border-blue-900">
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
                      {item.submenu.map((sub, sIdx) => 
                        sub.href.startsWith('/') && !sub.href.includes('#') ? (
                          <Link
                            key={sIdx}
                            to={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-600 hover:text-[#253e91] py-1 text-[11px] normal-case"
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <a
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-600 hover:text-[#253e91] py-1 text-[11px] normal-case"
                          >
                            {sub.name}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200">
              <a 
                href="/#our-solutions" 
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
