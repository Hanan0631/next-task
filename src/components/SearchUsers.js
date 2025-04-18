"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchUsers({ search }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const params = new URLSearchParams();
      searchValue ? params.set("search", searchValue) : params.delete("search");
      params.set("page", "1");
      router.push(`?${params.toString()}`);
    }, 500);
    return () => clearTimeout(debounce);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <label className="input bg-[#e0ebeb] flex items-center gap-2 mb-4 focus:outline-none">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
        placeholder="Search by name or email..."
      />
    </label>
  );
}

export default SearchUsers;
