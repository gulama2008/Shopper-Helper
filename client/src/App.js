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
// import Header from "./components/MainContainer/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MainContainer from "./pages/MainContainer";

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
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

function App() {
  const [currentPage, setCurrentPage] = useState("CreateNewList");
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainContainer
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
