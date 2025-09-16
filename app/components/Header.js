// components/Header.jsx
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  const path = usePathname();

  // ✅ Update login status (on mount, on route change, on custom event, on other tabs)
  useEffect(() => {
    function checkAuth() {
      try {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
      } catch {
        setIsLoggedIn(false);
      }
    }

    checkAuth(); // run on mount + whenever path changes (e.g., /login -> /dashboard)

    // Listen for storage changes (other tabs/windows)
    window.addEventListener("storage", checkAuth);

    // Listen for custom event when login/logout happens in this app
    window.addEventListener("auth-changed", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("auth-changed", checkAuth);
    };
  }, [path]); // 👈 add path here to re-check on navigation

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  return (
    <>
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
              priority
            />
          </Link>

          {/* Hamburger (Mobile) */}
          <div className="md:hidden w-full flex justify-end">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-[#220016] text-3xl"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center justify-between flex-1 gap-4">
            <nav className="hidden md:flex space-x-6 font-medium text-gray-800 relative">
              <Link
                href="/"
                className={`font-outfit text-[18.04px] text-[#220016] ${
                  path === "/" ? "font-bold" : "font-normal"
                }`}
              >
                Home
              </Link>

              {/* Dropdown */}
              <div ref={dropdownRef} className="relative">
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="cursor-pointer font-outfit font-normal text-[18.04px] text-[#220016]"
                >
                  Products
                </div>

                {isOpen && (
                  <div className="absolute top-full left-0 mt-2 min-w-[150px] z-50">
                    <div className="flex flex-col border-2 border-[#40023F] rounded-[8px] bg-[#fff] backdrop-blur-[16px] shadow-[-3px_3px_0_0_#000]">
                      <Link
                        href="/discover"
                        className="px-4 py-2 hover:bg-gray-100 text-[#220016]"
                      >
                        Discover
                      </Link>
                      <Link
                        href="/products"
                        className="px-4 py-2 hover:bg-gray-100 text-[#220016]"
                      >
                        All Products
                      </Link>
                      <Link
                        href="/products/featured"
                        className="px-4 py-2 hover:bg-gray-100 text-[#220016]"
                      >
                        Featured
                      </Link>
                      <Link
                        href="/products/new"
                        className="px-4 py-2 hover:bg-gray-100 text-[#220016]"
                      >
                        New
                      </Link>
                      <Link
                        href="/categories"
                        className="px-4 py-2 hover:bg-gray-100 text-[#220016]"
                      >
                        Categories
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/cuisines"
                className={`font-outfit text-[18.04px] text-[#220016] ${
                  path === "/cuisines" ? "font-bold" : "font-normal"
                }`}
              >
                Cuisines
              </Link>
              <Link
                href="/about"
                className={`font-outfit text-[18.04px] text-[#220016] ${
                  path === "/about" ? "font-bold" : "font-normal"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-outfit text-[18.04px] text-[#220016] ${
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

              {/* ✅ Show Dashboard if logged in, else Login */}
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className={`font-outfit text-[18.04px] text-[#220016] ${
                    path === "/dashboard" ? "font-bold" : "font-normal"
                  }`}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/login"
                  className={`font-outfit text-[18.04px] text-[#220016] ${
                    path === "/login" ? "font-bold" : "font-normal"
                  }`}
                >
                  Login
                </Link>
              )}
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
                href="/categories"
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

              {/* ✅ Mobile view toggle */}
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
