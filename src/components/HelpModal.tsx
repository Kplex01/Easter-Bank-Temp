"use client";
import React from 'react';
import { useUIStore } from '../store/useUIStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

export const HelpModal: React.FC = () => {
  const { isHelpOpen, setHelpOpen } = useUIStore();

  return (
    <AnimatePresence>
      {isHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setHelpOpen(false)}
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
                <Phone className="w-5 h-5" />
                <h3 className="text-xl font-bold">Contact Support</h3>
              </div>
              <button
                onClick={() => setHelpOpen(false)}
                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <p className="text-slate-600 text-sm mt-2">
              We're here to help. Reach out to our support team 24/7.
            </p>

            {/* The Number */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mt-4 text-center text-lg font-semibold text-slate-900">
              +1 (786) 665-5317
            </div>

            {/* Action Button */}
            <button
              onClick={() => setHelpOpen(false)}
              className="w-full mt-6 py-3 bg-[#002D62] hover:bg-[#001b3b] text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
