import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ShayariPaginationProps {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  onPageChange: (nextPage: number) => void;
  getPageHref?: (page: number) => string;
}

function getVisiblePageItems(currentPage: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  const pages = new Set<number>([1, totalPages]);
  if (currentPage <= 5) {
    for (let p = 1; p <= Math.min(8, totalPages); p++) pages.add(p);
  } else if (currentPage >= totalPages - 4) {
    for (let p = Math.max(1, totalPages - 6); p <= totalPages; p++) pages.add(p);
  } else {
    for (let p = currentPage - 2; p <= currentPage + 2; p++) pages.add(p);
  }

  const sorted = Array.from(pages).sort((a, b) => a - b);
  const out: Array<number | 'ellipsis'> = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] - sorted[i - 1] > 1) {
      out.push('ellipsis');
    }
    out.push(sorted[i]);
  }
  return out;
}

export const ShayariPagination: React.FC<ShayariPaginationProps> = ({
  currentPage,
  totalPages,
  startIndex,
  endIndex,
  totalItems,
  onPageChange,
  getPageHref
}) => {
  if (totalPages <= 1 || totalItems <= 0) {
    return null;
  }

  const handleSelectPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const visibleItems = getVisiblePageItems(currentPage, totalPages);
  const prevClassName =
    'min-h-[48px] px-4 sm:px-6 py-2.5 rounded-2xl border-2 border-[#ffe4e8] bg-white hover:bg-[#fff0f3] hover:border-[#d94f70] text-slate-900 hover:text-[#d94f70] disabled:opacity-40 disabled:pointer-events-none font-extrabold text-[15px] sm:text-[16px] inline-flex items-center gap-2 cursor-pointer transition-all shadow-2xs';
  const nextClassName =
    'min-h-[48px] px-4 sm:px-6 py-2.5 rounded-2xl border-2 border-[#d94f70] bg-[#d94f70] hover:bg-[#b32f4f] text-white disabled:opacity-40 disabled:pointer-events-none font-extrabold text-[15px] sm:text-[16px] inline-flex items-center gap-2 cursor-pointer transition-all shadow-sm';

  return (
    <nav
      aria-label="Shayari Pagination"
      className="mt-8 pt-6 border-t-2 border-[#ffe4e8] flex flex-col items-center gap-4"
    >
      <p className="text-[15px] sm:text-[16px] font-bold text-slate-600 tabular-nums text-center">
        Page {currentPage} of {totalPages} &bull; Shayari {startIndex + 1}&ndash;{endIndex} of{' '}
        {totalItems}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
        {getPageHref && currentPage > 1 ? (
          <a
            href={getPageHref(currentPage - 1)}
            onClick={(e) => {
              e.preventDefault();
              handleSelectPage(currentPage - 1);
            }}
            className={prevClassName}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </a>
        ) : (
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => handleSelectPage(currentPage - 1)}
            className={prevClassName}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
        )}

        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {visibleItems.map((item, idx) => {
            if (item === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${idx}`}
                  aria-hidden="true"
                  className="px-1.5 text-slate-400 font-extrabold select-none"
                >
                  &hellip;
                </span>
              );
            }
            const pg = item;
            const isActive = pg === currentPage;
            const pageBtnClass = `min-w-[44px] min-h-[44px] px-3 py-2 rounded-xl text-[15px] sm:text-[16px] font-extrabold tabular-nums transition-all cursor-pointer border-2 inline-flex items-center justify-center ${
              isActive
                ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-sm'
                : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
            }`;

            if (getPageHref) {
              return (
                <a
                  key={pg}
                  href={getPageHref(pg)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPage(pg);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={pageBtnClass}
                >
                  {pg}
                </a>
              );
            }

            return (
              <button
                key={pg}
                type="button"
                onClick={() => handleSelectPage(pg)}
                aria-current={isActive ? 'page' : undefined}
                className={pageBtnClass}
              >
                {pg}
              </button>
            );
          })}
        </div>

        {getPageHref && currentPage < totalPages ? (
          <a
            href={getPageHref(currentPage + 1)}
            onClick={(e) => {
              e.preventDefault();
              handleSelectPage(currentPage + 1);
            }}
            className={nextClassName}
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        ) : (
          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => handleSelectPage(currentPage + 1)}
            className={nextClassName}
          >
            <span>Next</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </nav>
  );
};
