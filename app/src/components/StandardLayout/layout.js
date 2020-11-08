import React from 'react'
import {LogoutOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import  {Col,Row,Layout} from "antd";
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
                <Layout className="teamViewContainer">
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
                                    <Row><h1>{title}</h1></Row>

                                </div>
                        {content}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default StandardLayout