'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { PageProvider } from "@/context/PageContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  md:max-h-screen h-screen flex flex-col `}>
         <div className="flex items-center justify-center py-[50px] ">
          <Image
            className=""
            src="/logo.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <PageProvider>
        {children}
        </PageProvider>
      </body>
    </html>
  );
}
