import type { Metadata } from "next";
import { Syne, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Punit — Software Developer & Digital Creator",
  description:
    "Portfolio of Punit, a software developer and digital creator specializing in full-stack web apps, UI/UX design, and immersive digital experiences.",
  keywords: ["software developer", "full-stack", "React", "Next.js", "portfolio", "Punit"],
  authors: [{ name: "Punit" }],
  openGraph: {
    title: "Punit — Software Developer & Digital Creator",
    description: "I build digital products people remember.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-paper font-sans">{children}</body>
    </html>
  );
}
