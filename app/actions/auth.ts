"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const registerUser = async (name: string, email: string, password: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to register");
  }

  revalidatePath("/users/profile");

  const cookieStore = await cookies();

  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1 * 24 * 60 * 60,
    path: "/",
  });

  return data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to login");
  }

  revalidatePath("/users/profile");
  const cookieStore = await cookies();

  cookieStore.set("token", data.data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 1 * 24 * 60 * 60,
    path: "/",
  });

  return data;
};

export const logoutUser = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("token");

  revalidatePath("/users/profile");
};
