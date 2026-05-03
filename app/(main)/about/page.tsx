// "use client";

import Image from "next/image";
import Link from "next/link";

// export const dynamic = 'force-dynamic';

export default function AboutPage() {
  return (
    <main className="pt-20 bg-primary/5">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-8 md:px-16 py-16 lg:py-24 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* TEXT */}
          <div className="lg:col-span-7 z-10">
            <span className="inline-block py-1 px-3 bg-indigo-50 text-indigo-600 text-xs sm:text-sm font-semibold rounded-full mb-4">
              ESTABLISHED 2024
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              About BookNest
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              We are redefining the digital reading experience. BookNest is
              more than a library; it's a sanctuary for those who seek
              knowledge, inspiration, and a curated journey through the world's
              most influential texts.
            </p>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhUbyyQbviIGO2bk0_m3BvGkWQgtpjqpMA7Po3xVDcoSpDv3dDFjYtdMBXZC7loWOeOvGhp_2B-IoMYRofIiFei7UC2ZZ3KTWvEVur7jw0uX0FkTrF587Y2o8PsfLi3wAEYS3OtE6oKnD8YvlukqILBjMMWSEeS6a9D5hy8lijSUnFeqTn5P_8xXMYOmdcmPxlerOsTZPx-gHYzGMOU6U6_XhBSMS-AKqsqJvsJooCdmyZVzvvNMfYbjX3bp9lx-QyNp_aG724wIvm"
                alt="Library"
                fill
                className="object-cover"
              />
            </div>

            {/* STAT CARD */}
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-lg border border-slate-200 p-4 sm:p-6 rounded-xl shadow-lg">
              <p className="text-xl sm:text-2xl font-bold text-indigo-600">
                500k+
              </p>
              <p className="text-xs sm:text-sm text-slate-600 uppercase tracking-widest">
                Active Readers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="px-4 sm:px-8 md:px-16 py-16 lg:py-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MISSION */}
          <div className="md:col-span-2 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">
                  auto_stories
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To democratize access to elite literary curation and advanced
                research tools. We believe the right book at the right time can
                change a life.
              </p>
            </div>

            {/* IMAGES */}
            <div className="mt-6 flex gap-3 overflow-x-auto">
              {[
                "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
                "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
              ].map((img) => (
                <div
                  key={img}
                  className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <Image
                    src={img}
                    alt="mission"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* VISION */}
          <div className="bg-indigo-600 text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 opacity-10">
              <span className="material-symbols-outlined text-8xl">
                lightbulb
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              A world where every learner has an intelligent personal library
              that grows with them.
            </p>

            <button className="mt-6 bg-white text-indigo-600 font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition">
              Join the Journey
            </button>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-8 md:px-16 py-16 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">
              The Pillars of BookNest
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["verified", "Elite Curation"],
              ["speed", "High Velocity"],
              ["security", "Data Privacy"],
              ["eco", "Sustainability"],
            ].map(([icon, title]) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition"
              >
                <span className="material-symbols-outlined text-indigo-600 text-3xl mb-4 block">
                  {icon}
                </span>
                <h4 className="font-semibold mb-2">{title}</h4>
                <p className="text-sm text-slate-600">
                  High-quality experience designed for modern readers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 md:px-16 py-16">
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 h-[300px] sm:h-[400px] flex items-center justify-center text-center">
          <Image
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
            alt="cta"
            fill
            className="object-cover opacity-40"
          />

          <div className="relative z-10 px-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Ready to start reading?
            </h2>

            <p className="text-white/80 mb-6 text-sm sm:text-base max-w-xl mx-auto">
              Discover a new standard for your digital library experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/books"
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Explore Books
              </Link>

              <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}