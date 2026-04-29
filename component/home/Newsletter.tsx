"use client"

export default function Newsletter() {
  return (
    <section className="px-8 md:px-16 py-20">
      <div className="max-w-[1280px] mx-auto bg-[#3525cd] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto opacity-90">
            Subscribe to our newsletter and get weekly curated book recommendations
            and exclusive literary news.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="flex-1 px-8 py-4 rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-white/20 bg-white"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-[#fea619] text-black px-8 py-4 rounded-xl font-medium hover:brightness-110 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      </div>
    </section>
  );
}