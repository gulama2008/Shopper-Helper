import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
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
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
