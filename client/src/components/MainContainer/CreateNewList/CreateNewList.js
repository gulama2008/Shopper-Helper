import React, { useState,useEffect } from "react";
import InputItem from "./InputItem";
import ItemTags from "./ItemTags";
import ShoppingList from "./ShoppingList";
import { Divider, Empty } from "antd";
import { DatePicker, Typography } from "antd";
import "../../../styles/AddNewList.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { genTypeStyle } from "antd/es/alert/style";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";
const weekFormat = "DD/MM";
const monthFormat = "MM/YYYY";
const { Text } = Typography;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

export default function CreateNewList(props) {
  const { userItems,userShops,clickSubmit,handleClickSubmit } = props;
  console.log(userItems);
  const test = [
    {
      date: "26/04/2023",
      name: "Apple",
      quantity: 2,
      unit: "kg",
      shop: "Woolworths",
      price: 0,
      bought: false,
    },
    {
      date: "26/04/2023",
      name: "Milk",
      quantity: 2,
      unit: "bottle",
      shop: "Coles",
      price: 0,
      bought: false,
    },
    {
      date: "26/04/2023",
      name: "Egg",
      quantity: 1,
      unit: "box",
      shop: "Aldi",
      price: 0,
      bought: false,
    },
    {
      date: "26/04/2023",
      name: "Tomato",
      quantity: 3,
      unit: "kg",
      shop: "Woolworths",
      price: 0,
      bought: false,
    },
    {
      date: "26/04/2023",
      name: "Soap",
      quantity: 5,
      unit: "box",
      shop: "Big W",
      price: 0,
      bought: false,
    },
  ];
  const [items, setItems] = useState([]);
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
    {
      value: "piece",
      label: "piece",
    },
    {
      value: "unit",
      label: "unit",
    },
  ]);
  const [shopOptions, setShopOptions] = useState([]);

  useEffect(() => {
    const shops = userShops.map((shop) => { 
      console.log(shop);
      return {label:shop,value:shop}
    })
    setShopOptions(shops)
  }, []);

  const addItem = (item) => {
    const newItemList = [...items, item];
    setItems(newItemList);
  };
  const updateItem = (newItemList) => {
    setItems(newItemList);
  };

  const deleteItems = () => { 
    setItems([]);
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
          date={date}
          userShops={userShops}
        />
        <Text strong className="choose-item-text">
          Or choose one item from the following tags
        </Text>
        <ItemTags
          items={items}
          addItem={addItem}
          userItems={userItems}
          date={date}
        />
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
          deleteItems={deleteItems}
          updateItem={updateItem}
          unitOptions={unitOptions}
          shopOptions={shopOptions}
          userShops={userShops}
          date={date}
          clickSubmit={clickSubmit}
          handleClickSubmit={handleClickSubmit}
        />
      </div>
    </div>
  );
}
