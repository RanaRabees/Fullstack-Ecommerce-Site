"use client";
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Myfooter from "../app/components/Myfooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Myfooter />
      </body>
    </html>
  );
}
