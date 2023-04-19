import React, { useState } from "react";
// import { Space, Table, Button } from "antd";
import {
  Col,
  Divider,
  Row,
  InputNumber,
  Select,
  Typography,
  Button,
  Input,
} from "antd";
import { DeleteOutlined,CloseOutlined} from "@ant-design/icons";
import "../../../styles/ShoppingList.css";
const { Text, Link } = Typography;

// const { Column, ColumnGroup } = Table;

const ShoppingList = (props) => {
  const { items,updateItem,unit,shops } = props;
  // const [quantity, setQuantity] = useState();

  const handleQuantityChange = (index) => { 
    return (e) => { 
      const newItemList = items.map((item,itemIndex) => { 
        if (itemIndex === index) {
          item.quantity = e;
          return item;
        } else {
          return item;
        }
      })
      updateItem(newItemList); 
      
      }
    }
  
  const handleUnitChange = (index) => {
    return (e) => {
      const newItemList = items.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.unit = e;
          return item;
        } else {
          return item;
        }
      });
      updateItem(newItemList);
    };
  };

  const handleShopChange = (index) => {
    return (e) => {
      const newItemList = items.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.shop = e;
          return item;
        } else {
          return item;
        }
      });
      updateItem(newItemList);
    };
  };

  const handlePriceChange = (index) => {
    return (e) => {
      const newItemList = items.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.price = e.target.value;
          return item;
        } else {
          return item;
        }
      });
      updateItem(newItemList);
    };
  };

  const handleBoughtButton = (index) => { 
    const newItemList = items.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.bought = !item.bought;
        return item;
      } else {
        return item;
      }
    });
    updateItem(newItemList);
  }
  const handleDeleteButton = (index) => {
    const newItemList = items.filter((item, itemIndex) => {
      return itemIndex!==index
    });
    updateItem(newItemList);
  }
  
  return (
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
          <Col className="gutter-row title-col" span={3}>
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
          <Col className="gutter-row title-col" span={4}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Shop
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={3}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Unit Price
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={3}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Total Price
              </Text>
            </div>
          </Col>
          <Col className="gutter-row title-col" span={4}>
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
        {items.map((item, index) => {
          return (
            <Row
              key={item.id}
              className="content-row"
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row content-col-name" span={3}>
                <div className="">{item.name}</div>
              </Col>

              <Col className="gutter-row content-col" span={3}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <InputNumber
                    min={1}
                    value={item.quantity}
                    onChange={handleQuantityChange(index)}
                  />
                </div>
              </Col>
              <Col className="gutter-row content-col" span={3}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Select
                    defaultValue={item.unit}
                    style={{
                      width: 80,
                    }}
                    onChange={handleUnitChange(index)}
                    options={unit}
                  />
                </div>
              </Col>
              <Col className="gutter-row content-col" span={4}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Select
                    defaultValue={item.shop}
                    style={{
                      width: 120,
                    }}
                    onChange={handleShopChange(index)}
                    options={shops}
                  />
                </div>
              </Col>
              <Col className="gutter-row content-col" span={3}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Input
                    value={item.price}
                    onChange={handlePriceChange(index)}
                  />
                </div>
              </Col>
              <Col className="gutter-row content-col-name" span={3}>
                <Divider type="vertical" className="content-divider" />
                <div className="">{item.quantity * item.price}</div>
              </Col>

              <Col className="gutter-row content-col" span={4}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Button
                    className="bought-button"
                    type="primary"
                    onClick={() => {
                      handleBoughtButton(index);
                    }}
                    style={
                      item.bought
                        ? {
                            backgroundColor: "rgba(245,245,245,255)",
                            color: "rgba(184,184,184,255)",
                          }
                        : {
                            backgroundColor: "rgba(23,119,255,255)",
                            color: "rgba(254,254,255,255)",
                          }
                    }
                  >
                    { item.bought?"Bought":"Pending"}
                  </Button>
                  <CloseOutlined
                    className="delete-icon"
                    onClick={() => {
                      handleDeleteButton(index);
                    }}
                  />
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
