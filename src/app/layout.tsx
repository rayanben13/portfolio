import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Rayan Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen text-white bg-[#0a0a0f] overflow-x-hidden relative">

        {/* GLOBAL BACKGROUND LAYER */}
        <div className="fixed inset-0 -z-10">

          {/* base color */}
          <div className="absolute inset-0 bg-[#0a0a0f]" />

          {/* glow top-left */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] sm:top-[-200px] sm:left-[-200px] sm:w-[600px] sm:h-[600px] bg-purple-600/20 blur-[100px] sm:blur-[140px]" />

          {/* glow bottom-right */}
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] sm:bottom-[-200px] sm:right-[-200px] sm:w-[600px] sm:h-[600px] bg-blue-600/20 blur-[100px] sm:blur-[140px]" />

          {/* extra depth center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-indigo-500/10 blur-[100px] sm:blur-[160px]" />
        </div>

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}