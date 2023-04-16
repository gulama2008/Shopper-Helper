import { Space, Tag } from "antd";
import { useState } from "react";

function ItemTags(props) {
  const { items, addItem } = props;
  const tagArray = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Milk",
    },
    {
      id: 3,
      name: "Egg",
    },
    {
      id: 4,
      name: "Tomato",
    },
  ];
  const [tags, setTags] = useState(tagArray);

  const handleClickTag = (event) => { 
    addItem(event.target.innerText);
  }

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag) => { 
        return <Tag className="item-tag" key={tag.id} onClick={handleClickTag}>{ tag.name}</Tag>
      })}
  </Space>)
}
  
export default ItemTags;
