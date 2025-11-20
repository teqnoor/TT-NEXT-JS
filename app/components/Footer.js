"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

export default function Footer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [openUseful, setOpenUseful] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  useEffect(() => {
    function checkAuth() {
      try {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
      } catch {
        setIsLoggedIn(false);
      }
    }

    checkAuth();

    const ac = new AbortController();

    (async () => {
      try {
        const res = await fetch(
          "https://backend.tigertigerfoods.com/api/get-categories",
          {
            signal: ac.signal,
            headers: { Accept: "application/json" },
            cache: "no-store",
          }
        );
        if (!res.ok)
          throw new Error(`Failed to fetch categories (${res.status})`);
        const json = await res.json();

        const list = Array.isArray(json?.data) ? json.data : [];
        setCategories(list.slice(0, 6));
      } catch (e) {
        console.error(e);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, []);

  return (
    <footer className="text-[#220016] pt-10 pb-4 text-sm font-outfit px-6 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={250}
            height={40}
            className="mb-4"
          />
          <p className="max-w-xs leading-[1.6] text-[#405305]">
            The UK’s leading developer of authentic Asian cuisine. From Japanese
            and Thai to Chinese and Indian, we deliver premium ingredients and
            exceptional flavours that bring the true taste of Asia to your
            table.
          </p>
        </div>

        {/* Useful Links */}
        <div className="mb-6 md:mb-0 md:block hidden">
          <h4 className="font-semibold mb-2 text-[#405305]">Useful Links</h4>
          <ul className="space-y-1">
            <li>
              <Link className="text-[#405305]" href="/cuisine">
                Cuisine
              </Link>
            </li>
            <li>
              <Link className="text-[#405305]" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-[#405305]" href="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-[#405305]" href="/blogs">
                Blogs
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link href="/dashboard" className={`text-[#405305]`}>
                  Dashboard
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link className="text-[#405305]" href="/trade-register">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="text-[#405305]" href="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-6 md:mb-0 md:block hidden">
          <h4 className="font-semibold mb-2 text-[#405305]">Categories</h4>
          <ul className="space-y-1">
            {loading ? (
              <li className="text-gray-500 text-[#405305]">Loading...</li>
            ) : categories.length ? (
              categories.map((cat, idx) => (
                <li key={cat.slug ?? cat.id ?? idx}>
                  <Link
                    className="text-[#405305]"
                    href={`/categories/${cat.slug ?? cat.id}`}
                  >
                    {cat.name ?? "Category"}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No categories found.</li>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="mb-6 md:mb-0 md:block hidden">
          <h4 className="font-semibold mb-2 text-[#405305]">Contact</h4>
          <address className="not-italic leading-[1.6] space-y-2">
            <p className="text-[#405305]">
              Bull Close Road
              <br />
              Lenton Industrial Estate,
              <br />
              Nottingham NG7 2UT, England.
            </p>
            <p className="text-[#405305]">
              customer.service@tigertigerfoods.com
            </p>
            <p className="text-[#405305]">+44 (0) 115 9438 949</p>
          </address>
        </div>
      </div>

      {/* Accordion on Mobile Only */}
      <div className="md:hidden max-w-7xl">
        <div>
          <button
            onClick={() => setOpenUseful(!openUseful)}
            className="w-full text-left text-[#30523E] p-3 rounded-md flex justify-between items-center"
          >
            Useful Links
            {openUseful ? <FaMinus /> : <FaPlus />}
          </button>
          {openUseful && (
            <ul className="space-y-1 bg-[#f7f7f7] p-3 mt-2 rounded-md">
              <li>
                <Link className="text-[#405305]" href="/cuisine">
                  Cuisine
                </Link>
              </li>
              <li>
                <Link className="text-[#405305]" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-[#405305]" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="text-[#405305]" href="/blogs">
                  Blogs
                </Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link href="/dashboard" className={`text-[#405305]`}>
                    Dashboard
                  </Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="text-[#405305]" href="/trade-register">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="text-[#405305]" href="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* Categories Accordion */}
        <div>
          <button
            onClick={() => setOpenCategories(!openCategories)}
            className="w-full text-left text-[#30523E] p-3 rounded-md flex justify-between items-center"
          >
            Categories
            {openCategories ? <FaMinus /> : <FaPlus />}
          </button>
          {openCategories && (
            <ul className="space-y-1 bg-[#f7f7f7] p-3 mt-2 rounded-md">
              {loading ? (
                <li className="text-gray-500 text-[#405305]">Loading...</li>
              ) : categories.length ? (
                categories.map((cat, idx) => (
                  <li key={cat.slug ?? cat.id ?? idx}>
                    <Link
                      className="text-[#405305]"
                      href={`/categories/${cat.slug ?? cat.id}`}
                    >
                      {cat.name ?? "Category"}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No categories found.</li>
              )}
            </ul>
          )}
        </div>

        {/* Contact Accordion */}
        <div>
          <button
            onClick={() => setOpenContact(!openContact)}
            className="w-full text-left text-[#30523E] p-3 rounded-md flex justify-between items-center"
          >
            Contact
            {openContact ? <FaMinus /> : <FaPlus />}
          </button>
          {openContact && (
            <div className="space-y-2 bg-[#f7f7f7] p-3 mt-2 rounded-md">
              <address className="not-italic leading-[1.6]">
                <p className="text-[#405305]">
                  Bull Close Road
                  <br />
                  Lenton Industrial Estate,
                  <br />
                  Nottingham NG7 2UT, England.
                </p>
                <p className="text-[#405305]">
                  customer.service@tigertigerfoods.com
                </p>
                <p className="text-[#405305]">+44 (0) 115 9438 949</p>
              </address>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-start  max-w-7xl mx-auto gap-4 mb-3 mt-3">
        <a
          href="https://www.instagram.com/tigertigerfoodofficial/"
          className="border border-[#220016] p-3 rounded-full inline-flex items-center justify-center text-xl hover:bg-[#556D08] hover:text-white transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/tigertigerfoodsofficial/"
          className="border border-[#220016] p-3 rounded-full inline-flex items-center justify-center text-xl hover:bg-[#556D08] hover:text-white transition-colors"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.tiktok.com/@tigertigerfoodsofficial1?_t=8rkFatEOb71&_r=1"
          className="border border-[#220016] p-3 rounded-full inline-flex items-center justify-center text-xl hover:bg-[#556D08] hover:text-white transition-colors"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.linkedin.com/company/jk-foodsofficial/"
          className="border border-[#220016] p-3 rounded-full inline-flex items-center justify-center text-xl hover:bg-[#556D08] hover:text-white transition-colors"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl border-t border-[#220016]/20 pt-4 text-center md:text-left max-w-7xl mx-auto text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[#405305]">
          &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <Link className="text-[#405305]" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="text-[#405305]" href="/modern-slavery-statement">
            Modern Slavery Statement
          </Link>
        </div>
        <p className="text-[#405305]">
          Designed and Developed by{" "}
          <a href="https://teqnoor.com" className="text-purple-700 font-medium">
            TeqNoor LTD
          </a>
        </p>
      </div>
    </footer>
  );
}
