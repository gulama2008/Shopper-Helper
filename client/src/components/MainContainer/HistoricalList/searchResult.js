import React from "react";
import { Collapse } from "antd";
import { Table, Typography } from "antd";
const { Text } = Typography;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Unit",
    dataIndex: "unit",
  },
  {
    title: "Shop",
    dataIndex: "shop",
  },
  {
    title: "Unit Price",
    dataIndex: "price",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
  },
];
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function SearchResult(props) {
  const { userLists,searchResult } = props;
  console.log("Result:", searchResult);
  console.log(userLists);

  const groups = userLists.reduce((groups, list) => {
    const date = list.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(list);
    return groups;
  }, {});
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      lists: groups[date],
    };
  });
  console.log(groupArrays);


  return (
    <div>
      {groupArrays.map((e) => { 
return (
  <div>
    <Collapse defaultActiveKey={""}>
      <Panel header={e.date} key={ e.date}>
        <Table
          columns={columns}
          dataSource={e.lists}
          pagination={false}
          bordered
          summary={(pageData) => {
            let total = 0;
            pageData.forEach(({ totalPrice }) => {
              total += totalPrice;
            });
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={5}>
                    Total
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2}>
                    <Text type="danger">{total}</Text>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </Panel>
      
    </Collapse>
  </div>
);
      })}
      
    </div>
  );
}
