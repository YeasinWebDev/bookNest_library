import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 md:px-16  gap-6 bg-slate-50 border-t border-slate-200">
      <div className="flex flex-col md:flex-row  justify-between items-center gap-5">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-indigo-600 text-2xl">library_books</span>
            <span className="text-xl font-bold text-indigo-600">BookNest</span>
          </div>
          <p className="text-sm text-slate-500">Curating the world&apos;s best literature for you.</p>
        </div>

        <div className="flex gap-4 lg:gap-8">
          <Link className={`text-sm font-semibold py-1 border-b-2 transition-colors duration-200 `} href="/">
            Home
          </Link>
          <Link className={`text-sm font-medium transition-colors duration-200 border-b-2 `} href="/books">
            Books
          </Link>
          <Link className={`text-sm font-medium transition-colors duration-200 border-b-2 `} href="/about">
            About
          </Link>
          <Link className={`text-sm font-medium transition-colors duration-200 border-b-2 `} href="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className="text-slate-500 text-sm text-center mt-10">© 2024 BookNest. All rights reserved.</div>
    </footer>
  );
}
