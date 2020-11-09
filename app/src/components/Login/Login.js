import React from "react";
import { Button, Input, Row, Col, Card, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./styles.css";
import { register, login } from "./action.js";
import { withRouter } from "react-router-dom";
import { forgetPWD } from "./action";

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autoLogin: false,
      user: null,
      userName: "",
      userPassword: "",
      msg: "",
      msgColor: "red",
      users: [
        { username: "user", password: "user", admin: false },
        { username: "user2", password: "user2", admin: false },
        { username: "admin", password: "admin", admin: true },
      ],
    };
  }

  render() {
    return (
      <div className="login-wrap">
        <div className="padding" />
        <Row align="center">
          <span className={this.state.msgColor}>{this.state.msg}</span>
        </Row>
        <Row align="center">
          <Col>
            <Card title="Login" className="login-card">
              <Space direction="vertical" size="middle">
                <Input
                  size="large"
                  name="userName"
                  placeholder="username"
                  prefix={<UserOutlined />}
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                />
                <Input
                  type="password"
                  size="large"
                  placeholder="userpassward"
                  name="userPassword"
                  prefix={<LockOutlined />}
                  value={this.state.userPassword}
                  onChange={this.handleInputChange}
                />
              </Space>
              <Space className="btnRow">
                <Button
                  className="btn"
                  type="primary"
                  size={"large"}
                  onClick={() => login(this)}
                >
                  Login
                </Button>
                <Button
                  className="btn"
                  type="primary"
                  size={"large"}
                  onClick={() => register(this)}
                >
                  Sign up
                </Button>
              </Space>
              <br />
              <a className="forget" onClick={() => forgetPWD(this)}>
                Don't remember the password?
              </a>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // console.log(value);
    this.setState({
      [name]: value,
    });
  };
}

export default withRouter(LoginView);
