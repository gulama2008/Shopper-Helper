import React, { useState } from "react";
import {
  ProfileOutlined,
  FileSearchOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "../../styles/Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar(props) {
  //get the props passing from component App
  const { currentPage, handlePageChange } = props;
  const [mouseEnter, setMouseEnter] = useState("");
  
  const handleMouseEnter = (title) => {
    setMouseEnter(title);
  };
  const handleMouseLeave = () => { 
    setMouseEnter("");
  }

  return (
    <div className="navbar-container">
      <ul className="navbar">
        
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("CreateNewList");
          }}
          onMouseEnter={() => {
            handleMouseEnter("CreateNewList");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              currentPage === "CreateNewList"
                ? "rgb(40, 40, 93)"
                : mouseEnter === "CreateNewList"
                ? "rgb(70, 70, 214)"
                : "rgba(0, 22, 40, 255)",
          }}
        >
          <Link
            to={"/"}
            className="navbar-anchor"
            style={{
              color:
                currentPage === "CreateNewList"
                  ? "white"
                  : "rgba(140, 150, 159, 255)",
            }}
          >
            <ProfileOutlined />
            <span className="navbar-item-title">Create New List</span>
          </Link>
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
          <Link
            to={"/historical-list"}
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
          </Link>
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
          <Link
            to={"/statistics"}
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
          </Link>
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
          <Link
            to={"/settings"}
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
          </Link>
        </li>
      </ul>
    </div>
  );
}
