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
        >
          <a className="navbar-anchor">
            <ProfileOutlined />
            <span className="navbar-item-title">Add New List</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("HistoricalList");
          }}
        >
          <a className="navbar-anchor">
            <FileSearchOutlined />
            <span className="navbar-item-title">Historical List</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("Statistics");
          }}
        >
          <a className="navbar-anchor">
            <BarChartOutlined />
            <span className="navbar-item-title">Statistics</span>
          </a>
        </li>
        <li
          className="navbar-item"
          onClick={() => {
            handlePageChange("Settings");
          }}
        >
          <a className="navbar-anchor">
            <SettingOutlined />
            <span className="navbar-item-title">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
