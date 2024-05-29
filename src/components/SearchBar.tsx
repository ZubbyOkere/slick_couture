"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {};

const SearchBar = (props: Props) => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input) {
      router.push(`/list?q=${input}`);
    }
  };
  return (
    <div>
      <form
        className="flex justify-center gap-4 bg-gray-200 rounded-md p-2 w-[30rem]"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="search"
          className="bg-transparent outline-none flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>
          <IoSearch size={25} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
