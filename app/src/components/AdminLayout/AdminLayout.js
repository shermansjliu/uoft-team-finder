import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Row, Layout, Space, Button, Typography } from "antd";
import "./style.css";
import "../../App.css";
import { Link } from "react-router-dom";
import {logout} from "../Login/action";


const { Sider, Content } = Layout;
const { Title } = Typography;

// to use this module call <AdminLayout title={} content={} appState={}>

class AdminLayout extends React.Component {
  state = {users:[], courses:[], collapsed: false,}
  toggleCollapsed = () => {
    this.setState({collapsed: !this.state.collapsed});
  };
  render() {
    const { title, content, app, users, courses } = this.props;

    const numUsers = users.length
    const numCourses =courses.length
    const numAdmin = users.filter(user => user.admin).length
    const numNormalUser = numUsers - numAdmin
    const cscCourses =courses.filter(course => course.courseCode.includes("Csc")).length
    const ecoCourses =courses.filter(course => course.courseCode.includes("Eco")).length
    const matCourses =courses.filter(course => course.courseCode.includes("Mat")).length
    return (
      <div>
        <Layout className="theme-content">
          <Sider
              className="sideBar theme-background-color"
              width={300}
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.toggleCollapsed}
              collapsedWidth={0}
          >
            <div>
              <Title level={2} className={"admin"}>
                {" "}
                Admin{" "}
              </Title>
              <Title level={2}>
                <Link to={"/AdminUsers"}>
                  <Button type="primary" className="round" size="large">
                    All Users: {numUsers}
                  </Button>
                </Link>
              </Title>
              <Space direction="vertical">
                <Title level={5}> Normal Users: {numNormalUser}</Title>
                <Title level={5}> Admin: {numAdmin}</Title>
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
                    All Courses: {numCourses}
                  </Button>
                </Link>
              </Title>
              <Space direction="vertical">
                <Title level={5}> Csc: {cscCourses}</Title>
                <Title level={5}> Mat: {matCourses}</Title>
                <Title level={5}> Eco: {ecoCourses}</Title>
              </Space>

              {/*<Title className="totalTeams" level={2}>*/}
              {/*  /!*<Link to={"/AdminTeams"}>*!/*/}
              {/*  <Button*/}
              {/*    type="primary"*/}
              {/*    className="round"*/}
              {/*    size="large"*/}
              {/*  >*/}
              {/*    /!*All Teams: {this.state.teams.length}*!/*/}
              {/*    /!*All Teams:  {appState.teams.length}*!/*/}
              {/*    All Teams: {10}*/}
              {/*  </Button>*/}
              {/*  /!*</Link>*!/*/}
              {/*</Title>*/}
            </div>

            <footer>
              <Link to={"/"}>
                <div className={"admin-footer"}>
                  <Button shape="circle"
                          icon={<LogoutOutlined className="sb-btn"/>}
                          onClick={() => logout(app)}/>
                 Log Out
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
