import { Button, Form, Input, Select, InputNumber, AutoComplete } from "antd";
import React from "react";
import { useState } from "react";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const InputItem = (props) => {
  const { items, addItem, unitOptions,shopOptions,userShops,date } =
    props;
  console.log(shopOptions);
  console.log(userShops);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
const [options, setOptions] = useState(shopOptions);

  
  //set states for the current values in all form's areas
  const [currentItemName, setCurrentItemName] = useState();
  const [currentItemQuantity, setCurrentItemQuantity] = useState();
  const [currentItemUnit, setCurrentItemUnit] = useState();
  const [currentItemShop, setCurrentItemShop] = useState();

  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  
  //handle functions when values changes in form's areas
  const handleNameChange = (e) => { 
    setCurrentItemName(e.target.value.toLowerCase());
  }
  const handleQuantityChange = (value) => {
    setCurrentItemQuantity(value);
  };
  const handleUnitChange = (value) => {
    setCurrentItemUnit(value);
  };
  const handleShopChange = (value) => {
    setCurrentItemShop(value.toLowerCase());
  };

  const handleAddButtonClick = (e) => { 
    e.preventDefault();
    const newItem = {
      name: currentItemName,
      quantity: currentItemQuantity,
      unit: currentItemUnit,
      shop: currentItemShop,
      price: 0,
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
        <AutoComplete
          // value={value}
          options={shopOptions}
          style={{
            width: 200,
          }}
          onSelect={handleShopChange}
          onSearch={(text) => setOptions(getPanelValue(text))}
          onChange={handleShopChange}
          placeholder="control mode"
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
