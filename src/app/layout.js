import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ReSellHub | Buy & Sell Second-Hand Products",
  description: "ReSellHub is a sustainable marketplace for buying and selling quality second-hand products safely and affordably.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-all duration-300">

        <ThemeProvider>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

          {/* <Navbar /> */}

          <main className="flex-1">
            {children}
          </main>

          {/* <Footer /> */}

        </ThemeProvider>

      </body>
    </html>
  );
}