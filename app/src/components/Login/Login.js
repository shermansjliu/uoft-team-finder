import React from "react";
import { Button, Input, Row, Col, Card, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./styles.css";
import { register, login } from "./action.js";
import { withRouter } from "react-router-dom";
import Sky from 'react-sky';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push("/");
    this.state = {
      autoLogin: false,
      user: null,
      userName: "",
      userPassword: "",
      msg: "",
      msgColor: "red",

    };
  }

  render() {
    const { app } = this.props
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
                  onClick={() => login(this, app)}
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
              {/*<a className="forget" onClick={() => forgetPWD(this)}>*/}
              {/*  Don't remember the password?*/}
              {/*</a>*/}
            </Card>
          </Col>
        </Row>
        <Sky
            images={{
              /* FORMAT AS FOLLOWS */
              0: "https://image.flaticon.com/icons/svg/141/141073.svg",
              1: "https://image.flaticon.com/icons/svg/141/141070.svg",
              2: "https://image.flaticon.com/icons/svg/141/141009.svg",
              3: "https://image.flaticon.com/icons/svg/140/140993.svg",
              4: "https://image.flaticon.com/icons/svg/141/141106.svg",
              5: "https://image.flaticon.com/icons/svg/141/141015.svg",
              6: "https://image.flaticon.com/icons/svg/141/141099.svg",
              7: "https://image.flaticon.com/icons/svg/141/141008.svg",
              8: "https://image.flaticon.com/icons/svg/141/141036.svg"
            }}
            how={130} /* Pass the number of images Sky will render chosing randomly */
            time={40} /* time of animation */
            size={'100px'} /* size of the rendered images */
            background={'palettedvioletred'} /* color of background */
        />
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
