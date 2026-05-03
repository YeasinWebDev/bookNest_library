"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IBook } from "@/app/types";
import BookCard from "@/components/BookCard";
import { getBooks } from "@/app/actions/books";

const categories = ["All Genres", "Fiction", "Non-Fiction", "Philosophy", "Science", "Design", "History", "Poetry", "Gastronomy"];

export default function BooksPageMain() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openFilter, setOpenFilter] = useState(false);
  const [books, setBooks] = useState<IBook[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "All Genres";
  const minRating = Number(searchParams.get("rating") || 0);
  const maxPrice = Number(searchParams.get("price") || 100);
  const page = Number(searchParams.get("page") || 1);

  const updateParams = (key: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "All Genres" || value === 0) {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`);
  };

  const filteredBooks = books
    .filter((book) => {
      if (category !== "All Genres" && book.category !== category) return false;
      if (book.rating < minRating) return false;
      if (book.price > maxPrice) return false;

      if (q) {
        const search = q.toLowerCase();
        if (!book.title.toLowerCase().includes(search)) return false;
      }

      return true;
    })
    .sort((a, b) => b.rating - a.rating);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <label className="text-sm font-medium text-slate-700 mb-2 block">Category</label>

        <select
          value={category}
          onChange={(e) => updateParams("category", e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="text-sm font-medium text-slate-700 mb-2 block">Max Price: ${maxPrice}</label>

        <input value={maxPrice} onChange={(e) => updateParams("price", e.target.value)} min={0} max={100} className="w-full accent-indigo-600" type="range" />

        <div className="flex justify-between mt-2 text-xs text-slate-500">
          <span>$0</span>
          <span>$100+</span>
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="text-sm font-medium text-slate-700 mb-2 block">Minimum Rating</label>

        <div className="space-y-2">
          {[0, 4, 4.5, 4.8].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input
                checked={minRating === r}
                onChange={() => updateParams("rating", r)}
                className="w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500/20"
                name="rating"
                type="radio"
              />
              <span className="text-sm text-slate-700">{r === 0 ? "Any Rating" : `${r}+`}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          router.push("/books");
          setOpenFilter(false);
        }}
        className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-black transition-colors"
      >
        Reset Filters
      </button>
    </div>
  );

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks(category, q, maxPrice, minRating, page);
      
      setBooks(data?.data?.books || []);
      setTotalPages(data?.data?.totalPages || 1);
    };
    fetchBooks();
  }, [q, category, minRating, maxPrice, page]);


  return (
    <main className="bg-primary/5 pb-20">
      <div className="pt-20 px-6 md:px-14 max-w-screen-2xl mx-auto h-full">
        {/* Search Section */}
        <section className="mt-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl w-full">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Explore Our Collection</h1>

              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  search
                </span>

                <input
                  value={q}
                  onChange={(e) => updateParams("q", e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none transition-all text-slate-900 shadow-sm"
                  placeholder="Search by title..."
                  type="text"
                />
              </div>
            </div>

            {/* Mobile Filter Sheet */}
            <Sheet open={openFilter} onOpenChange={setOpenFilter}>
              <SheetTrigger asChild>
                <button className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:opacity-90 transition">
                  <span className="material-symbols-outlined">tune</span>
                  Filters
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[90%] sm:w-[420px] p-0 bg-white rounded-l-3xl border-l border-slate-200 shadow-2xl">
                {/* Sticky Header */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-indigo-600">tune</span>
                    <h2 className="text-lg font-semibold text-slate-900">Filters</h2>
                  </div>

                  <button onClick={() => setOpenFilter(false)} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition">
                    <span className="material-symbols-outlined text-slate-700">close</span>
                  </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6 overflow-y-auto h-[calc(100vh-140px)]">
                  <FilterContent />
                </div>

                {/* Sticky Footer */}
                <div className="sticky bottom-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 px-6 py-4 flex gap-3">
                  <button
                    onClick={() => {
                      router.push("/books");
                      setOpenFilter(false);
                    }}
                    className="w-1/2 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition"
                  >
                    Reset
                  </button>

                  <button onClick={() => setOpenFilter(false)} className="w-1/2 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:opacity-90 transition">
                    Apply
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-72 flex-shrink-0">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900">
                <span className="material-symbols-outlined text-indigo-600">tune</span>
                Filters
              </h2>

              <FilterContent />
            </div>
          </aside>

          {/* Books */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBooks.map((book: IBook, index: number) => (
                <BookCard key={index} book={book} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-center gap-2">
                <button
                  disabled={page <= 1}
                  onClick={() => updateParams("page", page - 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {Array.from({ length: totalPages })
                  .slice(0, 12)
                  .map((_, i) => {
                    const p = i + 1;
                    return (
                      <button
                        key={p}
                        onClick={() => updateParams("page", p)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold transition ${
                          page === p ? "bg-indigo-600 text-white" : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}

                <button
                  disabled={page >= totalPages}
                  onClick={() => updateParams("page", page + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:bg-slate-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
