import { Button, Checkbox, Form, Input,Alert } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css"

const Login = (props) => {
  const [formState, setFormState] = useState();
  const [login, { error, data }] = useMutation(LOGIN_USER);
  //state which when wrong username or password, render error message
  const [loginUnsuccessful, setLoginUnsuccessful] = useState(false);

  // update state based on form input changes
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      username: value,
    });
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setFormState({
      ...formState,
      password: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    setLoginUnsuccessful(false);
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
        Auth.login(data.login.token);
    } catch (e) {
      setLoginUnsuccessful(true);
      console.error(e);
    }
  };

  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <div className="login-title">Login</div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Item>
        {loginUnsuccessful ? (
          <Alert
            message="You have entered incorrect username or password"
            type="error"
          />
        ) : (
          <></>
        )}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="remember-me">Remember me</Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleFormSubmit}
          >
            Log in
          </Button>
          <div className="register">
            Or{" "}
            <Link to={"/signup"} className="register-now">
              Register now!
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
    
export default Login;
