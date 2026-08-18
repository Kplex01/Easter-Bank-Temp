"use client";
import React, { useState, useRef } from 'react';
import { CreditCard, PiggyBank, Home, Store, ArrowRight } from 'lucide-react';
import { ProductCardData } from '../types';
import { useUIStore } from '../store/useUIStore';
import { PERSONAL_PRODUCTS } from '../data/mockData';
import { motion } from 'framer-motion';

interface FinancialSolutionsProps {
  onSelectProduct?: (product: ProductCardData) => void;
}

export const FinancialSolutions: React.FC<FinancialSolutionsProps> = ({
  onSelectProduct,
}) => {
  const { activeCategory, setSelectedProduct } = useUIStore();
  const products = PERSONAL_PRODUCTS;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      setActiveIndex(index);
    }
  };
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'credit-card':
        return <CreditCard className="w-6 h-6 text-[#0055A5] stroke-[2]" />;
      case 'piggy-bank':
        return <PiggyBank className="w-6 h-6 text-[#0055A5] stroke-[2]" />;
      case 'home':
        return <Home className="w-6 h-6 text-[#0055A5] stroke-[2]" />;
      case 'store':
        return <Store className="w-6 h-6 text-[#0055A5] stroke-[2]" />;
      default:
        return <CreditCard className="w-6 h-6 text-[#0055A5] stroke-[2]" />;
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight">
            Financial Solutions for Every Step
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Discover our comprehensive suite of banking products tailored to meet your personal and business needs.
          </p>
        </motion.div>

        {/* 4 Cards Grid / Mobile Carousel */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-0 pb-4 sm:pb-0 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={product.id}
              id={`solution-card-${product.id}`}
              onClick={() => setSelectedProduct(product)}
              className="w-[85vw] min-w-[85vw] flex-shrink-0 snap-center sm:w-auto sm:min-w-0 sm:flex-shrink bg-white rounded-xl p-7 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-[#E3EEF9] flex items-center justify-center mb-6 group-hover:bg-[#D4E6F7] transition-colors">
                  {getIcon(product.iconName)}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#002D62] mb-3 group-hover:text-[#00408A] transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {product.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D97706] group-hover:text-[#B45309] group-hover:translate-x-1 transition-all">
                  <span>{product.actionText.replace('→', '').trim()}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Indicators - Mobile Only */}
        <div className="flex justify-center items-center gap-2 mt-2 sm:hidden">
          {products.map((_, index) => (
            <div
              key={index}
              className={`${
                activeIndex === index
                  ? 'w-5 h-2 rounded-full bg-blue-900 transition-all duration-300'
                  : 'w-2 h-2 rounded-full bg-slate-300 transition-all duration-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
