"use client"; // if using Next.js App Router

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-6xl mx-auto fixed top-0 left-0 right-0 z-50">
      <header className="mt-6 flex items-center gap-[50px] rounded-full bg-white/30 shadow-[0px_4px_13.4px_0px_#0000001F] backdrop-blur-[24px] px-[15px] py-[10px]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={175}
            height={50}
            className="object-cover"
          />
        </Link>

        <div className="flex items-center justify-between flex-1">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-[50px] font-medium text-gray-800 relative">
            <Link
              href="/"
              className="font-outfit font-normal text-[18.04px]  text-[#220016]"
            >
              Home
            </Link>

            {/* Products Dropdown Wrapper */}
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Trigger Link */}
              <div className="cursor-pointer font-outfit font-normal text-[18.04px] text-[#220016]">
                Products
              </div>

              {/* Dropdown (Shown on hover) */}
              {isOpen && (
                <div className="absolute top-full left-0 flex flex-col bg-white shadow-md rounded-md mt-2 min-w-[150px] z-50">
                  <Link
                    href="/products/category1"
                    className="px-4 py-2 text-[#220016] hover:bg-gray-100"
                  >
                    Discover
                  </Link>
                  <Link
                    href="/products/category2"
                    className="px-4 py-2 text-[#220016] hover:bg-gray-100"
                  >
                    All Products
                  </Link>
                  <Link
                    href="/products/category3"
                    className="px-4 py-2 text-[#220016] hover:bg-gray-100"
                  >
                    Featured
                  </Link>
                  <Link
                    href="/products/new"
                    className="px-4 py-2 text-[#220016] hover:bg-gray-100"
                  >
                    New
                  </Link>
                  <Link
                    href="/products/new"
                    className="px-4 py-2 text-[#220016] hover:bg-gray-100"
                  >
                    Categories
                  </Link>
                </div>
              )}
            </div>

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
            <FaMagnifyingGlass className="text-white text-sm mr-[10px]" />
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
