import React, { useState } from "react";
import {
  Col,
  Divider,
  Row,
  InputNumber,
  Select,
  Typography,
  Button,
  Input,
  DatePicker,
} from "antd";
import { CloseOutlined} from "@ant-design/icons";
import "../../../styles/ShoppingList.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = "DD/MM/YYYY";
const weekFormat = "DD/MM";
const monthFormat = "MM/YYYY";
const { Text} = Typography;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const ShoppingList = (props) => {
  const { items, updateItem, unit, shops } = props;

  //change the date of each item in the state into the date on the date-picker
  const handleDateChange = (date, dateString) => {
    const newItemList = items.map((item) => {
      item.date = dateString;
      return item;
    });
    updateItem(newItemList);
  };

  //change the quantity of each item in the state into the quantity entered in the input box
  const handleQuantityChange = (index) => {
    return (e) => {
      const newItemList = items.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.quantity = e;
          return item;
        } else {
          return item;
        }
      });
      updateItem(newItemList);
    };
  };

  //change the unit of each item in the state into the unit chosen from the select box
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

  //change the shop of each item in the state into the shop chosen from the select box
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

  //change the price of each item in the state into the price entered in the input box
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

  //change the status of each item in the state into bought or pending when clicking the button
  const handleStatusButton = (index) => {
    const newItemList = items.map((item, itemIndex) => {
      if (itemIndex === index) {
        item.bought = !item.bought;
        return item;
      } else {
        return item;
      }
    });
    updateItem(newItemList);
  };

  //delete the item from the state when click the delete icon
  const handleDeleteButton = (index) => {
    const newItemList = items.filter((item, itemIndex) => {
      return itemIndex !== index;
    });
    updateItem(newItemList);
  };

  return (
    <div>
      <div className="date-picker">
        <DatePicker
          defaultValue={dayjs()}
          format={dateFormatList}
          onChange={handleDateChange}
        />
      </div>
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
                    className="status-button"
                    type="primary"
                    onClick={() => {
                      handleStatusButton(index);
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
                    {item.bought ? "Bought" : "Pending"}
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
