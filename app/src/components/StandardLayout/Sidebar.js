import React, { Component } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { image } = this.props;
    const { Sider } = Layout;
    return (
      <Sider
        className="sideBar theme-background-color"
        width={100}
        collapsible={true}
        collapsedWidth={0}
      >
        <div className="profilePictureContainer">
          <img className="profilePicture" src={image} alt={""} />
        </div>
        <div className="sideBarButtons">
          <Link to={"/Profile"}>
            <UserOutlined className={"btn-color"} />
          </Link>
          <Link to={"/Home"}>
            <TeamOutlined className={"btn-color"} />
          </Link>
          <Link to={"/"}>
            <LogoutOutlined className={"btn-color"} />
          </Link>
        </div>
      </Sider>
    );
  }
}
