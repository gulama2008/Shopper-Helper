import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";
import { Divider } from "antd";
import { Space, Typography } from "antd";
import "../../../styles/AddNewList.css"

const { Text, Link } = Typography;
export default function AddNewList() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    const newItemList = [...items, item];
    setItems(newItemList);
  };

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
          addItemByInput={ addItemByInput}
        />
        <Text strong className="choose-item-text">
          Or choose one item from the following tags
        </Text>
        <ItemTags items={items} addItemByTag={addItemByTag} />
      </div>
      <Divider />
      <div>
        <ShoppingList items={items} />
      </div>
    </div>
  );
}
