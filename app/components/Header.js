"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SearchBox from "./SeachBar";
import { usePathname } from "next/navigation";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const path = usePathname();


  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <div
        className="max-w-6xl mx-auto fixed top-0 left-0 right-0 z-50"
        id="header"
      >
        <header className="mt-6 flex items-center md:gap-[50px] rounded-full bg-white/60 shadow-[0px_4px_13.4px_0px_#0000001F] backdrop-blur-[24px] px-[15px] py-[10px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Tiger Tiger Logo"
              width={175}
              height={50}
            />
          </Link>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden w-full flex justify-end">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-[#220016] text-3xl"
            >
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center justify-between flex-1 gap-4">
            <nav className="hidden md:flex space-x-[50px] font-medium text-gray-800 relative">
              <Link
                href="/"
                className={`font-outfit text-[18.04px] text-[#220016] ${
                  path === "/" ? "font-bold" : "font-normal"
                }`}
              >
                Home
              </Link>

              {/* Dropdown */}
              <div ref={dropdownRef} className="relative z-40">
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="cursor-pointer font-outfit font-normal text-[18.04px] text-[#220016]"
                >
                  Products
                </div>

                {isOpen && (
                  <div className="absolute top-full left-0 flex flex-col bg-white border-[2px] border-[#40023F] rounded-md mt-2 min-w-[150px] z-50">
                    <Link
                      href="/discover"
                      className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                        path === "/discover" ? "font-bold" : "font-normal"
                      }`}
                    >
                      Discover
                    </Link>
                    <Link
                      href="/products"
                      className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                        path === "/products" ? "font-bold" : "font-normal"
                      }`}
                    >
                      All Products
                    </Link>
                    <Link
                      href="/products/featured"
                      className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                        path === "/products/featured"
                          ? "font-bold"
                          : "font-normal"
                      }`}
                    >
                      Featured
                    </Link>
                    <Link
                      href="/products/new"
                      className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                        path === "/products/new" ? "font-bold" : "font-normal"
                      }`}
                    >
                      New
                    </Link>
                    <Link
                      href="/products/categories"
                      className={`px-4 py-2 text-[#220016] hover:bg-gray-100 ${
                        path === "/products/categories"
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
                className={`font-outfit  text-[18.04px] text-[#220016] ${
                  path === "/cuisines" ? "font-bold" : "font-normal"
                }`}
              >
                Cuisines
              </Link>
              <Link
                href="/about"
                className={`font-outfit  text-[18.04px] text-[#220016] ${
                  path === "/about" ? "font-bold" : "font-normal"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-outfit  text-[18.04px] text-[#220016] ${
                  path === "/contact" ? "font-bold" : "font-normal"
                }`}
              >
                Contact
              </Link>
              <Link
                href="/blogs"
                className={`font-outfit text-[18.04px] text-[#220016] ${
                  path === "/blogs" ? "font-bold" : "font-normal"
                }`}
              >
                Blogs
              </Link>
            </nav>

            <SearchBox />
          </div>
        </header>
      </div>

      {/* Mobile Slide-in Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-screen z-[100] bg-white md:hidden transition-transform duration-300 ease-in-out overflow-y-auto shadow-lg">
          <div className="p-6 flex flex-col h-full">
            <nav className="flex flex-col space-y-6 text-[#220016] font-outfit text-[18px]">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/discover" onClick={() => setMobileMenuOpen(false)}>
                Discover
              </Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)}>
                All Products
              </Link>
              <Link
                href="/products/featured"
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
                href="/products/categories"
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
              <Link href="/blogs" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
