import React, { useState } from "react";
import Search from "@svg/search";
import { useRouter } from "next/router";

const SearchForm = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
    } else {
      router.push(`/ `, null, { scroll: false });
      setSearchText("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="header__search-input-13 d-none d-xxl-block">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search for products..."
        />
        <button type="submit">
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
