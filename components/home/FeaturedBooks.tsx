"use client"

import { IBook } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import BookCard from "../BookCard";
import { getBooks } from "@/app/actions/books";

export default function FeaturedBooks() {
  const [books, setBooks] = useState<IBook[]>([]);

    useEffect(() => {
      const fetchBooks = async () => {
        const data = await getBooks();
        
        setBooks(data?.data?.books || []);
      };
      fetchBooks();
    }, []);
  return (
    <section className="px-8 md:px-16 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">
              Editor&apos;s Choice
            </span>
            <h2 className="text-3xl font-semibold mt-2">Featured Books</h2>
          </div>

          <button className="text-indigo-600 font-medium flex items-center gap-1 hover:underline underline-offset-4">
            View All{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.slice(0, 3).map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}