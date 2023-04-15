import React from "react";
import Navbar from "./Navbar";
import AddNewList from "./pages/AddNewList";
import HistoricalList from "./pages/HistoricalList";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import { Col, Row, Statistic } from "antd";
import "../styles/MainContainer.css"

export default function MainContainer(props) {
  //get the props passing from component App
  const { currentPage, handlePageChange }=props;
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "AddNewList") {
      return <AddNewList />;
    }
    if (currentPage === "HistoricalList") {
      return <HistoricalList />;
    }
    if (currentPage === "Statistics") {
      return <Statistics />;
    }
    return <Settings />;
  };

  return (
    <Row className="main-container">
      <Col span={5}>
        {/* keep passing currentpage props and handlepagechange method to the child element */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </Col>

      {/* Here we are calling the renderPage method which will return a component  */}
          <Col span={19}>{renderPage()}</Col>
    </Row>
  );
}
