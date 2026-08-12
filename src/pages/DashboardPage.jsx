import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, UserCheck, ShieldCheck, Compass, ArrowRight } from 'lucide-react';

export const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const name = user ? user.name : 'Candidate';
  const email = user ? user.email : '';

  return (
    <section className="min-h-[85vh] pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Welcome Banner Card */}
      <div className="relative bg-gradient-to-r from-primary via-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white soft-shadow overflow-hidden mb-10">
        <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Mock Auth Active (Development Mode)
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
              Welcome, {name}!
            </h1>
            <p className="font-body-md text-white/80 text-sm max-w-xl">
              Logged in as <span className="font-semibold text-white">{email}</span>. Your session is active and protected.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button 
              id="dashboard-logout-btn"
              onClick={handleLogout}
              className="font-label-md text-sm font-bold bg-white text-primary hover:bg-surface-bright px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline-sm text-base font-bold text-on-background mb-1">User Profile</h3>
            <p className="font-body-md text-xs text-on-surface-variant mb-2">Authenticated locally via MockAuthAdapter.</p>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-mono text-[11px] font-semibold">Active Session</span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline-sm text-base font-bold text-on-background mb-1">Supabase Ready</h3>
            <p className="font-body-md text-xs text-on-surface-variant mb-2">Architecture decoupled & ready for Supabase Auth swap.</p>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">Adapter Ready</span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-inverse-surface/80 backdrop-blur-xl border border-white/40 dark:border-outline-variant/30 rounded-2xl p-6 soft-shadow flex items-start gap-4 sm:col-span-2 md:col-span-1">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-headline-sm text-base font-bold text-on-background mb-1">Quick Navigation</h3>
            <p className="font-body-md text-xs text-on-surface-variant mb-2">Explore platform opportunities & features.</p>
            <Link to="/" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Return to Home Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
