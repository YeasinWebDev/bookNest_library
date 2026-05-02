"use server";

import { cookies } from "next/headers";

export const getProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
  const data = await res.json();
  return data?.data;
};
