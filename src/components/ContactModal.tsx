import React, { useState } from 'react';
import { X, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Personal Banking Inquiry');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-none max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="bg-[#002D62] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Contact Eastern Bank</h3>
              <p className="text-xs text-blue-200">Customer Support & Inquiries</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-none hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-none flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-lg text-[#002D62]">Message Sent Successfully</h4>
              <p className="text-xs text-slate-600">
                Thank you for reaching out, {name}. An Eastern Bank customer service representative will respond to {email} within 1 business day.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-2.5 bg-[#002D62] text-white font-semibold rounded-none text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Direct Phone Numbers */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none">
                  <span className="font-bold text-slate-700 block">General Support:</span>
                  <a href="tel:+17866655317" className="text-[#002D62] font-semibold hover:underline">
                    +1 (786) 665-5317
                  </a>
                  <p className="text-slate-500 text-[11px] mt-0.5">Mon–Fri: 7am–8pm</p>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-none">
                  <span className="font-bold text-slate-700 block">Lost/Stolen Card:</span>
                  <a href="tel:+17866655317" className="text-red-700 font-semibold hover:underline">
                    +1 (786) 665-5317
                  </a>
                  <p className="text-slate-500 text-[11px] mt-0.5">24/7 Rapid Assistance</p>
                </div>
              </div>

              {/* Message form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  >
                    <option>Personal Banking Inquiry</option>
                    <option>Small Business & Merchant Services</option>
                    <option>Mortgage & Home Lending</option>
                    <option>Online & Mobile Banking Assistance</option>
                    <option>Schedule In-Person Branch Appointment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist you today?"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-none focus:ring-2 focus:ring-[#002D62] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#002D62] hover:bg-[#002046] text-white font-bold text-xs rounded-none flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
