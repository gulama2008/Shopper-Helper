import React, { useState } from "react";
// import { Space, Table, Button } from "antd";
import { Col, Divider, Row, InputNumber, Select, Typography,Button } from "antd";
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
          <Col className="gutter-row title-col" span={5}>
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
        {items.map((item,index) => { 
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
              <Col className="gutter-row content-col" span={5}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Select
                    defaultValue={item.shop}
                    style={{
                      width: 150,
                    }}
                    onChange={handleShopChange(index)}
                    options={shops}
                  />
                </div>
              </Col>
              <Col className="gutter-row content-col" span={6}>
                <Divider type="vertical" className="content-divider" />
                <div>
                  <Button type="primary">Bought</Button>
                  <CloseOutlined className="delete-icon" onClick={() => { handleDeleteButton(index)}} />
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
