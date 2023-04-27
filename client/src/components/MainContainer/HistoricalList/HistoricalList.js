import React, { useEffect, useState } from "react";
import SearchResult from "./searchResult";
import SearchBar from "./SearchBar";


export default function HistoricalList(props) {
  const { userLists } = props;
  console.log(userLists);
  const [searchresult, setSearchResult] = useState([]);
  useEffect(() => {
    setSearchResult(userLists);
  }, userLists);
  console.log("main:", searchresult);
  const test="test"
  const handleResultChange = (rawResult) => { 
    setSearchResult(rawResult);
  }
  return (
    <div>
      <SearchBar userLists={userLists} searchresult={searchresult} handleResultChange={ handleResultChange} />
      <SearchResult userLists={userLists} searchresult={searchresult} test={ test} />
    </div>
  );
}
