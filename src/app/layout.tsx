import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "X clone",
  description: "a clone of the X website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-3 max-w-6xl mx-auto">
          <div>
            <Sidebar />
          </div>
          {/* end of sidebar conatiner */}
          <div>{children}</div>
          {/* end of children conatiner */}
          <div>
            <News />
          </div>
          {/* end of new conatiner */}
        </div>
        {/* end of main container */}
      </body>
    </html>
  );
}
