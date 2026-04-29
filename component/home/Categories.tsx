const categories = [
  { name: "Novel", icon: "menu_book" },
  { name: "Science", icon: "science" },
  { name: "History", icon: "history_edu" },
  { name: "Fantasy", icon: "castle" },
  { name: "Biography", icon: "person" },
];

export default function Categories() {
  return (
    <section className="px-8 md:px-16 py-20 bg-[#f5f2ff]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Explore by Category</h2>
          <p className="text-slate-600">
            Find exactly what you're looking for across our diverse collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl border border-slate-200 text-center transition-all duration-300 cursor-pointer hover:scale-105 "
            >
              <div className="w-16 h-16 bg-[#e2dfff] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {cat.icon}
                </span>
              </div>

              <span className="font-medium">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}