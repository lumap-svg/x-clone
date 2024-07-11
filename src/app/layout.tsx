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
        <div className="grid grid-cols-7 max-w-6xl mx-auto">
          <div className="hidden sm:inline h-screen border-r col-span-2 px-2">
            <Sidebar />
          </div>
          {/* end of sidebar conatainer */}
          <div className="h-screen border-r col-span-3 px-2">{children}</div>
          {/* end of children container */}
          <div className="h-screen  px-2 col-span-2 overflow-y-auto scrollbar-thin ">
            <div className="sticky top-0  bg-white py-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100  border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
              />
            </div>
            <News />
          </div>
          {/* end of new conatiner */}
        </div>
        {/* end of main container */}
      </body>
    </html>
  );
}
