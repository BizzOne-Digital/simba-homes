import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Simba Homes Ltd | Custom Home Builders BC",
    template: "%s | Simba Homes Ltd",
  },
  description:
    "Premium custom home builders, land development & renovation specialists in British Columbia. WBI & BC Housing 2-5-10 Warranty protected.",
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* 36px topbar + 84px navbar = 120px total */}
        <main style={{ paddingTop: "120px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}