// import React, { useState } from "react";
// import { Button, Input, Select, Space } from "antd";
// import "../../../styles/InputItem.css"

// export default function InputItem(props) {
//     const { items, addItem } = props;
//     const [inputValue, setInputValue] = useState();
//     const getInputValue = (e) => { 
//         setInputValue(e.target.value);
//     }
//     const handdleAddItem = (e) => { 
//         e.preventDefault();
//         addItem(inputValue);
//         setInputValue("");
//     }

//     return (
//       <div className="input-item-container">
//         <Space.Compact
//           style={{
//             // width: "100%",
//           }}
//         >
//         <Input placeholder="Please enter an item" onChange={getInputValue} value={ inputValue} />
//           <Button type="primary" onClick={handdleAddItem}>Add Item</Button>
//         </Space.Compact>
//       </div>
//     );
// }

import { Button, Form, Input, Select, InputNumber } from "antd";
import { useState } from "react";
const InputItem = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");

  const selectOptions = [
    {
      value: "Woolworths",
      label: "Woolworths",
    },
    {
      value: "Coles",
      label: "Coles",
    },
    {
      value: "Aldi",
      label: "Aldi",
    },
    {
      value: "Tongli",
      label: "Tongli",
    },
    {
      value: "Kmart",
      label: "Kmart",
    },
    {
      value: "Big W",
      label: "Big W",
    },
  ];
  const handleShopChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handlePriceChange = (value) => {
    console.log("changed", value);
  };
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      style={{}}
    >
      <Form.Item label="Item">
        <Input placeholder="Please enter an item" />
      </Form.Item>
      <Form.Item label="Quantity">
        <Input
          placeholder=""
          style={{
            width: 50,
          }}
        />
      </Form.Item>
      <Form.Item label="Shop">
        <Select
          defaultValue="Woolworths"
          style={{
            width: 120,
          }}
          onChange={handleShopChange}
          options={selectOptions}
        />
      </Form.Item>
      {/* <Form.Item label="Price">
        <InputNumber min={0} defaultValue={0} onChange={handlePriceChange} />
      </Form.Item> */}
      <Form.Item>
        <Button type="primary">Add</Button>
      </Form.Item>
    </Form>
  );
};
export default InputItem;
