import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "BookNest",
  description: "BookNest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col w-full mx-auto">{children}</body>
    </html>
  );
}
