import React from 'react'
import {LogoutOutlined, SettingOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Col, Row, Layout, Space, Button, Typography} from "antd";
import "./style.css"
import "../../App.css";
import {Link} from "react-router-dom";
import {Group, User} from "grommet-icons";
import bkimg from "../../img/home-books.jpg";

const {Sider, Content} = Layout;
const {Title} = Typography;

class AdminLayout extends React.Component {

    render() {
        const {title, content, appState} = this.props;
        return (
            <div>
                <Layout className="theme-content">
                    <Sider className="sideBar theme-background-color" width={300}>
                        <div>
                            <Title level={2} className={"admin"}> Admin </Title>
                            <Title level={2}>
                                <Link to={"/AdminUsers"}>
                                    <Button type="primary" className="round" size="large">
                                        {/*All Users: {this.state.users.length}*/}
                                        All Users:  {appState.users.length}
                                    </Button>
                                </Link>
                            </Title>
                            <Space direction="vertical">
                                <Title level={5}> Normal Users: {0}</Title>
                                <Title level={5}> Admin: {1}</Title>
                            </Space>

                            <Title level={2}>
                                <Link to={"/Admin"}>
                                    <Button type="primary" className="round" size="large">
                                        {/*All Courses: {this.state.courses.length}*/}
                                        All Courses:  {appState.courses.length}
                                    </Button>
                                </Link>

                            </Title>
                            <Space direction="vertical">
                                <Title level={5}> Csc: 5</Title>
                                <Title level={5}> Mat: 5</Title>
                                <Title level={5}> Eco: 5</Title>
                            </Space>

                            <Title className="totalTeams" level={2}>
                                <Link to={"/AdminTeams"}>
                                    <Button type="primary" className="round" size="large">
                                        {/*All Teams: {this.state.teams.length}*/}
                                        All Teams:  {appState.teams.length}
                                    </Button>
                                </Link>
                            </Title>
                            <Space direction="vertical">
                                <Title level={5}> Project: 5</Title>
                                <Title level={5}> Study: 5</Title>
                            </Space>
                        </div>

                        <footer >
                            <Link to={'/'}>
                                <div className={"admin-footer"}>
                                    <LogoutOutlined className={"btn-color"}/> Log Out
                                </div>
                            </Link>
                        </footer>

                    </Sider>

                    <Content className="content">
                        <div className={"text-center"}>
                            <Row><h1>{title}</h1></Row>

                        </div>
                        {content}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default AdminLayout