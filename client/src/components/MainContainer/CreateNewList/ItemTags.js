import { Space, Tag } from "antd";
import React from "react";
import { useState } from "react";
import "../../../styles/ItemTags.css"

function ItemTags(props) {
  const { items,addItem,userItems,date}=props
  const [tags, setTags] = useState(userItems);
console.log(tags);
  const handleTagClick = (e) => { 
    const item = tags.find((tag) => tag.name === e.target.innerText)
    const newItem = {...item,date:date}    
    // item.date = date;
    addItem(newItem);
  } 

  return (
    <Space size={[0, 8]} wrap>
      { tags.length?(tags.map((tag) => { 
        return <Tag className="item-tag" key={tag.id} onClick={handleTagClick}>{ tag.name}</Tag>
      })):(<div>No pre-set items</div>)}
      
  </Space>)
}
  
export default ItemTags;
