import React, { useState } from 'react';
import { Flag, Loader2, ShieldAlert, X } from 'lucide-react';
import {
  MAX_REPORTS_BEFORE_AUTO_DELETE,
  REPORT_REASON_DEFAULT,
  REPORT_REASON_OPTIONS,
  UGC_SEO_SAFE_FOOTER_TEXT
} from '../data/communitySeeds';

interface PostReportPanelProps {
  reportCount: number;
  isReporting?: boolean;
  isAdminModerator?: boolean;
  onSubmitReport: (reason: string) => Promise<void> | void;
  compactButton?: boolean;
}

export const PostReportTriggerAndDrawer: React.FC<PostReportPanelProps> = ({
  reportCount,
  isReporting = false,
  isAdminModerator = false,
  onSubmitReport,
  compactButton = false
}) => {
  const [open, setOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string>(REPORT_REASON_DEFAULT);

  const safeCount = Math.max(0, Math.min(MAX_REPORTS_BEFORE_AUTO_DELETE, reportCount));

  const handleConfirm = async () => {
    await onSubmitReport(selectedReason);
    setOpen(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-end">
        <button
          type="button"
          disabled={isReporting}
          onClick={() => setOpen((prev) => !prev)}
          title={
            isAdminModerator
              ? 'Admin Power: 1 Report = Instant Auto Delete'
              : 'Report copied or inappropriate post (3 Reports = Auto Delete)'
          }
          className={`${
            compactButton ? 'min-h-[42px] px-3 py-1.5 text-[14px]' : 'min-h-[46px] px-3.5 py-2 text-[15px]'
          } rounded-xl font-bold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap border ${
            open || safeCount > 0
              ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100'
              : 'bg-white text-slate-600 border-slate-200 hover:text-red-600 hover:border-red-200 hover:bg-red-50/60'
          } disabled:opacity-50`}
        >
          {isReporting ? (
            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
          ) : (
            <Flag className="w-4 h-4 shrink-0" />
          )}
          <span>
            {isAdminModerator
              ? 'Admin Report (1=Delete)'
              : safeCount > 0
                ? `Report (${safeCount}/${MAX_REPORTS_BEFORE_AUTO_DELETE})`
                : 'Report'}
          </span>
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-2xl bg-red-50/90 border border-red-200 p-3.5 sm:p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 text-red-800 font-extrabold text-[14px] sm:text-[15px]">
              <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
              <span>
                Report Reason: {REPORT_REASON_DEFAULT}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close report options"
              className="p-1 rounded-lg text-red-700 hover:bg-red-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {REPORT_REASON_OPTIONS.map((reason) => {
              const active = selectedReason === reason;
              return (
                <button
                  key={reason}
                  type="button"
                  onClick={() => setSelectedReason(reason)}
                  className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-bold border transition-colors cursor-pointer ${
                    active
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-white text-slate-800 border-red-200 hover:border-red-400'
                  }`}
                >
                  {reason}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span className="text-[12px] sm:text-[13px] font-semibold text-red-800">
              {isAdminModerator
                ? 'Admin Mode Active: 1 Report karte hi post turant Auto-Delete ho jayegi.'
                : `Current Reports: ${safeCount}/${MAX_REPORTS_BEFORE_AUTO_DELETE} · 3 Report aate hi post turant Auto-Delete!`}
            </span>

            <button
              type="button"
              disabled={isReporting}
              onClick={handleConfirm}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-[14px] font-extrabold inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              {isReporting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Flag className="w-4 h-4" />
              )}
              <span>
                {isAdminModerator ? '1-Report Auto Delete' : 'Submit Report'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const UgcSeoSafeFooter: React.FC = () => {
  return (
    <div className="px-4 sm:px-5 py-3 bg-slate-50 border-t border-slate-200/80 text-[12px] sm:text-[13px] leading-[1.6] text-slate-600 font-medium">
      {UGC_SEO_SAFE_FOOTER_TEXT}
    </div>
  );
};
