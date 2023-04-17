// import React from "react";
// import ListItem from "./ListItem";

// export default function ShoppingList(props) {
//     const items = props.items;
//     return (
//         <div className="aboutme-container">
            
//         <ul>
//           {items.map((item, index) => {
//               return (
//                 <li>
//                   <ListItem item={item} />
//                 </li>
//               );
//           })}
//         </ul>
            
//       </div>
//     );
// }

import { Space, Table, Button } from "antd";
const { Column, ColumnGroup } = Table;
// const items = [
//   {
//     key: "1",
//     name: "John",

//     quantity: 32,
//     shop: "New York No. 1 Lake Park",
//     price: 1,
//   },
//   {
//     key: "2",
//     name: "John",

//     quantity: 32,
//     shop: "New York No. 1 Lake Park",
//     price: 1,
//   },
//   {
//     key: "3",
//     name: "John",

//     quantity: 32,
//     shop: "New York No. 1 Lake Park",
//     price: 1,
//   },
// ];
const ShoppingList = (props) => {
    const items  = props.items;
    return (
        <Table dataSource={items}>
        <Column title="Item" dataIndex="name" key="name" />

        <Column title="Quantity" dataIndex="quantity" key="quantity" />
        <Column title="Shop Name" dataIndex="shop" key="shop" />
        <Column title="Unit Price" dataIndex="price" key="price" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button>Done</Button>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    );
    
}

export default ShoppingList;