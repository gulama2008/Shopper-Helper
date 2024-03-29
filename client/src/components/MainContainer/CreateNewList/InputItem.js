import {
  Button,
  Form,
  Input,
  InputNumber,
  AutoComplete,
  Modal,
} from "antd";
import React from "react";
import { useState } from "react";
import "../../../styles/InputItem.css"

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const InputItem = (props) => {
  const {  addItem, unitOptions,shopOptions,userShops,date } = props;
  console.log(shopOptions);
  console.log(userShops);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("inline");
  const [options, setOptions] = useState(shopOptions);
  
  //handle model showing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
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
    if (!newItem.name) {
      setIsModalOpen(true);

    } else { 
      addItem(newItem);
    }
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
      <Form.Item
        label="Item"
        name="Item"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          placeholder="Please enter an item"
          onChange={handleNameChange}
        />
      </Form.Item>
      <Form.Item
        label="Quantity"
      >
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
        <AutoComplete
          options={unitOptions}
          style={{
            width: 80,
          }}
          onSelect={handleUnitChange}
          onSearch={(text) => setOptions(getPanelValue(text))}
          onChange={handleUnitChange}
        />
      </Form.Item>
      <Form.Item label="Shop">
        <AutoComplete
          options={shopOptions}
          style={{
            width: 200,
          }}
          onSelect={handleShopChange}
          onSearch={(text) => setOptions(getPanelValue(text))}
          onChange={handleShopChange}
        />
      </Form.Item>
      <Form.Item>
        <Button  onClick={handleAddButtonClick} className="button">
          Add
        </Button>
        <Modal
          title=""
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Item name is required!</p>
        </Modal>
      </Form.Item>
    </Form>
  );
};
export default InputItem;
