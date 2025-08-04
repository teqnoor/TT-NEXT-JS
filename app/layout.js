import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import localFont from "next/font/local";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fields = localFont({
  src: './fonts/fonnts.com-Fields-Display-Extra-Bold.otf',
  variable: '--font-fields',
  display: 'swap',
});

export const metadata = {
  title: "Tiger Tiger Foods",
  description: "The UK's leading developer of authentic Asian cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased  ${fields.variable}`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <FloatingCart /> {/* ✅ Add cart button here */}
      </body>
    </html>
  );
}
