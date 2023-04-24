import { Button, Form, Input, Select, InputNumber } from "antd";
import React from "react";
import { useState } from "react";

const InputItem = (props) => {
  const { items, addItem, unitOptions,shopOptions,date } =
    props;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");

  //set states for the current values in all form's areas
  const [currentItemName, setCurrentItemName] = useState();
  const [currentItemQuantity, setCurrentItemQuantity] = useState();
  const [currentItemUnit, setCurrentItemUnit] = useState();
  const [currentItemShop, setCurrentItemShop] = useState();

  //handle functions when values changes in form's areas
  const handleNameChange = (e) => { 
    setCurrentItemName(e.target.value);
  }
  const handleQuantityChange = (value) => {
    setCurrentItemQuantity(value);
  };
  const handleUnitChange = (value) => {
    setCurrentItemUnit(value);
  };
  const handleShopChange = (value) => {
    setCurrentItemShop(value);
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
      price: "",
      date: date,
      bought: false,
    };
    addItem(newItem);
    console.log(newItem);
  }
  
  
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
          // value={ inputItemValue.name}
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
        />
      </Form.Item>
      <Form.Item label="Unit">
        <Select
          style={{
            width: 80,
          }}
          onChange={handleUnitChange}
          options={unitOptions}
        />
      </Form.Item>
      <Form.Item label="Shop">
        <Select
          style={{
            width: 120,
          }}
          onChange={handleShopChange}
          options={shopOptions}
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
