import { Space, Tag } from "antd";
import React from "react";
import { useState } from "react";
import "../../../styles/ItemTags.css"

function ItemTags(props) {
  const { items,addItemByTag}=props
  const tagArray = [
    {
      id: 1,
      name: "Apple",
      defaultQuantity: 3,
      defaultUnit: "kg",
      defaultShop: "Woolworths",
    },
    {
      id: 2,
      name: "Milk",
      defaultQuantity: 2,
      defaultUnit: "bottle",
      defaultShop: "Aldi",
    },
    {
      id: 3,
      name: "Egg",
      defaultQuantity: 2,
      defaultUnit: "box",
      defaultShop: "Coles",
    },
    {
      id: 4,
      name: "Tomato",
      defaultQuantity: 5,
      defaultUnit: "kg",
      defaultShop: "Woolworths",
    },
  ];
  const [tags, setTags] = useState(tagArray);

  const test = {
    id: 1,
    name: "Apple",
    defaultQuantity: 0,
    defaultUnit: "kg",
    defaultShop: "Woolworths",
  };

  const handleTagClick = (e) => { 
    const item = tags.find((tag) => tag.name === e.target.innerText)
    addItemByTag(item);
    // addItemByTag();
  } 

  

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag) => { 
        return <Tag className="item-tag" key={tag.id} onClick={handleTagClick}>{ tag.name}</Tag>
      })}
  </Space>)
}
  
export default ItemTags;
