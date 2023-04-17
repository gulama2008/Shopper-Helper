import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";
import { Divider } from "antd";
import { Space, Typography } from "antd";
import "../../../styles/AddNewList.css"

const { Text, Link } = Typography;
export default function AddNewList() {
  const [items, setItems] = useState([
    {
      name: "Apple",
      quantity: 1,
      shop: "Woolworths",
      price: 0,
    },
  ]);
  const addItem = (item) => { 
    const itemObj = {
      name: item,
      quantity: 1,
      shop: "Woolworths",
      price: 0,
    }
    const newItems = [...items, itemObj];
    setItems(newItems);
  }

  return (
    <div className="addnewlist-container">
      <div>
        <InputItem items={items} addItem={addItem} />

        
        <Text strong className="choose-item-text">Or choose one item from the following tags</Text>
      
        <ItemTags items={items} addItem={addItem} />
      </div>
      <Divider />
      <div>
        <ShoppingList items={items} />
      </div>
    </div>
  );
}
