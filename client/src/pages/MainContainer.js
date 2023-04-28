import React, { useState } from "react";
import Navbar from "../components/MainContainer/Navbar";
import CreateNewList from "../components/MainContainer/CreateNewList/CreateNewList";
import HistoricalList from "../components/MainContainer/HistoricalList/HistoricalList";
import Statistics from "../components/MainContainer/Statistics/Statistics";
import Settings from "../components/MainContainer/Settings/Settings";
import { Col, Row } from "antd";
import "../styles/MainContainer.css";
import Header from "../components/MainContainer/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER, QUERY_TEST } from "../utils/queries";
import Auth from "../utils/auth";

export default function MainContainer(props) {
  // get the props passing from component App
  const { currentPage, handlePageChange } = props;
  const user = Auth.getProfile();
  console.log(user);
  const [userData, setUserdata] = useState(user.data);
  const [clickSubmit, setClickSubmit] = useState(true);
  console.log(userData.username);
  // const { loading, error,data } = useQuery(QUERY_TEST);
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userData.username },
  });
  const profile = data?.user || {};
  console.log("Data");
  console.log(profile);
  const userItems = profile.items;
  const userLists = profile.lists;
  const userShops = profile.shops;
  console.log("items");
  console.log(userItems);
  console.log(userShops);
  
  const handleClickSubmit = () => { 
    const currentStatus = clickSubmit;
    currentStatus = !currentStatus;
    setClickSubmit(currentStatus);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    // <Router>
    <div>
      <Header userData={userData} />
      <Row className="main-container">
        <Col span={5}>
          {/* keep passing currentpage props and handlepagechange method to the child element */}
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </Col>

        {/* Here we are calling the renderPage method which will return a component  */}
        <Col span={19}>
          <Routes >
            <Route
              path="/"
              element={
                <CreateNewList
                  userItems={userItems}
                  userShops={userShops}
                  clickSubmit={clickSubmit}
                  handleClickSubmit={handleClickSubmit}
                />
              }
            ></Route>
            <Route
              path="historical-list"
              element={<HistoricalList userLists={userLists} />}
            ></Route>
            <Route path="/statistics" element={<Statistics userLists={ userLists} />}></Route>
            <Route
              path="/settings"
              element={<Settings userItems={userItems} userShops={ userShops} />}
            ></Route>
          </Routes>
        </Col>
      </Row>
    </div>
    // {/* </Router> */}
  );
}
