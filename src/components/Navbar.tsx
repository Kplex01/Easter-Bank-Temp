"use client";
import React, { useState } from 'react';
import { Lock, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { NavCategory } from '../types';
import { Logo } from './ui/Logo';

import { useUIStore } from '../store/useUIStore';

export const Navbar: React.FC = () => {
  const { activeCategory, setActiveCategory, setLoginOpen, setApplyOpen } = useUIStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavCategory[] = ['Personal', 'Business', 'Commercial', 'Wealth', 'About Us'];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-[clamp(1rem,3vw,2rem)] py-4 sm:py-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between w-full gap-2">
          {/* Logo */}
          <div 
            id="eastern-bank-logo"
            onClick={() => setActiveCategory('Personal')}
            className="cursor-pointer group"
          >
            <div className="flex items-center gap-2 lg:gap-3">
              <Logo className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 text-[#0F172A]"/>
              <span className="font-bold tracking-tight text-[clamp(1.25rem,2vw,1.75rem)] whitespace-nowrap pt-0.5">
                <span className="text-[#0F172A]">Eastern </span>
                <span className="text-[#F97316]">Bank</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Categories */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4 h-full pt-1">
            {navItems.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  id={`nav-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-3 lg:px-4 py-2 text-[15px] font-medium transition-colors duration-150 h-full flex items-center ${
                    isActive
                      ? 'text-[#002D62] font-semibold'
                      : 'text-slate-600 hover:text-[#002D62]'
                  }`}
                >
                  {category}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-[#E58316] rounded-t-sm" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="btn-open-account-header"
              onClick={() => setApplyOpen(true)}
              className="px-4 py-2 border border-[#002D62] text-[#002D62] text-sm font-medium rounded hover:bg-[#002D62]/5 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#002D62]/20 inline-block"
            >
              Open Account
            </button>
            <button
              id="btn-login-header"
              onClick={() => setLoginOpen(true)}
              className="px-4 py-2 bg-[#002D62] text-white text-sm font-medium rounded hover:bg-[#00224A] flex items-center gap-1.5 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#002D62]/40"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile action & menu trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setApplyOpen(true)}
              className="px-[clamp(0.75rem,2vw,1rem)] py-1.5 text-[clamp(0.75rem,2vw,0.875rem)] font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors whitespace-nowrap"
            >
              Open Account
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -m-2 rounded-md text-slate-700 hover:text-[#002D62] hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200/50 bg-white/90 backdrop-blur-md px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-4 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-50/80 text-[#002D62] font-semibold border-l-4 border-[#E58316]'
                      : 'text-slate-800 hover:bg-slate-50/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setApplyOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-3.5 border border-[#002D62] text-[#002D62] text-center font-bold rounded-lg hover:bg-slate-50/80 block mt-2"
            >
              Open Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
