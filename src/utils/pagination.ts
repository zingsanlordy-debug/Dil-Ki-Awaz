export interface PageRange {
  page: number; // 1-indexed
  start: number; // 0-indexed inclusive
  end: number; // 0-indexed exclusive
}

/**
 * Dynamic Pagination Rule for ZQ FEELINGS:
 * - <= 25 shayari: 1 page only
 * - > 25 shayari (including 36-50 & 50+): strict 20+20 per page (e.g. 40 -> 20+20, 50 -> 20+20+10, 60 -> 20+20+20)
 */
export function computeShayariPageRanges(total: number, customPageSize?: number): PageRange[] {
  if (total <= 0) {
    return [{ page: 1, start: 0, end: 0 }];
  }

  // 100 or 125 items (e.g. Diwali) -> strict pages of 25 each: 1-25, 26-50, 51-75, 76-100, 101-125
  const pageSize = customPageSize || (total === 100 || total === 125 ? 25 : total <= 25 ? total : 20);

  if (total <= pageSize) {
    return [{ page: 1, start: 0, end: total }];
  }

  const ranges: PageRange[] = [];
  let cursor = 0;
  let pageNum = 1;
  while (cursor < total) {
    const nextEnd = Math.min(cursor + pageSize, total);
    ranges.push({
      page: pageNum,
      start: cursor,
      end: nextEnd
    });
    cursor = nextEnd;
    pageNum += 1;
  }

  return ranges;
}

export function getPaginatedSlice<T>(
  items: readonly T[],
  currentPage: number,
  customPageSize?: number
): {
  pageItems: T[];
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  totalItems: number;
  ranges: PageRange[];
} {
  const ranges = computeShayariPageRanges(items.length, customPageSize);
  const totalPages = ranges.length;
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const activeRange = ranges[safePage - 1] || { page: 1, start: 0, end: items.length };

  return {
    pageItems: items.slice(activeRange.start, activeRange.end),
    currentPage: safePage,
    totalPages,
    startIndex: activeRange.start,
    endIndex: activeRange.end,
    totalItems: items.length,
    ranges
  };
}
