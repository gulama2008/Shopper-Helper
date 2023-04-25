import React from "react";
import { DatePicker, Space,Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

export default function SearchBar() {
  
    return (
      <div>
        <Space direction="vertical" size={12}>
          <span>Please select the date range</span>
          <RangePicker />
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </Space>
      </div>
    );
}
