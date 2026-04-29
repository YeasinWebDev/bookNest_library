"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const books = [
  {
    title: "The Silent Forest",
    category: "Fiction",
    desc: "A haunting journey through the forgotten landscapes of Northern Europe, exploring themes of solitude.",
    price: 24.99,
    rating: 4.8,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArn_voleU68eKH18kYrsieeaSKRp8q-YzVmsm6TElNOaZAosqwXRvb4C2bJ8RRTMroyXaQMQQ_lSWA8M0MgRhHZxZK39hnRHOFW6QmepyDwyNZVwTY16nKYoN6Dc9qpFQER589uV4wai5HayxqLtaVEwEZizS3bIzLfkhwUjWmodLyVB6ll6xfVW1fpKhea-cSynQHSZ7w6iCSBD0Pxpzib-TWzFPRrTP_EOxpalnGrYP8m564157RpFEWmJqq-F3SaGMB73hlqiDA",
  },
  {
    title: "Principles of Form",
    category: "Design",
    desc: "Understanding the foundational elements of modern industrial design and spatial harmony.",
    price: 45.0,
    rating: 4.9,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-MWadvutSWOBySRGpuevTR0E2RfFJACcQPwhXWUN4sEf6GXDnSr_QGCzqrE4FolW9zb9DwsdlW1FozH2BlN4qB2hjOvRNs8HqVw2rWHBMC9oZ0XuRiRIwUmSeQNIHkPsDs8zQv1oIAzzinliUBX8yXusSyz-ZG1FlKKNkH8Aa_rTbO3Mtb6qi2Cn6YPHwjnitNHzPUoz7xrFQnAbbAnnZ1AWUbQ-doZnRlgaJPs3bgr9jY2LlOVNWKf-vdvh53d9T60LSCZE6WqFz",
  },
  {
    title: "Echoes of Athens",
    category: "History",
    desc: "An immersive retelling of democratic foundations and the philosophical giants of the old world.",
    price: 19.99,
    rating: 4.7,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbE_21CAfMYfZERGzxRG2otxRNwXtlmxsOZPxYgwHOy-cV34uoUWvjzNeqUSTw9MYropNNHa-iaGlPdsLaqsq_2mANO7qrSLK1Ln5xDuljz5CFrxt0-0O8Exr5k2bfiPXroXicGRRQyZyVmR9Kke8W9IPPLi5m-o8M6iqO-5rjImuM2JIU6R-l3xVrH1wT4fhTzjGySjfQ_odUzSDGvmmX-nhWnL5TOdvF8vbPqgT40tlM0Nn5_mA_Z-xiUZy0idY3a4I_qSThvN92",
  },
  {
    title: "Quantum Horizons",
    category: "Science",
    desc: "Demystifying the complex world of subatomic physics for the modern curious mind.",
    price: 29.0,
    rating: 4.9,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz22OuWdbZa8_wuGCz545T97zKQpz6zeomDXPGe9YG4vVIB5Xt5tKgjEoc51gnsZT-jD34z8rXYbc_wEFhJ-VoJCXe0LAW2hWxhQZ-QwToo-p7cQqsTrwW0KElDM-jNIjFuDikZGg3mmL03x52m5uVPuNvvdIVpJal8yWd5FYe3dPJmdFg4e4WcYeBe8LOHMPtiDzRGLSzffu3VYh3kdxTAkCVlcTJAQtyXq0gitvc7IKXAf7OFoTiTCotu671CxSScdbAjo7AB8a9",
  },
  {
    title: "The Modern Table",
    category: "Gastronomy",
    desc: "A visual celebration of farm-to-table cooking and seasonal ingredients from around the world.",
    price: 32.5,
    rating: 4.6,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaPqlQ8ddzgQriHufta2XtQ0MV10IgzxtIzJdWgYQ97Er52-Wq9CfzC-MRPJjKAdM8HXCBMyULcgf8GpWQcQbgkGM1-ijZCgVGAdRAtZwRKGnTd7xhaRPtcc5NfimRAK6vUhsQAHVzbtrk-R6MTvfzlLR39N71X4FXp2qq39lTmLQGNb1-TgWNY1ys1YRH207zg1Ci4OUd-hBnjpggH3QNddqMT3C0rpcfswwgQNevlWdTl4sR6P1ZlvAPi1kvToJWXQpcDf6ajd-Q",
  },
  {
    title: "Paper Raindrops",
    category: "Poetry",
    desc: "A collection of contemporary verse reflecting on urban life and human connection.",
    price: 15.0,
    rating: 5.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4eQtR7UvqoVi88o2D8bWuVZ8LShgxH1K4KB35ZPEuPOq3rQigIV-4EdKhE5qe4N_k_t1O-HvYi4Di1rFwA5v1TkFrXxvoUwLPvIPH4a697dSQIoY_I_Pv4Bn3DyCcUP5PGVMBKpp4Cl-n72b7dm906HGgkfjq7Wc5lHe7DIIQlSBuk55gp0Wfz1WQG6jB3vkOGjmn0h3tP2NMnS1ov2TJnt6uJwQB7DRwx6-d6ZMz_PdOkOhNkdgswG3YGu--6o9G1pK4kXBs6ITo",
  },
];

const categories = ["All Genres", "Fiction", "Non-Fiction", "Philosophy", "Science", "Design", "History", "Poetry", "Gastronomy"];

export default function BooksPageMain() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [openFilter, setOpenFilter] = useState(false);

  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "All Genres";
  const minRating = Number(searchParams.get("rating") || 0);
  const maxPrice = Number(searchParams.get("price") || 100);
  const page = Number(searchParams.get("page") || 1);

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "All Genres" || value === 0) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`);
  };

  const filteredBooks = useMemo(() => {
    return books
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
  }, [q, category, minRating, maxPrice]);

  const perPage = 6;
  const totalPages = Math.ceil(filteredBooks.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedBooks = filteredBooks.slice(start, start + perPage);

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
              {paginatedBooks.map((book, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={book.img}
                      alt={book.title}
                      width={500}
                      height={700}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold rounded-full shadow-sm">${book.price}</div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">{book.category}</span>

                    <h3 className="text-xl font-semibold text-slate-900 mt-2">{book.title}</h3>

                    <p className="text-sm text-slate-600 line-clamp-2 mt-2 mb-6">{book.desc}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        <span className="text-sm font-medium text-slate-700">{book.rating}</span>
                      </div>

                      <button
                        onClick={() => router.push(`/books/${1}`)}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
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
