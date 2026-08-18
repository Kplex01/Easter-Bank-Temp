"use client";
import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Calculator, DollarSign, Percent, Sparkles } from 'lucide-react';
import { CD_RATES } from '../data/mockData';
import { useUIStore } from '../store/useUIStore';

export const ProductDetailModal: React.FC = () => {
  const { selectedProduct: product, setSelectedProduct, setApplyOpen } = useUIStore();
  // CD Calculator State
  const [cdAmount, setCdAmount] = useState(10000);
  const [selectedCdIndex, setSelectedCdIndex] = useState(1); // 11-Month CD Special

  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(450000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTermYears, setLoanTermYears] = useState(30);
  const [interestRate, setInterestRate] = useState(6.25);

  if (!product) return null;

  // Mortgage calculation helper
  const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
  const principal = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;
  const monthlyMortgagePayment =
    monthlyRate > 0
      ? (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
      : principal / numberOfPayments;

  // CD calculation helper
  const chosenCd = CD_RATES[selectedCdIndex];
  const cdRateNum = parseFloat(chosenCd.apy) / 100;
  const months = parseInt(chosenCd.term);
  const totalCdEarnings = (cdAmount * cdRateNum * (months / 12));
  const finalCdBalance = cdAmount + totalCdEarnings;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedProduct(null);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-none max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#002D62] text-white px-6 py-5 flex items-center justify-between flex-shrink-0">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              {product.details?.badge || 'Eastern Bank Solution'}
            </span>
            <h3 className="font-bold text-2xl tracking-tight">{product.title}</h3>
          </div>
          <button
            onClick={() => setSelectedProduct(null)}
            className="text-white/80 hover:text-white p-1.5 rounded-none hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Rate Banner */}
          {product.details?.rate && (
            <div className="bg-amber-50/80 border border-amber-200 rounded-none p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wide">Featured Offer</span>
                <p className="text-base font-bold text-[#002D62]">{product.details.rate}</p>
              </div>
              <span className="text-xs font-semibold text-amber-800 bg-amber-200/70 px-2.5 py-1 rounded-none">
                {product.details.minDeposit}
              </span>
            </div>
          )}

          {/* Product Description */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Key Features & Inclusions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.details?.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-none border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Calculator Section based on Product Type */}
          {product.id === 'savings' && (
            <div className="bg-blue-50/60 p-5 rounded-none border border-blue-200 space-y-4">
              <div className="flex items-center gap-2 text-[#002D62] font-bold text-sm">
                <Calculator className="w-4 h-4" />
                <span>Certificate of Deposit (CD) Return Estimator</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Deposit Principal:</span>
                    <span className="font-bold text-[#002D62]">${cdAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={cdAmount}
                    onChange={(e) => setCdAmount(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-none appearance-none cursor-pointer accent-[#002D62]"
                  />
                </div>

                <div>
                  <span className="block text-xs font-semibold text-slate-700 mb-1.5">Select Term:</span>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {CD_RATES.map((cd, index) => (
                      <button
                        key={cd.term}
                        type="button"
                        onClick={() => setSelectedCdIndex(index)}
                        className={`p-2 rounded-none text-center border transition-all ${
                          selectedCdIndex === index
                            ? 'bg-[#002D62] text-white border-[#002D62] font-bold shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="text-[11px] truncate">{cd.term}</div>
                        <div className="text-xs font-extrabold">{cd.apy}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-white rounded-none border border-blue-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500">Estimated Interest Earned:</span>
                    <p className="text-base font-extrabold text-emerald-600">+${totalCdEarnings.toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500">Total at Maturity:</span>
                    <p className="text-base font-extrabold text-[#002D62]">${finalCdBalance.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {product.id === 'mortgages' && (
            <div className="bg-blue-50/60 p-5 rounded-none border border-blue-200 space-y-4">
              <div className="flex items-center gap-2 text-[#002D62] font-bold text-sm">
                <Calculator className="w-4 h-4" />
                <span>Monthly Mortgage Payment Estimator</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Home Value:</span>
                    <span className="font-bold text-[#002D62]">${homePrice.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="150000"
                    max="1500000"
                    step="10000"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-none appearance-none cursor-pointer accent-[#002D62]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Down Payment ({downPaymentPercent}%):</span>
                    <span className="font-bold text-[#002D62]">${downPaymentAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="50"
                    step="1"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-none appearance-none cursor-pointer accent-[#002D62]"
                  />
                </div>
              </div>

              <div className="p-3 bg-white rounded-none border border-blue-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500">Estimated Principal & Interest:</span>
                  <p className="text-lg font-extrabold text-[#002D62]">
                    ${Math.round(monthlyMortgagePayment).toLocaleString()}/mo
                  </p>
                </div>
                <div className="text-right text-[11px] text-slate-500">
                  <span>Based on {loanTermYears}yr fixed at {interestRate}% APR</span>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Section */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">Member Advantages</h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {product.details?.benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-none bg-[#E58316]"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => setSelectedProduct(null)}
            className="px-4 py-2 text-slate-600 hover:text-slate-900 text-sm font-medium"
          >
            Back
          </button>

          <button
            onClick={() => {
              setSelectedProduct(null);
              setApplyOpen(true);
            }}
            className="px-6 py-2.5 bg-[#E8590C] hover:bg-[#D9480F] text-white font-bold text-sm rounded-none shadow-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Apply for {product.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
