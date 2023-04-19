import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";
import { Divider } from "antd";
import { Space, Typography } from "antd";
import "../../../styles/AddNewList.css"

const { Text, Link } = Typography;
export default function AddNewList() {
  const test = [
    {
      id: 1,
      name: "Apple",
      quantity: 2,
      unit: "kg",
      shop: "Woolworths",
    },
    {
      id: 2,
      name: "Milk",
      quantity: 2,
      unit: "bottle",
      shop: "Coles",
    },
    {
      id: 3,
      name: "Egg",
      quantity: 1,
      unit: "box",
      shop: "Aldi",
    },
    {
      id: 4,
      name: "Tomato",
      quantity: 3,
      unit: "kg",
      shop: "Woolworths",
    },
    {
      id: 5,
      name: "Soap",
      quantity: 5,
      unit: "box",
      shop: "Big W",
    },
  ];
  const [items, setItems] = useState(test);
  const [unit, setUnit] = useState([
    {
      value: "kg",
      label: "kg",
    },
    {
      value: "bottle",
      label: "bottle",
    },
    {
      value: "box",
      label: "box",
    },
    {
      value: "bag",
      label: "bag",
    },
  ]);
  const [shops, setShops] = useState([
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
      value: "Big W",
      label: "Big W",
    },
  ]);
  const addItem = (item) => {
    const newItemList = [...items, item];
    setItems(newItemList);
  };
  const updateItem = (newItemList) => { 
    setItems(newItemList);
  }
  //set inputItemValue state to receive values passed by clicking the tag
  const [inputItemValue, setInputItemValue] = useState({
    name: "",
    quantity: "",
    unit: "",
    shop:"",
  });
  //add properties from the tag clicked to inputItemValue state
  const addItemByTag = (item) => { 
    setInputItemValue(item);
  }

  const addItemByInput = (item) => { 
    setInputItemValue(item);
  }

  return (
    <div className="addnewlist-container">
      <div>
        <InputItem
          items={items}
          addItem={addItem}
          inputItemValue={inputItemValue}
          // addItemByTag={addItemByTag}
          addItemByInput={addItemByInput}
        />
        <Text strong className="choose-item-text">
          Or choose one item from the following tags
        </Text>
        <ItemTags items={items} addItemByTag={addItemByTag} />
      </div>
      <Divider />
      <div>
        <ShoppingList items={items} updateItem={updateItem} unit={ unit} shops={ shops} />
      </div>
    </div>
  );
}
