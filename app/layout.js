import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const eczar = Eczar({
  subsets: ["latin"],
  variable: "--font-eczar",
  display: "swap",
});

export const metadata = {
  title: "Tiger Tiger Foods",
  description: "The UK's leading developer of authentic Asian cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${outfit.variable} antialiased  ${eczar.variable}`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <FloatingCart /> {/* ✅ Add cart button here */}
      </body>
    </html>
  );
}
