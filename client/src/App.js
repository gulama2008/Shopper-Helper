import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const [currentPage, setCurrentPage] = useState("AddNewList");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="app-container">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <MainContainer
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
