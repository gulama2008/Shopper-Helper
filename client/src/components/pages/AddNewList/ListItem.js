import React from "react";
import { Button } from "antd";

export default function ListItem(props) {
  const item = props.item;
  return (
    <div className="aboutme-container" closable>
      <span>{item}</span>
      <Button type="primary">Done</Button>
    </div>
  );
}
