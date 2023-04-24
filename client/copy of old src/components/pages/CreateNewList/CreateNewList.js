import React, { useState } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";
import { Divider } from "antd";
import { DatePicker, Typography } from "antd";
import "../../../styles/AddNewList.css"
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";
const weekFormat = "DD/MM";
const monthFormat = "MM/YYYY";
const { Text } = Typography;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

export default function AddNewList() {
  const test = [
    {
      id: 1,
      date: "",
      name: "Apple",
      quantity: 2,
      unit: "kg",
      shop: "Woolworths",
      price: "",
      bought: false,
    },
    {
      id: 2,
      date: "",
      name: "Milk",
      quantity: 2,
      unit: "bottle",
      shop: "Coles",
      price: "",
      bought: false,
    },
    {
      id: 3,
      date: "",
      name: "Egg",
      quantity: 1,
      unit: "box",
      shop: "Aldi",
      price: "",
      bought: false,
    },
    {
      id: 4,
      date: "",
      name: "Tomato",
      quantity: 3,
      unit: "kg",
      shop: "Woolworths",
      price: "",
      bought: false,
    },
    {
      id: 5,
      date: "",
      name: "Soap",
      quantity: 5,
      unit: "box",
      shop: "Big W",
      price: "",
      bought: false,
    },
  ];
  const [items, setItems] = useState(test);
  const [date, setDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [unitOptions, setUnitOptions] = useState([
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
  const [shopOptions, setShopOptions] = useState([
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
  
  const handleDateChange = (date, dateString) => {
    setDate(dateString);
    const newItemList = items.map((item) => {
      item.date = dateString;
      return item;
    });
    updateItem(newItemList);
  };

  return (
    <div className="addnewlist-container">
      <div>
        <InputItem
          items={items}
          addItem={addItem}
          unitOptions={unitOptions}
          shopOptions={shopOptions}
          date={ date}
        />
        <Text strong className="choose-item-text">
          Or choose one item from the following tags
        </Text>
        <ItemTags items={items} addItem={addItem} date={ date} />
      </div>
      <Divider />
      <div className="date-picker">
        <DatePicker
          defaultValue={dayjs()}
          format={dateFormatList}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <ShoppingList
          items={items}
          updateItem={updateItem}
          unitOptions={unitOptions}
          shopOptions={shopOptions}
          date={ date}
        />
      </div>
    </div>
  );
}
