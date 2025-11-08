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
  const wrapperRef = useRef(null); // wrapper ref

  // Fetch products from API
  const fetchProducts = async (reset = false) => {
    if (!searchTerm) return;

    try {
      const response = await axios.get(
        "https://backend.tigertigerfoods.com/api/get-products",
        { params: { search: searchTerm, page } }
      );

      if (response.data.success) {
        const newProducts = response.data.data;

        setResults((prev) => {
          const combined = reset ? newProducts : [...prev, ...newProducts];
          const unique = combined.filter(
            (item, index, self) =>
              index === self.findIndex((p) => p.id === item.id)
          );
          return unique;
        });

        // ✅ Hide loader when no new products come back
        if (!newProducts.length) {
          setHasMore(false);
        } else {
          // ✅ If we already loaded all 5 items (your DB example), stop further loading
          setHasMore(
            (reset ? newProducts.length : results.length + newProducts.length) <
              5
          );
        }
      } else {
        if (reset) setResults([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setHasMore(false);
    }
  };

  // Watch searchTerm
  useEffect(() => {
    if (searchTerm.length > 0) {
      setShowDropdown(true);
      setPage(1);
      fetchProducts(true);
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
    if (page > 1) fetchProducts();
  }, [page]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative hidden md:flex flex-col items-start z-50"
    >
      {/* Search Input */}
      <div className="flex items-center bg-[#F1D98F] rounded-full px-[10px] py-[14px] w-[320px]">
        <FaMagnifyingGlass
          className="text-[#556D08] text-sm mr-[10px] ms-[10px]"
          size={20}
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" text-dark placeholder-dark focus:outline-none w-full"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full mt-2 w-[320px] rounded z-50 max-h-[400px] overflow-auto bg-[#f1f1f1] scrollbar-thin scrollbar-thumb-[#40023F] scrollbar-track-gray-100">
          <div className="px-2 py-3">
            {results.length > 0 ? (
              results.map((item) => (
                <Link href={`/products/${item.slug}`} key={item.id}>
                  <div className="bg-white/80 flex items-center p-3 mt-3 mb-3 hover:bg-[#dadada] rounded-xl cursor-pointer">
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
