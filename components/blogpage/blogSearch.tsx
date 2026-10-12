"use client";

import { FormEvent, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const [search, setSearch] = useState(currentSearch);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    params.delete("page");

    router.push(`/blog?${params.toString()}`);
  }

  function clearSearch() {
    setSearch("");

    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("page");

    const query = params.toString();

    router.push(query ? `/blog?${query}` : "/blog");
  }

  return (
    <section className="border-b border-slate-200 bg-white py-8">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-3xl items-center border border-slate-300 bg-white"
        >
          <Search className="ml-4 h-5 w-5 shrink-0 text-slate-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search SEO, PPC, AI SEO, AEO..."
            className="h-14 w-full bg-transparent px-4 text-sm text-[#16213a] outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              type="button"
              onClick={clearSearch}
              className="mr-2 p-2 text-slate-400 transition hover:text-slate-700"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <button
            type="submit"
            className="mr-1 h-12 bg-[#4285F4] px-6 text-sm font-semibold text-white transition hover:bg-[#3367d6]"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}