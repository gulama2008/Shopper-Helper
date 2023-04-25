import { Space, Tag } from "antd";
import React from "react";
import { useState } from "react";
import "../../../styles/ItemTags.css"

function ItemTags(props) {
  const { items,addItem,userItems,date}=props
  const [tags, setTags] = useState(userItems);

  const handleTagClick = (e) => { 
    const item = tags.find((tag) => tag.name === e.target.innerText)
    const newItem = {...item,date:date}    
    // item.date = date;
    addItem(newItem);
  } 

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag) => { 
        return <Tag className="item-tag" key={tag.id} onClick={handleTagClick}>{ tag.name}</Tag>
      })}
  </Space>)
}
  
export default ItemTags;
