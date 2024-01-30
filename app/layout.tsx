import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Face 2 Face, a Local Salon and Beautician Shop App",
  description:
    "This application is a unique, user-friendly, and mobile-optimized website designed specifically for a local salon and beautician shop. The primary target audience is local residents who primarily use their phones for internet browsing.",
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
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
