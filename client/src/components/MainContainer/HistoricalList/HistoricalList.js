import React from "react";
import SearchResult from "./searchResult";
import SearchBar from "./SearchBar";


export default function HistoricalList() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <SearchBar />
      <SearchResult />
    </div>
  );
}
