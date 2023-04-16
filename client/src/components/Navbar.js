import React, { useState } from "react";
import {
  ProfileOutlined,
  FileSearchOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../styles/Navbar.css"

export default function Navbar(props) {
  //get the props passing from component App
  const { currentPage, handlePageChange } = props;
  const [mouseEnter, setMouseEnter] = useState("");
  // const [navbarItems, setNavbarItems] = useState([
  //   {
  //     icon: ProfileOutlined,
  //     title: "Add New List",
  //   },
  //   {
  //     icon: FileSearchOutlined,
  //     title: "Historical List",
  //   },
  //   {
  //     icon: BarChartOutlined,
  //     title: "Statistics",
  //   },
  //   {
  //     icon: SettingOutlined,
  //     title: "Settings",
  //   },
  // ]);
  const handleMouseEnter = (title) => {
    setMouseEnter(title);
  };
  const handleMouseLeave = () => { 
    setMouseEnter("");
  }

  return (
    <div className="navbar-container">
      <ul className="navbar">
        {/* {navbarItems.map((item,index) => { 
          return (
            <li className="navbar-item" onClick={handleOnClick} key={ index}>
            <a className="navbar-anchor">
                <item.icon></item.icon>
                <span className="navbar-item-title">{ item.title}</span>
            </a>
          </li>
          )   
        })} */}
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("AddNewList");
          }}
          onMouseEnter={() => {
            handleMouseEnter("AddNewList");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              currentPage === "AddNewList"
                ? "rgb(40, 40, 93)"
                : mouseEnter === "AddNewList"
                ? "rgb(70, 70, 214)"
                : "rgba(0, 22, 40, 255)",
          }}
        >
          <a
            className="navbar-anchor"
            style={{
              color:
                currentPage === "AddNewList"
                  ? "white"
                  : "rgba(140, 150, 159, 255)",
            }}
          >
            <ProfileOutlined />
            <span className="navbar-item-title">Add New List</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("HistoricalList");
          }}
          onMouseEnter={() => {
            handleMouseEnter("HistoricalList");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              currentPage === "HistoricalList"
                ? "rgb(40, 40, 93)"
                : mouseEnter === "HistoricalList"
                ? "rgb(70, 70, 214)"
                : "rgba(0, 22, 40, 255)",
          }}
        >
          <a
            className="navbar-anchor"
            style={{
              color:
                currentPage === "HistoricalList"
                  ? "white"
                  : "rgba(140, 150, 159, 255)",
            }}
          >
            <FileSearchOutlined />
            <span className="navbar-item-title">Historical List</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("Statistics");
          }}
          onMouseEnter={() => {
            handleMouseEnter("Statistics");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              currentPage === "Statistics"
                ? "rgb(40, 40, 93)"
                : mouseEnter === "Statistics"
                ? "rgb(70, 70, 214)"
                : "rgba(0, 22, 40, 255)",
          }}
        >
          <a
            className="navbar-anchor"
            style={{
              color:
                currentPage === "Statistics"
                  ? "white"
                  : "rgba(140, 150, 159, 255)",
            }}
          >
            <BarChartOutlined />
            <span className="navbar-item-title">Statistics</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("Settings");
          }}
          onMouseEnter={() => {
            handleMouseEnter("Settings");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              currentPage === "Settings"
                ? "rgb(40, 40, 93)"
                : mouseEnter === "Settings"
                ? "rgb(70, 70, 214)"
                : "rgba(0, 22, 40, 255)",
          }}
        >
          <a
            className="navbar-anchor"
            style={{
              color:
                currentPage === "Settings"
                  ? "white"
                  : "rgba(140, 150, 159, 255)",
            }}
          >
            <SettingOutlined />
            <span className="navbar-item-title">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
