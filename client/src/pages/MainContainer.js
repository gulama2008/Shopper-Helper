import React, { useState } from "react";
import Navbar from "../components/MainContainer/Navbar";
import CreateNewList from "../components/MainContainer/CreateNewList/CreateNewList";
import HistoricalList from "../components/MainContainer/HistoricalList/HistoricalList";
import Statistics from "../components/MainContainer/Statistics/Statistics";
import Settings from "../components/MainContainer/Settings/Settings";
import { Col, Row, Statistic } from "antd";
import "../styles/MainContainer.css";
import Header from "../components/MainContainer/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../utils/auth";

export default function MainContainer(props) {
  // get the props passing from component App
  const { currentPage, handlePageChange } = props;
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderPage = () => {
  //   console.log(123);
  //   if (currentPage === "CreateNewList") {
  //     console.log(456);
  //     return <Route path="/new-list" element={<CreateNewList />}></Route>;
  //   }
  //   if (currentPage === "HistoricalList") {
  //     return <Route path="/historical-list" element={<HistoricalList />}></Route>;
  //   }
  //   if (currentPage === "Statistics") {
  //     return <Route path="/statistics" element={<Statistic />}></Route>;
  //   }
  //   return <Route path="/statistics" element={<Statistic />}></Route>;
  // };
  const user = Auth.getProfile();
  const [userData, setUserdata] = useState(user.data);
  console.log(userData);

  return (
    // <Router>
    <div>
      <Header userData={ userData} />
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
          <Routes>
            <Route path="/" element={<CreateNewList />}></Route>
            <Route path="historical-list" element={<HistoricalList />}></Route>
            <Route path="/statistics" element={<Statistics />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </Col>
      </Row>
    </div>
    // {/* </Router> */}
  );
}
