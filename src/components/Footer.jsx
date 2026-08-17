import React from 'react';
import { Infinity, Linkedin, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#1b2e6b] text-slate-200 border-t border-blue-900/60 w-full text-center md:text-left font-sans">
      <div className="max-w-container-max mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <a className="inline-flex items-center gap-2.5 group" href="#who-we-are">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#253e91] font-bold shadow-md">
              <Infinity className="w-6 h-6 text-[#253e91]" />
            </div>
            <span className="font-display text-2xl font-black tracking-tight text-white">
              Gozon<span className="text-[#fba91e]">ixa</span>
            </span>
          </a>
          <p className="text-xs sm:text-sm text-blue-200 max-w-sm leading-relaxed">
            Gozonixa is a global staffing, workforce, and IT solutions partner. We deliver contingent staffing, managed services, project delivery, and diversity programs to Fortune 500 enterprises.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#fba91e] hover:text-slate-950 flex items-center justify-center transition-colors text-white">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#fba91e] hover:text-slate-950 flex items-center justify-center transition-colors text-white">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#fba91e] hover:text-slate-950 flex items-center justify-center transition-colors text-white">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-blue-900/60 hover:bg-[#fba91e] hover:text-slate-950 flex items-center justify-center transition-colors text-white">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Our Solutions */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#fba91e] uppercase tracking-wider">Our Solutions</h4>
          <ul className="space-y-2 text-xs text-blue-200">
            <li><a className="hover:text-white transition-colors" href="#contingent-staffing">Contingent Staffing</a></li>
            <li><a className="hover:text-white transition-colors" href="#project-staffing">Project Staffing & MVP</a></li>
            <li><a className="hover:text-white transition-colors" href="#rpo">Recruitment Process Outsourcing</a></li>
            <li><a className="hover:text-white transition-colors" href="#direct-hire">Direct Hire Services</a></li>
            <li><a className="hover:text-white transition-colors" href="#managed-services">Managed Services & IT</a></li>
            <li><a className="hover:text-white transition-colors" href="#diversity">Diversity & Inclusion</a></li>
          </ul>
        </div>


        {/* Column 4: Global Offices */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#fba91e] uppercase tracking-wider">Global Footprint</h4>
          <p className="text-xs text-blue-200 leading-relaxed">
            USA, Canada, India, China, Mexico, Philippines, Ireland, Poland, & Singapore.
          </p>
          <div className="pt-2 text-xs text-blue-100 space-y-1">
            <p className="flex items-center justify-center md:justify-start gap-1.5"><Mail className="w-3.5 h-3.5 text-[#fba91e]" /> contact@gozonixa.com</p>
            <p className="flex items-center justify-center md:justify-start gap-1.5"><Phone className="w-3.5 h-3.5 text-[#fba91e]" /> +1 (800) GOZONIXA</p>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-blue-900/80 py-6 text-center text-xs text-blue-300">
        <div className="max-w-container-max mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© 2026 GOZONIXA LLC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6 text-blue-200">
            <a href="#privacy" className="hover:text-white hover:underline">PRIVACY POLICY</a>
            <a href="#terms" className="hover:text-white hover:underline">TERMS OF USE</a>
            <a href="#gdpr" className="hover:text-white hover:underline">GDPR COMPLIANCE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

