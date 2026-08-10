import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinay Joshi | Full Stack Developer",
  description: "Full Stack Developer building production-ready APIs with Node.js, TypeScript, and React.",
  keywords: ["Full Stack Developer", "Node.js", "TypeScript", "React", "API Development"],
  openGraph: {
    title: "Vinay Joshi | Full Stack Developer",
    description: "Building production-ready APIs with Node.js, TypeScript, and React.",
    url: "https://vinayjoshi.dev",
    siteName: "Vinay Joshi Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {/* Background Orbs - ADD THIS */}
        <div className="bg-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        {children}
        <Analytics/>
      </body>
    </html>
  );
}