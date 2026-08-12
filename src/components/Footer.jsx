import React from 'react';
import { Infinity } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-inverse-surface dark:bg-surface-container-lowest grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-section-gap w-full text-center md:text-left">
      <div className="col-span-1 md:col-span-1">
        <a className="flex items-center gap-2.5 group mb-4" href="#">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary via-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-primary/25">
            <Infinity className="w-5 h-5" />
          </div>
          <span className="font-['Outfit',sans-serif] text-2xl font-black tracking-tight text-white">
            Gozon<span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">ixa</span>
          </span>
        </a>
        <p className="font-body-md text-body-md text-surface-variant/80 mb-6">
          Next-generation recruitment platform connecting elite global talent with premier technology leaders.
        </p>
      </div>

      <div className="col-span-1">
        <h4 className="font-label-md text-label-md text-white mb-4">Company</h4>
        <ul className="space-y-3">
          <li><a className="font-body-md text-body-md text-surface-variant/80 hover:text-white hover:underline transition-colors" href="#">About Us</a></li>
          <li><a className="font-body-md text-body-md text-surface-variant/80 hover:text-white hover:underline transition-colors" href="#">Services</a></li>
          <li><a className="font-body-md text-body-md text-surface-variant/80 hover:text-white hover:underline transition-colors" href="#">Careers</a></li>
        </ul>
      </div>

      <div className="col-span-1">
        <h4 className="font-label-md text-label-md text-white mb-4">Legal</h4>
        <ul className="space-y-3">
          <li><a className="font-body-md text-body-md text-surface-variant/80 hover:text-white hover:underline transition-colors" href="#">Privacy Policy</a></li>
          <li><a className="font-body-md text-body-md text-surface-variant/80 hover:text-white hover:underline transition-colors" href="#">Terms of Service</a></li>
        </ul>
      </div>

      <div className="col-span-1">
        <h4 className="font-label-md text-label-md text-white mb-4">Contact</h4>
        <p className="font-body-md text-body-md text-surface-variant/80 mb-2">contact@gozonixa.com</p>
        <p className="font-body-md text-body-md text-surface-variant/80">+1 (555) 123-4567</p>
      </div>

      <div className="col-span-1 md:col-span-4 mt-12 pt-8 border-t border-white/10 text-center font-body-md text-body-md text-surface-variant/60">
        © 2026 Gozonixa Recruitment. All rights reserved.
      </div>
    </footer>
  );
};
