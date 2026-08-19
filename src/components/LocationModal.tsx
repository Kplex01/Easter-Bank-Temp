"use client";
import React, { useState } from 'react';
import { X, MapPin, Clock, Phone, Search, Car, Navigation, CheckCircle2 } from 'lucide-react';
import { useUIStore } from '../store/useUIStore';
import { BRANCH_LOCATIONS } from '../data/mockData';

export const LocationModal: React.FC = () => {
  const { isLocationOpen, setLocationOpen } = useUIStore();
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCH_LOCATIONS[0]?.id);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'atm' | 'driveUp'>('all');

  if (!isLocationOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setLocationOpen(false);
    }
  };

  const selectedBranch = BRANCH_LOCATIONS.find((b) => b.id === selectedBranchId) || BRANCH_LOCATIONS[0];

  const filteredBranches = BRANCH_LOCATIONS.filter((branch) => {
    const matchesSearch = 
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.zip.includes(searchQuery);
      
    const matchesFilter = 
      activeFilter === 'all' ? true :
      activeFilter === 'atm' ? branch.hasATM :
      activeFilter === 'driveUp' ? branch.hasDriveThru : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-none w-full max-w-5xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#002D62] text-white px-6 py-4 flex items-start sm:items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-none hidden sm:block">
              <MapPin className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-xl tracking-tight">Eastern Bank Locations & ATMs</h3>
              <p className="text-blue-200 text-sm mt-0.5">Over 110+ Branches & 55,000+ Surcharge-Free ATMs</p>
            </div>
          </div>
          <button
            onClick={() => setLocationOpen(false)}
            className="text-white/80 hover:text-white p-2 rounded-none hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex flex-col lg:flex-row gap-4 justify-between items-center flex-shrink-0">
          <div className="relative w-full lg:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by city, address, or ZIP (e.g. Boston, Cambridge, 02110)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent transition-shadow"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-none text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-[#002D62] text-white border border-[#002D62]' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              All Branches
            </button>
            <button
              onClick={() => setActiveFilter('atm')}
              className={`px-4 py-2 rounded-none text-sm font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'atm' 
                  ? 'bg-[#002D62] text-white border border-[#002D62]' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              Smart ATMs
            </button>
            <button
              onClick={() => setActiveFilter('driveUp')}
              className={`px-4 py-2 rounded-none text-sm font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                activeFilter === 'driveUp' 
                  ? 'bg-[#002D62] text-white border border-[#002D62]' 
                  : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Car className="w-4 h-4" />
              Drive-Up
            </button>
          </div>
        </div>

        {/* Two-Column Main Content */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-white">
          
          {/* Left Column (List) */}
          <div className="col-span-1 lg:col-span-5 border-r border-slate-200 overflow-y-auto p-4 space-y-3 h-64 lg:h-auto custom-scrollbar">
            {filteredBranches.length > 0 ? (
              filteredBranches.map((branch) => {
                const isSelected = selectedBranchId === branch.id;
                return (
                  <div 
                    key={branch.id} 
                    onClick={() => setSelectedBranchId(branch.id)}
                    className={`p-4 rounded-none cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'border-2 border-[#002D62] bg-blue-50/50 shadow-sm' 
                        : 'border border-slate-200 bg-white hover:border-[#002D62]/40 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-[15px] text-[#002D62] leading-tight">{branch.name}</h4>
                      <span className="text-emerald-600 font-semibold text-xs whitespace-nowrap bg-emerald-50 px-2 py-0.5 rounded-none border border-emerald-100">
                        {branch.distance}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm mt-1.5">{branch.address}, {branch.city}, {branch.state} {branch.zip}</p>
                    <a 
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-1.5 text-slate-500 hover:text-[#002D62] text-sm mt-2 font-medium transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {branch.phone}
                    </a>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 px-4">
                <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <h4 className="text-slate-700 font-bold">No locations found</h4>
                <p className="text-slate-500 text-sm mt-1">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>

          {/* Right Column (Map & Detail) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col bg-slate-50 overflow-y-auto h-full">
            
            {/* Map Area */}
            <div className="h-56 sm:h-72 bg-blue-50/80 border-b border-slate-200 relative flex items-center justify-center overflow-hidden flex-shrink-0">
              {/* CSS Grid Pattern for fake map */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(#002D62 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              ></div>
              
              {/* Map UI Elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative animate-in zoom-in duration-300">
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-none shadow-lg text-sm font-bold text-[#002D62] whitespace-nowrap border border-slate-100 z-10">
                    {selectedBranch.name}
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-slate-100"></div>
                  </div>
                  {/* Pin */}
                  <MapPin className="w-10 h-10 text-[#E8590C] drop-shadow-md relative z-20" fill="white" />
                  {/* Pin shadow */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-slate-900/20 blur-[2px] rounded-none"></div>
                </div>
              </div>
            </div>

            {/* Branch Details */}
            <div className="p-4 sm:p-6 lg:p-8 flex-1">
              <div className="bg-white rounded-none border border-slate-200 p-5 sm:p-7 shadow-sm">
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#002D62] tracking-tight">{selectedBranch.name}</h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1.5">
                      {selectedBranch.address}<br />
                      {selectedBranch.city}, {selectedBranch.state} {selectedBranch.zip}
                    </p>
                  </div>
                  <button className="w-full sm:w-auto bg-[#002D62] hover:bg-[#00224A] text-white px-5 py-2.5 rounded-none text-sm font-semibold shadow-sm transition-colors flex items-center justify-center gap-2">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-50 p-4 rounded-none border border-slate-100">
                    <div className="flex items-center gap-2 mb-2 text-[#002D62] font-bold text-sm">
                      <Clock className="w-4 h-4 text-[#E8590C]" />
                      Lobby Hours
                    </div>
                    <p className="text-slate-700 text-sm font-medium leading-relaxed whitespace-pre-line">
                      {selectedBranch.hours.replace(' | ', '\n')}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-none border border-slate-100">
                    <div className="flex items-center gap-2 mb-2 text-[#002D62] font-bold text-sm">
                      <Phone className="w-4 h-4 text-[#E8590C]" />
                      Branch Direct
                    </div>
                    <a 
                      href={`tel:${selectedBranch.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-slate-700 hover:text-[#002D62] text-lg font-bold hover:underline inline-block transition-colors"
                    >
                      {selectedBranch.phone}
                    </a>
                    <p className="text-slate-500 text-xs mt-1">Available during lobby hours</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Branch Services & Features:</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedBranch.features.map((feature, idx) => (
                      <div key={idx} className="bg-blue-50/70 text-[#002D62] border border-blue-100/80 px-3.5 py-1.5 rounded-none text-[13px] font-semibold flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {selectedBranch.hasDriveThru && (
                      <div className="bg-blue-50/70 text-[#002D62] border border-blue-100/80 px-3.5 py-1.5 rounded-none text-[13px] font-semibold flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        Drive-Thru Window
                      </div>
                    )}
                  </div>
                </div>

              </div>
              
              <div className="mt-6 text-center">
                <a href="#" className="text-[13px] font-medium text-slate-500 hover:text-[#002D62] underline decoration-slate-300 underline-offset-4 transition-colors">
                  Looking for an Allpoint ATM? Surcharge-free at CVS, Target & Walgreens.
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 20px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #94a3b8;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};
