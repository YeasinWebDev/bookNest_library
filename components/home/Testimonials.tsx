import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Sarah Miller",
    role: "Avid Reader",
    text: "BookNest has completely transformed my reading experience. Their curated suggestions are always spot on, and the interface is a joy to use.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd9sxcWHXNCEtMbERo7UDUkd4vmOtPsX1EjX38-PPeQYTkKjPo25nZuK9SNnrc143pP4GV3nDO7IsBb1wAWxPOK1YIpxn_wNNeuGxrnvGsHp2SKq2a6GzoXaQct5Igua9vHQP3FNDrJT_fkA9YzNtJ5nHmmrFsscGU01npN6N02QJTDZlC-xatt_QvcLtb_TI4HpzAyQYtjKJvd5pMD1X25GUMxPWr59HAEphxmKEs-d5ZI8mVaiCxoWj2k6S2lVTNHAgxyKzSGJYj",
  },
  {
    name: "David Chen",
    role: "PhD Researcher",
    text: "The quality of the library and the speed of delivery is unmatched. It's like having a world-class bookstore right in my pocket.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS_IFA95lsxQSGp-w_xuTwGbjoVFe-r5A45liKiOCmXdY9q6GgdJtAGSgF90IaqQaM7OkbjandIregNKi07FBjJxRnoaqbr375LufSRtiA5RposX-YaZdIeBXjfp66BYJybUdhfFdyy4HgpKfg_Qd-oyOM0H-h9gTwq551_TP7X96oy8MioBXEqjcqYKPI7Dh6wO-Z_gh-rxVMGr2qE66S2LSItjMxxVlbm5CxhHDWKsIW4BE2tzEIcU-JJD2GWJ5DhzrcbkLIAs6c",
  },
  {
    name: "Emma Watson",
    role: "Librarian",
    text: "I love the community features. Being able to see what others are reading and the high-quality reviews helps me decide on my next purchase.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAil6M1eQv-sZz9l3FjqVfKPOXlA8ZqIlm-jqLjCQHgvN-es-5t_R5lNuxQydCaKs3_xV9sxOD0SqQB9AhgYWkjGg2O3_50dFjLPYfIw0Ec7NrTg4TkU12Si7IhC9pjyqbYPFQDqcV4wRCau5xitgVwa81pAB2vIFDrFSOaiVF5DvDC_Aly4I8r3F4dRV2ndIJ8LeGe09f_G-QwX1XcizX4bU4z-wdkq3lW5DZJz34zuJ6ikCyyosuRloMHkgn6YsP7H4Hm2ZIDdYya",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 md:px-16 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <span className="text-[#855300] text-xs font-bold uppercase tracking-widest mb-2">Our Community</span>
          <h2 className="text-4xl font-bold">What Readers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-[#f0ecf9] rounded-2xl relative">
              <div className="flex flex-row items-center justify-between ">
                <div className="flex gap-1 mb-4 text-secondary">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar className="text-[#855300] size-4" />
                    ))}
                </div>
                <div>
                  <FaQuoteRight className="text-[#dbdffb] size-6"/>
                </div>
              </div>

              <p className="italic mb-6 text-slate-700">"{review.text}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-300">
                  <Image src={review.img} alt={review.name} width={48} height={48} className="object-cover w-full h-full" />
                </div>

                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm ">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
