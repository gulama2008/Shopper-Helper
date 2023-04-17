import React, { useState } from "react";
import { Button, Input, Select, Space } from "antd";
import "../../../styles/InputItem.css"

export default function InputItem(props) {
    const { items, addItem } = props;
    const [inputValue, setInputValue] = useState();
    const getInputValue = (e) => { 
        setInputValue(e.target.value);
    }
    const handdleAddItem = (e) => { 
        e.preventDefault();
        addItem(inputValue);
        setInputValue("");
    }

    return (
      <div className="input-item-container">
        <Space.Compact
          style={{
            // width: "100%",
          }}
        >
        <Input placeholder="Please enter an item" onChange={getInputValue} value={ inputValue} />
          <Button type="primary" onClick={handdleAddItem}>Add Item</Button>
        </Space.Compact>
      </div>
    );
}
