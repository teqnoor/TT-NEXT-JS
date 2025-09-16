"use client";

import Image from "next/image";
import Link from "next/link";

export default function CategoryMarquee({ categories }) {
  return (
    <div className="overflow-hidden eczar group">
      <div className="animate-marquee group-hover:animate-marquee-slow whitespace-nowrap py-6 flex items-center gap-10">
        {categories?.map((item, i) => (
          <Link key={i} href={`/categories/${item.slug}`}>
            <div
              key={i}
              
              className="inline-flex flex-col items-center justify-center"
            >
              {/* Circular Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md ring-2 ring-white">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Label */}
              <p className="mt-3 text-center text-[15px] md:text-base font-semibold text-[#2F5D27]">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
