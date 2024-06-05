import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shaurya Say Hi! | Full Stack Developer",
  description: "Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack.",
  openGraph: {
    title: "Shaurya Say Hi! | Full Stack Developer",
    description: "Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack.",
    url: "https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/profile3.png",
        width: 800,
        height: 600,
        alt: "Shaurya's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/Shaurya35804973",
    title: "Shaurya Say Hi! | Full Stack Developer",
    description: "Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack.",
    images: ["https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/twitter.jpg"],
  },
  keywords: ["Shaurya Nayyar", "Full Stack Developer", "Next.js", "React", "MERN stack", "Portfolio"],
  authors: [{ name: "Shaurya Nayyar" }],
  viewport: "width=device-width, initial-scale=1",

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack." />
        <meta name="keywords" content="Shaurya Nayyar, Full Stack Developer, Next.js, React, MERN stack, Portfolio" />
        <meta name="author" content="Shaurya Nayyar" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Shaurya Say Hi! | Full Stack Developer" />
        <meta property="og:description" content="Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack." />
        <meta property="og:url" content="https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/profile3.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Shaurya Nayyar's Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com/Shaurya35804973" />
        <meta name="twitter:title" content="Shaurya Say Hi! | Full Stack Developer" />
        <meta name="twitter:description" content="Welcome to Shaurya's portfolio. Explore projects and skills of a passionate Full Stack Developer experienced in Next.js, React, and the MERN stack." />
        <meta name="twitter:image" content="https://portfolio-lqdqot0mr-shaurya61s-projects.vercel.app/twitter.jpg" />
        <title>Shaurya Say Hi! | Full Stack Developer</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
