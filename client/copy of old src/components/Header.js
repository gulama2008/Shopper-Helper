import React from "react";
import { Col, Row } from "antd";
import "../styles/Header.css";

export default function Header() {
  return (
    <Row className="header-container">
          <Col span={ 24} className="header-content">Siyu Liu</Col>
    </Row>
  );
}
