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
const InputItem = (props) => {
  const { items, addItem, inputItemValue, addItemByTag, addItemByInput } =
    props;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");

  //set states for the current values in all form's areas
  const [currentItemName, setCurrentItemName] = useState();
  const [currentItemQuantity, setCurrentItemQuantity] = useState();
  const [currentItemUnit, setCurrentItemUnit] = useState();
  const [currentItemShop, setCurrentItemShop] = useState();
  const [currentFullItem, setCurrentFullItem] = useState({
    name: "",
    quantity: "",
    unit: "",
    shop:"",
  });
  //handle functions when values changes in form's areas
  const handleNameChange = async(e) => {
    const newName=await setCurrentItemName(e.target.value);
    setCurrentFullItem({
      name: currentItemName,
      quantity: currentItemQuantity,
      unit: currentItemUnit,
      shop: currentItemShop
    });
    addItemByInput(currentFullItem);
  }
  const handleQuantityChange = (e) => {
    setCurrentItemQuantity(e.target.value);
  };
  const handleUnitChange = (e) => {
    setCurrentItemUnit(e.target.value);
  };
  const handleShopChange = (e) => {
    setCurrentItemShop(e.target.value);
  };

  //set state for a collection of all values from the form areas
  // const [itemObj, setItemObj] = useState();

  const handleAddButtonClick = (e) => { 
    e.preventDefault();
    const newItem = {
      name: currentItemName,
      quantity: currentItemQuantity,
      unit: currentItemUnit,
      shop: currentItemShop,
    }
    addItem(newItem);
  }
  const unitOptions = [
    {
      value: "kg",
      label: "kg",
    },
    {
      value: "box",
      label: "box",
    },
    {
      value: "bottle",
      label: "bottle",
    },
    {
      value: "bag",
      label: "bag",
    },
  ];
  const shopOptions = [
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
        <Input
          placeholder="Please enter an item"
          // value={inputItemValue ? inputItemValue.name : currentItemName}
          value={ inputItemValue.name}
          onChange={handleNameChange}
        />
      </Form.Item>
      <Form.Item label="Quantity">
        <InputNumber
          min={1}
          placeholder=""
          style={{
            width: 50,
          }}
          onChange={handleQuantityChange}
          value={
            inputItemValue
              ? inputItemValue.defaultQuantity
              : currentItemQuantity
          }
        />
      </Form.Item>
      <Form.Item label="Unit">
        <Select
          defaultValue="kg"
          style={{
            width: 80,
          }}
          onChange={handleUnitChange}
          options={unitOptions}
          value={inputItemValue ? inputItemValue.defaultUnit : currentItemUnit}
        />
      </Form.Item>
      <Form.Item label="Shop">
        <Select
          defaultValue="Woolworths"
          style={{
            width: 120,
          }}
          onChange={handleShopChange}
          options={shopOptions}
          value={inputItemValue ? inputItemValue.defaultShop : currentItemShop}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleAddButtonClick}>
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InputItem;
