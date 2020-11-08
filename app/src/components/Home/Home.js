import React, {Component} from "react";
import {Layout, Typography, Space} from 'antd'
import CourseGrid from '../CourseGrid/CourseGrid'
import './index.css';
import '../../App.css'
import HomeViewFooter from "../CourseViewFooter";

const {Sider, Content} = Layout;
const {Title} = Typography;


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
}

export default Home;


