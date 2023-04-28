import {
  Form,
  Button,
  InputNumber,
  Popconfirm,
  Table,
  Typography,
  Input,
  Select,
} from "antd";

import { PlusOutlined } from "@ant-design/icons";
import { Space, Tag, Tooltip, theme } from "antd";
import { useEffect, useRef, useState } from "react";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode =
    inputType === "number" ? (
      <InputNumber />
    ) : inputType === "text" ? (
      <Input />
    ) : (
      <Select />
    );
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const Items = (props) => {
  const { userItems, userShops } = props;
  console.log(userItems);
  console.log(userShops);

  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState(userItems);
  const [count, setCount] = useState(2);
  const [data, setData] = useState(userItems);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.name === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      quantity: "",
      unit: "",
      shop: "",
      price: "",
      ...record,
    });
    setEditingKey(record.name);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.name);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "20%",
      editable: true,
    },
    {
      title: "quantity",
      dataIndex: "quantity",
      width: "5%",
      editable: true,
    },
    {
      title: "unit",
      dataIndex: "unit",
      width: "5%",
      editable: true,
    },
    {
      title: "shop",
      dataIndex: "shop",
      width: "15%",
      editable: true,
    },
    {
      title: "price",
      dataIndex: "price",
      width: "5%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      width: "15%",
      render: (_, record) => {
        const editable = isEditing(record);
        return (
          <>
            {editable ? (
              <span>
                <Typography.Link
                  onClick={() => save(record.name)}
                  style={{
                    marginRight: 8,
                  }}
                >
                  Save
                </Typography.Link>
                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <Typography.Link
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                Edit
              </Typography.Link>
            )}
            <a
              style={{
                marginLeft: 8,
              }}
            >
              Delete
            </a>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType:
          col.dataIndex === "quantity"
            ? "number"
            : col.dataIndex === "price"
            ? "number"
            : col.dataIndex === "name"
            ? "text"
            : "select",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  const handleAdd = () => {
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  return (
    <Form form={form} component={false}>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};
export default Items;