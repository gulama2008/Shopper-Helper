import React, { useEffect, useState } from "react";
import { Button, Collapse } from "antd";
import { Table, Typography } from "antd";
import { DatePicker, Space, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { groupingListsByDate, sortingLists } from "../../../utils/functions";
import "../../../styles/HistoricalList.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Search } = Input;
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

export default function HistoricalList(props) {
  const { userLists } = props;
  
  //change userLists into new array of objs with different property date and lists
  const groupArrays = groupingListsByDate(userLists);
  console.log(groupArrays);
  
  const [resultList, setResultList] = useState(groupArrays);
  const [ dateRange, setDateRange ] = useState([]);
  console.log(userLists);

  const handleDateRangeChange = (date,dateString) => { 
    setDateRange([dateString[0], dateString[1]]);
  }

  const handleShowAllButtonClick = (e) => { 
    e.preventDefault(e);
    setResultList(groupArrays);
  }

  const handleSearchButtonClick = (e) => { 
    e.preventDefault();
    const resultArray = groupArrays.filter((element) => { 
      console.log(element.date);
      const elementDate = dayjs(element.date,"DD-MM-YYYY");
      const dateRangeStart = dayjs(dateRange[0], "DD-MM-YYYY");
      const dateRangeFinish = dayjs(dateRange[1], "DD-MM-YYYY");
      return elementDate >= dateRangeStart && elementDate <= dateRangeFinish;
    })
    console.log(resultArray);
    setResultList(resultArray);
  }
  console.log(dateRange);
  

  return (
    <div>
      <div>
        <Space direction="vertical" size={12}>
          <Button type="primary" onClick={handleShowAllButtonClick}>
            Show All Lists
          </Button>

          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "inline-block"}}>
              Or choose from the Date Range:
            </div>
            <RangePicker
              format="DD/MM/YYYY"
              onChange={handleDateRangeChange}
              style={{ display: "inline-flex",marginLeft:"20px" }}
            />
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={handleSearchButtonClick}
              style={{ display: "inline-block", marginLeft: "20px" }}
            >
              Search
            </Button>
          </div>
        </Space>
      </div>
      {resultList.map((e) => {
        return (
          <div>
            <Collapse defaultActiveKey={""}>
              <Panel header={e.date} key={e.date}>
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

