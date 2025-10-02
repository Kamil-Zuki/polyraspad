import "./globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "My Personal Site",
  description: "Built with Next.js 15 and Tailwind CSS 4",
  openGraph: {
    title: "My Personal Site",
    description: "Explore my projects and skills",
    url: "https://your-site-url.com",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;700&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 pb-16 overflow-x-hidden">
          <div className="min-h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
