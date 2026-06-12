import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punit — Software Developer & Digital Creator",
  description:
    "Portfolio of Punit, a software developer and digital creator specializing in full-stack web apps, UI/UX design, and immersive digital experiences.",
  keywords: ["software developer", "full-stack", "React", "Next.js", "portfolio", "Punit"],
  authors: [{ name: "Punit" }],
  openGraph: {
    title: "Punit — Software Developer & Digital Creator",
    description: "Crafting immersive digital experiences at the intersection of design and engineering.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508]">{children}</body>
    </html>
  );
}
