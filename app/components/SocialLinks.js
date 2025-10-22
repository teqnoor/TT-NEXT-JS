"use client";

import { usePathname } from "next/navigation";

export default function SocialLinks() {
  const pathname = usePathname();

  if (pathname !== "/") return null; // Only render on homepage

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <a
        href="https://www.instagram.com/tigertigerfoodofficial/"
        className="border border-[#220016] px-8 py-3 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram ↗
      </a>
      <a
        href="https://www.facebook.com/tigertigerfoodsofficial/"
        className="border border-[#220016] px-8 py-3 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook ↗
      </a>
      <a
        href="https://www.tiktok.com/@tigertigerfoodsofficial1?_t=8rkFatEOb71&_r=1"
        className="border border-[#220016] px-8 py-3 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tiktok ↗
      </a>
      <a
        href="https://www.linkedin.com/company/jk-foodsofficial/"
        className="border border-[#220016] px-8 py-3 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin ↗
      </a>
      <a
        href="https://uk.pinterest.com/tigertigerfoods/"
        className="border border-[#220016] px-8 py-3 rounded-full inline-block font-medium hover:bg-[#556D08] hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pinterest ↗
      </a>
    </div>
  );
}
