"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Hamburger & Close
import { usePathname } from "next/navigation";
import SearchBox from "./SeachBar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const dropdownRef = useRef(null);

  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <div
      className="max-w-6xl mx-auto fixed top-0 left-0 right-0 z-50"
      id="header"
    >
      <header className="mt-6 flex items-center md:gap-[50px] rounded-full bg-white/60 shadow-[0px_4px_13.4px_0px_#0000001F] backdrop-blur-[24px] px-[15px] py-[10px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={175}
            height={50}
          />
        </Link>

        <div className="md:hidden w-full flex justify-end">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-[#220016] text-3xl"
          >
            {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
        <div className="flex items-center justify-between flex-1 gap-4">
          <nav className="hidden md:flex space-x-[50px] font-medium text-gray-800 relative">
            <Link
              href="/"
              className={`font-outfit text-[18.04px] text-[#220016] ${
                pathname === "/" ? "font-bold" : "font-normal"
              }`}
            >
              Home
            </Link>

            {/* 🟩 Dropdown wrapper must be a <div>, not a <Link> */}
            <div ref={dropdownRef} className="relative">
              <div
                onClick={() => setIsOpen((prev) => !prev)}
                className="cursor-pointer font-outfit font-normal text-[18.04px] text-[#220016]"
              >
                Products
              </div>

              {isOpen && (
                <div className="absolute top-full left-0 flex flex-col bg-white/60 shadow-[-3px_3px_0px_0px_#000000] backdrop-blur-[16.600000381469727px] border-[2px] border-[#40023F] rounded-md mt-2 min-w-[150px]">
                  <Link
                    href="/discover"
                    className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                      pathname === "/discover" ? "font-bold" : "font-normal"
                    }`}
                  >
                    Discover
                  </Link>
                  <Link
                    href="/products"
                    className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                      pathname === "/products" ? "font-bold" : "font-normal"
                    }`}
                  >
                    All Products
                  </Link>
                  <Link
                    href="/products/featured"
                    className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                      pathname === "/products/featured"
                        ? "font-bold"
                        : "font-normal"
                    }`}
                  >
                    Featured
                  </Link>
                  <Link
                    href="/products/new"
                    className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                      pathname === "/products/new" ? "font-bold" : "font-normal"
                    }`}
                  >
                    New
                  </Link>
                  <Link
                    href="/products/categories"
                    className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                      pathname === "/products/categories"
                        ? "font-bold"
                        : "font-normal"
                    }`}
                  >
                    Categories
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/cuisines"
              className="font-outfit font-normal text-[18.04px] text-[#220016]"
            >
              Cuisines
            </Link>
            <Link
              href="/about"
              className="font-outfit font-normal text-[18.04px] text-[#220016]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-outfit font-normal text-[18.04px] text-[#220016]"
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className={`font-outfit text-[18.04px] text-[#220016] ${
                pathname === "/blogs" ? "font-bold" : "font-normal"
              }`}
            >
              Blogs
            </Link>
          </nav>

          <SearchBox />
        </div>
        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 left-0 w-3/4 z-50 bg-white md:hidden transition-transform duration-300 ease-in-out h-max max-h-screen overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            {/* Navigation */}
            <nav className="flex flex-col space-y-6 text-[#220016] font-outfit text-[18px]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/products/category1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Discover
              </Link>
              <Link
                href="/products/category2"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                href="/products/category3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Featured
              </Link>
              <Link
                href="/products/new"
                onClick={() => setMobileMenuOpen(false)}
              >
                New
              </Link>
              <Link
                href="/products/new"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categories
              </Link>
              <Link href="/cuisines" onClick={() => setMobileMenuOpen(false)}>
                Cuisines
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
