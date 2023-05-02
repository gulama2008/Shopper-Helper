import Item from "antd/es/list/Item";
import React, { useState, useEffect } from "react";
import Items from "./Items";
import Shops from "./Shops";
import { Tabs } from "antd";

const Settings = (props) => { 
  const { userItems, userShops,refetch } = props
  console.log(userItems,userShops);
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Preset Items`,
      children: (
        <Items
          userItems={userItems}
          refetch={refetch}
        />
      ),
    },
    {
      key: "2",
      label: `Preset Shops`,
      children: (
        <Shops
          userShops={userShops}
          refetch={refetch}
        />
      ),
    },
  ];
  return <Tabs  items={items} onChange={onChange} />;
}

export default Settings;