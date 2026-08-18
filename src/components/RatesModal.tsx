"use client";
import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, X } from 'lucide-react';

export const RatesModal: React.FC = () => {
  const { isRatesOpen, setRatesOpen, setApplyOpen } = useUIStore();

  const handleApply = () => {
    setRatesOpen(false);
    setApplyOpen(true);
  };

  return (
    <AnimatePresence>
      {isRatesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRatesOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-none max-w-sm w-full mx-4 p-6 relative z-10 shadow-xl border border-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#002D62]">
                <TrendingUp className="w-5 h-5" />
                <h3 className="text-xl font-bold">Current Rates</h3>
              </div>
              <button
                onClick={() => setRatesOpen(false)}
                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-none transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-3 mt-4">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-none border border-slate-200">
                <span className="text-sm font-medium text-slate-700">High-Yield Savings</span>
                <span className="text-base font-bold text-[#F97316]">4.50% APY</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-none border border-slate-200">
                <span className="text-sm font-medium text-slate-700">12-Month CD</span>
                <span className="text-base font-bold text-[#F97316]">5.00% APY</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-none border border-slate-200">
                <span className="text-sm font-medium text-slate-700">30-Year Mortgage</span>
                <span className="text-base font-bold text-[#F97316]">6.85% APR</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                onClick={() => setRatesOpen(false)}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-none transition-colors"
              >
                Close
              </button>
              <button
                onClick={handleApply}
                className="w-full py-2.5 bg-[#002D62] hover:bg-[#001b3b] text-white font-semibold rounded-none transition-colors shadow-sm"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
