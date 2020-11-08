import React from 'react'
import {LogoutOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

import  {Layout} from "antd";
import "./index.css"
import "../../App.css";
import {Link} from "react-router-dom";

const {Sider, Content} = Layout;

class StandardLayout extends React.Component {

    state = {}


    render() {
        const {image,title, content} = this.props;
        return (
            <div>
                <Layout className="theme-content">
                    <Sider className="sideBar theme-background-color" width={100} collapsible={true} collapsedWidth={0}>
                        <div className="profilePictureContainer">
                            <img className="profilePicture" src={image} alt={""}/>
                        </div>
                        <div className="sideBarButtons" >
                            <Link to={'/Profile'}>
                                <UserOutlined className={"btn-color"}/>
                            </Link>
                            <Link to={'/Home'}>
                                <TeamOutlined className={"btn-color"}/>
                            </Link>
                            <Link to={'/'}>
                                <LogoutOutlined className={"btn-color"}/>
                            </Link>
                        </div>
                    </Sider>
                    <Content  className="content">
                                <div className={"text-center"}>
                                    <h1 className={"text-center"}>{title}</h1>
                                </div>
                        {content}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default StandardLayout