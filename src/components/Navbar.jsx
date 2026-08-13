import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Infinity, LogOut, User, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navLinks = [
    { name: 'Who We Are', href: '/#who-we-are' },
    { name: 'What We Do', href: '/#what-we-do' },
    { name: 'For Employers', href: '/#for-employers' },
    { name: 'For Candidates', href: '/#for-candidates' },
    { name: 'Screening', href: '/#screening-process' },
    { name: 'Service Model', href: '/#service-model' },
    { name: 'Values', href: '/#values' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all duration-300" id="navbar">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-8 py-3.5">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0053db] via-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
            <Infinity className="w-6 h-6" />
          </div>
          <span className="font-display text-2xl font-black tracking-tight text-[#0f172a]">
            Gozon<span className="bg-gradient-to-r from-[#0053db] to-indigo-600 bg-clip-text text-transparent">ixa</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-xs font-semibold">
          {navLinks.map((link, idx) => (
            <a 
              key={idx}
              className="text-slate-600 hover:text-[#0053db] transition-colors py-1 uppercase tracking-wider" 
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Auth CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && user ? (
            <>
              <Link to="/dashboard" className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-50 text-[#0053db] border border-blue-200 hover:bg-blue-100 transition-colors">
                <User className="w-4 h-4" />
                {user.name.split(' ')[0]}
              </Link>
              <button 
                id="nav-logout-btn"
                onClick={handleLogout}
                className="text-xs font-mono font-semibold border border-slate-200 text-slate-700 hover:text-rose-600 hover:border-rose-300 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-xs font-mono font-semibold text-slate-700 hover:text-[#0053db] px-4 py-2 rounded-lg transition-colors">
                LOGIN
              </Link>
              <Link to="/register" className="text-xs font-mono font-bold bg-[#0053db] hover:bg-[#0042b3] text-white px-5 py-2 rounded-lg shadow-sm hover:shadow transition-all">
                REGISTER
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-800 p-2 rounded-lg hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2.5 font-mono text-xs">
            {navLinks.map((link, idx) => (
              <a 
                key={idx}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-[#0053db] py-1.5 uppercase tracking-wider font-semibold" 
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            {isAuthenticated && user ? (
              <>
                <Link 
                  to="/dashboard" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-xs font-mono font-bold text-[#0053db]"
                >
                  <User className="w-4 h-4" /> DASHBOARD
                </Link>
                <button 
                  onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                  className="flex items-center gap-2 py-2 text-xs font-mono font-semibold text-rose-600"
                >
                  <LogOut className="w-4 h-4" /> LOGOUT
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
                <Link 
                  to="/login" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-bold border border-slate-300 text-slate-800 py-2.5 rounded-lg"
                >
                  LOGIN
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center font-bold bg-[#0053db] text-white py-2.5 rounded-lg"
                >
                  REGISTER
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
