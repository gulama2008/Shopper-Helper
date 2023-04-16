import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";

export default function AddNewList() {
  const [items, setItems] = useState([]);
  const addItem = (item) => { 
    const newItems = [...items, item];
    setItems(newItems);
    console.log(items);
  }

  return (
    <div className="aboutme-container">
      <div>
        <InputItem items={items} addItem={addItem} />
        <div>Or choose one item from the following tags</div>
        <ItemTags items={items} addItem={addItem} />
      </div>
      <div>
        <ShoppingList />
      </div>
    </div>
  );
}
