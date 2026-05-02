"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IBook } from "@/app/types";

interface Props {
  book: IBook;
}

export default function BookCard({ book }: Props) {
  const router = useRouter();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full">
      
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={book.img}
          alt={book.title}
          width={500}
          height={700}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold rounded-full shadow-sm">
          ${book.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase">
          {book.category}
        </span>

        <h3 className="text-xl font-semibold text-slate-900 mt-2">
          {book.title}
        </h3>

        <p className="text-sm text-slate-600 line-clamp-2 mt-2 mb-6">
          {book.desc}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between">
          
          <div className="flex items-center gap-1 text-yellow-500">
            <span
              className="material-symbols-outlined text-base"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="text-sm font-medium text-slate-700">
              {book.rating}
            </span>
          </div>

          <button
            onClick={() => router.push(`/books/${book._id}`)}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}