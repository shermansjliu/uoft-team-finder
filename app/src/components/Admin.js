import React, { Component } from "react";
import { Layout, Space, Typography } from "antd";
import HomeViewFooter from "./Course/CourseFooter";
import { AdminGrid } from "./AdminGrid/AdminGrid";
import { withRouter } from "react-router-dom";
import "../App.css";

const { Sider, Content } = Layout;
const { Title } = Typography;

class Admin extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      adminName: "AdminGrid",
      teams: [
        {
          teamName: "The John Wicks",
          members: [
            { userID: "DavidID", name: "David" },
            { userID: "ShermanID", name: "Sherman" },
            { userID: "QuincyID", name: "Quincy" },
            { userID: "JesseID", name: "Jesse" },
          ],
          capacity: 4,
        },
        {
          teamName: "BA Forever",
          members: [],
          capacity: 4,
        },
      ],
      users: [],
    };
  }

  render() {
    if (this.props.location.state) {
      return (
        <div>
          <Layout className="homeViewContainer">
            <Sider>
              <div className="homeViewSideMenu">
                <div>
                  <Title className="classTitle" level={2}>
                    {this.state.adminName}
                  </Title>
                  <Title className="totalTeams" level={3}>
                    {" "}
                    State: {this.props.location.state.user.username}
                  </Title>
                  <Space direction="vertical">
                    <Title level={5}> Project: 5</Title>
                    <Title level={5}> Study: 5</Title>
                  </Space>
                  <Title level={3}> Users: {this.state.users.length}</Title>
                </div>
                <HomeViewFooter />
              </div>
            </Sider>
            <Content className="homeViewContent">
              <AdminGrid />
            </Content>
          </Layout>
        </div>
      );
    } else {
      return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
          <h1> You do not have permission to this page</h1>
        </div>
      );
    }
  }
}

export default withRouter(Admin);
