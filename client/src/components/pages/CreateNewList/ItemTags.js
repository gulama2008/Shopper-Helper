import { Space, Tag } from "antd";
import React from "react";
import { useState } from "react";
import "../../../styles/ItemTags.css"

function ItemTags(props) {
  const { items,addItem}=props
  const tagArray = [
    {
      id: 1,
      name: "Apple",
      quantity: 3,
      unit: "kg",
      shop: "Woolworths",
      price: "",
    },
    {
      id: 2,
      name: "Milk",
      quantity: 1,
      unit: "bottle",
      shop: "Coles",
      price: 3.5,
    },
    {
      id: 3,
      name: "Egg",
      quantity: 2,
      unit: "box",
      shop: "Aldi",
      price: 4.5,
    },
    {
      id: 4,
      name: "Tomato",
      quantity: 3,
      unit: "kg",
      shop: "Woolworths",
      price: "",
    },
  ];
  const [tags, setTags] = useState(tagArray);

  const handleTagClick = (e) => { 
    const item = tags.find((tag) => tag.name === e.target.innerText)
    addItem(item);
  } 

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag) => { 
        return <Tag className="item-tag" key={tag.id} onClick={handleTagClick}>{ tag.name}</Tag>
      })}
  </Space>)
}
  
export default ItemTags;
