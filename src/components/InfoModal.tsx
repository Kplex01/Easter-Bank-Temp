import React from 'react';
import { X, Shield, FileText, CheckCircle } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-none max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="bg-[#002D62] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-none hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>{content}</p>
          <div className="bg-slate-50 p-3 rounded-none border border-slate-200 text-xs text-slate-500">
            For specific compliance or regulatory questions, please contact Eastern Bank Legal & Compliance at compliance@easternbank.com or call 1-800-EASTERN.
          </div>
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#002D62] text-white font-semibold rounded-none text-xs hover:bg-[#00224A]"
          >
            Close Disclosures
          </button>
        </div>
      </div>
    </div>
  );
};
