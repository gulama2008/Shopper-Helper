import React from "react";
import { Button, Input, Select, Space } from "antd";
import "../../../styles/InputItem.css"

export default function InputItem() {
    return (
      <div className="input-item-container">
        <Space.Compact
          style={{
            // width: "100%",
          }}
        >
          <Input placeholder="Please enter an item" />
          <Button type="primary">Add</Button>
        </Space.Compact>
      </div>
    );
}
