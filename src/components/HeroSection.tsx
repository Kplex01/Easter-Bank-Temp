"use client";
import React from 'react';
import Image from 'next/image';
import { NavCategory } from '../types';
import { CATEGORY_HERO_CONTENT, PERSONAL_PRODUCTS } from '../data/mockData';
import { useUIStore } from '../store/useUIStore';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, TrendingUp, Hash, Phone } from 'lucide-react';

interface HeroSectionProps {
  onOpenLocations?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLocations,
}) => {
  const { activeCategory, setApplyOpen, setLocationOpen, setHelpOpen, setRatesOpen, setRoutingOpen, setSelectedProduct } = useUIStore();
  const category = activeCategory as NavCategory;
  const content = CATEGORY_HERO_CONTENT[category] || CATEGORY_HERO_CONTENT.Personal;

  const handlePrimaryCta = () => {
    const matchedProduct = PERSONAL_PRODUCTS.find((p) => p.id === content.ctaTarget);
    if (matchedProduct) {
      setSelectedProduct(matchedProduct);
    } else {
      setApplyOpen(true);
    }
  };

  return (
    <section className="bg-[#F6F8FA] py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <motion.div 
            key={`text-${category}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#002D62] tracking-tight leading-tight md:leading-[1.2]">
              {content.heading}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {content.description}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-primary-cta"
                onClick={handlePrimaryCta}
                className="w-full sm:w-auto px-6 py-3 bg-[#E8590C] hover:bg-[#D9480F] text-white text-base font-semibold rounded-md shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 inline-block text-center"
              >
                {content.primaryCta}
              </button>
              
              <button
                id="hero-secondary-cta"
                onClick={() => setLocationOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 text-base font-medium rounded-md border border-slate-300 shadow-sm transition-all duration-150 text-center"
              >
                {content.secondaryCta}
              </button>
            </div>

            {/* Thumb Zone Quick Actions - Mobile Only */}
            <div className="grid grid-cols-4 gap-2 w-full pt-4 sm:hidden">
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setLocationOpen(true)}
                className="flex flex-col items-center justify-center py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#002D62] mb-1.5" />
                <span className="text-[10px] font-semibold text-slate-700">Find ATM</span>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setRatesOpen(true)}
                className="flex flex-col items-center justify-center py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <TrendingUp className="w-5 h-5 text-[#002D62] mb-1.5" />
                <span className="text-[10px] font-semibold text-slate-700">Rates</span>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setRoutingOpen(true)}
                className="flex flex-col items-center justify-center py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Hash className="w-5 h-5 text-[#002D62] mb-1.5" />
                <span className="text-[10px] font-semibold text-slate-700">Routing #</span>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.9 }}
                onClick={() => setHelpOpen(true)}
                className="flex flex-col items-center justify-center py-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-5 h-5 text-[#002D62] mb-1.5" />
                <span className="text-[10px] font-semibold text-slate-700">Help</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Column with Next.js Optimized Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/60 aspect-[16/11] bg-slate-200 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`img-${category}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={content.image || "/images/hero.jpg"}
                    alt={content.alt || "Eastern Bank"}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Branch / Facility Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-slate-200/80 flex items-center gap-2 pointer-events-none z-10">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-semibold text-[#002D62] tracking-wide">
                      {content.badge || "Eastern Bank • Boston, MA"}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Prefetch other category images in background for instantaneous switching */}
              <div className="hidden" aria-hidden="true">
                {Object.values(CATEGORY_HERO_CONTENT).map((item) => (
                  <Image
                    key={item.image}
                    src={item.image}
                    alt=""
                    width={1}
                    height={1}
                    priority
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

