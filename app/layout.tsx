import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "@/components/ui/toast";
import { FontLoader } from "@/components/font-loader";

export const metadata: Metadata = {
  title: "Renda Component Library",
  description: "Reusable component library for Renda invoicing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FontLoader />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
