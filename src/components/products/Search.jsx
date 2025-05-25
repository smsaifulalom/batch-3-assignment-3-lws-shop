import { useState } from "react";

export default function Search({onSearch}) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const searchItem = e.target.value;
    setSearch(searchItem);
    onSearch(searchItem)
  };

  return (
    <div className="relative hidden md:block w-64">
      <input
        value={search}
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
        onChange={handleSearch}
      />
      <span className="absolute right-3 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </span>
    </div>
  );
}
