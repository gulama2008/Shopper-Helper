import React, { useEffect } from "react";
import { Radio, Divider } from "antd";
import { useState } from "react";
import "../../../styles/Statistics.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart, Bar } from "recharts";

import {
  groupingListsByDate,
  groupingListsByMonth,
  summaryExpense,
  sortingListsAscending,
} from "../../../utils/functions";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export default function Statistics(props) {
  const { userLists } = props;
  const groupedListsByDate = groupingListsByDate(userLists);
  sortingListsAscending(groupedListsByDate);
  const groupedListsByMonth = groupingListsByMonth(userLists);
  const dailyExpenseLists = summaryExpense(groupedListsByDate);
  const monthlyExpenseLists = summaryExpense(groupedListsByMonth);
  const [valueDaily, setValueDaily] = useState(1);
  const [valueMonthly, setValueMonthly] = useState(1);
  const [resultDataDaily, setResultDataDaily] = useState("");
  const [resultDataMonthly, setResultDataMonthly] = useState("");

  const handleChangeDaily = (e) => {
    console.log("radio checked", e.target.value);
    setValueDaily(e.target.value);
  };

  const handleChangeMonthly = (e) => {
    console.log("radio checked", e.target.value);
    setValueMonthly(e.target.value);
  };

  //change graph when clicking different radio options
  useEffect(() => {
    if (valueDaily === 1) {
      const date3m = dayjs().subtract(3, "month");
      const resultDataDaily = dailyExpenseLists.filter((e) => {
        return dayjs(e.date, "DD-MM-YYYY") >= date3m;
      });
      setResultDataDaily(resultDataDaily);
    } else if (valueDaily === 2) {
      const date6m = dayjs().subtract(6, "month");
      const resultDataDaily = dailyExpenseLists.filter((e) => {
        return dayjs(e.date, "DD-MM-YYYY") >= date6m;
      });
      setResultDataDaily(resultDataDaily);
    } else {
      setResultDataDaily(dailyExpenseLists);
    }
  }, [valueDaily]);

  //change graph when clicking different radio options
  useEffect(() => {
    if (valueMonthly === 1) {
      const date3m = dayjs().subtract(6, "month");
      const resultDataMonthly = monthlyExpenseLists.filter((e) => {
        return dayjs(e.date, "MM-YYYY") >= date3m;
      });
      setResultDataMonthly(resultDataMonthly);
    } else if (valueMonthly === 2) {
      const date6m = dayjs().subtract(12, "month");
      const resultDataMonthly = monthlyExpenseLists.filter((e) => {
        return dayjs(e.date, "MM-YYYY") >= date6m;
      });
      setResultDataMonthly(resultDataMonthly);
    } else {
      setResultDataMonthly(monthlyExpenseLists);
    }
  }, [valueMonthly]);

  return (
    <>
      <div className="daily-total">
        <Divider orientation="left">Daily Shopping Expenses</Divider>
        <Radio.Group
          onChange={handleChangeDaily}
          value={valueDaily}
          className="date-range-radio"
        >
          <Radio value={1}>Last 3 months</Radio>
          <Radio value={2}>Last 6 months</Radio>
          <Radio value={3}>All</Radio>
        </Radio.Group>
        <LineChart
          width={500}
          height={300}
          data={resultDataDaily}
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
        </LineChart>
      </div>
      <Divider orientation="left">Total Shopping Expenses By Month</Divider>
      <div>
        <Radio.Group
          onChange={handleChangeMonthly}
          value={valueMonthly}
          className="date-range-radio"
        >
          <Radio value={1}>Last 6 months</Radio>
          <Radio value={2}>Last 12 months</Radio>
          <Radio value={3}>All</Radio>
        </Radio.Group>
        <BarChart
          width={500}
          height={300}
          data={resultDataMonthly}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalExpense" fill="#8884d8" />
        </BarChart>
      </div>
    </>
  );
}
