"use client";
import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Building, CreditCard, PiggyBank, Briefcase } from 'lucide-react';
import { useUIStore } from '../store/useUIStore';

export const OpenAccountModal: React.FC = () => {
  const { isApplyOpen, setApplyOpen } = useUIStore();
  const initialProduct = 'checking';
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedProduct, setSelectedProduct] = useState(initialProduct || 'checking');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    ssnLast4: '',
    address: '',
    city: '',
    state: 'MA',
    zip: '',
    initialDeposit: '100',
    fundingMethod: 'debit',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isApplyOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else if (step === 3) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setStep(4);
      }, 1200);
    }
  };

  const handleReset = () => {
    setStep(1);
    setApplyOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setApplyOpen(false);
    }
  };

  const productsList = [
    {
      id: 'checking',
      name: 'Premier Free Checking',
      desc: 'Zero maintenance fees, free nationwide Allpoint ATMs, early payday deposit.',
      min: '$25 min deposit',
      icon: CreditCard,
    },
    {
      id: 'savings',
      name: 'High-Yield Online Savings',
      desc: '4.85% APY tiered savings, automatic transfer tools, zero monthly charge.',
      min: '$50 min deposit',
      icon: PiggyBank,
    },
    {
      id: 'cd',
      name: '11-Month CD Special',
      desc: 'Guaranteed 4.85% fixed APY, FDIC insured security, compounding interest.',
      min: '$500 min deposit',
      icon: Building,
    },
    {
      id: 'small-business',
      name: 'Small Business Checking',
      desc: '250 free monthly transactions, Clover POS integration, dedicated banker.',
      min: '$100 min deposit',
      icon: Briefcase,
    },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#002D62] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Instant Online Application
            </span>
            <h3 className="font-bold text-xl">Open Your Eastern Bank Account</h3>
          </div>
          <button
            onClick={() => setApplyOpen(false)}
            className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicator */}
        {step < 4 && (
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600">
            <span className={step >= 1 ? 'text-[#002D62] font-bold' : ''}>1. Select Account</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-[#002D62] font-bold' : ''}>2. Applicant Info</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-[#002D62] font-bold' : ''}>3. Fund & Verify</span>
          </div>
        )}

        {/* Content Views */}
        <div className="p-6">
          {/* Step 1: Select Product */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 text-base">Select Account to Open Today:</h4>
              <div className="grid grid-cols-1 gap-3">
                {productsList.map((prod) => {
                  const Icon = prod.icon;
                  const isSelected = selectedProduct === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => setSelectedProduct(prod.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                        isSelected
                          ? 'border-[#002D62] bg-blue-50/40 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-[#002D62] text-white' : 'bg-slate-100 text-slate-600'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-sm text-[#002D62]">{prod.name}</h5>
                          <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
                            {prod.min}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{prod.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-[#002D62] hover:bg-[#00224A] text-white font-semibold text-sm rounded-lg flex items-center gap-2"
                >
                  <span>Continue to Personal Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="font-bold text-slate-800 text-base">Tell us about yourself</h4>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Jane"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Doe"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane.doe@example.com"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(617) 555-0192"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Residential Street Address</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="100 Federal St, Apt 4B"
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Boston"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="MA"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="02110"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#002D62] hover:bg-[#00224A] text-white font-semibold text-sm rounded-lg flex items-center gap-2"
                >
                  <span>Continue to Funding</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Funding & Security Verification */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              <h4 className="font-bold text-slate-800 text-base">Identity & Initial Deposit</h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Last 4 digits of SSN</label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    value={formData.ssnLast4}
                    onChange={(e) => setFormData({ ...formData, ssnLast4: e.target.value })}
                    placeholder="••••"
                    className="w-full px-3 py-2 text-sm font-mono tracking-widest border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Initial Opening Deposit ($)</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500 font-bold">$</span>
                  <input
                    type="number"
                    min="25"
                    required
                    value={formData.initialDeposit}
                    onChange={(e) => setFormData({ ...formData, initialDeposit: e.target.value })}
                    className="w-full pl-8 pr-3 py-2.5 text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>
              </div>

              <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>FDIC Insurance Coverage</span>
                </div>
                <p>
                  Funds deposited into Eastern Bank are protected by the FDIC up to $250,000 per depositor.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-[#E8590C] hover:bg-[#D9480F] text-white font-bold text-sm rounded-lg flex items-center gap-2 shadow-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <span>Submit & Open Account</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 4: Success Screen */}
          {step === 4 && (
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Approved Instantly
                </span>
                <h4 className="text-2xl font-bold text-[#002D62]">Congratulations, {formData.firstName || 'Valued Customer'}!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your new Eastern Bank account is officially open and ready for everyday banking.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>Account Number:</span>
                  <span className="font-mono font-bold text-slate-900">•••• •••• 9284</span>
                </div>
                <div className="flex justify-between">
                  <span>Routing Number:</span>
                  <span className="font-mono text-slate-900">011001234</span>
                </div>
                <div className="flex justify-between">
                  <span>Initial Opening Deposit:</span>
                  <span className="font-bold text-emerald-700">${formData.initialDeposit || '100'}.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Debit Card Status:</span>
                  <span className="text-emerald-700 font-semibold">Ordered (Arrives in 3-5 days)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3 bg-[#002D62] hover:bg-[#002046] text-white font-bold rounded-lg text-sm transition-colors"
              >
                Go to Home Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
