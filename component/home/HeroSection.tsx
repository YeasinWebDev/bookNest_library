import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative px-8 md:px-16 py-16 overflow-hidden bg-[#fcf8ff]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <h1 className="text-5xl font-bold text-on-surface mb-4">
            Discover Your Next <span className="text-indigo-600">Favorite Book</span>
          </h1>

          <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
            Explore an curated sanctuary of modern literature and timeless classics.
            Join our community of readers and find stories that resonate.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-medium shadow-lg shadow-indigo-500/20 hover:scale-[1.02] transition-transform cursor-pointer">
              Explore Books
            </button>

            <button className="border border-outline-variant bg-white text-indigo-600 px-10 py-4 rounded-xl font-medium hover:bg-slate-50 transition-colors cursor-pointer">
              Membership Plans
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 bg-slate-100">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwFVfS0tgOcRTh785hWm2AkrR1u4lap3ni0IzeiRLzA1Q0_OPY4NXtO3-O2mfvJmAfIffMw6ALUPE7vvnvUx9xx3ZThz2wn_J-mKG5b9WEiF6tQkatbAV9IrmZxJalDWCqcr5Pagh8R30u2lBrEb4T6d_WHmqR-0gGdDAlFRSu8XDg7-XFp1y7OTJM5JD8hvP7_t4KBFxlIFp8Apq6mwf6WphvuLRiey1dbHjxRNQQi3cfkoIssCjUzHhEr5bPXKX8RYh6nDmh5MM"
              alt="Book image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-2">
            <FaStar className="text-[#855300] size-5" />

            <div className="flex flex-col">
              <span className="text-sm font-semibold">Top Rated Library</span>
              <span className="text-xs text-on-surface-variant">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}