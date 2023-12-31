import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DisableNavbar from "./components/disableNavbar";
import DisableFooter from "./components/disableFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zazaterior",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DisableNavbar />
        {children}
        <DisableFooter />
      </body>
    </html>
  );
}
