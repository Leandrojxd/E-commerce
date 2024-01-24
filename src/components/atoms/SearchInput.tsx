"use client";

import React, { useState } from "react";
import style from "public/home.module.css";
import { useRouter } from "next/navigation";

type SearchInputProps = {
  placeholder: string;
};

function SearchInput({ placeholder }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/Catalog?q=${encodedSearchQuery}`)
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
          type="text"
          placeholder={placeholder}
          className={style.searchInput_style}
        />
      </form>
    </div>
  );
}

export default SearchInput;
