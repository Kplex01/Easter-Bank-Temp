"use client";
import React, { useState } from 'react';
import { Lock, ShieldCheck, User, Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'business' | 'wealth'>('personal');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please enter both your username and password.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication check
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setLoginSuccess(false);
    setUsername('');
    setPassword('');
    setErrorMessage('');
    window.location.href = '/';
  };

  return (
    <div className="flex min-h-[calc(100vh-100px)] bg-slate-50">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/images/login.jpg"
          alt="Eastern Bank Mobile Banking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#002D62]/20 mix-blend-multiply" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 py-12">
        <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#002D62] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Eastern Online Banking</h3>
              <p className="text-xs text-blue-200">Secure 256-Bit Encrypted Portal</p>
            </div>
          </div>
        </div>

        {/* Success View */}
        {loginSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-[#002D62]">Welcome Back, {username}!</h4>
              <p className="text-sm text-slate-600">
                You have successfully authenticated to your <span className="font-semibold capitalize">{activeTab} Banking</span> dashboard.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-200 text-xs space-y-1.5 text-slate-600">
              <div className="flex justify-between">
                <span>Account:</span>
                <span className="font-semibold text-slate-800">Premier Checking (...4829)</span>
              </div>
              <div className="flex justify-between">
                <span>Available Balance:</span>
                <span className="font-semibold text-emerald-600">$14,850.32</span>
              </div>
              <div className="flex justify-between">
                <span>Session ID:</span>
                <span className="font-mono text-slate-500">EB-89104-SEC</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 bg-[#002D62] hover:bg-[#002046] text-white font-semibold rounded-lg shadow-sm transition-colors text-sm"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Login Form */
          <div className="p-6 space-y-5">
            {/* Account Type Tabs */}
            <div className="flex rounded-lg bg-slate-100 p-1 text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setActiveTab('personal')}
                className={`flex-1 py-2 rounded-md transition-all ${
                  activeTab === 'personal'
                    ? 'bg-white text-[#002D62] shadow-sm font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                Personal
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('business')}
                className={`flex-1 py-2 rounded-md transition-all ${
                  activeTab === 'business'
                    ? 'bg-white text-[#002D62] shadow-sm font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                Business
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('wealth')}
                className={`flex-1 py-2 rounded-md transition-all ${
                  activeTab === 'wealth'
                    ? 'bg-white text-[#002D62] shadow-sm font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                Wealth Portal
              </button>
            </div>

            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {activeTab === 'business' ? 'Company ID / User ID' : 'Username'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={activeTab === 'business' ? 'Enter corporate ID' : 'Enter username'}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#002D62] focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#002D62] focus:ring-[#002D62]"
                  />
                  <span>Remember username</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password recovery link has been sent to your registered email.')}
                  className="text-[#002D62] font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-[#002D62] hover:bg-[#002046] disabled:opacity-75 text-white font-bold rounded-lg shadow-sm transition-colors text-sm flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <span>Log In to {activeTab === 'personal' ? 'Personal' : activeTab === 'business' ? 'Business' : 'Wealth'}</span>
                )}
              </button>
            </form>

            {/* Quick Demo Fill */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  setUsername('AlexRivers');
                  setPassword('Password2024!');
                }}
                className="text-xs text-slate-500 hover:text-[#002D62] underline"
              >
                Auto-fill demo test credentials
              </button>
            </div>

            {/* Footer security badge */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>FDIC Insured & Protected</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  window.location.href = '/apply';
                }}
                className="text-[#E8590C] font-semibold hover:underline"
              >
                New user? Enroll
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}
