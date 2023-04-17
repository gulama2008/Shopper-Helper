import React, { useState } from "react";
import { Space, Table, Button } from "antd";
const { Column, ColumnGroup } = Table;

const ShoppingList = (props) => {
  const items = props.items;
  const handleClickOnCell = (record, rowIndex) => {
    return {
      onClick: (event) => { 

      }
    }
  };
  return (
    <Table dataSource={items} >
      <Column title="Item" dataIndex="name" key="name" />

      <Column title="Quantity" dataIndex="quantity" key="quantity" onCell={handleClickOnCell}/>
      <Column title="Shop Name" dataIndex="shop" key="shop" />
      {/* <Column title="Unit Price" dataIndex="price" key="price" /> */}
      <Column
        title="Action"
        key="action"
        render={(_, record) => (
          <Space size="middle">
            <Button type="primary">Bought!</Button>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default ShoppingList;
