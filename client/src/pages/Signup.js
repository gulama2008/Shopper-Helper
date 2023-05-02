import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import "../styles/Signup.css";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 10,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 10,
    },
  },
};
const Signup = () => {
  const [form] = Form.useForm();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      username: value,
    });
    console.log(formState);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      password: value,
    });
    console.log(formState);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      email: value,
    });
    console.log(formState);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data);

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  // const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  // const validatePassword = (password) => {};
  return (
    <div className="register-container">
      <Form
        className="register-form"
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="username"
          label="Username"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
            // {
            //   unique: true,
            //   message: "This username already exist!",
            //   whitespace: true,
            // },
          ]}
        >
          <Input onChange={handleUsernameChange} />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input onChange={handleEmailChange} />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 3,
              message: "Must be at least 8 characters!",
            },
          ]}
          hasFeedback
        >
          <Input.Password onChange={handlePasswordChange} />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleButtonClick}
          >
            Register
          </Button>
          <div className="login">
            Or <Link to={"/login"}>Login now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Signup;
