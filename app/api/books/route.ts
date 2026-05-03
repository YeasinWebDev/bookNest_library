export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const res = await fetch(
    `https://booknest-library-backend.onrender.com/api/books?${searchParams.toString()}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  return Response.json(data);
}