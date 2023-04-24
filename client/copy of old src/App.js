import React, { useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import MainContainer from "./components/MainContainer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("CreateNewList");
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
