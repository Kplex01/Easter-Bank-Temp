import React from 'react';
import Link from 'next/link';
import { Logo } from '../components/ui/Logo';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-6">
      <Logo className="w-12 h-12 text-slate-300 mb-6" />
      <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-slate-900 tracking-tight mb-3">
        Feature in Development
      </h2>
      <p className="text-slate-500 max-w-md mx-auto mb-8 text-[clamp(0.875rem,2vw,1rem)]">
        We are continuously expanding our digital banking suite. The page or feature you are looking for is currently being upgraded or does not exist.
      </p>
      <Link 
        className="px-6 py-3 rounded-full bg-blue-900 text-white font-semibold hover:bg-blue-950 transition-colors inline-flex items-center gap-2" 
        href="/"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
