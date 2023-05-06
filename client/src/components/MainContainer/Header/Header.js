import React from "react";
import { Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Button, Dropdown, Space } from "antd";
import "../../../styles/Header.css";
import logo from "../../../images/logo.png"
import { Link } from "react-router-dom";

export default function Header(props) {
  const { userData } = props;
  const handleSignout = () => { 
    localStorage.removeItem("id_token");
  }
  const items = [
    {
      key: "1",
      label: <Link to={"/settings"}>Settings</Link>,
    },
    {
      key: "2",
      label: (
        <Link to={"/login"} onClick={handleSignout}>
          Sign out
        </Link>
      ),
    },
  ];
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo"></img>
        <span className="app-name">Shopper-Helper</span>
      </div>
      <div className="user-container">
        <span>Welcome back, { userData.username}</span>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <Avatar size={40} icon={<UserOutlined />} className="avatar" />
        </Dropdown>
      </div>
    </div>
  );
}
