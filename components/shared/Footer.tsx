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
          <a className="text-sm text-slate-500 hover:text-indigo-500 hover:underline underline-offset-4" href="#">
            Home
          </a>
          <a className="text-sm text-slate-500 hover:text-indigo-500 hover:underline underline-offset-4" href="#">
            Books
          </a>
          <a className="text-sm text-slate-500 hover:text-indigo-500 hover:underline underline-offset-4" href="#">
            Categories
          </a>
          <a className="text-sm text-slate-500 hover:text-indigo-500 hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm text-slate-500 hover:text-indigo-500 hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </div>
      </div>

      <div className="text-slate-500 text-sm text-center mt-10">© 2024 BookNest. All rights reserved.</div>
    </footer>
  );
}
