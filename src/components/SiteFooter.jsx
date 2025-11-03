import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-slate-900" />
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} AddressIQ. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#track" className="hover:text-slate-900">Track</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
