import React, { useState } from "react";
import Navbar from "../components/MainContainer/Navbar";
import CreateNewList from "../components/MainContainer/CreateNewList/CreateNewList";
import HistoricalList from "../components/MainContainer/HistoricalList/HistoricalList";
import Statistics from "../components/MainContainer/Statistics/Statistics";
import Settings from "../components/MainContainer/Settings/Settings";
import { Col, Layout, Row, theme } from "antd";

import "../styles/MainContainer.css";
import Header from "../components/MainContainer/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER, QUERY_TEST } from "../utils/queries";
import Auth from "../utils/auth";
const { Content } = Layout;



export default function MainContainer(props) {
  console.log(4)
  console.log(Auth.getProfile());
  if (!Auth.getProfile()) {
    console.log(2);
    window.location.href = "./login";
  }
  console.log(3)

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // get the props passing from component App
  const { currentPage, handlePageChange } = props;
  console.log(1)
  const user = Auth.getProfile();
  console.log(user);
  const [userData, setUserdata] = useState(user.data);
  const [clickSubmit, setClickSubmit] = useState(true);
  
  const { loading, data,refetch } = useQuery(QUERY_USER, {
    variables: { username: userData.username },
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  const profile = data?.user || {};
  console.log("Data");
  console.log(profile);
  const userItems = profile.items;
  console.log(userItems);
  
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
  
  
  return (
    // <Router>
    <div className="main">
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
          <Layout
            style={{
              padding: "24px",
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                // minHeight: 800,
                background: colorBgContainer,
              }}
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <CreateNewList
                      userItems={userItems}
                      userShops={userShops}
                      clickSubmit={clickSubmit}
                      handleClickSubmit={handleClickSubmit}
                      refetch={refetch}
                    />
                  }
                ></Route>
                <Route
                  path="historical-list"
                  element={<HistoricalList userLists={userLists} />}
                ></Route>
                <Route
                  path="/statistics"
                  element={<Statistics userLists={userLists} />}
                ></Route>
                <Route
                  path="/settings"
                  element={
                    <Settings
                      userItems={userItems}
                      userShops={userShops}
                      refetch={refetch}
                    />
                  }
                ></Route>
              </Routes>
            </Content>
          </Layout>
        </Col>
      </Row>
    </div>
    // {/* </Router> */}
  );
}
