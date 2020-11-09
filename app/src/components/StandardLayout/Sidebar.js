import React, { Component } from "react";
import { Layout, Image, Tooltip } from "antd";
import { Link } from "react-router-dom";
import {
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "./index.css";
import profilePic from "./profile_pic.jpg";
export default class Sidebar extends Component {
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
          <Link>
            <Tooltip placement="right" title="New Team">
              <PlusOutlined className="sb-btn" />
            </Tooltip>
          </Link>

          <Link to={"/Profile"}>
            <Tooltip placement="right" title="Profile">
              <UserOutlined className="sb-btn" />
            </Tooltip>
          </Link>
          <Link to={"/Home"}>
            <Tooltip placement="right" title="My Courses">
              <TeamOutlined className="sb-btn" />
            </Tooltip>
          </Link>
          <Link to={"/"}>
            <Tooltip placement="right" title="Logout">
              <LogoutOutlined className="sb-btn" />
            </Tooltip>
          </Link>
        </div>
      </Sider>
    );
  }
}
