import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PaginationData {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface BlogPaginationProps {
  pagination: PaginationData;
}

export default function BlogPagination({
  pagination,
}: BlogPaginationProps) {
  const {
    page,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = pagination;

  if (totalPages <= 1) return null;

  function createPageUrl(pageNumber: number) {
    return `/blog?page=${pageNumber}`;
  }

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {/* PREVIOUS */}
      {hasPrevPage ? (
        <Link
          href={createPageUrl(page - 1)}
          className="flex h-10 items-center gap-1 border border-slate-200 bg-white px-4 text-sm font-medium text-[#16213a] transition hover:border-[#4285F4] hover:text-[#4285F4]"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      ) : (
        <span className="flex h-10 items-center gap-1 border border-slate-100 bg-slate-50 px-4 text-sm text-slate-300">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </span>
      )}

      {/* PAGE NUMBERS */}
      <div className="flex items-center gap-1">
        {Array.from(
          { length: totalPages },
          (_, index) => index + 1
        )
          .filter((pageNumber) => {
            return (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              Math.abs(pageNumber - page) <= 1
            );
          })
          .map((pageNumber, index, visiblePages) => {
            const previousPage = visiblePages[index - 1];

            const showDots =
              previousPage &&
              pageNumber - previousPage > 1;

            return (
              <div key={pageNumber} className="flex items-center gap-1">
                {showDots && (
                  <span className="px-2 text-slate-400">
                    ...
                  </span>
                )}

                <Link
                  href={createPageUrl(pageNumber)}
                  className={`flex h-10 min-w-10 items-center justify-center border px-3 text-sm font-semibold transition ${
                    pageNumber === page
                      ? "border-[#4285F4] bg-[#4285F4] text-white"
                      : "border-slate-200 bg-white text-[#16213a] hover:border-[#4285F4] hover:text-[#4285F4]"
                  }`}
                >
                  {pageNumber}
                </Link>
              </div>
            );
          })}
      </div>

      {/* NEXT */}
      {hasNextPage ? (
        <Link
          href={createPageUrl(page + 1)}
          className="flex h-10 items-center gap-1 border border-slate-200 bg-white px-4 text-sm font-medium text-[#16213a] transition hover:border-[#4285F4] hover:text-[#4285F4]"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span className="flex h-10 items-center gap-1 border border-slate-100 bg-slate-50 px-4 text-sm text-slate-300">
          Next
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}