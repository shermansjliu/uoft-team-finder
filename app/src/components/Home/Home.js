<<<<<<< HEAD
import React, { Component } from "react";
import { Layout, Menu, Avatar } from "antd";
import Grid from "../Grid/Grid";
import "./index.css";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
=======
import React, {Component} from "react";
import {Layout, Typography, Space} from 'antd'
import CourseGrid from '../CourseGrid/CourseGrid'
import './index.css';
import '../../App.css'
import HomeViewFooter from "../CourseViewFooter";

const {Sider, Content} = Layout;
const {Title} = Typography;
>>>>>>> 8f378ab4c2fd3ea5c14feaff5f328f6bdc806cab

import "../../App.css";

<<<<<<< HEAD
const { Header, Sider, Content } = Layout;

export default class Home extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<UserOutlined />}
              src=""
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Grid />
          </Content>
        </Layout>
      </Layout>
    );
  }
=======
class Home extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <Layout className="homeViewContainer">
                    <Sider>
                        <div className="homeViewSideMenu">
                            <div>
                                <Title className="classTitle" level={2}>
                                    {"Home"}
                                </Title>
                                <Title className="totalTeams" level={3}>
                                    {" "}
                                    Teams: 10
                                </Title>

                                <Space direction="vertical">
                                    <Title level={5}> Project: 5</Title>
                                    <Title level={5}> Study: 5</Title>
                                </Space>
                            </div>
                            <HomeViewFooter/>
                        </div>
                    </Sider>
                    <Content hasSider={true} className="homeViewContent">

                        <CourseGrid/>
                    </Content>
                </Layout>
            </div>
        );
    }
>>>>>>> 8f378ab4c2fd3ea5c14feaff5f328f6bdc806cab
}
