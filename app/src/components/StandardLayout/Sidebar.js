import React, { Component } from "react";
import { Layout, Image } from "antd";
import { Link } from "react-router-dom";
import { LogoutOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";
import profilePic from "./profile_pic.jpg";
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
        width={120}
        collapsible={true}
        collapsedWidth={0}
      >
        <div className="sb-profilePictureContainer">
          <Image src={profilePic} alt="profile picture" />
        </div>
        <div className="sideBarButtons">
          <Link to={"/Profile"}>
            <UserOutlined className="sb-btn" />
          </Link>
          <Link to={"/Home"}>
            <TeamOutlined className="sb-btn" />
          </Link>
          <Link to={"/"}>
            <LogoutOutlined className="sb-btn" />
          </Link>
        </div>
      </Sider>
    );
  }
}
