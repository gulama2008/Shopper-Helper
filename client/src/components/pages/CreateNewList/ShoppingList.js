import React, { useState } from "react";
// import { Space, Table, Button } from "antd";
import { Col, Divider, Row } from "antd";
import { Space, Typography } from "antd";
import "../../../styles/ShoppingList.css";
const { Text, Link } = Typography;

// const { Column, ColumnGroup } = Table;

const ShoppingList = (props) => {
  const items = props.items;
  console.log(items);
  return (
    // <Table
    //   dataSource={items}>
    //   <Column title="Item" dataIndex="name" key="name" />

    //   <Column
    //     title="Quantity"
    //     dataIndex="quantity"
    //     key="quantity"
    //   />
    //   <Column title="Unit" dataIndex="unit" key="unit" />
    //   <Column title="Shop Name" dataIndex="shop" key="shop" />
    //   <Column
    //     title="Action"
    //     key="action"
    //     render={(_, record) => (
    //       <Space size="middle">
    //         <Button type="primary">Bought!</Button>
    //         <a>Delete</a>
    //       </Space>
    //     )}
    //   />
    // </Table>
    <div>
      <div>
        <Row
          className="title-row"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row title-col" span={5}>
            <div className="">
              <Text strong className="title-text">
                Item
              </Text>
            </div>
          </Col>

          <Col className="gutter-row title-col" span={3}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Quantity
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={3}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Unit
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={6}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Shop
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={6}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Action
              </Text>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        {items.map((item) => { 
          return (
            <Row
              className="title-row"
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row title-col" span={5}>
                <div className="">
                  <Text strong className="title-text">
                    Item
                  </Text>
                </div>
              </Col>

              <Col className="gutter-row title-col" span={3}>
                <Divider type="vertical" className="title-divider" />
                <div>
                  <Text strong className="title-text">
                    Quantity
                  </Text>
                </div>
              </Col>
              <Col className="gutter-row title-col" span={3}>
                <Divider type="vertical" className="title-divider" />
                <div>
                  <Text strong className="title-text">
                    Unit
                  </Text>
                </div>
              </Col>
              <Col className="gutter-row title-col" span={6}>
                <Divider type="vertical" className="title-divider" />
                <div>
                  <Text strong className="title-text">
                    Shop
                  </Text>
                </div>
              </Col>
              <Col className="gutter-row title-col" span={6}>
                <Divider type="vertical" className="title-divider" />
                <div>
                  <Text strong className="title-text">
                    Action
                  </Text>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
