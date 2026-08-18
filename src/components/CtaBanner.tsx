"use client";
import React from 'react';

import Link from 'next/link';
import { useUIStore } from '../store/useUIStore';
import { motion } from 'framer-motion';
import { ShieldCheck, Home, Star } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  const { setApplyOpen } = useUIStore();
  return (
    <section className="bg-[#0B3563] text-white py-12 md:py-14 border-t border-[#0e4179]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Left Text */}
            <div className="max-w-2xl space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ready to take the next step?
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Open a new checking account online in minutes and experience the difference of community-focused banking.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button
                id="cta-banner-open-account"
                onClick={() => setApplyOpen(true)}
                className="px-7 py-3.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#002D62] font-bold text-sm sm:text-base rounded-md shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 inline-block"
              >
                Open an Account
              </button>
            </div>
          </div>

          {/* Trust Anchors */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-6 pt-6 border-t border-slate-700/50">
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Member FDIC</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <Home className="w-4 h-4" />
              <span>Equal Housing Lender</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <div className="flex -space-x-0.5 text-[#F59E0B]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="ml-1">4.9/5 on the App Store</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
