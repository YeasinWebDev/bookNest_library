"use server";

export const getBooks = async (
  category = "All Genres",
  search = "",
  maxPrice = 100,
  minRating = 0,
  page = 1,
  limit = 6
) => {
  const query = new URLSearchParams({
    category,
    search,
    maxPrice: String(maxPrice),
    minRating: String(minRating),
    page: String(page),
    limit: String(limit),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch books");
  }

  return data;
};


export const getBook = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};