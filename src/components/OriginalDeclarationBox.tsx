import React from 'react';
import { ShieldCheck } from 'lucide-react';
import {
  ORIGINAL_DECLARATION_CHECKBOX_LABEL,
  ORIGINAL_DECLARATION_TEXT
} from '../data/communitySeeds';

interface OriginalDeclarationBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id: string;
}

export const OriginalDeclarationBox: React.FC<OriginalDeclarationBoxProps> = ({
  checked,
  onChange,
  id
}) => {
  return (
    <div
      className={`rounded-2xl border-2 p-4 sm:p-5 transition-colors ${
        checked
          ? 'bg-emerald-50/70 border-emerald-300'
          : 'bg-[#fff5f7] border-[#fecdd3]'
      }`}
    >
      <div className="flex items-start gap-2.5 mb-3">
        <ShieldCheck
          className={`w-5 h-5 shrink-0 mt-0.5 ${
            checked ? 'text-emerald-600' : 'text-[#d94f70]'
          }`}
        />
        <p className="text-[14px] sm:text-[15px] leading-[1.65] font-semibold text-slate-800">
          {ORIGINAL_DECLARATION_TEXT}
        </p>
      </div>

      <label
        htmlFor={id}
        className="flex items-center gap-3 pt-2.5 border-t border-slate-200/70 cursor-pointer select-none"
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 rounded-md accent-[#d94f70] cursor-pointer shrink-0"
        />
        <span className="text-[15px] sm:text-[16px] font-extrabold text-slate-900 leading-snug">
          {ORIGINAL_DECLARATION_CHECKBOX_LABEL}
        </span>
      </label>
    </div>
  );
};
