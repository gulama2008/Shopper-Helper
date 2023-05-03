import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css"

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleUsernameChange = (event) => {
    const value  = event.target.value;
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
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="remember-me">Remember me</Checkbox>
          </Form.Item>

          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
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
            Or <Link to={"/signup"} className="register-now">Register now!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
  // return (
  //   <div className="login-container">
  //     <Form
  //       className="login-form"
  //       name="normal_login"
  //       labelCol={{
  //         span: 8,
  //       }}
  //       wrapperCol={{
  //         span: 16,
  //       }}
  //       style={{
  //         maxWidth: 800,
  //       }}
  //       initialValues={{
  //         remember: true,
  //       }}
  //       onFinish={onFinish}
  //       onFinishFailed={onFinishFailed}
  //       autoComplete="off"
  //     >
  //       <div className="login-title">Login</div>
  //       <Form.Item
  //         // label="Username"
  //         name="username"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input your username!",
  //           },
  //         ]}
  //       >
  //         <Input
  //           prefix={<UserOutlined className="site-form-item-icon" />}
  //           placeholder="Username"
  //           onChange={handleUsernameChange}
  //         />
  //       </Form.Item>

  //       <Form.Item
  //         // label="Password"
  //         name="password"
  //         rules={[
  //           {
  //             required: true,
  //             message: "Please input your password!",
  //           },
  //         ]}
  //       >
  //         <Input
  //           prefix={<LockOutlined className="site-form-item-icon" />}
  //           type="password"
  //           placeholder="Password"
  //           onChange={handlePasswordChange}
  //         />
  //       </Form.Item>

  //       <Form.Item
  //       // name="remember"
  //       // valuePropName="checked"
  //       // wrapperCol={{
  //       //   offset: 8,
  //       //   span: 16,
  //       // }}
  //       >
  //         <Form.Item name="remember" valuePropName="checked" noStyle>
  //           <Checkbox>Remember me</Checkbox>
  //         </Form.Item>
  //         <Form.Item
  //         // wrapperCol={{
  //         //   offset: 8,
  //         //   span: 16,
  //         // }}
  //         >
  //           <Button
  //             type="primary"
  //             htmlType="submit"
  //             onClick={handleFormSubmit}
  //             className="login-form-button"
  //           >
  //             Log in
  //           </Button>
  //           <div className="register">
  //             Or <Link to={"/signup"}>Register now!</Link>
  //           </div>
  //         </Form.Item>
  //       </Form.Item>
  //     </Form>
  //   </div>
  // );
};
    
export default Login;
