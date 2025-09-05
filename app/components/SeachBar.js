"use client";
import { useState, useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";
import Link from "next/link";

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Fetch products from API
  const fetchProducts = async (reset = false) => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(
        "https://tigertigerfoods.com/api/get-products",
        {
          params: { search: searchTerm, page },
        }
      );

      if (response.data.success) {
        const newProducts = response.data.data;

        setResults((prev) => {
          const combined = reset ? newProducts : [...prev, ...newProducts];
          // 🔑 remove duplicates by product id
          const unique = combined.filter(
            (item, index, self) =>
              index === self.findIndex((p) => p.id === item.id)
          );
          return unique;
        });

        // stop scrolling if we already loaded all (<= total 5 items in your case)
        setHasMore(
          newProducts.length > 0 && results.length + newProducts.length < 50
        );
      } else {
        if (reset) setResults([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Watch searchTerm
  useEffect(() => {
    if (searchTerm.length > 0) {
      setShowDropdown(true);
      setPage(1);
      fetchProducts(true); // reset results
    } else {
      setShowDropdown(false);
      setResults([]);
    }
  }, [searchTerm]);

  // Infinite Scroll Observer
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef.current, hasMore]);

  // Fetch more when page increases
  useEffect(() => {
    if (page > 1) {
      fetchProducts();
    }
  }, [page]);

  return (
    <div className="relative hidden md:flex flex-col items-start z-50">
      {/* Search Input */}
      <div className="flex items-center bg-[#40023F] rounded-full px-[10px] py-[14px] w-[320px]">
        <FaMagnifyingGlass
          className="text-white text-sm mr-[10px] ms-[10px]"
          size={20}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent text-white placeholder-white focus:outline-none w-full"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full mt-2 w-[320px] z-10 max-h-[400px] overflow-auto">
          <div className="bg-white rounded-xl border-[2px] border-[#40023F] shadow-[-3px_3px_0px_0px_#000000]">
            {results.length > 0 ? (
              results.map((item) => (
                <Link href={`/products/${item.slug}`} key={item.id}>
                  <div
                    key={item.id}
                    className="flex items-center p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
                  >
                    <img
                      src={item.featured_image || item.images}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500">{item.SKU}</div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-3 text-gray-500 text-sm">No results found</div>
            )}

            {/* Loader / Observer */}
            {hasMore && (
              <div
                ref={loaderRef}
                className="p-3 text-center text-sm text-gray-400"
              >
                Loading more...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
