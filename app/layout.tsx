import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Readlink - Connect Through Knowledge",
  description:
    "Readlink is an intelligent reading hub that connects people, their libraries, and the knowledge inside books into a continuously evolving intelligence network.",
  keywords: [
    "books",
    "reading",
    "social network",
    "library",
    "knowledge",
    "book lovers",
  ],
  openGraph: {
    title: "Readlink - Connect Through Knowledge",
    description:
      "Follow people. Explore libraries. Expand knowledge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
