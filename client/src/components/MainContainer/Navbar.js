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
          className="navbar-item first-item"
          onClick={() => {
            handlePageChange("CreateNewList");
          }}
          onMouseEnter={() => {
            handleMouseEnter("CreateNewList");
          }}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundColor:
              window.location.pathname === "/"
                ? "rgba(13,107,171,255)"
                : mouseEnter === "CreateNewList"
                ? "rgba(30,127,193,255)"
                : "#21507e",
          }}
        >
          <Link
            to={"/"}
            className="navbar-anchor"
            style={{
              color:
                window.location.pathname === "/"
                  ? "white"
                  : "rgba(204,222,231,255)",
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
              window.location.pathname === "/historical-list"
                ? "rgba(13,107,171,255)"
                : mouseEnter === "HistoricalList"
                ? "rgba(30,127,193,255)"
                : "#21507e",
          }}
        >
          <Link
            to={"/historical-list"}
            className="navbar-anchor"
            style={{
              color:
                window.location.pathname === "/historical-list"
                  ? "white"
                  : "rgba(204,222,231,255)",
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
              window.location.pathname === "/statistics"
                ? "rgba(13,107,171,255)"
                : mouseEnter === "Statistics"
                ? "rgba(30,127,193,255)"
                : "#21507e",
          }}
        >
          <Link
            to={"/statistics"}
            className="navbar-anchor"
            style={{
              color:
                window.location.pathname === "/statistics"
                  ? "white"
                  : "rgba(204,222,231,255)",
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
              window.location.pathname === "/settings"
                ? "rgba(13,107,171,255)"
                : mouseEnter === "Settings"
                ? "rgba(30,127,193,255)"
                : "#21507e",
          }}
        >
          <Link
            to={"/settings"}
            className="navbar-anchor"
            style={{
              color:
                window.location.pathname === "/settings"
                  ? "white"
                  : "rgba(204,222,231,255)",
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
