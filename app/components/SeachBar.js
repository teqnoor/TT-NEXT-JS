"use client";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const mockResults = [
  {
    id: 1,
    title: "Pulp+ Coconut Flavour",
    size: "12×320ml",
    image: "/pulp1.png", // replace with actual image path
  },
  {
    id: 2,
    title: "Pulp+ Coconut Flavour",
    size: "12×320ml",
    image: "/pulp1.png",
  },
  {
    id: 3,
    title: "Pulp+ Coconut Flavour",
    size: "12×320ml",
    image: "/pulp1.png",
  },
];

export default function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowDropdown(value.length > 0);
  };

  return (
    <div className="relative hidden md:flex flex-col items-start z-50">
      {/* Search Input */}
      <div className="flex items-center bg-[#40023F] rounded-full px-[10px] py-[14px] w-[320px]">
        <FaMagnifyingGlass className="text-white text-sm mr-[10px]" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="bg-transparent text-white placeholder-white focus:outline-none w-full"
        />
      </div>

      {showDropdown && (
        <div className="absolute top-full mt-2 w-[320px] z-10">
          <div className="bg-white rounded-xl border-[2px] border-[#40023F] shadow-[-3px_3px_0px_0px_#000000]">
            {mockResults.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-3 hover:bg-gray-100 rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover  rounded mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500">{item.size}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
