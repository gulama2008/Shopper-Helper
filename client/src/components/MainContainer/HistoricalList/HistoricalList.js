import React from "react";
import SearchResult from "./searchResult";
import SearchBar from "./SearchBar";


export default function HistoricalList(props) {
  const { userLists } = props;
  console.log(userLists);
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
