import React from 'react';
import { Infinity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-100 border-t border-slate-800 w-full text-center md:text-left font-sans">
      <div className="max-w-container-max mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 space-y-4">
          <a className="inline-flex items-center gap-2.5 group" href="/#who-we-are">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0053db] via-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
              <Infinity className="w-5 h-5" />
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-white">
              Gozon<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">ixa</span>
            </span>
          </a>
          <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
            Gozonixa is a recruitment and talent solutions partner connecting enterprise businesses with pre-screened professionals through a transparent, requirement-driven model.
          </p>
          <div className="text-xs text-slate-300 font-mono">
            🛡️ <strong className="text-emerald-400">Zero Candidate Fee Policy:</strong> Job seekers are never charged any fees.
          </div>
        </div>

        {/* Quick Links Column 1 */}
        <div className="col-span-1 space-y-3">
          <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">Recruitment Model</h4>
          <ul className="space-y-2 text-xs text-slate-400 font-mono">
            <li><a className="hover:text-blue-300 transition-colors" href="/#who-we-are">WHO WE ARE</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#what-we-do">WHAT WE DO (12 STEPS)</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#recruitment-approach">OUR APPROACH</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#screening-process">SCREENING MATRIX (8-PT)</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#service-model">COMMERCIAL MODEL</a></li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div className="col-span-1 space-y-3">
          <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">Stakeholders</h4>
          <ul className="space-y-2 text-xs text-slate-400 font-mono">
            <li><a className="hover:text-blue-300 transition-colors" href="/#for-employers">FOR EMPLOYERS</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#for-candidates">FOR CANDIDATES</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#readiness">READINESS SUPPORT</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#values">CORE VALUES</a></li>
            <li><a className="hover:text-blue-300 transition-colors" href="/#industries">INDUSTRIES & ROLES</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="col-span-1 space-y-3">
          <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">Contact & Support</h4>
          <p className="text-xs text-slate-400 font-mono">partner@gozonixa.com</p>
          <p className="text-xs text-slate-400 font-mono">+1 (800) GOZONIXA</p>
          <div className="pt-2">
            <a 
              href="/#cta" 
              className="inline-block bg-[#0053db] hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-mono font-bold transition-colors shadow-md"
            >
              GET STARTED
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400 font-mono">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 GOZONIXA RECRUITMENT & TALENT PARTNER. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="/#who-we-are" className="hover:underline">PRIVACY POLICY</a>
            <a href="/#service-model" className="hover:underline">TERMS OF SERVICE</a>
            <a href="/#for-candidates" className="hover:underline">CANDIDATE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
