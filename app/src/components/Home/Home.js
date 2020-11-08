import React, {Component} from "react";
import {Layout, Typography, Space} from 'antd'
import CourseGrid from '../CourseGrid/CourseGrid'
import './index.css';
import '../../App.css'
import HomeViewFooter from "../CourseViewFooter";

const {Sider, Content} = Layout;
const {Title} = Typography;


class Home extends Component {
    state = {
        className: "CSC236",
        teams: [
            {
                teamName: "The John Wicks",
                members: [
                    {userID: "DavidID", name: "David"},
                    {userID: "ShermanID", name: "Sherman"},
                    {userID: "QuincyID", name: "Quincy"},
                    {userID: "JesseID", name: "Jesse"},
                ],
                capacity: 4,
            },
            {
                teamName: "BA Forever",
                members: [],
                capacity: 4,
            },
        ],
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        console.log(this.props)
        return (
            <div>
                <Layout className="homeViewContainer">
                    <Sider>
                        <div className="homeViewSideMenu">
                            <div>
                                <Title className="classTitle" level={2}>
                                    {this.state.className}
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
}

export default Home;


