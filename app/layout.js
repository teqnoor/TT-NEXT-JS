import { Outfit, Eczar } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCart from "./components/FloatingCart";
import Script from "next/script";
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
        <link rel="stylesheet" href="https://use.typekit.net/wry2bcj.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* 👇 Tawk.io Script */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
              s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/67b57ac6d6347a190daa6dd5/1j4sbu3a2';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
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
