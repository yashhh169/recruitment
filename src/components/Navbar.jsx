import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Infinity, LogOut, User, Menu } from 'lucide-react';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-inverse-surface/70 backdrop-blur-md border-b border-white/20 dark:border-outline-variant/20 shadow-sm transition-all duration-300" id="navbar">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
            <Infinity className="w-6 h-6" />
          </div>
          <span className="font-['Outfit',sans-serif] text-2xl font-black tracking-tight text-on-background">
            Gozon<span className="bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">ixa</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform duration-200" href="#">Find Jobs</a>
          <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform duration-200" href="#">Companies</a>
          <a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform duration-200" href="/#how-it-works" id="nav-how-it-works">How it Works</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated && user ? (
            <>
              <Link to="/dashboard" className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <User className="w-4 h-4" />
                {user.name.split(' ')[0]}
              </Link>
              <button 
                id="nav-logout-btn"
                onClick={handleLogout}
                className="font-label-md text-xs font-semibold border border-outline-variant/40 text-on-surface-variant hover:text-error hover:border-error/40 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="font-label-md text-label-md text-primary hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors inline-block font-semibold">Login</Link>
              <Link to="/register" className="font-label-md text-label-md bg-primary text-white px-6 py-2 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 inline-block font-semibold">Register</Link>
            </>
          )}
        </div>

        <button className="md:hidden text-primary">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};
