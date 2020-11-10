import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Row, Layout, Space, Button, Typography } from "antd";
import "./style.css";
import "../../App.css";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;
const { Title } = Typography;

// to use this module call <AdminLayout title={} content={} appState={}>

class AdminLayout extends React.Component {
  render() {
    const { title, content, appState } = this.props;
    return (
      <div>
        <Layout className="theme-content">
          <Sider className="sideBar theme-background-color" width={300}>
            <div>
              <Title level={2} className={"admin"}>
                {" "}
                Admin{" "}
              </Title>
              <Title level={2}>
                <Link to={"/AdminUsers"}>
                  <Button type="primary" className="round" size="large">
                    {/*All Users: {this.state.users.length}*/}
                    {/*All Users:  {appState.users.length}*/}
                    All Users: {3}
                  </Button>
                </Link>
              </Title>
              <Space direction="vertical">
                <Title level={5}> Normal Users: {4}</Title>
                <Title level={5}> Admin: {1}</Title>
              </Space>

              <Title level={2}>
                <Link
                  to={{
                    pathname: "/Admin",
                    state: {
                      user: {
                        username: "admin",
                        password: "admin",
                        admin: true,
                      },
                    },
                  }}
                >
                  <Button type="primary" className="round" size="large">
                    {/*All Courses: {this.state.courses.length}*/}
                    {/*All Courses:  {appState.courses.length}*/}
                    All Courses: {4}
                  </Button>
                </Link>
              </Title>
              <Space direction="vertical">
                <Title level={5}> Csc: 5</Title>
                <Title level={5}> Mat: 5</Title>
                <Title level={5}> Eco: 5</Title>
              </Space>

              <Title className="totalTeams" level={2}>
                {/*<Link to={"/AdminTeams"}>*/}
                <Button
                  type="primary"
                  className="round"
                  size="large"
                >
                  {/*All Teams: {this.state.teams.length}*/}
                  {/*All Teams:  {appState.teams.length}*/}
                  All Teams: {10}
                </Button>
                {/*</Link>*/}
              </Title>
            </div>

            <footer>
              <Link to={"/"}>
                <div className={"admin-footer"}>
                  <LogoutOutlined className={"btn-color"} /> Log Out
                </div>
              </Link>
            </footer>
          </Sider>

          <Content className="content">
            <div className={"text-center"}>
              <Row>
                <h1>{title}</h1>
              </Row>
            </div>
            {content}
          </Content>
        </Layout>
      </div>
    );
  }
}

export default AdminLayout;
