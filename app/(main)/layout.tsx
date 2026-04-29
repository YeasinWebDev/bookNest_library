import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";

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
      <body className="min-h-full flex flex-col w-full">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
