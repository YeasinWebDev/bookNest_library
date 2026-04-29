"use client";

import Image from "next/image";
import Link from "next/link";

export default function BookDetailsPage() {
  return (
    <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 ">
      {/* Back Button */}
      <Link
        href="/books"
        className="inline-flex items-center gap-2 mb-6 sm:mb-10 text-indigo-600 hover:opacity-80 transition-opacity"
      >
        <span className="material-symbols-outlined text-base">
          arrow_back
        </span>
        <span className="text-sm font-semibold">Back to Books</span>
      </Link>

      {/* HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
        {/* IMAGE */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-3 sm:p-4 border border-slate-200">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP1pPdvetmzTJadkDk5U89QOQ5XNzE1KyISXdXoP7Ps04eSMu9JGkpRQfi2KQSyf1t45vWspMem4tY4aXxJqOGQOPfFq0qxqsUY1PGFhW_FSPU4oX8uHVVAXL3exoI75WProrBa983ZGeTYvf62ty13TxwG8Mq9SiB_Xzeg2bTcwOjyM_UJpI0bHgcNklnHGJXiAHSdIhOWTQbOTNqmiIYsEiFOIC7aZsLpUMcy6li0aVY203wjTH7zHxOJQK4F5fwTlTu-7LrVUIW"
              alt="Book Cover"
              width={800}
              height={1100}
              className="w-full h-auto md:h-[20rem] lg:h-[30rem] object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* INFO */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs sm:text-sm font-semibold">
              Contemporary Fiction
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-slate-500 text-xs sm:text-sm">
              Published Oct 2023
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-2">
            The Midnight Library
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-5 sm:mb-8">
            by Matt Haig
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
            <div className="flex items-center text-yellow-500">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}

              <span className="material-symbols-outlined">star_half</span>
            </div>

            <span className="text-sm font-semibold text-slate-800">
              4.8 (2.4k Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 sm:gap-4 mb-6 sm:mb-10">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">
              $24.99
            </span>
            <span className="text-slate-400 line-through text-base sm:text-lg">
              $32.00
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {/* Quantity */}
            <div className="flex items-center h-12 sm:h-14 bg-slate-100 border border-slate-200 rounded-xl px-2 gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200">
                <span className="material-symbols-outlined text-[18px]">
                  remove
                </span>
              </button>

              <span className="text-sm font-semibold w-6 text-center">1</span>

              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-200">
                <span className="material-symbols-outlined text-[18px]">
                  add
                </span>
              </button>
            </div>

            <button className="px-5 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-lg shadow-indigo-500/20 text-sm sm:text-base">
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
              Add to Cart
            </button>

            <button className="px-5 sm:px-8 py-3 sm:py-4 bg-amber-100 text-amber-900 rounded-xl font-semibold hover:opacity-90 transition text-sm sm:text-base">
              Buy Now
            </button>

            <button className="w-12 h-12 sm:w-14 sm:h-14 border border-slate-200 flex items-center justify-center rounded-xl hover:bg-slate-50 transition">
              <span className="material-symbols-outlined text-slate-600">
                favorite
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        {/* Description */}
        <div className="md:col-span-2 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Description
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Between life and death there is a library, and within that library,
            the shelves go on forever...
            <br />
            <br />
            Nora Seed must explore different lives to understand what truly
            makes life worth living.
          </p>
        </div>

        {/* Specs */}
        <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Key Specifications
          </h3>

          {[
            ["Format", "Hardcover"],
            ["Pages", "304 pages"],
            ["Language", "English"],
            ["Publisher", "Viking"],
            ["Dimensions", "5.2 x 1 x 8.1 in"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between py-2 border-b border-slate-200 text-sm sm:text-base"
            >
              <span className="text-slate-500">{k}</span>
              <span className="font-semibold text-slate-900">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RELATED */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Related Books
        </h2>
        <p className="text-slate-500 mb-8 text-sm sm:text-base">
          Books you might also enjoy
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["The Humans", "Anxious People", "Addie LaRue", "The Starless Sea"].map(
            (title) => (
              <div key={title} className="group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-3 border border-slate-200">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_ysviuEIPb8rGgEbSs0XkYeTGT3MyH3ypdJRdAC4aZx_tsW10jH1G3wKqid64B-pFnfUjGvuq1T_x0oYfVJQyrbu09ZuzU_U2gnYo3lIFFUio4YnTprTlgDhRxIY1M82TCVuyhJ8DWyoeaBsPz8ECzUvW_dzn3wn9zk8LpzpqoQ2MiXrmR4XIm-8QB0sLfSnt_yJEf-rM6w0rmGE_09FR5nAY0JginDI7elsI4k1FfJR_PDnKH_ILhDxyXEAaHq7HlpDrRfmkwhD"
                    alt={title}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                <h4 className="font-semibold group-hover:text-indigo-600">
                  {title}
                </h4>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}