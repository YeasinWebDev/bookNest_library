"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-20 mt-14">
        {/* Header Section */}
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Whether you're a curious reader, a dedicated researcher, or looking for institutional access, our support team is here to help you navigate the sanctuary of BookNest.
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form */}
          <section className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 border border-slate-200 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600">Name</label>
                  <input type="text" placeholder="Alex Researcher" className="w-full h-12 px-4 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>

                <div>
                  <label className="text-sm text-slate-600">Email</label>
                  <input type="email" placeholder="alex@library.com" className="w-full h-12 px-4 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-600">Subject</label>
                <select className="w-full h-12 px-4 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Subscription Help</option>
                  <option>Content Contribution</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-600">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
                />
              </div>

              <button className="w-full md:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition">
                Send Message
              </button>
            </form>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            {/* Contact Info */}
            <div className="bg-slate-50 rounded-2xl p-6 border space-y-6">
              <h3 className="text-xl font-semibold">Ways to Reach Us</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a className="text-indigo-600 font-semibold break-all" href="mailto:support@booknest.com">
                    support@booknest.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a className="font-semibold" href="tel:+1800BOOKNST">
                    +1 800-BOOK-NST
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Address</p>
                  <p className="font-semibold leading-relaxed">
                    123 Library Lane <br />
                    Bookton, BK 54321
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="bg-indigo-600 text-white p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Quick Help</h4>
              <p className="text-white/80 text-sm mb-4">Need instant answers? Visit our help center.</p>
              <Link href="#" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold">
                Help Center
              </Link>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mt-2">Quick answers to common questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How do I renew my digital loan?",
                a: "Renew from My Library before due date if no holds exist.",
              },
              {
                q: "Can I suggest a book?",
                a: "Yes, use Content Contribution in the contact form.",
              },
              {
                q: "Do you offer institutional pricing?",
                a: "Yes, contact our support email for details.",
              },
              {
                q: "Is my data secure?",
                a: "Yes, encrypted and private to your account only.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 bg-white border rounded-2xl hover:shadow-md transition">
                <h5 className="font-semibold text-lg mb-2">{item.q}</h5>
                <p className="text-slate-600 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
