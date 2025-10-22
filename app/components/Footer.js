"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Footer() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const res = await fetch("https://backend.tigertigerfoods.com/api/get-categories", {
          signal: ac.signal,
          headers: { Accept: "application/json" },
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`Failed to fetch categories (${res.status})`);
        const json = await res.json();

        // Expecting { success: boolean, data: Category[] }
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={250}
            height={40}
            className="mb-4"
          />
          <p className="max-w-xs leading-[1.6]">
            The UK’s leading developer of authentic Asian cuisine. From Japanese
            and Thai to Chinese and Indian, we deliver premium ingredients and
            exceptional flavours that bring the true taste of Asia to your
            table.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1">
            <li><Link href="/cuisine">Cuisine</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/trade-register">Sign Up</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        {/* Categories (dynamic) */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            {loading ? (
              <li className="text-gray-500">Loading...</li>
            ) : categories.length ? (
              categories.map((cat, idx) => (
                <li key={cat.slug ?? cat.id ?? idx}>
                  <Link href={`/categories/${cat.slug ?? cat.id}`}>{cat.name ?? "Category"}</Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No categories found.</li>
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <address className="not-italic leading-[1.6] space-y-2">
            <p>
              Bull Close Road
              <br />
              Lenton Industrial Estate,
              <br />
              Nottingham NG7 2UT, England.
            </p>
            <p>customer.service@tigertigerfoods.com</p>
            <p>+44 (0) 115 9438 949</p>
          </address>
        </div>
      </div>

      {/* Social Row */}
      <div className="max-w-6xl mx-auto pt-4 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mb-3 md:mb-0 text-center md:text-left">
            Follow us on social media for updates:
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a
              href="https://www.instagram.com/tigertigerfoodofficial/"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/tigertigerfoodsofficial/"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
            >
              Facebook ↗
            </a>
            <a
              href="https://www.tiktok.com/@tigertigerfoodsofficial1?_t=8rkFatEOb71&_r=1"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
            >
              Tiktok ↗
            </a>
            <a
              href="https://www.linkedin.com/company/jk-foodsofficial/"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
            >
              Linkedin ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#220016]/20 pt-4 text-center md:text-left max-w-6xl mx-auto text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/modern-slavery-statement">Modern Slavery Statement</Link>
        </div>
        <p>
          Designed and Developed by{" "}
          <a href="https://teqnoor.com" className="text-purple-700 font-medium">
            TeqNoor LTD
          </a>
        </p>
      </div>
    </footer>
  );
}
