import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eco App — Explore Sorong Naturally",
  description:
    "Platform ecotourism untuk menjelajahi alam, budaya, dan masyarakat lokal Sorong, Papua Barat Daya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}