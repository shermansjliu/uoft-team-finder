import React from 'react'
import profPic from "../team_view/radiohead.jpg";
import {LogoutOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {Layout} from "antd";
import "./index.css"
import "../../App.css";

const {Sider, Content} = Layout;

class StandardLayout extends React.Component {

    state = {}

    render() {

        return (
            <div>
                <Layout className="teamViewContainer">
                    <Sider className="sideBar theme-background-color" width={100} collapsible={true} collapsedWidth={0}>
                        <div className="profilePictureContainer">
                            <img className="profilePicture" src={profPic} alt={""}/>
                        </div>
                        <div className="sideBarButtons">
                            <UserOutlined/>
                            <TeamOutlined/>
                            <LogoutOutlined/>
                        </div>
                    </Sider>
                    <Content>

                    </Content>
                </Layout>
            </div>
        )
    }
}

export default StandardLayout