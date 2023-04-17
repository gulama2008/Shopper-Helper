import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";

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
    <div className="aboutme-container">
      <div>
        <InputItem items={items} addItem={addItem} />
        <div>Or choose one item from the following tags</div>
        <ItemTags items={items} addItem={addItem} />
      </div>
      <div>
        <ShoppingList items={ items} />
      </div>
    </div>
  );
}
