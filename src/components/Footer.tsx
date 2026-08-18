"use client";
import React from 'react';
import { Logo } from './ui/Logo';
import { useUIStore } from '../store/useUIStore';

interface FooterProps {
  onOpenContact?: () => void;
  onOpenInfoModal?: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenInfoModal,
}) => {
  const { setLocationOpen } = useUIStore();
  return (
    <footer className="bg-[#21262C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-700/60">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 flex-shrink-0 text-[#0F172A]"/>
              <span className="font-bold tracking-tight text-xl whitespace-nowrap pt-0.5">
                <span className="text-[#FFFFFF]">Eastern </span>
                <span className="text-[#F97316]">Bank</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 font-normal">
              Join Us For Good.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 sm:col-span-4 space-y-3">
            <div>
              <button
                onClick={() => setLocationOpen(true)}
                className="text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-colors"
              >
                Locations
              </button>
            </div>
            <div>
              <button
                onClick={() => onOpenContact?.()}
                className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 px-3 py-1.5 rounded-md border border-emerald-800/50 transition-all hover:bg-emerald-900/50 shadow-[0_0_10px_rgba(52,211,153,0.1)]"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-3 sm:col-span-4 space-y-3">
            <div>
              <button
                onClick={() => onOpenInfoModal?.('Privacy & Security', 'Eastern Bank is committed to protecting your financial privacy. We utilize 256-bit AES bank-grade encryption, biometric authentication, fraud monitoring algorithms, and strict internal compliance protocols to ensure your data and funds are shielded.')}
                className="text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-colors"
              >
                Privacy & Security
              </button>
            </div>
            <div>
              <button
                onClick={() => onOpenInfoModal?.('Terms of Use', 'By using Eastern Bank online services, you agree to our standard banking disclosures, electronic fund transfer agreements, account terms, and service fee schedules as regulated by the FDIC and Federal Reserve.')}
                className="text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-colors"
              >
                Terms of Use
              </button>
            </div>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-3 sm:col-span-4 space-y-3">
            <div>
              <button
                onClick={() => onOpenInfoModal?.('Accessibility', 'Eastern Bank is dedicated to digital accessibility for all users, including individuals with disabilities. Our web portal complies with WCAG 2.1 Level AA accessibility standards, supporting screen readers, keyboard navigation, and high contrast visibility.')}
                className="text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-colors"
              >
                Accessibility
              </button>
            </div>
            <div>
              <button
                onClick={() => onOpenInfoModal?.('Sitemap', 'Eastern Bank Portal Sitemap: Personal Banking (Checking, High-Yield Savings, CDs, Debit Cards, Zelle Transfers), Lending (Mortgages, HELOCs, Auto Loans, Personal Loans), Small Business Banking (Business Checking, Commercial Real Estate, Merchant POS, SBA Loans), Wealth Management (Fiduciary Advising, Trust Administration, Private Banking).')}
                className="text-sm text-slate-300 hover:text-white underline underline-offset-4 decoration-slate-500 hover:decoration-white transition-colors"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 Eastern Bank. All rights reserved. Member FDIC. Equal Housing Lender.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Routing #: 011001234</span>
            <span>•</span>
            <span>NMLS #440021</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
