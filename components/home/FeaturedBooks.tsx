import Image from "next/image";
import { FaStar } from "react-icons/fa";

const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    rating: "4.8",
    price: "$18.50",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFV28SbpGA7qUW2fDRlTy4FrOguUKiR7nK6I05dNdsFVwTQv0oWCx7KSwDAqDwDKGLo_FYwMWf7ap4hzcSK3A4H1-sW2q38HoBlRSGi9RYgl4ZD3CKgeHuAi3cnuINl8y8kXiqGD4Z_TBb23qlWVZgu_JIhesaZevWlVkROloDAO_DbZmYEok_GsgEloxPqIUaj_wpUgnrV7S5TkUYIz2NgeYIDGSWuQXtBLUkkGzM9VRi50Zmi2bYZ1R_nocHCxsudF8PmdCJgHQM",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    rating: "4.9",
    price: "$22.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA14YZupvaR2gnqpX_3v6zHSirThb_7AnFwxOpF7cqhDJPi1CgZAHwWUs22JiVGlxdfkyombuWxrurO-9odJIjwdR6Z0xDd2lCvyiYg_hPaX0AkzbXUIME8NcykahnrxOsO6-CJiv4SJLKMrbN5_1POo4iAjCus0NFS_98uPhZYfoCBEFVzViVjVlXQyDjyjJ2cXLTkYp-Ubr8fVbfvBZL1pHovbzDx4gsBnsaTisxWVplPvh5F5KYLeH8gWV1WranmTMybOxPLHeRN",
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    rating: "4.7",
    price: "$15.99",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkkMMvaU6x23PSP4GXLlL7G9TsKP6bS0cknX0b2xlEQlbVmpEYmhW5x7ugwFzuONkYbQgP5W_CRHnY6_vOy202gj5VN2Gsesx_HEb3OA_fOPwQd49h8YosoEBGRwxnf56ZoFtvk7uqTOej2Eabl-_m80ku2z1VeYHzncD02QA99XxIZwfkYs-4kRXGh-Y9eVuPbsWgKY7Kg8R6wtMhJpGE5MRnrGhdAjVn4v4GjBoV1WJkh4hdjFjlyxFmtXSoRyRM8CFI0NTQTl1K",
  },
];

export default function FeaturedBooks() {
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
          {books.map((book, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-100 hover:shadow-[0_10px_25px_rgba(79,70,229,0.08)] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-slate-200">
                <Image
                  src={book.img}
                  alt={book.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold leading-tight">
                    {book.title}
                  </h3>

                  <div className="flex items-center text-secondary">
                    <FaStar className="text-[#855300] size-4" />
                    <span className="text-sm ml-1">{book.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-4">{book.author}</p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">
                    {book.price}
                  </span>

                  <button className="bg-indigo-600/5 text-indigo-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}