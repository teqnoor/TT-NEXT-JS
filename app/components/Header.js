import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass  } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="container mx-auto fixed top-0 left-0 right-0 z-50">
      <header className="mt-6 flex items-center gap-[50px] rounded-full bg-white/30 shadow-[0px_4px_13.4px_0px_#0000001F] backdrop-blur-[24px] px-[15px] py-[10px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tt/logo.png"
            alt="Tiger Tiger Logo"
            width={175}
            height={50}
            className="object-cover"
          />
        </Link>

        <div className="flex items-center justify-between flex-1">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-[50px] font-medium text-gray-800">
            <Link
              href="/"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Products
            </Link>
            <Link
              href="/cuisines"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Cuisines
            </Link>
            <Link
              href="/about"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Blog
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center bg-[#40023F] rounded-full px-[10px] py-[14px]">
            <FaMagnifyingGlass  className="text-white text-sm mr-[10px]" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
