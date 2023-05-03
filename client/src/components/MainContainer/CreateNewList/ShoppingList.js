import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LIST } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
import {
  Col,
  Divider,
  Row,
  InputNumber,
  Select,
  Typography,
  Button,
  Input,
  Empty,
  AutoComplete,
} from "antd";
import { CloseOutlined} from "@ant-design/icons";
import "../../../styles/ShoppingList.css";
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const { Text} = Typography;

const ShoppingList = (props) => {
  const { items, deleteItems,updateItem, unitOptions, shopOptions,date,clickSubmit,handleClickSubmit,refetch } = props;
  const [size, setSize] = useState("large"); 
  const [addList, { error, data }] = useMutation(ADD_LIST);
  const [options, setOptions] = useState(shopOptions);
  

  console.log(clickSubmit);
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

  const getPanelValue = (searchText) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

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
          item.price = e;
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

  const handleSubmitButton = async (event) => {
    event.preventDefault();
    console.log(items);
    const username = Auth.getProfile().data.username;
    console.log(username);
    try {
      const { data } = await addList({
        variables: {
          username: username,
          lists:items
        },
      });
      deleteItems();
      // window.location.reload();
      refetch()
      // handleClickSubmit();
    } catch (err) {
      console.error(err);
    }
  };

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
          <Col className="gutter-row title-col" span={2}>
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
          <Col className="gutter-row title-col" span={5}>
            <Divider type="vertical" className="title-divider" />
            <div>
              <Text strong className="title-text">
                Action
              </Text>
            </div>
          </Col>
        </Row>
      </div>
      {items.length ? (
        <>
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
                  <Col className="gutter-row content-col-name" span={2}>
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
                      <AutoComplete
                        defaultValue={item.unit}
                        options={unitOptions}
                        style={{
                          width: 80,
                        }}
                        onSelect={handleUnitChange(index)}
                        onSearch={(text) => setOptions(getPanelValue(text))}
                        onChange={handleUnitChange(index)}
                        placeholder="control mode"
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row content-col" span={4}>
                    <Divider type="vertical" className="content-divider" />
                    <div>
                      <AutoComplete
                        defaultValue={item.shop}
                        options={shopOptions}
                        style={{
                          width: 120,
                        }}
                        onSelect={handleShopChange(index)}
                        onSearch={(text) => setOptions(getPanelValue(text))}
                        onChange={handleShopChange(index)}
                        placeholder="control mode"
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row content-col" span={3}>
                    <Divider type="vertical" className="content-divider" />
                    <div>
                      <InputNumber
                        value={item.price}
                        onChange={handlePriceChange(index)}
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row content-col-name" span={3}>
                    <Divider type="vertical" className="content-divider" />
                    <div className="">
                      {item.quantity
                        ? (item.quantity * item.price).toFixed(2)
                        : 0}
                    </div>
                  </Col>

                  <Col className="gutter-row content-col" span={5}>
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
                                backgroundColor: "rgb(28, 119, 177)",
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
          <div className="submit-btn-container">
            <Button type="primary" size={size} onClick={handleSubmitButton} className="button">
              Submit
            </Button>
          </div>
        </>
      ) : (
        <Empty className="empty-list" description={false} />
      )}
    </div>
  );
};

export default ShoppingList;
