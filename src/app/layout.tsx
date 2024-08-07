import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import App from "@/app/App";
import LayoutHeader from "@/app/components/headers/LayoutHeader";
import LayoutFooter from "@/app/components/headers/LayoutFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter?.className}>
        <header
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <LayoutHeader />
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "#FFFF54",
          }}
        >
          <LayoutFooter />
        </footer>
      </body>
    </html>
  );
}
