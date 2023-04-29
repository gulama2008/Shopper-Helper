import React, { useEffect } from "react";
import { Radio } from "antd";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, Cell, PieChart, Pie } from "recharts";

import { groupingLists, summaryExpense,sortingLists } from "../../../utils/functions";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
export default function Statistics(props) {
  const { userLists } = props;
  const groupedLists = groupingLists(userLists);
  const expenseSummaryLists = summaryExpense(groupedLists);
  const sortedExpenseSummaryLists = sortingLists(expenseSummaryLists);
  const data = expenseSummaryLists;
  const [value, setValue] = useState(1);
  const [resultData, setResultData] = useState("");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === 1) {
      const date3m = dayjs().subtract(3, "month");
      const resultData = data.filter((e) => { 
        return dayjs(e.date, "DD-MM-YYYY") >= date3m;
      })
      setResultData(resultData);
    } else if (value === 2) {
      const date6m = dayjs().subtract(6, "month");
      const resultData = data.filter((e) => {
        return dayjs(e.date, "DD-MM-YYYY") > date6m;
      });
      setResultData(resultData);
    } else { 
      setResultData(data);
    }
  }, [value]);

  const innerdata = [
    { name: "C1", value: 100 },
    { name: "C2", value: 20 },
    { name: "C3", value: 300 },
    { name: "C4", value: 90 },
  ];

  const outerdata = [
    { name: "P1", value: 10 },
    { name: "P2", value: 100 },
    { name: "P3", value: 20 },
    { name: "P4", value: 30 },
    { name: "P5", value: 90 },
  ];

const test = [
  {
    name: "A",
    c1: 3000,
    c2: 2400,
    c2: 1400,
  },
  {
    name: "B",
    c1: 2000,
    c2: 1000,
    c3: 2210,
  },
  {
    name: "C",
    c1: 1400,
    c2: 10100,
    c3: 1290,
  },
  {
    name: "D",
    c1: 3120,
    c2: 4400,
    c3: 1000,
  },
];
  return (
    <>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Last 3 months</Radio>
          <Radio value={2}>Last 6 months</Radio>
          <Radio value={3}>All</Radio>
        </Radio.Group>
        <LineChart
            width={500}
            height={300}
            data={resultData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="totalExpense"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
      </div>
      <div>
        <LineChart
          width={500}
          height={300}
          data={test}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="c1"
            stroke="red"
            activeDot={{ r: 12 }}
          />
          <Line type="monotone" dataKey="c2" stroke="green" />
        </LineChart>
      </div>
      {/* <>
        
        <ResponsiveContainer width="60%" height="40%">
          
        </ResponsiveContainer> */}
      {/* </> */}
    </>
  );
}
