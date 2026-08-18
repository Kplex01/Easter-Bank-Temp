"use client";
import React, { useState } from 'react';
import { useUIStore } from '../store/useUIStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Hash, X, Copy, Check } from 'lucide-react';

export const RoutingModal: React.FC = () => {
  const { isRoutingOpen, setRoutingOpen } = useUIStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("011000138");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isRoutingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRoutingOpen(false)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl max-w-sm w-full mx-4 p-6 relative z-10 shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-[#002D62]">
                <Hash className="w-5 h-5" />
                <h3 className="text-xl font-bold">Routing Number</h3>
              </div>
              <button
                onClick={() => setRoutingOpen(false)}
                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <p className="text-slate-600 text-sm mt-2">
              Use this routing number for direct deposits and electronic transfers.
            </p>

            {/* The Number */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mt-4 text-center">
              <div className="text-2xl font-bold tracking-widest text-[#002D62] mb-3">
                011000138
              </div>
              <button
                onClick={handleCopy}
                className={`inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full font-semibold transition-all ${
                  copied 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Number
                  </>
                )}
              </button>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setRoutingOpen(false)}
              className="w-full mt-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg transition-colors shadow-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
