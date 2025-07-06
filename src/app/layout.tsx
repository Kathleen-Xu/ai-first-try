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
  title: "AI First Try - Discover the World's Top AI Applications",
  description: "Explore the most cutting-edge AI applications including ChatGPT, Midjourney, Claude, and more. Transform your digital experience with curated AI tools.",
  keywords: "AI applications, ChatGPT, Midjourney, Claude, AI tools, artificial intelligence, conversational AI, image generation",
  authors: [{ name: "AI First Try" }],
  openGraph: {
    title: "AI First Try - Discover the World's Top AI Applications",
    description: "Explore the most cutting-edge AI applications including ChatGPT, Midjourney, Claude, and more. Transform your digital experience with curated AI tools.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
